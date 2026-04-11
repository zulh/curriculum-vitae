import { motion } from 'framer-motion'
import { useScrollReveal, staggerContainer } from '../hooks/useScrollReveal'
import { SectionHeading } from './About'

export default function Skills({ skills }) {
  const { scrollProps } = useScrollReveal()

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading>Computer Competencies</SectionHeading>

        <motion.div
          {...scrollProps}
          variants={staggerContainer}
          className="mt-10 space-y-5"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
            >
              <div className="flex justify-between mb-1">
                <span className="text-text-primary font-medium text-sm">{skill.name}</span>
                <span className="text-text-muted text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 bg-elevated rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-accent rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut', delay: i * 0.08 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
