import { Experience, Project, Skill, Certification, Metric } from '../types';
import { socialLinks as centralizedSocialLinks } from './contact';

export const experiences: Experience[] = [
  {
    company: 'SourceFuse India Pvt. Ltd',
    position: 'Product Manager',
    duration: 'August 2024 – Present',
    description: 'Strategic digital transformation company, AWS Premier Tier Services Partner focused on cloud-native SaaS solutions. Driving product roadmap for Professional Services Automation (PSA) B2B SaaS platform.',
    website: 'https://www.sourcefuse.com/',
    achievements: [
      'Drive product roadmap for a Professional Services Automation (PSA) B2B SaaS platform',
      'Lead sprint planning, backlog management, and retrospectives for cross-functional teams',
      'Partner with engineering to explore technical innovations and system integrations',
      'Collaborate with design/engineering to validate user needs via discovery research',
      'Work with customer success to integrate user feedback into product decisions',
      'Define success metrics and monitor product adoption for continuous iteration',
      'Zoho Books Integration: Real-time payment processing that reduced revenue leakage and accelerated billing cycles',
      'Team Configuration Module: Automated staffing solution improving project margins through data-driven resource allocation',
      'Owned full product lifecycle from requirements through release readiness and UAT'
    ]
  },
  {
    company: 'HICX',
    position: 'Product Manager (Remote)',
    duration: 'July 2023 – August 2024',
    description: 'Enterprise supplier management via no-code/low-code B2B SaaS, serving multi-ERP customers. Led product launch strategy for enhanced Supplier Experience Portal (SXP).',
    website: 'https://www.hicx.com/',
    achievements: [
      'Led product launch strategy for enhanced Supplier Experience Portal (SXP)',
      'Collaborated with product marketing on sales enablement and market positioning',
      'Managed beta programs to validate product-market fit',
      'Generic Widget Library: Reduced customer deployment time from weeks to days',
      'In-app Messaging System: Improved supplier onboarding and platform adoption',
      'Integrated Workflow System: Initiated project management features via customer validation'
    ]
  },
  {
    company: 'Basware',
    position: 'Product Manager',
    duration: 'October 2016 – July 2023',
    description: 'Fintech/AP automation company focused on invoice processing, digitization, and country compliance for enterprise CFOs. Owned product roadmap for Travel & Expense (T&E) management suite across 3 products.',
    website: 'https://www.basware.com/en/',
    achievements: [
      'Owned product roadmap for Travel & Expense (T&E) management suite across 3 products',
      'Led cross-functional collaboration with UX, engineering, and customer experience teams',
      'Coordinated product development across multiple time zones with agile delivery',
      'Automated Dashboard: Personalized UI that reduced admin access times',
      'Legacy System Migration: Modernized T&E platform, reducing customer churn by 10%',
      'Process Optimization: Rule-based automation cut expense processing time from 45 to 25 seconds'
    ]
  },
  {
    company: 'Basware',
    position: 'Lead Software Engineer',
    duration: 'November 2008 – September 2016',
    description: 'Epic Owner for release verification, sprint testing, and product closure. Built automated testing frameworks for web and desktop applications.',
    website: 'https://www.basware.com/en/',
    achievements: [
      'Epic Owner for release verification, sprint testing, and product closure',
      'Built automated testing frameworks for web and desktop applications',
      'Enhanced agile development processes and delivery efficiency with scrum teams'
    ]
  }
];

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
  { value: '16+', label: 'Years in IT' },
  { value: '7+', label: 'Years in Product Management' },
  { value: '3+', label: 'Major Product Releases' },
  { value: '60%', label: 'Processing Time Reduction' },
  { value: '10%', label: 'Customer Churn Reduction' }
];

export const socialLinks = centralizedSocialLinks;
