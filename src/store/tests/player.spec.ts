import { it, expect, describe, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { usePlayerStore } from '@/store/player'

describe('player', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should move to left', () => {
    const { movePlayerToLeft, player } = usePlayerStore()
    player.x = 1
    player.y = 1
    movePlayerToLeft()
    expect(player.x).toBe(0)
  })

  it('should move to right', () => {
    const { movePlayerToRight, player } = usePlayerStore()
    player.x = 1
    player.y = 1
    movePlayerToRight()
    expect(player.x).toBe(2)
  })

  it('should move to up', () => {
    const { movePlayerToUp, player } = usePlayerStore()
    player.x = 1
    player.y = 1
    movePlayerToUp()
    expect(player.y).toBe(0)
  })

  it('should move to down', () => {
    const { movePlayerToDown, player } = usePlayerStore()
    player.x = 1
    player.y = 1
    movePlayerToDown()
    expect(player.y).toBe(2)
  })
})
