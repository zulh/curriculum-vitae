import { describe, it, expect } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useScrollReveal, fadeUp, staggerContainer } from './useScrollReveal'

describe('useScrollReveal', () => {
  it('returns scrollProps with whileInView', () => {
    const { result } = renderHook(() => useScrollReveal())
    expect(result.current.scrollProps.initial).toBe('hidden')
    expect(result.current.scrollProps.whileInView).toBe('visible')
    expect(result.current.scrollProps.viewport).toBeDefined()
  })

  it('returns fadeUp variants', () => {
    const { result } = renderHook(() => useScrollReveal())
    expect(result.current.fadeUp.hidden).toBeDefined()
    expect(result.current.fadeUp.visible).toBeDefined()
  })
})

describe('fadeUp', () => {
  it('has hidden and visible states', () => {
    expect(fadeUp.hidden.opacity).toBe(0)
    expect(fadeUp.visible.opacity).toBe(1)
  })
})
