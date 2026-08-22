import { Project, Skill, Metric } from '../types';
import { sourcefuseExperience } from './experience/sourcefuse';
import { hicxExperience } from './experience/hicx';
import { baswarePMExperience } from './experience/baswarePM';
import { baswareEngineerExperience } from './experience/baswareEngineer';
import { calculateTotalExperience, calculateProductManagementExperience } from '../lib/experienceCalculator';

// Combine all experiences
export const experiences = [
  sourcefuseExperience,
  hicxExperience,
  baswarePMExperience,
  baswareEngineerExperience
];

// Calculate total experience dynamically
const experienceSummary = calculateTotalExperience(experiences as any);
const pmExperienceSummary = calculateProductManagementExperience(experiences as any);

export const totalExperienceText = experienceSummary.formattedText;
export const totalYears = experienceSummary.totalYears;
export const totalMonths = experienceSummary.totalMonths;
export const pmExperienceText = pmExperienceSummary.formattedText;
export const pmYears = pmExperienceSummary.totalYears;

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

import { skillsData } from './skills';

export const skills: Skill[] = skillsData;

import { certifications } from './certifications';

export { certifications };

import { metricsData } from './metrics';

export const metrics: Metric[] = metricsData;

import { socialLinks as centralizedSocialLinks } from './contact';

export const socialLinks = centralizedSocialLinks;
