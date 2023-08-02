<template>
  <div class="container">
    <h1 class="title">
      Hey there! 👋 I'm
      <span class="name">Félix Bouveret</span> and I'm a
      <span class="jobTitle">Front-End Developer.</span>
    </h1>

    <p class="description">
      I'm a front-end developer with a passion for building beautiful,
      performant, and accessible web applications.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.title {
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2em;
}

.name {
  white-space: pre;
}
.name,
.jobTitle {
  font-weight: 600;

  background: $gradient;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  font-weight: 500;
  margin-top: 16px;
  line-height: 1.2em;
}

.button {
  display: flex;
  margin-top: 40px;
  align-items: center;
  gap: 8px;
  padding-right: 16px;

  svg {
    transform: rotate(180deg);
    flex-shrink: 0;
    width: 16px;
    fill: white;
    transition: ease 0.3s;
  }

  &:hover svg {
    transform: rotate(180deg) translateX(-4px);
  }

  @include above(small) {
    width: 100%;
  }
}
</style>
