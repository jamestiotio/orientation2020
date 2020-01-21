<template>
  <div id="backdrop" aria-hidden="true"></div>
</template>

<script>
export default {
  name: "backdrop"
};
</script>

<style scoped>
div {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 998;
  opacity: 0;
  background-color: #000000;
}
</style>
