"""
About Page Generator
Renders the comprehensive corporate about page for Asabiyyah Technologies Ltd.
"""
from src.components.seo import render_head
from src.components.header import render_header
from src.components.footer import render_footer
from src.components.leader_card import render_leader_card

def render_about_page(company_data, team_data):
    # Leader cards
    leaders_html = "\n".join([render_leader_card(leader) for leader in team_data])

    head_html = render_head(
        title="About Us — Corporate Governance, Leadership & Philosophy",
        description="Learn about Asabiyyah Technologies Ltd, our corporate philosophy of social cohesion, our founding leadership team, and our statutory governance under CAMA 2020.",
        canonical_path="/about"
    )

    header_html = render_header(active_route="/about", company_data=company_data)
    footer_html = render_footer(company_data=company_data)

    values_html = "".join([
        f"""
        <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
          <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center mb-3">0{i+1}</div>
          <h4 class="text-base font-bold text-[#0A192F] mb-2 font-display">{val['title']}</h4>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">{val['description']}</p>
        </div>
        """ for i, val in enumerate(company_data.get("values", []))
    ])

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
            <span>Corporate Identity &amp; Governance</span>
          </div>
          <h1 class="text-4xl sm:text-5xl font-extrabold text-[#0A192F] font-display tracking-tight mb-6">
            Building Technology Rooted in Social Cohesion and Rigor.
          </h1>
          <p class="text-lg text-slate-600 leading-relaxed">
            Asabiyyah Technologies Ltd is an African technology company incorporated under the Companies and Allied Matters Act 2020. We engineer practical software, intelligent systems, and resilient digital infrastructure tailored to African institutional and community realities.
          </p>
        </div>
      </div>
    </section>

    <!-- PHILOSOPHY SECTION -->
    <section class="py-20 bg-white border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-7">
            <span class="text-xs font-bold text-[#C8960C] uppercase tracking-wider block mb-2">Our Intellectual Roots</span>
            <h2 class="text-3xl font-extrabold text-[#0A192F] font-display mb-6">
              The Meaning of <span class="text-[#0D2B4E]">'Asabiyyah</span> (عصبية)
            </h2>
            <div class="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                In the fourteenth century, the renowned North African philosopher and historian <strong>Ibn Khaldun (1332–1406)</strong> introduced the concept of <em>'Asabiyyah</em> in his seminal work, the <em>Muqaddimah</em>. He identified <em>'Asabiyyah</em>—often translated as social cohesion, collective solidarity, mutual responsibility, and shared communal resolve—as the foundational force that enables communities to survive adversity, construct lasting institutions, and govern themselves equitably.
              </p>
              <p>
                At Asabiyyah Technologies Ltd, we believe that modern digital tools must reinforce, rather than undermine or extract from, this organic social trust. In an era where opaque algorithmic systems frequently exploit vulnerability and disregard regional infrastructure constraints, our engineering is deliberately grounded in code-enforced transparency, mutual accountability, and resilient offline utility.
              </p>
              <p>
                We build technology that honors the communal fabric: from mathematical double-entry ledgers that protect cooperative savings circles, to multilingual AI models that abstain from generating unfounded assertions when evidence is missing.
              </p>
            </div>
          </div>

          <div class="lg:col-span-5 bg-slate-50 rounded-3xl p-8 border border-slate-200/90 shadow-sm">
            <div class="w-12 h-12 rounded-2xl bg-[#0A192F] text-amber-400 flex items-center justify-center font-display font-bold text-xl mb-6">
              ع
            </div>
            <h3 class="text-xl font-bold text-[#0A192F] font-display mb-3">Our Core Tenet</h3>
            <p class="text-sm text-slate-600 leading-relaxed mb-6">
              "Technology should reinforce, rather than disrupt or exploit, natural human trust. We build systems that are code-enforced, mathematically balanced, and transparent by design."
            </p>
            <div class="pt-6 border-t border-slate-200 flex items-center gap-3">
              <span class="text-xs font-bold uppercase tracking-wider text-[#C8960C]">Corporate Motto</span>
              <span class="text-xs text-slate-400">·</span>
              <span class="text-xs font-semibold text-slate-800">Building Technology That Matters.</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MISSION, VISION & OPERATING VALUES -->
    <section class="py-20 bg-slate-50/60 border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <!-- Mission -->
          <div class="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm">
            <span class="text-xs font-bold text-[#C8960C] uppercase tracking-wider block mb-2">Corporate Purpose</span>
            <h3 class="text-2xl font-extrabold text-[#0A192F] font-display mb-4">Our Mission</h3>
            <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
              {company_data['mission']}
            </p>
          </div>

          <!-- Vision -->
          <div class="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm">
            <span class="text-xs font-bold text-[#C8960C] uppercase tracking-wider block mb-2">Long-Term Ambition</span>
            <h3 class="text-2xl font-extrabold text-[#0A192F] font-display mb-4">Our Vision</h3>
            <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
              {company_data['vision']}
            </p>
          </div>
        </div>

        <!-- Values -->
        <div>
          <div class="max-w-2xl mb-8">
            <span class="text-xs font-bold text-[#C8960C] uppercase tracking-wider block mb-1">Our Code of Conduct</span>
            <h3 class="text-2xl font-extrabold text-[#0A192F] font-display">Core Operating Values</h3>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values_html}
          </div>
        </div>
      </div>
    </section>

    <!-- STATUTORY CAC CORPORATE PROFILE -->
    <section id="legal" class="scroll-mt-24 py-20 bg-white border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mb-10">
          <span class="text-xs font-bold text-[#C8960C] uppercase tracking-wider block mb-2">Corporate Governance &amp; Registration</span>
          <h2 class="text-3xl font-extrabold text-[#0A192F] font-display tracking-tight">
            Statutory Corporate Identity
          </h2>
          <p class="text-sm text-slate-600 mt-2">
            Asabiyyah Technologies Ltd is fully registered with the Corporate Affairs Commission (CAC) of the Federal Republic of Nigeria, strictly compliant with CAMA 2020 regulations.
          </p>
        </div>

        <div class="overflow-hidden bg-white rounded-2xl border border-slate-200 shadow-sm">
          <table class="w-full text-left border-collapse text-sm">
            <thead>
              <tr class="bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500">
                <th class="py-4 px-6">Statutory Parameter</th>
                <th class="py-4 px-6">Official Corporate Record</th>
                <th class="py-4 px-6 hidden sm:table-cell">Regulatory Reference</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr>
                <td class="py-4 px-6 font-semibold text-slate-900">Registered Corporate Name</td>
                <td class="py-4 px-6 font-bold text-[#0A192F]">{company_data['legal_name']}</td>
                <td class="py-4 px-6 text-slate-500 text-xs hidden sm:table-cell">CAC Certificate of Incorporation</td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-semibold text-slate-900">Registration Number (RC)</td>
                <td class="py-4 px-6 font-mono font-bold text-[#0D2B4E]">{company_data['rc_number']}</td>
                <td class="py-4 px-6 text-slate-500 text-xs hidden sm:table-cell">CAMA 2020 (Private Company Limited by Shares)</td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-semibold text-slate-900">Tax Identification Number (TIN)</td>
                <td class="py-4 px-6 font-mono text-slate-800">{company_data['tin']}</td>
                <td class="py-4 px-6 text-slate-500 text-xs hidden sm:table-cell">Federal Inland Revenue Service (FIRS)</td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-semibold text-slate-900">Date of Incorporation</td>
                <td class="py-4 px-6 text-slate-800">{company_data['incorporation_date']}</td>
                <td class="py-4 px-6 text-slate-500 text-xs hidden sm:table-cell">Official Gazetted Registration Date</td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-semibold text-slate-900">Authorized Share Capital</td>
                <td class="py-4 px-6 text-slate-800 font-semibold">{company_data['share_capital']} ({company_data['share_capital_words']})</td>
                <td class="py-4 px-6 text-slate-500 text-xs hidden sm:table-cell">5,000,000 Ordinary Shares @ ₦1.00 each</td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-semibold text-slate-900">Statutory Head Office</td>
                <td class="py-4 px-6 text-slate-800">{company_data['registered_address']['street']}, {company_data['registered_address']['town']}, {company_data['registered_address']['state']}, {company_data['registered_address']['country']} — {company_data['registered_address']['post_code']}</td>
                <td class="py-4 px-6 text-slate-500 text-xs hidden sm:table-cell">Principal Place of Business Registered with CAC</td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-semibold text-slate-900">Corporate Legal Status</td>
                <td class="py-4 px-6">
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                    <span>{company_data['status']}</span>
                  </span>
                </td>
                <td class="py-4 px-6 text-slate-500 text-xs hidden sm:table-cell">Good Standing with Regulatory Bodies</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- EXECUTIVE LEADERSHIP TEAM -->
    <section id="leadership" class="scroll-mt-24 py-20 bg-slate-50/60 border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mb-12">
          <span class="text-xs font-bold text-[#C8960C] uppercase tracking-wider block mb-2">Executive Leadership</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#0A192F] font-display tracking-tight">
            Founders &amp; Technical Architects
          </h2>
          <p class="text-sm sm:text-base text-slate-600 mt-2">
            The founding team brings together verified academic excellence in computer science, production systems engineering, and grassroots community operations across northern Nigeria.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {leaders_html}
        </div>
      </div>
    </section>

    <!-- GEOGRAPHIC FOOTPRINT & OPERATIONAL DESKS -->
    <section class="py-20 bg-white border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mb-12">
          <span class="text-xs font-bold text-[#C8960C] uppercase tracking-wider block mb-2">Geographic Presence</span>
          <h2 class="text-3xl font-extrabold text-[#0A192F] font-display tracking-tight">
            Operational Hubs &amp; Regional Desks
          </h2>
          <p class="text-sm text-slate-600 mt-2">
            Headquartered in Jigawa State with distributed technical, laboratory, and operations desks across key Nigerian technology corridors.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <span class="text-[11px] font-bold uppercase tracking-wider text-[#C8960C] block mb-1">Corporate Seat</span>
            <h4 class="text-base font-bold text-[#0A192F] mb-2 font-display">Babura, Jigawa State</h4>
            <p class="text-xs text-slate-600 leading-relaxed">
              2, Kunya - B Mutum Road, Babura Town.<br>
              Registered head office, statutory filings, and primary governance domicile.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <span class="text-[11px] font-bold uppercase tracking-wider text-blue-600 block mb-1">Systems Lab</span>
            <h4 class="text-base font-bold text-[#0A192F] mb-2 font-display">Jos, Plateau State</h4>
            <p class="text-xs text-slate-600 leading-relaxed">
              Applied systems engineering lab, quantized AI model testing, and edge synchronization research.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <span class="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">Commercial Operations</span>
            <h4 class="text-base font-bold text-[#0A192F] mb-2 font-display">Kano Municipal, Kano</h4>
            <p class="text-xs text-slate-600 leading-relaxed">
              Commercial operations hub, cooperative society partnerships, and Dila field trial administration.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <span class="text-[11px] font-bold uppercase tracking-wider text-purple-600 block mb-1">Institutional Liaison</span>
            <h4 class="text-base font-bold text-[#0A192F] mb-2 font-display">Abuja, FCT</h4>
            <p class="text-xs text-slate-600 leading-relaxed">
              Institutional desk for regulatory dialogue, civic AI partnerships, and national digital infrastructure tenders.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- BOTTOM CTA BANNER -->
    <section class="py-16 bg-[#0A192F] text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 class="text-2xl sm:text-3xl font-extrabold font-display mb-4">Partner with Asabiyyah Technologies</h3>
        <p class="text-slate-300 text-sm max-w-xl mx-auto mb-8">
          Reach our executive team to explore enterprise software development, system audits, or civic partnerships.
        </p>
        <a href="/contact" class="inline-flex items-center px-7 py-3 text-sm font-semibold text-[#0A192F] bg-white hover:bg-slate-100 rounded-xl transition-all shadow">
          Initiate a Conversation
        </a>
      </div>
    </section>
  </main>

  {footer_html}
</body>
</html>"""
