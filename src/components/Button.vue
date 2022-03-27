<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  href: {
    type: String,
    default: "",
  },
  isFluid: {
    type: Boolean,
    default: false,
  },
});

const ctaType = computed(() => {
  if (props.href) return "a";
  return "button";
});
</script>

<template>
  <component
    class="button"
    :class="{
      buttonFluid: isFluid,
    }"
    :is="ctaType"
  >
    <slot />
  </component>
</template>

<style lang="scss">
.button {
  display: flex;
  justify-content: center;
  padding: 12px 24px;
  background: linear-gradient(45deg, #bf47fd, #002094);
  border-radius: 8px;
  border: 0;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
}

.buttonFluid {
  width: 100%;
}
</style>
