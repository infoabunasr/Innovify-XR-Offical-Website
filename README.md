# Innovify XR — Enterprise AR, VR, WebAR & AI Website

Welcome to the official repository for **Innovify XR**, a modern, high-performance, enterprise-grade technology company website showcasing spatial computing (Augmented Reality, Virtual Reality, WebAR) and AI solution development services.

---

## 🚀 Key Features

* **Complete Spatial & AI Showcase**: Interactive solution breakdown for AR Development, VR Development, WebAR, AI Integration, and AI + XR enterprise implementations.
* **Industry & Case Study Hub**: Comprehensive industry-specific technology applications (Healthcare, Manufacturing, Retail, Education, Real Estate, Tourism) backed by real case studies.
* **Universal Lead Capture System**: End-to-end inquiry forms with rate-limiting, honeypot anti-spam protection, file upload support, and automated email notifications to `info.innovifyxr@gmail.com`.
* **Integrated Routing & Architecture**: Clean SPA routing with full history state push/pop, contextual breadcrumbs, legal compliance pages (`/privacy-policy`, `/terms-and-conditions`, `/cookie-policy`), and a custom `/404` page.
* **SEO & AI/GEO Search Optimization**: Built-in JSON-LD structured data schemas, custom Open Graph tags, automated `/sitemap.xml`, and `/robots.txt`.
* **Responsive 3D Hero & Visual Effects**: Interactive canvas hero built with Three.js and custom shader elements paired with modern Tailwind CSS glassmorphic aesthetics.

---

## 🛠️ Tech Stack

* **Frontend Framework**: React 19 + TypeScript
* **Build Tool**: Vite 6
* **Backend Runtime**: Express.js (Node.js) bundled with `esbuild`
* **Styling**: Tailwind CSS v4 + `@tailwindcss/vite`
* **Icons & Animation**: Lucide React + Motion (`motion/react`)
* **3D Rendering**: Three.js (`@types/three`)
* **Email Delivery**: Resend API integration with SMTP fallback support

---

## 📁 Repository Structure

```
├── public/
│   ├── .htaccess             # Apache/LiteSpeed URL rewrite rules for SPA routing
│   ├── robots.txt            # Search engine crawler instructions
│   └── sitemap.xml           # XML Sitemap listing all canonical site routes
├── src/
│   ├── components/           # Modular React UI components & page views
│   │   ├── AboutPage.tsx
│   │   ├── CaseStudiesPage.tsx
│   │   ├── ContactPage.tsx   # Universal lead capture form with validation
│   │   ├── Footer.tsx        # Global footer navigation
│   │   ├── Header.tsx        # Responsive mega-menu global header
│   │   ├── HeroCanvas.tsx    # Three.js interactive background canvas
│   │   ├── IndustriesPage.tsx
│   │   ├── InsightsPage.tsx
│   │   ├── LegalPages.tsx    # Privacy Policy, Terms, and Cookie Policy
│   │   ├── NotFoundPage.tsx  # Custom 404 page component
│   │   ├── ProjectIntakeModal.tsx
│   │   └── SolutionsPage.tsx
│   ├── App.tsx               # Main application routing and state management
│   ├── main.tsx              # React entry point
│   ├── index.css             # Tailwind CSS global styles
│   └── types.ts              # TypeScript interface definitions
├── server.ts                 # Full-stack Express server handling API inquiries & static serving
├── .env.example              # Environment variable configuration template
├── .gitignore                # Git exclusion specifications
├── DEPLOYMENT.md             # Comprehensive Hostinger & GitHub deployment instructions
├── package.json              # Project dependencies & build scripts
├── tsconfig.json             # TypeScript configuration
└── vite.config.ts            # Vite configuration
```

---

## 📦 Getting Started

### Prerequisites

* **Node.js**: v18.0.0 or higher
* **npm**: v9.0.0 or higher (or `pnpm`/`yarn`)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-org/innovify-xr.git
   cd innovify-xr
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy `.env.example` to `.env` and fill in your environment variables:
   ```bash
   cp .env.example .env
   ```

4. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

5. **Build for Production**:
   ```bash
   npm run build
   ```

6. **Start Production Server Locally**:
   ```bash
   npm start
   ```

---

## ⚡ Deployment

For detailed step-by-step instructions on deploying this website to **Hostinger** (both Node.js VPS / Application Hosting and Hostinger Web / Shared Hosting) or via **GitHub Actions**, please consult [DEPLOYMENT.md](./DEPLOYMENT.md).

---

## 📄 License & Ownership

© 2026 **Innovify XR**. All rights reserved.
For inquiries, contact [info.innovifyxr@gmail.com](mailto:info.innovifyxr@gmail.com).
