# Product Presentation Strategy: Asabiyyah Technologies Ltd

This document defines how Asabiyyah Technologies Ltd's proprietary products, civic initiatives, and research frameworks are presented on the corporate website, ensuring strict factual accuracy, clear regulatory boundaries, and compelling calls-to-action.

---

## 1. Product Portfolio Architecture

On the corporate website, products are organized into three distinct tiers reflecting their commercial and operational maturity:

```
+-----------------------------------------------------------------------------------+
|                        ASABIYYAH PRODUCT PORTFOLIO SCHEMA                         |
+-----------------------------------------------------------------------------------+
| TIER 1: FLAGSHIP COMMERCIAL PRODUCT                                               |
|   -> DILA: Community Savings & Rotating Group OS (Closed Alpha Pilot)            |
+-----------------------------------------------------------------------------------+
| TIER 2: PROPRIETARY CIVIC & INTELLIGENCE INITIATIVE                               |
|   -> AMANA SHIELD: AI Scam & Phishing Detection System (Functional Backend API)   |
+-----------------------------------------------------------------------------------+
| TIER 3: APPLIED AI RESEARCH & EDUCATION DIRECTION                                 |
|   -> CLASSGPT-N: Multilingual Offline-First AI Tutoring Framework (Prototype)     |
+-----------------------------------------------------------------------------------+
```

---

## 2. Product 1: Dila (Community Savings Platform)

### A. Corporate Website Presentation
- **Display Name:** **Dila** *(A product of Asabiyyah Technologies Ltd)*.
- **Badge / Category:** `Flagship Product` • `Community Finance OS`.
- **Product Headline:** The Operating System for African Community Finance.
- **Product Subhead:** Modernizing rotating savings and community thrift pools through code-enforced, double-entry software.

### B. Target Audience
- Rotating savings group organizers (Adashe / Esusu / Ajo leaders).
- Registered Multi-Purpose Cooperative Societies.
- Market association thrift committees and trade unions.
- Civil servant and university staff savings clubs.

### C. Value Proposition
- **For Organizers:** Replaces chaotic paper ledgers and manual WhatsApp chases with an automated tracking engine, eliminating personal liability burnout and record loss.
- **For Members:** Guarantees absolute transparency on who has paid, locks in deterministic rotation order, and converts on-time cash contributions into an auditable financial reputation.

### D. Actual Implemented Capabilities
- **Code-Enforced Double-Entry Ledger:** Mathematical debit/credit balance enforcement running on local SQLite and cloud PostgreSQL.
- **Deterministic Payout Automation:** Algorithmically ordered rotation schedules eliminating timing favoritism.
- **Printable QR Collection Bridge:** Automated high-contrast printable QR posters for physical cash collection reconciliation in local markets.
- **Comprehensive UI Flows:** 152+ screens covering 20 functional modules (onboarding, ledgers, payouts, receipts, CRM, offline sync).

### E. Explicit Regulatory & Institutional Boundary
> [!NOTE]
> **Clear Institutional Disclaimer:**  
> Dila is a **pure software infrastructure platform**. Dila is not a bank, lender, wallet, or deposit-taking institution. All financial settlements route securely through Central Bank of Nigeria (CBN)-licensed commercial banks and regulated payment service providers.

### F. Development Status
- **Current Status Badge:** `Closed-Cohort Alpha Pilot Validation`.
- **Operational Reality:** Actively validating workflows with select group organizers across Northern Nigerian commercial hubs (Kano, Kaduna, Abuja).

### G. Visual Assets
- Primary SVG Lockup: [`public/assets/products/dila/dila_product_lockup_asabiyyah.svg`](file:///c:/Users/HomePC/Desktop/AMTIC-001/public/assets/products/dila/dila_product_lockup_asabiyyah.svg).
- Leaping Gazelle Symbol: [`public/assets/products/dila/dila_symbol_asabiyyah_navy.svg`](file:///c:/Users/HomePC/Desktop/AMTIC-001/public/assets/products/dila/dila_symbol_asabiyyah_navy.svg).
- UI Flow Visuals: Rendered previews of the ledger and collection screens.

### H. Appropriate Call-to-Action (CTA)
- **Primary CTA:** `Request Pilot Access` / `Schedule an Organizer Demo`.
- **Secondary CTA:** `Explore the Software Architecture`.

---

## 3. Product 2: AMANA SHIELD (Electoral & Civic Scam Detection System)

### A. Corporate Website Presentation
- **Display Name:** **AMANA SHIELD** *(Civic Intelligence Initiative)*.
- **Badge / Category:** `Civic Technology` • `AI Safety & Detection`.
- **Product Headline:** Automated Scam and Phishing Detection for African Civic Communities.
- **Product Subhead:** A multi-pillar intelligence engine protecting citizens from fraudulent schemes, political phishing, and fake government grant portals via WhatsApp.

### B. Target Audience
- Everyday citizens vulnerable to WhatsApp phishing and SMS grant scams.
- Civic society organizations, electoral observer networks, and fact-checking newsrooms.
- Institutional agencies protecting civic trust and consumer financial data.

### C. Value Proposition
Provides instant, non-technical verification of suspicious links and messages directly inside WhatsApp, combining real-time domain security analysis with procedural RAG against official government databases — delivered in English and Hausa.

### D. Actual Implemented Capabilities
- **Multi-Pillar Risk Fusion:** Independently assesses message text risk, DNS/RDAP domain status, and claim verification status without arbitrary score collapse.
- **Grounded Verification Invariant:** Strictly abstains as `UNVERIFIED` when no authoritative evidence exists (*"Lack of evidence is not proof of falsity"*).
- **Adversarial Prompt Hardening:** Dynamic nonce tags (`<untrusted_submission_NONCE>`), instruction stripping, and strict JSON output schemas.
- **WhatsApp Cloud API Integration:** Automated inbound webhook challenge verification, rate limiting, and structured advisory dispatch.
- **Multilingual Reports:** Instant advisory generation in both English and Hausa.

### E. Development Status
- **Current Status Badge:** `Functional Backend API & Intelligence Engine`.
- **Operational Reality:** Production-grade FastAPI monolith implemented in `AI4Election/`; currently undergoing simulated testing and dataset validation.

### F. Visual Assets
- System Architecture Diagram: [`public/assets/projects/amana-shield/mermaid-diagram.svg`](file:///c:/Users/HomePC/Desktop/AMTIC-001/public/assets/projects/amana-shield/mermaid-diagram.svg).
- Security Shield Badge and WhatsApp Interaction Mockup.

### G. Appropriate Call-to-Action (CTA)
- **Primary CTA:** `Explore the Technical Architecture` / `View API Documentation`.
- **Secondary CTA:** `Partner for Civic Deployment`.

---

## 4. Product 3: ClassGPT-N Framework

### A. Corporate Website Presentation
- **Display Name:** **ClassGPT-N Framework** *(Applied AI Research Direction)*.
- **Badge / Category:** `Applied AI Research` • `Educational Technology`.
- **Product Headline:** Offline-First, Curriculum-Grounded Multilingual AI Tutoring.
- **Product Subhead:** Democratizing intelligent education for resource-constrained, Hausa-dominant African classrooms using local quantized models and voice recognition.

### B. Target Audience
- Primary and secondary school students in low-connectivity or rural environments.
- Educational ministries, state school boards, and universal basic education agencies.
- EdTech foundations and developmental NGOs promoting STEM and literacy.

### C. Value Proposition
Bypasses the requirement for expensive high-speed broadband and high-end cloud GPUs by running quantized educational AI models locally on school-level edge hardware, enabling Socratic tutoring in learners' native languages.

### D. Actual Implemented Capabilities
- **Local Quantized Inference:** 4-bit/8-bit quantized **Qwen 2.5B** inference running locally on consumer hardware.
- **Curriculum-Grounded RAG:** Pedagogical guardrails mapping responses strictly to authorized Nigerian educational curricula.
- **Voice-First Local NLP:** Integrated **N-ATLAS speech recognition** for native Hausa voice queries and audio explanations.
- **Agent-Agnostic State Tracking:** Preserves the student's mastery trajectory without expensive cloud-dependent state stores.

### E. Development Status
- **Current Status Badge:** `Demonstrated Research Prototype`.
- **Operational Reality:** Validated through founder research and local laboratory testing; undergoing curriculum dataset curation.

### F. Visual Assets
- Edge inference topology diagram.
- Educational interaction wireframes.

### G. Appropriate Call-to-Action (CTA)
- **Primary CTA:** `Read the Research Strategy`.
- **Secondary CTA:** `Inquire About Pilot Collaboration`.

---

## 5. Anti-Fabrication Safeguards for Product Marketing

To ensure absolute adherence to corporate integrity:
1. **Never Cite Unverified Numbers:** We do not claim arbitrary numbers of groups, total savings volume, or user milestones.
2. **Never Conflate Vision with Current Code:** Roadmaps (such as open-banking APIs or cross-border pooling) are explicitly identified as **"Strategic Roadmap (Years 2–3)"**, while working MVPs are identified as **"Functional MVP in Alpha Pilot"**.
3. **Never Blur Parent Ownership:** All product pages must explicitly feature the endorsement mark: **"Engineered & Maintained by Asabiyyah Technologies Ltd"**.
