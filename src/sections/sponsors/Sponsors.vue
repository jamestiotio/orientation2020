<template>
  <section id="thankees">
    <div class="thankees-body">
      <SectionHeader>Sponsors</SectionHeader>
      <ul class="thankees-content">
        <Para style="text-align: center; margin-top: 50px;"
          >Sponsors will be announced soon!</Para
        >
      </ul>
    </div>
  </section>
</template>

<script>
import SectionHeader from "@/components/SectionHeader.vue";
import Para from "@/components/Para.vue";

export default {
  name: "thankees",
  components: {
    SectionHeader,
    Para
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.thankees-body {
  background-color: var(--slope-body-color);
  width: 100%;
  padding: 100px 0;
  transform: translateY(-6px);
  transition: background-color 0.6s ease-out;
}

.thankees-content {
  margin: 0 150px;
  display: flex;
  flex-direction: column;
}

@media (--desktop-narrow) {
  .thankees-content {
    margin: 0 100px;
  }
}

@media (--mobile-narrow) {
  .thankees-content {
    margin: 0 30px;
  }
}
</style>
