import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Skills from './Skills'

const skills = [
  { name: 'C# / ASP.NET', level: 90 },
  { name: 'SQL', level: 80 },
]

describe('Skills', () => {
  it('renders all skill names', () => {
    render(<Skills skills={skills} />)
    expect(screen.getByText('C# / ASP.NET')).toBeInTheDocument()
    expect(screen.getByText('SQL')).toBeInTheDocument()
  })

  it('renders level percentages', () => {
    render(<Skills skills={skills} />)
    expect(screen.getByText('90%')).toBeInTheDocument()
  })
})
