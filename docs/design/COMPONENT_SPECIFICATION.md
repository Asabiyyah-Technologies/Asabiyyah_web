# Component Specifications: Asabiyyah Technologies Ltd

This document defines the functional and visual specifications, prop contracts, HTML structures, and interaction states for all reusable UI components.

---

## 1. Global Navigation Header (`<Header />`)

- **Description:** Fixed top navigation bar providing corporate identity, primary routes, and global conversion action.
- **HTML Structure:**
  ```html
  <header class="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <!-- Corporate Brandmark -->
      <a href="/" class="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg p-1">
        <svg class="w-10 h-10 transition-transform group-hover:scale-105" viewBox="0 0 100 100">...</svg>
        <div class="flex flex-col">
          <span class="font-extrabold text-lg tracking-wider text-[#0A192F] leading-tight">ASABIYYAH</span>
          <span class="text-[10px] tracking-widest font-bold text-[#C8960C] uppercase">Technologies Ltd</span>
        </div>
      </a>
      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center gap-8">
        <a href="/about" class="text-sm font-medium text-slate-700 hover:text-[#0D2B4E] transition-colors">About</a>
        <a href="/services" class="text-sm font-medium text-slate-700 hover:text-[#0D2B4E] transition-colors">Services</a>
        <a href="/products" class="text-sm font-medium text-slate-700 hover:text-[#0D2B4E] transition-colors">Products</a>
        <a href="/engineering" class="text-sm font-medium text-slate-700 hover:text-[#0D2B4E] transition-colors">Engineering</a>
        <a href="/contact" class="text-sm font-medium text-slate-700 hover:text-[#0D2B4E] transition-colors">Contact</a>
      </nav>
      <!-- CTA Button -->
      <div class="hidden md:flex items-center gap-4">
        <a href="/contact" class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#0D2B4E] hover:bg-[#0A192F] rounded-lg shadow-sm hover:shadow transition-all border border-[#1B2A4A] focus:ring-2 focus:ring-blue-600">
          Start a Conversation
        </a>
      </div>
      <!-- Mobile Drawer Trigger -->
      <button type="button" class="md:hidden p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label="Toggle navigation">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
    </div>
  </header>
  ```
- **States:**
  - *Scrolled:* Header gains `shadow-sm` and background opacity shifts to `98%`.
  - *Active Link:* Decorated with gold bottom rule (`border-b-2 border-[#C8960C] pb-1 font-semibold text-[#0D2B4E]`).

---

## 2. Button Component (`<Button />`)

| Variant | Visual Appearance | Tailwind Classes | Usage Context |
| :--- | :--- | :--- | :--- |
| **Primary (Sovereign)** | Deep navy fill, white text, subtle border | `bg-[#0D2B4E] text-white hover:bg-[#0A192F] border border-[#1B2A4A] shadow-sm` | Primary CTAs, form submissions |
| **Secondary (Outline)** | White surface, slate border, dark navy text | `bg-white text-[#0D2B4E] border border-slate-300 hover:bg-slate-50 hover:border-slate-400` | Secondary exploration, documentation links |
| **Accent (Gold)** | Warm gold fill, high-contrast text | `bg-[#C8960C] text-white hover:bg-[#B45309] shadow-sm` | Hero highlight CTA, pilot request |
| **Ghost / Text Link** | Transparent, subtle hover tint | `text-[#0D2B4E] hover:text-blue-700 font-semibold inline-flex items-center gap-1.5` | In-card navigation, "Learn more →" |

- **State Matrix:**
  - *Default:* Crisp rendering with appropriate padding (`px-5 py-2.5` for medium, `px-6 py-3.5` for large).
  - *Hover:* Micro-lift (`-1px` translateY) and subtle shadow expansion.
  - *Focus:* Mandatory high-contrast outline (`focus:ring-2 focus:ring-blue-600 focus:ring-offset-2`).
  - *Disabled:* `opacity-50 cursor-not-allowed pointer-events-none`.
  - *Loading:* Displays an animated SVG spinner alongside text (*"Submitting..."*).

---

## 3. Status Badge Component (`<Badge />`)

- **Description:** Compact pill displaying verified development maturity or institutional category.
- **Variants:**
  - *Alpha Pilot (Amber):* `bg-amber-50 text-amber-800 border border-amber-200/80` (Used on Dila).
  - *Live Backend / Operational (Emerald):* `bg-emerald-50 text-emerald-800 border border-emerald-200/80` (Used on AMANA SHIELD).
  - *Research Direction (Sky/Blue):* `bg-blue-50 text-blue-800 border border-blue-200/80` (Used on ClassGPT-N).
  - *Institutional / Legal (Slate):* `bg-slate-100 text-slate-800 border border-slate-200` (Used on CAC RC 9918400).
- **Structure:**
  ```html
  <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase border">
    <span class="w-2 h-2 rounded-full bg-current"></span>
    Closed-Cohort Alpha Pilot
  </span>
  ```

---

## 4. Service Practice Card (`<ServiceCard />`)

- **Description:** High-density, structured card presenting one of Asabiyyah's four commercial practices.
- **HTML Structure:**
  ```html
  <div class="bg-white rounded-2xl border border-slate-200 p-8 hover:border-slate-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group">
    <div>
      <div class="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0D2B4E] mb-6 group-hover:scale-105 transition-transform">
        <svg class="w-6 h-6">...</svg>
      </div>
      <h3 class="text-xl font-bold text-[#0A192F] mb-3">Custom Enterprise Software</h3>
      <p class="text-slate-600 text-sm leading-relaxed mb-6">
        Bespoke web platforms, cross-platform mobile applications, and high-concurrency APIs built to institutional specifications.
      </p>
      <div class="border-t border-slate-100 pt-4 mb-6">
        <div class="text-xs font-bold uppercase tracking-wider text-[#C8960C] mb-2">Key Deliverables</div>
        <ul class="text-xs text-slate-600 space-y-1.5">
          <li class="flex items-center gap-2"><span>✓</span> Full-Stack Web & Mobile Apps</li>
          <li class="flex items-center gap-2"><span>✓</span> High-Throughput RESTful APIs</li>
          <li class="flex items-center gap-2"><span>✓</span> Production Runbooks & Architecture Specs</li>
        </ul>
      </div>
    </div>
    <a href="/contact?type=enterprise-software" class="inline-flex items-center gap-2 text-sm font-semibold text-[#0D2B4E] group-hover:text-blue-700 transition-colors">
      Start Project Inquiry <span>→</span>
    </a>
  </div>
  ```

---

## 5. Regulatory Disclaimer Callout Box (`<DisclaimerBox />`)

- **Description:** Mandatory institutional warning box ensuring zero misclassification under financial regulations.
- **HTML Structure:**
  ```html
  <div class="rounded-xl bg-amber-50/60 border border-amber-200 p-5 flex items-start gap-3.5" role="note">
    <svg class="w-5 h-5 text-amber-700 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
    </svg>
    <div class="text-xs text-amber-900 leading-relaxed">
      <span class="font-bold">Important Institutional Notice:</span> Dila operates strictly as a pure software infrastructure platform. Dila does not take custody of funds, issue credit, or operate as a bank. All financial flows route directly through licensed commercial banks and Central Bank of Nigeria (CBN)-regulated payment service providers.
    </div>
  </div>
  ```

---

## 6. Monogram Avatar / Leadership Card (`<LeaderCard />`)

- **Description:** Executive profile card honoring the Stage 1 safe fallback strategy (geometric monogram badges).
- **HTML Structure:**
  ```html
  <div class="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col items-center text-center">
    <!-- Monogram Avatar -->
    <div class="w-24 h-24 rounded-full bg-gradient-to-br from-[#0A192F] to-[#1B2A4A] border-2 border-[#C8960C] flex items-center justify-center text-white font-extrabold text-2xl tracking-wider mb-4 shadow-sm">
      MAA
    </div>
    <h4 class="text-lg font-bold text-[#0A192F]">Muhammad Auwal Aliyu</h4>
    <div class="text-xs font-semibold uppercase tracking-wider text-[#C8960C] mb-2">Co-Founder & CEO</div>
    <div class="text-xs text-slate-500 mb-4">First Class Comp Sci (FUTB) • DataCamp Certified AI Engineer</div>
    <p class="text-xs text-slate-600 leading-relaxed mb-4 text-left">
      Leads overall corporate strategy, institutional partnerships, regulatory alignment, and core AI systems architecture.
    </p>
    <div class="flex items-center gap-3 mt-auto">
      <a href="https://github.com/MaAbumusAb" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-[#0D2B4E]" aria-label="GitHub Profile">
        <svg class="w-5 h-5" fill="currentColor">...</svg>
      </a>
    </div>
  </div>
  ```

---

## 7. Global Footer (`<Footer />`)

- **Description:** Complete institutional footer with statutory CAC details, navigation sitemap, direct contact channels, and legal policies.
- **Styling:** Dark Obsidian ground (`bg-[#0A192F]`), optical white text, slate subdued copy, fine gold divider accents, and clear CAMA 2020 legal disclosures.
