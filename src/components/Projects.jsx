import { RevealDiv } from '../hooks/useScrollReveal'
import { SectionHeading } from './About'

export default function Projects({ projects }) {
  return (
    <section id="projects" className="py-28 md:py-40 px-6 md:px-12 bg-paper hairline">
      <div className="max-w-5xl mx-auto">
        <RevealDiv>
          <SectionHeading eyebrow="06 — Selected Work">Notable Work</SectionHeading>
        </RevealDiv>

        <div className="mt-14 md:mt-20 grid md:grid-cols-2 gap-x-16 gap-y-12">
          {projects.map((proj, i) => (
            <RevealDiv key={i} delay={i * 0.08} className="border-t border-line pt-6">
              <p className="text-muted text-[11px] uppercase tracking-[0.22em]">{proj.subject}</p>
              <h3 className="font-serif text-2xl md:text-[1.75rem] leading-tight text-ink mt-3">
                {proj.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mt-3 max-w-md">{proj.description}</p>
              {proj.award && (
                <p className="mt-5 text-accent text-xs uppercase tracking-[0.16em] flex items-center gap-2">
                  <span aria-hidden>✦</span>
                  <span>{proj.award}</span>
                </p>
              )}
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  )
}
