# Asabiyyah Technologies Ltd — Official Corporate Website

[![Federal Republic of Nigeria](https://img.shields.io/badge/CAC_Registration-RC_9918400-0D2B4E.svg)](https://www.asabiyyah.com/legal)
[![Incorporation](https://img.shields.io/badge/CAMA-2020_Compliant-0D2B4E.svg)](https://www.asabiyyah.com/about#legal)
[![Cloudflare Pages](https://img.shields.io/badge/Deployed_on-Cloudflare_Pages-F38020.svg?logo=cloudflare)](https://pages.cloudflare.com)
[![WCAG 2.2 AA](https://img.shields.io/badge/Accessibility-WCAG_2.2_AA-emerald.svg)](docs/qa/ACCESSIBILITY_REPORT.md)
[![Zero npm Dependencies](https://img.shields.io/badge/npm_Dependencies-0_(Zero)-blue.svg)](docs/engineering/DEPENDENCY_REGISTER.md)
[![Build Time](https://img.shields.io/badge/Build_Time-%3C_0.1s-gold.svg)](docs/qa/PERFORMANCE_REPORT.md)

Official corporate website and system architecture repository for **Asabiyyah Technologies Ltd** (RC 9918400), an African technology company engineering high-integrity enterprise software, applied artificial intelligence, and resilient digital infrastructure.

> **Corporate Motto:** *"Building Technology That Matters."*

---

## 🏛️ Statutory Corporate Profile

| Parameter | Official Record |
| :--- | :--- |
| **Legal Entity Name** | **ASABIYYAH TECHNOLOGIES LTD** |
| **Corporate Affairs Commission (CAC)** | **RC 9918400** |
| **Tax Identification Number (TIN)** | **2621713612761** |
| **Governing Statute** | Companies and Allied Matters Act 2020 (CAMA 2020) |
| **Date of Incorporation** | October 7, 2026 |
| **Authorized Share Capital** | ₦5,000,000.00 (Five Million Naira) |
| **Registered Head Office** | 2, Kunya - B Mutum Road, Babura Town, Jigawa State — 732104 |
| **Operational Desks** | Babura (HQ), Jos (Lab), Kano (Commercial Hub), Abuja (Liaison) |
| **Contact Email** | `info@asabiyyah.com` |
| **Telephone / WhatsApp** | `+234 806 475 3943` |

---

## ⚡ Architectural Foundation

The website is engineered using a **zero-dependency static architecture** designed for lightning build times, top-tier performance on African mobile connections, and zero supply-chain vulnerabilities:

- **Static Compiler (`build.py`):** Pure Python 3 standard library build engine compiling all 7 routes into clean directory paths in `< 100 milliseconds`.
- **Edge Serverless Contact Intake (`functions/api/contact.js`):** Native Cloudflare Pages Function providing honeypot bot trap filtering, bot velocity throttling, XSS sanitization, and optional webhook forwarding.
- **Single-Source Data Architecture (`src/data/`):** All factual business information (CAC numbers, team profiles, service deliverables, product specifications) is decoupled into version-controlled JSON files.
- **Edge Security Headers (`public/_headers`):** Strict Content-Security-Policy (CSP), HSTS preloading, frame protection (`X-Frame-Options: DENY`), and MIME-type enforcement.

---

## 🧭 Site Structure (7 Canonical Routes)

1. **`/` (Home):** Asymmetric 7:5 Hero split, Corporate thesis (*'Asabiyyah* social cohesion), 4 commercial practices, Dila & AMANA SHIELD spotlights, engineering pillars, leadership strip, and conversion call to action.
2. **`/about` (About Us):** Historical treatise on Ibn Khaldun's *'Asabiyyah* (عصبية), Mission, Vision, 5 Core Values, Statutory CAC Legal Profile Table, Founding Leadership Profiles with verified credentials, and 4 regional operating hubs.
3. **`/services` (Commercial Practices):** In-depth specifications of the 4 engineering practices (Custom Enterprise Software, Applied AI & Intelligent Systems, Process Automation & Digital Ledgers, Resilient Digital Infrastructure), 4-phase delivery methodology, and 3 engagement models.
4. **`/products` (Portfolio & R&D):** Internal technology portfolio:
   - **Dila:** Tier 1 Commercial Flagship (Community Savings & Cooperative OS) with mandatory non-bank regulatory notice.
   - **AMANA SHIELD:** Tier 2 Civic Threat Intelligence Initiative (Scam & Phishing detection via WhatsApp Cloud API).
   - **ClassGPT-N:** Tier 3 Applied AI Research Direction (Offline multilingual tutoring framework).
   - **ResolveIQ:** Tier 4 Internal operational resolution tool.
5. **`/engineering` (System Architecture):** Technical deep-dives:
   - *Offline-First Edge Sync Topology* (Local SQLite to Cloud PostgreSQL).
   - *Grounded AI & Uncertainty Abstention* (Strict abstention as UNVERIFIED).
   - *Relational Double-Entry Accounting Schema* (Zero-dependency SQL ledger).
   - *Full Production Tech Stack Inventory*.
6. **`/contact` (Corporate Intake Desk):** Statutory head office card, response SLA, WhatsApp desk, and interactive project inquiry form with bot deterrence.
7. **`/legal` (Legal Governance):** CAMA 2020 disclosures, Non-custodial financial technology disclaimer, NDPR/NDPA-compliant data privacy policy, terms of service, and intellectual property terms.

---

## 🚀 Local Development Quickstart

### Prerequisites
- **Python 3.8+** (No Node.js, npm, or yarn required).
- Git.

### 1. Build the Website
```bash
python build.py
```
*Compiles all pages into `dist/` in ~0.090s.*

### 2. Run the Local Test Server
```bash
python -m http.server 3000 --directory dist
```
Navigate to `http://localhost:3000` in your web browser.

### 3. Run the Automated Test Suite
```bash
# Run 13-point integration & route test suite
python scripts/run_local_tests.py

# Run edge serverless contact API unit tests
python scripts/test_contact_api.py

# Run mathematical contrast & security audit
python scripts/qa_audit.py
```

---

## 🌐 Cloudflare Pages Deployment

### Build Configuration Settings
- **Framework Preset:** `None` (or `Custom`)
- **Build Command:** `python build.py`
- **Build Output Directory:** `dist`
- **Root Directory:** `/`

### Environment Variables
- `PYTHON_VERSION`: `3.10`
- `INQUIRY_WEBHOOK_URL`: *(Optional)* Webhook URL to receive live contact form submissions in Slack/Discord/CRM.

See [`docs/engineering/DEPLOYMENT_GUIDE.md`](docs/engineering/DEPLOYMENT_GUIDE.md) for complete DNS, SSL, and custom domain setup.

---

## 🛡️ Regulatory Guardrails & Integrity Commitments

- **Dila Regulatory Classification:** Dila operates strictly as a pure software infrastructure platform. Dila does **NOT** take custody of client deposits, issue loans, or operate as a bank. All financial routing is processed directly by Central Bank of Nigeria (CBN)-licensed commercial banks and regulated payment service providers.
- **Zero Fabrication:** All corporate records, academic credentials (FUTB CGPA 4.79/5.00 First Class), and development statuses are 100% verified against primary source materials. Zero invented client logos or fictitious testimonials appear anywhere in this codebase.
- **Parent Company Independence:** Asabiyyah Technologies Ltd is the sovereign parent technology house and holding company, distinct from its individual product brands.

---

## 👥 Executive Leadership

- **Muhammad Auwal Aliyu** — Co-Founder & Chief Executive Officer (CEO) · Director & Shareholder (PSC, 33.33% Equity)
- **Sulaiman Sabo** — Co-Founder & Chief Technology Officer (CTO) · Shareholder (PSC, 33.33% Equity)
- **Mahmud Rabiu Zakariyya** — Co-Founder & Chief Operating Officer (COO) · Shareholder (PSC, 33.33% Equity)

---

## 📄 License & Intellectual Property

&copy; 2026 Asabiyyah Technologies Ltd (RC 9918400). All rights reserved.  
Proprietary software and brand assets of Asabiyyah Technologies Ltd.
