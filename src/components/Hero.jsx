import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export default function Hero({ personal }) {
  const [engineReady, setEngineReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine)
    }).then(() => {
      setEngineReady(true)
    })
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle background */}
      {engineReady && (
        <Particles
          id="tsparticles"
          className="absolute inset-0"
          options={{
            background: { color: { value: '#0f172a' } },
            fpsLimit: 60,
            interactivity: {
              events: { onHover: { enable: true, mode: 'repulse' } },
              modes: { repulse: { distance: 100 } },
            },
            particles: {
              color: { value: '#38bdf8' },
              links: { color: '#38bdf8', distance: 150, enable: true, opacity: 0.2, width: 1 },
              move: { enable: true, speed: 1 },
              number: { density: { enable: true }, value: 60 },
              opacity: { value: 0.3 },
              size: { value: { min: 1, max: 3 } },
            },
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            {personal.title}
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-text-primary mb-6 leading-tight">
            <TypeAnimation
              sequence={[personal.name, 1000]}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={true}
            />
          </h1>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-text-muted text-sm mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <span>{personal.phone}</span>
            <span className="hidden sm:block text-elevated">|</span>
            <span>{personal.email}</span>
            <span className="hidden sm:block text-elevated">|</span>
            <span>{personal.location}</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg className="w-6 h-6 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
