export interface NavLink {
  name: string;
  href: string;
  id: string;
}

export const navigationLinks: NavLink[] = [
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Education', href: '#education', id: 'education' },
  { name: 'Contact', href: '#contact', id: 'contact' }
];

export const navData = {
  logo: 'TA'
};
