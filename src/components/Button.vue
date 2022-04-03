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
    :href="href ?? null"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<style lang="scss" scoped>
.button {
  display: flex;
  justify-content: center;
  padding: 12px 24px;
  background: $gradient;
  border-radius: 8px;
  border: 0;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
}

.buttonFluid {
  width: 100%;
}
</style>
