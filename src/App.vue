<template>
  <div id="app">
    <Homepage />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Homepage from "./views/Homepage.vue";

declare global {
  interface Window {
    lastFocusedEl: string;
  }
}

export default Vue.extend({
  name: "app",
  components: {
    Homepage
  }
});
</script>

<style>
@font-face {
  font-family: "Ailerons";
  font-style: normal;
  font-weight: 900;
  src: local("Ailerons Regular"), local("Ailerons-Regular"),
    url("../public/assets/fonts/ailerons.woff") format("woff");
}

@font-face {
  font-family: "Nasalization";
  font-style: normal;
  font-weight: 400;
  src: local("Nasalization Regular"), local("Nasalization-Regular"),
    url("../public/assets/fonts/nasalization.woff") format("woff");
}

@font-face {
  font-family: "Ironstrike";
  font-style: normal;
  font-weight: 800;
  src: local("Ironstrike ExtraBold Italic"),
    local("Ironstrike-Extrabold-Italic"),
    url("../public/assets/fonts/ironstrike.woff") format("woff");
}

:root {
  --font-primary: "Nasalization";
  --font-secondary: "Ailerons";
  --font-tertiary: "Ironstrike";

  --color-background: #1a2626;
  --color-title-text: #f2e3dd;
  --color-section-title-text: #f2e3dd;
  --color-regular-text: #f2e3dd;
  --color-accent: #f2e3dd;
  --color-gray: #b6c8c5;
  --modal-body-color: #111111;
}

@custom-media --mobile-narrow (max-width: 570px);
@custom-media --mobile-wide (max-width: 847px);
@custom-media --desktop-narrow (max-width: 1000px);

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  overflow-x: hidden !important;
}

body {
  position: relative;
  background-color: var(--color-background);
  transition: background-color 0.6s ease-out;
  overflow-x: hidden !important;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
}

button {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  text-transform: inherit;
  text-decoration: none;
  border: none;
  background: none;
  cursor: pointer;
}

.sr-only:not(:focus):not(:active) {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

*:focus {
  outline: 5px solid var(--color-accent);
}
</style>
