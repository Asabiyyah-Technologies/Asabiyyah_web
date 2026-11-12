# Technology Inventory & Capability Audit: Asabiyyah Technologies Ltd

This document audits the complete technology stack, engineering frameworks, and architectural paradigms verified across Asabiyyah Technologies Ltd's codebases, prototypes, and technical documentation.

---

## 1. Programming Languages

| Language | Classification | Evidence Location | Context & Demonstrated Usage |
| :--- | :--- | :--- | :--- |
| **Python** | **DEMONSTRATED** | `AI4Election/app/` | Primary backend language for FastAPI monolith, async services, RAG pipelines, and data sanitization. |
| **TypeScript / JavaScript** | **DEMONSTRATED** | `Dila/`, UI Components | Used across frontend UI component systems, web apps, and NestJS service architectures. |
| **Dart** | **ACTIVELY USED** | `Dila/` mobile architecture | Cross-platform mobile application development for the Dila mobile client (iOS/Android). |
| **SQL** | **DEMONSTRATED** | `AI4Election/alembic/` | Complex relational schemas, foreign key constraints, check constraints, GIN full-text search indexes. |
| **HTML5 / CSS3** | **DEMONSTRATED** | Root HTMLs, `UI Components/` | 152+ responsive screens, custom design tokens, Flexbox/Grid layouts, accessible typography. |
| **C++** | **REPORTED** | Founder CV (M. A. Aliyu) | Core systems programming listed in technical skill profile; no standalone C++ codebase in this audit. |
| **PHP** | **REPORTED** | Founder CV (M. A. Aliyu) | Backend language familiarity; not utilized in modern Asabiyyah products. |

---

## 2. Backend & API Frameworks

| Framework | Classification | Evidence Location | Context & Demonstrated Usage |
| :--- | :--- | :--- | :--- |
| **FastAPI** | **DEMONSTRATED** | `AI4Election/app/main.py` | Production-grade async application factory, dependency injection, lifespan handlers, Pydantic v2 validation. |
| **NestJS** | **ACTIVELY USED** | Dila Architecture / Pitch | Enterprise Node.js modular framework powering Dila cloud backend synchronization. |
| **SQLAlchemy 2.x** | **DEMONSTRATED** | `AI4Election/app/models/` | AsyncEngine ORM models, declarative mappings, parameterised repository patterns. |
| **Alembic** | **DEMONSTRATED** | `AI4Election/alembic/` | Version-controlled database schema migrations (`0001_initial_amana_shield_schema.py`). |
| **Pydantic v2** | **DEMONSTRATED** | `AI4Election/app/schemas/` | Strict data transfer object (DTO) validation, setting management (`BaseSettings`), serialization. |
| **Uvicorn** | **DEMONSTRATED** | `AI4Election/Dockerfile` | ASGI server running production async worker processes. |
| **Django / Flask** | **REPORTED** | Founder CV | Python framework familiarity; not used in current flagship products. |

---

## 3. Databases, Data Engineering & Storage

| Technology | Classification | Evidence Location | Context & Demonstrated Usage |
| :--- | :--- | :--- | :--- |
| **PostgreSQL 16** | **DEMONSTRATED** | `AI4Election/`, Dila Stack | Primary enterprise relational store. Utilizes GIN full-text search indexes (`tsvector`), foreign keys, and indexes. |
| **SQLite 3** | **DEMONSTRATED** | `amana_local.db`, Dila Edge | Zero-dependency local persistence for offline-first edge accounting and local testing environments. |
| **Double-Entry Ledger Architecture** | **DEMONSTRATED** | Dila Design System & Models | Strict debit/credit balanced transaction modeling to eliminate balance errors in informal savings pools. |
| **PostgreSQL Full-Text Search (tsvector)** | **DEMONSTRATED** | `AI4Election/evidence_service` | Natural language text matching on official government and civic statements without external vector DB dependencies. |
| **MySQL / Firebase** | **REPORTED** | Founder CV | Familiarity reported by engineering team; not currently active in primary stacks. |

---

## 4. Artificial Intelligence & Intelligent Systems

| Technology / Method | Classification | Evidence Location | Context & Demonstrated Usage |
| :--- | :--- | :--- | :--- |
| **RAG (Retrieval-Augmented Generation)** | **DEMONSTRATED** | `AI4Election/app/services/` | Procedural claim verification against verified INEC/government debunking databases. |
| **Local Model Quantization (Qwen 2.5B)** | **DEMONSTRATED** | ClassGPT-N Framework | 4-bit/8-bit quantized LLM execution on low-cost consumer hardware for offline rural classrooms. |
| **Adversarial Prompt Defense** | **DEMONSTRATED** | `AI4Election/ai_analysis` | Per-call randomized nonce delimiters (`<untrusted_submission_NONCE>`), instruction stripping, schema lock. |
| **Deterministic Uncertainty Abstention** | **DEMONSTRATED** | `AI4Election/evidence_service` | Systems design invariant: the engine returns `UNVERIFIED` rather than guessing when evidence is missing. |
| **Multi-Agent Systems** | **DEMONSTRATED** | ResolveIQ Project | Specialized agents (Complaint, Evidence, Root-Cause, Resolution) collaborating on financial discrepancies. |
| **Speech Recognition (N-ATLAS)** | **DEMONSTRATED** | ClassGPT-N / Founder CV | Local voice recognition engine for Hausa language educational interactions. |
| **Multi-Pillar Risk Fusion** | **DEMONSTRATED** | `AI4Election/risk_fusion` | Algorithmic combination of text indicators, domain DNS/RDAP signals, and verified claims. |

---

## 5. Frontend & Mobile Development

| Technology | Classification | Evidence Location | Context & Demonstrated Usage |
| :--- | :--- | :--- | :--- |
| **Tailwind CSS** | **DEMONSTRATED** | `asabiyyah-design-system.html` | Custom design system tokens (`--asb-navy`, `--asb-gold`), utility styling, responsive grid components. |
| **Flutter / Dart** | **ACTIVELY USED** | Dila Product Stack | Cross-platform mobile application development for Android and iOS clients. |
| **React** | **DEMONSTRATED** | Founder CV / Portfolios | Component-driven web interface development. |
| **Responsive Web Layouts** | **DEMONSTRATED** | `UI Components/` | Mobile-first viewport configurations, responsive data tables, touch-friendly navigation states. |

---

## 6. DevOps, Infrastructure & Security

| Tool / Practice | Classification | Evidence Location | Context & Demonstrated Usage |
| :--- | :--- | :--- | :--- |
| **Docker & Docker Compose** | **DEMONSTRATED** | `AI4Election/Dockerfile` | Multi-stage production container builds, isolated PostgreSQL service orchestration. |
| **Caddy Web Server** | **DEMONSTRATED** | `AI4Election/Caddyfile` | Modern reverse proxy with automated Let's Encrypt SSL/TLS certificate provisioning and HTTP/2 support. |
| **Nginx** | **DEMONSTRATED** | `AI4Election/nginx.conf` | Alternative reverse proxy configuration for high-concurrency production deployments. |
| **Infrastructure-as-Code (Render)** | **DEMONSTRATED** | `AI4Election/render.yaml` | Declarative cloud service specification (FastAPI app + managed PostgreSQL instance). |
| **PII & Credential Redaction** | **DEMONSTRATED** | `AI4Election/logging.py` | Automated JSON log formatting with programmatic masking of phone numbers, auth tokens, and API keys. |
| **HMAC-SHA256 Webhook Security** | **DEMONSTRATED** | `AI4Election/security.py` | Cryptographic signature verification for external webhooks (Meta / WhatsApp API). |
| **Rate Limiting** | **DEMONSTRATED** | `AI4Election/routes/whatsapp` | Sliding-window in-memory request throttler preventing API flood abuse and denial of service. |

---

## 7. Capability Summary by Maturity Tier

```
[TIER 1: PROVEN / DEMONSTRATED]
- Python, FastAPI, SQLAlchemy 2.x, Alembic, PostgreSQL 16
- SQLite Double-Entry Ledger Engine
- RAG Pipelines with PostgreSQL tsvector Search
- Adversarial Prompt Hardening & Structured LLM Extraction
- WhatsApp Cloud API Webhook Engineering & HMAC Security
- Docker, Caddy, JSON Structured Logging with PII Redaction
- Tailwind CSS Design Token Systems & Accessible Web UI

[TIER 2: ACTIVELY USED / IN PILOT]
- Flutter Cross-Platform Mobile Client (Dila)
- NestJS Modular Cloud Sync Service (Dila)
- Offline Edge Data Sync Protocols

[TIER 3: REPORTED TEAM COMPETENCIES]
- React Frontend Architecture
- C++, PHP, Django, Flask, Laravel
- MySQL, Firebase

[TIER 4: PLANNED ARCHITECTURES]
- Microservices Event Bus (Kafka / RabbitMQ)
- B2B Open Core Financial APIs for Commercial Banks
```
