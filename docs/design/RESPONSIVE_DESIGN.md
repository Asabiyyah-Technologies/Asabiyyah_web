# Responsive Design & Multi-Viewport Specifications: Asabiyyah Technologies Ltd

This document defines the responsive behavior, viewport adaptations, layout shifts, and touch ergonomics across the complete device spectrum for Asabiyyah Technologies Ltd.

---

## 1. Viewport Spectrum & Breakpoint Matrix

| Tier Name | Viewport Range | Target Devices | Primary Layout Adaptation | Navigation Mode |
| :--- | :--- | :--- | :--- | :--- |
| **Mobile Small** | `320px – 374px` | iPhone SE, budget Androids | Single column linear; typography scales down ~15%; full-width buttons | Full-screen slide-over drawer |
| **Mobile Standard** | `375px – 639px` | iPhone 13/14/15, Galaxy S series | Single column stack; comfortable 16px horizontal margins; fluid typography | Full-screen slide-over drawer |
| **Tablet Portrait** | `640px – 767px` | iPad Mini, small tablets | 2-column card grids; centered hero; full-width form inputs | Full-screen slide-over drawer |
| **Tablet Landscape**| `768px – 1023px` | iPad Air/Pro portrait, surface tabs | 2-column asymmetric grids; horizontal stat strips | Collapsed drawer navigation |
| **Desktop Standard**| `1024px – 1279px`| Standard laptops, MacBooks | 12-column grid; 4-column service grid; sticky desktop nav | Full desktop header with horizontal links |
| **Wide Desktop** | `1280px – 1920px`| Desktop monitors, iMacs | Max container width `1280px`; expansive whitespace; side-by-side previews | Full desktop header with direct CTA button |
| **Ultra-Wide / 4K** | `> 1920px` | 4K monitors, TV displays | Container centered (`max-w-7xl`); zero edge distortion | Centered header container |

---

## 2. Core Section Responsive Behaviors

### A. Navigation Header
- **Desktop (`≥ 1024px`):** Horizontal bar (`height: 80px`). Logo mark + wordmark on left; 5 navigation links center; primary CTA button on right.
- **Mobile & Tablet (`< 1024px`):** Compact header (`height: 64px`). Logo mark + wordmark on left; hamburger trigger on right. Tapping opens right-hand slide drawer with background scroll lock.

### B. Hero Section
- **Desktop:** Asymmetric 7:5 grid. Left column houses eyebrow tag, H1 display headline (`60px`), lead paragraph, and dual CTA buttons. Right column houses the elevated corporate trust card (circular crescent symbol, live operational badges, and CAMA 2020 legal certificate extract).
- **Tablet:** Stacked layout. Headline and subhead top-aligned; trust card rendered below with `margin-top: 32px`.
- **Mobile:** Single column. Headline fluidly reduces to `36px` / `40px` with tight line height (`1.15`). CTAs stack vertically: Primary CTA takes `100% width`, Secondary CTA sits below with `12px` gap.

### C. Service Practice Grid
- **Desktop (`≥ 1024px`):** 4-column horizontal card grid (`grid-cols-4`, gap `24px`).
- **Tablet (`640px – 1023px`):** 2×2 card grid (`grid-cols-2`, gap `24px`).
- **Mobile (`< 640px`):** Single column stack (`grid-cols-1`, gap `16px`). Each card maintains internal `24px` padding.

### D. Product Showcases (Dila & AMANA SHIELD)
- **Desktop:** Alternating two-column layout. Column A displays product narrative, feature checkmarks, and pilot CTA; Column B displays the interactive UI card / system architecture diagram.
- **Mobile & Tablet:** Stacks naturally into a single column: text narrative first, followed immediately by the visual UI diagram.

### E. Data Tables & Legal Profiles
- **Desktop:** Full-width structured data table with high-contrast headers, alternating row tints (`#F8FAFC`), and right-aligned action tags.
- **Mobile:** Wrapped in a responsive horizontal-scroll container (`overflow-x-auto`) with a subtle fade mask on the right edge, accompanied by a touch indicator: *"Swipe horizontally to inspect all columns"*.

### F. Structured Contact Form
- **Desktop:** Two-column split layout. Left side provides direct corporate contact details, physical registered office card, email, phone, and response SLA. Right side houses the interactive form container (`max-w-xl`).
- **Mobile:** Stacks vertically. Form fields appear first to minimize friction; physical office address and corporate disclosures appear directly below the form.

---

## 3. Touch Ergonomics & Accessibility Rules

1. **Touch Target Dimensions:** All interactive triggers (navigation links, buttons, form inputs, accordion headers) must meet a minimum tappable area of **`48 × 48 px`**.
2. **Thumb Zone Architecture:** On mobile devices, primary conversion buttons are anchored within easy reach of the thumb zone (lower half of screen or full-width buttons).
3. **Form Zoom Prevention:** All text input fields specify a base font size of `16px` (`1rem`). On iOS Mobile Safari, any input font size smaller than `16px` triggers an automatic, jarring screen zoom upon focus; adhering to `16px` eliminates this defect entirely.
4. **Readable Line Lengths:** Paragraph line lengths are constrained to **45–75 characters per line** (`max-w-prose` / `max-w-2xl`) to maintain optimal ocular tracking and reading rhythm.
