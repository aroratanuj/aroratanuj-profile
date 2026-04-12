import { certifications } from '../data/portfolio';

const Certifications = () => {
  return (
    <section className="py-36 bg-gray-50">
      <div className="max-w-[1100px] mx-auto px-8">
        <h2 className="text-[2.2rem] font-extrabold mb-16 tracking-tight">
          Certifications
        </h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-8 bg-white border border-gray-200 rounded-2xl hover:border-primary hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-center"
            >
              <h4 className="text-[1.1rem] font-bold text-gray-900 mb-2">
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
