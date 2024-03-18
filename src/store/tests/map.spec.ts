import { it, expect, describe } from 'vitest'
import { useMapStore } from '@/store/map'

describe('map', () => {
  it('should', () => {
    expect(true).toBe(true)
  })

  it('should setup map', () => {
    const { map, setupMap } = useMapStore()
    const newMap = [
      [1,1,1],
      [1,1,1],
      [1,1,1],
    ]
    setupMap(newMap)
    expect(map).toEqual(newMap)
  })
})
