import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About({ profile }) {
  const { scrollProps, fadeUp } = useScrollReveal()

  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div {...scrollProps} variants={fadeUp}>
        <SectionHeading>Personal Profile</SectionHeading>
        <p className="text-text-muted leading-relaxed text-lg mt-6">{profile}</p>
      </motion.div>
    </section>
  )
}

export function SectionHeading({ children }) {
  return (
    <h2 className="text-3xl font-bold text-text-primary relative inline-block after:block after:h-1 after:w-full after:bg-accent after:mt-2 after:rounded">
      {children}
    </h2>
  )
}
