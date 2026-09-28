import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-4 bg-[#0B132B]/80 backdrop-blur-md fixed w-full top-0 z-50 border-b border-slate-800">
      <a href="#" className="text-xl md:text-2xl font-bold text-cyan-400 tracking-wider">My Portofolio</a>
      <div className="hidden lg:flex space-x-6 text-sm font-semibold text-slate-300 bg-slate-900/90 px-6 py-2.5 rounded-full border border-slate-800">
        <a href="#projects" className="hover:text-cyan-400 transition-colors">Project</a>
        <a href="#skills" className="hover:text-cyan-400 transition-colors">Skill</a>
        <a href="#experiences" className="hover:text-cyan-400 transition-colors">Experience</a>
        <a href="#template" className="hover:text-cyan-400 transition-colors">Template</a>
        <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certification</a>
        <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
        <a href="#github" className="hover:text-cyan-400 transition-colors">Github</a>
        <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;