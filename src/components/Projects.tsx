import { projects } from '../data/portfolio';

const Projects = () => {
  return (
    <section id="projects" className="py-36 bg-gray-50">
      <div className="max-w-[1100px] mx-auto px-8">
        <h2 className="text-[2.2rem] font-extrabold mb-16 tracking-tight">
          Featured Projects
        </h2>

        <div className="grid grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-3xl p-12 hover:border-primary hover:-translate-y-2 hover:shadow-lg transition-all duration-400 h-full flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-extrabold mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="bg-indigo-50 p-4 rounded-xl mb-6">
                  <p className="text-primary font-bold text-sm">
                    Impact: {project.impact}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold"
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
