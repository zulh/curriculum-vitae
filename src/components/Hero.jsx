import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export default function Hero({ personal, theme }) {
  const [engineReady, setEngineReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine)
    }).then(() => {
      setEngineReady(true)
    })
  }, [])

  // Dynamic particle configuration based on theme
  const particleOptions = {
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: 'grab' } },
      modes: { grab: { distance: 140, links: { opacity: 0.5 } } },
    },
    particles: {
      color: { value: getComputedStyle(document.documentElement).getPropertyValue('--particle-color').trim() || (theme === 'dark' ? '#38bdf8' : '#64748b') },
      links: { 
        color: getComputedStyle(document.documentElement).getPropertyValue('--particle-link').trim() || (theme === 'dark' ? '#38bdf8' : '#cbd5e1'), 
        distance: 150, 
        enable: true, 
        opacity: theme === 'dark' ? 0.2 : 0.1, 
        width: 1 
      },
      move: { enable: true, speed: 0.6 },
      number: { density: { enable: true }, value: 80 },
      opacity: { value: theme === 'dark' ? 0.3 : 0.2 },
      size: { value: { min: 1, max: 2 } },
    },
  }

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary transition-colors duration-500"
      style={{
        backgroundImage: 'radial-gradient(circle at 70% 20%, var(--glow-accent), transparent 50%)'
      }}
    >
      {/* Particle background */}
      {engineReady && (
        <Particles
          key={theme} // Force re-render on theme change
          id="tsparticles"
          className="absolute inset-0"
          options={particleOptions}
        />
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-black text-text-primary mb-2 leading-tight tracking-tight">
            {personal.title}
          </h1>
          <p className="text-accent text-sm md:text-lg font-bold tracking-[0.1em] mb-12 opacity-90">
            {personal.subtitle}
          </p>
          <div className="text-5xl md:text-7xl font-black text-text-primary mb-8 leading-tight tracking-tight">
            <span className="pdf-mode:hidden">
              <TypeAnimation
                sequence={[personal.name, 1000]}
                wrapper="span"
                speed={50}
                repeat={0}
                cursor={true}
              />
            </span>
            <span className="hidden pdf-mode:inline">{personal.name}</span>
          </div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-text-muted text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <ContactItem icon={<PhoneIcon />} text={personal.phone} />
            <ContactItem icon={<MailIcon />} text={personal.email} />
            <ContactItem icon={<LocIcon />} text={personal.location} />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 no-pdf"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <a 
              href="#experience"
              className="group relative px-8 py-4 bg-accent text-slate-900 rounded-full font-black uppercase tracking-widest text-xs overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Journey
                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute left-1/2 -translate-x-1/2 bottom-12 no-pdf"
          animate={{ y: [0, 10, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg className="w-6 h-6 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}

function ArrowRightIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  )
}

function ContactItem({ icon, text }) {
  return (
    <div className="flex items-center gap-2 hover:text-accent transition-colors duration-200">
      <span className="text-accent/80">{icon}</span>
      <span>{text}</span>
    </div>
  )
}

// Icons
const PhoneIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
)
const MailIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
)
const LocIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
)
