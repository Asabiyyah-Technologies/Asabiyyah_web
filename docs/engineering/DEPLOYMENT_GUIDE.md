# PRODUCTION DEPLOYMENT GUIDE
## Asabiyyah Technologies Ltd — Corporate Website

| Document Attribute | Details |
| :--- | :--- |
| **Stage** | Stage 5: QA, Security & Production Deployment |
| **Last Updated** | November 12, 2026 |
| **Primary Platform** | Cloudflare Pages (Free Plan) |
| **Production Domain** | `asabiyyah.com` & `www.asabiyyah.com` |
| **Deployment Status** | **Ready for Execution (Awaiting Authorization)** |

---

## 1. Prerequisites

Before initiating production deployment, ensure you have:
1. Access to the official company domain registrar account for `asabiyyah.com`.
2. A free [Cloudflare Account](https://dash.cloudflare.com/sign-up).
3. A Git repository on GitHub or GitLab for source control.

---

## 2. Step-by-Step Deployment Instructions

### Step 1: Initialize Git and Push to Remote
In the workspace root directory (`AMTIC-001`):
```bash
# 1. Initialize git repository
git init

# 2. Add all source files (pre-existing prototypes are preserved)
git add .

# 3. Create initial commit
git commit -m "feat: initial production build for Asabiyyah Technologies Ltd corporate website"

# 4. Link to company remote repository (e.g. GitHub)
git remote add origin https://github.com/asabiyyah/corporate-website.git

# 5. Push main branch
git branch -M main
git push -u origin main
```

---

### Step 2: Connect Cloudflare Pages to Git Repository
1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com).
2. Navigate to **Workers & Pages** > **Create Application** > **Pages** > **Connect to Git**.
3. Select your repository (`corporate-website`).
4. Configure Build Parameters:
   - **Project Name:** `asabiyyah`
   - **Production Branch:** `main`
   - **Framework Preset:** `None` (or `Custom`)
   - **Build Command:** `python build.py`
   - **Build Output Directory:** `dist`
   - **Root Directory:** `/` (default)

---

### Step 3: Configure Environment Variables
In the Cloudflare Pages project setup (or under **Settings** > **Environment Variables**):
- `PYTHON_VERSION`: `3.10`
- `INQUIRY_WEBHOOK_URL`: *(Optional)* Webhook URL (Slack, Discord, CRM) to receive real-time contact alerts.
- `RESEND_API_KEY`: *(Optional)* If configuring transactional email forwarding.

---

### Step 4: Click Save and Deploy
- Cloudflare Pages will spin up its Linux build container, execute `python build.py` (< 1 second), deploy the static assets in `dist/`, and automatically compile the serverless worker in `functions/api/contact.js`.
- Your site will immediately be live at a staging URL: `https://asabiyyah.pages.dev`.

---

### Step 5: Custom Domain & DNS Configuration (`asabiyyah.com`)

1. In the Cloudflare Pages project dashboard, select the **Custom domains** tab.
2. Click **Set up a custom domain**.
3. Add **`www.asabiyyah.com`**.
4. Add **`asabiyyah.com`** (apex domain).
5. If using Cloudflare DNS:
   - Cloudflare automatically provisions the CNAME records with CNAME flattening for the apex domain.
6. If using an external DNS provider (Namecheap, GoDaddy, Whogohost):
   - Add CNAME record: `www` -> `asabiyyah.pages.dev`
   - Add CNAME / ALIAS record: `@` -> `asabiyyah.pages.dev`

---

### Step 6: SSL/TLS & Edge Security Enforcement
1. In Cloudflare Dashboard, go to **SSL/TLS** > **Overview**.
2. Select **Full (strict)** encryption mode.
3. In **Edge Certificates**, enable:
   - **Always Use HTTPS:** `ON`
   - **Automatic HTTPS Rewrites:** `ON`
   - **Minimum TLS Version:** `TLS 1.2`
   - **HTTP/3 (with QUIC):** `ON`

---

## 3. Rollback & Disaster Recovery Procedures

Cloudflare Pages preserves an immutable version history for every single build:
- **Instant Rollback:**
  1. Navigate to **Workers & Pages** > **asabiyyah** > **Deployments**.
  2. Select any previous successful deployment.
  3. Click **Rollback to this deployment**.
  4. The rollback takes effect globally across Cloudflare's edge network in `< 5 seconds`.
- **Zero Database Restores Required:** Because the core website is static-first, there are no databases to restore or corrupt.

---

## 4. Post-Deployment Verification Checklist

Once DNS propagation completes:
- [ ] Visit `https://www.asabiyyah.com/` — verify SSL green padlock.
- [ ] Visit `http://asabiyyah.com/` — verify automatic 301 redirect to `https://www.asabiyyah.com/`.
- [ ] Test mobile menu drawer on iOS and Android.
- [ ] Submit a test inquiry on `https://www.asabiyyah.com/contact` and verify receipt.
- [ ] Inspect `https://www.asabiyyah.com/robots.txt` and `https://www.asabiyyah.com/sitemap.xml`.
- [ ] Submit sitemap URL to [Google Search Console](https://search.google.com/search-console).
