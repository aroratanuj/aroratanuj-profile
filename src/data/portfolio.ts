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

import { projectsData } from './projects';

export const projects: Project[] = projectsData;

import { skillsData } from './skills';

export const skills: Skill[] = skillsData;

import { certifications } from './certifications';

export { certifications };

import { metricsData } from './metrics';

export const metrics: Metric[] = metricsData;

import { socialLinks as centralizedSocialLinks } from './contact';

export const socialLinks = centralizedSocialLinks;
