export interface Skill {
  category: string;
  skills: string[];
}

export const skillsData: Skill[] = [
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
