import { RevealDiv } from '../hooks/useScrollReveal'
import { SectionHeading } from './About'

export default function Certifications({ certifications }) {
  return (
    <section id="certifications" className="py-24 px-6 relative bg-primary section-border-t transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <RevealDiv>
          <SectionHeading>Certifications</SectionHeading>
        </RevealDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[...certifications]
            .sort((a, b) => b.year - a.year)
            .map((cert, i) => (
            <RevealDiv key={i} delay={i * 0.1} className="h-full">
              <div className="group relative bg-[var(--bg-card)] border border-border-dim rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent bg-accent/5 px-2 py-0.5 rounded border border-accent/10">
                    {cert.issuer}
                  </span>
                  <span className="text-text-muted/40 transition-colors group-hover:text-accent">
                    <CertIcon />
                  </span>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-text-primary font-bold text-lg leading-snug group-hover:text-accent transition-colors duration-300">
                    {cert.name}
                  </h3>
                </div>
                
                <div className="mt-8 pt-4 border-t border-border-dim/30 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] text-text-muted font-bold uppercase tracking-wider mb-1 opacity-60">Verified Date</p>
                    <p className="text-text-primary text-sm font-semibold">{cert.year}</p>
                  </div>
                  {cert.credentialId && (
                    <div className="text-right">
                      <p className="text-[10px] text-text-muted font-bold uppercase tracking-wider mb-1 opacity-60">ID</p>
                      <p className="text-text-muted text-[10px] font-mono tracking-tighter">{cert.credentialId}</p>
                    </div>
                  )}
                </div>
              </div>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  )
}

function CertIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  )
}
