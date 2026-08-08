import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  // In-memory rate limiting map
  const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

  // Simple IP rate limiter middleware
  const rateLimiter = (req: Request, res: Response, next: () => void) => {
    const ip = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown';
    const now = Date.now();
    const windowMs = 15 * 60 * 1000; // 15 minutes
    const maxRequests = 10;

    const record = rateLimitMap.get(ip);
    if (!record || now > record.resetTime) {
      rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
      return next();
    }

    if (record.count >= maxRequests) {
      return res.status(429).json({
        success: false,
        error: 'Too many requests. Please wait a few minutes before submitting again.',
      });
    }

    record.count += 1;
    next();
  };

  // Health check endpoint
  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Project Inquiry & Contact Submission Endpoint
  app.post('/api/inquiry', rateLimiter, async (req: Request, res: Response) => {
    try {
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
      } = req.body;

      // 1. Honeypot check: If honeypot field is filled, silently reject spam bot
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
      if (!email || !emailRegex.test(email.trim())) {
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
        fullName: fullName.trim(),
        email: email.trim().toLowerCase(),
        company: (company || 'N/A').trim(),
        country: (country || 'N/A').trim(),
        services: Array.isArray(services) ? services.join(', ') : (services || 'General Inquiry'),
        industry: (industry || 'Not Specified').trim(),
        projectStage: (projectStage || 'Planning').trim(),
        description: description.trim(),
        budget: (budget || 'Not Specified').trim(),
        timeline: (timeline || 'Not Specified').trim(),
        preferredContact: (preferredContact || 'Email').trim(),
        attachmentsCount: Array.isArray(attachments) ? attachments.length : 0,
        pageUrl: (pageUrl || '/contact').trim(),
        utmSource: utmSource || '',
        utmMedium: utmMedium || '',
        utmCampaign: utmCampaign || '',
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

      // Log structured lead details server-side
      console.log(`[INQUIRY RECEIVED] Sending to ${recipientEmail}:`, emailSubject);
      console.log(emailBodyText);

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
          }
        } catch (resendErr) {
          console.error('Error dispatching via Resend:', resendErr);
        }
      }

      // Respond with confirmation
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
      console.error('Server error handling project inquiry:', err);
      return res.status(500).json({
        success: false,
        error: 'We could not send your inquiry right now due to a server issue. Please try again or reach out directly to info.innovifyxr@gmail.com.',
      });
    }
  });

  // Alias /api/contact to /api/inquiry
  app.post('/api/contact', (req, res) => {
    app._router.handle({ ...req, url: '/api/inquiry' }, res);
  });

  // Vite middleware in dev, static files in prod
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Innovify XR Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
