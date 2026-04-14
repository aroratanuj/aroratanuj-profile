export interface DomainExpertise {
  name: string;
  icon: string;
  description: string;
}

export const domainExpertiseData: DomainExpertise[] = [
  {
    name: 'Procurement',
    icon: '🛒',
    description: 'Strategic sourcing and vendor management'
  },
  {
    name: 'Invoicing',
    icon: '📄',
    description: 'AP automation and invoice processing'
  },
  {
    name: 'Procure to Pay',
    icon: '💳',
    description: 'End-to-end P2P workflow optimization'
  },
  {
    name: 'Sourcing (RFx & Contract Management)',
    icon: '📋',
    description: 'Strategic sourcing and contract lifecycle'
  },
  {
    name: 'FinTech',
    icon: '💰',
    description: 'Financial technology and payment systems'
  },
  {
    name: 'Professional Services Automation',
    icon: '⚡',
    description: 'PSA platforms and resource management'
  }
];

export const skillsSectionData = {
  title: 'Skills & Expertise',
  subtitle: 'Comprehensive toolkit for product management and technical leadership',
  domainExpertise: {
    title: 'Domain Expertise',
    subtitle: 'Specialized Industry Knowledge',
    description: 'Deep expertise across critical business processes and enterprise domains, delivering strategic value through comprehensive understanding of industry workflows and pain points.'
  }
};
