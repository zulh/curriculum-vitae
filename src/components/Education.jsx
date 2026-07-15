import { RevealDiv } from '../hooks/useScrollReveal'
import { SectionHeading } from './About'

export default function Education({ education }) {
  return (
    <section id="education" className="py-28 md:py-40 px-6 md:px-12 bg-paper-2 hairline">
      <div className="max-w-5xl mx-auto">
        <RevealDiv>
          <SectionHeading eyebrow="05 — Education">Academic Foundation</SectionHeading>
        </RevealDiv>

        <div className="mt-14 md:mt-20 grid md:grid-cols-2 gap-x-16 gap-y-12">
          {education.map((edu, i) => (
            <RevealDiv key={i} delay={i * 0.08} className="border-t border-line pt-6">
              <p className="text-muted text-xs uppercase tracking-[0.22em]">{edu.year}</p>
              <h3 className="font-serif text-2xl md:text-[1.75rem] leading-tight text-ink mt-3">
                {edu.institution}
              </h3>
              {edu.degree && <p className="text-muted text-sm mt-2 leading-relaxed">{edu.degree}</p>}
              {edu.result && (
                <p className="text-accent text-xs uppercase tracking-[0.18em] mt-4">{edu.result}</p>
              )}
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  )
}
