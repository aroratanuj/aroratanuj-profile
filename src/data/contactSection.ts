export interface SocialLink {
  platform: string;
  url: string;
}

export const contactSectionData = {
  title: "Let's Work Together",
  description: "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!"
};

export const socialLinksData: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/tanuj-arora'
  },
  {
    platform: 'WhatsApp',
    url: 'https://wa.me/919418054201'
  },
  {
    platform: 'Email',
    url: 'mailto:tanutarora.mca@gmail.com'
  },
  {
    platform: 'Phone',
    url: 'tel:+919501112976'
  }
];
