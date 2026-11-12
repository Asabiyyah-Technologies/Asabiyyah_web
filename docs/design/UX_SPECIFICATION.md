# UX Specification & Interaction Architecture: Asabiyyah Technologies Ltd

This document defines the comprehensive user experience (UX) specifications, information hierarchy, multi-viewport layout behaviors, and conversion mechanics for the corporate website.

---

## 1. Information Hierarchy & Cognitive Flow

The website UX is designed around an immediate 5-second cognitive test:
1. **0–3 Seconds:** The visitor understands *who* Asabiyyah is (an African systems and AI technology company) and *what* makes it credible (institutional engineering, certified standing, real products).
2. **3–10 Seconds:** The visitor discovers the 4 concrete capability practices and verified flagship products (Dila and AMANA SHIELD).
3. **10–30 Seconds:** The visitor evaluates technical depth, founder pedigree, and architectural rigor.
4. **30+ Seconds:** The visitor is guided to a frictionless, context-aware contact or pilot inquiry funnel.

```
Cognitive Progression on Homepage:
[ Authority & Thesis ] ──> [ Capability Practices ] ──> [ Product Proof ] ──> [ Engineering Rigor ] ──> [ Leadership ] ──> [ Conversion ]
```

---

## 2. Global Navigation Architecture

### A. Desktop Navigation Pattern (Viewport `≥ 1024px`)
- **Left:** Primary corporate brandmark (Crescent Symbol + `ASABIYYAH TECHNOLOGIES LTD`). Clicking always routes to `/`.
- **Center:** Five primary text links with generous click areas:
  - `About` (`/about`)
  - `Services` (`/services`)
  - `Products` (`/products`)
  - `Engineering` (`/engineering`)
  - `Contact` (`/contact`)
- **Right:** Primary action button: `Start a Conversation` (`/contact`).
- **Interaction Rules:**
  - Active route highlighted by a fine gold underline (`2px solid #C8960C`).
  - Hover triggers smooth text color transition to `--asb-navy-800` (`150ms`).
  - Keyboard tab navigation reveals a high-contrast focus ring around each item.

### B. Mobile & Tablet Navigation Pattern (Viewport `< 1024px`)
- **Header Bar:** Brandmark on left; accessible hamburger toggle button (`aria-label="Toggle navigation menu"`, `aria-expanded="false"`) on right. Minimum touch target `48×48px`.
- **Drawer Slide-Over:**
  - Tapping opens a full-height slide-over drawer from the right edge with backdrop overlay.
  - Links listed vertically in large, comfortable type (`20px`, `weight: 600`) with generous spacing (`24px` tap padding).
  - Prominent full-width button at drawer bottom: `Start a Conversation`.
  - Close button (`✕`) at top right; pressing `Escape` key immediately closes the drawer and restores focus to the hamburger trigger.
  - Background scrolling is locked while the drawer is open.

---

## 3. Responsive Layout Schemas Across Viewports

```
+-------------------------------------------------------------------------------------------------+
|                                 VIEWPORT BEHAVIOR SCHEMAS                                       |
+---------------------------------+-------------------------------+-------------------------------+
| DESKTOP (>= 1024px):            | TABLET (768px - 1023px):      | MOBILE (320px - 767px):       |
| Multi-column asymmetric grids;  | 2-column balanced grids;      | Single-column linear stack;    |
| sticky navigation; rich preview | hybrid drawer navigation;     | full-width touch buttons;     |
| panels.                         | touch-optimized spacing.      | horizontal scrolling tables.  |
+---------------------------------+-------------------------------+-------------------------------+
```

### A. Desktop Layout (1280px Grid)
- 12-column responsive grid with `32px` gutters and `32px` page margins.
- Hero section utilizes an asymmetric 7:5 split (7 columns for headline, thesis, and dual CTAs; 5 columns for the interactive system trust card / logo lockup preview).
- Service practices display as a 4-column balanced grid or 2×2 modular grid with expansive white cards.
- Product showcase features alternating two-column layouts: full architectural description on one side, crisp UI card / topology diagram on the other.

### B. Tablet Layout (768px – 1023px Grid)
- 8-column responsive grid with `24px` gutters.
- Hero section transitions to a stacked format: headline and subhead top, visual trust card directly below.
- Service practices display as a 2-column grid.
- Product sections stack vertically (text on top, visual diagram below) with full width.

### C. Mobile Layout (320px – 767px Grid)
- 4-column responsive grid with `16px` gutters.
- Hero headline fluidly scales to `40px` (or `32px` on small devices) with tight line height (`1.15`).
- All buttons stretch to `width: 100%` for comfortable one-thumb tapping.
- Data tables (such as the CAC legal profile or stack inventory) are housed within horizontal-scroll wrappers with a subtle fade gradient indicating swipeability.

---

## 4. Dedicated Conversion Pathways

### Pathway 1: Commercial Enterprise Software Inquiry
```
[ Home / Services ]
        │  (User clicks "Start an Engineering Conversation" on practice card)
        ▼
[ /contact?type=enterprise-software ]
        │  • Category pre-selected to "Commercial & Enterprise Software"
        │  • User enters organization name, work email, phone, and scope summary
        ▼
[ Instant Client-Side Validation ]
        │  • Inline green checkmarks confirm valid inputs
        │  • Submit button states: "Submitting..." -> "Inquiry Transmitted"
        ▼
[ Confirmation Screen / Response SLA ]
        • "Inquiry received. A senior architect will review your parameters within 24 business hours."
```

### Pathway 2: Cooperative Leader / Dila Pilot Application
```
[ Home (Dila Spotlight) OR /products ]
        │  (User clicks "Request Pilot Access")
        ▼
[ /contact?type=dila-pilot ]
        │  • Category pre-selected to "Dila Cooperative Pilot Access"
        │  • User enters cooperative name, estimated member count, and city (e.g. Kano)
        ▼
[ Immediate Submission & Routing ]
        • Routes directly to COO Mahmud Rabiu Zakariyya for field team scheduling.
```

### Pathway 3: Technical Evaluator & Institutional Diligence
```
[ Home ] ──> [ /engineering ] ──> [ Reviews Stack & Security ] ──> [ /about ] ──> [ Downloads Legal Profile ]
```

---

## 5. Contact Journey & Form UX Best Practices

1. **Inline Field Validation:** Errors appear below fields only after the user blurs the input or attempts to submit, preventing premature error shaming.
2. **Context Preservation:** If a user navigates to `/contact` from a specific service or product button, the dropdown is pre-populated with their intent.
3. **No Dead Ends:** The success state provides immediate confirmation, outlines next steps, and offers links to explore research or return home.
4. **Accessible Error Announcements:** Form errors trigger an `aria-live="polite"` alert so screen readers immediately inform the user of missing inputs.
