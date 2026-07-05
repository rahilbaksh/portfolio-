export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  features: string[];
  metrics: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  featured?: boolean;
  image?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  highlights: string[];
  tags: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  icon?: string;
}

export interface Achievement {
  value: number;
  suffix: string;
  label: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
