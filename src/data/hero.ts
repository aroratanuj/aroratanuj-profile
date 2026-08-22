import { totalExperienceText } from './portfolio';
import { pmExperienceText } from './portfolio';

export const heroData = {
  // Hero heading text
  title: 'Product Leader | {totalExperience} in IT | {pmExperience} in Product Management',
  description: 'Specializing in AI-enabled, analytics-driven, cloud-based products at scale.',

  // Availability badge
  availability: {
    fullText: 'Available for opportunities',
    shortText: 'Available'
  },

  // About Me section
  aboutMe: {
    title: 'About Me',
    paragraphs: [
      {
        text: 'Product Manager with {totalExperience} of IT experience and {pmExperience} in product ownership and product management for enterprise B2B SaaS platforms. Proven ability to translate complex business needs into epics, user stories, and acceptance criteria, delivering AI-enabled, analytics-driven, cloud-based products at scale.',
        highlighted: ['{totalExperience}', '{pmExperience}', 'enterprise B2B SaaS platforms', 'epics, user stories, and acceptance criteria', 'AI-enabled, analytics-driven, cloud-based products']
      },
      {
        text: 'Extensive experience in revenue cycle–like operational workflows, requirements analysis, backlog ownership, sprint planning, and feature acceptance. Skilled at working as a proxy PM for offshore scrum teams, bridging business strategy and technical execution across distributed engineering organizations.',
        highlighted: ['revenue cycle–like operational workflows', 'backlog ownership, sprint planning, and feature acceptance', 'proxy PM for offshore scrum teams']
      },
      {
        text: 'Strong collaborator across product, engineering, data, and operations, with a consistent track record of driving on-time, high-quality releases that translate into measurable business outcomes — from reducing customer churn by 10% to improving process efficiency by 44%.',
        highlighted: ['product, engineering, data, and operations', 'on-time, high-quality releases', 'reducing customer churn by 10%', 'improving process efficiency by 44%']
      }
    ]
  },

  // Key Areas of Expertise
  keyAreas: {
    title: 'Key Areas of Expertise',
    areas: [
      'AI-enabled Products',
      'Analytics-driven Solutions',
      'Cloud-based Products at Scale',
      'Enterprise B2B SaaS Platforms',
      'Cross-functional Team Leadership',
      'Agile Delivery Methodologies',
      'Complete Source to Pay domain (Sourcing, Procurement, Invoicing)',
      'Supplier Master Data Management'
    ]
  },

  // Quick Facts
  quickFacts: {
    title: 'Quick Facts',
    facts: [
      {
        icon: 'check',
        value: '4 Products',
        description: 'Successfully Launched'
      },
      {
        icon: 'trending-up',
        value: '10% Churn',
        description: 'Reduction Achieved'
      },
      {
        icon: 'clock',
        value: '44% Faster',
        description: 'Process Efficiency'
      },
      {
        icon: 'certificate',
        value: '11 Certifications',
        description: 'Professional Credentials'
      }
    ]
  }
};

// Helper function to replace placeholders
export const getHeroTitle = () => {
  return heroData.title
    .replace('{totalExperience}', totalExperienceText)
    .replace('{pmExperience}', pmExperienceText);
};

export const getAboutMeParagraphs = () => {
  return heroData.aboutMe.paragraphs.map(para => ({
    text: para.text
      .replace('{totalExperience}', totalExperienceText)
      .replace('{pmExperience}', pmExperienceText),
    highlighted: para.highlighted
  }));
};
