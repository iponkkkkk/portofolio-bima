import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullName = "Bima Rachmat Setiawan";
  
  useEffect(() => {
    const typingSpeed = 150; 
    const deletingSpeed = 100; 
    const pauseBeforeDelete = 2000; // Ditambah sedikit agar nama sempat terbaca jelas saat utuh
    const pauseBeforeRestart = 500; 

    let timer;

    if (!isDeleting && displayedText !== fullName) {
      timer = setTimeout(() => {
        setDisplayedText(fullName.substring(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayedText === fullName) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseBeforeDelete);
    } else if (isDeleting && displayedText !== '') {
      timer = setTimeout(() => {
        setDisplayedText(fullName.substring(0, displayedText.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && displayedText === '') {
      timer = setTimeout(() => {
        setIsDeleting(false);
      }, pauseBeforeRestart);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, fullName]);

  return (
    <section id="hero" className="pt-32 pb-16 px-6 md:px-12 max-w-6xl mx-auto flex items-center min-h-[80vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        
        {/* Kiri: Teks Profil */}
        <div className="space-y-6">
          {/* whitespace-nowrap & overflow-hidden dihapus agar teks nama tidak terpotong di layar */}
          <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            Hi, I'm <span className="text-cyan-400">{displayedText}</span>
            <span className="text-cyan-400 animate-pulse ml-1">|</span>
          </h1>
          
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-cyan-300 tracking-widest uppercase">
              QA Engineer (Manual & Automation) & Product Quality Analyst
            </h2>
            <p className="text-sm text-slate-400 flex items-center mt-2 font-medium">
              📍Surabaya, East Java, Indonesia
            </p>
          </div>
          
          <p className="text-slate-300 text-base leading-relaxed">
            Detail-oriented QA Engineer with hands-on experience in software quality assurance, complemented by a strong analytical background in digital compliance and workflow quality control. Experienced in web, mobile, and API testing, as well as executing manual and automated testing strategies to ensure application stability and release readiness.

Throughout my career, I have successfully bridged analytical product evaluation with technical testing—utilizing tools like Katalon Studio, Selenium, and Postman to build reliable verification pipelines and improve test coverage. My background in rigorous data and policy compliance strengthens my analytical precision, defect tracking, and user-centric approach to software development.

Passionate about Quality Engineering, Test Automation, and Continuous Improvement, with a strong focus on delivering high-quality products through meticulous quality-driven practices.
          </p>

          <div className="text-xs text-cyan-400/80 font-medium tracking-wide pt-4">
            Consumer Electronics | Mobile Apps | E-Commerce | Healthcare & Pharma | GovTech & AI-Powered Intelligence Systems | Enterprise Datahub
          </div>
        </div>

        {/* Kanan: Foto Profil dengan Border Gradasi Oranye & Badge Status */}
        <div className="flex flex-col items-center justify-center space-y-5 mt-8 md:mt-0">
          <div className="p-1.5 bg-gradient-to-tr from-amber-500 to-orange-400 rounded-full shadow-lg shadow-orange-500/20">
            <div className="w-56 h-56 md:w-80 md:h-80 shrink-0 bg-slate-800 rounded-full overflow-hidden border-4 border-[#0B132B]">
               <img src="/fotobima.jpg" alt="Bima Profile" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="flex items-center space-x-2 bg-slate-900/90 px-5 py-2.5 rounded-full border border-cyan-500/30 text-center shadow-lg shadow-cyan-500/5">
            <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse shrink-0"></span>
            <span className="text-cyan-300 text-xs md:text-sm font-medium">Open to QA, SDET & Automation opportunities</span>
          </div>

          <a href="#contact" className="px-8 py-2 border border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-slate-900 transition text-sm shadow-md shadow-cyan-400/10">
            contact me
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;