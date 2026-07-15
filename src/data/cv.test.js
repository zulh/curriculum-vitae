import { describe, it, expect } from 'vitest'
import { cv } from './cv'

describe('cv data', () => {
  it('has required personal fields', () => {
    expect(cv.personal.name).toBe('Ahmad Zulhilmi Ghazali')
    expect(cv.personal.email).toBe('a.zulhilmi92@gmail.com')
    expect(cv.personal.title).toBeTruthy()
  })

  it('has experience entries that each contain projects', () => {
    expect(cv.experience.length).toBeGreaterThan(0)
    cv.experience.forEach(job => {
      expect(job.projects.length).toBeGreaterThan(0)
    })
  })

  it('groups skills into non-empty categories (no numeric levels)', () => {
    expect(cv.skills.categories.length).toBeGreaterThan(0)
    cv.skills.categories.forEach(cat => {
      expect(cat.title).toBeTruthy()
      expect(Array.isArray(cat.items)).toBe(true)
      expect(cat.items.length).toBeGreaterThan(0)
    })
  })

  it('includes ITIL 4 and drops the mislabeled MCSA: Programming in C#', () => {
    const names = cv.certifications.map(c => c.name)
    expect(names).toContain('ITIL 4 Foundation')
    expect(names).not.toContain('MCSA: Programming in C#')
  })

  it('does not expose referee contact details publicly', () => {
    cv.referees.forEach(ref => {
      expect(ref.phone).toBeUndefined()
      expect(ref.email).toBeUndefined()
    })
  })
})
