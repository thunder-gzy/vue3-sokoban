<template>
  <div class="absolute" :style="position">
    <img :src="keeperImg" alt="player">
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import keeperImg from '@/assets/keeper.png'
import { usePlayerStore, } from '@/store/player'

const { player, movePlayerToLeft, movePlayerToRight, movePlayerToUp, movePlayerToDown  } = usePlayerStore()
const STEP = 32

window.addEventListener('keyup', (e: KeyboardEvent) => {
  console.log('code', e.code)
  switch (e.code) {
    case 'ArrowLeft':
      movePlayerToLeft()
      break
    case 'ArrowRight':
      movePlayerToRight()
      break
    case 'ArrowUp':
      movePlayerToUp()
      break
    case 'ArrowDown':
      movePlayerToDown()
      break
    default:
      break
  }
})

const position = computed(() => {
  return {
  left: player.x * STEP + 'px',
  top: player.y * STEP + 'px'
}
})  
</script>

<style scoped></style>
