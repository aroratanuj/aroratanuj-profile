const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-indigo-50 py-20">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
            Available for opportunities
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Hi, I'm <span className="text-primary">Tanuj Arora</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-600 font-semibold mb-6">
            Product Manager | 16+ Years in IT | 7+ Years in Enterprise B2B SaaS
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
            Specializing in AI-enabled, analytics-driven, cloud-based products at scale.
            I transform complex business needs into elegant product solutions.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="#experience"
              className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all duration-300 no-underline shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              View Experience
            </a>
            <a
              href="/Tanuj-Arora-Resume.pdf"
              download="Tanuj-Arora-Resume.pdf"
              className="bg-white text-gray-700 px-5 py-2.5 rounded-full text-sm font-semibold border-2 border-gray-300 hover:border-primary hover:text-primary transition-all duration-300 no-underline inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
            <a
              href="#contact"
              className="bg-white text-gray-700 px-5 py-2.5 rounded-full text-sm font-semibold border-2 border-gray-300 hover:border-primary hover:text-primary transition-all duration-300 no-underline"
            >
              Get in Touch
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Chandigarh, India</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <a href="https://linkedin.com/in/tanuj-arora" target="_blank" rel="noopener noreferrer" className="hover:text-primary no-underline font-medium">LinkedIn Profile</a>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:tanutarora.mca@gmail.com" className="hover:text-primary no-underline">tanutarora.mca@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+919501112976" className="hover:text-primary no-underline">+91 950111-2976</a>
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
                alt="Tanuj Arora"
                className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover object-top border-4 border-white shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">16+</div>
                  <div className="text-xs text-gray-600 font-semibold">Years Experience</div>
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
