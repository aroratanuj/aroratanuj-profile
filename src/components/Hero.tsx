import { contactInfo } from '../data/contact';
import { heroData, getHeroTitle, getAboutMeParagraphs } from '../data/hero';

const Hero = () => {
  const heroTitle = getHeroTitle();
  const aboutMeParagraphs = getAboutMeParagraphs();

  // Function to highlight text
  const highlightText = (text: string, highlights: string[]) => {
    let result = text;
    highlights.forEach(highlight => {
      // Escape special regex characters
      const escaped = highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(${escaped})`, 'gi');
      result = result.replace(regex, '<strong class="text-primary">$1</strong>');
    });
    return result;
  };

  return (
    <section id="about" className="min-h-screen flex items-start bg-gradient-to-br from-slate-50 via-white to-indigo-50 pt-6 md:pt-8 lg:pt-10 pb-6 md:pb-8">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Top Section - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center mb-8 md:mb-10 lg:mb-12">
          {/* Left - Hi Text + Description (60%) */}
          <div className="order-2 lg:order-1 lg:col-span-7 text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-3 md:mb-4">
              Hi, I'm <span className="text-primary">{contactInfo.name}</span>
            </h1>

            <h2 className="text-sm md:text-base lg:text-lg text-gray-600 font-semibold mb-3 md:mb-4">
              {heroTitle}
            </h2>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {heroData.description}
            </p>
          </div>

          {/* Right - Image + Available Text (40%) */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative mb-3 md:mb-4">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative">
                <img
                  src="/tanuj.png"
                  alt="Tanuj Arora - Product Manager with 18+ years of IT experience and 10+ years in product management, specializing in AI-enabled, analytics-driven, cloud-based B2B SaaS products"
                  className="w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 rounded-full object-cover object-top border-4 border-white shadow-2xl"
                  loading="eager"
                />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold">
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span className="hidden sm:inline">{heroData.availability.fullText}</span>
              <span className="sm:hidden">{heroData.availability.shortText}</span>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="mb-8 md:mb-10 lg:mb-12">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 mb-3 md:mb-4 text-center md:text-left">
            {heroData.aboutMe.title}
          </h3>

          <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700 leading-relaxed text-justify">
            {aboutMeParagraphs.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: highlightText(paragraph.text, paragraph.highlighted) }} />
            ))}
          </div>
        </div>

        {/* Bottom Section - Key Areas + Quick Facts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
          {/* Key Areas of Expertise (7 columns - wider) */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 mb-3 md:mb-4 text-center md:text-left">
              {heroData.keyAreas.title}
            </h3>
            <div className="bg-white border-2 border-gray-200 rounded-2xl md:rounded-3xl p-4 md:p-6 flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-2">
                {heroData.keyAreas.areas.map((expertise, index) => (
                  <div key={index} className="flex items-center gap-2 md:gap-3 bg-indigo-50 px-3 md:px-4 py-2 md:py-3 rounded-xl">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full flex-shrink-0"></span>
                    <span className="text-gray-700 text-xs md:text-sm font-medium">{expertise}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Facts (5 columns - narrower) */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 mb-3 md:mb-4 text-center md:text-left">
              {heroData.quickFacts.title}
            </h3>
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl md:rounded-3xl p-4 md:p-6 text-white flex-1">
              <div className="space-y-2 md:space-y-3">
                {heroData.quickFacts.facts.map((fact, index) => (
                  <div key={index} className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      {fact.icon === 'check' && (
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {fact.icon === 'trending-up' && (
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      )}
                      {fact.icon === 'clock' && (
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {fact.icon === 'certificate' && (
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <div className="font-bold text-sm md:text-base">{fact.value}</div>
                      <div className="text-xs md:text-sm text-white/80">{fact.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
