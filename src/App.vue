<script setup lang="ts">
import HomeModule from "@/modules/index.vue";
</script>

<template>
  <div id="root">
    <HomeModule />
  </div>
</template>

<style lang="scss" scoped>
#root {
  background-color: #f9f9f9;
  color: #2c3e50;
  height: 100%;

  &.darkMode {
    background-color: #2c3e50;
    color: #f9f9f9;
  }
}
</style>
