import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from './Hero'

vi.mock('@tsparticles/react', () => ({
  default: () => null,
  initParticlesEngine: vi.fn(() => Promise.resolve()),
}))
vi.mock('@tsparticles/slim', () => ({ loadSlim: vi.fn() }))

const personal = {
  name: 'Ahmad Zulhilmi Ghazali',
  title: '.NET Developer',
  phone: '+6013-830 5184',
  email: 'a.zulhilmi92@gmail.com',
  location: 'Taman Gombak Jaya, 53100 Kuala Lumpur',
}

describe('Hero', () => {
  it('renders contact info', () => {
    render(<Hero personal={personal} />)
    expect(screen.getByText(personal.phone)).toBeInTheDocument()
    expect(screen.getByText(personal.email)).toBeInTheDocument()
  })
})
