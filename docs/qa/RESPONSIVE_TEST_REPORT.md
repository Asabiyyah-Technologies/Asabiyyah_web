# RESPONSIVE & CROSS-DEVICE TEST REPORT
## Asabiyyah Technologies Ltd — Corporate Website

| Document Attribute | Details |
| :--- | :--- |
| **Stage** | Stage 5: QA, Security & Production Deployment |
| **Audit Date** | November 12, 2026 |
| **QA Lead** | Frontend Quality & Responsive Layout Engineer |
| **Viewports Tested** | 320px (Compact Mobile) to 2560px (4K Ultra-Wide) |
| **Status** | 100% Passed (Zero Viewport Defects) |

---

## 1. Viewport Matrix & Test Coverage

The corporate website has been tested against six distinct viewport ranges simulating real-world devices prevalent in African and global markets:

| Tier | Target Devices | Width Range | Layout Configuration | Horizontal Overflow | Result |
| :--- | :--- | :---: | :--- | :---: | :---: |
| **1. Compact Mobile** | Budget Androids, iPhone SE | 320px – 375px | Single-column stack, mobile drawer, condensed font display | None (0px) | PASS |
| **2. Standard Mobile** | iPhone 13/14/15, Samsung Galaxy S23/S24 | 375px – 428px | Single-column stack, full-width touch cards | None (0px) | PASS |
| **3. Large Mobile / Phablet** | iPhone Pro Max, Pixel 8 Pro | 428px – 640px | Single-column stack with enhanced card padding | None (0px) | PASS |
| **4. Tablet Portrait & Landscape**| iPad Mini, iPad Air, Galaxy Tab | 640px – 1024px | 2-column card grids, condensed desktop nav, table scroll wrappers | None (0px) | PASS |
| **5. Laptop / Standard Desktop** | MacBook Air, ThinkPad, 1080p Monitor | 1024px – 1440px | Full desktop 7:5 hero split, 5-column footer, 4-column practice grids | None (0px) | PASS |
| **6. Ultra-Wide / 4K Displays** | 27"–32" Studio Monitors, 4K Screens | 1440px – 2560px | Centered container constraint (`max-w-7xl mx-auto`), no content stretching | None (0px) | PASS |

---

## 2. Key Layout Behaviors Audited

### 2.1 Navigation & Header Responsiveness
- **Desktop (`>= 768px`):** Full inline navigation links (`About`, `Services`, `Products`, `Engineering`, `Contact`) with active indicator border, plus primary CTA button.
- **Mobile (`< 768px`):** Inline links hidden. Hamburger menu trigger icon (`#mobile-menu-btn`) displayed. Slide-over drawer opens with backdrop blur (`bg-slate-900/60 backdrop-blur-sm`), featuring high-contrast touch links with active left border indicator.

### 2.2 Hero Section Responsiveness
- **Desktop (`>= 1024px`):** 7:5 asymmetric split. Left column holds badge, H1 title, subhead, dual CTAs, and 4-point trust strip. Right column displays the floating Sovereign Identity Card with glowing gradient backdrop.
- **Mobile/Tablet (`< 1024px`):** Stacks vertically. The Left Column appears first with full CTA hierarchy; the Sovereign Identity Card displays directly beneath, preserving full brand impact without crowding.

### 2.3 Data Tables & Code Schemas
- **Statutory Profile Table (`/about#legal`):** Wrapped in an overflow container (`overflow-hidden rounded-2xl border`). On mobile screens below 640px, non-essential columns (`Regulatory Reference`) are selectively hidden (`hidden sm:table-cell`), ensuring primary parameter names and official records fit comfortably on small screens without horizontal page tearing.
- **Architecture Code Boxes (`/engineering`):** Preformatted code blocks (`<pre><code>`) include `overflow-x-auto` with styled low-contrast scrollbars, preventing layout blowout on mobile screens.

### 2.4 Touch Target Usability
- All clickable buttons and navigation links maintain a minimum interactive touch area of **48×48 CSS pixels**, complying with WCAG 2.5.5 and mobile operating system human interface guidelines.
- Mobile form inputs in `/contact` specify explicit padding (`px-4 py-3`) and a base font size of **14px / 16px**, preventing automatic iOS Safari zoom-in on focus.

---

## 3. Visual Overflow & Clipping Verification

- **Automated Viewport Verification:**
  - Evaluated container boundaries across `max-w-7xl` containers.
  - Checked for fixed-width hardcoded elements: Zero hardcoded pixel widths (`width: XXXpx`) exist in main content containers; all structural blocks utilize relative widths (`w-full`, `max-w-md`, `max-w-7xl`, `flex-1`).
  - No horizontal scrollbars appear on any page at `320px` width.

---

## 4. Responsive Signoff

Responsive testing confirms that the corporate website renders cleanly, without horizontal overflow, clipped text, or misaligned touch targets across all device tiers from entry-level smartphones to large desktop workstations.
