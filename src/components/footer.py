"""
Footer Component
Renders the comprehensive institutional footer with statutory CAC profile, sitemap, contact channels, and legal policies.
"""

def render_footer(company_data=None):
    return """
    <!-- Global Institutional Footer -->
    <footer class="bg-[#0A192F] text-slate-300 border-t border-slate-800 pt-16 pb-12 transition-colors">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-14 border-b border-slate-800">
          
          <!-- Column 1: Brand & Philosophy (2 Cols wide on desktop) -->
          <div class="lg:col-span-2">
            <div class="flex items-center gap-3 mb-4">
              <svg class="w-9 h-9" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="42" stroke="#2563EB" stroke-width="4" opacity="0.6"/>
                <path d="M50 8 C26.8 8 8 26.8 8 50 C8 73.2 26.8 92 50 92 C67.5 92 82.5 81.2 88.7 65.8 C80.6 75.8 68.3 82.2 54.5 82.2 C36.8 82.2 22.5 67.9 22.5 50.2 C22.5 32.5 36.8 18.2 54.5 18.2 C61.5 18.2 68 20.5 73.3 24.3 C66.5 14.2 58.8 8 50 8 Z" fill="#2563EB"/>
                <path d="M56 32 C47.7 32 41 38.7 41 47 C41 55.3 47.7 62 56 62 C61.8 62 66.8 58.7 69.3 53.9 C65.9 56.3 61.7 57.7 57.2 57.7 C50.2 57.7 44.5 52 44.5 45 C44.5 38 50.2 32.3 57.2 32.3 C60.4 32.3 63.3 33.5 65.6 35.5 C62.8 33.3 59.6 32 56 32 Z" fill="#C8960C"/>
              </svg>
              <div>
                <span class="font-extrabold text-lg text-white tracking-wider block font-display leading-tight">ASABIYYAH</span>
                <span class="text-[10px] tracking-widest font-bold text-[#C8960C] uppercase block">Technologies Ltd</span>
              </div>
            </div>
            
            <p class="text-sm text-slate-400 max-w-sm mb-6 leading-relaxed">
              An African technology company engineering high-integrity software, intelligent systems, and resilient digital infrastructure for enterprises, institutions, and communities.
            </p>

            <div class="flex items-center gap-2 mb-4">
              <span class="h-px w-8 bg-[#C8960C]"></span>
              <span class="w-1.5 h-1.5 bg-[#C8960C] rotate-45"></span>
              <span class="text-xs font-semibold tracking-wider uppercase text-[#C8960C]">Building Technology That Matters.</span>
            </div>

            <!-- Statutory CAC Registration Callout -->
            <div class="bg-slate-900/80 rounded-xl p-4 border border-slate-800 text-xs text-slate-400 space-y-1">
              <div class="font-bold text-slate-200">FEDERAL REPUBLIC OF NIGERIA</div>
              <div>CAMA 2020 Registration No: <span class="font-mono text-[#C8A951] font-semibold">RC 9918400</span></div>
              <div>Tax Identification Number (TIN): <span class="font-mono text-slate-300">2621713612761</span></div>
              <div>Authorized Share Capital: <span class="text-slate-300">₦5,000,000.00 (Fully Issued)</span></div>
            </div>
          </div>

          <!-- Column 2: Commercial Services -->
          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-white mb-4">Commercial Practices</h4>
            <ul class="space-y-2.5 text-sm">
              <li><a href="/services#custom-software" class="text-slate-400 hover:text-white transition-colors">Custom Enterprise Software</a></li>
              <li><a href="/services#applied-ai" class="text-slate-400 hover:text-white transition-colors">Applied AI & Intelligent Systems</a></li>
              <li><a href="/services#process-automation" class="text-slate-400 hover:text-white transition-colors">Process Automation & Ledgers</a></li>
              <li><a href="/services#digital-infrastructure" class="text-slate-400 hover:text-white transition-colors">Resilient Digital Infrastructure</a></li>
              <li><a href="/engineering" class="text-slate-400 hover:text-white transition-colors">Offline-First Architecture</a></li>
            </ul>
          </div>

          <!-- Column 3: Products & Initiatives -->
          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-white mb-4">Products & Projects</h4>
            <ul class="space-y-2.5 text-sm">
              <li><a href="/products#dila" class="text-slate-400 hover:text-white transition-colors flex items-center justify-between">Dila Platform <span class="text-[10px] bg-amber-950/80 text-amber-300 border border-amber-800 px-1.5 py-0.5 rounded">Pilot</span></a></li>
              <li><a href="/products#amana-shield" class="text-slate-400 hover:text-white transition-colors flex items-center justify-between">AMANA SHIELD <span class="text-[10px] bg-emerald-950/80 text-emerald-300 border border-emerald-800 px-1.5 py-0.5 rounded">API</span></a></li>
              <li><a href="/products#classgpt" class="text-slate-400 hover:text-white transition-colors flex items-center justify-between">ClassGPT-N <span class="text-[10px] bg-blue-950/80 text-blue-300 border border-blue-800 px-1.5 py-0.5 rounded">R&amp;D</span></a></li>
              <li><a href="/engineering" class="text-slate-400 hover:text-white transition-colors">System Architecture Specs</a></li>
            </ul>
          </div>

          <!-- Column 4: Contact & Operations -->
          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-white mb-4">Registered Office</h4>
            <div class="text-sm text-slate-400 space-y-2.5">
              <p class="leading-relaxed">
                2, Kunya - B Mutum Road,<br>
                Babura Town, Jigawa State,<br>
                Nigeria — 732104
              </p>
              <div class="pt-2 border-t border-slate-800">
                <a href="mailto:info@asabiyyah.com" class="block text-slate-300 hover:text-[#C8A951] font-mono text-xs transition-colors">info@asabiyyah.com</a>
                <a href="tel:+2348064753943" class="block text-slate-300 hover:text-[#C8A951] font-mono text-xs transition-colors mt-1">+234 806 475 3943</a>
              </div>
              <div class="pt-2">
                <span class="inline-block px-2.5 py-1 rounded bg-slate-800/80 text-[11px] text-slate-300 font-medium">Mon–Fri: 08:00–17:00 WAT</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Institutional Disclaimer Banner -->
        <div class="py-6 border-b border-slate-800/80 text-[11px] text-slate-400 leading-relaxed">
          <span class="font-bold text-slate-300">Regulatory Disclaimer:</span> Asabiyyah Technologies Ltd is a technology and software engineering enterprise. Dila operates strictly as a pure software infrastructure platform providing double-entry ledger automation and record-keeping for independent group organizers and registered cooperatives. Dila does NOT take custody of client funds, issue loans, or operate as a bank. All financial transactions route directly through Central Bank of Nigeria (CBN)-licensed commercial banks and regulated payment service providers.
        </div>

        <!-- Bottom Copyright & Policy Links -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 Asabiyyah Technologies Ltd. All rights reserved.
          </div>
          <div class="flex items-center gap-6">
            <a href="/legal#privacy" class="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="/legal#terms" class="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="/legal#regulatory" class="hover:text-slate-300 transition-colors">Financial Disclaimer</a>
            <a href="/legal" class="hover:text-slate-300 transition-colors">CAC Legal Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
    """
