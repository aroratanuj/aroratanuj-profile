import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      // Check if we're at the top of the page
      if (scrollPosition < 300) {
        setActiveSection('home');
        return;
      }

      // Find which section is currently in view
      for (const link of navLinks) {
        if (link.id === 'home') continue; // Skip home, already handled above

        const element = document.getElementById(link.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Use scrollIntoView with smooth behavior
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);

      // Remove hash from URL if it exists
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        <div className="font-extrabold text-lg tracking-tight text-gray-900">
          <a
            href="#"
            onClick={(e) => handleNavClick(e, 'home')}
            className="no-underline text-gray-900 hover:text-primary transition-colors duration-300"
          >
            TA
          </a>
        </div>
        <ul className="flex gap-6 md:gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`text-sm font-semibold transition-all duration-300 no-underline relative py-2 inline-block ${
                    isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
