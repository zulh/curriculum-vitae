import { describe, it, expect } from 'vitest'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { RevealDiv } from './useScrollReveal'

const el = React.createElement

describe('RevealDiv', () => {
  it('renders its children (content is never hidden from the DOM)', () => {
    render(el(RevealDiv, null, el('span', null, 'hello world')))
    expect(screen.getByText('hello world')).toBeInTheDocument()
  })

  it('passes through a className', () => {
    render(el(RevealDiv, { className: 'test-class' }, el('span', null, 'content')))
    expect(screen.getByText('content').parentElement).toHaveClass('test-class')
  })
})
