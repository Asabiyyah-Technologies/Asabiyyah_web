# Product & Initiative Inventory: Asabiyyah Technologies Ltd

This document audits all proprietary products, technology initiatives, and research frameworks developed by Asabiyyah Technologies Ltd.

---

## 1. Portfolio Summary Matrix

| Product / Initiative | Brand Identity | Category | Current Status | Architecture Stack | Relationship to Parent |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Dila** *(formerly Asabiyyah Adashe)* | Gazelle icon, Navy/Gold palette | Community Finance OS / ROSCA Digitization | **Functional MVP / Alpha Pilot Testing** | Flutter, NestJS, SQLite, PostgreSQL | Flagship commercial B2B/B2G software product |
| **AMANA SHIELD** | Shield motif / Electoral trust | Civic AI Scam & Phishing Detection | **Implemented Backend Codebase** | FastAPI, PostgreSQL, SQLAlchemy, Meta WhatsApp API | Proprietary civic tech & intelligence initiative |
| **ClassGPT-N** | Educational AI framework | Multilingual Offline AI Tutoring | **Demonstrated Research Prototype** | Quantized Qwen 2.5B, N-ATLAS Speech, RAG, Python | Applied AI research direction & EdTech initiative |
| **ResolveIQ** | Multi-Agent Financial AI | Autonomous Discrepancy Resolution | **Competition Prototype (Zenith Bank Zecathon)** | Python, Multi-Agent Framework | Specialized fintech AI research project |

---

## 2. Product 1: Dila (Community Savings & Group-Management Platform)

### A. Executive Overview
- **Brand Name:** **Dila** (operates under the product mark *Dila — Community Savings Platform* / *Powered by Asabiyyah Technologies*).
- **Previous Working Title:** *Asabiyyah Adashe* / *Asabiyyah Smart Ledger*.
- **Tagline:** *"Together, we grow."* (Product tagline) / *"Ethical Finance. Empowered Communities."*
- **Target Users:** Group organizers, rotating savings clubs (Adashe/Esusu/Ajo), market traders associations, civil servant thrift societies, university faculty savings pools, and registered multi-purpose cooperatives across Nigeria.

### B. Purpose & Problem Solved
Traditional Rotating Savings and Credit Associations (ROSCAs) constitute the financial foundation for over **48.8 million Nigerian adults** (EFInA 2023 Survey). However, these groups rely on vulnerable paper ledgers, fragmented WhatsApp messaging, and physical cash handoffs. This causes:
- Frequent accounting discrepancies and lost records.
- Severe organizer burnout from manual reconciliation and chasing late members.
- Lack of verifiable credit history: members save for decades without generating portable financial reputation data.
- Favoritism disputes regarding payout order rotation.

**Dila modernizes this informal capital engine** through code-enforced, transparent, double-entry software that automates record-keeping, establishes deterministic payout schedules, and converts on-time contributions into a verified financial identity.

### C. Critical Regulatory & Institutional Boundary
> [!IMPORTANT]
> **What Dila Is NOT:**
> - Dila is **NOT** a bank, digital neobank, microfinance lender, deposit-taking institution, or custodial digital wallet.
> - Dila **DOES NOT** hold client funds on its balance sheet or take underwriting risk.
> - **Operational Reality:** Dila operates as a **pure software infrastructure layer (SaaS)**. All monetary transactions route directly through licensed commercial banks and Payment Service Providers (PSPs) regulated by the Central Bank of Nigeria (CBN).

### D. Technical Architecture & Implemented Features
1. **Double-Entry Ledger Engine:** Zero-dependency relational double-entry accounting engine implemented in SQLite (for offline/edge operations) and PostgreSQL (for central syncing).
2. **Deterministic Payout Ordering:** Algorithmically locks in contribution rotation orders to prevent disputes.
3. **Hybrid Physical-to-Digital Bridge:** Automated generation of high-contrast printable QR collection cards, allowing cash/transfer reconciliation directly in local markets.
4. **Multilingual Interface:** Designed for English and Hausa language accessibility across touchpoints.
5. **UI Prototype Maturity:** 152+ screens fully designed across 20 functional modules covering onboarding, group setup, collection dashboards, member cards, QR generation, receipts, payouts, and reports.

### E. Current Stage & Commercial Status
- **Current Operational Stage:** **Functional Working MVP undergoing Closed-Cohort Alpha Pilots** with active group organizers in Northern Nigerian commercial clusters (Kano, Kaduna, Abuja).
- **Monetization Architecture:**
  - *Free Tier:* Basic tracking for small informal family pools.
  - *Pro Organizer Tier:* ₦2,500/month flat SaaS fee for automated reminders, multi-group management, and priority sync.
  - *Enterprise Cooperative SaaS:* Custom annual licensing for registered cooperatives and unions.

---

## 3. Product 2: AMANA SHIELD (Electoral & Civic Scam Detection System)

### A. Executive Overview
- **Name:** **AMANA SHIELD** (developed for the **AI4Elections 2026** initiative).
- **Problem Solved:** Epidemic spread of political phishing scams, fraudulent government grant links, fake electoral job opportunities (INEC impostors), and credential/BVN harvesting distributed across WhatsApp and social platforms in Nigeria.
- **Intended Users:** Nigerian voters, civic organizations, fact-checkers, journalists, and institutional monitoring bodies.

### B. Technical Architecture & Demonstrated Implementation
A comprehensive, production-grade backend monolith implemented in `AI4Election/`:
- **Core Framework:** Python 3.12+, **FastAPI** modular architecture, **PostgreSQL 16**, **SQLAlchemy 2.x** (AsyncEngine), and **Alembic** migrations.
- **Infrastructure & Security:** Docker multi-stage build, Docker Compose, automated TLS via **Caddy**, JSON structured logging with PII/token redaction, and HMAC-SHA256 sender hashing.

### C. Implemented Capabilities vs. Proposed Features
| Feature Area | Current Implementation Status | Technical Mechanism |
| :--- | :--- | :--- |
| **WhatsApp Cloud API Webhook** | **IMPLEMENTED** | Inbound message processing, HMAC challenge verification, sliding-window rate limiting, and response dispatch. |
| **Multi-Pillar Risk Fusion** | **IMPLEMENTED** | Evaluates message risk, URL domain risk (DNS/RDAP), and verified claim status independently without arbitrary score collapse. |
| **Adversarial Prompt Defense** | **IMPLEMENTED** | Dynamic `<untrusted_submission_NONCE>` wrapping, instruction-override detection, strict Pydantic DTO parsing (`extra="forbid"`). |
| **Curated Evidence Full-Text Search** | **IMPLEMENTED** | Relational text queries & PostgreSQL native `tsvector` GIN indexing across official INEC/government sources. |
| **Deterministic Uncertainty Abstention** | **IMPLEMENTED** | Engine strictly abstains as `UNVERIFIED` if no curated evidence exists (*"Lack of evidence is not proof of falsity"*). |
| **Multilingual Explanations** | **IMPLEMENTED** | Parallel generation of advisory reports in English (`en`) and Hausa (`ha`). |
| **Public Browser Extension / Mobile App** | *PROPOSED / PLANNED* | Backend endpoints are live; client extension and native mobile interfaces are queued for Phase 2. |

---

## 4. Product 3: ClassGPT-N (Multilingual AI Tutoring Framework)

### A. Executive Overview
- **Name:** **ClassGPT-N Framework**.
- **Focus:** Educational equity and intelligent tutoring tailored to African linguistic and infrastructure environments.
- **Target Audience:** Hausa-dominant and bilingual primary/secondary school learners in resource-constrained, low-connectivity regions.

### B. Technical Architecture & Key Innovations
- **Quantized Local LLM Inference:** Built to run quantized **Qwen 2.5B** models locally on standard, low-cost edge hardware without requiring continuous high-speed internet connections.
- **Curriculum-Grounded RAG:** Retrieval-Augmented Generation mapped directly to national Nigerian educational curricula, preventing off-curriculum hallucination.
- **Voice-First Local Language Interface:** Integrated **N-ATLAS speech recognition** models to allow non-literate and young learners to interact verbally in their native language (Hausa).
- **Pedagogical State Tracking:** Agent-agnostic student-state tracking providing step-by-step Socratic guidance rather than immediate answer dumping.

### C. Current Status & Governance Note
- **Current Status:** Demonstrated research prototype framework.
- **Strategic Direction:** Positioned in company strategy as an applied AI research direction. Per [Corporate Strategy 2026–2036](file:///c:/Users/HomePC/Desktop/AMTIC-001/docs/strategy/README.md), ClassGPT-N will remain in the Research & Innovation portfolio until formal institutional sponsorship or dedicated commercialization gates are approved by the Product Council.

---

## 5. Other Projects & Engineering Demonstrations

1. **ResolveIQ (Zenith Bank Zecathon 6.0):**
   - Autonomous multi-agent transaction discrepancy investigation engine.
   - Four cooperative agents: Complaint Parsing Agent, Evidence Retrieval Agent, Root-Cause Diagnostic Agent, and Resolution Action Agent.
   - Demonstrates the team's depth in multi-agent financial automation.

2. **AMTIC Enterprises Infrastructure & Digital Services:**
   - Established ICT training and CBT center infrastructure operation founded by Muhammad Auwal Aliyu in Babura, Jigawa State.
   - Configured and deployed 200+ networked CBT workstations for standardized academic examinations.
