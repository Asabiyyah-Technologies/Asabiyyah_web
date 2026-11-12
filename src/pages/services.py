"""
Services Page Generator
Renders the detailed commercial services and engineering practices page for Asabiyyah Technologies Ltd.
"""
from src.components.seo import render_head
from src.components.header import render_header
from src.components.footer import render_footer
from src.components.service_card import render_service_card

def render_services_page(company_data, services_data):
    # Detailed Service Sections
    services_html = "\n".join([render_service_card(s, detailed=True) for s in services_data])

    head_html = render_head(
        title="Commercial Services & Engineering Practices",
        description="Explore Asabiyyah's commercial practices: Custom Enterprise Software, Applied AI & Intelligent Systems, Process Automation Ledgers, and Resilient Digital Infrastructure.",
        canonical_path="/services"
    )

    header_html = render_header(active_route="/services", company_data=company_data)
    footer_html = render_footer(company_data=company_data)

    return f"""<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
{head_html}
<body class="bg-white text-slate-900 antialiased selection:bg-amber-100 selection:text-amber-900">
  {header_html}

  <main id="main-content">
    <!-- PAGE HERO -->
    <section class="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-24 border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-4 border border-slate-200">
            <span>Commercial Offerings</span>
          </div>
          <h1 class="text-4xl sm:text-5xl font-extrabold text-[#0A192F] font-display tracking-tight mb-6">
            Commercial Engineering Practices
          </h1>
          <p class="text-lg text-slate-600 leading-relaxed">
            We partner with enterprises, financial institutions, cooperatives, and civic organizations to engineer high-integrity digital systems that solve real operational bottlenecks.
          </p>
        </div>
      </div>
    </section>

    <!-- PRACTICE QUICK JUMP NAV -->
    <div class="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 hidden sm:block">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs font-semibold text-slate-600">
        <span class="text-slate-400 uppercase tracking-wider text-[11px]">Jump to Practice:</span>
        <div class="flex items-center gap-6">
          <a href="#custom-software" class="hover:text-[#0D2B4E] transition-colors">Custom Software</a>
          <a href="#applied-ai" class="hover:text-[#0D2B4E] transition-colors">Applied AI &amp; RAG</a>
          <a href="#process-automation" class="hover:text-[#0D2B4E] transition-colors">Process Automation</a>
          <a href="#digital-infrastructure" class="hover:text-[#0D2B4E] transition-colors">Resilient Infrastructure</a>
        </div>
        <a href="/contact" class="text-[#0D2B4E] font-bold hover:underline">Start Inquiry →</a>
      </div>
    </div>

    <!-- DETAILED SERVICE BLOCKS -->
    <section class="py-16 sm:py-20 bg-slate-50/50 border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {services_html}
      </div>
    </section>

    <!-- 4-PHASE DELIVERY METHODOLOGY -->
    <section class="py-20 bg-white border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mb-14">
          <span class="text-xs font-bold text-[#C8960C] uppercase tracking-wider block mb-2">Engineering Delivery</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#0A192F] font-display tracking-tight">
            Our 4-Phase Delivery Methodology
          </h2>
          <p class="text-sm sm:text-base text-slate-600 mt-2">
            Every engagement follows a structured, milestone-driven lifecycle that ensures architectural clarity, eliminates scope ambiguity, and guarantees verifiable system reliability.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 relative">
            <div class="text-xs font-mono font-bold text-[#C8960C] mb-2">PHASE 01</div>
            <h3 class="text-lg font-bold text-[#0A192F] mb-3 font-display">Discovery &amp; Constraints Audit</h3>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">
              We audit existing workflows, physical paperwork, user digital literacy, device profiles, and target connectivity conditions before committing to architecture.
            </p>
            <div class="text-[11px] font-semibold text-slate-500 pt-3 border-t border-slate-200">
              Deliverable: System Requirements Document (SRD)
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 relative">
            <div class="text-xs font-mono font-bold text-[#C8960C] mb-2">PHASE 02</div>
            <h3 class="text-lg font-bold text-[#0A192F] mb-3 font-display">Architectural Blueprint</h3>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">
              We author formal Architecture Decision Records (ADRs), database entity schemas with explicit relational constraints, API contracts, and security threat models.
            </p>
            <div class="text-[11px] font-semibold text-slate-500 pt-3 border-t border-slate-200">
              Deliverable: Architecture Specification &amp; Schema
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 relative">
            <div class="text-xs font-mono font-bold text-[#C8960C] mb-2">PHASE 03</div>
            <h3 class="text-lg font-bold text-[#0A192F] mb-3 font-display">Milestone Implementation</h3>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">
              Bi-weekly sprint milestones with strict typing, automated test suites, simulated network latency testing, and regular demonstrable builds provided in staging.
            </p>
            <div class="text-[11px] font-semibold text-slate-500 pt-3 border-t border-slate-200">
              Deliverable: Staging Deployments &amp; Test Proofs
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 relative">
            <div class="text-xs font-mono font-bold text-[#C8960C] mb-2">PHASE 04</div>
            <h3 class="text-lg font-bold text-[#0A192F] mb-3 font-display">Hardened Deployment</h3>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">
              Containerized production deployment, automated TLS reverse proxies, automated backup schedules, NDPR PII log audit, and complete documentation handover.
            </p>
            <div class="text-[11px] font-semibold text-slate-500 pt-3 border-t border-slate-200">
              Deliverable: Production System &amp; Runbook
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- COMMERCIAL ENGAGEMENT MODELS -->
    <section class="py-20 bg-slate-50/60 border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mb-14">
          <span class="text-xs font-bold text-[#C8960C] uppercase tracking-wider block mb-2">Institutional Partnerships</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#0A192F] font-display tracking-tight">
            Commercial Engagement Models
          </h2>
          <p class="text-sm sm:text-base text-slate-600 mt-2">
            We offer transparent, contractually governed engagement frameworks suited to distinct institutional requirements.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-[#C8960C] block mb-2">Model 01</span>
              <h3 class="text-xl font-bold text-[#0A192F] mb-3 font-display">Milestone-Governed Engineering</h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Ideal for well-defined web platforms, mobile applications, or database migrations with fixed scope, clear milestone gates, and scheduled contractual acceptance criteria.
              </p>
              <ul class="space-y-2 text-xs text-slate-700 mb-6">
                <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Fixed or milestone-tranche pricing</li>
                <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Defined acceptance deliverables</li>
                <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Complete code &amp; IP assignment</li>
              </ul>
            </div>
            <a href="/contact?model=milestone" class="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-[#0D2B4E] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">
              Request Milestone Consultation
            </a>
          </div>

          <div class="bg-white rounded-2xl p-8 border-2 border-[#0D2B4E] shadow-md flex flex-col justify-between relative">
            <span class="absolute -top-3 right-6 bg-[#0D2B4E] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">Recommended</span>
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-[#C8960C] block mb-2">Model 02</span>
              <h3 class="text-xl font-bold text-[#0A192F] mb-3 font-display">Dedicated Systems Pod</h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                An embedded, high-caliber engineering team (Software Architect, Frontend/Mobile Engineer, Backend Specialist) providing continuous product evolution and rapid feature velocity.
              </p>
              <ul class="space-y-2 text-xs text-slate-700 mb-6">
                <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Monthly retainer governance</li>
                <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Dedicated full-time senior talent</li>
                <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Direct executive communication</li>
              </ul>
            </div>
            <a href="/contact?model=pod" class="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-white bg-[#0D2B4E] hover:bg-[#0A192F] rounded-lg transition-colors">
              Inquire About Systems Pod
            </a>
          </div>

          <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-[#C8960C] block mb-2">Model 03</span>
              <h3 class="text-xl font-bold text-[#0A192F] mb-3 font-display">Architecture &amp; Security Audit</h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Comprehensive technical review of pre-existing software, database query performance, NDPR compliance readiness, and offline resilience before institutional rollouts.
              </p>
              <ul class="space-y-2 text-xs text-slate-700 mb-6">
                <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Independent third-party audit</li>
                <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Actionable remediation runbooks</li>
                <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Executive briefing presentation</li>
              </ul>
            </div>
            <a href="/contact?model=audit" class="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-[#0D2B4E] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">
              Schedule Architecture Audit
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- BOTTOM CTA BANNER -->
    <section class="py-16 bg-[#0A192F] text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 class="text-2xl sm:text-3xl font-extrabold font-display mb-4">Have an Enterprise or Institutional Project?</h3>
        <p class="text-slate-300 text-sm max-w-xl mx-auto mb-8">
          Connect with our software architects to review your technical scope, expected concurrency, and target timelines.
        </p>
        <a href="/contact" class="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-[#0A192F] bg-white hover:bg-slate-100 rounded-xl transition-all shadow">
          Initiate a Project Conversation
        </a>
      </div>
    </section>
  </main>

  {footer_html}
</body>
</html>"""
