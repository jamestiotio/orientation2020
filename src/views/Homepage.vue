<template>
  <div id="homepage">
    <Hero />
    <Clans />
    <Ending />
    <Sponsors />
    <Foot />
    <Backdrop />
  </div>
</template>

<script>
import Hero from "@/sections/hero/Hero.vue";
import Clans from "@/sections/clan/Clans.vue";
import Ending from "@/sections/ending/Ending.vue";
import Sponsors from "@/sections/sponsors/Sponsors.vue";
import Foot from "@/sections/foot/Foot.vue";
import Backdrop from "@/components/Backdrop.vue";

export default {
  name: "homepage",
  components: {
    Hero,
    Clans,
    Ending,
    Sponsors,
    Foot,
    Backdrop
  }
};
</script>
