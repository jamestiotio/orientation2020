<template>
  <section id="clans">
    <Ursa />
    <Draco />
    <Sagitta />
    <Orion />
  </section>
</template>

<script>
import Ursa from "./Ursa.vue";
import Draco from "./Draco.vue";
import Sagitta from "./Sagitta.vue";
import Orion from "./Orion.vue";

export default {
  name: "clans",
  components: {
    Ursa,
    Draco,
    Sagitta,
    Orion
  }
};
</script>

<style scoped>
#clans {
  position: relative;
  padding-top: 30px;
  padding-bottom: 30px;
}
@media (--mobile-narrow) {
  #clans {
    padding-bottom: 20px;
  }
}
</style>
