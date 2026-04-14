import { contactInfo } from '../data/contact';

const FloatingButtons = () => {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Open WhatsApp smart URL (opens app on mobile, web on desktop) with English
    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}?text=Hi%20Tanuj,%20I%20would%20like%20to%20connect%20with%20you&lang=en`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Scroll to contact section
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed right-4 bottom-4 md:right-8 md:bottom-8 z-50 flex flex-col gap-3">
      {/* Download CV Button */}
      <a
        href={contactInfo.resumePath}
        download={contactInfo.resumeFilename}
        className="flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:shadow-xl hover:bg-indigo-700 transition-all duration-300 no-underline"
        title="Download CV"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </a>

      {/* Contact Button */}
      <a
        href="#contact"
        onClick={handleContactClick}
        className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 no-underline"
        title="Contact Me"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </a>
    </div>
  );
};

export default FloatingButtons;
