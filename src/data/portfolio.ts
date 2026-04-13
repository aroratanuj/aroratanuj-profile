import { Project, Skill, Certification, Metric } from '../types';
import { sourcefuseExperience } from './experience/sourcefuse';
import { hicxExperience } from './experience/hicx';
import { baswarePMExperience } from './experience/baswarePM';
import { baswareEngineerExperience } from './experience/baswareEngineer';
import { calculateTotalExperience } from '../lib/experienceCalculator';

// Combine all experiences
export const experiences = [
  sourcefuseExperience,
  hicxExperience,
  baswarePMExperience,
  baswareEngineerExperience
];

// Calculate total experience dynamically
const experienceSummary = calculateTotalExperience(experiences as any);
export const totalExperienceText = experienceSummary.formattedText;
export const totalYears = experienceSummary.totalYears;
export const totalMonths = experienceSummary.totalMonths;

export const projects: Project[] = [
  {
    title: 'Professional Services Automation Platform',
    description: 'B2B SaaS platform for professional services automation with cloud-native solutions',
    impact: 'Reduced revenue leakage through real-time payment processing, improved project margins via data-driven resource allocation',
    technologies: ['AWS', 'SaaS', 'B2B', 'Cloud-Native', 'Automation']
  },
  {
    title: 'Supplier Experience Portal (SXP)',
    description: 'Enterprise supplier management platform with no-code/low-code capabilities for multi-ERP customers',
    impact: 'Reduced customer deployment time from weeks to days, improved supplier onboarding and platform adoption',
    technologies: ['B2B SaaS', 'No-Code/Low-Code', 'ERP Integration', 'Workflow Automation']
  },
  {
    title: 'Travel & Expense Management Suite',
    description: 'Comprehensive T&E management platform for enterprise CFOs with invoice processing and digitization',
    impact: 'Reduced customer churn by 10%, cut expense processing time from 45 to 25 seconds',
    technologies: ['FinTech', 'AP Automation', 'Process Optimization', 'Multi-Product Suite']
  },
  {
    title: 'Automated Testing Framework',
    description: 'Comprehensive testing frameworks for web and desktop applications to enhance delivery efficiency',
    impact: 'Improved release verification and product closure processes, enhanced agile development efficiency',
    technologies: ['Testing Automation', 'Web & Desktop Apps', 'Agile Development', 'Quality Assurance']
  }
];

export const skills: Skill[] = [
  {
    category: 'Product Management',
    skills: ['Product Management', 'Requirement Gathering', 'Market Analysis', 'Roadmap Planning', 'Prioritization', 'Ideation', 'Product Lifecycle Management']
  },
  {
    category: 'Leadership & Collaboration',
    skills: ['Cross-functional Collaboration', 'Stakeholder Management', 'Customer Feedback Loop', 'Risk Management', 'Critical Thinking', 'Decision-Making']
  },
  {
    category: 'Technical & Development',
    skills: ['Quality Assurance', 'Usability Testing', 'Prototyping', 'B2B SaaS', 'Agile Delivery', 'AI-Enabled Products', 'Cloud-Based Products']
  },
  {
    category: 'Professional Skills',
    skills: ['Continuous Learning', 'Problem-Solving', 'Revenue Cycle Workflows', 'Backlog Ownership', 'Sprint Planning', 'Feature Acceptance']
  }
];

export const certifications: Certification[] = [
  {
    name: 'Certified SAFe® 5 PO/PM',
    issuer: 'Scaled Agile',
    year: '2021'
  },
  {
    name: 'Certified Product Owner',
    issuer: 'Scrum Alliance',
    year: '2017'
  },
  {
    name: 'Certified Scrum Master',
    issuer: 'Scrum Alliance',
    year: '2015'
  },
  {
    name: 'ITIL v5 Foundation',
    issuer: 'APMG International',
    year: '2013'
  }
];

export const metrics: Metric[] = [
  { value: '4', label: 'Products Launched' },
  { value: '4', label: 'Companies' },
  { value: '95%', label: 'Customer Satisfaction' },
  { value: '10%', label: 'Churn Reduction' },
  { value: '44%', label: 'Efficiency Gain' }
];

import { socialLinks as centralizedSocialLinks } from './contact';

export const socialLinks = centralizedSocialLinks;
