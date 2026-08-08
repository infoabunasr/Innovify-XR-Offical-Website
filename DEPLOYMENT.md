# Innovify XR — Hostinger & GitHub Deployment Guide

This guide provides step-by-step instructions for deploying the **Innovify XR** application to **Hostinger** (via Node.js Application Hosting / VPS or Shared Hosting) and setting up **GitHub** for continuous integration and version control.

---

## 📋 Table of Contents

1. [GitHub Setup & Repository Push](#1-github-setup--repository-push)
2. [Deployment Option A: Vercel Hosting (Fastest & Recommended)](#deployment-option-a-vercel-hosting-fastest--recommended)
3. [Deployment Option B: Hostinger VPS / Node.js Application Hosting](#deployment-option-b-hostinger-vps--nodejs-application-hosting)
4. [Deployment Option C: Hostinger Shared Hosting (Static SPA Deployment)](#deployment-option-c-hostinger-shared-hosting-static-spa-deployment)
5. [Environment Variables Setup](#5-environment-variables-setup)
6. [Email Service Setup (Resend / Hostinger SMTP)](#6-email-service-setup-resend--hostinger-smtp)
7. [Domain & SSL Setup](#7-domain--ssl-setup)
8. [Post-Deployment Verification Checklist](#8-post-deployment-verification-checklist)

---

## 1. GitHub Setup & Repository Push

### Step 1: Initialize Git Repository
In your local project folder:
```bash
git init
git add .
git commit -m "feat: production ready update with popups, Vercel & Hostinger configs"
```

### Step 2: Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/innovify-xr.git
git branch -M main
git push -u origin main
```

---

## Deployment Option A: Vercel Hosting (Fastest & Recommended)

Since this repository includes a dedicated `vercel.json` rewrite configuration, updating or deploying to Vercel takes only a few seconds.

### Step 1: Connect GitHub Repository to Vercel
1. Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New** → **Project**.
3. Import your `innovify-xr` GitHub repository.

### Step 2: Build & Output Settings
Vercel automatically detects Vite:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### Step 3: Configure Environment Variables in Vercel
Under **Settings** → **Environment Variables**, add:
- `COMPANY_NOTIFICATION_EMAIL` = `info.innovifyxr@gmail.com`
- `RESEND_API_KEY` = `your_resend_api_key_here` (optional)
- `EMAIL_FROM` = `inquiries@innovifyxr.com` (optional)

### Step 4: Deploy & Auto Updates
Click **Deploy**. Every time you push changes to your GitHub `main` branch, Vercel will automatically build and update your production site in real time!

---

## Deployment Option B: Hostinger VPS / Node.js Application Hosting

This mode runs the Express server (`server.ts` compiled to `dist/server.cjs`), enabling full server-side lead processing, rate limiting, and email dispatching via `/api/inquiry`.

### Step 1: Access Hostinger VPS or Node.js Web App Manager
* Log in to your **Hostinger hPanel**.
* Navigate to **VPS** or **Node.js Web Applications** menu.

### Step 2: Server Environment Setup
Ensure Node.js **v18+** or **v20+** is installed on your server:
```bash
node -v   # Should be >= 18.0.0
npm -v    # Should be >= 9.0.0
```

### Step 3: Clone Code & Install
On your Hostinger server terminal:
```bash
cd /var/www
git clone https://github.com/YOUR_USERNAME/innovify-xr.git
cd innovify-xr
npm install
```

### Step 4: Configure Production Environment (`.env`)
Create a `.env` file in the project root:
```bash
cp .env.example .env
nano .env
```
Fill in your secrets:
```env
PORT=3000
NODE_ENV=production
COMPANY_NOTIFICATION_EMAIL=info.innovifyxr@gmail.com
RESEND_API_KEY=re_123456789_your_key_here
EMAIL_FROM=inquiries@innovifyxr.com
```

### Step 5: Build the Application
Run the unified build command:
```bash
npm run build
```
This generates:
- Client static files in `dist/`
- Server CommonJS bundle in `dist/server.cjs`

### Step 6: Process Management with PM2
Install PM2 to keep the Node process running continuously:
```bash
npm install -g pm2
pm2 start dist/server.cjs --name "innovify-xr"
pm2 save
pm2 startup
```

### Step 7: Nginx Reverse Proxy Configuration
If using an Nginx web server, proxy traffic from port 80/443 to port 3000:
```nginx
server {
    listen 80;
    server_name innovifyxr.com www.innovifyxr.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

---

## Deployment Option B: Hostinger Shared Hosting (Static SPA Deployment)

If you are using **Hostinger Business or Premium Shared Hosting** (without VPS/Node access), you can deploy the compiled static assets.

### Step 1: Local Build
On your local computer or CI pipeline:
```bash
npm run build
```

### Step 2: Upload Files to `public_html`
1. Open **Hostinger hPanel** → **File Manager**.
2. Navigate to `public_html`.
3. Upload all contents inside the local `dist/` folder (including `index.html`, `assets/`, `sitemap.xml`, `robots.txt`, and `.htaccess`).

> 💡 **Note on `.htaccess`**: The repository includes `/public/.htaccess` which auto-copies to `dist/.htaccess` during `npm run build`. This file configures Apache/LiteSpeed rewrite rules so client-side routes like `/solutions`, `/contact`, and `/insights` render cleanly without 404 errors.

---

## 4. Environment Variables Setup

Ensure the following variables are specified in your server configuration or `.env`:

| Variable Name | Required | Description | Example |
|---|---|---|---|
| `PORT` | Yes | Port for Express server | `3000` |
| `NODE_ENV` | Yes | Environment mode | `production` |
| `COMPANY_NOTIFICATION_EMAIL` | Yes | Destination inbox for client lead notifications | `info.innovifyxr@gmail.com` |
| `RESEND_API_KEY` | Optional | API key for transactional email delivery | `re_123456789...` |
| `EMAIL_FROM` | Optional | Verified sender email address | `inquiries@innovifyxr.com` |
| `SMTP_HOST` | Optional | Hostinger/Gmail SMTP server | `smtp.hostinger.com` |
| `SMTP_USER` | Optional | SMTP username | `info.innovifyxr@gmail.com` |
| `SMTP_PASSWORD` | Optional | SMTP password | `your_smtp_password` |

---

## 5. Email Service Setup (Resend / Hostinger SMTP)

To ensure form submissions dispatch real emails to `info.innovifyxr@gmail.com`:

### Option 1: Resend (Recommended)
1. Sign up for a free account at [Resend.com](https://resend.com).
2. Add and verify your domain (`innovifyxr.com`).
3. Generate an API Key and set `RESEND_API_KEY=re_xxx` in your `.env`.

### Option 2: Hostinger Webmail SMTP
1. In Hostinger hPanel, go to **Emails** → **Email Accounts**.
2. Create an account like `inquiries@innovifyxr.com`.
3. Get SMTP details:
   - Host: `smtp.hostinger.com`
   - Port: `465` or `587`
4. Set `SMTP_HOST`, `SMTP_USER`, and `SMTP_PASSWORD` in `.env`.

---

## 6. Domain & SSL Setup

1. **DNS Configuration**:
   - Point your domain's **A Record** `@` to your Hostinger VPS IP address.
   - Set **CNAME Record** `www` to `@`.
2. **SSL Certificate**:
   - In Hostinger hPanel, go to **SSL** and enable **Free Let's Encrypt SSL** for `innovifyxr.com` and `www.innovifyxr.com`.

---

## 7. Post-Deployment Verification Checklist

- [ ] **Home Route (`/`)**: Verify hero animations and navigation render properly.
- [ ] **Contact Form (`/contact`)**: Submit a test inquiry and verify email is logged and delivered.
- [ ] **Solutions & Industries (`/solutions`, `/industries`)**: Verify route transitions and modals operate seamlessly.
- [ ] **SEO Validation**: Check `https://innovifyxr.com/sitemap.xml` and `https://innovifyxr.com/robots.txt`.
- [ ] **404 Routing**: Visit an invalid URL (e.g. `/random-page`) and verify the custom 404 page displays with home/contact navigation options.
- [ ] **Mobile Responsiveness**: Verify header navigation, forms, and cards on mobile devices.
