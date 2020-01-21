<template>
  <section id="ending">
    <div class="ending-content">
      <Location />
    </div>
  </section>
</template>

<script>
import Location from "@/components/Location.vue";

export default {
  name: "ending",
  components: {
    Location
  }
};
</script>

<style scoped>
#ending {
  position: relative;
  padding-top: 30px;
  padding-bottom: 30px;
}

.ending-content {
  padding: 0 150px;
}

@media (--desktop-narrow) {
  .ending-content {
    padding: 0 100px;
  }
}

@media (--mobile-narrow) {
  #ending {
    padding-bottom: 30px;
  }
  .ending-content {
    padding: 0 50px;
  }
}
</style>
