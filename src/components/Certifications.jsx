import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "QA Engineering Certificate",
      issuer: "Jayjay",
      description: "Comprehensive Software Quality Assurance training covering manual testing, API testing with Postman, automated testing with Selenium, and defect management.",
      file: "/jayjay.jpg" // Ganti dengan nama file sertifikat Anda di folder public
    },
    {
      id: 2,
      title: "English Proficiency / Language Program",
      issuer: "Jago Bahasa",
      description: "Intensive English course focusing on professional communication, workplace correspondence, and technical vocabulary for global tech environments.",
      file: "/jagobahasa.jpg" // Ganti dengan nama file sertifikat Anda di folder public
    },
    {
      id: 3,
      title: "Mini Course QA Engineer",
      issuer: "Habis Kerja",
      description: "Practical career development boot camp focused on QA workflows, industry portfolio building, interview preparation, and real-world project scenarios.",
      file: "/habiskerja.pdf" // Ganti dengan nama file sertifikat Anda di folder public
    },
    {
      id: 4,
      title: "EF SET English Certificate",
      issuer: "EF SET",
      description: "Standardized international English test evaluating reading, listening, and practical comprehension skills for international standards.",
      file: "/efset.jpg" // Ganti dengan nama file sertifikat Anda di folder public
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-[#080F23] border-y border-slate-800">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-extrabold text-white mb-12 text-center uppercase tracking-wide">
          CERTIFICATIONS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <a 
              key={cert.id}
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between bg-[#0D1B3A] p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/5 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-white group-hover:text-cyan-400 transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <span className="text-xs font-bold bg-cyan-950 text-cyan-300 border border-cyan-800/50 px-3 py-1 rounded-full shrink-0 ml-2">
                    {cert.issuer}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mt-3">
                  {cert.description}
                </p>
              </div>

              {/* Teks Penanda Klik */}
              <div className="mt-6 flex items-center text-xs font-semibold text-cyan-400 space-x-1">
                <span>View Certificate</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;