import { contactInfo } from '../data/contact';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 text-center border-t border-gray-200 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-gray-900 font-semibold text-base mb-2">
          &copy; {currentYear} {contactInfo.name}. All rights reserved.
        </p>
        <p className="text-gray-600 text-sm mb-3">
          {contactInfo.location} | {contactInfo.email} | {contactInfo.phone}
        </p>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-gray-500 text-xs italic">
            Built with Claude Code - where AI meets creativity (and I just said "yes" to everything) ✨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
