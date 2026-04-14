export interface Certification {
  name: string;
  issuer: string;
  year: string;
  verificationUrl: string;
  credentialId?: string;
}

export const certifications: Certification[] = [
  {
    name: 'Certified Scrum Master (CSM)',
    issuer: 'Scrum Alliance',
    year: '2015',
    verificationUrl: 'https://bcert.me/bc/html/show-badge.html?b=zegwmqh',
    credentialId: 'zegwmqh'
  },
  {
    name: 'Certified Scrum Product Owner (CSPO)',
    issuer: 'Scrum Alliance',
    year: '2017',
    verificationUrl: 'https://bcert.me/bc/html/show-badge.html?b=szqihqf',
    credentialId: 'szqihqf'
  },
  {
    name: 'ITIL v5 Foundation',
    issuer: 'APMG International',
    year: '2013',
    verificationUrl: 'https://drive.google.com/file/d/0B4qRi3nHL6KPZXlYRTNOMUxfQXc/view?usp=sharing&resourcekey=0-THQcccqsb7jr9dyG8LNhGQ'
  },
  {
    name: 'Generative AI Overview for Project Managers',
    issuer: 'Credly',
    year: '2025',
    verificationUrl: 'https://www.credly.com/badges/8a3d6e33-3407-43e7-925a-7364fe9a4606/linked_in_profile',
    credentialId: '8a3d6e33-3407-43e7-925a-7364fe9a4606'
  },
  {
    name: 'Agile Coaching Skills',
    issuer: 'Scrum Alliance, Inc.',
    year: '2025',
    verificationUrl: 'https://bcert.me/bc/html/show-badge.html?b=nvkwfgll',
    credentialId: 'nvkwfgll'
  },
  {
    name: 'Machine Learning Foundations for Product Managers',
    issuer: 'Duke University',
    year: '2025',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/VABCIR3QVYGF',
    credentialId: 'VABCIR3QVYGF'
  },
  {
    name: 'Google UX Design Professional Certificate (v2)',
    issuer: 'Google / Coursera',
    year: '2025',
    verificationUrl: 'https://www.credly.com/badges/09287bfb-5995-461a-ab19-7c949b85d80d/linked_in_profile',
    credentialId: '09287bfb-5995-461a-ab19-7c949b85d80d'
  },
  {
    name: 'Leadership Skills',
    issuer: 'IIMA - IIM Ahmedabad',
    year: '2025',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/WREFPTKS5SW6',
    credentialId: 'WREFPTKS5SW6'
  },
  {
    name: 'Databricks Certified Generative AI Engineer Associate',
    issuer: 'Databricks Academy',
    year: '2026',
    verificationUrl: 'https://credentials.databricks.com/8e098a76-10ef-4f95-b23f-f14b4077d824#acc.OSvRXG0o',
    credentialId: '8e098a76-10ef-4f95-b23f-f14b4077d824'
  },
  {
    name: 'AI Product Management',
    issuer: 'Duke University',
    year: '2026',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/specialization/certificate/A3XRWSCNJMOT',
    credentialId: 'A3XRWSCNJMOT'
  }
];
