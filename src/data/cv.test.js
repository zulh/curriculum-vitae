import { describe, it, expect } from 'vitest'
import { cv } from './cv'

describe('cv data', () => {
  it('has required personal fields', () => {
    expect(cv.personal.name).toBe('Ahmad Zulhilmi Ghazali')
    expect(cv.personal.email).toBe('a.zulhilmi92@gmail.com')
    expect(cv.personal.title).toBe('.NET Developer')
  })

  it('has at least one experience entry with projects', () => {
    expect(cv.experience.length).toBeGreaterThan(0)
    expect(cv.experience[0].projects.length).toBeGreaterThan(0)
  })

  it('all skills have a level between 0 and 100', () => {
    cv.skills.forEach(skill => {
      expect(skill.level).toBeGreaterThanOrEqual(0)
      expect(skill.level).toBeLessThanOrEqual(100)
    })
  })
})
