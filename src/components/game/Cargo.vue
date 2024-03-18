<template>
    <div class="absolute" :style="position">
    <img :src="cargoImg" alt="player">
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import cargoImg from '@/assets/cargo.png'

const cargo = {
  x: 2,
  y: 2
}

const { position } = usePosition()
function usePosition() {
  // const { player } = usePlayerStore()
  const STEP = 32
  const position = computed(() => {
    return {
      left: cargo.x * STEP + 'px',
      top: cargo.y * STEP + 'px'
    }
  })
  return {
    position
  }
}
</script>

<style scoped>

</style>
