"""
Contact Page Generator
Renders the corporate contact and project inquiry page for Asabiyyah Technologies Ltd.
"""
from src.components.seo import render_head
from src.components.header import render_header
from src.components.footer import render_footer
from src.components.contact_form import render_contact_form

def render_contact_page(company_data):
    head_html = render_head(
        title="Contact Us — Corporate Desk & Project Inquiries",
        description="Initiate a project conversation with Asabiyyah Technologies Ltd. Submit your enterprise software scope, cooperative automation brief, or pilot participation inquiry.",
        canonical_path="/contact"
    )

    header_html = render_header(active_route="/contact", company_data=company_data)
    footer_html = render_footer(company_data=company_data)
    form_html = render_contact_form()

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
            <span>Corporate Communication</span>
          </div>
          <h1 class="text-4xl sm:text-5xl font-extrabold text-[#0A192F] font-display tracking-tight mb-6">
            Start a Conversation with Our Team
          </h1>
          <p class="text-lg text-slate-600 leading-relaxed">
            Whether you require bespoke software engineering, enterprise process automation, or participation in the Dila platform pilot, our leadership and engineering team will review your parameters.
          </p>
        </div>
      </div>
    </section>

    <!-- MAIN CONTACT INTERFACE (2-Column Grid) -->
    <section class="py-16 sm:py-20 bg-slate-50/50 border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <!-- Left Column: Direct Corporate Channels (5 cols) -->
          <div class="lg:col-span-5 space-y-8">
            <!-- Registered Office Card -->
            <div class="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <span class="text-xs font-bold text-[#C8960C] uppercase tracking-wider block mb-2">Registered Seat</span>
              <h3 class="text-xl font-extrabold text-[#0A192F] font-display mb-4">Statutory Head Office</h3>
              
              <div class="space-y-4 text-sm text-slate-600">
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-slate-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  <div>
                    <strong class="text-slate-900 block font-semibold">{company_data['legal_name']}</strong>
                    <span>2, Kunya - B Mutum Road, Babura Town,</span><br>
                    <span>Jigawa State, Nigeria — 732104</span>
                  </div>
                </div>

                <div class="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <svg class="w-5 h-5 text-slate-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  <div>
                    <span class="text-xs text-slate-500 block">Official Inquiries</span>
                    <a href="mailto:info@asabiyyah.com" class="font-mono text-sm font-semibold text-[#0D2B4E] hover:underline">info@asabiyyah.com</a>
                  </div>
                </div>

                <div class="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <svg class="w-5 h-5 text-slate-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  <div>
                    <span class="text-xs text-slate-500 block">Telephone &amp; WhatsApp Desk</span>
                    <a href="tel:+2348064753943" class="font-mono text-sm font-semibold text-[#0D2B4E] hover:underline">+234 806 475 3943</a>
                  </div>
                </div>
              </div>

              <div class="mt-6 pt-6 border-t border-slate-100 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span class="text-slate-500 block mb-0.5">Operating Hours</span>
                  <strong class="text-slate-800">Mon–Fri: 08:00–17:00 WAT</strong>
                </div>
                <div>
                  <span class="text-slate-500 block mb-0.5">Response SLA</span>
                  <strong class="text-emerald-700">Within 24 Business Hours</strong>
                </div>
              </div>
            </div>

            <!-- Fast-Track WhatsApp Card -->
            <div class="bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-200/80 p-6 shadow-sm flex items-center justify-between">
              <div>
                <div class="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">Direct Messaging</div>
                <h4 class="text-base font-bold text-slate-900">WhatsApp Corporate Desk</h4>
                <p class="text-xs text-slate-600 mt-1">Direct channel for urgent institutional inquiries.</p>
              </div>
              <a href="https://wa.me/2348064753943" target="_blank" rel="noopener noreferrer" class="shrink-0 inline-flex items-center px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-sm">
                <span>Message Now</span>
                <svg class="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
            </div>

            <!-- Regional Operating Footprint -->
            <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Operating Network</h4>
              <ul class="space-y-2 text-xs text-slate-600">
                <li class="flex items-center justify-between py-1 border-b border-slate-100">
                  <span class="font-medium text-slate-800">Babura, Jigawa State</span>
                  <span class="text-slate-500 font-mono">Headquarters</span>
                </li>
                <li class="flex items-center justify-between py-1 border-b border-slate-100">
                  <span class="font-medium text-slate-800">Jos, Plateau State</span>
                  <span class="text-slate-500 font-mono">Systems Lab</span>
                </li>
                <li class="flex items-center justify-between py-1 border-b border-slate-100">
                  <span class="font-medium text-slate-800">Kano Municipal, Kano</span>
                  <span class="text-slate-500 font-mono">Operations Hub</span>
                </li>
                <li class="flex items-center justify-between py-1">
                  <span class="font-medium text-slate-800">Abuja, FCT</span>
                  <span class="text-slate-500 font-mono">Institutional Desk</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Right Column: Interactive Intake Form (7 cols) -->
          <div class="lg:col-span-7">
            {form_html}
          </div>

        </div>
      </div>
    </section>
  </main>

  {footer_html}
</body>
</html>"""
