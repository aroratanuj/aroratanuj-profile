export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
  achievements: string[];
  website?: string;
  startDate?: string;
  endDate?: string;
}

export interface Project {
  title: string;
  description: string;
  impact: string;
  technologies: string[];
}

export interface Skill {
  category: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
