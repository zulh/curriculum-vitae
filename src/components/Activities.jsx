import { RevealDiv } from '../hooks/useScrollReveal'
import { SectionHeading } from './About'

export default function Activities({ activities }) {
  return (
    <section id="activities" className="py-28 md:py-40 px-6 md:px-12 bg-paper-2 hairline">
      <div className="max-w-5xl mx-auto">
        <RevealDiv>
          <SectionHeading eyebrow="07 — Beyond Work">Activities & Contributions</SectionHeading>
        </RevealDiv>

        <div className="mt-14 md:mt-20 grid md:grid-cols-2 gap-x-16 gap-y-12">
          {activities.map((act, i) => (
            <RevealDiv key={i} delay={i * 0.08} className="border-t border-line pt-6">
              <h3 className="font-serif text-xl text-ink mb-5">{act.year}</h3>
              <ul className="space-y-3">
                {act.items.map((item, j) => (
                  <li key={j} className="text-muted text-[15px] leading-relaxed flex gap-4">
                    <span className="mt-2.5 shrink-0 w-3 h-px bg-accent/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  )
}
