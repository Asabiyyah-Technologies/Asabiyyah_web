"""
Engineering Page Generator
Renders deep-dive architectural specifications, technical diagrams, and technology stack inventories for Asabiyyah Technologies Ltd.
"""
from src.components.seo import render_head
from src.components.header import render_header
from src.components.footer import render_footer

def render_engineering_page(company_data):
    head_html = render_head(
        title="Engineering Architecture & System Specifications",
        description="Deep-dive into Asabiyyah's architectural specifications: offline-first SQLite synchronization, grounded AI uncertainty abstention, and double-entry ledger logic.",
        canonical_path="/engineering"
    )

    header_html = render_header(active_route="/engineering", company_data=company_data)
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
            <span>Technical Deep Dive</span>
          </div>
          <h1 class="text-4xl sm:text-5xl font-extrabold text-[#0A192F] font-display tracking-tight mb-6">
            System Architecture Specifications
          </h1>
          <p class="text-lg text-slate-600 leading-relaxed">
            A transparent examination of the architectural patterns, algorithmic guardrails, and data structures engineered by Asabiyyah Technologies Ltd.
          </p>
        </div>
      </div>
    </section>

    <!-- ARCHITECTURE PILLAR 1: OFFLINE-FIRST EDGE SYNC -->
    <section id="offline-first" class="scroll-mt-24 py-20 bg-white border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div class="lg:col-span-6">
            <span class="text-xs font-bold text-[#C8960C] uppercase tracking-wider block mb-2">Architectural Blueprint 01</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-[#0A192F] font-display mb-4">
              Offline-First Edge Synchronization
            </h2>
            <p class="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              In Nigerian commercial hubs and rural markets, cloud connectivity cannot be treated as an immutable constant. Network drops, high packet loss, and power intermittency are standard operating conditions. Our architecture ensures that application state persists locally first and syncs asynchronously.
            </p>

            <div class="space-y-4">
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div class="font-bold text-sm text-[#0A192F] mb-1">Local-First Write Ahead</div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Every mutation is written directly to an embedded SQLite database on the client device inside an ACID transaction. The user interface updates instantaneously with zero network round-trip latency.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div class="font-bold text-sm text-[#0A192F] mb-1">Monotonic Sequence Ledger</div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Local actions append to an immutable change log tagged with monotonic sequence numbers. When network access is re-established, the sync worker transmits the delta packet to the central PostgreSQL server.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div class="font-bold text-sm text-[#0A192F] mb-1">Zero-Collision Conflict Resolution</div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Financial transactions utilize append-only journal entries: because ledger entries are additive rather than in-place overwrites, concurrent offline transactions from multiple organizers resolve deterministically without data loss.
                </p>
              </div>
            </div>
          </div>

          <!-- Code / Diagram Card -->
          <div class="lg:col-span-6">
            <div class="bg-[#0A192F] text-slate-200 rounded-2xl p-6 sm:p-8 font-mono text-xs shadow-xl border border-slate-800">
              <div class="flex items-center justify-between pb-4 border-b border-slate-800 text-slate-400">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-rose-500"></span>
                  <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                  <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                </div>
                <span>offline_sync_topology.txt</span>
              </div>
              <pre class="pt-6 overflow-x-auto text-[11px] leading-relaxed text-slate-300">
<code>[FIELD OPERATOR / MOBILE CLIENT]
      │
      ├──> (1) User Records Contribution (No Internet Required)
      │         │
      │         ▼
      ├──> [Embedded SQLite Database] (ACID Local Commit)
      │         │
      │         ├── Writes to: ledger_entries
      │         └── Appends to: sync_queue (status='PENDING')
      │
      ▼
[BACKGROUND SYNC WORKER]
      │
      ├──> (2) Detects Cellular Connectivity (2G/3G/4G/WiFi)
      ├──> (3) Batches Delta Entries with Device Monotonic Sequence
      │         │
      │         ▼ HTTPS / TLS 1.3
      ▼
[ASABIYYAH INGESTION EDGE API]
      │
      ├──> (4) Validates Cryptographic Device Token
      ├──> (5) Executes Idempotent Ingestion Transaction
      │         │
      │         ▼
      ├──> [Central PostgreSQL 16 Cluster]
      │         │
      │         └── Relational Constraint Check: SUM(debit) == SUM(credit)
      │
      ▼
(6) Returns ACK Packet -> Mobile Client Clears sync_queue</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ARCHITECTURE PILLAR 2: GROUNDED AI & UNCERTAINTY ABSTENTION -->
    <section id="amana-shield" class="scroll-mt-24 py-20 bg-slate-50/60 border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div class="lg:col-span-6 order-2 lg:order-1">
            <div class="bg-[#0A192F] text-slate-200 rounded-2xl p-6 sm:p-8 font-mono text-xs shadow-xl border border-slate-800">
              <div class="flex items-center justify-between pb-4 border-b border-slate-800 text-slate-400">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                  <span class="text-xs text-emerald-400 font-bold">AMANA SHIELD ENGINE</span>
                </div>
                <span>threat_fusion_pipeline.py</span>
              </div>
              <pre class="pt-6 overflow-x-auto text-[11px] leading-relaxed text-slate-300">
<code># Strict Deterministic Uncertainty Abstention
def evaluate_claim_risk(claim_text: str, evidence_docs: List[Doc]) -> Verdict:
    if not evidence_docs or len(evidence_docs) == 0:
        # Never fabricate refutation without authoritative documents
        return Verdict(
            status="UNVERIFIED",
            confidence=0.0,
            advisory_en="Insufficient official evidence to verify or refute this claim.",
            advisory_ha="Babu isassun shaidu na hukuma don tabbatarwa ko karyata wannan zance."
        )

    # Multi-pillar composite evaluation
    text_risk = analyze_syntactic_patterns(claim_text)
    url_risk = evaluate_rdap_and_dns_entropy(extract_urls(claim_text))
    doc_overlap = compute_tsvector_bm25_score(claim_text, evidence_docs)

    return synthesize_bilingual_advisory(text_risk, url_risk, doc_overlap)</code></pre>
            </div>
          </div>

          <div class="lg:col-span-6 order-1 lg:order-2">
            <span class="text-xs font-bold text-[#C8960C] uppercase tracking-wider block mb-2">Architectural Blueprint 02</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-[#0A192F] font-display mb-4">
              Grounded AI &amp; Strict Uncertainty Abstention
            </h2>
            <p class="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              Generic Large Language Models (LLMs) hallucinate confident answers when encountering unverified rumors or niche regional events. In civic threat intelligence, false refutations can be as catastrophic as false rumors. Our AMANA SHIELD intelligence engine enforces strict epistemic humility.
            </p>

            <div class="space-y-4">
              <div class="p-4 rounded-xl bg-white border border-slate-200">
                <div class="font-bold text-sm text-[#0A192F] mb-1">Grounded Epistemic Abstention</div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Absence of authoritative evidence is never treated as proof of falsity. When our procedural RAG pipeline finds zero verified records in authoritative databases, the engine abstains with a transparent <code class="text-slate-800 font-bold">UNVERIFIED</code> status.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-white border border-slate-200">
                <div class="font-bold text-sm text-[#0A192F] mb-1">Multi-Pillar Risk Fusion</div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  We decouple text sentiment from structural indicators. A message claiming to be a "Federal Ministry of Humanitarian Affairs Grant" with a domain created 48 hours ago triggers an immediate phishing alert based on DNS/RDAP entropy, regardless of plausible wording.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-white border border-slate-200">
                <div class="font-bold text-sm text-[#0A192F] mb-1">Prompt Defense Nonces</div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Public WhatsApp bots are vulnerable to jailbreak and prompt-injection attacks. Every inbound message is isolated with random cryptographic session nonces that instruct the model parser to treat user input as raw untrusted data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ARCHITECTURE PILLAR 3: DOUBLE-ENTRY ACCOUNTING -->
    <section id="double-entry" class="scroll-mt-24 py-20 bg-white border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div class="lg:col-span-6">
            <span class="text-xs font-bold text-[#C8960C] uppercase tracking-wider block mb-2">Architectural Blueprint 03</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-[#0A192F] font-display mb-4">
              Relational Double-Entry Ledger Logic
            </h2>
            <p class="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              Informal savings systems (Adashe, Esusu, Ajo) frequently fracture due to bookkeeping ambiguity, lost paper records, or disputed payout schedules. Dila implements a zero-dependency relational double-entry ledger that enforces mathematical balance at the database engine level.
            </p>

            <div class="space-y-4">
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div class="font-bold text-sm text-[#0A192F] mb-1">Strict Mathematical Invariant</div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Every financial event consists of at least two balanced entries: a debit and a credit. The sum of all debits must equal the sum of all credits. Any transaction violating this rule is rejected by database constraints.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div class="font-bold text-sm text-[#0A192F] mb-1">Immutable Append-Only Records</div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Historical entries cannot be edited or deleted (<code class="text-slate-800 font-bold">UPDATE</code> and <code class="text-slate-800 font-bold">DELETE</code> are disabled via database triggers). Any bookkeeping adjustment requires an explicitly logged reversing entry.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div class="font-bold text-sm text-[#0A192F] mb-1">Algorithmic Payout Schedules</div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Rotation sequences in rotating savings circles are locked algorithmically upon group activation. This eliminates human favoritism and dispute over payout turns.
                </p>
              </div>
            </div>
          </div>

          <!-- Code Card -->
          <div class="lg:col-span-6">
            <div class="bg-[#0A192F] text-slate-200 rounded-2xl p-6 sm:p-8 font-mono text-xs shadow-xl border border-slate-800">
              <div class="flex items-center justify-between pb-4 border-b border-slate-800 text-slate-400">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                  <span class="text-xs text-amber-400 font-bold">DILA ACCOUNTING SCHEMA</span>
                </div>
                <span>schema_ledger.sql</span>
              </div>
              <pre class="pt-6 overflow-x-auto text-[11px] leading-relaxed text-slate-300">
<code>-- Relational Double-Entry Enforcement Table
CREATE TABLE ledger_entries (
    entry_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    transaction_id UUID NOT NULL REFERENCES transactions(id),
    account_id UUID NOT NULL REFERENCES accounts(id),
    entry_type VARCHAR(6) NOT NULL CHECK (entry_type IN ('DEBIT', 'CREDIT')),
    amount_kobo BIGINT NOT NULL CHECK (amount_kobo > 0),
    currency VARCHAR(3) NOT NULL DEFAULT 'NGN',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Invariant Enforcement: Sum of debits == Sum of credits
CREATE OR REPLACE FUNCTION verify_transaction_balance() 
RETURNS TRIGGER AS $$
DECLARE
    debit_sum BIGINT;
    credit_sum BIGINT;
BEGIN
    SELECT COALESCE(SUM(amount_kobo), 0) INTO debit_sum 
    FROM ledger_entries WHERE transaction_id = NEW.transaction_id AND entry_type = 'DEBIT';

    SELECT COALESCE(SUM(amount_kobo), 0) INTO credit_sum 
    FROM ledger_entries WHERE transaction_id = NEW.transaction_id AND entry_type = 'CREDIT';

    IF debit_sum != credit_sum THEN
        RAISE EXCEPTION 'Transaction imbalance: Debits (%) != Credits (%)', debit_sum, credit_sum;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FULL TECHNOLOGY STACK INVENTORY -->
    <section class="py-20 bg-slate-50/60 border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mb-12">
          <span class="text-xs font-bold text-[#C8960C] uppercase tracking-wider block mb-2">Tooling &amp; Infrastructure</span>
          <h2 class="text-3xl font-extrabold text-[#0A192F] font-display tracking-tight">
            Production Technology Inventory
          </h2>
          <p class="text-sm text-slate-600 mt-2">
            The programming languages, frameworks, database engines, and runtime environments deployed across Asabiyyah engineering projects.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h4 class="text-sm font-bold text-[#0A192F] mb-3 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-blue-600"></span>
              Frontend &amp; Client Systems
            </h4>
            <ul class="space-y-2 text-xs text-slate-600">
              <li><strong class="text-slate-800">React 18 &amp; Next.js:</strong> Component architectures &amp; statically generated portals</li>
              <li><strong class="text-slate-800">TypeScript:</strong> Strict compile-time typing across web applications</li>
              <li><strong class="text-slate-800">Tailwind CSS:</strong> Predictable, tokenized responsive styling system</li>
              <li><strong class="text-slate-800">Flutter &amp; Dart:</strong> Cross-platform native mobile clients (Android &amp; iOS)</li>
            </ul>
          </div>

          <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h4 class="text-sm font-bold text-[#0A192F] mb-3 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
              Backend APIs &amp; Services
            </h4>
            <ul class="space-y-2 text-xs text-slate-600">
              <li><strong class="text-slate-800">FastAPI &amp; Python 3:</strong> High-performance async microservices with OpenAPI schemas</li>
              <li><strong class="text-slate-800">NestJS &amp; Node.js:</strong> Enterprise modular backend service architectures</li>
              <li><strong class="text-slate-800">Pydantic v2:</strong> Strict runtime payload validation and serialization</li>
              <li><strong class="text-slate-800">Celery &amp; Redis:</strong> Asynchronous task queues and sliding-window rate limiting</li>
            </ul>
          </div>

          <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h4 class="text-sm font-bold text-[#0A192F] mb-3 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-amber-600"></span>
              Applied AI &amp; NLP
            </h4>
            <ul class="space-y-2 text-xs text-slate-600">
              <li><strong class="text-slate-800">Quantized LLMs (Qwen 2.5B):</strong> 4-bit local edge inference for resource-constrained setups</li>
              <li><strong class="text-slate-800">PostgreSQL tsvector:</strong> Hybrid lexical and semantic retrieval pipelines</li>
              <li><strong class="text-slate-800">N-ATLAS Speech NLP:</strong> Native Hausa speech-to-text recognition</li>
              <li><strong class="text-slate-800">PyTorch &amp; HuggingFace:</strong> Local model deployment and embedding generation</li>
            </ul>
          </div>

          <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h4 class="text-sm font-bold text-[#0A192F] mb-3 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-purple-600"></span>
              Databases &amp; Persistence
            </h4>
            <ul class="space-y-2 text-xs text-slate-600">
              <li><strong class="text-slate-800">PostgreSQL 16:</strong> Primary relational storage with strict foreign key constraints</li>
              <li><strong class="text-slate-800">SQLite 3:</strong> Embedded local client persistence with WAL mode enabled</li>
              <li><strong class="text-slate-800">Alembic:</strong> Version-controlled, idempotent database schema migrations</li>
              <li><strong class="text-slate-800">Redis:</strong> Session storage, cryptographic cache, and rate-limiting counters</li>
            </ul>
          </div>

          <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h4 class="text-sm font-bold text-[#0A192F] mb-3 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-rose-600"></span>
              Infrastructure &amp; Edge
            </h4>
            <ul class="space-y-2 text-xs text-slate-600">
              <li><strong class="text-slate-800">Docker &amp; Compose:</strong> Hardened, reproducible multi-stage container builds</li>
              <li><strong class="text-slate-800">Caddy Server:</strong> Automated TLS certificate management via Let's Encrypt</li>
              <li><strong class="text-slate-800">Cloudflare Pages &amp; Edge:</strong> Global CDN distribution and edge serverless execution</li>
              <li><strong class="text-slate-800">Systemd:</strong> Service supervision and automated failure recovery on Linux</li>
            </ul>
          </div>

          <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h4 class="text-sm font-bold text-[#0A192F] mb-3 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-cyan-600"></span>
              Security &amp; Governance
            </h4>
            <ul class="space-y-2 text-xs text-slate-600">
              <li><strong class="text-slate-800">HMAC-SHA256:</strong> Cryptographic webhook signature verification</li>
              <li><strong class="text-slate-800">Automated PII Redaction:</strong> NDPR-compliant log scrubbing of sensitive user data</li>
              <li><strong class="text-slate-800">Honeypot Bot Defense:</strong> Zero-friction behavioral bot mitigation</li>
              <li><strong class="text-slate-800">Strict CSP:</strong> Content Security Policy headers preventing XSS vulnerabilities</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- BOTTOM CTA BANNER -->
    <section class="py-16 bg-[#0A192F] text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 class="text-2xl sm:text-3xl font-extrabold font-display mb-4">Discuss Systems Architecture with Our Engineering Team</h3>
        <p class="text-slate-300 text-sm max-w-xl mx-auto mb-8">
          Whether you need an offline-first mobile app, a double-entry ledger integration, or a secure RAG pipeline, we are ready to review your technical specs.
        </p>
        <a href="/contact" class="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-[#0A192F] bg-white hover:bg-slate-100 rounded-xl transition-all shadow">
          Initiate Engineering Consultation
        </a>
      </div>
    </section>
  </main>

  {footer_html}
</body>
</html>"""
