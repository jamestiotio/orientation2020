<template>
  <ContentModal :id="id">
    <Para>
      The first step to finding what you want is letting go of what you have.
    </Para>
    <br />
    <br />
    <Para>Only then would the wait be worth it.</Para>
  </ContentModal>
</template>

<script>
import ContentModal from "@/components/ContentModal.vue";
import Para from "@/components/Para.vue";

export default {
  name: "hidden-modal",
  components: {
    ContentModal,
    Para
  },
  props: {
    id: String
  }
};
</script>

<style scoped>
h3 {
  font-size: 24px;
  font-family: var(--font-primary), sans-serif;
  color: var(--color-regular-text);
  margin-bottom: 30px;
  text-align: center;
  text-decoration: underline;
}

@media (--mobile-narrow) {
  h3 {
    font-size: 20px;
  }
}
</style>
