import { RevealDiv } from '../hooks/useScrollReveal'
import { SectionHeading } from './About'

export default function Education({ education }) {
  return (
    <section id="education" className="py-24 px-6 bg-surface transition-colors duration-500 section-border-t">
      <div className="max-w-6xl mx-auto">
        <RevealDiv>
          <SectionHeading>Academic Foundation</SectionHeading>
        </RevealDiv>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <RevealDiv
              key={i}
              delay={i * 0.1}
              className="group bg-[var(--bg-card)] border border-border-dim rounded-2xl p-8 hover:shadow-md transition-all duration-300 hover:border-accent/30 shadow-sm"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-accent/5 rounded-2xl border border-accent/10 text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                    <EduIcon />
                  </div>
                  <span className="text-text-muted text-xs font-bold uppercase tracking-[0.2em] opacity-50">
                    {edu.year}
                  </span>
                </div>
                
                <h3 className="text-2xl font-black text-text-primary tracking-tight mb-2 group-hover:text-accent transition-colors">
                  {edu.institution}
                </h3>
                
                {edu.degree && (
                  <p className="text-text-muted text-sm font-medium leading-relaxed mb-6">
                    {edu.degree}
                  </p>
                )}
                
                <div className="mt-auto pt-6 border-t border-border-dim flex items-center justify-between">
                  {edu.result && (
                    <span className="flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                       <span className="text-accent font-bold text-xs uppercase tracking-widest">{edu.result}</span>
                    </span>
                  )}
                  <span className="text-[10px] text-text-muted font-black uppercase tracking-widest opacity-30">Malaysia</span>
                </div>
              </div>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  )
}

function EduIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  )
}
