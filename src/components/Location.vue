<template>
  <section id="location">
    <div class="location-content-aside">
      <Para>Ellios has come to.</Para>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3988.724908687625!2d103.96194377917459!3d1.3414140115758566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssutd!5e0!3m2!1sen!2ssg!4v1525927478994"
      width="600"
      height="500"
      frameborder="0"
      style="border:0"
      allowfullscreen
    ></iframe>
  </section>
</template>

<script>
import Para from "@/components/Para";

export default {
  name: "location",
  components: {
    Para
  }
};
</script>

<style scoped>
#location {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 30px;
  flex-direction: column;
}

.location-content-aside {
  width: 100%;
  margin-bottom: 30px;
  position: relative;
  z-index: 1;
}

iframe {
  width: 100%;
}
</style>
