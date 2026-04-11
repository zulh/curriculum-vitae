import { describe, it, expect } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useScrollReveal } from './useScrollReveal'

describe('useScrollReveal', () => {
  it('returns ref and controls', () => {
    const { result } = renderHook(() => useScrollReveal())
    expect(result.current.ref).toBeDefined()
    expect(result.current.controls).toBeDefined()
  })

  it('returns fadeUp variants', () => {
    const { result } = renderHook(() => useScrollReveal())
    expect(result.current.fadeUp.hidden).toBeDefined()
    expect(result.current.fadeUp.visible).toBeDefined()
  })
})
