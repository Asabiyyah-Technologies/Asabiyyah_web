# CORPORATE WEBSITE MAINTENANCE & OPERATIONS GUIDE
## Asabiyyah Technologies Ltd

| Document Attribute | Details |
| :--- | :--- |
| **Stage** | Stage 5: QA, Security & Production Deployment |
| **Last Updated** | November 12, 2026 |
| **Audience** | Asabiyyah Technologies Ltd Internal Engineering & Content Teams |

---

## 1. Overview of the Maintenance Model

The Asabiyyah corporate website uses a **decoupled data-driven static architecture**. Content updates, team updates, and service modifications do not require editing raw HTML or CSS. All factual business data is maintained in structured JSON files in `src/data/`.

When any data file is edited, running `python build.py` re-compiles the entire website in `< 100 milliseconds`, updating all headers, footers, schema markup, and pages simultaneously.

---

## 2. Common Maintenance Tasks

### 2.1 Updating Company Facts & Contact Information
- **File to Edit:** `src/data/company.json`
- **Fields Available:**
  - `phone`: Corporate phone and WhatsApp number.
  - `email`: Corporate inquiry address.
  - `registered_address`: Street, town, state, post code.
  - `operational_presence`: Regional hub list.
  - `mission`, `vision`, `values`: Core corporate philosophies.
- **Workflow:**
  1. Edit `src/data/company.json`.
  2. Run `python build.py`.
  3. Run `python scripts/run_local_tests.py` to confirm zero broken links.
  4. Commit and push to Git. Cloudflare Pages automatically rebuilds and deploys in seconds.

---

### 2.2 Adding or Updating Leadership Profiles
- **File to Edit:** `src/data/team.json`
- **Fields Available:**
  - `name`, `role`, `statutory_title`, `equity_share`.
  - `credentials`: List of verified degrees and certifications.
  - `summary`: Biography paragraph.
  - `technical_expertise`: Comma-separated domain expertise.
  - `links`: GitHub, LinkedIn, email.
- **Workflow:**
  1. Edit or add founder entries in `src/data/team.json`.
  2. Run `python build.py`.
  3. Verify on `http://localhost:3000/about/`.

---

### 2.3 Updating Products & Development Status
- **File to Edit:** `src/data/products.json`
- **Fields Available:**
  - `name`, `tier`, `category_badge`.
  - `status`: e.g. "Closed-Cohort Alpha Pilot Validation", "Public Beta", "Commercial Production".
  - `status_color`: `amber`, `emerald`, or `sky`.
  - `regulatory_disclaimer`: Mandatory non-bank disclaimer for Dila.
  - `key_features`: List of titles and descriptions.
- **Workflow:**
  1. Update product parameters in `src/data/products.json`.
  2. Run `python build.py`.

---

### 2.4 Adding a New Commercial Practice
- **File to Edit:** `src/data/services.json`
- **Fields Available:**
  - `title`, `tagline`, `description`, `icon` (`code`, `cpu`, `check-circle`, `database`).
  - `problems_solved`: Bullet list of challenges addressed.
  - `deliverables`: List of concrete engineered systems delivered.
  - `ideal_clients`: Target institutional profile.
  - `technologies`: Array of technology pills.
- **Workflow:**
  1. Add entry to `src/data/services.json`.
  2. Run `python build.py`.
  3. Both the Home page preview card and Services page detailed block update automatically.

---

### 2.5 Adding a New Page Route
To add a new route (e.g. `/careers`):
1. Create page template: `src/pages/careers.py` following existing page signatures.
2. In `build.py`, import `render_careers_page` and add the route dictionary:
   ```python
   {
       "name": "Careers",
       "path": "/careers",
       "out_file": os.path.join(DIST_DIR, "careers", "index.html"),
       "renderer": lambda: render_careers_page(company_data),
       "priority": "0.7",
       "changefreq": "monthly"
   }
   ```
3. Update `src/components/header.py` and `src/components/footer.py` if global navigation should include the new route.
4. Run `python build.py` and `python scripts/run_local_tests.py`.

---

## 3. Security & Dependency Maintenance

- **npm Dependencies:** `0` (No `npm audit` or package vulnerabilities to patch).
- **Python Dependencies:** Standard library only. No `pip install` updates required.
- **Annual Maintenance:**
  - Verify TLS certificate renewal on Cloudflare (automated).
  - Review NDPR privacy compliance and data minimization policies on `/legal#privacy`.
  - Review statutory CAC filings in `src/data/company.json` upon any corporate restructuring.
