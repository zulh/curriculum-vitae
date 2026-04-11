import { motion } from 'framer-motion'
import { useScrollReveal, staggerContainer, fadeUp } from '../hooks/useScrollReveal'
import { SectionHeading } from './About'

export default function Activities({ activities }) {
  const { ref, controls } = useScrollReveal()

  return (
    <section id="activities" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading>Extra Curricular Activities</SectionHeading>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="mt-10 space-y-8"
        >
          {activities.map((entry, i) => (
            <motion.div key={i} variants={fadeUp}>
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
        </motion.div>
      </div>
    </section>
  )
}
