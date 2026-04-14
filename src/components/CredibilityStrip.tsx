import { metrics } from '../data/portfolio';

const CredibilityStrip = () => {
  return (
    <section className="bg-[#0a0e27] px-6 md:px-8 py-8 text-white">
      <div className="max-w-[1100px] mx-auto grid grid-cols-5 gap-4 md:gap-6 text-center">
        {metrics.map((metric, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-indigo-400 text-[1.6rem] font-extrabold mb-2">
              {metric.value}
            </span>
            <p className="text-xs font-bold text-gray-400 uppercase">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CredibilityStrip;
