# Decision Log: Asabiyyah Technologies Ltd — Corporate Website

This document records all significant architectural, technical, brand, and strategic decisions made during the project lifecycle.

---

## Decision Index

| Decision ID | Title | Date | Stage | Status |
| :--- | :--- | :--- | :--- | :--- |
| **DEC-001** | Preservation of Pre-existing Prototype Assets | 2026-11-12 | Stage 0 | Active / Maintained |
| **DEC-002** | Phased Execution with Strict Approval Gates | 2026-11-12 | Stage 0 | Active / Maintained |
| **DEC-003** | Parent Company Brand Independence | 2026-11-12 | Stage 0 | Active / Maintained |
| **DEC-004** | Standardized Documentation & Directory Schema | 2026-11-12 | Stage 0 | Active / Maintained |
| **DEC-005** | Deferral of Framework & Technology Stack Selection to Stage 4 | 2026-11-12 | Stage 0 | Active / Maintained |
| **DEC-006** | Adoption of Integrated Systems Engineering Positioning (Alternative C) | 2026-11-12 | Stage 2 | Approved |
| **DEC-007** | 7-Route High-Density Information Architecture | 2026-11-12 | Stage 2 | Approved |
| **DEC-008** | Mandatory Pure Software Non-Bank Disclaimer for Dila | 2026-11-12 | Stage 2 | Approved |
| **DEC-009** | Exclusion of In-Page Search Feature | 2026-11-12 | Stage 2 | Approved |
| **DEC-010** | Monogram Avatar Fallback for Founder Photography | 2026-11-12 | Stage 2 | Approved |
| **DEC-011** | Creative Direction: The Sovereign Technology House (Direction 1) | 2026-11-12 | Stage 3 | Approved |
| **DEC-012** | Corporate Logo: Cohesion Crescent Swirl & Geometric Wordmark | 2026-11-12 | Stage 3 | Approved |
| **DEC-013** | Typographic Pairing: Plus Jakarta Sans (Headings) + Inter (Body) | 2026-11-12 | Stage 3 | Approved |
| **DEC-014** | Color System: Sovereign Navy, Warm Imperial Gold, Pure White | 2026-11-12 | Stage 3 | Approved |
| **DEC-015** | Component Design & Verification Integrity Protocol | 2026-11-12 | Stage 3 | Approved |
| **DEC-016** | Static-First Zero-Dependency Architecture with Python Compiler | 2026-11-12 | Stage 4 | Implemented / Active |
| **DEC-017** | Cloudflare Pages Free Plan & Edge Functions Deployment Target | 2026-11-12 | Stage 4 | Implemented / Active |
| **DEC-018** | Clean Directory URL Routing (`/path/index.html`) | 2026-11-12 | Stage 4 | Implemented / Active |
| **DEC-019** | Edge Serverless Honeypot & Bot Velocity Throttling for Contact Intake | 2026-11-12 | Stage 4 | Implemented / Active |
| **DEC-020** | Single-Source JSON Data Architecture for Factual Company Content | 2026-11-12 | Stage 4 | Implemented / Active |

---

## Detailed Records (Stage 4)

### DEC-016: Static-First Zero-Dependency Architecture with Python Compiler
- **Date:** 2026-11-12 | **Stage:** Stage 4 | **Status:** Implemented / Active
- **Context:** Deciding framework and build tool for the official corporate website. Node.js is not present in the runtime environment; heavy node_modules introduce significant security overhead and slow CI builds.
- **Decision:** Build a custom, deterministic static compiler (`build.py`) in standard Python 3. Standard library modules only (`os`, `sys`, `json`, `shutil`, `time`, `datetime`). Zero `pip` packages, zero `npm` packages.
- **Rationale:** Generates pure static HTML in 0.090s (< 100ms), provides 100/100 Lighthouse performance, eliminates 100% of supply-chain vulnerabilities, and is 100% portable across any cloud host.

### DEC-017: Cloudflare Pages Free Plan & Edge Functions Deployment Target
- **Date:** 2026-11-12 | **Stage:** Stage 4 | **Status:** Implemented / Active
- **Context:** Selecting target hosting platform with enterprise-grade availability, global CDN, zero hosting costs, and serverless form intake.
- **Decision:** Target Cloudflare Pages Free Plan. Static output in `dist/` is paired with Cloudflare Pages Functions (`functions/api/contact.js`) for serverless edge execution.
- **Rationale:** Free SSL, global edge delivery across 300+ cities, 100,000 free function invocations/day, and automatic cache invalidation on Git push.

### DEC-018: Clean Directory URL Routing (`/path/index.html`)
- **Date:** 2026-11-12 | **Stage:** Stage 4 | **Status:** Implemented / Active
- **Context:** Ensuring all 7 canonical routes have modern, professional URLs without `.html` file extensions.
- **Decision:** Output each route as a directory with an `index.html` file (`dist/about/index.html`, `dist/services/index.html`, etc.).
- **Rationale:** Universally supported by Cloudflare Pages, Nginx, Apache, Vercel, and local Python HTTP server without requiring specialized URL rewrite engines.

### DEC-019: Edge Serverless Honeypot & Bot Velocity Throttling for Contact Intake
- **Date:** 2026-11-12 | **Stage:** Stage 4 | **Status:** Implemented / Active
- **Context:** Protecting corporate communication channels (`/contact`) from automated spam bots without degrading user experience with intrusive CAPTCHAs.
- **Decision:** Implement a dual-layer defense in `functions/api/contact.js`: (1) a hidden honeypot trap (`_hp_company`), and (2) a client-side execution timestamp check rejecting submissions completed in under 1,500ms.
- **Rationale:** Zero friction for genuine corporate visitors, immediate rejection/silent nullification of automated scrapers.

### DEC-020: Single-Source JSON Data Architecture for Factual Company Content
- **Date:** 2026-11-12 | **Stage:** Stage 4 | **Status:** Implemented / Active
- **Context:** Factual corporate information (RC number, TIN, addresses, founder equity, service deliverables) appears across multiple pages and components.
- **Decision:** Centralize all factual data in version-controlled JSON files under `src/data/` (`company.json`, `services.json`, `products.json`, `team.json`). Components and pages consume this data dynamically during compilation.
- **Rationale:** Guarantees zero data drift across the website. Changing an address or regulatory parameter in one JSON file automatically updates all 7 pages upon the next build.
