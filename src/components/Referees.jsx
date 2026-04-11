import { motion } from 'framer-motion'
import { revealProps } from '../hooks/useScrollReveal'
import { SectionHeading } from './About'

export default function Referees({ referees }) {
  return (
    <section id="referees" className="py-24 px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <SectionHeading>Referees</SectionHeading>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {referees.map((person, i) => (
            <motion.div
              key={i}
              {...revealProps(i * 0.1)}
              className="bg-primary border border-elevated rounded-lg p-6"
            >
              <h3 className="text-text-primary font-bold text-lg">{person.name}</h3>
              <p className="text-accent text-sm font-medium mt-1">{person.role}</p>
              <p className="text-text-muted text-sm">{person.company}</p>
              <div className="mt-4 space-y-1 text-sm text-text-muted">
                <p>{person.phone}</p>
                <p>{person.email}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <p className="text-center text-text-muted text-sm mt-20">
        {new Date().getFullYear()} · Ahmad Zulhilmi Ghazali · Built with React &amp; Framer Motion
      </p>
    </section>
  )
}
