# Services and Capabilities: Asabiyyah Technologies Ltd

This document audits the technical capabilities and external commercial services of Asabiyyah Technologies Ltd, strictly distinguishing between **Demonstrated**, **Actively Used**, **Reported Familiarity**, and **Planned** capabilities.

---

## 1. Capability Classification Framework

| Classification | Definition | Application Standard |
| :--- | :--- | :--- |
| **DEMONSTRATED** | Directly verified through tangible codebase implementations, running repositories, or tested functional prototypes. | Permitted for public case studies and technical capability highlights. |
| **ACTIVELY USED** | Leveraged in existing company internal workflows, tools, or pilot operations. | Permitted for service descriptions with clear operational context. |
| **REPORTED** | Stated in founder CVs or business plans as a team competency, but without an inspected codebase in this audit. | Described as core team competencies; not framed as past institutional deliverables. |
| **PLANNED** | Documented on architectural roadmaps (e.g., Year 2–3 plans) but not yet built. | Strictly framed as roadmap directions or research ambitions. |
| **UNKNOWN** | Speculative or unsupported by supplied documentation. | Excluded from corporate website marketing copy. |

---

## 2. Technical Capability Audit

### A. Artificial Intelligence & Intelligent Systems
| Capability | Classification | Evidence / Basis |
| :--- | :--- | :--- |
| **Retrieval-Augmented Generation (RAG)** | **DEMONSTRATED** | Relational text & PostgreSQL tsvector full-text search claim-matching in `AI4Election/app/services/evidence_service.py`. |
| **Structured LLM Indicator Extraction** | **DEMONSTRATED** | Implemented in `AI4Election/app/services/ai_analysis_service.py` with OpenAI-compatible API schemas (`extra="forbid"`). |
| **Adversarial Prompt Hardening** | **DEMONSTRATED** | Implemented per-call randomized nonce tags `<untrusted_submission_NONCE>` and instruction-override detection in `AI4Election`. |
| **Multi-Agent Architecture** | **DEMONSTRATED** | ResolveIQ multi-agent discrepancy engine (Complaint, Evidence, Root-Cause, Resolution agents). |
| **Local Quantized Model Inference** | **DEMONSTRATED** | Quantized Qwen 2.5B local inference implementation in ClassGPT-N framework for offline devices. |
| **Voice-First Local Speech Recognition** | **DEMONSTRATED** | N-ATLAS speech recognition integration for Hausa voice interactions in ClassGPT-N. |
| **Autonomous Model Decision-Making** | *REFUSED / REJECTED* | Architectural invariant: LLMs extract indicators; deterministic rules & risk fusion engines compute verdicts. |

### B. Custom Software & Systems Engineering
| Capability | Classification | Evidence / Basis |
| :--- | :--- | :--- |
| **RESTful API Engineering** | **DEMONSTRATED** | FastAPI modular backend architecture with Pydantic v2 schemas and OpenAPI/Swagger documentation in `AI4Election`. |
| **Double-Entry Ledger Tracking** | **DEMONSTRATED** | Zero-dependency SQLite double-entry transaction engine in `asabiyyah-part5-6-ledger-card.html` and Dila architecture. |
| **Relational Database Design & Migrations** | **DEMONSTRATED** | Normalized PostgreSQL models with SQLAlchemy 2.x and Alembic schema migrations (`0001_initial_schema.py`). |
| **Cross-Platform Mobile Development** | **ACTIVELY USED** | Flutter mobile application architecture for Dila (iOS/Android). |
| **Frontend UI Component Systems** | **DEMONSTRATED** | 152+ screens, 20 parts design system in Tailwind CSS and semantic HTML in `UI Components/`. |
| **Modular Microservices / Distributed Systems** | *PLANNED* | Stage 3 of Dila roadmap (Core APIs); current implementation is a robust, modular monolith. |

### C. Digital Infrastructure & DevOps
| Capability | Classification | Evidence / Basis |
| :--- | :--- | :--- |
| **Containerization & Orchestration** | **DEMONSTRATED** | Multi-stage `Dockerfile`, `docker-compose.yml`, and `docker-compose.prod.yml` in `AI4Election`. |
| **Reverse Proxy & SSL Configuration** | **DEMONSTRATED** | Production `Caddyfile` (automated Let's Encrypt TLS) and `nginx.conf` in `AI4Election`. |
| **Structured JSON Logging & Redaction** | **DEMONSTRATED** | JSON loggers with automatic token/PII masking in `AI4Election/app/core/logging.py`. |
| **Database Readiness & Health Checks** | **DEMONSTRATED** | Separate liveness and DB connectivity ping endpoints in `AI4Election/app/api/routes/health.py`. |
| **PaaS Deployment Configuration** | **DEMONSTRATED** | Tested Infrastructure-as-Code blueprint in `render.yaml`. |

### D. Offline-First & Multilingual Technology
| Capability | Classification | Evidence / Basis |
| :--- | :--- | :--- |
| **Local SQLite Ledger Synchronization** | **DEMONSTRATED** | Designed for low-connectivity rural hubs, syncing back to PostgreSQL upon reconnect. |
| **Paper-to-Digital Bridge (QR Tracking)** | **DEMONSTRATED** | Generated QR posters for physical savings collection points in Dila UI components. |
| **Multilingual Response Localization** | **DEMONSTRATED** | Parallel English and Hausa advisory generation in `AI4Election/app/services/whatsapp_formatter.py`. |
| **Low-Bandwidth Mobile Messaging** | **DEMONSTRATED** | WhatsApp Cloud API webhook intake, HMAC security verification, and rate limiting in `AI4Election`. |

---

## 3. Commercial B2B & Institutional Services

Based on the company's verified statutory objects (MEMART Clause 3) and demonstrated technical competencies, Asabiyyah Technologies Ltd offers the following commercial services:

```
                      +---------------------------------------+
                      |       COMMERCIAL SERVICE PILLARS      |
                      +-------------------+-------------------+
                                          |
        +---------------------------------+---------------------------------+
        |                                 |                                 |
+-------v-------+                 +-------v-------+                 +-------v-------+
|    CUSTOM     |                 |  INTELLIGENT  |                 |  WORKFLOW &   |
|   SOFTWARE    |                 |  AI SYSTEMS   |                 |  AUTOMATION   |
|  ENGINEERING  |                 |  INTEGRATION  |                 |  DIGITIZATION |
+-------+-------+                 +-------+-------+                 +-------+-------+
        |                                 |                                 |
+-------v-------+                 +-------v-------+                 +-------v-------+
|  DATA & CLOUD |                 | OFFLINE-FIRST |                 |   TECHNICAL   |
| INFRASTRUCTURE|                 | & LOCAL TECH  |                 |  CONSULTING   |
+---------------+                 +---------------+                 +---------------+
```

### Pillar 1: Custom Enterprise Software Engineering
- **Focus:** Bespoke web, mobile, and API systems built to exact institutional specifications.
- **Technology:** FastAPI, React, Flutter, Node.js/NestJS, PostgreSQL.
- **Differentiator:** High-performance, low-latency, maintainable codebases built with strict type safety and automated migration hygiene.

### Pillar 2: Intelligent Systems & Applied AI Integration
- **Focus:** Practical AI solutions that automate complex tasks without unpredictable hallucinations.
- **Technology:** Retrieval-Augmented Generation (RAG), structured LLM data extraction, prompt injection defense, edge model quantization (Qwen), and deterministic risk fusion engines.
- **Differentiator:** Human-in-the-loop and deterministic decision boundaries; AI augments human experts rather than executing unconstrained actions.

### Pillar 3: Workflow Automation & Process Digitization
- **Focus:** Replacing slow, insecure paper trails and fragmented WhatsApp/spreadsheet processes with code-enforced digital workflows.
- **Technology:** Double-entry accounting engines, tamper-evident audit logs, role-based access control, and automated report generation.
- **Differentiator:** Built specifically for emerging-market operational realities where organizational trust and accountability are paramount.

### Pillar 4: Offline-First Systems & Low-Bandwidth Infrastructure
- **Focus:** Digital tools designed to remain operational in zero-connectivity or erratic network environments.
- **Technology:** Edge SQLite storage, bi-directional sync protocols, paper-to-digital QR bridging, and USSD/messaging-first communication.
- **Differentiator:** True resilience for institutions serving rural or resource-constrained communities.

### Pillar 5: Technology Consulting & Technical Architecture
- **Focus:** Advisory on systems integration, digital security, regulatory compliance engineering (NITDA/NDPR), and cloud infrastructure optimization.
- **Audience:** Financial institutions, non-profit organizations, educational establishments, and public-sector bodies.

---

## 4. Commercial Engagement Models

1. **B2B SaaS Licensing:** Tiered platform licensing for multi-purpose cooperatives, corporate thrifts, and community associations (via Dila).
2. **Dedicated Engineering Retainers:** Bespoke software development and ongoing infrastructure management for enterprise clients.
3. **Pilot-to-Production Deployments:** Fixed-scope feasibility pilots, technical proof-of-concept builds, and validation sprints.
4. **Institutional Grant / DFI Partnerships:** Co-development of civic protection, financial inclusion, or educational technology initiatives (e.g., AMANA SHIELD, ClassGPT-N).

---

## 5. Client References and Evidence Safeguards

> [!IMPORTANT]
> **Anti-Fabrication Policy:**
> - In accordance with Stage 1 rules, **no fabricated client logos, enterprise case studies, or corporate testimonials** will be placed on the website.
> - Verified student and departmental leadership engagements (e.g., FUTB CBT center configuration, Zenith Bank Zecathon 6.0 competition, AI4Elections 2026 initiative) are cited as technical achievements and engineering milestones.
> - Commercial client logos will only appear on the corporate website following formal, written authorization from the respective client organizations.
