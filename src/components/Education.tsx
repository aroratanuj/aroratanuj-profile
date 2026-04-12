const Education = () => {
  const education = [
    {
      degree: 'Masters in Computer Application (MCA)',
      institution: 'Himachal Pradesh University, Shimla',
      year: '2008'
    },
    {
      degree: 'Post Graduate Diploma in Business Administration',
      institution: 'Symbiosis Center for Distance Learning, Pune',
      year: '2013'
    }
  ];

  return (
    <section id="education" className="py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-12">
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-8 bg-white border border-gray-200 rounded-2xl hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-semibold mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {edu.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
