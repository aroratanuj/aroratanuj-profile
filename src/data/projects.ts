export interface Project {
  title: string;
  role: string;
  description: string;
  responsibilities: string[];
  impact: string;
  technologies: string[];
}

export const projectsData: Project[] = [
  {
    title: 'Invoice Processing- Procure to Pay',
    role: 'Scrum Resource / Scrum Master',
    description: 'Basware is one of the largest e-invoicing providers globally and provides full XML e-invoicing for both receiving and sending electronic invoices.',
    responsibilities: [
      'Module owner (Master, Fastscan, Setup)',
      'Developer',
      'Writing Technical specification',
      'Code Review',
      'Team task management',
      'Handling customer Escalations'
    ],
    impact: 'Reduced revenue leakage through real-time payment processing, improved project margins via data-driven resource allocation',
    technologies: ['AWS', 'SaaS', 'B2B', 'Cloud-Native', 'Automation']
  },
  {
    title: 'SXP – Supplier Experience Portal',
    role: 'Product Manager',
    description: 'HICX provides supplier management solutions to help some of the largest companies in the world build productive working relationships with all their suppliers by providing an integrated portal for their tasks across various ERP platforms.',
    responsibilities: [
      'Bug Triage',
      'Requirement analysis',
      'BRD and other Discovery phase documents',
      'Collaborating with stakeholders to ensure delivery according to the agreed DoD',
      'Liaison b/w teams, both external and internal, for cross-product collaboration'
    ],
    impact: 'Reduced customer deployment time from weeks to days, improved supplier onboarding and platform adoption',
    technologies: ['B2B SaaS', 'No-Code/Low-Code', 'ERP Integration', 'Workflow Automation']
  },
  {
    title: 'Travel & Expense Management Suite',
    role: 'Product Manager/Product Owner',
    description: 'Travel and Expense management system to track indirect spending. The system can handle complex organizational rules, workflows, and integration with ERP or other accounting systems.',
    responsibilities: [
      'Enabling the Agile team to deliver value to the business by converting the business requirements into functional specifications',
      'Collaborating with stakeholders to ensure delivery according to the agreed DoD',
      'Liaison b/w teams, both external and internal, for cross-product collaboration',
      'Regulator for the Dev team for all the issues/bugs coming from CS'
    ],
    impact: 'Reduced customer churn by 10%, cut expense processing time from 45 to 25 seconds',
    technologies: ['FinTech', 'AP Automation', 'Process Optimization', 'Multi-Product Suite']
  },
  {
    title: 'BaswareOne',
    role: 'Domain Expert',
    description: 'BaswareOne is another P2P solution by Basware, which enables small and medium enterprises to automate P2P workflows without getting too much complexity.',
    responsibilities: [
      'Work with the development team to design solutions that follow industry standards and best practices',
      'Review industry standards and regulations, then align them with the organization\'s current workflows and processes',
      'Ensure all solution designs and implementations meet compliance requirements and regulatory standards'
    ],
    impact: 'Improved P2P workflow automation for SMEs, enhanced solution design and compliance',
    technologies: ['P2P', 'SME Solutions', 'Workflow Automation', 'Compliance Management']
  }
];

export const projectsSectionData = {
  title: 'Featured Projects'
};
