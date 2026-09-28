import React from 'react';

const Templates = () => {
  const templates = [
    {
      title: "Test Cases",
      description: "Detailed test case template with steps, expected results, actual results, and status",
      link: "https://docs.google.com/spreadsheets/d/13GrdBTt5UxJBdn3eUGyF1pbJ2lEVJIH-jfNKgzaCzd8/edit?gid=658224943#gid=658224943"
    },
    {
      title: "Bug Report",
      description: "Clear bug reporting format including severity, priority, reproduction steps, evidence, and environment",
      link: "https://docs.google.com/spreadsheets/d/1GvUHDmKdrODDG0mwF1g2aWzHVzdusCapqa7Qq9_0LOk/edit?pli=1&gid=2133943959#gid=2133943959"
    }
  ];

  return (
    <section id="template" className="py-20 bg-[#080F23] border-y border-slate-800">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white mb-4 uppercase tracking-wide">
            QA Template Documentation
          </h2>
          <p className="text-slate-400 italic text-sm md:text-base max-w-3xl mx-auto">
            A collection of QA documentation templates that I commonly use and provide for testing activities, project collaboration, and quality reporting
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {templates.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-[#0D1B3A] p-8 md:p-10 rounded-2xl border border-slate-800 hover:border-cyan-500/50 shadow-lg hover:shadow-cyan-500/5 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">{item.title}</h3>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">{item.description}</p>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Templates;