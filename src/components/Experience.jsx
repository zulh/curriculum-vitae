import { RevealDiv } from '../hooks/useScrollReveal'
import { SectionHeading } from './About'

export default function Experience({ experience }) {
  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden bg-primary section-border-t">
      {/* Background Glow */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <RevealDiv>
          <SectionHeading>Professional Journey</SectionHeading>
          <p className="text-text-muted mt-4 max-w-2xl text-sm leading-relaxed mb-16">
            A timeline of my industrial exposure and professional growth, 
            contributing to high-impact projects across diverse sectors.
          </p>
        </RevealDiv>

        <div className="relative border-l border-elevated/40 ml-4 md:ml-6 pl-8 md:pl-12 space-y-20">
          {experience.map((job, i) => (
            <RevealDiv key={i} delay={i * 0.15} className="relative">
              {/* Timeline Dot */}
              <span className="absolute -left-[2.55rem] md:-left-[3.55rem] top-1 w-6 h-6 rounded-full bg-primary border-2 border-accent flex items-center justify-center shadow-[0_0_15px_var(--glow-accent)]">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              </span>

              <div className="bg-[var(--bg-card)] backdrop-blur-md border border-border-dim p-6 md:p-8 rounded-2xl hover:border-accent/40 hover:shadow-xl transition-all duration-300 shadow-sm group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-logo-surface rounded-xl p-2 flex items-center justify-center border border-border-dim shadow-sm overflow-hidden">
                      {job.logo ? (
                        <img 
                          src={job.logo} 
                          alt={job.company} 
                          className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                          onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                        />
                      ) : null}
                      <div className={`w-full h-full items-center justify-center bg-accent/5 text-accent font-bold text-xl ${job.logo ? 'hidden' : 'flex'}`}>
                        {job.company.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-text-primary tracking-tight">{job.company}</h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                        <span className="text-accent font-bold text-sm tracking-wide">{job.role}</span>
                        <span className="hidden sm:inline w-1 h-1 rounded-full bg-elevated" />
                        <span className="text-text-muted text-xs font-medium uppercase tracking-widest">{job.period}</span>
                      </div>
                    </div>
                  </div>
                  {job.client && (
                    <div className="px-4 py-2 bg-accent/5 border border-accent/10 rounded-lg">
                      <p className="text-[10px] text-accent font-bold uppercase tracking-[0.2em] mb-0.5">Primary Client</p>
                      <p className="text-text-primary text-xs font-semibold">{job.client}</p>
                    </div>
                  )}
                </div>

                <div className="space-y-12">
                  {job.projects.map((proj, j) => (
                    <div key={j} className="relative pl-6 border-l border-elevated/30 hover:border-accent/30 transition-colors duration-300">
                      <div className="absolute -left-[0.35rem] top-1.5 w-1.5 h-1.5 rounded-full bg-elevated group-hover:bg-accent transition-colors duration-300" />
                      
                      <h4 className="text-lg font-bold text-text-primary mb-2 flex items-baseline gap-3">
                        {proj.title}
                      </h4>
                      
                      {proj.description && (
                        <p className="text-text-muted text-sm leading-relaxed mb-4 italic opacity-80">
                          {proj.description}
                        </p>
                      )}

                      <ul className="space-y-3 mb-6">
                        {proj.bullets.map((b, k) => (
                          <li key={k} className="text-text-muted text-sm flex gap-3 leading-relaxed">
                            <span className="text-accent font-bold text-xs mt-1 shrink-0">0{k + 1}</span>
                            <span className="[&>strong]:text-text-primary [&>strong]:font-semibold">{formatBullet(b)}</span>
                          </li>
                        ))}
                      </ul>

                      {proj.tech && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {proj.tech.split(',').map(t => (
                            <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-elevated/40 text-text-muted rounded-md hover:bg-accent/10 hover:text-accent transition-all duration-200 border border-transparent hover:border-accent/20">
                              {t.trim()}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  )
}

function formatBullet(text) {
  // Bold key items automatically? Or just return as is?
  // Let's assume we want to bold terms like "Team Lead", "99.9% uptime", "4 hours to 5 minutes", "CI/CD", etc.
  // For now, I'll allow HTML-like bolding if I manually added <strong> tags in cv.js (but I didn't)
  // Instead, I'll just return it and let the user manually bold if they want, 
  // OR I can do a simple regex for numbers and percentages.
  return text.split(/(\d+\.?\d*%|\d+ hours|\d+ minutes|Team Lead|Technical Lead|Architected|Engineered|Spearheaded|TNG Mini Program|TNG MP)/g).map((part, i) => 
    /(\d+\.?\d*%|\d+ hours|\d+ minutes|Team Lead|Technical Lead|Architected|Engineered|Spearheaded|TNG Mini Program|TNG MP)/.test(part) 
      ? <strong key={i} className="text-text-primary font-bold">{part}</strong> 
      : part
  )
}
