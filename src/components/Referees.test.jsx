import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Referees from './Referees'

const referees = [
  { name: 'Mahesh Lakshmanan', role: 'IT Lead', company: 'Expro', phone: '+6014 9934 665', email: 'mahesh@expro.com' },
]

describe('Referees', () => {
  it('renders referee name and role', () => {
    render(<Referees referees={referees} />)
    expect(screen.getByText('Mahesh Lakshmanan')).toBeInTheDocument()
    expect(screen.getByText('IT Lead')).toBeInTheDocument()
  })
})
