import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Experience from './Experience'

const experience = [
  {
    company: 'Expro Group Malaysia',
    role: 'Full Stack Developer',
    period: 'April 2018 – Present',
    logo: '/logos/expro.png',
    projects: [
      { title: 'SafeWells', bullets: ['Built backend queries.'] },
    ],
  },
]

describe('Experience', () => {
  it('renders company name and role', () => {
    render(<Experience experience={experience} />)
    expect(screen.getByText('Expro Group Malaysia')).toBeInTheDocument()
    expect(screen.getByText('Full Stack Developer')).toBeInTheDocument()
  })

  it('renders project title', () => {
    render(<Experience experience={experience} />)
    expect(screen.getByText('SafeWells')).toBeInTheDocument()
  })
})
