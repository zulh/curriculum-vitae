import { RevealDiv } from '../hooks/useScrollReveal'
import { SectionHeading } from './About'

export default function Referees({ referees }) {
  return (
    <section id="referees" className="py-24 px-6 relative overflow-hidden bg-primary section-border-t transition-colors duration-500">
      {/* Visual background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.2] transition-opacity duration-500 no-pdf"
        style={{ backgroundImage: `radial-gradient(var(--bg-dot) 1.5px, transparent 1.5px)`, backgroundSize: '30px 30px' }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <RevealDiv>
          <SectionHeading>Professional Endorsements</SectionHeading>
          <p className="text-text-muted mt-4 max-w-2xl text-sm leading-relaxed mb-12">
            References available upon request to validate leadership, technical performance, 
            and organizational contributions.
          </p>
        </RevealDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {referees.map((ref, i) => (
            <RevealDiv
              key={i}
              delay={i * 0.1}
              className="group bg-[var(--bg-card)] backdrop-blur-xl border border-border-dim rounded-[2rem] p-8 md:p-10 hover:border-accent/40 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="flex flex-col h-full">
                <div>
                   <h3 className="text-2xl font-black text-text-primary tracking-tight group-hover:text-accent transition-colors">
                    {ref.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className="text-accent font-bold text-xs uppercase tracking-widest">{ref.role}</span>
                    <span className="w-1 h-1 rounded-full bg-elevated" />
                    <span className="text-text-muted text-xs font-semibold uppercase tracking-widest">{ref.company}</span>
                  </div>
                </div>

                <div className="mt-auto pt-8 flex items-center gap-3 text-text-muted">
                  <span className="w-8 h-8 rounded-lg bg-elevated/30 flex items-center justify-center">
                    <LockIcon />
                  </span>
                  <p className="text-xs font-medium leading-snug">
                    Contact details shared privately with employers on request.
                  </p>
                </div>
              </div>
            </RevealDiv>
          ))}
        </div>

        <footer className="mt-32 pt-12 border-t border-elevated/20 text-center">
          <p className="text-text-muted text-[10px] font-black uppercase tracking-[0.4em] opacity-40">
            © {new Date().getFullYear()} Ahmad Zulhilmi Ghazali • Built with React & Modern Web Standards
          </p>
        </footer>
      </div>
    </section>
  )
}

function LockIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
  )
}
