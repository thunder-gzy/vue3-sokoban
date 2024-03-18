<template>
  <div class="game-box">
    <Map />
    <Player />
  </div>
</template>

<script setup lang="ts">
import Map from '@/components/game/Map.vue'
import Player from '@/components/game/Player.vue'

</script>

<style scoped>
.game-box {
  position: relative;
}

</style>
