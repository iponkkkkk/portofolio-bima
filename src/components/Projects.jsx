import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "SAMSUNG APP",
      date: "QA Testing Project",
      description: "Performed comprehensive manual and automated testing for Samsung Web and Mobile applications. Responsible for functional, UI/UX, and cross-platform compatibility testing across various devices and screen resolutions.",
      tech: ["Website Testing", "Mobile Testing"],
      image: "/samsung.png"
    },
    {
      id: 2,
      title: "PrismKey Intelligence",
      date: "QA Testing Project",
      description: "Conducted end-to-end API and UI testing for PRIMSKEY Intelligence platform. Validated complex data analytics workflows, user authentication, and system integration across web and mobile interfaces.",
      tech: ["Website Testing", "Mobile Testing"],
      image: "/prismKey.jpeg"
    },
    {
      id: 3,
      title: "CANSATIVA GROUP - DATAHUB & E-COMMERCE FARMA",
      date: "QA Testing Project",
      description: "Executed rigorous testing scenarios for pharma e-commerce and DataHub systems. Focused on checkout flow security, inventory data accuracy, transaction reliability, and mobile responsiveness.",
      tech: ["Website Testing", "Mobile Testing"],
      image: "/cansativa.jpeg"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#0B132B]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-extrabold text-white mb-12 text-center uppercase tracking-wide">
          PROJECTS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-[#0D1B3A] border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 flex flex-col h-full">
              
              <div className="h-52 w-full bg-slate-950 flex items-center justify-center p-4 overflow-hidden border-b border-slate-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="max-h-full max-w-full object-contain rounded-lg" 
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-lg text-white mb-1 leading-snug">{project.title}</h3>
                <span className="text-xs font-semibold text-cyan-400 mb-4 block">{project.date}</span>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="text-xs font-semibold bg-cyan-950 text-cyan-300 border border-cyan-800/50 px-3 py-1 rounded-full">
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