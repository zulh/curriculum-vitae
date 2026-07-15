import { RevealDiv } from '../hooks/useScrollReveal'
import { SectionHeading } from './About'

export default function Skills({ skills }) {
  return (
    <section id="skills" className="py-28 md:py-40 px-6 md:px-12 bg-paper-2 hairline">
      <div className="max-w-5xl mx-auto">
        <RevealDiv>
          <SectionHeading eyebrow="03 — Capabilities">Technical Expertise</SectionHeading>
        </RevealDiv>

        <div className="mt-14 md:mt-20">
          {skills.categories.map((category, catIdx) => (
            <RevealDiv
              key={category.title}
              delay={Math.min(catIdx * 0.06, 0.24)}
              className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-10 py-6 border-t border-line"
            >
              <h3 className="text-muted text-xs uppercase tracking-[0.22em] pt-1">{category.title}</h3>
              <div className="flex flex-wrap gap-x-3 gap-y-2 text-[15px] text-ink/85">
                {category.items.map(item => (
                  <span
                    key={item}
                    className="after:content-['·'] after:text-line after:ml-3 last:after:content-['']"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  )
}
