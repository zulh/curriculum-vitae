import { RevealDiv } from '../hooks/useScrollReveal'
import { SectionHeading } from './About'

export default function Experience({ experience }) {
  return (
    <section id="experience" className="py-28 md:py-40 px-6 md:px-12 bg-paper hairline">
      <div className="max-w-5xl mx-auto">
        <RevealDiv>
          <SectionHeading eyebrow="02 — Experience">Professional Journey</SectionHeading>
        </RevealDiv>

        <div className="mt-14 md:mt-20">
          {experience.map((job, i) => (
            <RevealDiv
              key={i}
              delay={Math.min(i * 0.08, 0.24)}
              className="group grid md:grid-cols-[190px_1fr] gap-6 md:gap-14 py-12 md:py-14 border-t border-line first:border-t-0 first:pt-0"
            >
              {/* Left rail: logo, period, client */}
              <div>
                <div className="w-16 h-16 rounded-lg bg-white border border-line shadow-sm flex items-center justify-center overflow-hidden p-2.5">
                  {job.logo ? (
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
                    />
                  ) : null}
                  <span className={`font-serif text-2xl text-slate-400 ${job.logo ? 'hidden' : 'flex'}`}>
                    {job.company.charAt(0)}
                  </span>
                </div>
                <p className="mt-5 text-muted text-xs uppercase tracking-[0.22em]">{job.period}</p>
                {job.client && (
                  <p className="mt-3 text-muted text-xs leading-relaxed max-w-[170px]">{job.client}</p>
                )}
              </div>

              {/* Right: company, role, projects */}
              <div>
                <h3 className="font-serif text-3xl md:text-[2.4rem] leading-none text-ink">{job.company}</h3>
                <p className="text-accent text-sm mt-2 tracking-wide">{job.role}</p>

                {job.projects.map((proj, j) => (
                  <div key={j} className="mt-9">
                    <h4 className="text-ink font-medium text-lg tracking-tight">{proj.title}</h4>
                    {proj.description && (
                      <p className="text-muted text-sm leading-relaxed mt-2 italic max-w-2xl">{proj.description}</p>
                    )}

                    <ul className="mt-5 space-y-3">
                      {proj.bullets.map((b, k) => (
                        <li key={k} className="text-muted text-[15px] leading-relaxed flex gap-4">
                          <span className="text-accent/60 select-none mt-2.5 shrink-0 w-4 h-px bg-accent/40" />
                          <span className="[&>strong]:text-ink [&>strong]:font-semibold">{formatBullet(b)}</span>
                        </li>
                      ))}
                    </ul>

                    {proj.tech && (
                      <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1.5">
                        {proj.tech.split(',').map(t => (
                          <span key={t} className="text-[11px] uppercase tracking-[0.12em] text-muted">
                            {t.trim()}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  )
}

// Bullets in cv.js mark emphasis with **double asterisks**; render those spans bold.
function formatBullet(text) {
  return text.split('**').map((part, i) =>
    i % 2 === 1
      ? <strong key={i} className="text-ink font-semibold">{part}</strong>
      : part
  )
}
