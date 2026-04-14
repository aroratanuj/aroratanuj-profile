import { certifications } from '../data/portfolio';

const Certifications = () => {
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-4 md:mb-8 text-center">
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-3 md:p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xs md:text-sm font-bold text-gray-900 mb-1 leading-tight">
                    {cert.name}
                  </h4>
                  <p className="text-primary text-[9px] md:text-[10px] font-bold uppercase mb-0.5">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    {cert.year && (
                      <span className="text-gray-500 text-[10px] md:text-xs">
                        {cert.year}
                      </span>
                    )}
                    {cert.verificationUrl && (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary text-[9px] md:text-[10px] font-semibold hover:text-indigo-700 transition-colors no-underline flex items-center gap-0.5"
                      >
                        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Verify
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
