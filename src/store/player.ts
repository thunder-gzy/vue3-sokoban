import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { useMapStore } from '@/store/map'
export const usePlayerStore = defineStore('player', () => {
  const { isWall } = useMapStore()
  const player = reactive({
    x: 1,
    y: 1,
  })

  const movePlayerToLeft = () => {
    if (isWall({ x: player.x - 1, y: player.y })) return
    player.x -= 1
  }

  const movePlayerToRight = () => {
    if (isWall({ x: player.x + 1, y: player.y })) return
    player.x += 1
  }

  const movePlayerToUp = () => {
    if (isWall({ x: player.x, y: player.y - 1 })) return
    player.y -= 1
  }

  const movePlayerToDown = () => {
    if (isWall({ x: player.x, y: player.y + 1 })) return
    player.y += 1
  }

  return {
    player,
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToUp,
    movePlayerToDown,
  }
})
