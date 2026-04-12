import { certifications } from '../data/portfolio';

const Certifications = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 border border-gray-200 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-2">
                {cert.name}
              </h4>
              <p className="text-primary text-xs font-bold uppercase mb-1">
                {cert.issuer}
              </p>
              {cert.year && (
                <p className="text-gray-500 text-sm">
                  {cert.year}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
