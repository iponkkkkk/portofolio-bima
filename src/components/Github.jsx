import React from 'react';

const Github = () => {
  const githubUrl = "https://github.com/bemaa11";

  return (
    <section id="github" className="py-20 bg-[#080F23] border-y border-slate-800">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-6 uppercase tracking-wide">
          GITHUB
        </h2>
        
        <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
          Explore my open-source repositories, QA test automation frameworks, and development projects hosted on GitHub.
        </p>

        {/* Kartu Profil / CTA GitHub */}
        <div className="bg-[#0D1B3A] p-8 md:p-10 rounded-2xl border border-slate-800 hover:border-cyan-500/50 shadow-lg transition-all duration-300 flex flex-col items-center">
          
          {/* Ikon GitHub SVG */}
          <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 mb-6 text-cyan-400">
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </div>

          <h3 className="text-xl font-bold text-white mb-2">@bemaa11</h3>
          <p className="text-slate-400 text-sm mb-6">Check out repositories, code samples, and test scripts.</p>

          {/* Tombol Tautan ke GitHub */}
          <a 
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-full transition-all duration-300 shadow-md shadow-cyan-500/20"
          >
            <span>Visit My GitHub Profile</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Github;