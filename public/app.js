/* Muhammad Auwal Aliyu (Abu Mus'ab) — Standalone React Application Bundle */
(function() {
  'use strict';
  const { useState, useEffect, useMemo, useRef } = React;

// Muhammad Auwal Aliyu (Abu Mus'ab) — Personal Portfolio Application
// React 18/19 Standalone Component Architecture

const portfolioData = {
  personalIdentity: {
    fullName: "Muhammad Auwal Aliyu",
    publicName: "Abu Mus'ab",
    title: "Full-Stack AI Engineer | Technology Founder | Educator",
    headline: "Engineering intelligent systems. Building technology that matters.",
    supportingIntro: "I build intelligent software systems at the intersection of AI, engineering, and human-centred innovation. My work focuses on applied AI, agentic systems, and accessible digital solutions designed for real-world conditions — including environments where connectivity, computing resources, and language can be limiting factors.",
    credibilityLine: "Computer Science | Applied AI | Software Engineering | Entrepreneurship",
    centralPositioning: "A technology builder working at the intersection of Artificial Intelligence, Software Engineering, and Human-Centred Innovation.",
    corePhilosophy: "Building technology that works for people, not just ideal conditions.",
    brandStatement: "Building intelligent systems. Empowering people. Expanding possibilities.",
    location: "Jos, Plateau State, Nigeria",
    nationality: "Nigerian",
    languages: [{
      name: "English",
      level: "Professional & Academic"
    }, {
      name: "Hausa",
      level: "Native & Multilingual AI Research"
    }, {
      name: "Arabic",
      level: "Literate & Classical Competence"
    }],
    avatarUrl: "/assets/profile/muhammad-auwal-aliyu.png",
    email: "aliyumuhammadauwal92@gmail.com",
    phone: "+234 806 475 3943",
    openForOpportunities: "Available for Applied AI Engineering, Systems Architecture & Advisory"
  },
  stats: [{
    label: "Academic Standing",
    value: "4.79 / 5.00",
    detail: "First Class Honours · B.Sc. Computer Science (FUTB Class of 2026)"
  }, {
    label: "Verified Credential",
    value: "AI Engineer Associate",
    detail: "DataCamp Certified (#AIEDA0012468264105 · Nov 2026)"
  }, {
    label: "Enterprise Leadership",
    value: "CEO & Co-Founder",
    detail: "Asabiyyah Technologies Ltd · Building Dila Community FinTech"
  }, {
    label: "Public Fellowship",
    value: "UNDP / 3MTT Fellow",
    detail: "Serving at Hamzury Innovation Hub, Jos, Plateau State"
  }],
  socialLinks: [{
    platform: "LinkedIn",
    handle: "Muhammad Auwal Aliyu",
    url: "https://www.linkedin.com/in/muhammad-auwal-aliyu-74a6ab208",
    icon: "linkedin",
    note: "Professional network & thought leadership"
  }, {
    platform: "GitHub",
    handle: "MaAbumusAb",
    url: "https://github.com/MaAbumusAb",
    icon: "github",
    note: "Code repositories & open-source implementations"
  }, {
    platform: "X (Twitter)",
    handle: "@M_A_Aliyu",
    url: "https://x.com/M_A_Aliyu",
    icon: "twitter",
    note: "AI engineering commentary & ecosystem updates"
  }, {
    platform: "Facebook",
    handle: "Abu Mus'ab",
    url: "https://www.facebook.com/share/1CJXB7VaFA/",
    icon: "facebook",
    note: "Community engagement & tech education"
  }, {
    platform: "TikTok",
    handle: "@abu_mus_ab",
    url: "https://www.tiktok.com/@abu_mus_ab?_r=1&_t=ZS-9BNXy2tko8Q",
    icon: "video",
    note: "Bilingual AI video explainers & tech tutorials"
  }, {
    platform: "Instagram",
    handle: "@abu_mus_ab._",
    url: "https://www.instagram.com/abu_mus_ab._?psln=MWxtbXFpaGxrYjEydA==",
    icon: "instagram",
    note: "Builder updates & community moments"
  }],
  education: {
    institution: "Federal University of Technology, Babura (FUTB)",
    degree: "Bachelor of Science in Computer Science",
    graduationYear: "Class of 2026",
    standing: "First Class Honours",
    cgpa: "4.79 / 5.00",
    statusNote: "Awaiting formal degree conferment; completed academic curriculum with 4.79/5.00 cumulative grade point average.",
    location: "Babura, Jigawa State, Nigeria",
    focusAreas: ["Computer Science Fundamentals & Rigor", "Data Structures & Algorithms (DSA)", "Artificial Intelligence & Machine Learning", "Full-Stack Software Engineering", "Data Science & Statistical Analysis", "Cloud Computing & Distributed Systems", "Programming Languages & Systems Development", "Technical Project Management & Problem Solving"]
  },
  certifications: [{
    id: "datacamp-ai-eng",
    title: "AI Engineer for Developers Associate",
    issuer: "DataCamp",
    year: "2026",
    credentialId: "AIEDA0012468264105",
    certifiedDate: "November 8, 2026",
    verified: true,
    pdfAsset: "/assets/certificates/datacamp-ai-engineer-associate.pdf",
    verificationUrl: "https://www.datacamp.com/certificate/AIEDA0012468264105",
    topics: ["Large Language Models (LLM) Integration", "Retrieval-Augmented Generation (RAG)", "Prompt Engineering & Evaluation", "Model Quantization & Local Deployment", "AI Application Architecture with Python", "Model Routing & Context Management"]
  }, {
    id: "datacamp-ds-career",
    title: "Data Scientist in Python — Career Track",
    issuer: "DataCamp",
    year: "2026",
    verified: true,
    topics: ["Statistical Inference & Hypothesis Testing", "Machine Learning with scikit-learn", "Exploratory Data Analysis (EDA)", "Pandas & NumPy Scientific Stack", "Data Visualisation & Model Diagnostics"]
  }, {
    id: "datacamp-py-ds",
    title: "Python for Data Science",
    issuer: "DataCamp",
    year: "2024",
    verified: true,
    topics: ["Python Fundamentals", "Vectorized Operations", "Data Wrangling", "Analytical Workflows"]
  }, {
    id: "kaggle-da",
    title: "Data Analysis Certification",
    issuer: "Kaggle",
    year: "2024",
    verified: true,
    topics: ["Data Cleansing", "Analytical Aggregations", "Visual Storytelling", "Jupyter Environments"]
  }, {
    id: "w3schools-excel",
    title: "Excel Data & Systems Certification",
    issuer: "W3Schools",
    year: "2024",
    verified: true,
    topics: ["Structured Formulas", "Data Modeling", "Business Logic Modeling", "Pivot Analysis"]
  }],
  fellowships: [{
    id: "undp-3mtt",
    title: "UNDP Graduate Fellowship in collaboration with 3MTT",
    organization: "United Nations Development Programme (UNDP) & Federal Ministry of Communications, Innovation and Digital Economy",
    year: "Current",
    roleOrStatus: "Fellow & Systems Engineer (Active)",
    location: "Hamzury Innovation Hub, Jos, Plateau State",
    description: "Serving as a graduate fellow deploying technical expertise to build digital capacity, mentor emerging software talents, and develop community-focused technological initiatives in Plateau State.",
    focusAreas: ["Applied AI Solutions for Local Challenges", "Ecosystem Mentorship & Skills Transfer", "Innovation Hub Technology Operations", "Digital Transformation for Northern Communities"]
  }, {
    id: "dsn-deeptech",
    title: "DeepTech Ready Programme",
    organization: "Data Science Nigeria (DSN)",
    year: "2025",
    roleOrStatus: "Selected Participant & Graduate",
    description: "Intensive selective training in advanced deep technology, AI development methodologies, and mathematical foundations of modern machine learning associated with the national 3MTT ecosystem.",
    focusAreas: ["Advanced Deep Learning Architectures", "Mathematical Foundations of AI", "Production ML Engineering", "Data Sovereignty & Applied Research"]
  }, {
    id: "3mtt-national",
    title: "Three Million Technical Talent (3MTT) Initiative",
    organization: "Federal Ministry of Communications, Innovation & Digital Economy",
    year: "2024 – 2026",
    roleOrStatus: "Cohort Member & Ecosystem Contributor",
    description: "Active contributor and participant in Nigeria's flagship technical talent initiative, championing software engineering excellence and peer learning cohorts.",
    focusAreas: ["Software Development Best Practices", "Collaborative Engineering", "Digital Public Infrastructure"]
  }],
  skills: [{
    id: "ai-ml",
    title: "Artificial Intelligence & Machine Learning",
    subtitle: "Applied AI, Agentic Workflows & Edge Models",
    icon: "cpu",
    items: [{
      name: "Python for AI & Data Science",
      context: "Primary language for pipeline development, data transformation, and model orchestration."
    }, {
      name: "Large Language Models (LLMs)",
      context: "Integration, system prompts, output validation, and provider abstraction."
    }, {
      name: "Quantised & Local LLMs",
      context: "Deploying 4-bit/8-bit Qwen, Llama, and Mistral models on consumer laptops and edge nodes without internet."
    }, {
      name: "Retrieval-Augmented Generation (RAG)",
      context: "Curriculum-grounded and domain-specific RAG with vector search (ChromaDB, FAISS) and reranking."
    }, {
      name: "Agentic AI & Multi-Agent Workflows",
      context: "Coordinated agent architectures (Evidence, Root-Cause, Resolution) with function calling."
    }, {
      name: "Speech Recognition (N-ATLAS)",
      context: "Integration of Nigerian speech models for voice-first multilingual user interfaces."
    }, {
      name: "Prompt Engineering & Evaluation",
      context: "Systematic prompt design, defensive injection prevention, and deterministic structured outputs."
    }, {
      name: "Machine Learning (scikit-learn)",
      context: "Supervised and unsupervised models, feature engineering, and model validation."
    }, {
      name: "Model Evaluation & Benchmarking",
      context: "Task-based evaluation, accuracy checks, and pedagogical correctness assessment."
    }]
  }, {
    id: "backend-systems",
    title: "Backend & Systems Engineering",
    subtitle: "Robust APIs, Ledgers & Database Architecture",
    icon: "server",
    items: [{
      name: "FastAPI",
      context: "High-performance asynchronous REST microservices and edge APIs with Pydantic validation."
    }, {
      name: "Python Systems",
      context: "Modular service architecture, background workers, and automation scripting."
    }, {
      name: "Flask",
      context: "Lightweight web services, rapid prototyping, and embedded tools."
    }, {
      name: "PHP & Laravel",
      context: "Full-stack MVC applications, relational database management, and enterprise workflows."
    }, {
      name: "Node.js & Express",
      context: "Event-driven backends, microservices, and asynchronous task coordinators."
    }, {
      name: "PostgreSQL",
      context: "Relational modeling, JSONB fields, indexing, and transactional integrity."
    }, {
      name: "SQLite",
      context: "Zero-dependency local database engine for offline-first, double-entry financial records."
    }, {
      name: "MySQL",
      context: "Relational database schema design and legacy system integrations."
    }, {
      name: "MongoDB",
      context: "Document-oriented schema management for flexible payloads."
    }, {
      name: "Authentication & Security Architecture",
      context: "JWT, session security, role-based access control (RBAC), and audit logging."
    }]
  }, {
    id: "frontend-mobile",
    title: "Frontend & Mobile Development",
    subtitle: "Accessible Interfaces, PWAs & Mobile Apps",
    icon: "layout",
    items: [{
      name: "React",
      context: "Component hierarchy, custom hooks, reactive state, and accessible single-page web applications."
    }, {
      name: "TypeScript",
      context: "Strict static typing, contract safety, and maintainable enterprise codebases."
    }, {
      name: "JavaScript (ESNext)",
      context: "Modern browser APIs, service workers, asynchronous I/O, and DOM manipulation."
    }, {
      name: "Tailwind CSS",
      context: "Utility-first design systems, responsive mobile layouts, and restrained typography."
    }, {
      name: "Progressive Web Apps (PWAs)",
      context: "Offline caching, service workers, and app-like installation on low-end smartphones."
    }, {
      name: "Flutter",
      context: "Cross-platform mobile interfaces for Android devices with offline storage."
    }, {
      name: "Java & Kotlin",
      context: "Native Android application development and system services integration."
    }, {
      name: "Responsive & Accessible Web (WCAG)",
      context: "Semantic HTML, keyboard navigation, and high-contrast usability."
    }]
  }, {
    id: "data-analytics",
    title: "Data Science & Analytics",
    subtitle: "Data Pipelines, Insights & Visual Modeling",
    icon: "bar-chart-2",
    items: [{
      name: "Pandas & NumPy",
      context: "Vectorized data manipulation, matrix operations, and tabular data cleansing."
    }, {
      name: "Matplotlib & Seaborn",
      context: "Exploratory visual data modeling, publication graphs, and distribution plots."
    }, {
      name: "Jupyter Notebooks",
      context: "Documented reproducible analytical workflows and experiment logging."
    }, {
      name: "Power BI",
      context: "Interactive operational dashboards and institutional reporting models."
    }, {
      name: "Tableau",
      context: "Visual business intelligence and multi-source KPI aggregations."
    }, {
      name: "Double-Entry Ledger Modeling",
      context: "Strict debit/credit reconciliation models for community savings platforms."
    }]
  }, {
    id: "tools-devops",
    title: "Tools & Development Environment",
    subtitle: "Version Control, Edge Tooling & Creative Assets",
    icon: "terminal",
    items: [{
      name: "Git & GitHub",
      context: "Branching strategies, collaborative pull requests, release tagging, and version tracking."
    }, {
      name: "VS Code & JetBrains",
      context: "Configured developer environment with linting, typing, and debugging workflows."
    }, {
      name: "Android Studio",
      context: "Mobile app building, profiling, and emulator testing."
    }, {
      name: "Streamlit",
      context: "Rapid deployment of interactive AI and data prototypes for rapid client feedback."
    }, {
      name: "Docker & Containerization",
      context: "Reproducible deployment environments for microservices and edge databases."
    }, {
      name: "PixelLab, Canva & CapCut",
      context: "Designing UI assets, visual brand collateral, and educational video tutorials."
    }, {
      name: "AI-Assisted Development Workflows",
      context: "Leveraging LLMs for test generation, code refactoring, and documentation."
    }]
  }],
  projects: [{
    id: "classgpt-n",
    name: "ClassGPT-N Framework",
    tagline: "Offline-First Hausa–English Multilingual Agentic AI Tutoring for SS1 ICT",
    category: "Applied AI | Educational Technology | Offline-First Systems",
    domain: "ai-edtech",
    status: "Working Prototype (NERDC 2025 ICT)",
    statusColor: "emerald",
    previewImage: "/assets/projects/digital-learner.png",
    previewImageCaption: "Learner interface testing on shared tablet environment",
    problem: "Secondary school students in Hausa-dominant communities face significant barriers when learning computer science and ICT: educational AI tutors are overwhelmingly English-only, depend on high-speed internet that is frequently unavailable or prohibitively expensive, and assume access to high-end laptops.",
    solution: "Designed and built an offline-first multilingual tutoring framework grounded directly in the Nigerian Educational Research and Development Council (NERDC 2025) SS1 ICT curriculum. The architecture runs a quantised Qwen2.5B language model locally on consumer hardware, integrates N-ATLAS speech recognition for voice interactions in Hausa and English, and tracks student mastery through an agent-agnostic state machine.",
    specificContribution: "Architected the end-to-end framework: quantized the local LLM for low-memory CPU/edge execution, designed the curriculum-grounded RAG chunking pipeline, implemented the bilingual prompt orchestration layer, and integrated local voice-to-text with N-ATLAS.",
    coreMessage: "Bringing intelligent, personalised learning closer to learners who are often excluded by connectivity and language barriers.",
    technologies: ["Python", "Quantised Qwen2.5B", "RAG Pipeline", "N-ATLAS Speech Recognition", "FastAPI", "SQLite", "NERDC 2025 ICT Curriculum", "Offline-First Architecture"],
    keyArchitectureComponents: ["Quantised Qwen2.5B Local LLM: Enables inference on modest edge hardware without cloud latency or subscription fees.", "Curriculum-Grounded RAG: Prevents hallucinations by bounding responses strictly within NERDC 2025 SS1 ICT syllabus nodes.", "Hausa–English Multilingual Engine: Seamlessly interprets questions in Hausa or Nigerian English and explains complex technical concepts bilingually.", "N-ATLAS Speech Integration: Allows voice interaction for auditory learners and students with limited keyboard fluency.", "Agent-Agnostic Learning State: Tracks mastery, misconceptions, and progress independently of any single foundation model."],
    githubUrl: "https://github.com/MaAbumusAb/classgpt",
    featured: true,
    contextNote: "Active open-source research and engineering repository under continuous refinement."
  }, {
    id: "resolveiq",
    name: "ResolveIQ",
    tagline: "Multi-Agent Autonomous Transaction Investigation Platform",
    category: "Agentic AI | Financial Technology",
    domain: "agentic-fintech",
    status: "Hackathon Prototype (Zenith Bank Zecathon 6.0)",
    statusColor: "blue",
    problem: "Modern financial institutions process millions of daily transactions. When transaction discrepancies, failed transfers, or reversals occur, manual support investigations create severe backlogs, customer frustration, and high operational expenditure.",
    solution: "Developed as a competition prototype for Zenith Bank Zecathon 6.0, ResolveIQ coordinates specialised AI agents into an automated investigative workflow. Rather than relying on a single prompt, the prototype separates concerns into specialized agents: an Evidence Agent, a Root-Cause Diagnostic Agent, and a Resolution Formulation Agent.",
    specificContribution: "Designed the multi-agent orchestration architecture, structured financial data evaluation routines, tool/function calling contracts, and automated resolution generation based on banking operational constraints.",
    coreMessage: "Exploring how coordinated AI agents can improve complex financial investigation workflows.",
    technologies: ["Python", "Multi-Agent Frameworks", "Function Calling", "Tool Calling", "Financial Schema Modeling", "FastAPI", "PostgreSQL"],
    keyArchitectureComponents: ["Evidence Agent: Programmatically calls simulated banking APIs and ledger records to reconstruct transactional chronologies.", "Root-Cause Agent: Compares reconstructed logs against known failure modes (switch timeout, insufficient balance, token desync).", "Resolution Agent: Generates compliant customer explanations and drafts actionable reversal/escalation tickets.", "Structured Audit Trail: Logs every agent decision step to satisfy strict banking regulatory and audit standards."],
    featured: true,
    contextNote: "Developed as an investigative prototype for Zenith Bank Zecathon 6.0; not a deployed banking production system."
  }, {
    id: "amana-shield",
    name: "Amana Shield",
    tagline: "AI-Assisted WhatsApp Scam & Phishing Detection System",
    category: "Applied AI | Cybersecurity | Digital Safety",
    domain: "security-ai",
    status: "Active Security Architecture",
    statusColor: "purple",
    previewImage: "/assets/projects/amana-shield-architecture.svg",
    previewImageCaption: "Entity-Relationship & Phishing Threat Assessment Schema",
    problem: "Everyday users, job seekers, and communities in Nigeria are relentlessly targeted by fraudulent WhatsApp forwarded messages, fake empowerment schemes, and deceptive links designed to harvest personal credentials or extort money.",
    solution: "An AI-assisted scam and phishing detection system. The platform ingests forwarded WhatsApp messages, parses URLs, extracts domain metadata via DNS and RDAP queries, checks against trusted and untrusted registries, and produces structured LLM-assisted verdicts explaining threats in plain language.",
    specificContribution: "Authored the core FastAPI backend, designed the relational database schema for threat tracking, implemented DNS/RDAP network enrichment modules, and authored structured LLM evaluation prompts that produce actionable safety advice.",
    coreMessage: "Making digital safety more accessible to everyday users.",
    technologies: ["FastAPI", "Python", "WhatsApp Cloud API", "PostgreSQL", "RDAP/DNS Intelligence", "Structured LLMs", "SQLite", "Alembic"],
    keyArchitectureComponents: ["WhatsApp Ingestion Engine: Receives suspicious forward messages directly from user mobile chats via webhooks.", "Network Domain Intelligence: Performs real-time RDAP registration age checks, DNS record validation, and registrar reputation scoring.", "Structured LLM Threat Assessment: Employs structured schemas to evaluate deceptive claims, social engineering tactics, and phishing patterns.", "Plain-Language Rationales: Emits unambiguous risk classifications (Safe, Suspicious, Confirmed Threat) with straightforward explanations."],
    diagramAsset: "/assets/projects/amana-shield-architecture.svg",
    diagramType: "svg",
    diagramTitle: "Amana Shield Threat Assessment & Verification Architecture",
    featured: true,
    contextNote: "Authentic system ER diagram available for technical inspection."
  }, {
    id: "dila",
    name: "Dila (by Asabiyyah Technologies Ltd)",
    tagline: "Zero-Dependency Double-Entry Infrastructure for Community Savings Groups",
    category: "Fintech | Community Technology | Digital Inclusion",
    domain: "fintech-systems",
    status: "Active Product Development (Asabiyyah)",
    statusColor: "amber",
    previewImage: "/assets/projects/dila-system-interface.png",
    previewImageCaption: "Dila Mobile App System Interface · Real-Time Wallet & Adashe Ledger",
    secondaryImage: "/assets/projects/adashe-community-savings.jpeg",
    secondaryImageCaption: "Field Reality: Informal community savings gathering in Northern Nigeria",
    problem: "Over 48 million Nigerian adults save in informal rotating community pools (Adashe, Esusu, Ajo). Reliance on physical notebooks and cash handoffs leads to ledger errors, lack of transparency, disputes, and zero legal or institutional recourse.",
    solution: "Dila (formerly Adashe) is a flagship product being developed under Asabiyyah Technologies Ltd. It digitizes traditional community savings groups using zero-dependency, double-entry ledger principles on SQLite, custom printed QR collection posters, non-interest financial workflows, and accessible multilingual interfaces tailored to local community realities.",
    specificContribution: "As CEO & Co-Founder of Asabiyyah Technologies, led the strategic product direction, designed the double-entry accounting ledger schemas, formulated the offline-resilient edge sync strategy, and guided the brand architecture.",
    coreMessage: "Building practical digital infrastructure for community-based financial activities.",
    technologies: ["SQLite", "Double-Entry Bookkeeping", "Offline-First Sync", "FastAPI / NestJS", "QR Verification", "Multilingual UX (Hausa/English)", "Tailwind CSS"],
    keyArchitectureComponents: ["Strict Double-Entry Ledger: Code-enforced mathematical balance ensuring every contribution and payout has auditable debit/credit pairs.", "Offline-Resilient Edge Storage: Uses SQLite with localized caching so group leaders can record collections without network connectivity.", "Physical QR Collection Sheets: Bridges the physical and digital divide with scannable QR tokens for illiterate and informal savers.", "Non-Interest & Culturally Rooted Workflows: Built around ethical communal principles respecting local community traditions."],
    diagramAsset: "/assets/projects/dila-system-interface.png",
    diagramType: "image",
    diagramTitle: "Dila System Interface Screenshot · Mobile App Experience",
    featured: true,
    contextNote: "Presented as a core product of Asabiyyah Technologies Ltd."
  }, {
    id: "uspf-learning-hub",
    name: "USPF Learning Hub",
    tagline: "Edge-Native Offline Learning Infrastructure for Rural Schools",
    category: "Educational Technology | Offline-First Architecture",
    domain: "edtech-offline",
    status: "Architecture Concept (USPF Challenge)",
    statusColor: "indigo",
    previewImage: "/assets/projects/uspf-architecture-wide.png",
    previewImageCaption: "USPF Changemaker Challenge: Offline-First High-Level System Architecture",
    secondaryImage: "/assets/projects/rural-classroom.png",
    secondaryImageCaption: "Target Community: Rural school students lacking stable broadband access",
    problem: "Rural schools targeted by the Universal Service Provision Fund (USPF) frequently lack reliable broadband and electricity, leaving computer laboratories underutilized and students cut off from digital learning resources.",
    solution: "Conceived as an educational technology concept for the USPF Changemaker Challenge, the USPF Learning Hub explores an edge-native offline infrastructure model. It envisions a local edge micro-server running FastAPI, local SQLite tracking, a Zone of Proximal Development (ZPD) mastery engine, and local RAG support to assist learners without continuous internet access.",
    specificContribution: "Authored the system architecture, use case diagrams, and sequence flows illustrating offline assessment submission, local ZPD node calculations, and asynchronous regional cloud sync.",
    coreMessage: "Designing learning infrastructure for environments where connectivity cannot be taken for granted.",
    technologies: ["Raspberry Pi Edge Server", "FastAPI", "Local SQLite", "ChromaDB / FAISS", "Quantized Edge LLM (Qwen)", "React PWA", "Asynchronous Cloud Sync"],
    keyArchitectureComponents: ["Local Edge Server: Hosts all APIs, vector indices, and learning assets locally on the school's local Wi-Fi without internet.", "ZPD Orchestration Engine: Automatically calibrates student assessment difficulty and dynamically unlocks curriculum nodes.", "Asynchronous Cloud Sync: Queues telemetry and student logs locally, pushing updates to regional servers only when connectivity is detected.", "PWA Client Layer: Responsive web client cached via Service Workers on shared classroom tablets and PCs."],
    diagramAsset: "/assets/projects/uspf-architecture-wide.png",
    diagramType: "image",
    diagramTitle: "USPF Hackathon: High-Level System Architecture (Edge Server & Offline Mesh)",
    featured: true,
    contextNote: "Architectural concept developed for the USPF Changemaker Challenge; not a fully deployed institutional system."
  }, {
    id: "cropshield-ai",
    name: "CropShield AI",
    tagline: "Early Potato Disease Detection for Plateau Smallholder Farmers",
    category: "AI for Agriculture | Mobile Technology",
    domain: "agritech-ai",
    status: "Agricultural Prototype",
    statusColor: "teal",
    problem: "Plateau State is Nigeria's potato agricultural hub, but late blight and viral infections severely damage yields. Smallholder farmers lack immediate access to plant pathologists and reliable mobile internet in rural fields.",
    solution: "An exploratory edge-friendly computer vision and agricultural support solution designed to diagnose potato leaf pathogens on-device. CropShield AI combines a mobile-first diagnosis pipeline with offline treatment guidance in Hausa and English, providing agronomic remedies immediately in the field.",
    specificContribution: "Researched local Plateau farmer operating constraints, designed the lightweight model inference strategy, and shaped the multilingual advisory workflows.",
    coreMessage: "Applying AI to practical agricultural challenges in local communities.",
    technologies: ["Computer Vision", "Mobile Machine Learning", "Python Backend", "Offline Knowledge Base", "Hausa/English Agronomic Guide"],
    keyArchitectureComponents: ["Mobile On-Device Vision: Explores analyzing leaf imagery locally to detect blight symptoms without uploading photos over cellular data.", "Localized Remediation Protocols: Delivers agronomic treatment recommendations in Hausa and English.", "Offline Agro-Directory: Lists vetted agricultural extension contacts and suppliers across Plateau State communities."],
    featured: true,
    contextNote: "Active exploratory prototype targeting local agricultural challenges in Plateau State; distinguishing prototype research from field validation."
  }],
  principles: [{
    number: "01",
    title: "Accessibility is an engineering requirement, not an afterthought",
    statement: "If a system requires gigabit fiber and flagship hardware to function, it excludes the vast majority of human beings.",
    elaboration: "Engineering for accessibility means treating latency, intermittent electrical power, cellular data costs, and memory limits as primary design constraints from the very first architectural sketch.",
    realWorldImpact: "Demonstrated in ClassGPT-N and USPF Learning Hub, which run local 4-bit quantised LLMs on modest consumer edge machines."
  }, {
    number: "02",
    title: "AI should be useful beyond high-end hardware and reliable internet",
    statement: "Cloud-only artificial intelligence concentrates power; local edge AI distributes autonomy.",
    elaboration: "The most impactful AI applications are those that can execute on a classroom Raspberry Pi, an offline clinic laptop, or a community center workstation without depending on continuous transatlantic API calls.",
    realWorldImpact: "Implemented via local vector search with FAISS/ChromaDB and quantized Qwen models operating with zero internet dependence."
  }, {
    number: "03",
    title: "Local languages deserve a place in the future of intelligent systems",
    statement: "Language is the operating system of human thought. A technology that cannot speak your language cannot truly empower your community.",
    elaboration: "Millions of intelligent learners in Northern Nigeria and West Africa think and communicate primarily in Hausa. Multilingual systems must treat local idioms, cultural metaphors, and dialectal nuances as first-class citizens, not second-tier translations.",
    realWorldImpact: "Realized through ClassGPT-N's bilingual Hausa-English curriculum grounding and N-ATLAS voice recognition integration."
  }, {
    number: "04",
    title: "Good software solves actual problems, not simply demonstrates technical complexity",
    statement: "The value of an engineer is measured by the clarity and relief brought to users, never by architectural acrobatics.",
    elaboration: "We reject the temptation to add layers of fashionable frameworks when a well-modeled relational table and clear deterministic logic solve the client's problem more reliably, cheaply, and transparently.",
    realWorldImpact: "Exemplified in Dila's zero-dependency SQLite double-entry ledger, providing mathematical immutability without fragile cloud overhead."
  }, {
    number: "05",
    title: "Technology should empower people rather than create unnecessary dependence",
    statement: "Tools should augment human judgment and communal resilience, not extract agency into black-box subscriptions.",
    elaboration: "Whether in financial groups (Adashe) or classroom teaching, software should make records transparent, give administrators clear audit trails, and elevate human decision-making with verifiable evidence.",
    realWorldImpact: "Evident in Amana Shield's plain-language explanations of phishing indicators, enabling users to evaluate threats critically."
  }, {
    number: "06",
    title: "Learning is strongest when people build, experiment, and contribute",
    statement: "Theory without synthesis is fragile; true engineering mastery is forged when you ship working software into the wild.",
    elaboration: "Education is not passive consumption. The trajectory from learner to expert requires dirtying your hands with broken builds, missing dependencies, and real user feedback, followed immediately by teaching what you just learned.",
    realWorldImpact: "The foundational operating philosophy of FUTB Genius Hub and Success Forge: 'Talent → Development → Expertise → Contribution → Mentorship.'"
  }],
  experiences: [{
    id: "asabiyyah",
    title: "Chief Executive Officer & Co-Founder",
    organization: "Asabiyyah Technologies Ltd",
    type: "Executive & Entrepreneurship",
    location: "Jos, Plateau State, Nigeria",
    period: "2024 – Present",
    current: true,
    description: "Co-founded and leading an engineering-driven technology company building culturally rooted software, ethical financial infrastructure, and intelligent systems tailored to underserved communities across Africa.",
    philosophyOrMotto: "Ethical Finance. Empowered Communities.",
    responsibilities: ["Set strategic company vision, technological roadmap, and regulatory engagement for ethical financial products.", "Direct technical architecture of Dila, digitizing traditional rotating savings (Adashe) using double-entry ledger software.", "Lead cross-functional engineering efforts across backend services, edge databases, and accessible user interfaces.", "Cultivate commercial partnerships, community deployments, and institutional relationships."],
    badge: "Co-Founder & CEO"
  }, {
    id: "amtic-enterprises",
    title: "Founder & Chief Executive Officer",
    organization: "AMTIC Enterprises",
    type: "Executive & Entrepreneurship",
    location: "Babura & Jos, Nigeria",
    period: "2023 – Present",
    current: true,
    description: "Established a versatile digital enterprise focused on enterprise software solutions, ICT infrastructure, digital capacity development, and document systems.",
    philosophyOrMotto: "Excellence in Digital Implementation.",
    responsibilities: ["Oversee software consultancy projects, digital services, and institutional ICT support.", "Organized and delivered technical training programs in digital skills and computational thinking.", "Manage client engagements, operational delivery, and technical consulting."],
    badge: "Founder & CEO"
  }, {
    id: "futb-genius-hub",
    title: "Founder, Convener & Program Director",
    organization: "FUTB Genius Hub",
    type: "Community & Innovation",
    location: "Federal University of Technology Babura, Jigawa State",
    period: "2023 – 2026",
    current: false,
    description: "Founded and convened a premier student-led technology, engineering, and innovation community at FUTB to transition students from classroom theory to building tangible, production-ready systems.",
    philosophyOrMotto: "Learn. Build. Connect. Impact.",
    responsibilities: ["Designed and facilitated hands-on workshops in software engineering, AI, and project design.", "Organized peer hackathons, code clinics, and collaborative project demo days.", "Mentored hundreds of undergraduate students in algorithmic problem solving and technical career roadmaps.", "Built bridges between academic curriculum and global industry standards."],
    badge: "Founder & Convener"
  }, {
    id: "success-forge",
    title: "Founder & Community Lead",
    organization: "Success Forge",
    type: "Community & Innovation",
    location: "Nigeria",
    period: "2024 – Present",
    current: true,
    description: "Initiated a structured talent-development and mentorship framework committed to guiding ambitious youth from raw interest into verified domain expertise and reciprocal community mentorship.",
    philosophyOrMotto: "Talent → Development → Expertise → Contribution → Mentorship",
    responsibilities: ["Curate specialized learning tracks covering Python, Data Science, and Modern Web Development.", "Foster an intergenerational culture where experienced builders actively mentor subsequent cohorts.", "Track learner outcomes, milestone completions, and practical project builds."],
    badge: "Founder & Lead"
  }, {
    id: "nacos-president",
    title: "President",
    organization: "National Association of Computing Students (NACOS), FUTB Chapter",
    type: "Student Governance",
    location: "FUTB, Babura",
    period: "Previous Term",
    current: false,
    description: "Served as the elected president of the Computing Students' Association, representing student interests, championing academic excellence, and scaling department-wide technology initiatives.",
    responsibilities: ["Represented computing students across academic boards and institutional administration.", "Spearheaded technical bootcamps, departmental workshops, and academic tutorial sessions.", "Organized student developer competitions and industry guest lectures."],
    badge: "Former President"
  }, {
    id: "mssn-ameer",
    title: "Ameer II",
    organization: "Muslim Students' Society of Nigeria (MSSN), FUTB Chapter",
    type: "Student Governance",
    location: "FUTB, Babura",
    period: "Previous Term",
    current: false,
    description: "Provided ethical, community, and educational leadership to the student body, coordinating student welfare programs, educational seminars, and community service.",
    responsibilities: ["Coordinated welfare initiatives, academic support groups, and ethical mentorship.", "Facilitated inter-faculty dialogue, community outreach, and moral guidance."],
    badge: "Leadership: Ameer II"
  }, {
    id: "src-cps",
    title: "Chief Press Secretary",
    organization: "Students' Representative Council (SRC), FUTB",
    type: "Student Governance",
    location: "FUTB, Babura",
    period: "Previous Term",
    current: false,
    description: "Directed official institutional communications, public statements, and legislative press briefings for the apex student legislative council.",
    responsibilities: ["Authored official press releases and institutional circulars.", "Managed public information channels and maintained transparency between student governance and the student body."],
    badge: "Former Chief Press Secretary"
  }, {
    id: "napss-academics",
    title: "Director of Academics",
    organization: "National Association of Plateau State Students (NAPSS), FUTB Chapter",
    type: "Student Governance",
    location: "FUTB, Babura",
    period: "Previous Term",
    current: false,
    description: "Led academic support initiatives, exam preparations, and peer tutoring for Plateau State indigenous students across all university departments.",
    responsibilities: ["Organized tutorial sessions in foundational STEM courses and computational principles.", "Mentored junior students navigating undergraduate engineering transitions."],
    badge: "Former Director of Academics"
  }],
  teaching: [{
    id: "amana-academy",
    institution: "Amana Academy",
    role: "ICT Laboratory Technician & Instructor (SIWES)",
    location: "Jos, Plateau State, Nigeria",
    period: "SIWES Internship",
    summary: "Led technical operations and classroom instruction in a major secondary institution, bridging practical infrastructure engineering with high-impact secondary school teaching.",
    keyContributions: ["Installed, networked, and configured an enterprise-grade Computer-Based Testing (CBT) laboratory comprising over 200 client workstations.", "Administered client-server testing systems and resolved real-time network hardware, software, and power failover challenges.", "Taught Mathematics and ICT to senior secondary classes, breaking down computational concepts into memorable fundamentals.", "Explored digitization opportunities for school record management, grading systems, and examination logistics."],
    impactMetric: "200+ Workstation CBT Lab Network Configured"
  }, {
    id: "alhuda-school",
    institution: "Alhuda Private School",
    role: "Faculty Instructor (Academic Sessions & Holiday Intensives)",
    location: "Jos, Plateau State, Nigeria",
    period: "Multi-Term Engagement",
    summary: "Delivered comprehensive humanities and technology instruction across junior and senior secondary cohorts, fostering intellectual curiosity and critical reasoning.",
    keyContributions: ["Instructed classes in ICT, Civic & Heritage Studies, Nigerian History, and Literature in English.", "Developed interactive curricula connecting national history and civic responsibility with technological advancement.", "Mentored students in public speaking, analytical writing, and creative problem solving."],
    impactMetric: "Secondary School Multidisciplinary Teaching"
  }, {
    id: "islamtech-series",
    institution: "IslamTech with Abu Mus'ab",
    role: "Curriculum Creator & Lead Educator",
    location: "Online / Multilingual",
    period: "Ongoing",
    summary: "Created the 'Zero to AI Engineer: 30 Days. Two Languages. One Journey.' technical blueprint, delivering high-rigor AI engineering education in both Hausa and English.",
    keyContributions: ["Developed a 30-day structured syllabus covering Google Gen AI SDK, Gemini API, RAG, and agentic function calling.", "Authored bilingual technical explainers translating complex mathematical and transformer concepts into idiomatic Hausa.", "Demystified artificial intelligence engineering for thousands of youth through TikTok, Facebook, and community channels."],
    impactMetric: "30-Day Bilingual AI Curriculum"
  }],
  insights: [{
    id: "offline-first-ai-africa",
    title: "Building Offline-First AI: Running Local Quantized Models Beyond the Power Grid",
    slug: "offline-first-ai-africa",
    summary: "Why cloud-dependent AI architectures fail rural schools and clinics in developing nations, and how modern 4-bit model quantization enables resilient on-premise intelligence.",
    date: "November 2026",
    readTime: "7 min read",
    category: "Edge AI & Systems Architecture",
    keyTakeaways: ["Intermittent electricity and costly bandwidth turn cloud-only AI applications into brittle liabilities.", "Quantizing open weights (Qwen2.5B, Llama 3.2 3B) down to GGUF 4-bit allows 15+ tokens/second inference on commodity CPUs.", "Local vector stores (ChromaDB / FAISS) can index complete educational syllabi within under 250MB of memory.", "Edge-native designs bridge the digital divide by distributing intelligence rather than centralizing it."],
    content: ["In global technology hubs, conversations about artificial intelligence are dominated by trillion-parameter cluster scaling, gigawatt data centers, and multi-dollar monthly API subscriptions. But for an engineer working in Jos or Jigawa State, these assumptions dissolve the moment a rural school loses electrical power or mobile data costs spike beyond the monthly school budget.", "If artificial intelligence is to become a genuinely transformative civilizational tool rather than a luxury for well-connected capitals, we must architect systems for where people actually live. That means designing for intermittent connectivity, battery power, and modest consumer computers.", "Over the past year, while designing ClassGPT-N and the USPF Learning Hub, our engineering experiments proved that a quantized Qwen2.5B or Llama 3B model running locally via GGUF 4-bit precision achieves surprisingly high reasoning fidelity on secondary school curricula—at zero running API cost.", "By bounding local retrieval using SQLite and embedded FAISS vectors, we eliminate hallucinations and keep latency under 120ms per token on an ordinary Core i5 laptop without dedicated GPU hardware. This is not a compromise: it is a resilient engineering breakthrough."]
  }, {
    id: "multilingual-rag-hausa",
    title: "Multilingual AI Beyond English: Engineering Retrieval-Augmented Systems for Hausa Learners",
    slug: "multilingual-rag-hausa",
    summary: "Examining the linguistic failure modes of standard English embeddings when applied to Hausa technical discourse, and how hybrid tokenizers preserve conceptual meaning.",
    date: "October 2026",
    readTime: "8 min read",
    category: "Natural Language Processing",
    keyTakeaways: ["Standard tokenizers fragment Hausa words into excessive subwords, ballooning context costs and degrading semantic retrieval.", "Bilingual RAG requires curriculum-aligned terminology mapping to translate abstract concepts without semantic loss.", "Integrating voice-first pipelines (like N-ATLAS) unlocks accessibility for students who speak Hausa fluently but struggle with keyboard text entry.", "Local language inclusion is not an affirmative action gesture; it is the prerequisite for authentic pedagogical comprehension."],
    content: ["Most contemporary foundation models are trained predominantly on English and European web corpora. When a Hausa learner attempts to ask an AI tutor how a CPU executes machine instructions, the model either forces an awkward English reply or constructs grammatically fractured Hausa that confuses rather than clarifies.", "In ClassGPT-N, we addressed this challenge by developing a bilingual conceptual knowledge fabric. Rather than relying on naive automated translations, we mapped the NERDC 2025 SS1 ICT syllabus nodes with dual-language glossaries and culturally resonant analogies.", "Furthermore, integrating Nigerian speech recognition models such as N-ATLAS allows students to ask questions via voice. In low-connectivity environments where typing on worn keyboards introduces friction, voice input is the natural equalizer.", "When a student hears a complex concept like 'memory addressing' explained cleanly in Hausa with familiar analogies, cognitive load drops, and genuine understanding takes root."]
  }, {
    id: "multi-agent-transaction-investigation",
    title: "Why Multi-Agent Choreography Beats Monolithic Prompts in Financial Investigations",
    slug: "multi-agent-transaction-investigation",
    summary: "Architectural lessons from building ResolveIQ for Zenith Bank Zecathon: orchestrating evidence collection, root-cause diagnostics, and resolution into auditable state machines.",
    date: "September 2026",
    readTime: "6 min read",
    category: "Agentic AI & FinTech",
    keyTakeaways: ["Single-prompt LLMs hallucinate explanations when presented with multi-source banking log dumps.", "Separating concerns into specialized agents (Evidence, Diagnostic, Resolution) enables deterministic verification at each stage.", "Banking systems demand strict audit logs where every tool invocation and intermediate assumption is immutably recorded.", "Agentic function calling bridges unstructured customer complaints with strict SQL and API core-banking ledgers."],
    content: ["When a customer's debit card fails at a point-of-sale terminal but their account balance is debited, the customer service ticket touches multiple disparate systems: the card switch, inter-bank settlement queues, dispute logs, and core ledger balances.", "Attempting to feed these sprawling technical logs into a single large language model prompt inevitably leads to hallucinations, speculative diagnostics, and non-compliant customer messages.", "In building ResolveIQ for Zenith Bank Zecathon 6.0, we engineered a coordinated multi-agent state machine. The Evidence Agent programmatically queries specific microservices; the Diagnostic Agent performs deterministic rule checks against known settlement exceptions; and the Resolution Agent composes formal responses constrained by regulatory compliance rules.", "By maintaining strict JSON function calling interfaces between agents, we achieved both the flexibility of generative language models and the deterministic reliability demanded by enterprise finance."]
  }, {
    id: "talent-to-mentorship-lifecycle",
    title: "The Talent-to-Mentorship Engine: Why Community Infrastructure Must Precede Software",
    slug: "talent-to-mentorship-lifecycle",
    summary: "Reflections on founding FUTB Genius Hub and Success Forge: how cyclical peer mentorship builds sustainable technology ecosystems in emerging tech regions.",
    date: "August 2026",
    readTime: "5 min read",
    category: "Tech Ecosystem & Education",
    keyTakeaways: ["Software alone cannot solve the talent gap; trust and structured accountability come first.", "The lifecycle: Talent → Development → Expertise → Contribution → Mentorship.", "Undergraduate builders learn exponentially faster when building for local community needs rather than toy tutorials.", "A culture of open contribution transforms students from passive degree seekers into proactive technology founders."],
    content: ["When we founded FUTB Genius Hub at the Federal University of Technology Babura, we observed a recurrent dilemma: students attended lecture halls, memorized computational definitions for examinations, yet struggled to build a basic deployed API or write clean, version-controlled code.", "The issue was never a lack of intellectual capability. It was the absence of a psychological scaffold that made building feel normal, acceptable, and collaborative.", "We instituted our operating philosophy: 'Learn. Build. Connect. Impact.' We eliminated solitary cramming and replaced it with communal build sprints, open-source contribution drives, and peer code reviews.", "Through Success Forge, we codified this into an intergenerational covenant: when a student reaches mastery in Python, FastAPI, or React, their very next responsibility is to mentor two junior students. This creates a compounding talent engine that outlasts any single academic session."]
  }]
};

// SVG Icon Component Helper
const Icon = ({
  name,
  className = "w-5 h-5",
  ...props
}) => {
  const icons = {
    cpu: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    }, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "4",
      width: "16",
      height: "16",
      rx: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "9",
      y: "9",
      width: "6",
      height: "6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"
    })),
    server: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    }, /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "2",
      width: "20",
      height: "8",
      rx: "2",
      ry: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "14",
      width: "20",
      height: "8",
      rx: "2",
      ry: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "6.01",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "18",
      x2: "6.01",
      y2: "18"
    })),
    layout: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "9",
      x2: "21",
      y2: "9"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "9",
      y1: "21",
      x2: "9",
      y2: "9"
    })),
    "bar-chart-2": /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    }, /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "20",
      x2: "18",
      y2: "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "20",
      x2: "12",
      y2: "4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "20",
      x2: "6",
      y2: "14"
    })),
    terminal: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "4 17 10 11 4 5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "19",
      x2: "20",
      y2: "19"
    })),
    shield: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
    })),
    award: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "8",
      r: "7"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "8.21 13.89 7 23 12 20 17 23 15.79 13.88"
    })),
    book: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
    })),
    external: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "15 3 21 3 21 9"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "10",
      y1: "14",
      x2: "21",
      y2: "3"
    })),
    github: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
    })),
    linkedin: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    }, /*#__PURE__*/React.createElement("path", {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "9",
      width: "4",
      height: "12"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "4",
      cy: "4",
      r: "2"
    })),
    twitter: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    }, /*#__PURE__*/React.createElement("path", {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
    })),
    facebook: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
    })),
    video: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    }, /*#__PURE__*/React.createElement("polygon", {
      points: "23 7 16 12 23 17 23 7"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "1",
      y: "5",
      width: "15",
      height: "14",
      rx: "2",
      ry: "2"
    })),
    instagram: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    }, /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "2",
      width: "20",
      height: "20",
      rx: "5",
      ry: "5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "17.5",
      y1: "6.5",
      x2: "17.51",
      y2: "6.5"
    })),
    mail: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "22,6 12,13 2,6"
    })),
    phone: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    }, /*#__PURE__*/React.createElement("path", {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    })),
    check: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "20 6 9 17 4 12"
    })),
    copy: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    }, /*#__PURE__*/React.createElement("rect", {
      x: "9",
      y: "9",
      width: "13",
      height: "13",
      rx: "2",
      ry: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
    })),
    arrowRight: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    }, /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "12 5 19 12 12 19"
    })),
    arrowDown: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    }, /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "5",
      x2: "12",
      y2: "19"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "19 12 12 19 5 12"
    })),
    download: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    }, /*#__PURE__*/React.createElement("path", {
      d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "7 10 12 15 17 10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "15",
      x2: "12",
      y2: "3"
    })),
    eye: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    }, /*#__PURE__*/React.createElement("path", {
      d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    })),
    search: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "8"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21",
      y1: "21",
      x2: "16.65",
      y2: "16.65"
    })),
    x: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    }, /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    })),
    zoom: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "8"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21",
      y1: "21",
      x2: "16.65",
      y2: "16.65"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "11",
      y1: "8",
      x2: "11",
      y2: "14"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "8",
      y1: "11",
      x2: "14",
      y2: "11"
    })),
    clock: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "12 6 12 12 16 14"
    })),
    mapPin: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    }, /*#__PURE__*/React.createElement("path", {
      d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "10",
      r: "3"
    })),
    layers: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    }, /*#__PURE__*/React.createElement("polygon", {
      points: "12 2 2 7 12 12 22 7 12 2"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "2 17 12 22 22 17"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "2 12 12 17 22 12"
    })),
    message: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    }, /*#__PURE__*/React.createElement("path", {
      d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
    })),
    image: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "8.5",
      cy: "8.5",
      r: "1.5"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "21 15 16 10 5 21"
    }))
  };
  return icons[name] || icons.external;
};

// Main Application Component
const App = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [activeDiagram, setActiveDiagram] = useState(null);
  const [activeArticle, setActiveArticle] = useState(null);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [showCVModal, setShowCVModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDomainFilter, setActiveDomainFilter] = useState("all");
  const [projectSearchQuery, setProjectSearchQuery] = useState("");
  const [activeSkillCategory, setActiveSkillCategory] = useState("ai-ml");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [currentWatTime, setCurrentWatTime] = useState("");

  // Live WAT Time in Jos, Nigeria
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const options = {
          timeZone: "Africa/Lagos",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false
        };
        setCurrentWatTime(new Intl.DateTimeFormat("en-GB", options).format(now) + " WAT");
      } catch (e) {
        setCurrentWatTime("12:00:00 WAT");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Copy email handler
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(portfolioData.personalIdentity.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Contact form submission
  const handleContactSubmit = e => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;
    setContactSuccess(true);
    const mailtoLink = `mailto:${portfolioData.personalIdentity.email}?subject=${encodeURIComponent(contactForm.subject || "Collaboration Inquiry")}&body=${encodeURIComponent("Name: " + contactForm.name + "\nEmail: " + contactForm.email + "\n\n" + contactForm.message)}`;
    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 1500);
  };

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return portfolioData.projects.filter(p => {
      const matchesDomain = activeDomainFilter === "all" || activeDomainFilter === "ai" && (p.category.includes("AI") || p.category.includes("Agentic")) || activeDomainFilter === "offline" && (p.category.includes("Offline-First") || p.category.includes("Educational")) || activeDomainFilter === "fintech" && p.category.includes("Fintech");
      const query = projectSearchQuery.toLowerCase().trim();
      const matchesSearch = !query || p.name.toLowerCase().includes(query) || p.tagline.toLowerCase().includes(query) || p.technologies.some(t => t.toLowerCase().includes(query)) || p.problem.toLowerCase().includes(query);
      return matchesDomain && matchesSearch;
    });
  }, [activeDomainFilter, projectSearchQuery]);
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen bg-[#FAFAFB] text-slate-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-900"
  }, /*#__PURE__*/React.createElement("header", {
    className: "sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("img", {
    src: portfolioData.personalIdentity.avatarUrl,
    alt: "Muhammad Auwal Aliyu",
    className: "w-10 h-10 rounded-full object-cover ring-2 ring-slate-900/10 group-hover:ring-blue-600 transition-all",
    onError: e => {
      e.target.style.display = 'none';
      e.target.nextSibling.style.display = 'flex';
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "hidden w-10 h-10 rounded-full bg-slate-900 text-white items-center justify-center font-bold text-xs"
  }, "MA"), /*#__PURE__*/React.createElement("span", {
    className: "absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-slate-900 tracking-tight text-base leading-none"
  }, "Muhammad Auwal Aliyu"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-mono font-medium px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/60 hidden sm:inline-block"
  }, "Abu Mus'ab")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500 font-normal mt-0.5 leading-none hidden md:block"
  }, "Full-Stack AI Engineer | Technology Founder | Educator"))), /*#__PURE__*/React.createElement("div", {
    className: "hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-xs font-medium text-emerald-800"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
  }), /*#__PURE__*/React.createElement("span", null, "Available for high-impact AI engineering & founder collaborations")), /*#__PURE__*/React.createElement("nav", {
    className: "hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#about",
    className: "hover:text-blue-600 transition-colors"
  }, "About"), /*#__PURE__*/React.createElement("a", {
    href: "#philosophy",
    className: "hover:text-blue-600 transition-colors"
  }, "Philosophy"), /*#__PURE__*/React.createElement("a", {
    href: "#expertise",
    className: "hover:text-blue-600 transition-colors"
  }, "Expertise"), /*#__PURE__*/React.createElement("a", {
    href: "#projects",
    className: "hover:text-blue-600 transition-colors"
  }, "Projects"), /*#__PURE__*/React.createElement("a", {
    href: "#experience",
    className: "hover:text-blue-600 transition-colors"
  }, "Leadership"), /*#__PURE__*/React.createElement("a", {
    href: "#credentials",
    className: "hover:text-blue-600 transition-colors"
  }, "Credentials"), /*#__PURE__*/React.createElement("a", {
    href: "#insights",
    className: "hover:text-blue-600 transition-colors"
  }, "Insights")), /*#__PURE__*/React.createElement("div", {
    className: "hidden sm:flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowCertificateModal(true),
    className: "px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200/80 transition-colors flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "award",
    className: "w-3.5 h-3.5"
  }), /*#__PURE__*/React.createElement("span", null, "DataCamp Certified")), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-blue-600 transition-colors shadow-sm"
  }, "Let's Connect")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMobileMenuOpen(!mobileMenuOpen),
    className: "lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors",
    "aria-label": "Toggle Navigation Menu"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: mobileMenuOpen ? "x" : "layout",
    className: "w-6 h-6"
  }))), mobileMenuOpen && /*#__PURE__*/React.createElement("div", {
    className: "lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 p-2 bg-slate-50 rounded-xl border border-slate-200 mb-2"
  }, /*#__PURE__*/React.createElement("img", {
    src: portfolioData.personalIdentity.avatarUrl,
    alt: "Muhammad Auwal Aliyu",
    className: "w-10 h-10 rounded-full object-cover ring-1 ring-slate-300"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-bold text-slate-900 leading-tight"
  }, "Muhammad Auwal Aliyu"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-500"
  }, "Abu Mus'ab · Full-Stack AI Engineer | Technology Founder | Educator"))), /*#__PURE__*/React.createElement("nav", {
    className: "flex flex-col space-y-2 text-sm font-medium text-slate-700"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#about",
    onClick: () => setMobileMenuOpen(false),
    className: "px-3 py-2 rounded-lg hover:bg-slate-50"
  }, "About Me"), /*#__PURE__*/React.createElement("a", {
    href: "#philosophy",
    onClick: () => setMobileMenuOpen(false),
    className: "px-3 py-2 rounded-lg hover:bg-slate-50"
  }, "Engineering Philosophy"), /*#__PURE__*/React.createElement("a", {
    href: "#expertise",
    onClick: () => setMobileMenuOpen(false),
    className: "px-3 py-2 rounded-lg hover:bg-slate-50"
  }, "Technical Expertise"), /*#__PURE__*/React.createElement("a", {
    href: "#projects",
    onClick: () => setMobileMenuOpen(false),
    className: "px-3 py-2 rounded-lg hover:bg-slate-50"
  }, "Featured Projects (6)"), /*#__PURE__*/React.createElement("a", {
    href: "#experience",
    onClick: () => setMobileMenuOpen(false),
    className: "px-3 py-2 rounded-lg hover:bg-slate-50"
  }, "Experience & Leadership"), /*#__PURE__*/React.createElement("a", {
    href: "#credentials",
    onClick: () => setMobileMenuOpen(false),
    className: "px-3 py-2 rounded-lg hover:bg-slate-50"
  }, "Education & Credentials"), /*#__PURE__*/React.createElement("a", {
    href: "#teaching",
    onClick: () => setMobileMenuOpen(false),
    className: "px-3 py-2 rounded-lg hover:bg-slate-50"
  }, "Teaching & Community"), /*#__PURE__*/React.createElement("a", {
    href: "#insights",
    onClick: () => setMobileMenuOpen(false),
    className: "px-3 py-2 rounded-lg hover:bg-slate-50"
  }, "Writings & Thoughts"), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    onClick: () => setMobileMenuOpen(false),
    className: "px-3 py-2 rounded-lg bg-blue-50 text-blue-700 font-semibold"
  }, "Contact & Collaboration")), /*#__PURE__*/React.createElement("div", {
    className: "pt-2 flex flex-col gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setShowCertificateModal(true);
      setMobileMenuOpen(false);
    },
    className: "w-full py-2.5 text-xs font-semibold rounded-lg bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "award",
    className: "w-4 h-4"
  }), /*#__PURE__*/React.createElement("span", null, "Verify DataCamp AI Engineer Credential")), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setShowCVModal(true);
      setMobileMenuOpen(false);
    },
    className: "w-full py-2.5 text-xs font-semibold rounded-lg bg-slate-100 text-slate-800 border border-slate-200 flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "book",
    className: "w-4 h-4"
  }), /*#__PURE__*/React.createElement("span", null, "Review Official Resume / CV"))))), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-200/80 bg-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 tech-grid-pattern opacity-60 pointer-events-none"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-0 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-2 sm:gap-2.5 mb-5 sm:mb-6"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200/80 shadow-2xs"
  }, "Full-Stack AI Engineer | Technology Founder | Educator"), /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200/60 flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mapPin",
    className: "w-3.5 h-3.5"
  }), /*#__PURE__*/React.createElement("span", null, "Jos, Plateau State, Nigeria")), /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-slate-50 text-slate-600 border border-slate-200/60"
  }, "Public Name: Abu Mus'ab")), /*#__PURE__*/React.createElement("h1", {
    className: "text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] sm:leading-[1.1] mb-5 sm:mb-6"
  }, "Engineering intelligent systems. ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-slate-900"
  }, "Building technology that matters.")), /*#__PURE__*/React.createElement("p", {
    className: "text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-6 sm:mb-8 max-w-3xl"
  }, "I build intelligent software systems at the intersection of AI, engineering, and human-centred innovation. My work focuses on applied AI, agentic systems, and accessible digital solutions designed for real-world conditions — including environments where connectivity, computing resources, and language can be limiting factors."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide uppercase text-slate-500 mb-6 sm:mb-8 pb-4 border-b border-slate-100"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-blue-700"
  }, "Computer Science"), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-300"
  }, "|"), /*#__PURE__*/React.createElement("span", {
    className: "text-blue-700"
  }, "Applied AI"), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-300"
  }, "|"), /*#__PURE__*/React.createElement("span", {
    className: "text-blue-700"
  }, "Software Engineering"), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-300"
  }, "|"), /*#__PURE__*/React.createElement("span", {
    className: "text-blue-700"
  }, "Entrepreneurship")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#projects",
    className: "min-h-[44px] px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 group"
  }, /*#__PURE__*/React.createElement("span", null, "Explore My Work"), /*#__PURE__*/React.createElement(Icon, {
    name: "arrowDown",
    className: "w-4 h-4 group-hover:translate-y-0.5 transition-transform"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "min-h-[44px] px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-semibold text-sm border border-slate-200 hover:border-slate-300 transition-all flex items-center justify-center gap-2 shadow-2xs"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message",
    className: "w-4 h-4 text-blue-600"
  }), /*#__PURE__*/React.createElement("span", null, "Let's Connect")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowCertificateModal(true),
    className: "min-h-[44px] px-5 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium text-sm border border-slate-200/80 transition-all flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "award",
    className: "w-4 h-4 text-emerald-600"
  }), /*#__PURE__*/React.createElement("span", null, "Verify DataCamp AI Credential")))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-4 flex justify-center mt-6 lg:mt-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative group w-full max-w-xs sm:max-w-sm mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -inset-1.5 bg-gradient-to-tr from-blue-600/30 via-slate-400/20 to-blue-500/20 rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition duration-500"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative bg-white p-3 rounded-2xl border border-slate-200 shadow-xl overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-100"
  }, /*#__PURE__*/React.createElement("img", {
    src: portfolioData.personalIdentity.avatarUrl,
    alt: "Muhammad Auwal Aliyu (Abu Mus'ab)",
    className: "w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-end p-4 sm:p-5 text-white"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-blue-300 font-semibold leading-tight mb-1"
  }, "Full-Stack AI Engineer | Technology Founder | Educator"), /*#__PURE__*/React.createElement("div", {
    className: "text-base sm:text-lg font-bold tracking-tight"
  }, "Muhammad Auwal Aliyu"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-300 font-normal"
  }, "Known publicly as Abu Mus'ab"))), /*#__PURE__*/React.createElement("div", {
    className: "p-3 pt-3.5 flex items-center justify-between text-xs border-t border-slate-100 mt-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5 text-slate-700 font-medium"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
  }), /*#__PURE__*/React.createElement("span", null, "Active Builder & Founder")), /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-slate-400 text-[11px]"
  }, "Jos, Nigeria")))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-16 pt-10 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
  }, portfolioData.stats.map((stat, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "bg-slate-50/80 p-5 rounded-2xl border border-slate-200/70 hover:border-blue-200 hover:bg-white transition-all shadow-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-semibold tracking-wider text-slate-500 uppercase"
  }, stat.label), /*#__PURE__*/React.createElement("div", {
    className: "text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mt-1 mb-1"
  }, stat.value), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-600 leading-normal"
  }, stat.detail)))))), /*#__PURE__*/React.createElement("section", {
    className: "bg-slate-950 text-white py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-5xl mx-auto text-center relative z-10"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-3 inline-block"
  }, "Foundational Thesis"), /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4 leading-tight"
  }, "“Building technology that works for people, not just ideal conditions.”"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
  }, "True technological leverage comes not from demanding perfect connectivity and expensive devices, but from architecting systems that thrive within real human constraints."))), /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200/80"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4"
  }, /*#__PURE__*/React.createElement("span", null, "Personal Identity & Story")), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-6"
  }, "A builder committed to practical, human-centred innovation."), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4 text-slate-700 text-base leading-relaxed"
  }, /*#__PURE__*/React.createElement("p", null, "I'm ", /*#__PURE__*/React.createElement("strong", null, "Muhammad Auwal Aliyu"), ", a Nigerian Computer Science professional, technology founder, and educator publicly known as ", /*#__PURE__*/React.createElement("strong", null, "Abu Mus'ab"), "."), /*#__PURE__*/React.createElement("p", null, "My journey into technology grew from curiosity about what computers could make possible into a deeper interest in how intelligent systems can solve practical problems. Over time, that curiosity expanded across Data Science, Machine Learning, Artificial Intelligence, and full-stack software engineering."), /*#__PURE__*/React.createElement("p", null, "This journey has taken me from independent learning and practical experimentation to building production-ready AI applications, leading technology enterprises, and contributing directly to national digital skills development."), /*#__PURE__*/React.createElement("p", {
    className: "p-4 bg-slate-50 border-l-4 border-blue-600 rounded-r-xl text-slate-800 font-medium italic"
  }, "“I am particularly interested in the intersection of AI and accessibility. I believe powerful technology should not be restricted to people with expensive devices, reliable internet, or access to dominant languages.”"), /*#__PURE__*/React.createElement("p", null, "That conviction informs much of my work, especially in multilingual AI, offline-first applications, educational technology, and solutions designed around local realities. Beyond engineering, I invest deeply in teaching, mentoring, building communities, and creating opportunities for people to learn by building real things."), /*#__PURE__*/React.createElement("p", null, "I am continuously learning, experimenting, and building towards a future where technology creates meaningful opportunities for more people.")), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4"
  }, portfolioData.personalIdentity.languages.map((lang, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-500 uppercase tracking-wider font-semibold"
  }, "Language"), /*#__PURE__*/React.createElement("div", {
    className: "text-base font-bold text-slate-900 mt-0.5"
  }, lang.name), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-600 mt-1"
  }, lang.level))))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 pb-4 border-b border-slate-100"
  }, /*#__PURE__*/React.createElement("img", {
    src: portfolioData.personalIdentity.avatarUrl,
    alt: "Muhammad Auwal Aliyu",
    className: "w-16 h-16 rounded-2xl object-cover ring-2 ring-blue-600/20 shadow-sm"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold text-slate-900 tracking-tight leading-tight"
  }, "Muhammad Auwal Aliyu"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-mono font-medium text-blue-700"
  }, "Abu Mus'ab · Full-Stack AI Engineer | Technology Founder | Educator"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-500 mt-0.5"
  }, "Jos, Plateau State, Nigeria"))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4 text-sm"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-slate-500 uppercase tracking-wider font-semibold block"
  }, "Academic Standing"), /*#__PURE__*/React.createElement("span", {
    className: "text-base font-semibold text-blue-700"
  }, "First Class Honours (CGPA 4.79 / 5.00)"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-slate-500 block"
  }, "B.Sc. Computer Science, FUTB Class of 2026 (Awaiting formal degree conferment)")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-slate-500 uppercase tracking-wider font-semibold block"
  }, "Company Roles"), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-medium text-slate-900 block"
  }, "• CEO & Co-Founder, Asabiyyah Technologies Ltd"), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-medium text-slate-900 block"
  }, "• Founder & CEO, AMTIC Enterprises")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-slate-500 uppercase tracking-wider font-semibold block"
  }, "Direct Contact"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 mt-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-mono text-slate-800 bg-slate-100 px-2.5 py-1 rounded border border-slate-200 truncate"
  }, portfolioData.personalIdentity.email), /*#__PURE__*/React.createElement("button", {
    onClick: copyEmailToClipboard,
    className: "p-1 text-slate-500 hover:text-blue-600 transition-colors",
    title: "Copy email to clipboard"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: copiedEmail ? "check" : "copy",
    className: "w-4 h-4 text-blue-600"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "pt-4 border-t border-slate-100 flex flex-col gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowCVModal(true),
    className: "w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "book",
    className: "w-4 h-4"
  }), /*#__PURE__*/React.createElement("span", null, "Inspect Official Curriculum Vitae")), /*#__PURE__*/React.createElement("a", {
    href: "/assets/resume/muhammad-auwal-aliyu-cv.pdf",
    download: true,
    className: "w-full py-2 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-xs transition-colors text-center"
  }, "Download CV (PDF)"))))), /*#__PURE__*/React.createElement("section", {
    id: "expertise",
    className: "py-20 bg-slate-50/60 border-b border-slate-200/80"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-3xl mx-auto mb-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3"
  }, /*#__PURE__*/React.createElement("span", null, "Demonstrable Engineering Familiarity")), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight"
  }, "Technical Expertise by Practical Engineering Domain"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 text-sm sm:text-base mt-3"
  }, "Organised strictly by applied capability without arbitrary percentages or progress bars. Grounded in actual systems built and production experience.")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap justify-center gap-2 mb-10"
  }, portfolioData.skills.map(cat => /*#__PURE__*/React.createElement("button", {
    key: cat.id,
    onClick: () => setActiveSkillCategory(cat.id),
    className: `px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${activeSkillCategory === cat.id ? "bg-slate-900 text-white shadow-sm" : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"}`
  }, /*#__PURE__*/React.createElement(Icon, {
    name: cat.icon,
    className: "w-4 h-4"
  }), /*#__PURE__*/React.createElement("span", null, cat.title)))), portfolioData.skills.filter(cat => cat.id === activeSkillCategory).map(cat => /*#__PURE__*/React.createElement("div", {
    key: cat.id,
    className: "bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pb-6 mb-6 border-b border-slate-100"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-slate-950"
  }, cat.title), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500 font-medium mt-0.5"
  }, cat.subtitle)), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-mono bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200/60 font-semibold"
  }, cat.items.length, " Technologies")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
  }, cat.items.map((skill, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "p-4 rounded-xl bg-slate-50/70 border border-slate-200/60 hover:border-blue-300 hover:bg-white transition-all"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-slate-900 text-sm flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", null, skill.name), /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-blue-500"
  })), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-600 mt-2 leading-relaxed"
  }, skill.context)))))))), /*#__PURE__*/React.createElement("section", {
    id: "projects",
    className: "py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200/80"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3"
  }, /*#__PURE__*/React.createElement("span", null, "Evidence of Problem-Solving")), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight"
  }, "Featured Engineering Projects & System Interfaces"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 text-sm sm:text-base mt-2 max-w-2xl"
  }, "Presenting verified software architectures, working prototypes, and actual deployed/mobile interfaces designed for real-world constraints.")), /*#__PURE__*/React.createElement("div", {
    className: "relative w-full md:w-72"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    className: "w-4 h-4 absolute left-3.5 top-3.5 text-slate-400"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Search projects or stack...",
    value: projectSearchQuery,
    onChange: e => setProjectSearchQuery(e.target.value),
    className: "w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
  }), projectSearchQuery && /*#__PURE__*/React.createElement("button", {
    onClick: () => setProjectSearchQuery(""),
    className: "absolute right-3 top-3 text-slate-400 hover:text-slate-600"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    className: "w-4 h-4"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2 mb-8"
  }, [{
    id: "all",
    label: "All Projects (6)"
  }, {
    id: "ai",
    label: "Applied AI & Agentic Systems (3)"
  }, {
    id: "offline",
    label: "Offline-First & EdTech (2)"
  }, {
    id: "fintech",
    label: "FinTech & Community Ledgers (1)"
  }].map(filter => /*#__PURE__*/React.createElement("button", {
    key: filter.id,
    onClick: () => setActiveDomainFilter(filter.id),
    className: `px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeDomainFilter === filter.id ? "bg-blue-600 text-white shadow-xs" : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"}`
  }, filter.label))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 projects-responsive-grid w-full"
  }, filteredProjects.map(project => /*#__PURE__*/React.createElement("div", {
    key: project.id,
    className: "bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between overflow-hidden group min-w-0 w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-5 sm:p-7 flex-1 flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start justify-between gap-3 mb-3 flex-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] sm:text-xs font-mono font-medium text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200/60 uppercase tracking-wide"
  }, project.category), /*#__PURE__*/React.createElement("span", {
    className: `px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold border ${project.statusColor === 'emerald' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : project.statusColor === 'blue' ? 'bg-blue-50 text-blue-700 border-blue-200' : project.statusColor === 'purple' ? 'bg-purple-50 text-purple-700 border-purple-200' : project.statusColor === 'amber' ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-slate-100 text-slate-700 border-slate-200'}`
  }, project.status)), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl sm:text-2xl font-bold text-slate-950 tracking-tight group-hover:text-blue-700 transition-colors"
  }, project.name), /*#__PURE__*/React.createElement("p", {
    className: "text-xs sm:text-sm text-slate-600 font-medium mt-1 mb-4"
  }, project.tagline), project.previewImage && /*#__PURE__*/React.createElement("div", {
    onClick: () => setActiveDiagram({
      title: project.diagramTitle || project.name,
      asset: project.previewImage,
      type: project.diagramType || 'image'
    }),
    className: "mb-5 rounded-xl border border-slate-200 overflow-hidden bg-slate-50 cursor-pointer group/img relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full h-48 sm:h-52 overflow-hidden flex items-center justify-center bg-slate-900/5"
  }, /*#__PURE__*/React.createElement("img", {
    src: project.previewImage,
    alt: project.name,
    className: "w-full h-full object-cover object-top group-hover/img:scale-105 transition duration-300",
    onError: e => {
      e.target.parentElement.style.display = 'none';
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "p-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-600"
  }, /*#__PURE__*/React.createElement("span", {
    className: "truncate font-medium pr-2"
  }, project.previewImageCaption || "System Interface Preview"), /*#__PURE__*/React.createElement("span", {
    className: "text-blue-600 font-semibold flex items-center gap-1 shrink-0"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zoom",
    className: "w-3.5 h-3.5"
  }), /*#__PURE__*/React.createElement("span", null, "Expand")))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 text-xs sm:text-sm text-slate-700 flex-1"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-slate-900 block text-xs uppercase tracking-wider font-semibold"
  }, "The Problem:"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 mt-1 leading-relaxed"
  }, project.problem)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-slate-900 block text-xs uppercase tracking-wider font-semibold"
  }, "Engineering Approach:"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 mt-1 leading-relaxed"
  }, project.solution))), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5 items-center"
  }, project.technologies.slice(0, 4).map((tech, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "text-[11px] sm:text-xs font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200/80"
  }, tech)), project.technologies.length > 4 && /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveProject(project),
    className: "text-[11px] sm:text-xs font-mono text-blue-700 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-2 py-0.5 rounded border border-blue-200/70 transition-colors",
    title: "Click to view all technologies in project deep-dive"
  }, "+", project.technologies.length - 4, " more in deep dive"))), /*#__PURE__*/React.createElement("div", {
    className: "px-5 sm:px-6 py-3.5 sm:py-4 bg-slate-50/80 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 sm:gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveProject(project),
    className: "w-full sm:w-auto min-h-[42px] px-3.5 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white sm:bg-transparent sm:text-blue-700 sm:hover:text-blue-800 sm:p-0 flex items-center justify-center sm:justify-start gap-1.5 transition-colors focus:outline-none"
  }, /*#__PURE__*/React.createElement("span", null, "Deep Dive Architecture"), /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    className: "w-3.5 h-3.5"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200/60"
  }, project.diagramAsset && /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveDiagram({
      title: project.diagramTitle || project.name,
      asset: project.diagramAsset,
      type: project.diagramType
    }),
    className: "flex-1 sm:flex-initial min-h-[38px] px-3 py-1.5 text-xs font-medium rounded-lg bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 flex items-center justify-center gap-1 shadow-2xs transition-colors",
    title: "View Architecture Diagram / System Interface"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zoom",
    className: "w-3.5 h-3.5 text-blue-600"
  }), /*#__PURE__*/React.createElement("span", null, "Interface & Schema")), project.githubUrl && /*#__PURE__*/React.createElement("a", {
    href: project.githubUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "min-h-[38px] min-w-[38px] px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 rounded-lg border border-slate-200 flex items-center justify-center gap-1.5 shadow-2xs transition-colors",
    title: "View GitHub Repository"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "github",
    className: "w-4 h-4"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sm:hidden font-medium"
  }, "GitHub")))))))), /*#__PURE__*/React.createElement("section", {
    id: "philosophy",
    className: "py-20 bg-white border-b border-slate-200/80"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl mb-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3"
  }, /*#__PURE__*/React.createElement("span", null, "Guiding Principles")), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight"
  }, "Technology should work beyond ideal conditions."), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 text-sm sm:text-base mt-3"
  }, "The technical principles that govern how I design, architect, and ship software. Built for resilience, human dignity, and long-term utility.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  }, portfolioData.principles.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.number,
    className: "p-6 sm:p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-blue-300 hover:bg-white transition-all shadow-xs flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-mono font-bold text-blue-600 px-2 py-0.5 rounded bg-blue-50 border border-blue-200/60"
  }, "TENET ", p.number)), /*#__PURE__*/React.createElement("h3", {
    className: "text-base sm:text-lg font-bold text-slate-950 tracking-tight mb-2"
  }, p.title), /*#__PURE__*/React.createElement("p", {
    className: "text-xs sm:text-sm font-medium text-slate-900 italic mb-3"
  }, "“", p.statement, "”"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-600 leading-relaxed"
  }, p.elaboration)), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 pt-3 border-t border-slate-200/60"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold block"
  }, "Demonstrated In"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-blue-700 font-medium block mt-0.5"
  }, p.realWorldImpact))))))), /*#__PURE__*/React.createElement("section", {
    id: "experience",
    className: "py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200/80"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl mb-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3"
  }, /*#__PURE__*/React.createElement("span", null, "Professional Trajectory")), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight"
  }, "Experience & Institutional Leadership"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 text-sm sm:text-base mt-2"
  }, "Clear distinction between entrepreneurial executive leadership, talent-development community building, and student governance.")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, portfolioData.experiences.map(exp => /*#__PURE__*/React.createElement("div", {
    key: exp.id,
    className: "bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 flex-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-lg font-bold text-slate-950"
  }, exp.title), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60"
  }, exp.badge), exp.current && /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200"
  }, "Active")), /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-semibold text-slate-700 mt-0.5"
  }, exp.organization, " · ", /*#__PURE__*/React.createElement("span", {
    className: "text-slate-500 font-normal"
  }, exp.location))), /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-mono font-semibold text-slate-500 whitespace-nowrap bg-slate-50 px-2.5 py-1 rounded border border-slate-200/60"
  }, exp.period)), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 text-xs sm:text-sm text-slate-700 leading-relaxed"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mb-3 font-normal"
  }, exp.description), exp.philosophyOrMotto && /*#__PURE__*/React.createElement("div", {
    className: "mb-3 text-xs font-mono text-blue-700 bg-blue-50/70 p-2.5 rounded-lg border border-blue-200/50"
  }, /*#__PURE__*/React.createElement("strong", null, "Core Motto:"), " “", exp.philosophyOrMotto, "”"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5"
  }, exp.responsibilities.map((resp, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "flex items-start gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-blue-600 mt-0.5"
  }, "•"), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-600"
  }, resp))))))))), /*#__PURE__*/React.createElement("section", {
    id: "credentials",
    className: "py-20 bg-slate-50/70 border-b border-slate-200/80"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-3xl mx-auto mb-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3"
  }, /*#__PURE__*/React.createElement("span", null, "Rigor & Continuous Learning")), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight"
  }, "Education, Fellowships & Certifications"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 text-sm sm:text-base mt-2"
  }, "Documented academic performance, competitive fellowships, and industry AI certifications.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pb-4 border-b border-slate-100 mb-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold"
  }, "Degree Program"), /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200"
  }, "CGPA 4.79 / 5.00")), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-slate-950"
  }, portfolioData.education.degree), /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-semibold text-blue-700 mt-0.5"
  }, portfolioData.education.institution), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-500 mt-0.5"
  }, portfolioData.education.location, " · ", portfolioData.education.graduationYear, " (", portfolioData.education.standing, ")"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-600 mt-3 p-3 bg-slate-50 rounded-xl border border-slate-100"
  }, portfolioData.education.statusNote), /*#__PURE__*/React.createElement("div", {
    className: "mt-5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-semibold text-slate-800 uppercase tracking-wide block mb-2"
  }, "Curriculum Foundations"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-2"
  }, portfolioData.education.focusAreas.map((area, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "text-xs text-slate-600 flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-blue-600"
  }), /*#__PURE__*/React.createElement("span", null, area)))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-mono"
  }, "Verified Academic Records · Federal University of Technology Babura")), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-6 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 sm:p-7 rounded-2xl border-2 border-blue-500/30 bg-gradient-to-br from-white via-white to-blue-50/30 shadow-xs relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start justify-between gap-3 mb-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-mono uppercase tracking-widest text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200"
  }, "OFFICIAL VERIFIED CERTIFICATION"), /*#__PURE__*/React.createElement("h4", {
    className: "text-lg font-bold text-slate-950 mt-2"
  }, "AI Engineer for Developers Associate"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-600 font-medium"
  }, "Issued by DataCamp · Certified on November 8, 2026")), /*#__PURE__*/React.createElement("div", {
    className: "p-2 bg-blue-50 text-blue-700 rounded-xl border border-blue-100"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "award",
    className: "w-6 h-6"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "my-3 py-2 px-3 bg-slate-50 rounded-lg border border-slate-200/80 font-mono text-xs flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-500"
  }, "Credential ID:"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-blue-800"
  }, portfolioData.certifications[0].credentialId)), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1.5 mb-4"
  }, portfolioData.certifications[0].topics.map((t, idx) => /*#__PURE__*/React.createElement("span", {
    key: idx,
    className: "text-[11px] font-mono bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-700"
  }, t))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 pt-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowCertificateModal(true),
    className: "px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors flex items-center gap-1.5 shadow-2xs"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "eye",
    className: "w-3.5 h-3.5"
  }), /*#__PURE__*/React.createElement("span", null, "Inspect Certificate")), /*#__PURE__*/React.createElement("a", {
    href: "/assets/certificates/datacamp-ai-engineer-associate.pdf",
    download: true,
    className: "px-3.5 py-2 text-xs font-medium rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download",
    className: "w-3.5 h-3.5"
  }), /*#__PURE__*/React.createElement("span", null, "Download PDF")))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block pb-2 border-b border-slate-100"
  }, "Selective Fellowships & National Ecosystems"), portfolioData.fellowships.map(fel => /*#__PURE__*/React.createElement("div", {
    key: fel.id,
    className: "text-xs text-slate-700"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-slate-900 text-sm flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", null, fel.title), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-mono font-medium text-slate-500"
  }, fel.year)), /*#__PURE__*/React.createElement("div", {
    className: "text-blue-700 font-medium text-xs mt-0.5"
  }, fel.organization), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 mt-1"
  }, fel.description)))))))), /*#__PURE__*/React.createElement("section", {
    id: "teaching",
    className: "py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200/80"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl mb-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3"
  }, /*#__PURE__*/React.createElement("span", null, "Human-Centred Multiplier")), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight"
  }, "Teaching, Mentorship & Community Impact"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 text-sm sm:text-base mt-2"
  }, "Education is central to my professional identity: translating advanced computing into accessible learning and community leadership.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-6"
  }, portfolioData.teaching.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    className: "bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60 uppercase"
  }, t.period), /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold text-slate-950 mt-3 mb-1"
  }, t.institution), /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-semibold text-slate-600 mb-2"
  }, t.role, " · ", t.location), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-600 leading-relaxed mb-4"
  }, t.summary), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5 text-xs text-slate-700"
  }, t.keyContributions.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "flex items-start gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-blue-600 mt-0.5"
  }, "•"), /*#__PURE__*/React.createElement("span", null, c))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500"
  }, /*#__PURE__*/React.createElement("span", null, "Impact Highlight:"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-slate-900"
  }, t.impactMetric)))))), /*#__PURE__*/React.createElement("section", {
    id: "insights",
    className: "py-20 bg-slate-50/60 border-b border-slate-200/80"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3"
  }, /*#__PURE__*/React.createElement("span", null, "Engineering Essays")), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight"
  }, "Writings, Thoughts & Insights"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 text-sm sm:text-base mt-2 max-w-2xl"
  }, "Reflections on applied AI, offline-first systems, multilingual natural language processing, and technology ecosystems in Africa."))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-6"
  }, portfolioData.insights.map(article => /*#__PURE__*/React.createElement("div", {
    key: article.id,
    className: "bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:border-blue-300 hover:shadow-sm transition-all flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between text-xs font-mono text-slate-500 mb-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-blue-700 bg-blue-50 px-2 py-0.5 rounded font-semibold"
  }, article.category), /*#__PURE__*/React.createElement("span", null, article.readTime)), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-slate-950 tracking-tight mt-2 mb-2 hover:text-blue-600 transition-colors cursor-pointer",
    onClick: () => setActiveArticle(article)
  }, article.title), /*#__PURE__*/React.createElement("p", {
    className: "text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4"
  }, article.summary), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1 text-xs text-slate-700"
  }, /*#__PURE__*/React.createElement("strong", {
    className: "text-xs uppercase tracking-wider text-slate-500 font-semibold block"
  }, "Key Takeaways:"), article.keyTakeaways.slice(0, 2).map((takeaway, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "flex items-start gap-1.5 text-slate-600"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-blue-600"
  }, "•"), /*#__PURE__*/React.createElement("span", null, takeaway))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 pt-4 border-t border-slate-100 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-mono text-slate-400"
  }, article.date), /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveArticle(article),
    className: "text-xs font-semibold text-blue-700 hover:text-blue-800 flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", null, "Read Full Essay"), /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    className: "w-3.5 h-3.5"
  })))))))), /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-2"
  }, /*#__PURE__*/React.createElement("span", null, "Start a Conversation")), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight"
  }, "Have an idea worth building?"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 text-sm sm:text-base leading-relaxed"
  }, "I'm open to meaningful conversations, technical collaborations, speaking opportunities, mentorship, and projects that use technology to solve real problems."), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 pt-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-2 bg-blue-50 text-blue-700 rounded-lg"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-500 font-semibold uppercase tracking-wider"
  }, "Official Email"), /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-bold text-slate-900 font-mono truncate max-w-[200px] sm:max-w-xs"
  }, portfolioData.personalIdentity.email))), /*#__PURE__*/React.createElement("button", {
    onClick: copyEmailToClipboard,
    className: "px-2.5 py-1 text-xs font-semibold text-blue-700 hover:bg-blue-50 rounded border border-blue-200/60 transition-colors flex items-center gap-1"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: copiedEmail ? "check" : "copy",
    className: "w-3.5 h-3.5"
  }), /*#__PURE__*/React.createElement("span", null, copiedEmail ? "Copied" : "Copy"))), /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-2 bg-emerald-50 text-emerald-700 rounded-lg"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-500 font-semibold uppercase tracking-wider"
  }, "Phone / WhatsApp"), /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-bold text-slate-900 font-mono"
  }, portfolioData.personalIdentity.phone))), /*#__PURE__*/React.createElement("a", {
    href: `https://wa.me/2348064753943?text=${encodeURIComponent("Hello Abu Mus'ab, I reached out through your personal portfolio.")}`,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "px-2.5 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-50 rounded border border-emerald-200/60 transition-colors flex items-center gap-1"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "external",
    className: "w-3.5 h-3.5"
  }), /*#__PURE__*/React.createElement("span", null, "WhatsApp"))), /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-2 bg-slate-100 text-slate-700 rounded-lg"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mapPin",
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-500 font-semibold uppercase tracking-wider"
  }, "Base Location"), /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-bold text-slate-900"
  }, portfolioData.personalIdentity.location, " · West Africa Time (WAT)")))), /*#__PURE__*/React.createElement("div", {
    className: "pt-4 border-t border-slate-200"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-3"
  }, "Official Profiles & Channels"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2"
  }, portfolioData.socialLinks.map((s, idx) => /*#__PURE__*/React.createElement("a", {
    key: idx,
    href: s.url,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "min-h-[44px] p-2.5 rounded-xl bg-white hover:bg-blue-50/70 border border-slate-200/80 hover:border-blue-200 text-slate-700 hover:text-blue-700 transition-all flex items-center gap-2 group text-xs font-medium shadow-2xs"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    className: "w-4 h-4 text-slate-500 group-hover:text-blue-600 transition-colors"
  }), /*#__PURE__*/React.createElement("span", {
    className: "truncate"
  }, s.platform)))))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-slate-950 mb-1"
  }, "Send a Direct Message"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500 mb-6"
  }, "Fill in the fields below. Messages are queued and handed off cleanly to the direct email client."), contactSuccess ? /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("h4", {
    className: "text-base font-bold text-emerald-900"
  }, "Message Prepared Successfully"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-emerald-800"
  }, "Handing off to your email client to send to ", /*#__PURE__*/React.createElement("strong", null, portfolioData.personalIdentity.email), "..."), /*#__PURE__*/React.createElement("button", {
    onClick: () => setContactSuccess(false),
    className: "text-xs font-semibold text-emerald-700 underline mt-2 block mx-auto"
  }, "Send another message")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: handleContactSubmit,
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-semibold text-slate-700 block mb-1"
  }, "Your Full Name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    required: true,
    placeholder: "e.g. Dr. Amina Bello",
    value: contactForm.name,
    onChange: e => setContactForm({
      ...contactForm,
      name: e.target.value
    }),
    className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-slate-50/50"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-semibold text-slate-700 block mb-1"
  }, "Email Address"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    required: true,
    placeholder: "e.g. amina@example.com",
    value: contactForm.email,
    onChange: e => setContactForm({
      ...contactForm,
      email: e.target.value
    }),
    className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-slate-50/50"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-semibold text-slate-700 block mb-1"
  }, "Subject / Project Scope"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "e.g. AI Engineering Collaboration / Advisory",
    value: contactForm.subject,
    onChange: e => setContactForm({
      ...contactForm,
      subject: e.target.value
    }),
    className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-slate-50/50"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-semibold text-slate-700 block mb-1"
  }, "Message Content"), /*#__PURE__*/React.createElement("textarea", {
    rows: 5,
    required: true,
    placeholder: "Describe what you are building, the technical challenge, or how we might collaborate...",
    value: contactForm.message,
    onChange: e => setContactForm({
      ...contactForm,
      message: e.target.value
    }),
    className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-slate-50/50 resize-y"
  })), /*#__PURE__*/React.createElement("div", {
    className: "pt-2 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-slate-500 font-mono"
  }, "Direct recipient: ", portfolioData.personalIdentity.email), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs tracking-wide uppercase transition-colors shadow-sm flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    className: "w-4 h-4"
  }), /*#__PURE__*/React.createElement("span", null, "Start a Conversation")))))))), /*#__PURE__*/React.createElement("footer", {
    className: "border-t border-slate-200 bg-white py-12 px-4 sm:px-6 lg:px-8 text-xs text-slate-600"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("img", {
    src: portfolioData.personalIdentity.avatarUrl,
    alt: "Muhammad Auwal Aliyu",
    className: "w-9 h-9 rounded-full object-cover ring-1 ring-slate-300"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-slate-900 text-sm"
  }, "Muhammad Auwal Aliyu (Abu Mus'ab)"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-500 text-xs"
  }, "Full-Stack AI Engineer | Technology Founder | Educator · Building technology that matters."))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 font-mono text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    className: "w-3.5 h-3.5 text-blue-600"
  }), /*#__PURE__*/React.createElement("span", null, currentWatTime || "WAT (Jos, Nigeria)")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/60"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
  }), /*#__PURE__*/React.createElement("span", null, "Offline-First PWA"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 text-xs"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }),
    className: "text-slate-500 hover:text-blue-600 transition-colors font-medium"
  }, "Back to Top ↑"), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-300"
  }, "|"), /*#__PURE__*/React.createElement("span", null, "© 2026 Muhammad Auwal Aliyu")))), activeProject && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-xl p-6 sm:p-8 relative"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveProject(null),
    className: "absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 mb-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-mono font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200"
  }, activeProject.category), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700"
  }, activeProject.status)), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-bold text-slate-950 tracking-tight mt-1 mb-1"
  }, activeProject.name), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-600 font-medium mb-6"
  }, activeProject.tagline), activeProject.previewImage && /*#__PURE__*/React.createElement("div", {
    className: "mb-6 rounded-xl border border-slate-200 overflow-hidden bg-slate-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-slate-900 text-white flex items-center justify-between text-xs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-semibold flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "image",
    className: "w-3.5 h-3.5 text-blue-400"
  }), /*#__PURE__*/React.createElement("span", null, "System Interface & Production Visual")), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400 font-mono text-[11px]"
  }, activeProject.previewImageCaption)), /*#__PURE__*/React.createElement("img", {
    src: activeProject.previewImage,
    alt: activeProject.name,
    className: "w-full max-h-80 object-contain mx-auto bg-white"
  })), activeProject.secondaryImage && /*#__PURE__*/React.createElement("div", {
    className: "mb-6 rounded-xl border border-slate-200 overflow-hidden bg-slate-50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-2.5 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs text-slate-700"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-semibold"
  }, activeProject.secondaryImageCaption), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-slate-500 font-mono"
  }, "Field Context")), /*#__PURE__*/React.createElement("img", {
    src: activeProject.secondaryImage,
    alt: activeProject.name,
    className: "w-full max-h-64 object-cover mx-auto"
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 text-sm text-slate-700"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-xs uppercase tracking-wider text-slate-500 font-bold block mb-1"
  }, "Problem Definition"), /*#__PURE__*/React.createElement("p", {
    className: "bg-slate-50 p-4 rounded-xl border border-slate-200/70 leading-relaxed"
  }, activeProject.problem)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-xs uppercase tracking-wider text-slate-500 font-bold block mb-1"
  }, "Engineering Solution"), /*#__PURE__*/React.createElement("p", {
    className: "bg-slate-50 p-4 rounded-xl border border-slate-200/70 leading-relaxed"
  }, activeProject.solution)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-xs uppercase tracking-wider text-slate-500 font-bold block mb-1"
  }, "Architectural Components"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, activeProject.keyArchitectureComponents.map((comp, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "p-3 rounded-lg bg-blue-50/50 border border-blue-100 text-xs text-slate-800 flex items-start gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-blue-600 font-bold mt-0.5"
  }, "▪"), /*#__PURE__*/React.createElement("span", null, comp))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-xs uppercase tracking-wider text-slate-500 font-bold block mb-1"
  }, "My Specific Contribution"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-700 leading-relaxed"
  }, activeProject.specificContribution)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-xs uppercase tracking-wider text-slate-500 font-bold block mb-2"
  }, "Technology Stack"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1.5"
  }, activeProject.technologies.map((t, idx) => /*#__PURE__*/React.createElement("span", {
    key: idx,
    className: "text-xs font-mono bg-slate-100 text-slate-800 px-2.5 py-1 rounded border border-slate-200"
  }, t)))), activeProject.diagramAsset && /*#__PURE__*/React.createElement("div", {
    className: "pt-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setActiveDiagram({
        title: activeProject.diagramTitle || activeProject.name,
        asset: activeProject.diagramAsset,
        type: activeProject.diagramType
      });
    },
    className: "w-full py-2.5 px-4 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-xs border border-blue-200 transition-colors flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zoom",
    className: "w-4 h-4"
  }), /*#__PURE__*/React.createElement("span", null, "Inspect System Architecture & Interface Photo"))), activeProject.githubUrl && /*#__PURE__*/React.createElement("div", {
    className: "pt-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: activeProject.githubUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "github",
    className: "w-4 h-4"
  }), /*#__PURE__*/React.createElement("span", null, "Visit Verified GitHub Repository")))))), activeDiagram && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-xs p-4 overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl max-w-5xl w-full max-h-[95vh] flex flex-col border border-slate-300 shadow-2xl overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 sm:p-5 bg-slate-900 text-white flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "text-base sm:text-lg font-bold tracking-tight"
  }, activeDiagram.title), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-400 font-mono"
  }, "Authentic System Architecture & Interface Artifact")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveDiagram(null),
    className: "p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    className: "w-5 h-5"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 p-4 bg-slate-100 overflow-auto flex items-center justify-center min-h-[300px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full max-h-[72vh] overflow-auto bg-white p-3 rounded-xl border border-slate-200 shadow-inner flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("img", {
    src: activeDiagram.asset,
    alt: activeDiagram.title,
    className: "max-w-full max-h-[68vh] object-contain mx-auto"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-600"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-[11px]"
  }, "Artifact: ", activeDiagram.asset), /*#__PURE__*/React.createElement("a", {
    href: activeDiagram.asset,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded font-semibold text-xs flex items-center gap-1"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "external",
    className: "w-3.5 h-3.5"
  }), /*#__PURE__*/React.createElement("span", null, "Open Full Size"))))), showCertificateModal && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-xs p-4 overflow-y-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl p-6 sm:p-8 relative"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowCertificateModal(false),
    className: "absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-center pb-6 border-b border-slate-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-3 border border-emerald-200"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "award",
    className: "w-3.5 h-3.5 text-emerald-600"
  }), /*#__PURE__*/React.createElement("span", null, "VERIFIED PROFESSIONAL CREDENTIAL")), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-bold text-slate-950 tracking-tight"
  }, "AI Engineer for Developers Associate"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500 font-mono mt-1"
  }, "Issued by DataCamp to ", /*#__PURE__*/React.createElement("strong", null, "Aliyu Muhammad auwal"))), /*#__PURE__*/React.createElement("div", {
    className: "my-6 p-6 rounded-xl border-2 border-slate-200 bg-[#FCFCFA] text-center shadow-inner relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-mono text-slate-400 uppercase tracking-widest mb-2"
  }, "CREDENTIAL ID: AIEDA0012468264105"), /*#__PURE__*/React.createElement("div", {
    className: "text-xl sm:text-2xl font-serif text-slate-900 tracking-wider font-semibold uppercase mb-4"
  }, "AI ENGINEER FOR DEVELOPERS ASSOCIATE"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-600 max-w-md mx-auto mb-4 leading-relaxed font-sans"
  }, "This confirms that ", /*#__PURE__*/React.createElement("strong", null, "Aliyu Muhammad auwal"), " has been certified as an AI Engineer for Developers Associate by DataCamp."), /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-mono text-slate-500 mb-6"
  }, "Certified on November 8, 2026"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pt-4 border-t border-slate-200/80 px-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-bold text-emerald-700 tracking-tight"
  }, "datacamp"), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-400"
  }, "Accredited Platform")), /*#__PURE__*/React.createElement("div", {
    className: "text-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-serif italic text-sm text-slate-800"
  }, "Jonathan Cornelissen"), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-400"
  }, "Chief Executive Officer, DataCamp")))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 text-xs"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/assets/certificates/datacamp-ai-engineer-associate.pdf",
    download: true,
    className: "w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-center block transition-colors flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download",
    className: "w-4 h-4"
  }), /*#__PURE__*/React.createElement("span", null, "Download Official Certificate PDF")), /*#__PURE__*/React.createElement("a", {
    href: "https://www.datacamp.com/certificate/AIEDA0012468264105",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-center block transition-colors"
  }, "Verify on DataCamp Registry (External)")))), activeArticle && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 relative"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveArticle(null),
    className: "absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 text-xs font-mono text-slate-500 mb-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded font-semibold"
  }, activeArticle.category), /*#__PURE__*/React.createElement("span", null, "•"), /*#__PURE__*/React.createElement("span", null, activeArticle.date), /*#__PURE__*/React.createElement("span", null, "•"), /*#__PURE__*/React.createElement("span", null, activeArticle.readTime)), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mt-1 mb-4"
  }, activeArticle.title), /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-xl bg-blue-50/70 border border-blue-200/60 mb-6 space-y-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-mono font-bold text-blue-900 uppercase tracking-wider block mb-1"
  }, "Executive Takeaways"), activeArticle.keyTakeaways.map((item, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "text-xs text-slate-800 flex items-start gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-blue-600 font-bold"
  }, "•"), /*#__PURE__*/React.createElement("span", null, item)))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-sans"
  }, activeArticle.content.map((para, idx) => /*#__PURE__*/React.createElement("p", {
    key: idx
  }, para))), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 pt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500"
  }, /*#__PURE__*/React.createElement("span", null, "Authored by Muhammad Auwal Aliyu (Abu Mus'ab)"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveArticle(null),
    className: "px-4 py-2 bg-slate-900 text-white rounded-lg font-semibold text-xs hover:bg-blue-600 transition-colors"
  }, "Close Essay")))), showCVModal && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 relative"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowCVModal(false),
    className: "absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-center pb-6 border-b border-slate-200 flex flex-col items-center"
  }, /*#__PURE__*/React.createElement("img", {
    src: portfolioData.personalIdentity.avatarUrl,
    alt: "Muhammad Auwal Aliyu",
    className: "w-16 h-16 rounded-full object-cover ring-2 ring-blue-600/20 mb-3 shadow-sm"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-extrabold text-slate-950 tracking-tight"
  }, "Muhammad Auwal Aliyu"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-semibold text-blue-700 uppercase tracking-wider mt-0.5"
  }, "Full-Stack AI Engineer | Technology Founder | Educator"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500 font-mono mt-1"
  }, "Jos, Plateau State, Nigeria · 08064753943 · aliyumuhammadauwal92@gmail.com")), /*#__PURE__*/React.createElement("div", {
    className: "my-6 space-y-6 text-xs sm:text-sm text-slate-700"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "text-xs font-bold uppercase tracking-wider text-slate-900 pb-1 border-b border-slate-200 mb-2"
  }, "Professional Summary"), /*#__PURE__*/React.createElement("p", {
    className: "leading-relaxed"
  }, "AI Systems Developer and Computer Science graduate focused on applying artificial intelligence to practical challenges. Experienced in building machine-learning solutions, working with large language models, and developing offline-first systems for resource-constrained environments. Combines deep expertise in multi-agent frameworks, quantized local LLMs, and robust backend architectures (FastAPI, PostgreSQL, Docker) to deliver production-ready AI applications. Proven leadership in technology community building, product strategy, and technical mentorship.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "text-xs font-bold uppercase tracking-wider text-slate-900 pb-1 border-b border-slate-200 mb-2"
  }, "Academic Credentials"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between font-bold text-slate-900"
  }, /*#__PURE__*/React.createElement("span", null, "Bachelor of Science in Computer Science"), /*#__PURE__*/React.createElement("span", null, "Class of 2026")), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-600"
  }, "Federal University of Technology, Babura (FUTB), Nigeria"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-semibold text-emerald-700 mt-0.5"
  }, "Cumulative Grade Point Average (CGPA): 4.79 / 5.00 (First Class Honours)")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "text-xs font-bold uppercase tracking-wider text-slate-900 pb-1 border-b border-slate-200 mb-2"
  }, "Selected Technical Positions"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between font-bold text-slate-900 text-xs"
  }, /*#__PURE__*/React.createElement("span", null, "Asabiyyah Technologies Ltd. · Co-Founder & CEO"), /*#__PURE__*/React.createElement("span", null, "Jos, Nigeria")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-600 mt-0.5"
  }, "Leading strategic product direction of Dila (offline-first community savings platform), zero-dependency double-entry SQLite ledger, edge scheduling, and hybrid SaaS architecture.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between font-bold text-slate-900 text-xs"
  }, /*#__PURE__*/React.createElement("span", null, "AMTIC Enterprises · Founder & CEO"), /*#__PURE__*/React.createElement("span", null, "Babura & Jos")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-600 mt-0.5"
  }, "Leading digital services, enterprise ICT systems, and document solutions.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between font-bold text-slate-900 text-xs"
  }, /*#__PURE__*/React.createElement("span", null, "Amana Academy · ICT Laboratory Technician & Instructor (SIWES)"), /*#__PURE__*/React.createElement("span", null, "Jos, Nigeria")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-600 mt-0.5"
  }, "Installed and configured over 200 computers for CBT laboratory network; Mathematics and ICT classroom teaching."))))), /*#__PURE__*/React.createElement("div", {
    className: "pt-4 border-t border-slate-200 flex items-center justify-between gap-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/assets/resume/muhammad-auwal-aliyu-cv.pdf",
    download: true,
    className: "w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs text-center transition-colors flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download",
    className: "w-4 h-4"
  }), /*#__PURE__*/React.createElement("span", null, "Download Official CV Document (PDF)"))))));
};

// Mount Root Element
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));

})();
