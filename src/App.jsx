import { cv } from './data/cv'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Projects from './components/Projects'
import Activities from './components/Activities'
import Referees from './components/Referees'
import PrintLayout from './components/PrintLayout'

const NAV_SECTIONS = [
  'About', 'Experience', 'Skills', 'Certifications',
  'Education', 'Projects', 'Activities', 'Referees',
]

export default function App() {
  return (
    <>
    <div id="cv-content">
      <Navbar name={cv.personal.name} sections={NAV_SECTIONS} />
      <Hero personal={cv.personal} />
      <About profile={cv.profile} />
      <Experience experience={cv.experience} />
      <Skills skills={cv.skills} />
      <Certifications certifications={cv.certifications} />
      <Education education={cv.education} />
      <Projects projects={cv.projects} />
      <Activities activities={cv.activities} />
      <Referees referees={cv.referees} />
      
      {/* Hidden layout specifically for high-fidelity PDF generation */}
      <PrintLayout cv={cv} />
    </div>
    </>
  )
}
