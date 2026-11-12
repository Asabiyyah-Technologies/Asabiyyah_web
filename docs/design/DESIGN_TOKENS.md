# Design Tokens & System Specifications: Asabiyyah Technologies Ltd

This document defines the formal design tokens, CSS custom properties, Tailwind CSS configuration variables, typography scales, spacing units, and component styling rules for the corporate website.

---

## 1. CSS Custom Properties (`:root`)

```css
:root {
  /* Brand Sovereign Navy Palette */
  --asb-navy-950: #071324;
  --asb-navy-900: #0A192F;
  --asb-navy-800: #0D2B4E;
  --asb-navy-700: #1B2A4A;
  --asb-navy-600: #2C3E5F;
  --asb-navy-500: #3B5278;

  /* Imperial Warm Gold Palette */
  --asb-gold-900: #78350F;
  --asb-gold-800: #92400E;
  --asb-gold-700: #B45309;
  --asb-gold-600: #C8960C;
  --asb-gold-500: #C8A951;
  --asb-gold-400: #D4B96A;
  --asb-gold-300: #FDE68A;
  --asb-gold-100: #FEF3C7;
  --asb-gold-50:  #FFFBEB;

  /* Cobalt Accent */
  --asb-cobalt-600: #2563EB;
  --asb-cobalt-500: #3B82F6;
  --asb-cobalt-100: #DBEAFE;

  /* Neutral Canvas & Surfaces */
  --asb-canvas-base: #FFFFFF;
  --asb-canvas-alt:  #F8FAFC;
  --asb-canvas-mute: #F1F5F9;
  --asb-border-subtle: #E2E8F0;
  --asb-border-strong: #CBD5E1;

  /* Typography Colors */
  --asb-text-primary:   #0F172A;
  --asb-text-secondary: #475569;
  --asb-text-muted:     #64748B;
  --asb-text-inverse:   #FFFFFF;
  --asb-text-inverse-sub: #94A3B8;

  /* Status Tokens */
  --asb-status-success: #059669;
  --asb-status-success-bg: #ECFDF5;
  --asb-status-warning: #D97706;
  --asb-status-warning-bg: #FFFBEB;
  --asb-status-error:   #DC2626;
  --asb-status-error-bg:   #FEF2F2;
  --asb-status-info:    #0284C7;
  --asb-status-info-bg:    #F0F9FF;

  /* Elevation Shadows */
  --asb-shadow-sm: 0 1px 2px 0 rgb(15 23 42 / 0.05);
  --asb-shadow-md: 0 4px 6px -1px rgb(15 23 42 / 0.07), 0 2px 4px -2px rgb(15 23 42 / 0.05);
  --asb-shadow-lg: 0 10px 15px -3px rgb(15 23 42 / 0.08), 0 4px 6px -4px rgb(15 23 42 / 0.04);
  --asb-shadow-xl: 0 20px 25px -5px rgb(15 23 42 / 0.10), 0 8px 10px -6px rgb(15 23 42 / 0.04);
  --asb-shadow-glow-gold: 0 0 20px -3px rgb(200 150 12 / 0.25);

  /* Border Radii */
  --asb-radius-sm: 4px;
  --asb-radius-md: 8px;
  --asb-radius-lg: 12px;
  --asb-radius-xl: 16px;
  --asb-radius-2xl: 24px;
  --asb-radius-full: 9999px;
}
```

---

## 2. Typography Scale & Fluid Hierarchy

| Level | Size (Desktop / `rem`) | Size (Mobile / `px`) | Line Height | Tracking | Weight | Recommended Element |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Display Hero** | `3.75rem` (60px) | `2.5rem` (40px) | `1.1` | `-0.025em` | `800` (ExtraBold) | `<h1>` (Homepage Hero) |
| **Heading 1** | `2.75rem` (44px) | `2.0rem` (32px) | `1.15` | `-0.02em` | `700` (Bold) | `<h1>` (Inner Pages) |
| **Heading 2** | `2.0rem` (32px) | `1.5rem` (24px) | `1.25` | `-0.015em` | `700` (Bold) | `<h2>` (Section Titles) |
| **Heading 3** | `1.5rem` (24px) | `1.25rem` (20px) | `1.35` | `-0.01em` | `600` (SemiBold) | `<h3>` (Card / Practice Titles) |
| **Heading 4** | `1.25rem` (20px) | `1.125rem` (18px) | `1.4` | `0` | `600` (SemiBold) | `<h4>` (Subsection / Deliverables) |
| **Lead Paragraph** | `1.125rem` (18px) | `1.0rem` (16px) | `1.6` | `0` | `400` (Regular) | `<p class="lead">` |
| **Body Standard** | `1.0rem` (16px) | `0.9375rem` (15px) | `1.6` | `0` | `400` (Regular) | `<p>`, `<li>`, `<td>` |
| **Body Small** | `0.875rem` (14px) | `0.8125rem` (13px) | `1.5` | `0` | `400` / `500` | Explanations, metadata, labels |
| **Caption / Tag** | `0.75rem` (12px) | `0.75rem` (12px) | `1.4` | `+0.05em` | `600` (Uppercase) | Badges, timestamps, footnotes |

---

## 3. Spacing Scale & Layout Grid

### A. Spacing Scale (8pt Grid System)
```
space-1  =  4px   (0.25rem)  -> Micro gaps, tag padding
space-2  =  8px   (0.50rem)  -> Icon gaps, tight padding
space-3  = 12px   (0.75rem)  -> Form input inner vertical padding
space-4  = 16px   (1.00rem)  -> Standard element spacing
space-6  = 24px   (1.50rem)  -> Card interior padding
space-8  = 32px   (2.00rem)  -> Card-to-card grid gap
space-12 = 48px   (3.00rem)  -> Subsection vertical margin
space-16 = 64px   (4.00rem)  -> Standard section padding (mobile)
space-24 = 96px   (6.00rem)  -> Standard section padding (desktop)
space-32 = 128px  (8.00rem)  -> Hero section padding
```

### B. Responsive Breakpoints & Container Widths
- **Breakpoints (Tailwind Standards):**
  - `sm`: `640px` (Large phones / phablets)
  - `md`: `768px` (Tablets / portrait iPads)
  - `lg`: `1024px` (Small laptops / landscape tablets)
  - `xl`: `1280px` (Standard desktop monitors)
  - `2xl`: `1536px` (Wide desktop displays)
- **Container Max-Widths:**
  - Content Narrow (Articles/Forms): `max-w-3xl` (`768px`)
  - Standard Content: `max-w-6xl` (`1152px`)
  - Full Editorial Canvas: `max-w-7xl` (`1280px`)
  - Horizontal Gutter Padding: `px-4` (`16px` on mobile), `px-8` (`32px` on desktop).

---

## 4. Component Design Patterns

### A. Button Hierarchy & States
1. **Primary Action Button (The "Sovereign" Button):**
   - *Fills:* Background `--asb-navy-800` (`#0D2B4E`); Text Optical White (`#FFFFFF`).
   - *Border:* `1px solid var(--asb-navy-700)`.
   - *Accent:* Fine gold bottom highlight line or gold icon accent (`#C8960C`).
   - *Hover State:* Background `--asb-navy-900` (`#0A192F`); transform `translateY(-1px)`; shadow `--asb-shadow-md`.
   - *Focus State:* `outline: 2px solid var(--asb-cobalt-600); outline-offset: 2px`.
2. **Secondary / Outline Button:**
   - *Fills:* Transparent background; Text `--asb-navy-800` (`#0D2B4E`).
   - *Border:* `1.5px solid var(--asb-border-strong)` (`#CBD5E1`).
   - *Hover State:* Background `--asb-canvas-alt` (`#F8FAFC`); Border `--asb-navy-700`.
3. **Gold Accent / Hero CTA Button:**
   - *Fills:* Background `--asb-gold-600` (`#C8960C`); Text Pure White (`#FFFFFF`) or Dark Obsidian (`#0A192F`).
   - *Hover State:* Background `--asb-gold-700` (`#B45309`); shadow `--asb-shadow-glow-gold`.

### B. Card Styles & Elevation Rules
- **Standard Content Card:**
  - Background: `var(--asb-canvas-base)` (`#FFFFFF`).
  - Border: `1px solid var(--asb-border-subtle)` (`#E2E8F0`).
  - Border Radius: `var(--asb-radius-xl)` (`16px`).
  - Padding: `24px` (mobile), `32px` (desktop).
  - Hover: Subtle `translateY(-2px)`, shadow transition to `--asb-shadow-lg`, border shifts to `--asb-navy-600` at 30% opacity.
- **Institutional Highlight Card (Dark Mode Variant):**
  - Background: `var(--asb-navy-900)` (`#0A192F`).
  - Border: `1px solid rgba(200, 150, 12, 0.25)` (Warm Gold at 25% opacity).
  - Text: High-contrast white and slate inverse.

### C. Form Controls & Input Styling
- **Input Fields (`<input>`, `<select>`, `<textarea>`):**
  - Height: `48px` minimum (touch target compliance).
  - Background: `var(--asb-canvas-base)` (`#FFFFFF`).
  - Border: `1.5px solid var(--asb-border-subtle)` (`#E2E8F0`).
  - Radius: `var(--asb-radius-md)` (`8px`).
  - Typography: `16px` font size (strictly prevents iOS auto-zoom on mobile inputs).
  - Focus Ring: `outline: none; border-color: var(--asb-cobalt-600); box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15)`.
  - Error State: Border color `var(--asb-status-error)` (`#DC2626`); inline message with accessible `aria-invalid="true"` and `aria-describedby`.

### D. Navigation Bar Tokens
- Height: `76px` (Desktop), `64px` (Mobile).
- Background: `rgba(255, 255, 255, 0.95)` with backdrop blur filter (`backdrop-blur-md`).
- Bottom Border: `1px solid var(--asb-border-subtle)` (`#E2E8F0`).
- Elevation on Scroll: Transitions from zero shadow to `--asb-shadow-sm`.

---

## 5. Motion & Transition Principles

1. **Subtle, Purposeful Animation:** Motion must enhance comprehension and confirm user intent, never distract or delay content absorption.
2. **Standard Duration Scale:**
   - Micro-interactions (hover, focus, button press): `150ms ease-out`.
   - Card transitions and dropdown toggles: `250ms cubic-bezier(0.16, 1, 0.3, 1)`.
   - Modal and mobile drawer slide-overs: `300ms cubic-bezier(0.16, 1, 0.3, 1)`.
3. **Respect for Reduced Motion (`prefers-reduced-motion`):**
   - All transforms and positional animations are disabled when `prefers-reduced-motion: reduce` is detected. Instant state changes or gentle opacity fades are used instead.
