import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from './Hero'

const personal = {
  name: 'Ahmad Zulhilmi Ghazali',
  title: 'Full-Stack Software Engineer',
  subtitle: 'Building Production Systems',
  phone: '+6013-830 5184',
  email: 'a.zulhilmi92@gmail.com',
  location: 'Kuala Lumpur, Malaysia',
  linkedin: 'https://linkedin.com/in/zulhilmi-ghazali',
}

describe('Hero', () => {
  it('renders name, email and location', () => {
    render(<Hero personal={personal} />)
    expect(screen.getByText(personal.name)).toBeInTheDocument()
    expect(screen.getByText(personal.email)).toBeInTheDocument()
    expect(screen.getByText(personal.location)).toBeInTheDocument()
  })

  it('does not expose the phone number publicly', () => {
    render(<Hero personal={personal} />)
    expect(screen.queryByText(personal.phone)).not.toBeInTheDocument()
  })

  it('links out to LinkedIn', () => {
    render(<Hero personal={personal} />)
    const link = screen.getByText(/LinkedIn/).closest('a')
    expect(link).toHaveAttribute('href', personal.linkedin)
  })
})
