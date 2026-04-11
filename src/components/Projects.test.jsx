import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Projects from './Projects'

const projects = [
  { subject: 'HCI', title: 'Intelligent Vehicular System', description: 'Interface design.', award: 'Best Project' },
]

describe('Projects', () => {
  it('renders project title and subject', () => {
    render(<Projects projects={projects} />)
    expect(screen.getByText('Intelligent Vehicular System')).toBeInTheDocument()
    expect(screen.getByText('HCI')).toBeInTheDocument()
  })

  it('renders award badge when present', () => {
    render(<Projects projects={projects} />)
    expect(screen.getByText('Best Project')).toBeInTheDocument()
  })
})
