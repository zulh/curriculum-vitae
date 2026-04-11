import { motion } from 'framer-motion'
import { revealProps } from '../hooks/useScrollReveal'
import { SectionHeading } from './About'

export default function Education({ education }) {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading>Education</SectionHeading>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              {...revealProps(i * 0.1)}
              className="bg-surface rounded-lg p-6 border border-elevated"
            >
              <h3 className="text-text-primary font-bold">{edu.institution}</h3>
              {edu.degree && <p className="text-text-muted mt-1 text-sm">{edu.degree}</p>}
              <div className="flex justify-between items-center mt-4">
                <span className="text-accent text-sm font-medium">{edu.year}</span>
                {edu.result && <span className="text-text-muted text-sm">{edu.result}</span>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
