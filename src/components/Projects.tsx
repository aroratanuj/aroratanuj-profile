import { useState } from 'react';
import { projectsData, projectsSectionData } from '../data/projects';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedProject(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-8 md:py-12 bg-gray-50">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-xl md:text-2xl lg:text-[2.2rem] font-extrabold mb-4 md:mb-4 tracking-tight text-center md:text-left">
          {projectsSectionData.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 lg:gap-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl md:rounded-2xl p-4 md:p-5 hover:shadow-lg hover:border-indigo-300 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg lg:text-xl font-extrabold mb-2 truncate">
                    {project.title}
                  </h3>
                  <span className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                    {project.role}
                  </span>
                </div>

                <button
                  onClick={() => openModal(index)}
                  className="flex-shrink-0 p-2 bg-primary text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  aria-label="View details"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-2xl md:rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 md:p-8 flex items-start justify-between rounded-t-2xl md:rounded-t-3xl">
                <div className="flex-1 pr-4">
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-2">
                    {projectsData[selectedProject].title}
                  </h3>
                  <span className="inline-block bg-primary text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                    {projectsData[selectedProject].role}
                  </span>
                </div>
                <button
                  onClick={closeModal}
                  className="flex-shrink-0 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {projectsData[selectedProject].description}
                  </p>
                </div>

                <div className="bg-indigo-50 p-5 md:p-6 rounded-xl mb-6">
                  <h4 className="text-gray-900 font-bold text-base md:text-lg mb-3">Impact</h4>
                  <p className="text-primary text-base md:text-lg leading-relaxed">
                    {projectsData[selectedProject].impact}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-gray-900 font-bold text-base md:text-lg mb-4">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {projectsData[selectedProject].technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {projectsData[selectedProject].responsibilities && projectsData[selectedProject].responsibilities.length > 0 && (
                  <div className="bg-gray-50 rounded-xl p-5 md:p-6 border border-gray-200">
                    <h4 className="text-gray-900 font-bold text-base md:text-lg mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {projectsData[selectedProject].responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700 text-base">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
