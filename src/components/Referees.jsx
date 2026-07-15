import { RevealDiv } from '../hooks/useScrollReveal'
import { SectionHeading } from './About'

export default function Referees({ referees }) {
  return (
    <section id="referees" className="py-28 md:py-40 px-6 md:px-12 bg-paper hairline">
      <div className="max-w-5xl mx-auto">
        <RevealDiv>
          <SectionHeading eyebrow="08 — References">Professional Endorsements</SectionHeading>
        </RevealDiv>

        <div className="mt-14 md:mt-20 grid md:grid-cols-2 gap-x-16 gap-y-12">
          {referees.map((ref, i) => (
            <RevealDiv key={i} delay={i * 0.08} className="border-t border-line pt-6">
              <h3 className="font-serif text-2xl md:text-[1.75rem] text-ink leading-tight">{ref.name}</h3>
              <div className="flex flex-wrap items-center gap-2 mt-2 text-muted text-xs uppercase tracking-[0.16em]">
                <span className="text-accent">{ref.role}</span>
                <span className="w-1 h-1 rounded-full bg-line" />
                <span>{ref.company}</span>
              </div>
              <p className="mt-6 text-muted text-sm leading-relaxed">
                Contact details shared privately with employers on request.
              </p>
            </RevealDiv>
          ))}
        </div>

        <footer className="mt-28 pt-8 border-t border-line text-center">
          <p className="text-muted text-[11px] uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Ahmad Zulhilmi Ghazali
          </p>
        </footer>
      </div>
    </section>
  )
}
