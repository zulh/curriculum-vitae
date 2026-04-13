import { RevealDiv } from '../hooks/useScrollReveal'
import { SectionHeading } from './About'

export default function Activities({ activities }) {
  return (
    <section id="activities" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <RevealDiv>
          <SectionHeading>Impact & Leadership</SectionHeading>
          <p className="text-text-muted mt-4 max-w-2xl text-sm leading-relaxed mb-12">
            Beyond the code: my contributions to organizational culture, mentorship, 
            and community initiatives.
          </p>
        </RevealDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((act, i) => (
            <RevealDiv
              key={i}
              delay={i * 0.1}
              className="bg-primary/40 backdrop-blur-md border border-elevated/40 rounded-3xl p-8 hover:border-accent/40 transition-all duration-300"
            >
              <h3 className="text-lg font-black text-accent uppercase tracking-[0.15em] mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-accent/30" />
                {act.year}
              </h3>
              <ul className="space-y-4">
                {act.items.map((item, j) => (
                  <li key={j} className="text-text-primary/80 text-sm leading-relaxed flex gap-3 group">
                    <span className="text-accent opacity-50 group-hover:opacity-100 transition-opacity mt-1.5">•</span>
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
