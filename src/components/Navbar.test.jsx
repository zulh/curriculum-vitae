import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'

const sections = ['About', 'Experience', 'Skills', 'Certifications', 'Education', 'Projects', 'Activities', 'Referees']

describe('Navbar', () => {
  it('renders the name', () => {
    render(<Navbar name="Ahmad Zulhilmi Ghazali" sections={sections} />)
    expect(screen.getByText('Ahmad Zulhilmi Ghazali')).toBeInTheDocument()
  })

  it('renders all section links', () => {
    render(<Navbar name="Ahmad Zulhilmi Ghazali" sections={sections} />)
    sections.forEach(s => {
      expect(screen.getByRole('link', { name: s })).toBeInTheDocument()
    })
  })
})
