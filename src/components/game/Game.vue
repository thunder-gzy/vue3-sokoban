<template>
  <div class="game-box">
    <Map />
    <Player />
    <Cargo />
  </div>
</template>

<script setup lang="ts">
import Map from '@/components/game/Map.vue'
import Player from '@/components/game/Player.vue'
import Cargo from '@/components/game/Cargo.vue'

</script>

<style scoped>
.game-box {
  position: relative;
}

</style>
