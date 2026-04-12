export const contactInfo = {
  name: 'Tanuj Arora',
  title: 'Product Manager',
  location: 'Chandigarh, India',
  email: 'tanujarora.mca@gmail.com',
  phone: '+91 9501112976',
  whatsapp: '+91 9418054201',
  linkedin: 'https://linkedin.com/in/tanuj-arora',
  github: 'https://github.com/aroratanuj',
  resumeFilename: 'Tanuj-Arora-Resume.pdf',
  resumePath: '/Tanuj-Arora-Resume.pdf'
};

export const socialLinks = [
  {
    platform: 'LinkedIn',
    url: contactInfo.linkedin,
    icon: 'linkedin'
  },
  {
    platform: 'WhatsApp',
    url: `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`,
    icon: 'whatsapp'
  },
  {
    platform: 'Email',
    url: `mailto:${contactInfo.email}`,
    icon: 'mail'
  },
  {
    platform: 'Phone',
    url: `tel:${contactInfo.phone.replace(/\s/g, '')}`,
    icon: 'phone'
  }
];
