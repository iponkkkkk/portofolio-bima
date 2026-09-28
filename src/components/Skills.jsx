import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "AUTOMATION TESTING",
      skills: ["Katalon Studio", "Appium", "Selenium", "WebdriverIO"]
    },
    {
      title: "API & PERFORMANCE",
      skills: ["Postman", "JMeter", "Locust"]
    },
    {
      title: "CI/CD & DEVELOPMENT",
      skills: ["Git", "GitHub", "VS Code", "GitHub Actions"]
    },
    {
      title: "LANGUAGES & DATA",
      skills: ["Java", "TypeScript", "Python", "SQL", "Groovy"]
    },
    {
      title: "PROJECT COLLABORATION",
      skills: ["Jira", "Microsoft Teams", "Figma", "Discord", "Mattermost", "Lark"]
    },
    {
      title: "SUPPORTING TOOLS",
      skills: ["Qase.io", "Allure Report", "TestRail", "BrowserStack", "Microsoft Office"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#080F23] border-y border-slate-800">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-extrabold text-white mb-12 text-center uppercase tracking-wide">
          SKILLS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-[#0D1B3A] p-6 rounded-2xl border border-slate-800 shadow-lg hover:border-cyan-500/50 transition-all duration-300"
            >
              <h3 className="font-bold text-cyan-400 mb-4 text-xs tracking-wider uppercase border-b border-slate-800 pb-3">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 justify-start items-start">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="bg-slate-900 hover:bg-cyan-950 text-slate-300 hover:text-cyan-300 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-800 hover:border-cyan-500/40 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;