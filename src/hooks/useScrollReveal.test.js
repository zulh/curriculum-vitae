import { describe, it, expect } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useScrollReveal, revealProps, fadeUp, staggerContainer } from './useScrollReveal'

describe('useScrollReveal', () => {
  it('returns revealProps function', () => {
    const { result } = renderHook(() => useScrollReveal())
    expect(typeof result.current.revealProps).toBe('function')
  })

  it('revealProps returns correct animation props', () => {
    const props = revealProps()
    expect(props.initial.opacity).toBe(0)
    expect(props.whileInView.opacity).toBe(1)
    expect(props.viewport.once).toBe(true)
  })

  it('revealProps applies delay', () => {
    const props = revealProps(0.3)
    expect(props.transition.delay).toBe(0.3)
  })
})

describe('fadeUp', () => {
  it('has hidden and visible states', () => {
    expect(fadeUp.hidden.opacity).toBe(0)
    expect(fadeUp.visible.opacity).toBe(1)
  })
})
