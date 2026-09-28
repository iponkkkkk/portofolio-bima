import React from 'react';

const Education = () => {
  const educationList = [
    {
      id: 1,
      institution: "Universitas Airlangga",
      degree: "Bachelor of Indonesia Language and Literature",
      gpa: "GPA: 3.33 / 4.00",
      period: "Aug 2016 - Aug 2020"
    }
  ];

  return (
    <section id="education" className="py-20 bg-[#0B132B]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-extrabold text-white mb-12 text-center uppercase tracking-wide">
          EDUCATION
        </h2>

        <div className="space-y-6">
          {educationList.map((edu) => (
            <div 
              key={edu.id}
              className="bg-[#0D1B3A] p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">{edu.institution}</h3>
                <p className="text-sm font-medium text-cyan-400 mt-1">{edu.degree}</p>
                <p className="text-xs text-slate-400 font-semibold mt-2">{edu.gpa}</p>
              </div>

              <span className="text-xs font-semibold bg-slate-900 text-slate-300 border border-slate-800 px-4 py-2 rounded-full w-max shrink-0">
                {edu.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;