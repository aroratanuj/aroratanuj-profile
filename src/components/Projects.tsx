import { projectsData, projectsSectionData } from '../data/projects';

const Projects = () => {
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
              className="bg-white border border-gray-200 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 hover:border-primary hover:-translate-y-1 md:hover:-translate-y-2 hover:shadow-lg transition-all duration-400 h-full flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl md:text-2xl font-extrabold mb-2 md:mb-3">
                  {project.title}
                </h3>
                <div className="mb-3 md:mb-4">
                  <span className="inline-block bg-primary text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full">
                    {project.role}
                  </span>
                </div>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 md:mb-3">
                  {project.description}
                </p>
                {project.responsibilities && project.responsibilities.length > 0 && (
                  <div className="mb-4 md:mb-3">
                    <p className="text-gray-700 font-bold text-xs md:text-sm mb-2">Key Responsibilities:</p>
                    <ul className="text-gray-600 text-xs md:text-sm leading-relaxed list-disc list-inside space-y-1">
                      {project.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="bg-indigo-50 p-3 md:p-4 rounded-xl mb-4 md:mb-3">
                  <p className="text-primary font-bold text-xs md:text-sm">
                    Impact: {project.impact}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-700 px-2 py-1 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
