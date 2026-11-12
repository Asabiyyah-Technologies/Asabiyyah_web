# Corporate Visual System: Asabiyyah Technologies Ltd

This document defines the complete visual identity system, logo usage guidelines, color palettes, typography specifications, iconography rules, graphic motifs, and art direction for Asabiyyah Technologies Ltd.

---

## 1. Corporate Brandmarks & Logotypes

### A. Primary Corporate Brandmark (Horizontal Lockup)
- **Structure:** Brand Symbol (Cohesion Crescent Swirl) on the left, paired with the uppercase `ASABIYYAH` wordmark and descriptor `TECHNOLOGIES LTD`.
- **Application:** Website header, corporate document headers, investor presentations, and enterprise contracts.
- **Clear Space:** Minimum clear space equal to `0.5 × (height of the symbol)` around all four perimeters.
- **Minimum Size:** Minimum digital height of `32px` to preserve legibility of the custom letter accents and descriptor.

```
       [ CRESCENT ]   A S A B I Y Y A H
       [  SWIRL   ]   T E C H N O L O G I E S   L T D
```

### B. Secondary Corporate Brandmark (Stacked / Vertical Lockup)
- **Structure:** Centered Cohesion Crescent Swirl atop the `ASABIYYAH` wordmark, separated by the fine gold diamond divider line:
  ```
                         [ CRESCENT SWIRL ]
                        A S A B I Y Y A H
                      ───── ◆ ─────
                   BUILDING TECHNOLOGY THAT MATTERS.
  ```
- **Application:** Website footer, hero section splash displays, standalone print collateral, and official letterheads.

### C. The Brand Symbol (Cohesion Crescent Swirl)
- **Symbol Meaning:** Three concentric, forward-sweeping crescent blades forming a unified circle. Represents the three co-founders, the three foundational pillars (Community, Code, Institutions), and the cyclical, reinforcing momentum of *'Asabiyyah*.
- **Coloration:** Dual-tone gradient transitioning from Sovereign Navy (`#0A192F` / `#0D2B4E`) to vivid African Cobalt (`#1E40AF` / `#2563EB`), with subtle gold reflection accents.
- **Standalone Use:** Digital favicon, mobile app icons, social media avatars, and technical watermark stamps.

### D. Logo Vector Asset Verification
- Master vector SVG implementation generated in [`public/assets/brand/asabiyyah-logo-master.svg`](file:///c:/Users/HomePC/Desktop/AMTIC-001/public/assets/brand/).
- High-resolution master raster PNG preserved at [`public/assets/brand/asabiyyah-logo-master.png`](file:///c:/Users/HomePC/Desktop/AMTIC-001/public/assets/brand/asabiyyah-logo-master.png).

---

## 2. Color Palette & Semantic Roles

```
+-----------------------------------------------------------------------------------+
|                        ASABIYYAH CORPORATE PALETTE                                |
+-------------------+-------------------+-------------------+-----------------------+
| SOVEREIGN NAVY    | IMPERIAL GOLD     | ARCHITECTURAL     | SLATE BORDER          |
| #0A192F / #0D2B4E | #C8960C / #C8A951 | #FFFFFF / #F8FAFC | #E2E8F0               |
| Primary Authority | Accent & Trust    | Pure Surfaces     | Structural Hairlines  |
+-------------------+-------------------+-------------------+-----------------------+
```

### A. Primary Corporate Brand Colors
| Role | Color Name | Hex Code | RGB | Role / Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Deep** | Sovereign Obsidian | `#0A192F` | `rgb(10, 25, 47)` | Dark hero sections, high-contrast footers, primary headings |
| **Primary Navy** | Asabiyyah Navy Base | `#0D2B4E` | `rgb(13, 43, 78)` | Official letterhead shade, dark card surfaces, button fills |
| **Primary Mid** | Cobalt Navy | `#1B2A4A` | `rgb(27, 42, 74)` | Body section headers, primary interactive states |
| **Primary Vibrant**| African Cobalt | `#2563EB` | `rgb(37, 99, 235)` | Active link highlights, focus rings, interactive telemetry |

### B. Accent & Trust Palette
| Role | Color Name | Hex Code | RGB | Role / Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Imperial Gold Base**| Warm Imperial Gold | `#C8960C` | `rgb(200, 150, 12)` | Official letterhead border color, diamond lozenges, milestone tags |
| **Imperial Gold Soft**| Polished Gold | `#C8A951` | `rgb(200, 169, 81)` | Text badges, fine divider rules, accent borders |
| **Imperial Gold Light**| Champagne Tint | `#FEF3C7` | `rgb(254, 243, 199)`| Soft badge fills, highlight container backgrounds |
| **Imperial Gold Deep**| Burnished Bronze | `#92400E` | `rgb(146, 64, 14)` | High-contrast gold text on light backgrounds (WCAG AAA) |

### C. Neutral Canvas & Surface Palette
| Role | Color Name | Hex Code | RGB | Role / Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Canvas Base** | Pure White | `#FFFFFF` | `rgb(255, 255, 255)`| Primary page ground, clean content cards |
| **Canvas Subdued** | Slate Tint | `#F8FAFC` | `rgb(248, 250, 252)`| Alternating table rows, secondary section containers |
| **Surface Raised** | Cool Off-White | `#F1F5F9` | `rgb(241, 245, 249)`| Code snippet backgrounds, disabled form controls |
| **Border Hairline**| Slate Hairline | `#E2E8F0` | `rgb(226, 232, 240)`| Structural card borders, divider rules |
| **Text Primary** | Deep Charcoal | `#0F172A` | `rgb(15, 23, 42)` | High-contrast body text (Contrast Ratio 15.2:1 on White) |
| **Text Secondary**| Slate Muted | `#475569` | `rgb(71, 85, 105)` | Explanatory subheads, captions, metadata labels |
| **Text Inverse** | Optical White | `#FFFFFF` | `rgb(255, 255, 255)`| Text on Sovereign Navy ground (Contrast Ratio 16.4:1) |

### D. Semantic Status Colors
| Status | Hex Code | Semantic Role in Products & System |
| :--- | :--- | :--- |
| **Success / Synced** | `#059669` (Emerald) | Verified claims, balanced double-entry ledger, active pilot status |
| **Warning / Review** | `#D97706` (Amber) | Unverified claim warning, pending sync state, alpha pilot tag |
| **Error / Malicious** | `#DC2626` (Crimson) | Scam link blocked, double-entry imbalance, invalid form entry |
| **Info / Telemetry** | `#0284C7` (Sky) | System telemetry, curriculum standard tag, API status |

---

## 3. Typography Architecture

The typographic system pairs a high-character, geometric display typeface for headings with an ultra-legible, neutral sans-serif for long-form reading and data tables.

```
Headings: Plus Jakarta Sans / Cabinet Grotesk (Geometric, Authoritative, Architectural)
Body Copy: Inter (World-class legibility, optical balance, universal rendering)
Technical Data: JetBrains Mono / SF Mono (For ledger balances, hashes, endpoints)
```

### A. Font Families & Fallback Stacks
- **Display & Headings:** `'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
  - *Weights:* `700` (Bold) and `800` (ExtraBold) for primary titles; `600` (SemiBold) for subheadings.
  - *Character:* Clean geometric construction with slight humanist warmth; perfectly balances institutional authority and modern digital engineering.
- **Body & UI Elements:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
  - *Weights:* `400` (Regular) for body paragraphs; `500` (Medium) for labels; `600` (SemiBold) for interactive buttons and table headers.
- **Technical & Monospace Accents:** `'JetBrains Mono', 'SF Mono', Menlo, Consolas, monospace`
  - *Weights:* `400` (Regular) and `500` (Medium).
  - *Usage:* API routes, transaction hashes, mathematical balances, code snippets, status tags.

---

## 4. Iconography & Graphical Motifs

### A. Iconography Rules
- **Style:** Clean, monoline geometric vector iconography with a consistent `1.75px` stroke width on a `24×24px` grid.
- **Corner Treatment:** Subtly rounded joints (`1.5px`) avoiding sharp needles.
- **Palette:** Navy (`#0D2B4E`) in light mode; Slate (`#94A3B8`) in dark panels; Gold (`#C8960C`) for active milestones and key trust points.
- **Strictly Prohibited:** Generic clipart, glowing AI brains, neon circuit-boards, or cartoon illustrations.

### B. Graphic Motifs & Textures
1. **The Gold Diamond Divider (`◆`):** A fine horizontal hairline with a centered rotated square lozenge (`#C8960C`) inspired by classical institutional stationery and banknote guilloche borders.
2. **Architectural Grid Lines:** Subtle, low-opacity hairline grid lines (`#E2E8F0` at 60% opacity) applied to hero backdrops to evoke architectural blueprints and software structure.
3. **Double-Entry Balance Marks:** Structural mathematical bracket lines used to frame key metrics and case study highlights.

---

## 5. Imagery & Photography Art Direction

1. **Authentic Documentary Photography:**
   - Real, dignified, high-resolution photography of Nigerian commerce, cooperative meetings, market organizers, and university computer science laboratories.
   - Natural sunlight, real community environments, authentic expression.
   - Strictly prohibit: Stereotypical stock photos of models pointing at transparent holograms or Western corporate handshakes.
2. **Product UI Visuals:**
   - Real, crisp, vector-rendered screens exported from the 152+ screen library in `UI Components/`.
   - Shown inside clean, border-framed device viewports (macOS browser mockups or clean smartphone bezels) with subtle elevation drop shadows.
3. **Illustrations:**
   - If architectural diagrams are needed, use clean monoline systems diagrams (flowcharts, state machines, network topologies) rendered in SVG format with brand tokens.
