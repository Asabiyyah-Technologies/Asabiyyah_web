# DEPENDENCY & THIRD-PARTY INTEGRATION REGISTER
## Asabiyyah Technologies Ltd — Corporate Website

| Document Attribute | Details |
| :--- | :--- |
| **Stage** | Stage 4: Engineering & Implementation |
| **Last Updated** | November 12, 2026 |
| **Total npm Dependencies** | 0 (Zero runtime packages) |
| **Security Audit Status** | Clean (0 Known Vulnerabilities) |

---

## 1. Overview & Architectural Rationale

To maintain maximum security, zero supply-chain vulnerabilities, lightning build times, and 100% compliance with Cloudflare Pages Free limits, the corporate website enforces a **zero third-party package policy** for the build and serving environments.

---

## 2. Compilation Environment Dependencies

The site compiler (`build.py`) utilizes exclusively the **Python standard library**. No external `pip` packages are required.

| Module | Source | Purpose | License |
| :--- | :--- | :--- | :--- |
| `os` | Python Standard Library | Filesystem path management and directory operations | PSF License |
| `sys` | Python Standard Library | Terminal encoding reconfiguration (UTF-8) and module imports | PSF License |
| `json` | Python Standard Library | Parsing single-source-of-truth corporate data files | PSF License |
| `shutil` | Python Standard Library | Directory cleanup and static asset copying | PSF License |
| `time` | Python Standard Library | Precision build timing measurement | PSF License |
| `datetime` | Python Standard Library | Generating ISO sitemap timestamps | PSF License |

---

## 3. Client-Side CDN Dependencies

All client-side libraries and web fonts are loaded via trusted, high-availability public CDNs with strict caching rules:

| Asset | Provider / URL | Purpose | Security Policy |
| :--- | :--- | :--- | :--- |
| **Tailwind CSS Engine** | `https://cdn.tailwindcss.com` | Just-in-time CSS compilation and responsive utility styling | Permitted under Content Security Policy (`script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com`) |
| **Plus Jakarta Sans** | Google Fonts (`https://fonts.googleapis.com`) | Primary display typography for corporate headings | Permitted under CSP (`style-src` & `font-src`) |
| **Inter** | Google Fonts (`https://fonts.googleapis.com`) | High-legibility neutral body typography | Permitted under CSP (`style-src` & `font-src`) |
| **JetBrains Mono** | Google Fonts (`https://fonts.googleapis.com`) | High-contrast monospace typography for code schemas and CAC numbers | Permitted under CSP (`style-src` & `font-src`) |

---

## 4. Serverless Edge Runtime Dependencies

The Cloudflare Pages Function (`functions/api/contact.js`) executes in Cloudflare's **Workers V8 Edge Runtime**.

- **No npm packages required.**
- Native `fetch` API used for optional outbound webhook dispatch.
- Native `Date` and `Math` used for velocity checking and token generation.
- Native `Response` and `Request` used for CORS and HTTP status formatting.

---

## 5. Security & Vulnerability Audit

- **npm audit:** Not applicable (zero `package.json` dependencies).
- **pip audit:** Not applicable (zero external Python packages).
- **CSP Headers:** Fully enforced across all production routes via `dist/_headers`.
- **Supply-Chain Attack Surface:** Minimized to zero third-party software packages.
