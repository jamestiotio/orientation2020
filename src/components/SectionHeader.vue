<template>
  <h3>
    <slot></slot>
  </h3>
</template>

<script>
export default {
  name: "section-header"
};
</script>

<style scoped>
h3 {
  font-family: var(--font-secondary), sans-serif;
  font-size: calc(24px + 2vw);
  font-weight: 700;
  color: var(--color-section-title-text);
  text-align: center;
}
</style>
