# Muhammad Auwal Aliyu (Abu Mus'ab) — Personal Portfolio

> **Central Positioning:** A technology builder working at the intersection of Artificial Intelligence, Software Engineering, and Human-Centred Innovation.  
> **Core Philosophy:** *Building technology that works for people, not just ideal conditions.*

---

## 🌟 Overview

This is the world-class, editorial personal portfolio website for **Muhammad Auwal Aliyu**, publicly known as **Abu Mus'ab**.

Designed to reflect the caliber of an emerging global technology founder and AI systems engineer, the platform prioritises authenticity over hype, demonstrated engineering work over generic claims, and meaningful human impact over vanity metrics.

### Key Identity & Credentials Integrated:
- **Full Name:** Muhammad Auwal Aliyu
- **Public Name:** Abu Mus'ab
- **Professional Title:** Full-Stack AI Engineer & Technology Founder
- **Location:** Jos, Plateau State, Nigeria (WAT / UTC+1)
- **Academic Standing:** First Class Honours, B.Sc. Computer Science, Federal University of Technology Babura (FUTB), Class of 2026 (**CGPA: 4.79 / 5.00**)
- **DataCamp Certified AI Engineer:** Associate Level (**Credential ID:** `AIEDA0012468264105`, Certified Nov 8, 2026)
- **Leadership:** CEO & Co-Founder, Asabiyyah Technologies Ltd; Founder & CEO, AMTIC Enterprises
- **Fellowship:** UNDP Graduate Fellow in collaboration with 3MTT (Serving at Hamzury Innovation Hub, Jos)
- **Contact:** `aliyumuhammadauwal92@gmail.com` | `+234 806 475 3943`

---

## 🏗️ Architecture & Stack

- **Framework:** React 18/19 Component Architecture with TypeScript interfaces (`src/types/portfolio.ts`).
- **Styling:** Tailwind CSS with a light-first editorial design system (crisp whites, slate surfaces, deep charcoal typography, restrained tech-blue accents).
- **Icons:** Inline Lucide SVG iconography.
- **Offline-First / PWA:** 100% self-contained local vendor libraries (`react.production.min.js`, `react-dom.production.min.js`, `tailwind.min.js`), Service Worker (`sw.js`), and Web App Manifest (`manifest.json`).
- **Fast Build System:** Node + Babel standalone compiler producing an ultra-fast zero-runtime-overhead bundle (`dist/app.js`).

---

## 📁 Authentic Resources from User's Drive Integrated

The portfolio integrates authentic files, documents, and diagrams discovered in the user's environment:

1. **USPF Hackathon System Architecture & UML Diagrams** (`public/assets/projects/uspf-learning-hub-architecture.jpg`):
   - Converted and embedded for the interactive zoomable architecture modal in **Project 05 (USPF Learning Hub)**.
2. **Amana Shield Threat & ER Schema** (`public/assets/projects/amana-shield-architecture.svg`):
   - Integrated as an interactive vector architecture inspection modal for **Project 03 (Amana Shield / AI4Elections 2026)**.
3. **DataCamp AI Engineer Associate Certificate** (`public/assets/certificates/datacamp-ai-engineer-associate.pdf`):
   - Integrated with official certificate card and direct PDF download link.
4. **Official Curriculum Vitae** (`public/assets/resume/muhammad-auwal-aliyu-cv.pdf`):
   - Available via the interactive CV inspection modal and direct PDF download.
5. **Dila Official Brand Assets** (`public/assets/brand/dila-primary.svg`, `dila-symbol.svg`, `dila-icon.svg`):
   - Used for **Project 04 (Dila by Asabiyyah Technologies Ltd)**.
6. **IslamTech with Abu Mus'ab Blueprint** (`ZERO TO AI ENGINEER.docx`):
   - Integrated into the Teaching & Community Impact section detailing the 30-day bilingual AI curriculum.
7. **ClassGPT 2.0 Education Intelligence Deliverables**:
   - Synthesised into the core architecture of **Project 01 (ClassGPT-N Framework)** with verified GitHub link: [https://github.com/MaAbumusAb/classgpt](https://github.com/MaAbumusAb/classgpt).

---

## 🚀 Development & Local Preview

### Prerequisites:
- `node` (Node v24 is preconfigured via `Antigravity/bin/agy-node.cmd`)
- `python` (Python 3.x)

### Commands:

```bash
# 1. Compile the production site (runs Babel compiler and syncs assets)
npm run build
# OR directly:
python scripts/build.py

# 2. Start the local preview server (serves on http://localhost:5173)
npm run preview
# OR:
npm run serve
```

---

## 📦 Deployment

This repository is pre-configured for zero-friction one-click deployment across global edge platforms:

### 1. Render.com (Blueprint Support Included)
This repository includes a native [`render.yaml`](render.yaml) specification for Render:
1. Log in to [dashboard.render.com](https://dashboard.render.com).
2. Go to **Blueprints** > **New Blueprint Instance**.
3. Select this repository: `https://github.com/MaAbumusAb/portfolio`.
4. Render automatically detects `render.yaml`, builds via `node scripts/build.js`, and serves `dist/` with global CDN caching and SPA rewrite rules.
5. Your portfolio is live instantly at `https://<service-name>.onrender.com`.

### 2. Cloudflare Pages
1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com).
2. Navigate to **Compute (Workers) & Pages** > **Create Application** > **Pages** > **Connect to Git**.
3. Select `MaAbumusAb/portfolio`.
4. Configure Build Settings:
   - **Framework Preset:** `None`
   - **Build Command:** `node scripts/build.js` (or `npm run build`)
   - **Build Output Directory:** `dist`
5. Click **Save and Deploy**. Cloudflare provisions your global edge deployment with custom domain, SSL, and instant rollouts at `https://portfolio-<id>.pages.dev`.

### 3. GitHub Pages
- You can enable GitHub Pages in your repository settings under **Settings** > **Pages** pointing to the `main` or `gh-pages` branch.
