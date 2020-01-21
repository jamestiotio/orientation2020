<template>
  <vue100vh id="hero">
    <Navbar />
    <HeroContent />
    <HeroImage />
  </vue100vh>
</template>

<script>
import vue100vh from "vue-100vh";
import Navbar from "@/sections/hero/Navbar.vue";
import HeroContent from "@/sections/hero/HeroContent.vue";
import HeroImage from "@/sections/hero/HeroImage.vue";

export default {
  name: "hero",
  components: {
    vue100vh,
    Navbar,
    HeroContent,
    HeroImage
  }
};
</script>

<style scoped>
#hero {
  position: relative;
  min-height: 620px;
}
</style>
