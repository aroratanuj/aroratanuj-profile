import { certifications } from '../data/portfolio';

const Certifications = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 md:mb-8 text-center">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-4 md:p-6 bg-gray-50 border border-gray-200 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm md:text-base font-bold text-gray-900 mb-1 md:mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-primary text-[10px] md:text-xs font-bold uppercase mb-0.5 md:mb-1">
                    {cert.issuer}
                  </p>
                  {cert.year && (
                    <p className="text-gray-500 text-xs md:text-sm mb-2 md:mb-3">
                      {cert.year}
                    </p>
                  )}
                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary text-[10px] md:text-xs font-semibold hover:text-indigo-700 transition-colors no-underline"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Verify Credential
                    </a>
                  )}
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
