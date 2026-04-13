import React from 'react'

export default function PrintLayout({ cv }) {
  const { personal, profile, experience, skills, certifications, education, projects } = cv

  return (
    <div className="hidden pdf-only flex-col bg-white text-slate-800 p-0 font-sans leading-normal">
      {/* CV Header */}
      <header className="border-b-2 border-slate-900 pb-6 mb-8">
        <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tight mb-4">{personal.name}</h1>
        <p className="text-slate-600 font-bold uppercase tracking-widest text-sm mb-4">{personal.title}</p>
        
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-700">
          <ContactDetail icon={<PhoneIcon />} text={personal.phone} />
          <ContactDetail icon={<MailIcon />} text={personal.email} />
          <ContactDetail icon={<LocIcon />} text={personal.location} />
        </div>
      </header>

      {/* Summary */}
      <section className="mb-8">
        <h2 className="text-sm font-black uppercase tracking-widest text-slate-900 border-l-4 border-slate-900 pl-3 mb-4">Executive Summary</h2>
        <p className="text-sm text-slate-700 leading-relaxed text-justify">{profile}</p>
      </section>

      {/* Skills - Moved to top as requested */}
      <section className="mb-8">
        <h2 className="text-sm font-black uppercase tracking-widest text-slate-900 border-l-4 border-slate-900 pl-3 mb-4">Technical Expertise</h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          {skills.categories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-xs font-bold text-slate-900 mb-2 uppercase tracking-wide">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((s, i) => (
                  <span key={i} className="text-[10px] bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-sm font-black uppercase tracking-widest text-slate-900 border-l-4 border-slate-900 pl-3 mb-4">Professional Experience</h2>
        <div className="space-y-6">
          {experience.map((job, idx) => (
            <div key={idx} className="page-break-inside-avoid">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-base font-bold text-slate-900">{job.company}</h3>
                <span className="text-xs font-bold text-slate-500">{job.period}</span>
              </div>
              <p className="text-[11px] font-black text-slate-700 uppercase tracking-wider mb-3">{job.role}</p>
              
              <div className="space-y-4">
                {job.projects.map((proj, pIdx) => (
                  <div key={pIdx} className="pl-3 border-l-2 border-slate-100">
                    <h4 className="text-xs font-bold text-slate-800 mb-1">{proj.title}</h4>
                    <ul className="list-disc list-outside ml-4 space-y-1">
                      {proj.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="text-[10px] text-slate-700 leading-snug">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certs - Grid layout to save space */}
      <div className="grid grid-cols-2 gap-8 mb-8 page-break-inside-avoid">
        <section>
          <h2 className="text-sm font-black uppercase tracking-widest text-slate-900 border-l-4 border-slate-900 pl-3 mb-4">Education</h2>
          <div className="space-y-4">
            {education.map((edu, idx) => (
              <div key={idx}>
                <h3 className="text-xs font-bold text-slate-900">{edu.institution}</h3>
                <p className="text-[10px] text-slate-600">{edu.degree}</p>
                <p className="text-[9px] text-slate-400 uppercase">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-sm font-black uppercase tracking-widest text-slate-900 border-l-4 border-slate-900 pl-3 mb-4">Certifications</h2>
          <div className="space-y-2">
            {certifications.map((cert, idx) => (
              <div key={idx} className="flex justify-between items-center text-[10px]">
                <span className="font-bold text-slate-700">{cert.title}</span>
                <span className="text-slate-400 italic">{cert.year}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

function ContactDetail({ icon, text }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-slate-400">{icon}</span>
      <span>{text}</span>
    </div>
  )
}

// Compact Icons for PDF
const PhoneIcon = () => (
  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
)
const MailIcon = () => (
  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
)
const LocIcon = () => (
  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
)
