# Sanity CMS Setup & Article Publishing Guide for Innovify XR

This project has Sanity CMS integrated into the Insights hub. You can publish, update, and manage high-ranking SEO articles dynamically through Sanity Studio without modifying or redeploying source code.

---

## 1. Quick Sanity Project Setup (One-Time)

1. Sign up / Log in to [Sanity.io](https://www.sanity.io/).
2. Create a new project or select an existing project named **Innovify XR**.
3. Note your **Project ID** (e.g. `abc123xyz`).
4. Set the dataset name to `production`.
5. Under **API Settings** in Sanity Management Console:
   - Add CORS Origins: `https://innovifyxr.com`, `http://localhost:3000`, `http://localhost:5173`, and your Vercel deployment URL.

---

## 2. Environment Variable Setup in Vercel

In your Vercel Project Settings -> **Environment Variables**, add:

```env
VITE_SANITY_PROJECT_ID=your_sanity_project_id
VITE_SANITY_DATASET=production
```

*(No secret token is required for public content fetching, keeping your API keys 100% secure!)*

---

## 3. Running Sanity Studio Locally or Host Standalone Studio

Sanity Studio is configured in `sanity.config.ts` with all schemas in `sanity/schemas/`:

To open Sanity Studio locally:
```bash
npx sanity dev
```

To deploy Sanity Studio to a Sanity sub-domain (e.g. `innovifyxr.sanity.studio`):
```bash
npx sanity deploy
```

---

## 4. Content Schemas Included

- **Article (`article`)**:
  - Title, URL Slug (auto-generated from title)
  - Short Excerpt / Summary
  - Featured Image with Alt Text (hotspot support)
  - Author (reference) & Category (reference)
  - Body Content (Portable Text with H2, H3, quotes, bullet/numbered lists, internal/external links, images)
  - Published & Updated Dates
  - SEO Title & SEO Meta Description
  - Canonical URL (defaults to `https://innovifyxr.com/insights/{slug}`)
  - FAQ Items (generates on-page accordions + valid Google `FAQPage` JSON-LD schema)
  - Related Enterprise Solutions & Related Industry Applications
  - Is Featured Flag (positions article as the primary hero featured insight)

- **Author (`author`)**:
  - Name, Role (e.g. Founder & CEO), Bio, Profile Picture, LinkedIn, Website.

- **Category (`category`)**:
  - Name, Slug, Description.

---

## 5. Technical SEO & Architecture Notes

- **Dynamic Head Updates**: Changing or selecting an article automatically updates `document.title`, `meta[name="description"]`, `link[rel="canonical"]`, Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`), and injects JSON-LD schemas (`BlogPosting`, `BreadcrumbList`, `FAQPage`, `Organization`).
- **Graceful Fallback**: If Sanity environment variables are missing or Sanity API is unreachable, the site automatically falls back to the high-quality built-in articles in `src/data.ts`.
- **Contact System & APIs**: The existing Express backend (`/api/inquiry`, `/api/contact`) and Resend email system remain 100% untouched and functional.
