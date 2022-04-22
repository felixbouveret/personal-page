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
  small: {
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
    :is="ctaType"
    class="button"
    :class="{
      buttonFluid: isFluid,
      small: small,
    }"
    :href="href ?? null"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<style lang="scss" scoped>
.button {
  @include typo-body;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  background: $gradient;
  border-radius: 8px;
  border: 0;
  color: white;
  cursor: pointer;
  text-decoration: none;
}

.buttonFluid {
  width: 100%;
}

.small {
  @include typo-tag;
}
</style>
