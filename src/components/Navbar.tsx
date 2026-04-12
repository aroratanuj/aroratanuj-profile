const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        <div className="font-extrabold text-lg tracking-tight text-gray-900">
          TA
        </div>
        <ul className="flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-600 no-underline text-sm font-semibold hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all duration-300 no-underline shadow-md hover:shadow-lg"
            >
              Let's Connect
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
