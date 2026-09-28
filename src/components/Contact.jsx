import React from 'react';

const Contact = () => {
  const email = "bimarachmatsetiawan@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/bima-rachmat-setiawan-209889165/";
  const githubUrl = "https://github.com/bemaa11";

  return (
    <section id="contact" className="py-20 bg-[#080F23] border-y border-slate-800">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-6 uppercase tracking-wide">
          CONTACT
        </h2>

        <p className="text-cyan-400 font-semibold text-lg mb-2">Email</p>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
          I’m open to discussing full-time, contract, or freelance opportunities. Feel free to reach out, I’m always happy to explore how I can add value to your team or project.
        </p>

        {/* Tombol Contact: Email Me, LinkedIn, & GitHub */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          <a
            href={`mailto:${email}`}
            className="px-6 py-2.5 rounded-full border border-cyan-400 text-cyan-400 font-semibold text-sm hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300 shadow-md shadow-cyan-400/10"
          >
            Email Me
          </a>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full border border-cyan-400 text-cyan-400 font-semibold text-sm hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300 shadow-md shadow-cyan-400/10"
          >
            LinkedIn
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full border border-cyan-400 text-cyan-400 font-semibold text-sm hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300 shadow-md shadow-cyan-400/10"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;