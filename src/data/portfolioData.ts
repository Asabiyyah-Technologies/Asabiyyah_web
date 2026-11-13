import {
  Project,
  SkillCategory,
  ExperienceRole,
  FellowshipProgram,
  Certification,
  EducationInfo,
  TeachingExperience,
  PhilosophyPrinciple,
  InsightArticle,
  SocialLink
} from '../types/portfolio';

export const personalIdentity = {
  fullName: "Muhammad Auwal Aliyu",
  publicName: "Abu Mus'ab",
  title: "Full-Stack AI Engineer & Technology Founder",
  headline: "Engineering intelligent systems. Building technology that matters.",
  supportingIntro: "I build intelligent software systems at the intersection of AI, engineering, and human-centred innovation. My work focuses on applied AI, agentic systems, and accessible digital solutions designed for real-world conditions — including environments where connectivity, computing resources, and language can be limiting factors.",
  credibilityLine: "Computer Science | Applied AI | Software Engineering | Entrepreneurship",
  centralPositioning: "A technology builder working at the intersection of Artificial Intelligence, Software Engineering, and Human-Centred Innovation.",
  corePhilosophy: "Building technology that works for people, not just ideal conditions.",
  brandStatement: "Building intelligent systems. Empowering people. Expanding possibilities.",
  location: "Jos, Plateau State, Nigeria",
  nationality: "Nigerian",
  languages: [
    { name: "English", level: "Professional & Academic" },
    { name: "Hausa", level: "Native & Multilingual AI Research" },
    { name: "Arabic", level: "Literate & Classical Competence" }
  ],
  email: "aliyumuhammadauwal92@gmail.com",
  phone: "+234 806 475 3943",
  openForOpportunities: "Available for Applied AI Engineering, Systems Architecture & Advisory"
};

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    handle: "Muhammad Auwal Aliyu",
    url: "https://www.linkedin.com/in/muhammad-auwal-aliyu-74a6ab208",
    icon: "linkedin",
    note: "Professional network & thought leadership"
  },
  {
    platform: "GitHub",
    handle: "MaAbumusAb",
    url: "https://github.com/MaAbumusAb",
    icon: "github",
    note: "Code repositories & open-source implementations"
  },
  {
    platform: "X (Twitter)",
    handle: "@M_A_Aliyu",
    url: "https://x.com/M_A_Aliyu",
    icon: "twitter",
    note: "AI engineering commentary & ecosystem updates"
  },
  {
    platform: "Facebook",
    handle: "Abu Mus'ab",
    url: "https://www.facebook.com/share/1CJXB7VaFA/",
    icon: "facebook",
    note: "Community engagement & tech education"
  },
  {
    platform: "TikTok",
    handle: "@abu_mus_ab",
    url: "https://www.tiktok.com/@abu_mus_ab?_r=1&_t=ZS-9BNXy2tko8Q",
    icon: "video",
    note: "Bilingual AI video explainers & tech tutorials"
  },
  {
    platform: "Instagram",
    handle: "@abu_mus_ab._",
    url: "https://www.instagram.com/abu_mus_ab._?psln=MWxtbXFpaGxrYjEydA==",
    icon: "instagram",
    note: "Builder updates & community moments"
  }
];

export const educationInfo: EducationInfo = {
  institution: "Federal University of Technology, Babura (FUTB)",
  degree: "Bachelor of Science in Computer Science",
  graduationYear: "Class of 2026",
  academicStanding: "First Class Honours",
  cgpa: "4.79",
  cgpaMax: "5.00",
  statusNote: "Awaiting formal degree conferment; completed academic curriculum with 4.79/5.00 cumulative grade point average.",
  location: "Babura, Jigawa State, Nigeria",
  focusAreas: [
    "Computer Science Fundamentals & Rigor",
    "Data Structures & Algorithms (DSA)",
    "Artificial Intelligence & Machine Learning",
    "Full-Stack Software Engineering",
    "Data Science & Statistical Analysis",
    "Cloud Computing & Distributed Systems",
    "Programming Languages & Systems Development",
    "Technical Project Management & Problem Solving"
  ]
};

export const verifiedCertifications: Certification[] = [
  {
    id: "datacamp-ai-eng",
    title: "AI Engineer for Developers Associate",
    issuer: "DataCamp",
    year: "2026",
    credentialId: "AIEDA0012468264105",
    certifiedDate: "November 8, 2026",
    verified: true,
    pdfAsset: "/assets/certificates/datacamp-ai-engineer-associate.pdf",
    verificationUrl: "https://www.datacamp.com/certificate/AIEDA0012468264105",
    topics: [
      "Large Language Models (LLM) Integration",
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering & Evaluation",
      "Model Quantization & Local Deployment",
      "AI Application Architecture with Python",
      "Model Routing & Context Management"
    ]
  },
  {
    id: "datacamp-ds-career",
    title: "Data Scientist in Python — Career Track",
    issuer: "DataCamp",
    year: "2026",
    verified: true,
    topics: [
      "Statistical Inference & Hypothesis Testing",
      "Machine Learning with scikit-learn",
      "Exploratory Data Analysis (EDA)",
      "Pandas & NumPy Scientific Stack",
      "Data Visualisation & Model Diagnostics"
    ]
  },
  {
    id: "datacamp-py-ds",
    title: "Python for Data Science",
    issuer: "DataCamp",
    year: "2024",
    verified: true,
    topics: ["Python Fundamentals", "Vectorized Operations", "Data Wrangling", "Analytical Workflows"]
  },
  {
    id: "kaggle-da",
    title: "Data Analysis Certification",
    issuer: "Kaggle",
    year: "2024",
    verified: true,
    topics: ["Data Cleansing", "Analytical Aggregations", "Visual Storytelling", "Jupyter Environments"]
  },
  {
    id: "w3schools-excel",
    title: "Excel Data & Systems Certification",
    issuer: "W3Schools",
    year: "2024",
    verified: true,
    topics: ["Structured Formulas", "Data Modeling", "Business Logic Modeling", "Pivot Analysis"]
  }
];

export const fellowshipsAndPrograms: FellowshipProgram[] = [
  {
    id: "undp-3mtt",
    title: "UNDP Graduate Fellowship in collaboration with 3MTT",
    organization: "United Nations Development Programme (UNDP) & Federal Ministry of Communications, Innovation and Digital Economy",
    year: "Current",
    roleOrStatus: "Fellow & Systems Engineer (Active)",
    location: "Hamzury Innovation Hub, Jos, Plateau State",
    description: "Serving as a graduate fellow deploying technical expertise to build digital capacity, mentor emerging software talents, and develop community-focused technological initiatives in Plateau State.",
    focusAreas: [
      "Applied AI Solutions for Local Challenges",
      "Ecosystem Mentorship & Skills Transfer",
      "Innovation Hub Technology Operations",
      "Digital Transformation for Northern Communities"
    ]
  },
  {
    id: "dsn-deeptech",
    title: "DeepTech Ready Programme",
    organization: "Data Science Nigeria (DSN)",
    year: "2025",
    roleOrStatus: "Selected Participant & Graduate",
    description: "Intensive selective training in advanced deep technology, AI development methodologies, and mathematical foundations of modern machine learning associated with the national 3MTT ecosystem.",
    focusAreas: [
      "Advanced Deep Learning Architectures",
      "Mathematical Foundations of AI",
      "Production ML Engineering",
      "Data Sovereignty & Applied Research"
    ]
  },
  {
    id: "3mtt-national",
    title: "Three Million Technical Talent (3MTT) Initiative",
    organization: "Federal Ministry of Communications, Innovation & Digital Economy",
    year: "2024 – 2026",
    roleOrStatus: "Cohort Member & Ecosystem Contributor",
    description: "Active contributor and participant in Nigeria's flagship technical talent initiative, championing software engineering excellence and peer learning cohorts.",
    focusAreas: [
      "Software Development Best Practices",
      "Collaborative Engineering",
      "Digital Public Infrastructure"
    ]
  }
];

export const practicalSkills: SkillCategory[] = [
  {
    id: "ai-ml",
    title: "Artificial Intelligence & Machine Learning",
    subtitle: "Applied AI, Agentic Workflows & Edge Models",
    icon: "cpu",
    skills: [
      { name: "Python for AI & Data Science", context: "Primary language for pipeline development, data transformation, and model orchestration." },
      { name: "Large Language Models (LLMs)", context: "Integration, system prompts, output validation, and provider abstraction." },
      { name: "Quantised & Local LLMs", context: "Deploying 4-bit/8-bit Qwen, Llama, and Mistral models on consumer laptops and edge nodes without internet." },
      { name: "Retrieval-Augmented Generation (RAG)", context: "Curriculum-grounded and domain-specific RAG with vector search (ChromaDB, FAISS) and reranking." },
      { name: "Agentic AI & Multi-Agent Workflows", context: "Coordinated agent architectures (Evidence, Root-Cause, Resolution) with function calling." },
      { name: "Speech Recognition (N-ATLAS)", context: "Integration of Nigerian speech models for voice-first multilingual user interfaces." },
      { name: "Prompt Engineering & Evaluation", context: "Systematic prompt design, defensive injection prevention, and deterministic structured outputs." },
      { name: "Machine Learning (scikit-learn)", context: "Supervised and unsupervised models, feature engineering, and model validation." },
      { name: "Model Evaluation & Benchmarking", context: "Task-based evaluation, accuracy checks, and pedagogical correctness assessment." }
    ]
  },
  {
    id: "backend-systems",
    title: "Backend & Systems Engineering",
    subtitle: "Robust APIs, Ledgers & Database Architecture",
    icon: "server",
    skills: [
      { name: "FastAPI", context: "High-performance asynchronous REST microservices and edge APIs with Pydantic validation." },
      { name: "Python Systems", context: "Modular service architecture, background workers, and automation scripting." },
      { name: "Flask", context: "Lightweight web services, rapid prototyping, and embedded tools." },
      { name: "PHP & Laravel", context: "Full-stack MVC applications, relational database management, and enterprise workflows." },
      { name: "Node.js & Express", context: "Event-driven backends, microservices, and asynchronous task coordinators." },
      { name: "PostgreSQL", context: "Relational modeling, JSONB fields, indexing, and transactional integrity." },
      { name: "SQLite", context: "Zero-dependency local database engine for offline-first, double-entry financial records." },
      { name: "MySQL", context: "Relational database schema design and legacy system integrations." },
      { name: "MongoDB", context: "Document-oriented schema management for flexible payloads." },
      { name: "Authentication & Security Architecture", context: "JWT, session security, role-based access control (RBAC), and audit logging." }
    ]
  },
  {
    id: "frontend-mobile",
    title: "Frontend & Mobile Development",
    subtitle: "Accessible Interfaces, PWAs & Mobile Apps",
    icon: "layout",
    skills: [
      { name: "React", context: "Component hierarchy, custom hooks, reactive state, and accessible single-page web applications." },
      { name: "TypeScript", context: "Strict static typing, contract safety, and maintainable enterprise codebases." },
      { name: "JavaScript (ESNext)", context: "Modern browser APIs, service workers, asynchronous I/O, and DOM manipulation." },
      { name: "Tailwind CSS", context: "Utility-first design systems, responsive mobile layouts, and restrained typography." },
      { name: "Progressive Web Apps (PWAs)", context: "Offline caching, service workers, and app-like installation on low-end smartphones." },
      { name: "Flutter", context: "Cross-platform mobile interfaces for Android devices with offline storage." },
      { name: "Java & Kotlin", context: "Native Android application development and system services integration." },
      { name: "Responsive & Accessible Web (WCAG)", context: "Semantic HTML, keyboard navigation, and high-contrast usability." }
    ]
  },
  {
    id: "data-analytics",
    title: "Data Science & Analytics",
    subtitle: "Data Pipelines, Insights & Visual Modeling",
    icon: "bar-chart-2",
    skills: [
      { name: "Pandas & NumPy", context: "Vectorized data manipulation, matrix operations, and tabular data cleansing." },
      { name: "Matplotlib & Seaborn", context: "Exploratory visual data modeling, publication graphs, and distribution plots." },
      { name: "Jupyter Notebooks", context: "Documented reproducible analytical workflows and experiment logging." },
      { name: "Power BI", context: "Interactive operational dashboards and institutional reporting models." },
      { name: "Tableau", context: "Visual business intelligence and multi-source KPI aggregations." },
      { name: "Double-Entry Ledger Modeling", context: "Strict debit/credit reconciliation models for community savings platforms." }
    ]
  },
  {
    id: "tools-devops",
    title: "Tools & Development Environment",
    subtitle: "Version Control, Edge Tooling & Creative Assets",
    icon: "terminal",
    skills: [
      { name: "Git & GitHub", context: "Branching strategies, collaborative pull requests, release tagging, and version tracking." },
      { name: "VS Code & JetBrains", context: "Configured developer environment with linting, typing, and debugging workflows." },
      { name: "Android Studio", context: "Mobile app building, profiling, and emulator testing." },
      { name: "Streamlit", context: "Rapid deployment of interactive AI and data prototypes for rapid client feedback." },
      { name: "Docker & Containerization", context: "Reproducible deployment environments for microservices and edge databases." },
      { name: "PixelLab, Canva & CapCut", context: "Designing UI assets, visual brand collateral, and educational video tutorials." },
      { name: "AI-Assisted Development Workflows", context: "Leveraging LLMs for test generation, code refactoring, and documentation." }
    ]
  }
];

export const featuredProjects: Project[] = [
  {
    id: "classgpt-n",
    name: "ClassGPT-N Framework",
    tagline: "Offline-First Hausa–English Multilingual Agentic AI Tutoring for SS1 ICT",
    category: "Applied AI | Educational Technology | Offline-First Systems",
    status: "Working Prototype",
    statusBadgeColor: "emerald",
    problem: "Secondary school students in Hausa-dominant communities face significant barriers when learning computer science and ICT: educational AI tutors are overwhelmingly English-only, depend on high-speed internet that is frequently unavailable or prohibitively expensive, and assume access to high-end laptops.",
    solution: "Designed and built an offline-first multilingual tutoring framework grounded directly in the Nigerian Educational Research and Development Council (NERDC 2025) SS1 ICT curriculum. The architecture runs a quantised Qwen2.5B language model locally on consumer hardware, integrates N-ATLAS speech recognition for voice interactions in Hausa and English, and tracks student mastery through an agent-agnostic state machine.",
    specificContribution: "Architected the end-to-end framework: quantized the local LLM for low-memory CPU/edge execution, designed the curriculum-grounded RAG chunking pipeline, implemented the bilingual prompt orchestration layer, and integrated local voice-to-text with N-ATLAS.",
    coreMessage: "Bringing intelligent, personalised learning closer to learners who are often excluded by connectivity and language barriers.",
    technologies: ["Python", "Quantised Qwen2.5B", "RAG Pipeline", "N-ATLAS Speech Recognition", "FastAPI", "SQLite", "NERDC 2025 ICT Curriculum", "Offline-First Architecture"],
    keyArchitectureComponents: [
      "Quantised Qwen2.5B Local LLM: Enables inference on modest edge hardware without cloud latency or subscription fees.",
      "Curriculum-Grounded RAG: Prevents hallucinations by bounding responses strictly within NERDC 2025 SS1 ICT syllabus nodes.",
      "Hausa–English Multilingual Engine: Seamlessly interprets questions in Hausa or Nigerian English and explains complex technical concepts bilingually.",
      "N-ATLAS Speech Integration: Allows voice interaction for auditory learners and students with limited keyboard fluency.",
      "Agent-Agnostic Learning State: Tracks mastery, misconceptions, and progress independently of any single foundation model."
    ],
    githubUrl: "https://github.com/MaAbumusAb/classgpt",
    featured: true,
    contextNote: "Active open-source research and engineering repository under continuous refinement."
  },
  {
    id: "resolveiq",
    name: "ResolveIQ",
    tagline: "Multi-Agent Autonomous Transaction Investigation Platform",
    category: "Agentic AI | Financial Technology",
    status: "Hackathon Prototype",
    statusBadgeColor: "blue",
    problem: "Modern financial institutions process millions of daily transactions. When transaction discrepancies, failed transfers, or reversals occur, manual support investigations create severe backlogs, customer frustration, and high operational expenditure.",
    solution: "Built for the prestigious Zenith Bank Zecathon 6.0, ResolveIQ coordinates specialised AI agents into an automated investigative workflow. Rather than relying on a single prompt, the system separates concerns into specialized agents: a Complaint Parser, an Evidence Collector, a Root-Cause Diagnostic Agent, and a Resolution Formulation Agent.",
    specificContribution: "Designed the multi-agent orchestration architecture, structured financial data evaluation routines, tool/function calling contracts, and automated resolution generation based on banking operational constraints.",
    coreMessage: "Exploring how coordinated AI agents can improve complex financial investigation workflows.",
    technologies: ["Python", "Multi-Agent Frameworks", "Function Calling", "Tool Calling", "Financial Schema Modeling", "FastAPI", "PostgreSQL"],
    keyArchitectureComponents: [
      "Evidence Agent: Programmatically calls banking APIs and ledger records to reconstruct transactional chronologies.",
      "Root-Cause Agent: Compares reconstructed logs against known failure modes (switch timeout, insufficient balance, token desync).",
      "Resolution Agent: Generates compliant customer explanations and drafts actionable reversal/escalation tickets.",
      "Structured Audit Trail: Logs every agent decision step to satisfy strict banking regulatory and audit standards."
    ],
    featured: true,
    contextNote: "Developed as a competition prototype for Zenith Bank Zecathon 6.0."
  },
  {
    id: "amana-shield",
    name: "Amana Shield",
    tagline: "Automated Electoral Scam & WhatsApp Phishing Detection Intelligence",
    category: "Applied AI | Cybersecurity | Digital Safety",
    status: "Ongoing Security System",
    statusBadgeColor: "purple",
    problem: "Vulnerable citizens and job seekers in Nigeria are relentlessly targeted by fraudulent WhatsApp forward messages, fake empowerment schemes, and impersonation domains designed to harvest personal information or steal funds.",
    solution: "Engineered an automated scam and phishing link detection intelligence system (AI4Elections 2026). The platform ingests forwarded WhatsApp messages, parses URLs, extracts domain metadata via DNS and RDAP queries, checks against trusted and untrusted registries, and produces structured LLM-assisted verdicts explaining threats in plain language.",
    specificContribution: "Authored the core FastAPI backend, designed the relational database schema for campaign tracking, implemented DNS/RDAP network enrichment modules, and authored procedural RAG prompts for electoral fact verification.",
    coreMessage: "Making digital safety more accessible to everyday users.",
    technologies: ["FastAPI", "Python", "WhatsApp Cloud API", "PostgreSQL", "RDAP/DNS Intelligence", "Structured LLM Verification", "Procedural RAG", "Alembic"],
    keyArchitectureComponents: [
      "WhatsApp Ingestion Engine: Receives suspicious forward messages directly from user mobile chats via webhooks.",
      "Network Domain Intelligence: Performs real-time RDAP registration age checks, DNS record validation, and registrar reputation scoring.",
      "Procedural RAG Against Verified Sources: Compares claims against official government and electoral databases.",
      "Structured Risk Scoring: Emits unambiguous risk classifications (Safe, Suspicious, Confirmed Threat) with plain-language rationales."
    ],
    diagramAsset: "/assets/projects/amana-shield-architecture.svg",
    diagramType: "svg",
    diagramTitle: "Amana Shield Entity Relationship & Threat Assessment Architecture",
    featured: true,
    contextNote: "Authentic system ER diagram available for technical inspection."
  },
  {
    id: "dila",
    name: "Dila (by Asabiyyah Technologies Ltd)",
    tagline: "Zero-Dependency Double-Entry Infrastructure for Community Savings Groups",
    category: "Fintech | Community Technology | Digital Inclusion",
    status: "Active Product Development",
    statusBadgeColor: "amber",
    problem: "Over 48 million Nigerian adults save in informal rotating community pools (Adashe, Esusu, Ajo). Reliance on physical notebooks and cash handoffs leads to ledger errors, lack of transparency, disputes, and zero legal or institutional recourse.",
    solution: "Dila (formerly Adashe) is a flagship product under Asabiyyah Technologies Ltd. It digitizes traditional community savings groups using zero-dependency, double-entry ledger principles on SQLite, custom printed QR collection posters, non-interest financial workflows, and accessible multilingual interfaces tailored to local community realities.",
    specificContribution: "As CEO & Co-Founder of Asabiyyah Technologies, led the strategic product direction, designed the double-entry accounting ledger schemas, formulated the offline-resilient edge sync strategy, and guided the brand architecture.",
    coreMessage: "Building practical digital infrastructure for community-based financial activities.",
    technologies: ["SQLite", "Double-Entry Bookkeeping", "Offline-First Sync", "FastAPI / NestJS", "QR Verification", "Multilingual UX (Hausa/English)", "Tailwind CSS"],
    keyArchitectureComponents: [
      "Strict Double-Entry Ledger: Code-enforced mathematical balance ensuring every contribution and payout has auditable debit/credit pairs.",
      "Offline-Resilient Edge Storage: Uses SQLite with localized caching so group leaders can record collections without network connectivity.",
      "Physical QR Collection Sheets: Bridges the physical and digital divide with scannable QR tokens for illiterate and informal savers.",
      "Non-Interest & Culturally Rooted Workflows: Built around ethical communal principles respecting Islamic finance and local traditions."
    ],
    diagramAsset: "/assets/brand/dila-primary.svg",
    diagramType: "svg",
    diagramTitle: "Dila Official Product Identity & Brand Architecture (Asabiyyah Technologies Ltd)",
    featured: true,
    contextNote: "Presented as a core product of Asabiyyah Technologies Ltd."
  },
  {
    id: "uspf-learning-hub",
    name: "USPF Learning Hub",
    tagline: "Edge-Native Offline Learning Infrastructure for Rural Schools",
    category: "Educational Technology | Offline-First Architecture",
    status: "Architecture Concept",
    statusBadgeColor: "indigo",
    problem: "Rural schools targeted by the Universal Service Provision Fund (USPF) frequently lack reliable broadband and electricity, leaving expensive computer laboratories underutilized and students cut off from digital learning resources.",
    solution: "Conceived for the USPF Changemaker Challenge, the USPF Learning Hub is an edge-native educational infrastructure model. It deploys a local edge micro-server (Raspberry Pi or localized server) running FastAPI, local SQLite data tracking, a ZPD (Zone of Proximal Development) orchestration engine, and a quantized edge LLM (Qwen) with local vector retrieval (FAISS/ChromaDB).",
    specificContribution: "Authored the system architecture, use case diagrams, and sequence flows illustrating offline assessment submission, local ZPD node calculations, and asynchronous regional cloud sync.",
    coreMessage: "Designing learning infrastructure for environments where connectivity cannot be taken for granted.",
    technologies: ["Raspberry Pi Edge Server", "FastAPI", "Local SQLite", "ChromaDB / FAISS", "Quantized Edge LLM (Qwen)", "React PWA", "Asynchronous Cloud Sync"],
    keyArchitectureComponents: [
      "Local Edge Server: Hosts all APIs, vector indices, and learning assets locally on the school's local Wi-Fi without internet.",
      "ZPD Orchestration Engine: Automatically calibrates student assessment difficulty and dynamically unlocks curriculum nodes.",
      "Asynchronous Cloud Sync: Queues telemetry and student logs locally, pushing updates to regional servers only when connectivity is detected.",
      "PWA Client Layer: Responsive web client cached via Service Workers on shared classroom tablets and PCs."
    ],
    diagramAsset: "/assets/projects/uspf-learning-hub-architecture.jpg",
    diagramType: "image",
    diagramTitle: "USPF Hackathon: Offline-First Learning Hub System Architecture & UML Diagrams",
    featured: true,
    contextNote: "Authentic hackathon UML and architecture specification diagram available."
  },
  {
    id: "cropshield-ai",
    name: "CropShield AI",
    tagline: "Early Potato Disease Detection for Plateau Smallholder Farmers",
    category: "AI for Agriculture | Mobile Technology",
    status: "Field Prototype",
    statusBadgeColor: "teal",
    problem: "Plateau State is Nigeria's potato agricultural hub, but late blight and viral infections devastate yields. Smallholder farmers lack immediate access to plant pathologists and reliable mobile internet in rural fields.",
    solution: "An edge-friendly computer vision and agricultural support solution designed to diagnose potato leaf pathogens on-device. CropShield AI combines a lightweight mobile diagnosis pipeline with offline treatment guidance in Hausa and English, providing actionable agronomic remedies immediately.",
    specificContribution: "Researched local Plateau farmer operating constraints, designed the lightweight model inference strategy, and shaped the multilingual advisory workflows.",
    coreMessage: "Applying AI to practical agricultural challenges in local communities.",
    technologies: ["Computer Vision", "Mobile Machine Learning", "Python Backend", "Offline Knowledge Base", "Hausa/English Agronomic Guide"],
    keyArchitectureComponents: [
      "Mobile On-Device Vision: Analyzes leaf imagery locally to detect blight symptoms without uploading high-res photos over cellular data.",
      "Localized Remediation Protocols: Delivers weather-aware spraying recommendations in Hausa and English.",
      "Offline Database of Agro-Dealers: Lists vetted local suppliers in Jos and surrounding local government areas."
    ],
    featured: true,
    contextNote: "Active exploratory prototype targeting local agricultural challenges in Plateau State."
  }
];

export const experienceRoles: ExperienceRole[] = [
  {
    id: "asabiyyah",
    title: "Chief Executive Officer & Co-Founder",
    organization: "Asabiyyah Technologies Ltd",
    type: "Executive & Entrepreneurship",
    location: "Jos, Plateau State, Nigeria",
    period: "2024 – Present",
    current: true,
    description: "Co-founded and leading an engineering-driven technology company building culturally rooted software, ethical financial infrastructure, and intelligent systems tailored to underserved communities across Africa.",
    philosophyOrMotto: "Ethical Finance. Empowered Communities.",
    responsibilities: [
      "Set strategic company vision, technological roadmap, and regulatory engagement for ethical financial products.",
      "Direct technical architecture of Dila, digitizing traditional rotating savings (Adashe) using double-entry ledger software.",
      "Lead cross-functional engineering efforts across backend services, edge databases, and accessible user interfaces.",
      "Cultivate commercial partnerships, community deployments, and institutional relationships."
    ],
    badge: "Co-Founder & CEO"
  },
  {
    id: "amtic-enterprises",
    title: "Founder & Chief Executive Officer",
    organization: "AMTIC Enterprises",
    type: "Executive & Entrepreneurship",
    location: "Babura & Jos, Nigeria",
    period: "2023 – Present",
    current: true,
    description: "Established a versatile digital enterprise focused on enterprise software solutions, ICT infrastructure, digital capacity development, and document systems.",
    philosophyOrMotto: "Excellence in Digital Implementation.",
    responsibilities: [
      "Oversee software consultancy projects, digital services, and institutional ICT support.",
      "Organized and delivered technical training programs in digital skills and computational thinking.",
      "Manage client engagements, operational delivery, and technical consulting."
    ],
    badge: "Founder & CEO"
  },
  {
    id: "futb-genius-hub",
    title: "Founder, Convener & Program Director",
    organization: "FUTB Genius Hub",
    type: "Community & Innovation",
    location: "Federal University of Technology Babura, Jigawa State",
    period: "2023 – 2026",
    current: false,
    description: "Founded and convened a premier student-led technology, engineering, and innovation community at FUTB to transition students from classroom theory to building tangible, production-ready systems.",
    philosophyOrMotto: "Learn. Build. Connect. Impact.",
    responsibilities: [
      "Designed and facilitated hands-on workshops in software engineering, AI, and project design.",
      "Organized peer hackathons, code clinics, and collaborative project demo days.",
      "Mentored hundreds of undergraduate students in algorithmic problem solving and technical career roadmaps.",
      "Built bridges between academic curriculum and global industry standards."
    ],
    badge: "Founder & Convener"
  },
  {
    id: "success-forge",
    title: "Founder & Community Lead",
    organization: "Success Forge",
    type: "Community & Innovation",
    location: "Nigeria",
    period: "2024 – Present",
    current: true,
    description: "Initiated a structured talent-development and mentorship framework committed to guiding ambitious youth from raw interest into verified domain expertise and reciprocal community mentorship.",
    philosophyOrMotto: "Talent → Development → Expertise → Contribution → Mentorship",
    responsibilities: [
      "Curate specialized learning tracks covering Python, Data Science, and Modern Web Development.",
      "Foster an intergenerational culture where experienced builders actively mentor subsequent cohorts.",
      "Track learner outcomes, milestone completions, and practical project builds."
    ],
    badge: "Founder & Lead"
  },
  {
    id: "nacos-president",
    title: "President",
    organization: "National Association of Computing Students (NACOS), FUTB Chapter",
    type: "Student Governance",
    location: "FUTB, Babura",
    period: "Previous Term",
    current: false,
    description: "Served as the elected president of the Computing Students' Association, representing student interests, championing academic excellence, and scaling department-wide technology initiatives.",
    responsibilities: [
      "Represented computing students across academic boards and institutional administration.",
      "Spearheaded technical bootcamps, departmental workshops, and academic tutorial sessions.",
      "Organized student developer competitions and industry guest lectures."
    ],
    badge: "Former President"
  },
  {
    id: "mssn-ameer",
    title: "Ameer II",
    organization: "Muslim Students' Society of Nigeria (MSSN), FUTB Chapter",
    type: "Student Governance",
    location: "FUTB, Babura",
    period: "Previous Term",
    current: false,
    description: "Provided ethical, community, and educational leadership to the student body, coordinating student welfare programs, educational seminars, and community service.",
    responsibilities: [
      "Coordinated welfare initiatives, academic support groups, and ethical mentorship.",
      "Facilitated inter-faculty dialogue, community outreach, and moral guidance."
    ],
    badge: "Leadership: Ameer II"
  },
  {
    id: "src-cps",
    title: "Chief Press Secretary",
    organization: "Students' Representative Council (SRC), FUTB",
    type: "Student Governance",
    location: "FUTB, Babura",
    period: "Previous Term",
    current: false,
    description: "Directed official institutional communications, public statements, and legislative press briefings for the apex student legislative council.",
    responsibilities: [
      "Authored official press releases and institutional circulars.",
      "Managed public information channels and maintained transparency between student governance and the student body."
    ],
    badge: "Former Chief Press Secretary"
  },
  {
    id: "napss-academics",
    title: "Director of Academics",
    organization: "National Association of Plateau State Students (NAPSS), FUTB Chapter",
    type: "Student Governance",
    location: "FUTB, Babura",
    period: "Previous Term",
    current: false,
    description: "Led academic support initiatives, exam preparations, and peer tutoring for Plateau State indigenous students across all university departments.",
    responsibilities: [
      "Organized tutorial sessions in foundational STEM courses and computational principles.",
      "Mentored junior students navigating undergraduate engineering transitions."
    ],
    badge: "Former Director of Academics"
  }
];

export const teachingImpact: TeachingExperience[] = [
  {
    id: "amana-academy",
    institution: "Amana Academy",
    role: "ICT Laboratory Technician & Instructor (SIWES)",
    location: "Jos, Plateau State, Nigeria",
    period: "SIWES Internship",
    summary: "Led technical operations and classroom instruction in a major secondary institution, bridging practical infrastructure engineering with high-impact secondary school teaching.",
    keyContributions: [
      "Installed, networked, and configured an enterprise-grade Computer-Based Testing (CBT) laboratory comprising over 200 client workstations.",
      "Administered client-server testing systems and resolved real-time network hardware, software, and power failover challenges.",
      "Taught Mathematics and ICT to senior secondary classes, breaking down computational concepts into memorable fundamentals.",
      "Explored digitization opportunities for school record management, grading systems, and examination logistics."
    ],
    impactMetric: "200+ Workstation CBT Lab Network Configured"
  },
  {
    id: "alhuda-school",
    institution: "Alhuda Private School",
    role: "Faculty Instructor (Academic Sessions & Holiday Intensives)",
    location: "Jos, Plateau State, Nigeria",
    period: "Multi-Term Engagement",
    summary: "Delivered comprehensive humanities and technology instruction across junior and senior secondary cohorts, fostering intellectual curiosity and critical reasoning.",
    keyContributions: [
      "Instructed classes in ICT, Civic & Heritage Studies, Nigerian History, and Literature in English.",
      "Developed interactive curricula connecting national history and civic responsibility with technological advancement.",
      "Mentored students in public speaking, analytical writing, and creative problem solving."
    ],
    impactMetric: "Secondary School Multidisciplinary Teaching"
  },
  {
    id: "islamtech-series",
    institution: "IslamTech with Abu Mus'ab",
    role: "Curriculum Creator & Lead Educator",
    location: "Online / Multilingual",
    period: "Ongoing",
    summary: "Created the 'Zero to AI Engineer: 30 Days. Two Languages. One Journey.' technical blueprint, delivering high-rigor AI engineering education in both Hausa and English.",
    keyContributions: [
      "Developed a 30-day structured syllabus covering Google Gen AI SDK, Gemini API, RAG, and agentic function calling.",
      "Authored bilingual technical explainers translating complex mathematical and transformer concepts into idiomatic Hausa.",
      "Demystified artificial intelligence engineering for thousands of youth through TikTok, Facebook, and community channels."
    ],
    impactMetric: "30-Day Bilingual AI Curriculum"
  }
];

export const engineeringPrinciples: PhilosophyPrinciple[] = [
  {
    number: "01",
    title: "Accessibility is an engineering requirement, not an afterthought",
    statement: "If a system requires gigabit fiber and flagship hardware to function, it excludes the vast majority of human beings.",
    elaboration: "Engineering for accessibility means treating latency, intermittent electrical power, cellular data costs, and memory limits as primary design constraints from the very first architectural sketch.",
    realWorldImpact: "Demonstrated in ClassGPT-N and USPF Learning Hub, which run local 4-bit quantised LLMs on modest consumer edge machines."
  },
  {
    number: "02",
    title: "AI should be useful beyond high-end hardware and reliable internet",
    statement: "Cloud-only artificial intelligence concentrates power; local edge AI distributes autonomy.",
    elaboration: "The most impactful AI applications are those that can execute on a classroom Raspberry Pi, an offline clinic laptop, or a community center workstation without depending on continuous transatlantic API calls.",
    realWorldImpact: "Implemented via local vector search with FAISS/ChromaDB and quantized Qwen models operating with zero internet dependence."
  },
  {
    number: "03",
    title: "Local languages deserve a place in the future of intelligent systems",
    statement: "Language is the operating system of human thought. A technology that cannot speak your language cannot truly empower your community.",
    elaboration: "Millions of intelligent learners in Northern Nigeria and West Africa think and communicate primarily in Hausa. Multilingual systems must treat local idioms, cultural metaphors, and dialectal nuances as first-class citizens, not second-tier translations.",
    realWorldImpact: "Realized through ClassGPT-N's bilingual Hausa-English curriculum grounding and N-ATLAS voice recognition integration."
  },
  {
    number: "04",
    title: "Good software solves actual problems, not simply demonstrates technical complexity",
    statement: "The value of an engineer is measured by the clarity and relief brought to users, never by architectural acrobatics.",
    elaboration: "We reject the temptation to add layers of fashionable frameworks when a well-modeled relational table and clear deterministic logic solve the client's problem more reliably, cheaply, and transparently.",
    realWorldImpact: "Exemplified in Dila's zero-dependency SQLite double-entry ledger, providing mathematical immutability without fragile cloud overhead."
  },
  {
    number: "05",
    title: "Technology should empower people rather than create unnecessary dependence",
    statement: "Tools should augment human judgment and communal resilience, not extract agency into black-box subscriptions.",
    elaboration: "Whether in financial groups (Adashe) or classroom teaching, software should make records transparent, give administrators clear audit trails, and elevate human decision-making with verifiable evidence.",
    realWorldImpact: "Evident in Amana Shield's plain-language explanations of phishing indicators, enabling users to evaluate threats critically."
  },
  {
    number: "06",
    title: "Learning is strongest when people build, experiment, and contribute",
    statement: "Theory without synthesis is fragile; true engineering mastery is forged when you ship working software into the wild.",
    elaboration: "Education is not passive consumption. The trajectory from learner to expert requires dirtying your hands with broken builds, missing dependencies, and real user feedback, followed immediately by teaching what you just learned.",
    realWorldImpact: "The foundational operating philosophy of FUTB Genius Hub and Success Forge: 'Talent → Development → Expertise → Contribution → Mentorship.'"
  }
];

export const insightArticles: InsightArticle[] = [
  {
    id: "offline-first-ai-africa",
    title: "Building Offline-First AI: Running Local Quantized Models Beyond the Power Grid",
    slug: "offline-first-ai-africa",
    summary: "Why cloud-dependent AI architectures fail rural schools and clinics in developing nations, and how modern 4-bit model quantization enables resilient on-premise intelligence.",
    date: "November 2026",
    readTime: "7 min read",
    category: "Edge AI & Systems Architecture",
    keyTakeaways: [
      "Intermittent electricity and costly bandwidth turn cloud-only AI applications into brittle liabilities.",
      "Quantizing open weights (Qwen2.5B, Llama 3.2 3B) down to GGUF 4-bit allows 15+ tokens/second inference on commodity CPUs.",
      "Local vector stores (ChromaDB / FAISS) can index complete educational syllabi within under 250MB of memory.",
      "Edge-native designs bridge the digital divide by distributing intelligence rather than centralizing it."
    ],
    content: [
      "In global technology hubs, conversations about artificial intelligence are dominated by trillion-parameter cluster scaling, gigawatt data centers, and multi-dollar monthly API subscriptions. But for an engineer working in Jos or Jigawa State, these assumptions dissolve the moment a rural school loses electrical power or mobile data costs spike beyond the monthly school budget.",
      "If artificial intelligence is to become a genuinely transformative civilizational tool rather than a luxury for well-connected capitals, we must architect systems for where people actually live. That means designing for intermittent connectivity, battery power, and modest consumer computers.",
      "Over the past year, while designing ClassGPT-N and the USPF Learning Hub, our engineering experiments proved that a quantized Qwen2.5B or Llama 3B model running locally via GGUF 4-bit precision achieves surprisingly high reasoning fidelity on secondary school curricula—at zero running API cost.",
      "By bounding local retrieval using SQLite and embedded FAISS vectors, we eliminate hallucinations and keep latency under 120ms per token on an ordinary Core i5 laptop without dedicated GPU hardware. This is not a compromise: it is a resilient engineering breakthrough."
    ]
  },
  {
    id: "multilingual-rag-hausa",
    title: "Multilingual AI Beyond English: Engineering Retrieval-Augmented Systems for Hausa Learners",
    slug: "multilingual-rag-hausa",
    summary: "Examining the linguistic failure modes of standard English embeddings when applied to Hausa technical discourse, and how hybrid tokenizers preserve conceptual meaning.",
    date: "October 2026",
    readTime: "8 min read",
    category: "Natural Language Processing",
    keyTakeaways: [
      "Standard tokenizers fragment Hausa words into excessive subwords, ballooning context costs and degrading semantic retrieval.",
      "Bilingual RAG requires curriculum-aligned terminology mapping to translate abstract concepts without semantic loss.",
      "Integrating voice-first pipelines (like N-ATLAS) unlocks accessibility for students who speak Hausa fluently but struggle with keyboard text entry.",
      "Local language inclusion is not an affirmative action gesture; it is the prerequisite for authentic pedagogical comprehension."
    ],
    content: [
      "Most contemporary foundation models are trained predominantly on English and European web corpora. When a Hausa learner attempts to ask an AI tutor how a CPU executes machine instructions, the model either forces an awkward English reply or constructs grammatically fractured Hausa that confuses rather than clarifies.",
      "In ClassGPT-N, we addressed this challenge by developing a bilingual conceptual knowledge fabric. Rather than relying on naive automated translations, we mapped the NERDC 2025 SS1 ICT syllabus nodes with dual-language glossaries and culturally resonant analogies.",
      "Furthermore, integrating Nigerian speech recognition models such as N-ATLAS allows students to ask questions via voice. In low-connectivity environments where typing on worn keyboards introduces friction, voice input is the natural equalizer.",
      "When a student hears a complex concept like 'memory addressing' explained cleanly in Hausa with familiar analogies, cognitive load drops, and genuine understanding takes root."
    ]
  },
  {
    id: "multi-agent-transaction-investigation",
    title: "Why Multi-Agent Choreography Beats Monolithic Prompts in Financial Investigations",
    slug: "multi-agent-transaction-investigation",
    summary: "Architectural lessons from building ResolveIQ for Zenith Bank Zecathon: orchestrating evidence collection, root-cause diagnostics, and resolution into auditable state machines.",
    date: "September 2026",
    readTime: "6 min read",
    category: "Agentic AI & FinTech",
    keyTakeaways: [
      "Single-prompt LLMs hallucinate explanations when presented with multi-source banking log dumps.",
      "Separating concerns into specialized agents (Evidence, Diagnostic, Resolution) enables deterministic verification at each stage.",
      "Banking systems demand strict audit logs where every tool invocation and intermediate assumption is immutably recorded.",
      "Agentic function calling bridges unstructured customer complaints with strict SQL and API core-banking ledgers."
    ],
    content: [
      "When a customer's debit card fails at a point-of-sale terminal but their account balance is debited, the customer service ticket touches multiple disparate systems: the card switch, inter-bank settlement queues, dispute logs, and core ledger balances.",
      "Attempting to feed these sprawling technical logs into a single large language model prompt inevitably leads to hallucinations, speculative diagnostics, and non-compliant customer messages.",
      "In building ResolveIQ for Zenith Bank Zecathon 6.0, we engineered a coordinated multi-agent state machine. The Evidence Agent programmatically queries specific microservices; the Diagnostic Agent performs deterministic rule checks against known settlement exceptions; and the Resolution Agent composes formal responses constrained by regulatory compliance rules.",
      "By maintaining strict JSON function calling interfaces between agents, we achieved both the flexibility of generative language models and the deterministic reliability demanded by enterprise finance."
    ]
  },
  {
    id: "talent-to-mentorship-lifecycle",
    title: "The Talent-to-Mentorship Engine: Why Community Infrastructure Must Precede Software",
    slug: "talent-to-mentorship-lifecycle",
    summary: "Reflections on founding FUTB Genius Hub and Success Forge: how cyclical peer mentorship builds sustainable technology ecosystems in emerging tech regions.",
    date: "August 2026",
    readTime: "5 min read",
    category: "Tech Ecosystem & Education",
    keyTakeaways: [
      "Software alone cannot solve the talent gap; trust and structured accountability come first.",
      "The lifecycle: Talent → Development → Expertise → Contribution → Mentorship.",
      "Undergraduate builders learn exponentially faster when building for local community needs rather than toy tutorials.",
      "A culture of open contribution transforms students from passive degree seekers into proactive technology founders."
    ],
    content: [
      "When we founded FUTB Genius Hub at the Federal University of Technology Babura, we observed a recurrent dilemma: students attended lecture halls, memorized computational definitions for examinations, yet struggled to build a basic deployed API or write clean, version-controlled code.",
      "The issue was never a lack of intellectual capability. It was the absence of a psychological scaffold that made building feel normal, acceptable, and collaborative.",
      "We instituted our operating philosophy: 'Learn. Build. Connect. Impact.' We eliminated solitary cramming and replaced it with communal build sprints, open-source contribution drives, and peer code reviews.",
      "Through Success Forge, we codified this into an intergenerational covenant: when a student reaches mastery in Python, FastAPI, or React, their very next responsibility is to mentor two junior students. This creates a compounding talent engine that outlasts any single academic session."
    ]
  }
];
