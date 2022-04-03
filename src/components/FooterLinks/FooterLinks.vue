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
        <p>
          felixbouveret - 28 repositories available. Follow my code on GitHub.
        </p>
      </a>
    </li>
    <li>
      <a href="https://twitter.com/felixbouveret" target="_blank">
        <Twitter />
        <p>
          @felixbouveret - I'm on Twitter, sometimes sharing stuff about dev.
        </p>
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/f%C3%A9lix-bouveret-010005150/">
        <Linkedin />
        <p>
          Félix Bouveret <br />
          Junior Front-End Engineer @Luko
        </p>
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.links {
  display: flex;
  flex-direction: column;
  gap: 16px;

  li {
    display: block;
  }

  a {
    text-align: left;
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 16px;
    padding: 16px;
    position: relative;
    z-index: 1;

    p {
      flex-shrink: 2;
      @include typo-body;
      color: $fake-black;
    }

    &:before,
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      border-radius: 8px;
      transform: translate(-50%, -50%);
    }

    &::before {
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      background: $gradient;
      z-index: -2;
    }
    &::after {
      width: 100%;
      border-radius: 6px;
      background: white;
      height: 100%;
      z-index: -1;
    }
  }

  svg {
    display: block;
    width: 32px;
    height: 32px;

    transition: fill 0.3s;

    fill: rgba(212, 212, 212);
  }

  a:hover svg {
    fill: #708294;
  }
}
</style>
