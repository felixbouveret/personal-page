<script setup lang="ts">
import Button from "@/components/Button.vue";
</script>

<template>
  <div class="contactContainer">
    <h3 class="title">Let's grab a coffee ☕️</h3>
    <div class="content">
      <p class="text">
        Feel free to reach out for your next project, I'd be happy to help you!
      </p>

      <Button class="button" small href="mailto:bouveret.felix@gmail.com">
        Contact me
      </Button>
    </div>
    <p class="mail">bouveret.felix@gmail.com</p>
  </div>
</template>

<style lang="scss" scoped>
.contactContainer {
  @include below(xsmall) {
    text-align: left;
  }
}

.title {
  @include typo-headline;
  color: $black-400;
  margin: 0;
}

.content {
  @include typo-body;

  display: flex;
  align-items: center;

  gap: 16px;
  margin-top: 16px;

  @include above(xsmall) {
    flex-direction: column;
    align-items: initial;
  }
}

.button {
  flex-shrink: 0;
}

.mail {
  @include typo-tag;
  color: $black-100;
  margin-top: 8px;
}
</style>
