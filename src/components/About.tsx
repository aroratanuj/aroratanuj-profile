import { pmExperienceText, totalExperienceText } from '../data/portfolio';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              About Me
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Product Manager with <strong className="text-primary">{totalExperienceText} in IT</strong> and <strong className="text-primary">{pmExperienceText} in product management</strong>. Specializing in <strong className="text-primary">AI-enabled, analytics-driven, cloud-based products</strong> at scale. Deep expertise in enterprise B2B SaaS platforms, with a focus on transforming complex business workflows into intuitive user experiences.
              </p>

              <p>
                Proven track record of delivering <strong className="text-primary">high-impact product launches</strong> that drive measurable business outcomes. From reducing customer churn by 10% to cutting expense processing time by 44%, I focus on results that matter to customers and stakeholders.
              </p>

              <p>
                Acts as strategic bridge between business vision and technical execution. Strong collaborator across product, engineering, data, and operations teams, ensuring alignment and driving on-time, high-quality releases that exceed expectations.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Key Areas of Expertise:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'AI-enabled products',
                  'Analytics-driven solutions',
                  'Cloud-based products at scale',
                  'Enterprise B2B SaaS platforms',
                  'Cross-functional team leadership',
                  'Agile delivery methodologies'
                ].map((expertise, index) => (
                  <div key={index} className="flex items-center gap-3 bg-indigo-50 px-4 py-3 rounded-xl">
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm font-medium">{expertise}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold">4 Products</div>
                  <div className="text-sm text-white/80">Successfully Launched</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold">10% Churn</div>
                  <div className="text-sm text-white/80">Reduction Achieved</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold">44% Faster</div>
                  <div className="text-sm text-white/80">Process Efficiency</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold">95%</div>
                  <div className="text-sm text-white/80">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
