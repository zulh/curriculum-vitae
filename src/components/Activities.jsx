import { motion } from 'framer-motion'
import { revealProps } from '../hooks/useScrollReveal'
import { SectionHeading } from './About'

export default function Activities({ activities }) {
  return (
    <section id="activities" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading>Extra Curricular Activities</SectionHeading>

        <div className="mt-10 space-y-8">
          {activities.map((entry, i) => (
            <motion.div key={i} {...revealProps(i * 0.1)}>
              <h3 className="text-accent font-bold text-lg">{entry.year}</h3>
              <ul className="mt-3 space-y-2">
                {entry.items.map((item, j) => (
                  <li key={j} className="text-text-muted text-sm flex gap-2">
                    <span className="text-accent mt-1 flex-shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
