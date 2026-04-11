import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import About from './About'

describe('About', () => {
  it('renders the profile text', () => {
    render(<About profile="A highly ambitious person" />)
    expect(screen.getByText(/highly ambitious/i)).toBeInTheDocument()
  })
})
