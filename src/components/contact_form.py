"""
Contact Form Component
Renders an enterprise-grade inquiry form with bot deterrence (honeypot, velocity timing),
dynamic category pre-selection, and a seamless fallback to direct mailto/WhatsApp.
"""

def render_contact_form():
    return """
    <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 sm:p-10">
      <div class="mb-8">
        <span class="text-xs font-bold text-[#C8960C] uppercase tracking-wider block mb-1">Direct Communication Channel</span>
        <h3 class="text-2xl font-extrabold text-[#0A192F] font-display">Initiate a Project Conversation</h3>
        <p class="text-sm text-slate-600 mt-2">
          Submit your project requirements, institutional brief, or pilot participation inquiry. Our engineering team evaluates technical feasibility and replies within 24 business hours.
        </p>
      </div>

      <form id="contactForm" class="space-y-6" onsubmit="handleContactSubmit(event)" novalidate>
        <!-- Honeypot Bot Trap (Hidden from genuine humans) -->
        <div style="display:none !important;" aria-hidden="true">
          <label for="_hp_company">Do not fill this field</label>
          <input type="text" name="_hp_company" id="_hp_company" tabindex="-1" autocomplete="off">
        </div>
        <!-- Anti-Bot Timestamp -->
        <input type="hidden" name="_timestamp" id="_timestamp" value="">

        <!-- Name & Organization Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label for="fullName" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Full Name <span class="text-rose-500">*</span>
            </label>
            <input type="text" id="fullName" name="fullName" required placeholder="e.g. Ibrahim Danbatta" class="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all">
          </div>
          <div>
            <label for="organization" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Organization / Institution
            </label>
            <input type="text" id="organization" name="organization" placeholder="e.g. Northern Agro Co-op Ltd" class="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all">
          </div>
        </div>

        <!-- Email & Phone Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label for="email" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Official Email <span class="text-rose-500">*</span>
            </label>
            <input type="email" id="email" name="email" required placeholder="you@organization.com" class="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all">
          </div>
          <div>
            <label for="phone" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Telephone / WhatsApp <span class="text-rose-500">*</span>
            </label>
            <input type="tel" id="phone" name="phone" required placeholder="+234 800 000 0000" class="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all">
          </div>
        </div>

        <!-- Inquiry Classification & Timeline Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label for="inquiryType" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Inquiry Classification <span class="text-rose-500">*</span>
            </label>
            <select id="inquiryType" name="inquiryType" class="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white">
              <option value="Custom Enterprise Software">Custom Enterprise Software Engineering</option>
              <option value="Applied AI & Intelligent Systems">Applied AI & Intelligent Systems (RAG / NLP)</option>
              <option value="Process Automation & Ledgers">Business Process Automation & Ledgers</option>
              <option value="Data Engineering & Resilient Infrastructure">Data Engineering & Infrastructure</option>
              <option value="Dila Pilot Access">Dila Platform Pilot Participation</option>
              <option value="Civic Partnership">Civic / Institutional Partnership (AMANA SHIELD)</option>
              <option value="General Corporate Inquiry">General Corporate Inquiry</option>
            </select>
          </div>
          <div>
            <label for="timeline" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Estimated Timeline
            </label>
            <select id="timeline" name="timeline" class="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white">
              <option value="Immediate (< 1 month)">Immediate Deployment (< 1 month)</option>
              <option value="1-3 Months">Near-Term Execution (1–3 Months)</option>
              <option value="Longer Horizon">Exploratory / Feasibility Study</option>
            </select>
          </div>
        </div>

        <!-- Project Scope Description -->
        <div>
          <label for="projectScope" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Project Scope &amp; Core Objectives <span class="text-rose-500">*</span>
          </label>
          <textarea id="projectScope" name="projectScope" rows="4" required placeholder="Describe your operational problem, current bottlenecks, expected deliverables, and any critical constraints (e.g. offline environments, language requirements, or legacy systems)..." class="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"></textarea>
          <p class="text-[11px] text-slate-500 mt-1">Please provide minimum 10 characters. Confidentiality protected under Asabiyyah NDPR policy.</p>
        </div>

        <!-- Form Status Alert Box -->
        <div id="formAlert" class="hidden p-4 rounded-xl text-sm" role="alert"></div>

        <!-- Submit Button -->
        <div>
          <button type="submit" id="submitBtn" class="w-full inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#0D2B4E] hover:bg-[#0A192F] rounded-xl shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed">
            <span id="btnText">Transmit Project Inquiry</span>
            <svg id="btnSpinner" class="hidden animate-spin ml-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </button>
        </div>

        <!-- Privacy & SLA Footnote -->
        <div class="text-center text-xs text-slate-500 pt-2 border-t border-slate-100 flex items-center justify-center gap-4">
          <span>NDPR Compliant</span>
          <span>·</span>
          <span>24-Hour Review SLA</span>
          <span>·</span>
          <span>Direct Executive Intake</span>
        </div>
      </form>
    </div>

    <!-- Client-side Handling Script -->
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        const tsField = document.getElementById('_timestamp');
        if (tsField) {
          tsField.value = Date.now().toString();
        }

        // Auto-select inquiry type from URL query string
        const urlParams = new URLSearchParams(window.location.search);
        const inquiryTypeSelect = document.getElementById('inquiryType');
        if (inquiryTypeSelect) {
          if (urlParams.get('type') === 'dila-pilot') {
            inquiryTypeSelect.value = 'Dila Pilot Access';
          } else if (urlParams.get('practice') === 'custom-software') {
            inquiryTypeSelect.value = 'Custom Enterprise Software';
          } else if (urlParams.get('practice') === 'applied-ai') {
            inquiryTypeSelect.value = 'Applied AI & Intelligent Systems';
          } else if (urlParams.get('practice') === 'process-automation') {
            inquiryTypeSelect.value = 'Process Automation & Ledgers';
          } else if (urlParams.get('practice') === 'digital-infrastructure') {
            inquiryTypeSelect.value = 'Data Engineering & Resilient Infrastructure';
          }
        }
      });

      async function handleContactSubmit(event) {
        event.preventDefault();
        const form = document.getElementById('contactForm');
        const alertBox = document.getElementById('formAlert');
        const submitBtn = document.getElementById('submitBtn');
        const btnText = document.getElementById('btnText');
        const btnSpinner = document.getElementById('btnSpinner');

        alertBox.className = 'hidden';
        alertBox.innerHTML = '';

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Basic client validation
        if (!data.fullName || data.fullName.trim().length < 2) {
          showAlert('Please provide your full name (minimum 2 characters).', 'error');
          return;
        }
        if (!data.email || !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(data.email.trim())) {
          showAlert('Please provide a valid email address.', 'error');
          return;
        }
        if (!data.phone || data.phone.trim().length < 7) {
          showAlert('Please provide a valid phone or WhatsApp number.', 'error');
          return;
        }
        if (!data.projectScope || data.projectScope.trim().length < 10) {
          showAlert('Please describe your project scope (minimum 10 characters).', 'error');
          return;
        }

        // Loading state
        submitBtn.disabled = true;
        btnText.textContent = 'Transmitting...';
        btnSpinner.classList.remove('hidden');

        try {
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });

          const result = await response.json();

          if (response.ok && result.success) {
            showAlert(
              `<strong>Inquiry Received (${result.inquiry_id || 'ASB-ACK'})</strong><br>${result.message || 'Our team will review your parameters and respond within 24 business hours.'}`,
              'success'
            );
            form.reset();
            const tsField = document.getElementById('_timestamp');
            if (tsField) tsField.value = Date.now().toString();
          } else {
            showAlert(
              result.error || 'Unable to submit inquiry at this moment. You can reach our team directly at <a href="mailto:info@asabiyyah.com" class="underline font-bold">info@asabiyyah.com</a> or via WhatsApp at <a href="https://wa.me/2348064753943" class="underline font-bold">+234 806 475 3943</a>.',
              'error'
            );
          }
        } catch (networkErr) {
          // Graceful fallback for static preview or connection failure
          showAlert(
            'Inquiry engine reached via offline mode. Please send your parameters directly to <a href="mailto:info@asabiyyah.com?subject=' + encodeURIComponent('Project Inquiry: ' + data.inquiryType) + '&body=' + encodeURIComponent('Name: ' + data.fullName + '\\nOrg: ' + data.organization + '\\nPhone: ' + data.phone + '\\nScope: ' + data.projectScope) + '" class="underline font-bold">info@asabiyyah.com</a> or via WhatsApp to <a href="https://wa.me/2348064753943" class="underline font-bold">+234 806 475 3943</a>.',
            'info'
          );
        } finally {
          submitBtn.disabled = false;
          btnText.textContent = 'Transmit Project Inquiry';
          btnSpinner.classList.add('hidden');
        }
      }

      function showAlert(msg, type) {
        const alertBox = document.getElementById('formAlert');
        alertBox.classList.remove('hidden');
        if (type === 'success') {
          alertBox.className = 'p-5 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200 text-sm leading-relaxed';
        } else if (type === 'error') {
          alertBox.className = 'p-5 rounded-xl bg-rose-50 text-rose-900 border border-rose-200 text-sm leading-relaxed';
        } else {
          alertBox.className = 'p-5 rounded-xl bg-blue-50 text-blue-900 border border-blue-200 text-sm leading-relaxed';
        }
        alertBox.innerHTML = msg;
      }
    </script>
    """
