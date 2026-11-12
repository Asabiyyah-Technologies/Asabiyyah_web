"""
Legal Page Generator
Renders statutory corporate governance, NDPR privacy policies, financial disclaimers, and terms of service for Asabiyyah Technologies Ltd.
"""
from src.components.seo import render_head
from src.components.header import render_header
from src.components.footer import render_footer
from src.components.disclaimer_box import render_disclaimer_box

def render_legal_page(company_data):
    head_html = render_head(
        title="Legal Disclosures, NDPR Privacy & Disclaimers",
        description="Official statutory registration records, Nigeria Data Protection Regulation (NDPR) privacy statements, and financial technology disclaimers for Asabiyyah Technologies Ltd.",
        canonical_path="/legal"
    )

    header_html = render_header(active_route="/legal", company_data=company_data)
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
            <span>Statutory Governance</span>
          </div>
          <h1 class="text-4xl sm:text-5xl font-extrabold text-[#0A192F] font-display tracking-tight mb-6">
            Legal Disclosures &amp; Policies
          </h1>
          <p class="text-lg text-slate-600 leading-relaxed">
            Statutory registration records, privacy protections under the Nigeria Data Protection Act, and strict regulatory boundaries governing our software systems.
          </p>
        </div>
      </div>
    </section>

    <!-- LEGAL SUBNAV -->
    <div class="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 hidden sm:block">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs font-semibold text-slate-600">
        <span class="text-slate-400 uppercase tracking-wider text-[11px]">Navigate Policies:</span>
        <div class="flex items-center gap-6">
          <a href="#corporate" class="hover:text-[#0D2B4E] transition-colors">Corporate Registration</a>
          <a href="#regulatory" class="hover:text-[#0D2B4E] transition-colors">Non-Custodial Disclaimer</a>
          <a href="#privacy" class="hover:text-[#0D2B4E] transition-colors">NDPR Privacy Policy</a>
          <a href="#terms" class="hover:text-[#0D2B4E] transition-colors">Terms of Service</a>
          <a href="#ip" class="hover:text-[#0D2B4E] transition-colors">Intellectual Property</a>
        </div>
        <a href="mailto:info@asabiyyah.com" class="text-[#0D2B4E] font-bold hover:underline">Contact Compliance Desk →</a>
      </div>
    </div>

    <!-- MAIN POLICY CONTENT -->
    <section class="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <!-- SECTION 1: CORPORATE REGISTRATION & GOVERNANCE -->
        <article id="corporate" class="scroll-mt-28">
          <span class="text-xs font-bold text-[#C8960C] uppercase tracking-wider block mb-2">Corporate Identity</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-[#0A192F] font-display mb-6">
            1. Official Registration &amp; Corporate Governance
          </h2>
          <div class="prose text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              <strong>ASABIYYAH TECHNOLOGIES LTD</strong> is a private company limited by shares duly incorporated under the <strong>Companies and Allied Matters Act 2020 (CAMA 2020)</strong> by the Corporate Affairs Commission (CAC) of the Federal Republic of Nigeria.
            </p>
            <div class="bg-slate-50 rounded-xl p-6 border border-slate-200 text-xs sm:text-sm font-mono space-y-2 text-slate-800">
              <div><strong>Statutory Name:</strong> ASABIYYAH TECHNOLOGIES LTD</div>
              <div><strong>CAC Registration (RC):</strong> 9918400</div>
              <div><strong>Tax Identification Number (TIN):</strong> 2621713612761</div>
              <div><strong>Date of Incorporation:</strong> October 7, 2026</div>
              <div><strong>Authorized Capital:</strong> ₦5,000,000.00 (5,000,000 Ordinary Shares of ₦1.00 each)</div>
              <div><strong>Registered Office:</strong> 2, Kunya - B Mutum Road, Babura Town, Jigawa State — 732104</div>
            </div>
            <p>
              The company operates under a strict corporate governance framework with equal co-founders holding registered Persons with Significant Control (PSC) status. All commercial engagements are governed by formal contracts executed under Nigerian law.
            </p>
          </div>
        </article>

        <!-- SECTION 2: NON-CUSTODIAL & FINANCIAL DISCLAIMER -->
        <article id="regulatory" class="scroll-mt-28 pt-10 border-t border-slate-100">
          <span class="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-2">Financial Regulatory Boundaries</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-[#0A192F] font-display mb-6">
            2. Financial Technology &amp; Non-Custodial Disclaimer
          </h2>
          
          <div class="mb-6">
            {render_disclaimer_box("regulatory", "Statutory Classification: Pure Software Infrastructure Provider")}
          </div>

          <div class="prose text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              Asabiyyah Technologies Ltd is an enterprise software engineering company. The company is <strong>NOT</strong> a bank, microfinance institution, deposit-taking entity, payment service provider, or custodial wallet operator.
            </p>
            <p>
              Specifically regarding the <strong>Dila platform (and Asabiyyah Adashe)</strong>:
            </p>
            <ul class="list-disc pl-5 space-y-2 text-slate-700 text-sm">
              <li><strong>Zero Custody of Funds:</strong> Dila does not at any time hold, pool, or custody user funds. Group funds are never deposited into Asabiyyah bank accounts.</li>
              <li><strong>Independent Cooperative Ledger:</strong> Dila functions strictly as a double-entry accounting software tool, communication interface, and record-keeping engine utilized by independent group administrators, organizers, and registered cooperative societies.</li>
              <li><strong>Regulated Payment Routing:</strong> Any automated electronic settlements or payment collections executed via the platform route directly through Central Bank of Nigeria (CBN)-licensed commercial banks, switches, and Payment Solution Service Providers (PSSPs).</li>
              <li><strong>No Loan Origination:</strong> Asabiyyah Technologies Ltd does not extend loans, credit, interest-bearing products, or financial investment schemes.</li>
            </ul>
          </div>
        </article>

        <!-- SECTION 3: PRIVACY & NDPR POLICY -->
        <article id="privacy" class="scroll-mt-28 pt-10 border-t border-slate-100">
          <span class="text-xs font-bold text-[#C8960C] uppercase tracking-wider block mb-2">Data Protection</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-[#0A192F] font-display mb-6">
            3. Privacy Policy (NDPR &amp; NDPA Compliant)
          </h2>
          <div class="prose text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              Asabiyyah Technologies Ltd complies with the <strong>Nigeria Data Protection Regulation 2019 (NDPR)</strong> and the <strong>Nigeria Data Protection Act 2023 (NDPA)</strong>. We treat the privacy and confidentiality of client data as fundamental engineering requirements.
            </p>
            <h4 class="font-bold text-slate-900 text-base">Key Privacy Commitments:</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <strong class="text-slate-900 block text-sm mb-1">Data Minimization</strong>
                <p class="text-xs text-slate-600">We only collect data strictly necessary to fulfill project specifications or process inquiries.</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <strong class="text-slate-900 block text-sm mb-1">Automated PII Redaction</strong>
                <p class="text-xs text-slate-600">Diagnostic logs automatically redact Personally Identifiable Information (PII) before storage.</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <strong class="text-slate-900 block text-sm mb-1">No Commercial Data Resale</strong>
                <p class="text-xs text-slate-600">We never monetize, broker, or sell client, partner, or citizen inquiry data to third parties.</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <strong class="text-slate-900 block text-sm mb-1">Right to Erasure</strong>
                <p class="text-xs text-slate-600">Clients and users have the statutory right to request extraction or deletion of their stored data.</p>
              </div>
            </div>
            <p class="text-xs text-slate-500">
              For privacy inquiries or to exercise statutory rights under the NDPA, contact: <a href="mailto:info@asabiyyah.com?subject=NDPR%20Data%20Request" class="font-mono text-[#0D2B4E] font-bold">info@asabiyyah.com</a>.
            </p>
          </div>
        </article>

        <!-- SECTION 4: TERMS OF SERVICE -->
        <article id="terms" class="scroll-mt-28 pt-10 border-t border-slate-100">
          <span class="text-xs font-bold text-[#C8960C] uppercase tracking-wider block mb-2">Usage Agreement</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-[#0A192F] font-display mb-6">
            4. Terms of Service &amp; Acceptable Use
          </h2>
          <div class="prose text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              By accessing www.asabiyyah.com or utilizing Asabiyyah software systems, you agree to comply with all applicable laws of the Federal Republic of Nigeria and the acceptable use terms set forth herein.
            </p>
            <p>
              <strong>Prohibited Conduct:</strong> Users and clients may not use Asabiyyah systems to:
            </p>
            <ul class="list-disc pl-5 space-y-1 text-slate-700 text-sm">
              <li>Deploy unauthorized financial schemes, pyramid structures, or deceptive solicitations.</li>
              <li>Execute automated penetration testing or vulnerability exploitation without prior written authorization.</li>
              <li>Submit malicious payloads, prompt injection attacks, or bot spam through inquiry and webhook endpoints.</li>
            </ul>
            <p>
              <strong>Governing Law:</strong> These terms are governed exclusively by the laws of the Federal Republic of Nigeria. Any dispute arising hereunder shall be subject to the jurisdiction of the competent courts of Nigeria.
            </p>
          </div>
        </article>

        <!-- SECTION 5: INTELLECTUAL PROPERTY -->
        <article id="ip" class="scroll-mt-28 pt-10 border-t border-slate-100">
          <span class="text-xs font-bold text-[#C8960C] uppercase tracking-wider block mb-2">Proprietary Assets</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-[#0A192F] font-display mb-6">
            5. Intellectual Property &amp; Trademarks
          </h2>
          <div class="prose text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              The Asabiyyah logo, brandmarks, proprietary software codebases, architectural documentation, and the brand names "Asabiyyah", "Dila", and "AMANA SHIELD" are the exclusive intellectual property of Asabiyyah Technologies Ltd, protected under Nigerian and international copyright and trademark conventions.
            </p>
            <p>
              All client IP created under bespoke commercial contracts is assigned strictly in accordance with individual written service agreements.
            </p>
          </div>
        </article>

      </div>
    </section>

    <!-- BOTTOM CTA BANNER -->
    <section class="py-16 bg-[#0A192F] text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 class="text-2xl font-extrabold font-display mb-3">Statutory Legal &amp; Compliance Inquiries</h3>
        <p class="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto mb-6">
          For corporate verification, institutional contracts, or data protection questions, reach our compliance desk.
        </p>
        <a href="mailto:info@asabiyyah.com?subject=Legal%20Compliance%20Inquiry" class="inline-flex items-center px-6 py-3 text-xs sm:text-sm font-semibold text-[#0A192F] bg-white hover:bg-slate-100 rounded-xl transition-all shadow font-mono">
          info@asabiyyah.com
        </a>
      </div>
    </section>
  </main>

  {footer_html}
</body>
</html>"""
