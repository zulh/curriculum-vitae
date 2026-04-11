import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Activities from './Activities'

const activities = [
  { year: 2020, items: ['Mentoring new joiners'] },
]

describe('Activities', () => {
  it('renders year and activity item', () => {
    render(<Activities activities={activities} />)
    expect(screen.getByText('2020')).toBeInTheDocument()
    expect(screen.getByText('Mentoring new joiners')).toBeInTheDocument()
  })
})
