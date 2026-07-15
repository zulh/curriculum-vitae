import { RevealDiv } from '../hooks/useScrollReveal'

export default function About({ profile }) {
  return (
    <section id="about" className="py-28 md:py-40 px-6 md:px-12 bg-paper-2 hairline">
      <div className="max-w-4xl mx-auto">
        <RevealDiv>
          <SectionHeading eyebrow="01 — Profile">Executive Summary</SectionHeading>
        </RevealDiv>

        <RevealDiv delay={0.1}>
          <p className="mt-12 font-serif text-2xl md:text-[2rem] leading-[1.5] text-ink/85 font-normal">
            {profile}
          </p>
          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-3 text-muted text-[11px] uppercase tracking-[0.28em]">
            <span>8+ Years</span>
            <span>Insurtech · Aviation · Energy</span>
            <span>Full-Stack Engineering</span>
          </div>
        </RevealDiv>
      </div>
    </section>
  )
}

/**
 * Editorial section heading — a small tracked eyebrow above a serif title.
 * Shared by every section.
 */
export function SectionHeading({ children, eyebrow }) {
  return (
    <div>
      {eyebrow && (
        <p className="text-muted text-[11px] uppercase tracking-[0.35em] mb-5">{eyebrow}</p>
      )}
      <h2 className="font-serif text-4xl md:text-5xl text-ink tracking-tight leading-none">
        {children}
      </h2>
    </div>
  )
}
