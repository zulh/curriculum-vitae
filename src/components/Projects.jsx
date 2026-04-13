import { RevealDiv } from '../hooks/useScrollReveal'
import { SectionHeading } from './About'

export default function Projects({ projects }) {
  return (
    <section id="projects" className="py-24 px-6 relative bg-primary section-border-t transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <RevealDiv>
          <SectionHeading>Notable Work</SectionHeading>
        </RevealDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((proj, i) => (
            <RevealDiv
              key={i}
              delay={i * 0.1}
              className="relative group bg-[var(--bg-card)] backdrop-blur-sm border border-border-dim rounded-3xl p-8 hover:border-accent/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <ProjBgIcon />
              </div>

              <div className="relative z-10 h-full flex flex-col">
                <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-4">
                  {proj.subject}
                </span>
                
                <h3 className="text-2xl font-black text-text-primary tracking-tight mb-4 group-hover:text-accent transition-colors">
                  {proj.title}
                </h3>
                
                <p className="text-text-muted text-sm leading-relaxed mb-8 flex-grow">
                  {proj.description}
                </p>
                
                {proj.award && (
                  <div className="flex items-center gap-3 px-4 py-3 bg-accent/5 border border-accent/20 rounded-2xl">
                    <div className="text-accent animate-bounce">
                      <AwardIcon />
                    </div>
                    <span className="text-[11px] font-black text-accent uppercase tracking-widest">
                      {proj.award}
                    </span>
                  </div>
                )}
              </div>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  )
}

function AwardIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
    </svg>
  )
}

function ProjBgIcon() {
  return (
    <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  )
}
