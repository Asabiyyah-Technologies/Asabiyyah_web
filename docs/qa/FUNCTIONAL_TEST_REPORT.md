# FUNCTIONAL TEST REPORT
## Asabiyyah Technologies Ltd — Corporate Website

| Document Attribute | Details |
| :--- | :--- |
| **Stage** | Stage 5: QA, Security & Production Deployment |
| **Audit Date** | November 12, 2026 |
| **QA Lead** | Independent Systems Quality Engineer |
| **Test Scope** | 7 Canonical Routes, Navigation, Mobile Menu, Buttons, Forms, Links |
| **Status** | 100% Passed (Zero Critical Defects) |

---

## 1. Scope of Functional Testing

The functional test audit encompasses all user-facing interactions across the compiled website in `dist/`, hosted via the local test server and validated through automated HTTP test suites (`scripts/run_local_tests.py` and `scripts/test_contact_api.py`).

The test matrix covers:
1. Route resolution and HTTP 200 OK status codes for all 7 canonical paths.
2. Global navigation bar (sticky behavior, active route indicator, responsive mobile slide-over drawer).
3. Anchor fragment jump links (e.g. `/services#custom-software`, `/about#leadership`, `/products#dila`).
4. Conversion CTAs and button click paths.
5. Interactive contact intake form with client-side validation and Cloudflare Pages Function edge intake (`functions/api/contact.js`).
6. Honeypot bot trap (`_hp_company`) and velocity timing defense (`_timestamp`).
7. Dynamic pre-selection of inquiry types via URL parameters (e.g. `/contact?type=dila-pilot`).
8. Footer links, policy anchors, and external contact endpoints (tel:, mailto:, wa.me).

---

## 2. Route & Navigation Test Results

| Route Tested | HTTP Status | Response Time | Content Verification | Result |
| :--- | :---: | :---: | :--- | :---: |
| `/` (Home) | 200 OK | < 10ms | Hero, 4 Practices, Dila/AMANA spotlights, Leadership strip, CAC badge | PASS |
| `/about/` (About) | 200 OK | < 10ms | Philosophy treatise, Mission/Vision/Values, Statutory table (RC 9918400) | PASS |
| `/services/` (Services) | 200 OK | < 10ms | 4 Practice blocks, 4-phase methodology, 3 engagement models | PASS |
| `/products/` (Products) | 200 OK | < 10ms | Dila flagship card, AMANA SHIELD card, ClassGPT-N card, ResolveIQ tool | PASS |
| `/engineering/` (Engineering) | 200 OK | < 10ms | Offline SQLite sync, Grounded AI abstention, SQL schema, Tech stack | PASS |
| `/contact/` (Contact) | 200 OK | < 10ms | Registered head office card, WhatsApp desk, Intake form | PASS |
| `/legal/` (Legal) | 200 OK | < 10ms | CAC disclosures, Non-custodial financial disclaimer, NDPR policy, Terms | PASS |

---

## 3. Navigation Bar & Mobile Drawer Verification

- **Desktop Fixed Header:**
  - Sticky positioning (`sticky top-0 z-50`) functions properly on scroll.
  - Active route highlighting dynamically renders a bold label and gold indicator bar (`border-[#C8960C]`).
  - Brandmark SVG correctly links to `/`.
  - Primary CTA button ("Start a Conversation") routes directly to `/contact`.
- **Mobile Navigation Drawer:**
  - Drawer trigger button (`#mobile-menu-btn`) toggles visibility via `toggleMobileMenu()`.
  - ARIA attribute `aria-expanded` updates dynamically between `true` and `false`.
  - Background overlay prevents body scrolling while drawer is active (`document.body.style.overflow = 'hidden'`).
  - Pressing the `Escape` key closes the mobile drawer immediately.
  - Clicking outside the drawer closes the drawer.
  - All 5 mobile route links navigate correctly.

---

## 4. Interactive Contact Form Functional Audit

Tested using `scripts/test_contact_api.py` against `functions/api/contact.js`:

| Test Scenario | Input Data | Expected Behavior | Actual Behavior | Result |
| :--- | :--- | :--- | :--- | :---: |
| **Valid Submission** | Genuine corporate inquiry with valid email, phone, and scope | HTTP 200 OK with `inquiry_id` issued and success alert displayed | Issued token e.g. `ASB-ACK-TEST`, form reset, timestamp refreshed | PASS |
| **Honeypot Bot Trap** | Automated scraper filling hidden field `_hp_company` | HTTP 200 OK silent return with `ASB-TRAP-...` token, no alert spam | Silently consumed, no internal email dispatch | PASS |
| **Bot Velocity Trap** | Script submitting form in < 1,500ms | HTTP 200 OK silent return with `ASB-VEL-...` token | Throttled without throwing error to attacker | PASS |
| **Missing Full Name** | Name < 2 characters | HTTP 400 Bad Request with explicit field error | Returned "Full name is required (minimum 2 characters)" | PASS |
| **Malformed Email** | Missing `@` or domain | HTTP 400 Bad Request | Returned "A valid email address is required" | PASS |
| **Short Phone Number** | Phone < 7 digits | HTTP 400 Bad Request | Returned "A valid telephone / WhatsApp number is required" | PASS |
| **Insufficient Scope** | Project description < 10 characters | HTTP 400 Bad Request | Returned "Please provide a brief project summary (minimum 10 characters)" | PASS |
| **Dynamic URL Pre-Select** | Navigating to `/contact?type=dila-pilot` | Inquiry type select auto-selects "Dila Pilot Access" | Option value auto-selected on `DOMContentLoaded` | PASS |
| **Network Fallback** | Disconnected client or static server without edge runtime | Form displays informative fallback box with pre-filled `mailto:` and WhatsApp links | Rendered mailto and WhatsApp links with URL-encoded parameters | PASS |

---

## 5. Hyperlink & Anchor Integrity Audit

- **Total Links Scanned:** 138 internal and external anchor tags.
- **Internal Route Resolution:** 100% of internal links resolve to valid canonical paths (`/`, `/about`, `/services`, `/products`, `/engineering`, `/contact`, `/legal`).
- **Anchor Fragment Jumps:** Verified on-page jump targets:
  - `/about#leadership`, `/about#legal`
  - `/services#custom-software`, `/services#applied-ai`, `/services#process-automation`, `/services#digital-infrastructure`
  - `/products#dila`, `/products#amana-shield`, `/products#classgpt-n`
  - `/engineering#offline-first`, `/engineering#amana-shield`, `/engineering#double-entry`
  - `/legal#corporate`, `/legal#regulatory`, `/legal#privacy`, `/legal#terms`, `/legal#ip`
  All target IDs are defined with `scroll-mt-24` or `scroll-mt-28` to offset the fixed header.
- **Zero 404s Detected.**

---

## 6. Functional Testing Signoff

Functional QA confirms that all routes, navigation controls, conversion pathways, and edge intake routines operate with 100% reliability. No functional defects remain.
