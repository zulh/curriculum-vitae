import { RevealDiv } from '../hooks/useScrollReveal'
import { SectionHeading } from './About'

export default function Certifications({ certifications }) {
  const sorted = [...certifications].sort((a, b) => b.year - a.year)

  return (
    <section id="certifications" className="py-28 md:py-40 px-6 md:px-12 bg-paper hairline">
      <div className="max-w-5xl mx-auto">
        <RevealDiv>
          <SectionHeading eyebrow="04 — Credentials">Certifications</SectionHeading>
        </RevealDiv>

        <div className="mt-14 md:mt-20 grid md:grid-cols-2 gap-x-16">
          {sorted.map((cert, i) => (
            <RevealDiv
              key={i}
              delay={Math.min(i * 0.05, 0.2)}
              className="grid grid-cols-[1fr_auto] items-baseline gap-6 py-5 border-t border-line"
            >
              <div>
                <h3 className="text-ink text-[15px] md:text-base font-medium leading-snug">{cert.name}</h3>
                <p className="text-muted text-[11px] uppercase tracking-[0.18em] mt-1.5">{cert.issuer}</p>
              </div>
              <span className="font-serif text-xl text-muted">{cert.year}</span>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  )
}
