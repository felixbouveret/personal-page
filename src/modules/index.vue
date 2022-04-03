<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import FooterLinks from "@/components/FooterLinks";
</script>

<template>
  <section class="indexRoot">
    <div class="wrapper">
      <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
      <FooterLinks />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.indexRoot {
  display: flex;
  min-height: 100vh;
  padding: 80px 20px;
}
.wrapper {
  max-width: 440px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
  padding: 40px 20px;
  border: solid 2px rgba(212, 212, 212, 0.8);
  background-color: white;
  border-radius: 8px;
}
</style>
