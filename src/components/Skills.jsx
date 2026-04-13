import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'
import { RevealDiv } from '../hooks/useScrollReveal'
import { SectionHeading } from './About'

function SkillBar({ skill, index }) {
  const ref = useRef(null)
  const [revealed, setRevealed] = useState(false)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' })

  useEffect(() => {
    if (isInView) {
      setRevealed(true)
    }
  }, [isInView])

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-text-primary font-semibold text-xs uppercase tracking-wider">{skill.name}</span>
        <span className="text-accent text-xs font-bold">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-elevated/30 rounded-full overflow-hidden backdrop-blur-sm">
        <div
          ref={ref}
          className="h-full bg-gradient-to-r from-accent/60 to-accent rounded-full shadow-[0_0_10px_rgba(56,189,248,0.4)]"
          style={{
            width: revealed ? `${skill.level}%` : '0%',
            transition: `width 1.2s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1}s`,
            '--skill-percent': `${skill.level}%`
          }}
        />
      </div>
    </div>
  )
}

export default function Skills({ skills }) {
  return (
    <section id="skills" className="py-24 px-6 bg-primary/40">
      <div className="max-w-6xl mx-auto">
        <RevealDiv>
          <SectionHeading>Technical Expertise</SectionHeading>
          <p className="text-text-muted mt-4 max-w-2xl text-sm leading-relaxed mb-12">
            A comprehensive overview of my core technical proficiencies and cloud domain expertise, 
            developed through years of enterprise-scale development.
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
              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} index={i} />
                ))}
              </div>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  )
}
