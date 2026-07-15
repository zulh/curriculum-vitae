import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Skills from './Skills'

const skills = {
  categories: [
    { title: 'Languages', items: ['C# / .NET', 'TypeScript'] },
    { title: 'Databases', items: ['PostgreSQL'] },
  ],
}

describe('Skills', () => {
  it('renders category titles and their items', () => {
    render(<Skills skills={skills} />)
    expect(screen.getByText('Languages')).toBeInTheDocument()
    expect(screen.getByText('C# / .NET')).toBeInTheDocument()
    expect(screen.getByText('PostgreSQL')).toBeInTheDocument()
  })

  it('does not render self-assigned percentages', () => {
    render(<Skills skills={skills} />)
    expect(screen.queryByText(/\d+%/)).not.toBeInTheDocument()
  })
})
