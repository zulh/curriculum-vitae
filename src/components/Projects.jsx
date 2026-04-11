import { motion } from 'framer-motion'
import { useScrollReveal, staggerContainer, fadeUp } from '../hooks/useScrollReveal'
import { SectionHeading } from './About'

export default function Projects({ projects }) {
  const { ref, controls } = useScrollReveal()

  return (
    <section id="projects" className="py-24 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <SectionHeading>University Projects</SectionHeading>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-primary border border-elevated rounded-lg p-6 hover:border-accent transition-colors duration-200"
            >
              <p className="text-accent text-xs font-semibold uppercase tracking-wider">{proj.subject}</p>
              <h3 className="text-text-primary font-bold mt-2">{proj.title}</h3>
              <p className="text-text-muted text-sm mt-3 leading-relaxed">{proj.description}</p>
              {proj.award && (
                <span className="inline-block mt-4 text-xs bg-accent/10 text-accent border border-accent/30 rounded px-2 py-1">
                  {proj.award}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
