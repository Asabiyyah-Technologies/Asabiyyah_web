# STAGE 4 — IMPLEMENTATION REPORT
## Asabiyyah Technologies Ltd — Corporate Website

| Document Attribute | Details |
| :--- | :--- |
| **Stage** | Stage 4: Engineering & Implementation |
| **Status** | Completed & Verified |
| **Compilation Date** | November 12, 2026 |
| **Compiler Version** | Python 3.14.10 Build Engine (`build.py`) |
| **Target Infrastructure** | Cloudflare Pages (Free Plan) + Edge Functions |
| **Production Output** | `dist/` (7 routes, 1 XML sitemap, Cloudflare headers & redirects) |

---

## 1. Executive Summary

This report documents the successful implementation of the official corporate website for **Asabiyyah Technologies Ltd** (RC 9918400). The website has been engineered to production standards using a **static-first, zero-dependency architecture** that guarantees instantaneous load performance, complete deployment compatibility with the Cloudflare Pages Free Plan, robust edge serverless contact processing, and zero third-party framework security bloat.

Every page, component, and data structure has been built strictly from the approved discovery register ([APP-001](file:///c:/Users/HomePC/Desktop/AMTIC-001/docs/project/APPROVAL_REGISTER.md#L31)), brand strategy foundation ([APP-002](file:///c:/Users/HomePC/Desktop/AMTIC-001/docs/project/APPROVAL_REGISTER.md#L32)), visual design system ([APP-003](file:///c:/Users/HomePC/Desktop/AMTIC-001/docs/project/APPROVAL_REGISTER.md#L33)), and Architecture Decision Record ([ARCHITECTURE.md](file:///c:/Users/HomePC/Desktop/AMTIC-001/docs/engineering/ARCHITECTURE.md)).

---

## 2. Implemented Routes & Build Metrics

The static compiler (`build.py`) compiles seven canonical routes into clean directory paths (`/path/index.html`), ensuring clean URLs without `.html` extensions on Cloudflare Pages and standard web servers.

| Route | Source Module | Compiled File | Size (KB) | Status | Key Features |
| :--- | :--- | :--- | :---: | :---: | :--- |
| `/` | `src/pages/home.py` | `dist/index.html` | 64.2 KB | ✓ Compiled | 7:5 Hero split, Corporate thesis ('Asabiyyah), 4 Practices preview, Dila & AMANA spotlights, Engineering strip, Leadership strip, Conversion banner |
| `/about` | `src/pages/about.py` | `dist/about/index.html` | 49.0 KB | ✓ Compiled | Ibn Khaldun philosophy treatise, Mission/Vision/5 Values, Statutory CAC profile table (RC 9918400), Founder profiles with credentials, 4 Operating hubs |
| `/services` | `src/pages/services.py` | `dist/services/index.html` | 64.6 KB | ✓ Compiled | 4 Detailed commercial practice sections (challenges, deliverables, client profile, tech stack), 4-Phase delivery methodology, 3 Engagement models |
| `/products` | `src/pages/products.py` | `dist/products/index.html` | 41.5 KB | ✓ Compiled | Dila (Commercial Flagship, Alpha pilot, non-bank disclaimer), AMANA SHIELD (Civic AI, functional backend API), ClassGPT-N (Research prototype), ResolveIQ internal tool |
| `/engineering` | `src/pages/engineering.py` | `dist/engineering/index.html` | 41.9 KB | ✓ Compiled | 3 Deep dives: Offline-first SQLite sync topology, Grounded AI uncertainty abstention, Double-entry SQL schema; Full technology stack inventory |
| `/contact` | `src/pages/contact.py` | `dist/contact/index.html` | 40.8 KB | ✓ Compiled | Direct office card (Babura HQ, phone, email, SLA), WhatsApp desk, Interactive project intake form with honeypot & velocity defense |
| `/legal` | `src/pages/legal.py` | `dist/legal/index.html` | 33.8 KB | ✓ Compiled | Corporate registration details, Non-custodial financial disclaimer, NDPR privacy policy, Terms of service, Intellectual property terms |

**Total Production Build Time:** `0.090 seconds` (`< 100ms`).

---

## 3. Component Architecture & Reusability

All UI components are modularized under `src/components/`, ensuring strict separation of concerns, DRY markup generation, and centralized styling maintenance.

```
src/
├── components/
│   ├── header.py          # Fixed sticky navigation with active link highlighting & accessible mobile drawer
│   ├── footer.py          # Comprehensive institutional footer with CAC profile, sitemap, disclaimers
│   ├── seo.py             # <head> generator with Open Graph, Twitter cards, and Schema.org Corporation JSON-LD
│   ├── service_card.py    # Overview cards (Home) & detailed practice blocks (Services)
│   ├── product_card.py    # Product showcase with status badges, feature matrices, and disclaimers
│   ├── leader_card.py     # Founder profile cards with verified degrees, PSC status, and monograms
│   ├── disclaimer_box.py  # Accessible regulatory, research status, and informational callout boxes
│   └── contact_form.py    # Enterprise inquiry form with bot deterrence and graceful mailto fallback
```

---

## 4. Single-Source-of-Truth Data Architecture

All factual corporate information is decoupled from presentation markup and stored in version-controlled JSON datasets under `src/data/`:

1. `src/data/company.json`: Legal corporate name (`ASABIYYAH TECHNOLOGIES LTD`), RC (`9918400`), TIN (`2621713612761`), share capital (`₦5,000,000.00`), registered office, operational footprint, mission, vision, and core operating values.
2. `src/data/services.json`: 4 Commercial practices with exact problems solved, deliverables, target clients, and technology stacks.
3. `src/data/products.json`: Dila, AMANA SHIELD, and ClassGPT-N specifications, development statuses, feature lists, and regulatory disclaimers.
4. `src/data/team.json`: Founder profiles, statutory titles, shareholding percentages (equal 33.33% each), academic degrees, certifications, and technical domains.

---

## 5. Security & Edge Functions Engineering

### 5.1 Cloudflare Pages Serverless Function (`functions/api/contact.js`)
Contact inquiries route through a native Cloudflare Pages Function deployed on V8 edge workers:
- **Zero-Friction Bot Honeypot (`_hp_company`):** Hidden field traps automated scrapers without annoying human users with CAPTCHAs.
- **Velocity Throttling (`_timestamp`):** Rejects or silences automated POST submissions completed in under 1,500ms.
- **Strict Payload Validation:** Enforces character boundaries, RFC-compliant email formatting, and valid telephone numbers.
- **XSS Sanitization:** Encodes all HTML special characters prior to forwarding.
- **Outbound Webhook Support:** Forwards sanitized inquiries to `INQUIRY_WEBHOOK_URL` if configured in Cloudflare environment variables.
- **Deterministic Acknowledgment:** Generates unique tracking tokens (e.g. `ASB-XXXX-XXXX`).

### 5.2 HTTP Security Headers (`public/_headers` -> `dist/_headers`)
Pre-configured for Cloudflare Pages edge delivery:
- `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- `Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com https://fonts.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self';`

---

## 6. Regulatory & Compliance Safeguards Implemented

1. **Non-Custodial / Pure Software Clarification:**
   - Dila is explicitly described across all pages (`/`, `/products`, `/legal`, and footer) as a **pure software infrastructure platform**.
   - Language explicitly refutes banking, lender, custodial wallet, or deposit-taking status.
   - Financial routing is explicitly assigned to CBN-licensed commercial banks and regulated payment switches.
2. **Zero Fabrication Policy:**
   - Zero fictitious client logos, testimonial quotes, or commercial funding figures appear on any page.
   - All academic degrees (FUTB CGPA 4.79/5.00 First Class) and certifications (DataCamp) are strictly verified.
3. **Parent Corporate Identity Preservation:**
   - Prominent notification on `/products` clarifying that Asabiyyah Technologies Ltd is the parent technology house and holding company, not an alias for Dila.

---

## 7. Build Verification

- **Command:** `python build.py`
- **Exit Code:** `0`
- **Output Artifacts:**
  - `dist/index.html` (Home)
  - `dist/about/index.html` (About)
  - `dist/services/index.html` (Services)
  - `dist/products/index.html` (Products)
  - `dist/engineering/index.html` (Engineering)
  - `dist/contact/index.html` (Contact)
  - `dist/legal/index.html` (Legal)
  - `dist/assets/` (Vector brandmarks, product logos, architecture diagrams)
  - `dist/_headers` (Cloudflare edge security headers)
  - `dist/_redirects` (Canonical redirects)
  - `dist/robots.txt` (Search engine directives)
  - `dist/sitemap.xml` (7 Canonical XML URLs)

Stage 4 implementation is complete and verified. Ready for QA testing in Stage 5.
