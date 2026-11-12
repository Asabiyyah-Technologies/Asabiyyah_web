# Brand Asset Audit: Asabiyyah Technologies Ltd

This document audits all visual brand assets, logos, color palettes, typography specifications, and design system components discovered in the company's materials.

---

## 1. Brand Hierarchy Framework

A critical finding from the discovery audit is the necessity of maintaining a strict visual and conceptual hierarchy between the parent company and its product initiatives:

```
+-----------------------------------------------------------------------------------+
|                        LEVEL 1: PARENT CORPORATE IDENTITY                          |
|                             ASABIYYAH TECHNOLOGIES LTD                            |
|                       "Building Technology That Matters."                         |
|        Palette: Deep Asabiyyah Navy (#0D2B4E / #1B2A4A) & Warm Gold (#C8960C)     |
|          Mark: Circular Cohesion Crescent Swirl + Geometric Wordmark               |
+-----------------------------------------------------------------------------------+
                                          |
        +---------------------------------+---------------------------------+
        |                                 |                                 |
+-------v-------------------------+       +---------------------------------+
|   LEVEL 2: PRODUCT IDENTITY     |       |    LEVEL 2: CIVIC INITIATIVE    |
|              DILA               |       |          AMANA SHIELD           |
|  "Community Savings Platform"   |       |    "AI Scam & Link Detection"   |
|     Tagline: "Together, we grow"|       |     Verified Civic Trust Motif  |
|      Mark: Leaping Gazelle      |       +---------------------------------+
+---------------------------------+
```

---

## 2. Parent Corporate Brand Assets

### A. Corporate Logo Mark & Lockup
- **Discovered Asset:** `file_00000000519882469ba8b3846110bf56.png` (High-resolution square format: 1254 × 1254 px).
- **Embedded SVG Reference:** `asabiyyah-index.html` (lines 24–28).
- **Corporate Letterhead Reference:** `ASABIYYAH_Technologies_Letterhead (2).docx` (`word/media/image1.png`).
- **Visual Description:**
  - **Symbol:** A circular, concentric crescent swirl representing social cohesion, cyclic mutual support, and group momentum (*Asabiyyah*). It features a blue gradient transitioning from deep navy to vivid cobalt.
  - **Wordmark:** **ASABIYYAH** set in high-contrast, uppercase geometric sans-serif lettering. Distinctive detail: the letter **A** incorporates custom gold triangular crossbars/accents.
  - **Divider Element:** A fine horizontal rule with a central rotated diamond lozenge in gold.
  - **Official Tagline:**
    - Corporate Correspondence Tagline: **"Building Technology That Matters."**
    - Early Financial Prototype Tagline: *"Ethical Finance. Empowered Communities."*
- **Recommendation:** Adopt the circular crescent swirl and geometric wordmark as the official parent corporate logo. Update the supporting baseline tagline to **"Building Technology That Matters."** for corporate presence, retaining the financial tagline exclusively for Dila.

### B. Corporate Color Palette Tokens
Audited from the official corporate letterhead and design system tokens:

| Token Name | Hex Code | Visual Role | Application Standard |
| :--- | :--- | :--- | :--- |
| **Corporate Navy Dark** | `#0D1B3E` / `#0D2B4E` | Primary brand ground | Hero backgrounds, dark headers, high-contrast footers |
| **Corporate Navy Base** | `#1B2A4A` | Primary brand accent | Text headings, primary buttons, corporate borders |
| **Corporate Navy Light** | `#2C3E5F` | Secondary accent | Surface borders, badge fills, hover states |
| **Imperial Gold Base** | `#C8A951` / `#C8960C` | Accent & authority | Divider lines, diamond motifs, milestone callouts, badges |
| **Imperial Gold Light** | `#D4B96A` | Subdued accent | Subtle highlight borders, tag backgrounds |
| **Imperial Gold Dark** | `#A68B3C` | Pressed states | Dark mode accents, active button states |
| **Neutral Surface Base** | `#FFFFFF` | Primary canvas | Clean white editorial background, cards, content panels |
| **Neutral Canvas Alt** | `#F7F8FA` | Grouped surfaces | Secondary section backgrounds, alternating tables |
| **Text Primary** | `#1A1D23` | High-contrast body | Long-form body copy, primary table text (WCAG AAA) |
| **Text Secondary** | `#5A6070` | Low-emphasis body | Supporting explanations, metadata labels, footnotes |

---

## 3. Product-Specific Brand Assets: Dila

### A. Dila Brand Assets
- **Asset Directory:** `Downloads/Asabiyyah/Asabiyyah/Dila/`.
- **Files Available:**
  - `dila_primary_asabiyyah.svg`: Primary horizontal lockup (Gazelle mark + "DILA" + "COMMUNITY SAVINGS PLATFORM" + *"Together, we grow."*).
  - `dila_product_lockup_asabiyyah.svg`: Endorsed lockup ("DILA — Powered by Asabiyyah Technologies").
  - `dila_symbol_asabiyyah_navy.svg` & `dila_symbol_asabiyyah_white.svg`: Standalone Gazelle/deer icon.
  - `dila_stacked_asabiyyah.svg`: Vertical stacked lockup.
  - `dila_app_icon_asabiyyah.svg` & `_dark.svg`: Mobile app icon format.
  - `brand_tokens_asabiyyah.json`: JSON configuration mapping Dila to Asabiyyah colors.
- **Brand Motifs:**
  - **Symbol:** A stylized African gazelle/deer in a forward leap, representing agility, communal swiftness, and progress.
  - **Color Alignment:** Uses Asabiyyah Navy (`#1B2A4A`) and Gold (`#C8A951`), maintaining harmonic family alignment while retaining a distinct product silhouette.

---

## 4. Visual Asset Audit & Action Matrix

| Asset Category | Current Discovered Asset | Evaluation | Recommended Action for Corporate Site |
| :--- | :--- | :--- | :--- |
| **Parent Corporate Logo** | `file_...png` (1254×1254) & SVG in HTML | High resolution, distinct symbol. | Copy to `public/assets/brand/` as master SVG/PNG asset. Clean up vector paths. |
| **Parent Favicon** | None dedicated | Missing | Generate multi-resolution `.ico` and `apple-touch-icon.png` from the circular crescent mark. |
| **Corporate Typography** | System sans-serif / Inter | Modern, highly legible, accessible. | Adopt `Inter` paired with a clean geometric display typeface for headings. |
| **Founder Photography** | None provided | **CRITICAL GAP** | Request professional corporate headshots of M. A. Aliyu, S. Sabo, and M. R. Zakariyya. Use styled geometric avatar placeholders until supplied. |
| **Product Screenshots (Dila)** | 152+ HTML mockup screens in `UI Components/` | Rich, responsive, detailed. | Export or render key workflow cards (ledger, QR poster, collection) to `public/assets/products/`. |
| **Initiative Diagrams (AMANA SHIELD)** | `mermaid-diagram.svg` in `AI4Election/` | Accurate, architectural. | Adapt and polish into responsive SVG architecture diagram for `public/assets/projects/`. |
| **Social / Open Graph Cards** | None | Missing | Design unified 1200×630 Open Graph preview image featuring corporate mark and tagline. |

---

## 5. Visual Asset Relocation to Workspace

The verified assets will be placed into the workspace public directory structure:
- `public/assets/brand/asabiyyah-logo-master.png` (from `file_00000000519882469ba8b3846110bf56.png`)
- `public/assets/brand/asabiyyah-mark.svg` (vector crescent mark)
- `public/assets/products/dila/` (Dila SVG package)
- `public/assets/projects/amana-shield/` (`mermaid-diagram.svg`)
- `public/assets/team/` (awaiting official founder headshots)
