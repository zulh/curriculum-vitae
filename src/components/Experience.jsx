import { motion } from 'framer-motion'
import { useScrollReveal, staggerContainer, fadeUp } from '../hooks/useScrollReveal'
import { SectionHeading } from './About'

export default function Experience({ experience }) {
  const { scrollProps } = useScrollReveal()

  return (
    <section id="experience" className="py-24 px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <SectionHeading>Industrial Exposure</SectionHeading>

        <motion.div
          {...scrollProps}
          variants={staggerContainer}
          className="mt-12 relative border-l-2 border-elevated pl-8 space-y-12"
        >
          {experience.map((job, i) => (
            <motion.div key={i} variants={fadeUp} className="relative">
              <span className="absolute -left-[2.85rem] top-1 w-4 h-4 rounded-full bg-accent border-4 border-primary" />

              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-xl font-bold text-text-primary">{job.company}</h3>
                  <p className="text-accent font-medium">{job.role}</p>
                  <p className="text-text-muted text-sm mt-1">{job.period}</p>
                </div>
                {job.logo && (
                  <img src={job.logo} alt={job.company} className="h-10 object-contain opacity-80" />
                )}
              </div>

              <div className="mt-6 space-y-4">
                {job.projects.map((proj, j) => (
                  <div key={j}>
                    <h4 className="font-semibold text-text-primary">{proj.title}</h4>
                    <ul className="mt-2 space-y-1">
                      {proj.bullets.map((b, k) => (
                        <li key={k} className="text-text-muted text-sm flex gap-2">
                          <span className="text-accent mt-1 flex-shrink-0">›</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
