import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Wisewires Co.Ltd",
      role: "QA Automation Engineer (Mobile Apps)",
      period: "Jan 2026 - Present",
      points: [
        "Developed and maintained automated test scripts using Katalon Studio for web and mobile applications, improving test coverage and execution efficiency.",
        "Executed regression, smoke, sanity, and end-to-end testing across 50+ sites to ensure application stability and release readiness.",
        "Identified, reported, and tracked defects with clear reproduction steps while performing root cause analysis to support faster issue resolution."
      ]
    },
    {
      id: 2,
      company: "Tech Intelligence Company (Confidential Client)",
      role: "Freelance QA Engineer",
      period: "May 2026 - Jul 2026",
      points: [
        "Designed and executed comprehensive manual test cases for both web and mobile applications to ensure functional stability.",
        "Developed detailed performance metrics documentation, specifically analyzing and recording feature load times.",
        "Performed end-to-end UI/UX validation by verifying English to Indonesian translations across all application interfaces."
      ]
    },
    {
      id: 3,
      company: "Kemang Internet Pte Ltd",
      role: "QA Engineer",
      period: "Apr 2025 - Nov 2025",
      points: [
        "Designed and executed test plans, test cases, and regression suites.",
        "Performed UI & API testing (manual & automation) with Postman, Selenium, and Pytest.",
        "Logged and tracked bugs via Jira/Trello; collaborated closely with developers.",
        "Supported Agile team delivery through efficient communication and documentation."
      ]
    },
    {
      id: 4,
      company: "PT. Gear.Inc Indonesia",
      role: "Content Moderator",
      period: "Feb 2021 - May 2024",
      points: [
        "Reviewed and filtered content to ensure policy compliance (3000+ cases/day).",
        "Collaborated with QA and Policy teams to resolve content issues.",
        "Top 3 Performer (100% accuracy, Jan 2023)"
      ]
    }
  ];

  return (
    <section id="experiences" className="py-20 bg-[#0B132B]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-extrabold text-white mb-12 text-center uppercase tracking-wide">
          WORK EXPERIENCE
        </h2>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              className="bg-[#0D1B3A] p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                  <p className="text-sm font-medium text-cyan-400 italic mt-0.5">{exp.role}</p>
                </div>
                <span className="text-xs font-semibold bg-slate-900 text-slate-300 border border-slate-800 px-3 py-1.5 rounded-full w-max shrink-0">
                  {exp.period}
                </span>
              </div>

              {/* Bullet Points Deskripsi */}
              <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm leading-relaxed mt-4">
                {exp.points.map((point, index) => (
                  <li key={index} className="text-slate-300">
                    <span className="text-slate-300 -ml-1">{point}</span>
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

export default Experience;