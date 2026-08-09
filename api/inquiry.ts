import type { VercelRequest, VercelResponse } from '@vercel/node';

// Basic in-memory rate limiter per function instance
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 10;

  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count += 1;
  return true;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Respond with Allowed headers for OPTIONS preflight or non-POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({
      success: false,
      error: `Method ${req.method} Not Allowed`,
    });
  }

  try {
    const clientIp =
      (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
      (req.headers['x-real-ip'] as string) ||
      'unknown';

    if (!checkRateLimit(clientIp)) {
      return res.status(429).json({
        success: false,
        error: 'Too many requests. Please wait a few minutes before submitting again.',
      });
    }

    const {
      fullName,
      email,
      company,
      country,
      services,
      industry,
      projectStage,
      description,
      budget,
      timeline,
      preferredContact,
      attachments,
      consent,
      hp_field, // Honeypot field for anti-spam
      pageUrl,
      utmSource,
      utmMedium,
      utmCampaign,
    } = req.body || {};

    // 1. Honeypot check: If honeypot field is filled, silently return success
    if (hp_field) {
      return res.status(200).json({
        success: true,
        message: 'Thank you. Your inquiry has been logged successfully.',
      });
    }

    // 2. Server-side Validation
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid full name.',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(String(email).trim())) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.',
      });
    }

    if (!description || typeof description !== 'string' || description.trim().length < 10) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a detailed project description (at least 10 characters).',
      });
    }

    if (!consent) {
      return res.status(400).json({
        success: false,
        error: 'You must accept the privacy policy to submit an inquiry.',
      });
    }

    // Sanitize inputs
    const cleanData = {
      fullName: String(fullName).trim(),
      email: String(email).trim().toLowerCase(),
      company: (company ? String(company) : 'N/A').trim(),
      country: (country ? String(country) : 'N/A').trim(),
      services: Array.isArray(services) ? services.join(', ') : (services ? String(services) : 'General Inquiry'),
      industry: (industry ? String(industry) : 'Not Specified').trim(),
      projectStage: (projectStage ? String(projectStage) : 'Planning').trim(),
      description: String(description).trim(),
      budget: (budget ? String(budget) : 'Not Specified').trim(),
      timeline: (timeline ? String(timeline) : 'Not Specified').trim(),
      preferredContact: (preferredContact ? String(preferredContact) : 'Email').trim(),
      attachmentsCount: Array.isArray(attachments) ? attachments.length : 0,
      pageUrl: (pageUrl ? String(pageUrl) : '/contact').trim(),
      utmSource: utmSource ? String(utmSource) : '',
      utmMedium: utmMedium ? String(utmMedium) : '',
      utmCampaign: utmCampaign ? String(utmCampaign) : '',
      submittedAt: new Date().toISOString(),
    };

    // 3. Format structured email notification payload
    const recipientEmail = process.env.COMPANY_NOTIFICATION_EMAIL || 'info.innovifyxr@gmail.com';
    const emailSubject = `New Project Inquiry — ${cleanData.services} — ${cleanData.company || cleanData.fullName}`;

    const emailBodyText = `
==================================================
NEW PROJECT INQUIRY — INNOVIFY XR
==================================================

CONTACT INFORMATION
--------------------------------------------------
Name: ${cleanData.fullName}
Email: ${cleanData.email}
Company: ${cleanData.company}
Country/Region: ${cleanData.country}

PROJECT REQUIREMENTS
--------------------------------------------------
Services Required: ${cleanData.services}
Industry: ${cleanData.industry}
Project Stage: ${cleanData.projectStage}
Budget Expectation: ${cleanData.budget}
Timeline Goal: ${cleanData.timeline}
Preferred Contact Method: ${cleanData.preferredContact}

PROJECT DESCRIPTION
--------------------------------------------------
${cleanData.description}

ATTACHMENTS
--------------------------------------------------
Files Attached: ${cleanData.attachmentsCount} file(s)

ATTRIBUTION & SOURCE
--------------------------------------------------
Source URL: ${cleanData.pageUrl}
UTM Source: ${cleanData.utmSource || 'Direct / None'}
UTM Medium: ${cleanData.utmMedium || 'N/A'}
UTM Campaign: ${cleanData.utmCampaign || 'N/A'}

SUBMISSION METADATA
--------------------------------------------------
Timestamp: ${cleanData.submittedAt}
Recipient Inbox: ${recipientEmail}
==================================================
    `;

    console.log(`[INQUIRY RECEIVED] Sending to ${recipientEmail}:`, emailSubject);

    // 4. Send email if provider credentials are set
    let emailSent = false;
    if (process.env.RESEND_API_KEY) {
      try {
        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: process.env.EMAIL_FROM || 'inquiries@innovifyxr.com',
            to: recipientEmail,
            subject: emailSubject,
            text: emailBodyText,
          }),
        });

        if (resendResponse.ok) {
          emailSent = true;
        } else {
          const resendErrorBody = await resendResponse.text();
          console.error('[RESEND API ERROR]', resendResponse.status, resendErrorBody);
        }
      } catch (resendErr) {
        console.error('Error dispatching via Resend:', resendErr);
      }
    } else {
      console.warn('[INQUIRY WARNING] RESEND_API_KEY is not set in environment variables.');
    }

    return res.status(200).json({
      success: true,
      message: 'Your inquiry has been successfully received. Our engineering team will review your requirements and respond shortly.',
      data: {
        inquiryId: `INQ-${Date.now().toString(36).toUpperCase()}`,
        recipient: recipientEmail,
        emailDispatched: emailSent,
      },
    });
  } catch (err) {
    console.error('Vercel Function Error handling project inquiry:', err);
    return res.status(500).json({
      success: false,
      error: 'We could not send your inquiry right now due to a server issue. Please try again or reach out directly to info.innovifyxr@gmail.com.',
    });
  }
}
