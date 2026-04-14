import { contactInfo } from '../data/contact';
import { totalExperienceText, pmExperienceText } from '../data/portfolio';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-start bg-gradient-to-br from-slate-50 via-white to-indigo-50 pt-16 md:pt-20 pb-8">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
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

          {/* About Me Content */}
          <div className="mt-8 text-left">
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
              About Me
            </h3>

            <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
              <p>
                Product Manager with <strong className="text-primary">{totalExperienceText} in IT</strong> and <strong className="text-primary">{pmExperienceText} in product management</strong>. Specializing in <strong className="text-primary">AI-enabled, analytics-driven, cloud-based products</strong> at scale. Deep expertise in enterprise B2B SaaS platforms, with a focus on transforming complex business workflows into intuitive user experiences.
              </p>

              <p>
                Proven track record of delivering <strong className="text-primary">high-impact product launches</strong> that drive measurable business outcomes. From reducing customer churn by 10% to cutting expense processing time by 44%, I focus on results that matter to customers and stakeholders.
              </p>

              <p>
                Acts as strategic bridge between business vision and technical execution. Strong collaborator across product, engineering, data, and operations teams, ensuring alignment and driving on-time, high-quality releases that exceed expectations.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                Key Areas of Expertise:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'AI-enabled products',
                  'Analytics-driven solutions',
                  'Cloud-based products at scale',
                  'Enterprise B2B SaaS platforms',
                  'Cross-functional team leadership',
                  'Agile delivery methodologies',
                  'Invoicing',
                  'Procurement',
                  'Sourcing',
                  'Complete Source to Pay domain knowledge'
                ].map((expertise, index) => (
                  <div key={index} className="flex items-center gap-3 bg-indigo-50 px-4 py-3 rounded-xl">
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm font-medium">{expertise}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Image and Quick Facts */}
        <div className="order-1 lg:order-2 flex flex-col items-center gap-6">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative">
              <img
                src="/tanuj.png"
                alt={contactInfo.name}
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover object-top border-4 border-white shadow-2xl"
              />
            </div>
          </div>

          {/* Quick Facts */}
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 text-white w-full max-w-md">
            <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold">4 Products</div>
                  <div className="text-sm text-white/80">Successfully Launched</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold">10% Churn</div>
                  <div className="text-sm text-white/80">Reduction Achieved</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold">44% Faster</div>
                  <div className="text-sm text-white/80">Process Efficiency</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold">10 Certifications</div>
                  <div className="text-sm text-white/80">Professional Credentials</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
