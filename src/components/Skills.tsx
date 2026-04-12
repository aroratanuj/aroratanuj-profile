import { skills } from '../data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive toolkit for product management and technical leadership
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-sm font-extrabold text-primary uppercase mb-4 tracking-wider">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-gray-700 text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full flex-shrink-0"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
