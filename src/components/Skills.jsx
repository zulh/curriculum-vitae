import { RevealDiv } from '../hooks/useScrollReveal'
import { SectionHeading } from './About'

export default function Skills({ skills }) {
  return (
    <section id="skills" className="py-24 px-6 bg-surface transition-colors duration-500 section-border-t">
      <div className="max-w-6xl mx-auto">
        <RevealDiv>
          <SectionHeading>Technical Expertise</SectionHeading>
          <p className="text-text-muted mt-4 max-w-2xl text-sm leading-relaxed mb-12">
            Core technical proficiencies across the stack, cloud, and delivery,
            developed through years of enterprise-scale production engineering.
          </p>
        </RevealDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {skills.categories.map((category, catIdx) => (
            <RevealDiv key={category.title} delay={catIdx * 0.1}>
              <h3 className="text-text-primary font-bold text-lg mb-6 flex items-center gap-3">
                <span className="h-px flex-1 bg-elevated"></span>
                <span className="flex-none bg-surface/50 px-4 py-1 rounded-full text-xs text-accent border border-accent/20">
                  {category.title}
                </span>
                <span className="h-px flex-1 bg-elevated"></span>
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.items.map(item => (
                  <span
                    key={item}
                    className="text-xs font-semibold px-3.5 py-2 rounded-lg bg-elevated/40 text-text-primary/90 border border-border-dim hover:border-accent/40 hover:text-accent hover:bg-accent/5 transition-all duration-200"
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
