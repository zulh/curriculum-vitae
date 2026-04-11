import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Education from './Education'

const education = [
  { institution: 'UTP', degree: 'B.Tech ICT', year: '2014–2017', result: 'CGPA: 3.51' },
]

describe('Education', () => {
  it('renders institution and degree', () => {
    render(<Education education={education} />)
    expect(screen.getByText('UTP')).toBeInTheDocument()
    expect(screen.getByText('B.Tech ICT')).toBeInTheDocument()
  })
})
