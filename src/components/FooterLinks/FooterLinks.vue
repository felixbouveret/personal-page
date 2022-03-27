<script setup lang="ts">
import Github from "@/assets/github.svg";
import Linkedin from "@/assets/linkedin.svg";
import Twitter from "@/assets/twitter.svg";
</script>

<template>
  <ul class="links">
    <li>
      <a href="https://github.com/felixbouveret" target="_blank">
        <Github />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/felixbouveret" target="_blank">
        <Twitter />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/f%C3%A9lix-bouveret-010005150/">
        <Linkedin />
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.links {
  display: flex;
  justify-content: center;
  gap: 8px;

  li {
    display: block;
  }

  svg {
    display: block;
    width: 24px;
    height: 24px;

    transition: fill 0.3s;

    fill: rgba(212, 212, 212);
  }

  a:hover svg {
    fill: #708294;
  }
}
</style>
