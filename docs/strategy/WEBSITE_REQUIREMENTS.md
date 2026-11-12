# Website Requirements Specification: Asabiyyah Technologies Ltd

This document defines the comprehensive functional and non-functional requirements for the official corporate website of Asabiyyah Technologies Ltd.

---

## 1. Functional Requirements

### FR-01: Global Navigation & Header
- **Fixed / Sticky Header:** Clean, lightweight navigation bar featuring the master Asabiyyah corporate lockup (logo + wordmark), desktop navigation links (`Home`, `About`, `Services`, `Products`, `Engineering`, `Contact`), and a prominent high-contrast CTA button (*"Start a Conversation"*).
- **Mobile Responsive Drawer:** On viewports `< 768px`, navigation smoothly collapses into an accessible slide-over / hamburger drawer with touch-friendly tap targets (`min 48×48px`).
- **Active Route Indication:** Clear visual indicator (subtle gold underline / badge) displaying current page location.
- **Scroll Behavior:** Smooth scrolling; header acquires a subtle elevation shadow and backdrop blur upon scrolling down.

### FR-02: Structured Contact & Project Inquiry Engine
- **Dedicated Route:** `/contact` with contextual pre-selection via URL query parameters (e.g., `/contact?type=dila-pilot`, `/contact?type=enterprise-software`).
- **Required Fields:**
  1. Full Name (String, required).
  2. Organization / Institution Name (String, optional for individuals, required for enterprise).
  3. Work Email Address (Email, required, strict RFC validation).
  4. Phone Number / WhatsApp (String, required, international format validation).
  5. Inquiry Type (Dropdown: Enterprise Custom Software, Dila Pilot Access, Civic AI / AMANA SHIELD, Institutional Partnership, General Inquiry).
  6. Project Scope / Summary (Textarea, required, 20–2000 characters).
  7. Estimated Project Timeline (Dropdown: Immediate, 1–3 Months, 3–6 Months, Exploratory).
- **Form State Management:** Client-side field validation, immediate inline error feedback, disabled submit button during transmission, and clear, polite success message (*"Thank you. Your inquiry has been routed to our leadership team. We will respond within 24 business hours."*).
- **Anti-Spam & Abuse Protection:** Honeypot hidden fields and client-side timestamp checks without intrusive third-party CAPTCHAs that degrade user experience.

### FR-03: Product & Initiative Presentation Modules
- **Distinct Status Badging:** Every product/project must prominently display its verified operational status:
  - Dila: `Closed-Cohort Alpha Pilot Validation`
  - AMANA SHIELD: `Functional Backend API & Intelligence Engine`
  - ClassGPT-N: `Applied AI Research Prototype`
- **Tabbed / Filterable Portfolio:** Allow visitors to view all or filter by category (`Commercial Products`, `Civic AI`, `Research Directions`).
- **Regulatory Disclaimers:** Dila product sections must display an unmissable, styled callout stating: *"Dila is a pure software platform. Dila does not take custody of funds, issue loans, or operate as a bank. Monetary flows route via licensed CBN commercial banks."*

### FR-04: Corporate Transparency & Legal Verification Footer
- **Statutory Identity:** Displays full legal entity name: **ASABIYYAH TECHNOLOGIES LTD** (Incorporated under CAMA 2020, RC: **9918400**).
- **Physical Registered Address:** 2, Kunya - B Mutum Road, Babura Town, Jigawa State, Nigeria — 732104.
- **Direct Channels:** `info@asabiyyah.com` and `+234 806 475 3943`.
- **Navigation Links:** Fast links to all major pages, plus Privacy Policy, Terms of Service, and Financial Disclaimers.
- **Copyright Statement:** `© 2026 Asabiyyah Technologies Ltd. All rights reserved.`

### FR-05: Downloadable Corporate Profile (If Approved)
- A clean, dedicated download action on `/about` and `/contact` to download a verified PDF Corporate Profile / Fact Sheet once formally compiled.

### FR-06: Search Functionality Assessment
- **Evaluation:** Given a focused 7-route corporate website with high information hierarchy, an in-page search bar creates unnecessary complexity, bundle bloat, and maintenance overhead without meaningful user benefit.
- **Requirement:** **Search is excluded** in favor of clean categorization, sticky navigation, and a comprehensive footer sitemap.

---

## 2. Non-Functional Requirements

### NFR-01: Performance & Lightweight Architecture
- **Page Load Budget:** Initial load `< 1.5 seconds` on simulated fast 3G / average 4G connections.
- **Asset Size Budget:** Total initial JavaScript bundle `< 120 KB` compressed (gzipped/brotli). Total initial CSS `< 30 KB`.
- **Lighthouse Performance Score:** Target score `≥ 95/100` across Desktop and Mobile audits.
- **Zero Heavy Dependencies:** Strictly prohibit heavy UI component frameworks (e.g., bulky Material UI, bloated CSS animations). Use clean Tailwind CSS utility classes and lightweight vanilla interactions.

### NFR-02: Accessibility (a11y)
- **WCAG Compliance:** Adhere strictly to **WCAG 2.1 Level AA** standards.
- **Color Contrast:** Minimum contrast ratio of `4.5:1` for normal text and `3:1` for large text. The primary corporate palette (`#1B2A4A` on `#FFFFFF` provides `11.8:1` contrast; white text on `#0D1B3E` provides `16.4:1` contrast).
- **Keyboard Navigability:** Full keyboard access (Tab, Shift+Tab, Enter, Space, Escape) with visible focus rings on all interactive elements.
- **Semantic HTML & Screen Readers:** Proper use of semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`), appropriate ARIA attributes (`aria-expanded`, `aria-label`, `aria-live`), and descriptive alt text on all imagery.

### NFR-03: Search Engine Optimization (SEO) & Social Sharing
- **Semantic Meta Tags:** Unique, keyword-rich `<title>` and `<meta name="description">` tags on every page.
- **Canonical URLs:** Self-referential `<link rel="canonical">` tags on all routes.
- **Open Graph (OG) & Twitter Cards:** Complete `og:title`, `og:description`, `og:image`, `og:url`, `twitter:card` tags enabling rich previews when shared on WhatsApp, LinkedIn, X, and Facebook.
- **JSON-LD Structured Data:** Schema.org `Corporation` metadata on `/` and `BreadcrumbList` on sub-pages:
  ```json
  {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Asabiyyah Technologies Ltd",
    "url": "https://www.asabiyyah.com",
    "logo": "https://www.asabiyyah.com/assets/brand/asabiyyah-logo-master.png",
    "description": "African technology company engineering high-integrity software, intelligent systems, and resilient digital infrastructure.",
    "foundingDate": "2026-10-07",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2, Kunya - B Mutum Road",
      "addressLocality": "Babura Town",
      "addressRegion": "Jigawa State",
      "postalCode": "732104",
      "addressCountry": "NG"
    }
  }
  ```
- **Robots & Sitemap:** Clean `robots.txt` and auto-generated `sitemap.xml`.

### NFR-04: Security Posture & Data Privacy
- **Transport Security:** Strict HTTPS enforcement with modern TLS 1.3/1.2 cipher suites, HSTS headers.
- **Security Headers:** Enforce `Content-Security-Policy` (CSP), `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`.
- **Zero Credential Exposure:** Absolutely no API keys, private tokens, or backend credentials exposed in client-side code or public repositories.
- **Data Privacy Compliance:** Aligned with Nigeria Data Protection Regulation (NDPR) and NDPA 2023. No unnecessary cookies or tracking beacons without explicit user consent.

### NFR-05: Mobile-First Responsive Design & Browser Support
- **Responsive Viewport Spectrum:** Flawless rendering from `320px` (small smartphones) through `375px`, `414px`, `768px` (tablets), `1024px`, `1440px`, to `2560px` (4K desktop monitors).
- **Touch Targets:** Minimum `48×48px` tappable area for all mobile navigation and action buttons.
- **Cross-Browser Compatibility:** Verified across Google Chrome, Apple Safari (iOS/macOS), Mozilla Firefox, Microsoft Edge, and mobile browsers (Samsung Internet, Opera Mini / Android Chrome).

### NFR-06: Code Maintainability & Modularity
- **Component-Driven Architecture:** Clean separation of concerns into reusable atomic UI components (`Button`, `Card`, `Badge`, `Header`, `Footer`, `SectionContainer`, `Input`).
- **Type Safety:** 100% strict TypeScript types for all component props, data models, and API interfaces.
- **Zero Dead Code:** Linted with strict ESLint rules; zero unused imports or styling artifacts.
