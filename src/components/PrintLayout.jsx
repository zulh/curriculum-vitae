import React from 'react'

export default function PrintLayout({ cv }) {
  const { personal, profile, experience, skills, certifications, education } = cv

  return (
    <div className="hidden pdf-only flex-col bg-white text-slate-800 p-0 font-sans leading-normal">
      {/* CV Header */}
      <header className="border-b-2 border-slate-900 pb-6 mb-8">
        <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tight mb-3">{personal.name}</h1>
        <p className="text-slate-600 font-bold uppercase tracking-widest text-sm mb-4">{personal.subtitle}</p>
        
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-700">
          <ContactDetail icon={<PhoneIcon />} text={personal.phone} />
          <ContactDetail icon={<MailIcon />} text={personal.email} />
          <ContactDetail icon={<LocIcon />} text={personal.location} />
        </div>
      </header>

      {/* Summary */}
      <section className="mb-10">
        <h2 className="text-[10px] font-black uppercase tracking-wide text-slate-400 mb-4">Professional Profile</h2>
        <p className="text-[11.5px] text-slate-700 leading-relaxed text-justify">{profile}</p>
      </section>

      {/* Technical Expertise */}
      <section className="mb-10 page-break-inside-avoid">
        <h2 className="text-[10px] font-black uppercase tracking-wide text-slate-400 mb-4">Technical Expertise</h2>
        <div className="grid grid-cols-2 gap-x-12 gap-y-6">
          {skills.categories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-[11px] font-bold text-slate-900 mb-1.5 uppercase tracking-wide">{category.title}</h3>
              <p className="text-[11px] text-slate-700 leading-relaxed opacity-90">
                {category.skills.map(s => s.name).join(', ')}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Experience */}
      <section className="mb-10">
        <h2 className="text-[10px] font-black uppercase tracking-wide text-slate-400 mb-6">Professional Experience</h2>
        <div className="space-y-10">
          {experience.map((job, idx) => (
            <div key={idx} className="page-break-inside-avoid">
              <div className="flex justify-between items-baseline mb-1.5">
                <h3 className="text-[13px] font-bold text-slate-900">
                  <span className="uppercase tracking-tight">{job.role}</span>
                  <span className="text-slate-300 mx-2 font-normal">/</span>
                  <span className="text-slate-700">{job.company}</span>
                </h3>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{job.period}</span>
              </div>
              
              {job.client && (
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wide mb-4">Client: {job.client}</p>
              )}
              
              <div className="space-y-5">
                {job.projects.map((proj, pIdx) => (
                  <div key={pIdx} className="mb-2">
                    <h4 className="text-[11px] font-bold text-slate-800 mb-2.5 opacity-90">{proj.title}</h4>
                    <ul className="list-disc list-outside ml-4 space-y-2">
                      {proj.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="text-[11px] text-slate-700 leading-snug">
                          {formatPDFBullet(bullet)}
                        </li>
                      ))}
                    </ul>
                    {proj.tech && (
                      <p className="mt-4 text-[10px] text-slate-600 bg-slate-50/50 p-2.5 border-l-2 border-slate-200 leading-relaxed italic">
                         <strong className="text-slate-900 uppercase text-[8px] tracking-wide not-italic mr-2">Core Tech:</strong> {proj.tech}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Page Content: Education & Certifications */}
      <div className="grid grid-cols-2 gap-x-12 mt-6 pt-4 page-break-inside-avoid items-start">
        {/* Education Column */}
        <section className="pr-4 pt-2">
          <h2 className="text-[10px] font-black uppercase tracking-wide text-slate-400 mb-6 font-sans">EDUCATION</h2>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="group">
                <h3 className="text-[11.5px] font-bold text-slate-900 leading-snug">{edu.degree}</h3>
                <p className="text-[11px] text-slate-700 mt-0.5">{edu.institution}</p>
                <div className="flex justify-between items-center text-[10px] text-slate-600 font-medium mt-1.5 pt-1.5 border-t border-slate-50">
                  <span className="font-bold tracking-tight">{edu.result}</span>
                  <span className="uppercase tracking-tighter opacity-50 font-black">{edu.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Column */}
        <section className="pl-10 pt-2 border-l border-slate-200/50">
          <h2 className="text-[10px] font-black uppercase tracking-wide text-slate-400 mb-6 font-sans">CERTIFICATIONS</h2>
          <div className="space-y-4">
            {[...certifications]
              .sort((a, b) => b.year - a.year)
              .map((cert, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-[11.5px] font-bold text-slate-900 leading-tight">{cert.name}</span>
                <span className="text-[10px] text-slate-400 font-bold mt-0.5 uppercase tracking-wide">
                  {cert.issuer} <span className="mx-1.5 opacity-20 text-slate-900">|</span> {cert.year}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Professional Footer */}
      <footer className="mt-12 pt-16 pb-12 text-center">
        <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest opacity-40 italic">
          References available upon request
        </p>
      </footer>
    </div>
  )
}

function formatPDFBullet(text) {
  const importantTerms = /(TNG Mini Program|TNG MP|99\.9%|40%|4 hours to 5 minutes)/g
  
  return text.split(importantTerms).map((part, i) => 
    importantTerms.test(part) 
      ? <strong key={i} className="text-slate-900 font-bold">{part}</strong> 
      : part
  )
}

function ContactDetail({ icon, text }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-slate-400">{icon}</span>
      <span className="font-medium tracking-tight text-slate-700">{text}</span>
    </div>
  )
}

const PhoneIcon = () => (
  <svg className="w-3 h-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
)
const MailIcon = () => (
  <svg className="w-3 h-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
)
const LocIcon = () => (
  <svg className="w-3 h-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
)
