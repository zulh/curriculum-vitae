import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

export default function Hero({ personal }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 md:px-12 bg-paper"
    >
      <div className="max-w-5xl mx-auto w-full py-32">
        <motion.p
          className="text-muted text-[11px] md:text-xs uppercase tracking-[0.4em] mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {personal.title}
        </motion.p>

        <motion.h1
          className="font-serif text-ink text-[3.25rem] leading-[0.98] sm:text-7xl md:text-[6.5rem] md:leading-[0.95] tracking-tight mb-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.05 }}
        >
          {personal.name}
        </motion.h1>

        <motion.p
          className="text-ink/70 max-w-xl text-lg md:text-xl leading-relaxed font-light mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
        >
          {personal.subtitle}
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ContactItem text={personal.email} href={`mailto:${personal.email}`} />
          <Dot />
          <span>{personal.location}</span>
          {personal.linkedin && (
            <>
              <Dot />
              <ContactItem text="LinkedIn ↗" href={personal.linkedin} external />
            </>
          )}
        </motion.div>
      </div>

      <motion.div
        className="absolute left-6 md:left-12 bottom-10 text-muted text-[10px] uppercase tracking-[0.3em] no-pdf"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        Scroll
      </motion.div>
    </section>
  )
}

function Dot() {
  return <span className="w-1 h-1 rounded-full bg-line hidden sm:inline-block" />
}

function ContactItem({ text, href, external }) {
  return (
    <a
      href={href}
      className="border-b border-line hover:border-accent hover:text-accent transition-colors duration-300 pb-0.5"
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {text}
    </a>
  )
}
