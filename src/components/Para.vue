<template>
  <p>
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: "para"
};
</script>

<style scoped>
p {
  position: relative;
  display: inline-block;
  font-size: 24px;
  font-family: var(--font-primary), sans-serif;
  line-height: 1.6;
  z-index: 1;
  color: var(--color-regular-text);
}

span {
  border-bottom: 10px solid var(--color-accent);
  display: inline-block;
  line-height: 0.4;
  color: inherit;
  text-decoration: none;
}

@media (--mobile-narrow) {
  p {
    font-size: 20px;
  }
}
</style>
