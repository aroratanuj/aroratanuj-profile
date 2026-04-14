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
        text: 'Visionary Product Leader and Strategic innovator with an excellent track record of {totalExperience} architecting and deploying transformative B2B SaaS solutions. Demonstrated expertise in orchestrating cross-functional ecosystems to deliver mission-critical procurement and spend management platforms that drive organizational value and competitive differentiation.',
        highlighted: ['Visionary Product Leader', 'Strategic innovator', '{totalExperience}', 'transformative B2B SaaS solutions', 'cross-functional ecosystems', 'procurement and spend management platforms']
      },
      {
        text: 'Seasoned practitioner in the strategic sourcing, procurement, and invoicing domains, with proven mastery in designing sophisticated end-to-end workflows- encompassing vendor selection and RFx management, purchase order orchestration, contract administration, e-invoicing compliance, and automated PO-Invoice reconciliation.',
        highlighted: ['strategic sourcing, procurement, and invoicing domains', 'end-to-end workflows', 'vendor selection and RFx management', 'purchase order orchestration', 'e-invoicing compliance', 'automated PO-Invoice reconciliation']
      },
      {
        text: 'Recognized for translating complex business imperatives into elegant product solutions that empower enterprises to achieve operational excellence, cost optimization, and strategic supplier partnerships. A catalyst for innovation who bridges the intersection of technology, commerce, and organizational strategy to unlock exponential growth trajectories.',
        highlighted: ['elegant product solutions', 'operational excellence', 'cost optimization', 'strategic supplier partnerships', 'technology, commerce, and organizational strategy']
      }
    ]
  },

  // Key Areas of Expertise
  keyAreas: {
    title: 'Key Areas of Expertise',
    areas: [
      'AI-enabled products',
      'Analytics-driven solutions',
      'Cloud-based products at scale',
      'Enterprise B2B SaaS platforms',
      'Cross-functional team leadership',
      'Agile delivery methodologies',
      'Complete Source to Pay domain (Sourcing, Procurement, Invoicing)',
      'Supplier master data management'
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
        value: '10 Certifications',
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
