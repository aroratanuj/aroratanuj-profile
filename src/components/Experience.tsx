import { useState } from 'react';
import { experiences, totalExperienceText } from '../data/portfolio';

const Experience = () => {
  const [expandedExperiences, setExpandedExperiences] = useState<Set<number>>(new Set([0]));

  const toggleExperience = (index: number) => {
    const newExpanded = new Set(expandedExperiences);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedExperiences(newExpanded);
  };

  return (
    <section id="experience" className="py-10 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A journey through {totalExperienceText} of product management and software engineering excellence
          </p>
        </div>

        <div className="space-y-4">
          {experiences.map((exp, index) => {
            const isExpanded = expandedExperiences.has(index);
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-indigo-300 transition-all duration-300"
              >
                {/* Clickable Header */}
                <button
                  onClick={() => toggleExperience(index)}
                  className="w-full p-4 md:p-6 flex flex-col md:flex-row md:justify-between md:items-start gap-4 bg-gradient-to-r hover:from-indigo-50 hover:to-transparent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  aria-expanded={isExpanded}
                >
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">
                        {exp.position}
                        <svg
                          className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </h3>
                      <span className="text-xs md:text-sm font-medium text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
                        {isExpanded ? 'Click to collapse' : 'Click to view details'}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      {exp.website ? (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-primary font-extrabold text-base md:text-lg hover:text-indigo-700 transition-colors duration-300 flex items-center gap-2 no-underline"
                        >
                          {exp.company}
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <span className="text-primary font-extrabold text-base md:text-lg">
                          {exp.company}
                        </span>
                      )}
                      <span className="text-gray-300">|</span>
                      <span className="text-gray-600 font-medium text-sm">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-2">
                      {exp.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 bg-primary text-white px-4 py-2 rounded-full text-xs md:text-sm font-semibold text-center">
                    {index === 0 ? 'Current' : 'Previous'}
                  </div>
                </button>

                {/* Expandable Content */}
                {isExpanded && (
                  <div className="border-t border-gray-200 bg-gray-50/50 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="p-6">
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2 text-lg">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Key Achievements & Responsibilities
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-700">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" aria-hidden="true"></span>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
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

export default Experience;
