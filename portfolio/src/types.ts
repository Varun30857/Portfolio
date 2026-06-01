export interface StatItem {
  label: string;
  value: string;
  description: string;
}

export interface SkillItem {
  name: string;
  level: string;
  percentage: number;
  category: 'Programming Languages' | 'Frontend Development' | 'Backend Development' | 'Databases' | 'Cloud & Tools';
}

export interface ProjectItem {
  title: string;
  category: string;
  tagline: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  achievements: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  iconName: string;
}

export interface AboutData {
  name: string;
  title: string;
  subtitle: string;
  college: string;
  bio: string;
  goal: string;
  stats: StatItem[];
  skills: SkillItem[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  services: ServiceItem[];
}


