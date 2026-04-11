import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Certifications from './Certifications'

const certifications = [
  { name: 'Azure Developer Associate', issuer: 'Microsoft', year: 2021, credentialId: 'H866-2444' },
]

describe('Certifications', () => {
  it('renders cert name and year', () => {
    render(<Certifications certifications={certifications} />)
    expect(screen.getByText('Azure Developer Associate')).toBeInTheDocument()
    expect(screen.getByText(/2021/)).toBeInTheDocument()
  })
})
