# Asset Inventory & Production Requirements: Asabiyyah Technologies Ltd

This document catalogs all verified, staged, and required digital assets, logos, icons, diagrams, and photography across the corporate website.

---

## 1. Asset Staging Architecture

All website assets are housed in the project’s `public/assets/` directory:

```
public/assets/
├── brand/                    # Sovereign corporate logos, favicons, brandmarks
│   ├── asabiyyah-logo-master.png  # Master raster logo lockup (1254 × 1254 px)
│   ├── asabiyyah-mark.svg         # Clean vector crescent swirl mark
│   ├── asabiyyah-horizontal.svg   # Vector horizontal lockup
│   ├── favicon.ico                # Multi-resolution browser icon
│   └── og-asabiyyah.png           # 1200 × 630 px Open Graph social preview
├── products/                 # Proprietary product visual assets
│   └── dila/                 # Complete Dila SVG brand package
│       ├── dila_primary_asabiyyah.svg
│       ├── dila_product_lockup_asabiyyah.svg
│       ├── dila_symbol_asabiyyah_navy.svg
│       ├── dila_symbol_asabiyyah_white.svg
│       └── brand_tokens_asabiyyah.json
├── projects/                 # Civic & research project assets
│   └── amana-shield/         # AMANA SHIELD architectural diagrams
│       └── mermaid-diagram.svg
└── team/                     # Executive leadership portraits / monograms
    ├── avatar-maa.svg        # Muhammad Auwal Aliyu (CEO) monogram badge
    ├── avatar-ss.svg         # Sulaiman Sabo (CTO) monogram badge
    └── avatar-mrz.svg        # Mahmud Rabiu Zakariyya (COO) monogram badge
```

---

## 2. Asset Verification & Integrity Standards

1. **Separation of Evidence vs. Illustration:**
   - **Documentary Evidence & Real Screenshots:** Audited product screens from `UI Components/`, architecture SVG diagrams from `AI4Election/`, and certified CAC registration extracts are treated as factual records and displayed with zero fictional modification.
   - **Supporting Illustrations / Diagrams:** Must be rendered as clean, high-contrast vector SVGs adhering strictly to brand design tokens (`--asb-navy-800`, `--asb-gold-600`).
   - **Strictly Prohibited:** AI-generated pseudo-photorealistic people, fake company awards, fabricated client badges, or synthetic certificates.

---

## 3. Brand & Vector Asset Specifications

### A. Corporate Master Brandmark
- **File:** `public/assets/brand/asabiyyah-logo-master.png`
- **Format:** 32-bit PNG with alpha transparency.
- **Dimensions:** 1254 × 1254 px.
- **Optimized Size:** `< 150 KB` compressed.

### B. Corporate Crescent Swirl Mark (Vector)
- **File:** `public/assets/brand/asabiyyah-mark.svg`
- **Format:** W3C SVG 1.1, minified, responsive `viewBox="0 0 100 100"`.
- **Paths:** Clean cubic Bezier curves; scalable from `16px` to billboard scale without loss of fidelity.

### C. Open Graph Social Card
- **File:** `public/assets/brand/og-asabiyyah.png`
- **Format:** High-contrast 24-bit PNG.
- **Dimensions:** 1200 × 630 px (1.91:1 aspect ratio).
- **Content:** Deep navy background (`#0A192F`), centered gold crescent swirl mark, bold display typography *"ASABIYYAH TECHNOLOGIES LTD"*, subtitle *"Building Technology That Matters"*, and CAC RC 9918400 trust badge.

---

## 4. Product Asset Inventory

### A. Dila Brand Assets
- **Primary Horizontal Lockup:** `public/assets/products/dila/dila_primary_asabiyyah.svg` (Gazelle mark + "DILA" + "COMMUNITY SAVINGS PLATFORM" + *"Together, we grow."*).
- **Endorsed Product Lockup:** `public/assets/products/dila/dila_product_lockup_asabiyyah.svg` ("DILA — Powered by Asabiyyah Technologies").
- **Standalone Gazelle Symbol:** `public/assets/products/dila/dila_symbol_asabiyyah_navy.svg` and `_white.svg`.

### B. AMANA SHIELD Visual Assets
- **System Architecture Topology:** `public/assets/projects/amana-shield/mermaid-diagram.svg`.
- **Vector Icons:** Verification Shield icon, WhatsApp verification bubble mockup.

---

## 5. Image Optimization & Delivery Protocol

1. **Format Hierarchy:** Modern web delivery prioritizes SVG for all logos, icons, and diagrams. Raster graphics use WebP / AVIF formats with compressed PNG fallbacks.
2. **Explicit Dimensions:** All `<img>` tags specify `width`, `height`, and `decoding="async"` to eliminate Cumulative Layout Shift (CLS).
3. **Lazy Loading:** All imagery below the initial viewport fold enforces `loading="lazy"`. Hero brand assets enforce `loading="eager"` and `fetchpriority="high"`.
