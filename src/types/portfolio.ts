export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: string;
  status: 'Working Prototype' | 'Hackathon Prototype' | 'Ongoing Security System' | 'Active Product Development' | 'Architecture Concept' | 'Field Prototype';
  statusBadgeColor: string;
  problem: string;
  solution: string;
  specificContribution: string;
  coreMessage: string;
  technologies: string[];
  keyArchitectureComponents: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  diagramAsset?: string;
  diagramType?: 'image' | 'svg';
  diagramTitle?: string;
  featured: boolean;
  contextNote?: string;
}

export interface SkillItem {
  name: string;
  context: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  skills: SkillItem[];
}

export interface ExperienceRole {
  id: string;
  title: string;
  organization: string;
  type: 'Executive & Entrepreneurship' | 'Community & Innovation' | 'Student Governance';
  location: string;
  period: string;
  current: boolean;
  description: string;
  philosophyOrMotto?: string;
  responsibilities: string[];
  badge: string;
}

export interface FellowshipProgram {
  id: string;
  title: string;
  organization: string;
  year: string;
  roleOrStatus: string;
  location?: string;
  description: string;
  focusAreas: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  certifiedDate?: string;
  verified: boolean;
  pdfAsset?: string;
  verificationUrl?: string;
  topics: string[];
}

export interface EducationInfo {
  institution: string;
  degree: string;
  graduationYear: string;
  academicStanding: string;
  cgpa: string;
  cgpaMax: string;
  statusNote: string;
  location: string;
  focusAreas: string[];
}

export interface TeachingExperience {
  id: string;
  institution: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  keyContributions: string[];
  impactMetric?: string;
}

export interface PhilosophyPrinciple {
  number: string;
  title: string;
  statement: string;
  elaboration: string;
  realWorldImpact: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  slug: string;
  summary: string;
  date: string;
  readTime: string;
  category: string;
  content: string[];
  keyTakeaways: string[];
}

export interface SocialLink {
  platform: string;
  handle: string;
  url: string;
  icon: string;
  note?: string;
}
