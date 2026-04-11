import { motion } from 'framer-motion'
import { revealProps } from '../hooks/useScrollReveal'
import { SectionHeading } from './About'

export default function Certifications({ certifications }) {
  return (
    <section id="certifications" className="py-24 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <SectionHeading>Certifications</SectionHeading>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              {...revealProps(i * 0.07)}
              className="bg-primary border border-elevated rounded-lg p-5 hover:border-accent transition-colors duration-200"
            >
              <p className="text-accent text-xs font-semibold uppercase tracking-wider">{cert.issuer}</p>
              <h3 className="text-text-primary font-semibold mt-2 leading-snug">{cert.name}</h3>
              <p className="text-text-muted text-sm mt-3">Certified {cert.year}</p>
              {cert.credentialId && (
                <p className="text-text-muted text-xs mt-1">ID: {cert.credentialId}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
