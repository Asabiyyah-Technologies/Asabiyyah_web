# CLOUDFLARE PAGES INTEGRATION & DEPLOYMENT GUIDE
## Asabiyyah Technologies Ltd — Corporate Website

| Document Attribute | Details |
| :--- | :--- |
| **Stage** | Stage 4: Engineering & Implementation |
| **Last Updated** | November 12, 2026 |
| **Primary Platform** | Cloudflare Pages (Free Plan) |
| **Custom Domain** | `asabiyyah.com` & `www.asabiyyah.com` |

---

## 1. Cloudflare Pages Overview

The Asabiyyah corporate website is engineered to run seamlessly on the **Cloudflare Pages Free Plan**, which provides:
- **Unlimited bandwidth and requests** across Cloudflare's global edge network (300+ cities).
- **Free automated SSL/TLS** certificates with HTTP/3 and TLS 1.3 support.
- **Native Edge Serverless Functions** (`functions/`) included with 100,000 free function requests per day.
- **Instant cache invalidation** upon new Git commits or builds.

---

## 2. Step-by-Step Deployment Walkthrough

### Option A: Connected Git Repository (Recommended)

1. **Log in to Cloudflare Dashboard:**
   - Navigate to [dash.cloudflare.com](https://dash.cloudflare.com) and select **Workers & Pages**.
2. **Create Application:**
   - Click **Create Application** > **Pages** > **Connect to Git**.
   - Authorize your GitHub or GitLab account and select the repository (`asabiyyah-corporate` or similar).
3. **Configure Build Settings:**
   - **Project Name:** `asabiyyah`
   - **Production Branch:** `main`
   - **Framework Preset:** `None` (or `Custom`)
   - **Build Command:** `python build.py`
   - **Build Output Directory:** `dist`
   - **Root Directory:** `/` (default)
4. **Environment Variables (Optional):**
   - Click **Environment Variables** and add:
     - `PYTHON_VERSION`: `3.10` or higher (Cloudflare Pages build container supports Python 3 natively).
     - `INQUIRY_WEBHOOK_URL`: *(Optional)* Slack/Discord/CRM webhook URL to receive real-time contact alerts.
5. **Click Save and Deploy:**
   - Cloudflare will clone the repository, execute `python build.py`, deploy the static files in `dist/`, and automatically compile the serverless edge worker in `functions/api/contact.js`.

---

### Option B: Direct Upload via Wrangler CLI

If deploying directly from a local terminal without connecting GitHub:
```bash
# 1. Compile production artifacts
python build.py

# 2. Deploy dist directory to Cloudflare Pages
npx wrangler pages deploy dist --project-name=asabiyyah
```

---

## 3. Custom Domain Configuration (`asabiyyah.com`)

Once the Cloudflare Pages project is deployed:

1. In the Pages dashboard, select your project (`asabiyyah`) and click the **Custom domains** tab.
2. Click **Set up a custom domain**.
3. Enter `www.asabiyyah.com` and follow the DNS verification steps.
4. Enter `asabiyyah.com` (apex domain).
5. If the domain's DNS is managed directly on Cloudflare:
   - Cloudflare will automatically generate CNAME flattening records pointing `asabiyyah.com` and `www.asabiyyah.com` to `<project-name>.pages.dev`.
6. Our `public/_redirects` file automatically enforces canonical redirection from the apex domain to `https://www.asabiyyah.com`:
   ```
   https://asabiyyah.com/* https://www.asabiyyah.com/:splat 301!
   ```

---

## 4. Contact Form Serverless Backend (`/api/contact`)

Cloudflare Pages automatically detects the `functions/` directory in the repository root.

- When a visitor submits the contact form on `/contact`, the browser sends a `POST` request to `/api/contact`.
- Cloudflare's Edge runtime invokes `functions/api/contact.js` in `< 15ms`.
- **Honeypot Bot Trap:** If the hidden `_hp_company` field is populated, the function immediately returns an acknowledgment without sending spam to company inboxes.
- **Bot Velocity Check:** Submissions completing in under 1,500ms are treated as automated bot traffic.
- **Webhook Forwarding:** If `INQUIRY_WEBHOOK_URL` is configured in project settings, the sanitized inquiry payload is securely forwarded over HTTPS to your intake webhook.

---

## 5. Alternative Hosting Environments

The static output in `dist/` is completely portable and can be deployed to any web server or static host:

| Platform | Build Command | Publish Directory |
| :--- | :--- | :--- |
| **Vercel** | `python build.py` | `dist` |
| **Netlify** | `python build.py` | `dist` |
| **GitHub Pages** | Run `python build.py` in GitHub Action | Deploy `dist` via `gh-pages` |
| **Nginx / Caddy VPS** | Run `python build.py` | Serve `dist/` root with standard static file directives |

STAGE 4 INTEGRATION COMPLETE.
