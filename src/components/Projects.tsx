import { useState } from 'react';
import { projectsData, projectsSectionData } from '../data/projects';

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());

  const toggleProject = (index: number) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedProjects(newExpanded);
  };

  return (
    <section id="projects" className="py-8 md:py-12 bg-gray-50">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-xl md:text-2xl lg:text-[2.2rem] font-extrabold mb-4 md:mb-4 tracking-tight text-center md:text-left">
          {projectsSectionData.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 lg:gap-6">
          {projectsData.map((project, index) => {
            const isExpanded = expandedProjects.has(index);
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl md:rounded-3xl overflow-hidden hover:shadow-lg hover:border-indigo-300 transition-all duration-300"
              >
                <button
                  onClick={() => toggleProject(index)}
                  className="w-full p-6 md:p-8 lg:p-12 flex flex-col text-left bg-gradient-to-r hover:from-indigo-50 hover:to-transparent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start justify-between mb-2 md:mb-3">
                    <h3 className="text-xl md:text-2xl font-extrabold flex-1 pr-4">
                      {project.title}
                    </h3>
                    <svg
                      className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div className="mb-3 md:mb-4">
                    <span className="inline-block bg-primary text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full">
                      {project.role}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 md:mb-3">
                    {project.description}
                  </p>
                  <div className="bg-indigo-50 p-3 md:p-4 rounded-xl mb-3">
                    <p className="text-primary font-bold text-xs md:text-sm">
                      {project.impact}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 px-2 py-1 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <span className="text-xs md:text-sm font-medium text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full inline-block">
                      {isExpanded ? 'Click to collapse' : `Click to view details`}
                    </span>
                  </div>
                </button>

                {isExpanded && (
                  <div className="border-t-2 border-primary bg-indigo-100/50 relative z-10 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="p-6 md:p-8">
                      <h4 className="text-gray-900 font-bold text-base md:text-lg mb-6 flex items-center gap-2">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Key Achievements & Responsibilities
                      </h4>
                      <div className="mb-6">
                        <p className="text-gray-900 font-bold text-sm md:text-base mb-3">Impact</p>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">{project.impact}</p>
                      </div>
                      {project.responsibilities && project.responsibilities.length > 0 && (
                        <div className="bg-white rounded-xl p-4 border-2 border-indigo-200 shadow-sm">
                          <p className="text-gray-900 font-bold text-sm md:text-base mb-3">Key Responsibilities</p>
                          <ul className="space-y-3">
                            {project.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start gap-3 text-gray-700 text-sm md:text-base">
                                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                <span className="leading-relaxed">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
