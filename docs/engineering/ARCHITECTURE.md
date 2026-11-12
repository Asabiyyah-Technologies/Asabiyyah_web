# Architecture Decision Record (ADR): Asabiyyah Technologies Ltd

## Corporate Website Architecture Specification

**Status:** APPROVED & ADOPTED  
**Date:** 2026-11-12  
**Lead Systems Architect:** Senior Software Architect & Lead Frontend Engineer  
**Target Infrastructure:** Cloudflare Pages (Free Plan) with Global Edge CDN  

---

## 1. Context & Architectural Drivers

The objective is to engineer an enterprise-quality corporate website for **Asabiyyah Technologies Ltd** that:
1. Establishes authoritative credibility for domestic (Nigerian) and international institutional audiences.
2. Accurately showcases the parent entity's 4 commercial service practices and 3 product initiatives (Dila, AMANA SHIELD, ClassGPT-N).
3. Adheres strictly to the project's working principles: **Simplicity before unnecessary complexity**, **Evidence before assumptions**, and **Zero fabrication**.
4. Deploys effortlessly on **Cloudflare's Free Plan** within strict bandwidth and execution limits.
5. Operates with maximum speed, zero server maintenance overhead, zero database licensing costs, and 100% portability.

---

## 2. Evaluation of Architectural Options

```
+-------------------------------------------------------------------------------------------------+
|                                 ARCHITECTURAL TRADEOFF MATRIX                                   |
+---------------------------------+-------------------------------+-------------------------------+
| OPTION 1:                       | OPTION 2:                     | OPTION 3 (SELECTED):          |
| Next.js SSR / Node Server       | Client-Side SPA (Vite/React)  | Static-First Modular Engine   |
| (Dynamic Node Runtime)          | (Pure Client Rendering)       | (Pre-rendered Edge Static)   |
+---------------------------------+-------------------------------+-------------------------------+
| Heavy Node container required;  | Poor SEO indexing on low-tier | Perfect SEO; 0ms TTFB;        |
| high hosting costs; fails       | devices; slow initial blank   | zero server maintenance;      |
| Cloudflare Free plan limits.    | screen; high bundle JS.       | 100% Cloudflare Pages native. |
+---------------------------------+-------------------------------+-------------------------------+
```

### Option 1: Next.js with Continuously Running Node.js Server
- *Pros:* Rich server component ecosystem.
- *Cons:* Requires a persistent Node.js runtime (e.g. VPS or AWS EC2), exceeding Cloudflare Free plan limits; introduces security attack surface and patch maintenance.
- *Verdict:* **REJECTED.** Violates the requirement to *"avoid server-side dependencies that require a continuously running Node.js server."*

### Option 2: Heavy Client-Side Single-Page Application (SPA)
- *Pros:* Smooth page transitions in-memory.
- *Cons:* Renders empty HTML until JavaScript downloads and executes; impairs SEO on search crawlers; degrades performance on low-bandwidth 3G devices in Nigeria.
- *Verdict:* **REJECTED.** Violates mobile-first and emerging-market accessibility principles.

### Option 3: Static-First Modular Architecture with Cloudflare Edge Functions (SELECTED)
- *Pros:*
  - Pre-renders 100% of HTML at build time, yielding instant First Contentful Paint (`< 0.5s`) and zero Cumulative Layout Shift.
  - Zero attack surface: no exposed Node processes, no SQL injection risk, no database credentials to leak.
  - 100% compatible with Cloudflare Pages Free Plan (unlimited bandwidth, 500 builds/month, 100 custom domains).
  - Uses Cloudflare Pages Functions (`functions/api/contact.js`) for serverless edge form handling (100,000 free requests/day).
  - Built with a clean Python component compiler (`build.py`) with zero npm dependency bloat or `node_modules` vulnerabilities.
  - 100% portable: can be moved to Netlify, Vercel, AWS S3, or Nginx in minutes.
- *Verdict:* **ADOPTED AS PRODUCTION ARCHITECTURE.**

---

## 3. Technology Stack & Component Structure

```
AMTIC-001/
├── src/
│   ├── components/               # Atomic modular UI components
│   │   ├── header.py             # Fixed sticky header & accessible mobile drawer
│   │   ├── footer.py             # Statutory legal disclosures, CAC details, sitemap
│   │   ├── service_card.py       # Standardized 4-practice cards
│   │   ├── product_card.py       # Dila, AMANA SHIELD, ClassGPT-N showcases
│   │   ├── leader_card.py        # Executive leadership cards with monogram fallbacks
│   │   ├── disclaimer_box.py     # Pure software non-bank regulatory callout
│   │   └── seo.py                # Schema.org JSON-LD, Open Graph, canonical meta
│   ├── pages/                    # 7 Approved page templates
│   │   ├── home.py               # Homepage (/)
│   │   ├── about.py              # About & Philosophy (/about)
│   │   ├── services.py           # Commercial Services (/services)
│   │   ├── products.py           # Product Portfolio (/products)
│   │   ├── engineering.py        # Systems Architecture (/engineering)
│   │   ├── contact.py            # Structured Inquiry Hub (/contact)
│   │   └── legal.py              # Compliance, Terms & Privacy (/legal)
│   └── data/                     # Single source of truth (JSON data models)
│       ├── company.json          # CAC legal standing, registered office, tagline
│       ├── services.json         # 4 commercial service practices & deliverables
│       ├── products.json         # Dila, AMANA, ClassGPT briefs & maturity tags
│       └── team.json             # Executive bios, shareholding, qualifications
├── functions/                    # Cloudflare Pages Serverless Edge Functions
│   └── api/
│       └── contact.js            # Edge worker handling inquiry intake & sanitization
├── public/                       # Static public assets
│   ├── assets/
│   │   ├── brand/                # Logos, favicons, OG cards
│   │   ├── products/             # Dila SVG brand package
│   │   ├── projects/             # AMANA SHIELD architecture diagram
│   │   └── team/                 # Leadership visual monograms
│   ├── _headers                  # Cloudflare security headers (CSP, HSTS)
│   ├── _redirects                # URL canonicalization & clean routing rules
│   └── robots.txt                # Search engine crawler policies
├── dist/                         # Compiled production-ready web output
├── build.py                      # Production compiler & asset optimizer
└── .env.example                  # Environment configuration template
```

---

## 4. Subsystem Architectures

### A. Routing & Clean URLs
Clean directory-based URLs are generated during compilation to ensure human-readable paths without ugly `.html` extensions:
- `/` → `dist/index.html`
- `/about` → `dist/about/index.html`
- `/services` → `dist/services/index.html`
- `/products` → `dist/products/index.html`
- `/engineering` → `dist/engineering/index.html`
- `/contact` → `dist/contact/index.html`
- `/legal` → `dist/legal/index.html`

### B. Styling & Design Tokens
- Employs **Tailwind CSS** utility architecture mapped directly to the approved `:root` design tokens.
- Headings use `Plus Jakarta Sans` (`700`, `800`) and body text uses `Inter` (`400`, `500`, `600`).
- Monospace telemetry and ledger balances use `JetBrains Mono`.
- Primary colors: Sovereign Obsidian Navy (`#0A192F`), Base Navy (`#0D2B4E`), Warm Imperial Gold (`#C8960C`), and Pure White (`#FFFFFF`).

### C. Content Management (Single Source of Truth)
- All corporate facts, founder details, service descriptions, and product briefs are maintained as structured, typed JSON models in `src/data/`.
- Changing a phone number, address, or service deliverable updates the entire 7-page site uniformly during compilation.

### D. Serverless Contact Engine (Cloudflare Pages Functions)
- Located at `functions/api/contact.js`.
- Runs on Cloudflare's V8 global edge runtime on the free plan.
- **Security & Validation Controls:**
  1. *Method Restriction:* Strictly allows `POST` requests.
  2. *Honeypot Trap:* Detects and silences automated bot submissions filling hidden fields (`_hp_company`).
  3. *Timestamp Check:* Rejects submissions filled in `< 2.0 seconds` (bot velocity detection).
  4. *Input Sanitization:* Strips malicious script tags, escapes HTML characters, and validates email syntax via strict regular expression.
  5. *Notification Dispatch:* Dispatches verified payload to configured corporate webhook / email gateway (e.g. Resend / Mailchannels / Slack / Discord) using secure environment variables.
  6. *Client-Side Fallback:* If JavaScript is disabled or the endpoint is unreachable, provides an immediate direct mailto link to `info@asabiyyah.com`.

### E. SEO & Structured Data
- Every page injects unique title tags, meta descriptions, canonical URLs, and Open Graph cards.
- Homepage injects **Schema.org `Corporation` JSON-LD** with verified CAC RC 9918400, registered office, founder names, and official contact channels.
- `sitemap.xml` is automatically generated with exact ISO-8601 modification timestamps.

### F. HTTP Security & Edge Headers (`_headers`)
Configured in `public/_headers` for automatic deployment by Cloudflare Pages:
```http
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com https://fonts.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self';
```

---

## 5. Portability & Migration Guarantee

The compiled `dist/` directory contains standard static web assets and an edge function. It can be deployed without code modification to:
- **Cloudflare Pages** (Zero-config static + functions).
- **Vercel** (`vercel deploy`).
- **Netlify** (`netlify deploy --dir=dist`).
- **GitHub Pages** (Deploy `dist/` branch).
- **Self-Hosted Linux VPS** (Standard Nginx or Caddy serving `/var/www/asabiyyah/dist`).
