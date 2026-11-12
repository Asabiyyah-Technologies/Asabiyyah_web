"""
Home Page Generator
Renders the corporate home page for Asabiyyah Technologies Ltd.
"""
from src.components.seo import render_head
from src.components.header import render_header
from src.components.footer import render_footer
from src.components.service_card import render_service_card
from src.components.disclaimer_box import render_disclaimer_box

def render_home_page(company_data, services_data, products_data, team_data):
    # Service Cards HTML
    services_cards_html = "\n".join([render_service_card(s, detailed=False) for s in services_data])

    # Head & SEO
    head_html = render_head(
        title="Asabiyyah Technologies Ltd — Building Technology That Matters",
        description="African technology company engineering high-integrity software, intelligent systems, and resilient digital infrastructure for enterprises, institutions, and communities.",
        canonical_path="/"
    )

    header_html = render_header(active_route="/", company_data=company_data)
    footer_html = render_footer(company_data=company_data)

    return f"""<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
{head_html}
<body class="bg-white text-slate-900 antialiased selection:bg-amber-100 selection:text-amber-900">
  {header_html}

  <main id="main-content">
    <!-- HERO SECTION (Split 7:5 Desktop) -->
    <section class="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-16 pb-20 lg:pt-24 lg:pb-32 border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <!-- Left Column (7 cols) -->
          <div class="lg:col-span-7">
            <!-- Institutional Verification Badge -->
            <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold mb-6">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Federal Republic of Nigeria · RC 9918400</span>
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A192F] tracking-tight font-display leading-[1.1] mb-6">
              Engineering <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#0D2B4E] via-[#1B2A4A] to-blue-700">High-Integrity</span> Systems for African Realities.
            </h1>

            <p class="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl mb-8">
              Asabiyyah Technologies Ltd is an African technology house. We engineer custom enterprise software, grounded artificial intelligence systems, and resilient digital infrastructure designed to thrive under real-world connectivity constraints.
            </p>

            <!-- Action CTAs -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <a href="/services" class="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white bg-[#0D2B4E] hover:bg-[#0A192F] rounded-xl shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                <span>Explore Commercial Practices</span>
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
              <a href="/contact" class="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-slate-400">
                Start a Conversation
              </a>
            </div>

            <!-- Trust Bar / Key Proof Points -->
            <div class="pt-8 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
              <div>
                <div class="font-extrabold text-2xl text-[#0A192F] font-display">RC 9918400</div>
                <div class="text-xs text-slate-500 font-medium">CAMA 2020 Reg</div>
              </div>
              <div>
                <div class="font-extrabold text-2xl text-[#0A192F] font-display">4 Practices</div>
                <div class="text-xs text-slate-500 font-medium">Commercial Services</div>
              </div>
              <div>
                <div class="font-extrabold text-2xl text-[#0A192F] font-display">Offline-First</div>
                <div class="text-xs text-slate-500 font-medium">Edge Sync Architecture</div>
              </div>
              <div>
                <div class="font-extrabold text-2xl text-[#0A192F] font-display">Jigawa, NG</div>
                <div class="text-xs text-slate-500 font-medium">Corporate HQ</div>
              </div>
            </div>
          </div>

          <!-- Right Column (5 cols): Sovereign Identity Card -->
          <div class="lg:col-span-5">
            <div class="relative mx-auto max-w-md lg:max-w-none">
              <!-- Decorative subtle backdrop blur -->
              <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-amber-500 rounded-3xl opacity-20 blur-xl"></div>
              
              <div class="relative bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xl">
                <!-- Card Header -->
                <div class="flex items-center justify-between pb-6 border-b border-slate-100">
                  <div class="flex items-center gap-3">
                    <svg class="w-10 h-10" viewBox="0 0 100 100" fill="none">
                      <circle cx="50" cy="50" r="42" stroke="#0D2B4E" stroke-width="4" opacity="0.2"/>
                      <path d="M50 8 C26.8 8 8 26.8 8 50 C8 73.2 26.8 92 50 92 C67.5 92 82.5 81.2 88.7 65.8 C80.6 75.8 68.3 82.2 54.5 82.2 C36.8 82.2 22.5 67.9 22.5 50.2 C22.5 32.5 36.8 18.2 54.5 18.2 C61.5 18.2 68 20.5 73.3 24.3 C66.5 14.2 58.8 8 50 8 Z" fill="#0D2B4E"/>
                      <path d="M56 32 C47.7 32 41 38.7 41 47 C41 55.3 47.7 62 56 62 C61.8 62 66.8 58.7 69.3 53.9 C65.9 56.3 61.7 57.7 57.2 57.7 C50.2 57.7 44.5 52 44.5 45 C44.5 38 50.2 32.3 57.2 32.3 C60.4 32.3 63.3 33.5 65.6 35.5 C62.8 33.3 59.6 32 56 32 Z" fill="#C8960C"/>
                    </svg>
                    <div>
                      <span class="font-extrabold text-base text-[#0A192F] tracking-wide block font-display leading-tight">ASABIYYAH</span>
                      <span class="text-[10px] tracking-widest font-bold text-[#C8960C] uppercase block">TECHNOLOGIES LTD</span>
                    </div>
                  </div>
                  <span class="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">ACTIVE</span>
                </div>

                <!-- Motto Quote -->
                <div class="py-6 border-b border-slate-100">
                  <div class="text-xs font-bold uppercase tracking-wider text-[#C8960C] mb-1">Corporate Motto</div>
                  <p class="text-xl font-extrabold text-[#0A192F] font-display">
                    "Building Technology That Matters."
                  </p>
                  <p class="text-xs text-slate-500 mt-2">
                    Official letterhead declaration grounded in practical execution, zero hype, and measurable community utility.
                  </p>
                </div>

                <!-- Corporate Registry Specs -->
                <div class="py-6 space-y-3 text-xs">
                  <div class="flex items-center justify-between">
                    <span class="text-slate-500 font-medium">Registration Authority</span>
                    <span class="font-semibold text-slate-800">CAC Nigeria (CAMA 2020)</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-slate-500 font-medium">Corporate Registration No.</span>
                    <span class="font-mono font-bold text-[#0D2B4E]">RC 9918400</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-slate-500 font-medium">Tax ID Number (TIN)</span>
                    <span class="font-mono text-slate-700">2621713612761</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-slate-500 font-medium">Registered Capital</span>
                    <span class="font-semibold text-slate-800">₦5,000,000 (Fully Issued)</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-slate-500 font-medium">Registered Head Office</span>
                    <span class="font-medium text-slate-700 text-right">Babura, Jigawa State</span>
                  </div>
                </div>

                <!-- Link to Legal & CAC Record -->
                <div class="pt-4 border-t border-slate-100">
                  <a href="/about#legal" class="text-xs font-semibold text-[#0D2B4E] hover:text-blue-700 flex items-center justify-between">
                    <span>Inspect corporate governance disclosures</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- CORPORATE PHILOSOPHY & THESIS SECTION -->
    <section class="py-20 bg-white border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mb-12">
          <span class="text-xs font-bold text-[#C8960C] uppercase tracking-wider block mb-2">Corporate Foundation</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#0A192F] font-display tracking-tight">
            The Philosophy of <span class="italic text-[#0D2B4E]">'Asabiyyah</span> (عصبية)
          </h2>
          <p class="text-base text-slate-600 mt-4 leading-relaxed">
            Formulated by the 14th-century North African historian and philosopher Ibn Khaldun, <em>'Asabiyyah</em> denotes social cohesion, communal solidarity, mutual responsibility, and shared resolve.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-8 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div class="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm mb-4">01</div>
            <h3 class="text-lg font-bold text-[#0A192F] mb-2 font-display">Code-Enforced Trust</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              We reject opaque systems. Natural communal trust is reinforced by mathematical double-entry ledgers, cryptographic proofs, and deterministic schedules.
            </p>
          </div>

          <div class="p-8 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div class="w-10 h-10 rounded-xl bg-blue-100 text-[#0D2B4E] flex items-center justify-center font-bold text-sm mb-4">02</div>
            <h3 class="text-lg font-bold text-[#0A192F] mb-2 font-display">Resilience in Constraints</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Software must not break when networks fail. We architect offline-first data engines with local SQLite databases that smoothly synchronize when connections return.
            </p>
          </div>

          <div class="p-8 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div class="w-10 h-10 rounded-xl bg-slate-200 text-slate-800 flex items-center justify-center font-bold text-sm mb-4">03</div>
            <h3 class="text-lg font-bold text-[#0A192F] mb-2 font-display">Zero Speculation</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              We claim only what is engineered, tested, and audited. We deliver functional code and verified outcomes rather than speculative technology hype.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- COMMERCIAL PRACTICES SECTION -->
    <section class="py-20 bg-slate-50/60 border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span class="text-xs font-bold text-[#C8960C] uppercase tracking-wider block mb-2">Our Capabilities</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-[#0A192F] font-display tracking-tight">
              Commercial Engineering Practices
            </h2>
            <p class="text-sm text-slate-600 max-w-xl mt-2">
              Four focused practices engineering enterprise software, intelligent systems, and scalable digital infrastructure.
            </p>
          </div>
          <div class="mt-4 md:mt-0">
            <a href="/services" class="inline-flex items-center text-sm font-semibold text-[#0D2B4E] hover:text-blue-700">
              <span>View full practice specifications</span>
              <svg class="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        <!-- 4 Practices Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services_cards_html}
        </div>
      </div>
    </section>

    <!-- PRODUCTS & INITIATIVES SPOTLIGHT SECTION -->
    <section class="py-20 bg-white border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-12">
          <span class="text-xs font-bold text-[#C8960C] uppercase tracking-wider block mb-2">Internal Technology &amp; R&amp;D</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#0A192F] font-display tracking-tight">
            Demonstrated Products &amp; Initiatives
          </h2>
          <p class="text-sm text-slate-600 max-w-2xl mt-2">
            Asabiyyah develops internal platforms that validate our engineering capabilities under rigorous real-world conditions.
          </p>
        </div>

        <div class="space-y-10">
          <!-- Spotlight 1: Dila -->
          <div class="bg-gradient-to-br from-amber-50/40 via-white to-slate-50 rounded-2xl border border-amber-200/80 p-8 sm:p-10 shadow-sm">
            <div class="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-amber-200/60">
              <div class="flex items-center gap-3">
                <span class="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-2.5 py-1 rounded">Commercial Flagship</span>
                <span class="text-xs font-semibold text-slate-500">Tier 1 Product</span>
              </div>
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-300">
                <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                <span>Closed-Cohort Alpha Pilot Validation</span>
              </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
              <div class="lg:col-span-8">
                <div class="flex items-center gap-3 mb-4">
                  <img src="/assets/products/dila/dila_primary_asabiyyah.svg" alt="Dila Brandmark" class="h-9 w-auto">
                </div>
                <h3 class="text-2xl sm:text-3xl font-extrabold text-[#0A192F] font-display mb-2">
                  Dila — Community Savings &amp; Cooperative Operating System
                </h3>
                <p class="text-base font-semibold text-[#0D2B4E] mb-3">
                  The Operating System for African Community Finance.
                </p>
                <p class="text-sm text-slate-600 leading-relaxed mb-6">
                  Over 48.8 million Nigerian adults save in informal rotating community circles (Adashe/Esusu/Ajo). Dila eliminates chaotic paper notebooks and disputes through a code-enforced double-entry ledger, algorithmic rotation schedules, and printable high-contrast QR collection bridges.
                </p>

                <!-- 4 Highlights -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div class="p-3 bg-white rounded-lg border border-slate-200 text-xs">
                    <strong class="text-slate-900 block mb-0.5">Double-Entry Accounting</strong>
                    <span class="text-slate-600">Zero-dependency relational balance enforcement.</span>
                  </div>
                  <div class="p-3 bg-white rounded-lg border border-slate-200 text-xs">
                    <strong class="text-slate-900 block mb-0.5">Printable QR Bridge</strong>
                    <span class="text-slate-600">Physical cash collection reconciliation for field markets.</span>
                  </div>
                  <div class="p-3 bg-white rounded-lg border border-slate-200 text-xs">
                    <strong class="text-slate-900 block mb-0.5">Offline SQLite Engine</strong>
                    <span class="text-slate-600">Local record keeping with asynchronous server sync.</span>
                  </div>
                  <div class="p-3 bg-white rounded-lg border border-slate-200 text-xs">
                    <strong class="text-slate-900 block mb-0.5">152+ Screen UI System</strong>
                    <span class="text-slate-600">Comprehensive design system across 20 functional modules.</span>
                  </div>
                </div>

                <!-- Regulatory Callout -->
                {render_disclaimer_box("regulatory", "Software Infrastructure Notice", "Dila operates strictly as a pure software infrastructure platform. Dila does NOT take custody of client funds, issue loans, or operate as a bank. All financial transactions route directly through Central Bank of Nigeria (CBN)-licensed commercial banks and regulated payment service providers.")}

                <div class="mt-6 flex flex-wrap items-center gap-4">
                  <a href="/products#dila" class="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-[#0D2B4E] hover:bg-[#0A192F] rounded-lg shadow-sm transition-all">
                    <span>Inspect Dila Specifications</span>
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                  </a>
                  <a href="/contact?type=dila-pilot" class="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-all">
                    Request Pilot Access
                  </a>
                </div>
              </div>

              <!-- Product Graphic / Visual Lockup -->
              <div class="lg:col-span-4 bg-white rounded-xl p-6 border border-slate-200/90 shadow-sm flex flex-col items-center justify-center text-center">
                <img src="/assets/products/dila/dila_product_lockup_asabiyyah.svg" alt="Dila Product Lockup" class="w-full max-w-[220px] h-auto mb-4">
                <div class="text-xs font-bold text-[#0A192F]">Asabiyyah Adashe Platform</div>
                <div class="text-[11px] text-slate-500 mt-1">Closed-Cohort Validation Stage · Kano &amp; Jigawa</div>
              </div>
            </div>
          </div>

          <!-- Spotlights Grid: AMANA SHIELD & ClassGPT-N -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- AMANA SHIELD -->
            <div class="bg-white rounded-2xl border border-slate-200/90 p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-emerald-100 text-emerald-900 text-xs font-bold border border-emerald-300">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                    <span>Civic AI · Functional Backend API</span>
                  </div>
                  <span class="text-xs text-slate-500 font-mono">AI4Elections 2026</span>
                </div>
                <h3 class="text-xl font-extrabold text-[#0A192F] font-display mb-2">AMANA SHIELD</h3>
                <p class="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-3">Scam &amp; Phishing Detection Engine</p>
                <p class="text-sm text-slate-600 leading-relaxed mb-6">
                  Intelligent threat detection engine protecting citizens from fraudulent government schemes and phishing links. Combines WhatsApp Cloud API intake, procedural RAG against official registries, and DNS/RDAP risk scoring with bilingual English and Hausa advisories.
                </p>
              </div>
              <div>
                <div class="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 mb-6 font-mono">
                  Grounded Uncertainty Abstention: Unverified claims are strictly returned as UNVERIFIED rather than guessing.
                </div>
                <a href="/products#amana-shield" class="inline-flex items-center text-sm font-semibold text-[#0D2B4E] hover:text-blue-700">
                  <span>Explore AMANA SHIELD Architecture</span>
                  <svg class="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>

            <!-- ClassGPT-N -->
            <div class="bg-white rounded-2xl border border-slate-200/90 p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-sky-100 text-sky-900 text-xs font-bold border border-sky-300">
                    <span class="w-1.5 h-1.5 rounded-full bg-sky-600"></span>
                    <span>Applied AI · Research Prototype</span>
                  </div>
                  <span class="text-xs text-slate-500 font-mono">Lab Prototype</span>
                </div>
                <h3 class="text-xl font-extrabold text-[#0A192F] font-display mb-2">ClassGPT-N Framework</h3>
                <p class="text-xs font-semibold text-sky-800 uppercase tracking-wider mb-3">Offline Multilingual AI Tutoring</p>
                <p class="text-sm text-slate-600 leading-relaxed mb-6">
                  Democratizing intelligent tutoring for resource-constrained classrooms by running quantized Qwen 2.5B models locally on standard consumer hardware. Integrates N-ATLAS speech recognition for voice-first Hausa queries grounded in Nigerian curricula.
                </p>
              </div>
              <div>
                <div class="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 mb-6 font-mono">
                  Zero Cloud GPU Requirement: Local 4-bit inference eliminates continuous broadband expenditure.
                </div>
                <a href="/products#classgpt-n" class="inline-flex items-center text-sm font-semibold text-[#0D2B4E] hover:text-blue-700">
                  <span>Read Research Framework</span>
                  <svg class="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ENGINEERING PRINCIPLES SECTION -->
    <section class="py-20 bg-[#0A192F] text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mb-14">
          <span class="text-xs font-bold text-[#C8960C] uppercase tracking-wider block mb-2">Architectural Standard</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            How We Engineer Reliable Systems
          </h2>
          <p class="text-base text-slate-300 mt-4 leading-relaxed">
            In African environments, infrastructure assumptions made by Western frameworks frequently collapse. We engineer for harsh operating environments from the ground up.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-slate-900/90 rounded-2xl p-7 border border-slate-800">
            <div class="text-xs font-mono font-bold text-[#C8960C] mb-3">01 / PERSISTENCE</div>
            <h3 class="text-xl font-bold text-white mb-2 font-display">Offline-First Edge Sync</h3>
            <p class="text-sm text-slate-400 leading-relaxed">
              Every client operates a local SQLite database that records transactions immediately. Monotonic sync counters replicate state to PostgreSQL when connectivity is restored without data collision.
            </p>
          </div>

          <div class="bg-slate-900/90 rounded-2xl p-7 border border-slate-800">
            <div class="text-xs font-mono font-bold text-[#C8960C] mb-3">02 / INTEGRITY</div>
            <h3 class="text-xl font-bold text-white mb-2 font-display">Zero-Hallucination AI</h3>
            <p class="text-sm text-slate-400 leading-relaxed">
              Our intelligence pipelines bind language models to deterministic tsvector retrieval indices and enforce cryptographically guarded prompt nonces. If evidence is missing, the system abstains.
            </p>
          </div>

          <div class="bg-slate-900/90 rounded-2xl p-7 border border-slate-800">
            <div class="text-xs font-mono font-bold text-[#C8960C] mb-3">03 / ACCOUNTABILITY</div>
            <h3 class="text-xl font-bold text-white mb-2 font-display">Double-Entry Ledger Rules</h3>
            <p class="text-sm text-slate-400 leading-relaxed">
              Financial and inventory states are strictly modeled as balanced credit and debit ledger entries. Modifying historical rows is cryptographically forbidden; corrections require compensatory reversals.
            </p>
          </div>
        </div>

        <div class="mt-12 text-center">
          <a href="/engineering" class="inline-flex items-center text-sm font-semibold text-white hover:text-[#C8A951] transition-colors">
            <span>Read complete System Architecture Specifications</span>
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- LEADERSHIP & GOVERNANCE STRIP -->
    <section class="py-20 bg-white border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span class="text-xs font-bold text-[#C8960C] uppercase tracking-wider block mb-2">Corporate Governance</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-[#0A192F] font-display tracking-tight">
              Founding Leadership Team
            </h2>
            <p class="text-sm text-slate-600 max-w-xl mt-2">
              Equal co-founders holding 33.33% statutory equity each, combining verified computer science degrees with deep field operations expertise.
            </p>
          </div>
          <div class="mt-4 md:mt-0">
            <a href="/about#leadership" class="inline-flex items-center text-sm font-semibold text-[#0D2B4E] hover:text-blue-700">
              <span>View full leadership profiles</span>
              <svg class="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Muhammad Auwal Aliyu -->
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-[#0A192F] text-white flex items-center justify-center font-display font-extrabold text-base border border-amber-400/40">
                MAA
              </div>
              <div>
                <h3 class="font-extrabold text-base text-[#0A192F]">Muhammad Auwal Aliyu</h3>
                <div class="text-xs font-semibold text-[#C8960C]">Co-Founder &amp; CEO</div>
              </div>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">
              First-Class Computer Science graduate (FUTB, CGPA 4.79/5.00) and certified DataCamp Data Scientist. Directs corporate vision and core AI system architectures.
            </p>
            <div class="text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-200">
              PSC · 33.33% Equity (1,666,667 Shares)
            </div>
          </div>

          <!-- Sulaiman Sabo -->
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-[#0A192F] text-white flex items-center justify-center font-display font-extrabold text-base border border-amber-400/40">
                SS
              </div>
              <div>
                <h3 class="font-extrabold text-base text-[#0A192F]">Sulaiman Sabo</h3>
                <div class="text-xs font-semibold text-[#C8960C]">Co-Founder &amp; CTO</div>
              </div>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">
              Full-Stack Software Architect directing mobile client engineering, backend service scalability, cybersecurity protocols, and edge synchronization engines.
            </p>
            <div class="text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-200">
              PSC · 33.33% Equity (1,666,666 Shares)
            </div>
          </div>

          <!-- Mahmud Rabiu Zakariyya -->
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-[#0A192F] text-white flex items-center justify-center font-display font-extrabold text-base border border-amber-400/40">
                MRZ
              </div>
              <div>
                <h3 class="font-extrabold text-base text-[#0A192F]">Mahmud Rabiu Zakariyya</h3>
                <div class="text-xs font-semibold text-[#C8960C]">Co-Founder &amp; COO</div>
              </div>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">
              Operations Director leading corporate compliance, regulatory liaison, and community cooperative network deployment across northern regional hubs.
            </p>
            <div class="text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-200">
              PSC · 33.33% Equity (1,666,667 Shares)
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FINAL CONVERSION BANNER -->
    <section class="py-20 bg-gradient-to-br from-[#0A192F] via-[#0D2B4E] to-[#1B2A4A] text-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-xs font-bold text-[#C8960C] uppercase tracking-wider block mb-3">Institutional Engagement</span>
        <h2 class="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-6">
          Ready to Build Resilient Systems?
        </h2>
        <p class="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you require bespoke enterprise software, applied AI integration with verifiable guardrails, or participation in the Dila platform pilot, our engineering team is ready.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/contact" class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#0A192F] bg-white hover:bg-slate-100 rounded-xl shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-white">
            Initiate a Project Conversation
          </a>
          <a href="mailto:info@asabiyyah.com" class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all font-mono text-sm">
            info@asabiyyah.com
          </a>
        </div>
      </div>
    </section>
  </main>

  {footer_html}
</body>
</html>"""
