import { RevealDiv } from '../hooks/useScrollReveal'

export default function About({ profile }) {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden bg-primary">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-elevated to-transparent opacity-20" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <RevealDiv>
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="flex-none hidden md:block mt-2">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <ProfileIcon />
              </div>
            </div>
            
            <div className="flex-1">
              <SectionHeading>Executive Summary</SectionHeading>
              <div className="relative mt-10">
                <span className="absolute -left-6 top-0 text-6xl text-accent/10 font-serif leading-none italic select-none">“</span>
                <p className="text-text-primary/90 leading-relaxed text-lg md:text-xl font-medium tracking-tight">
                  {profile}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Badge text="7+ Years Experience" />
                  <Badge text="Cloud Architecture" />
                  <Badge text="Full-Stack Engineering" />
                </div>
              </div>
            </div>
          </div>
        </RevealDiv>
      </div>
    </section>
  )
}

function Badge({ text }) {
  return (
    <span className="px-4 py-1.5 bg-accent/5 border border-accent/20 rounded-full text-[10px] font-black uppercase tracking-widest text-accent">
      {text}
    </span>
  )
}

function ProfileIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  )
}

export function SectionHeading({ children }) {
  return (
    <div className="relative group inline-block">
      <h2 className="text-3xl md:text-4xl font-black text-text-primary tracking-tighter uppercase">
        {children}
      </h2>
      <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-accent rounded-full transition-all duration-500 group-hover:w-full group-hover:shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
    </div>
  )
}
