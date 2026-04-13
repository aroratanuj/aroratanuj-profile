import { contactInfo } from '../data/contact';
import { totalExperienceText, totalYears } from '../data/portfolio';

const Hero = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Remove hash from URL if it exists
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-indigo-50 py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6">
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span className="hidden sm:inline">Available for opportunities</span>
            <span className="sm:hidden">Available</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight mb-4 md:mb-6">
            Hi, I'm <span className="text-primary">{contactInfo.name}</span>
          </h1>

          <h2 className="text-base md:text-xl lg:text-2xl text-gray-600 font-semibold mb-4 md:mb-6">
            {contactInfo.title} | {totalExperienceText} in IT
          </h2>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
            Specializing in AI-enabled, analytics-driven, cloud-based products at scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8 justify-center lg:justify-start">
            <a
              href="#experience"
              onClick={(e) => handleSmoothScroll(e, 'experience')}
              className="bg-primary text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-semibold hover:bg-indigo-700 transition-all duration-300 no-underline shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              View Experience
            </a>
            <a
              href={contactInfo.resumePath}
              download={contactInfo.resumeFilename}
              className="bg-primary text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-semibold hover:bg-indigo-700 transition-all duration-300 no-underline shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-2"
            >
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="hidden sm:inline">Download Resume</span>
              <span className="sm:hidden">Resume</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm text-gray-500 justify-center lg:justify-start">
            <div className="flex items-center gap-1.5 md:gap-2">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-xs md:text-sm">{contactInfo.location}</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary no-underline font-medium text-xs md:text-sm">LinkedIn</a>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href={`mailto:${contactInfo.email}`} className="hover:text-primary no-underline text-xs md:text-sm">{contactInfo.email}</a>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="hover:text-primary no-underline text-xs md:text-sm">{contactInfo.phone}</a>
            </div>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative">
              <img
                src="/tanuj.png"
                alt={contactInfo.name}
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-96 xl:h-96 rounded-full object-cover object-top border-4 border-white shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
