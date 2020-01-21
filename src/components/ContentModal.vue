<template>
  <Modal :id="id" type="clausal">
    <button
      :id="`${id}-first-focus`"
      class="cancel"
      @click="closeModal(id)"
      @keydown.tab.exact.prevent="focusHandler(`${id}-first-focus`)"
      @keydown.tab.shift.prevent="focusHandler(`${id}-first-focus`)"
      @keyup.esc="closeModal(id)"
      @keydown.down.exact.prevent="scrollDown"
      @keydown.up.exact.prevent="scrollUp"
    >
      <span class="sr-only">Close modal</span>
      <svg viewBox="0 0 375 375" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m187.5 679.86223a185.00057 185.00057 0 0 0 -184.9999998 185 185.00057 185.00057 0 0 0 184.9999998 184.99997 185.00057 185.00057 0 0 0 185-184.99997 185.00057 185.00057 0 0 0 -185-185zm-85.90632 78.87528a20.232308 20.232308 0 0 1 14.5181 6.13144l71.38822 71.38824 71.38825-71.38824a20.232308 20.232308 0 0 1 13.90867-6.12106 20.232308 20.232308 0 0 1 14.70258 34.73023l-71.3903 71.38825 71.3903 71.39029a20.232308 20.232308 0 1 1 -28.61125 28.60921l-71.38825-71.38824-71.38822 71.38824a20.232308 20.232308 0 1 1 -28.611275-28.60921l71.390325-71.39029-71.390325-71.38825a20.232308 20.232308 0 0 1 14.093175-34.74061z"
          transform="translate(0 -677.36222)"
        ></path>
      </svg>
    </button>
    <slot></slot>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal.vue";

import closeModalMixin from "@/mixins/closeModalMixin";
import focusHandler from "@/mixins/focusHandler";

export default {
  name: "content-modal",
  components: {
    Modal
  },
  props: {
    id: String
  },
  mixins: [closeModalMixin, focusHandler],
  methods: {
    scrollDown() {
      document.querySelector(`#${this.id} .modal-content`).scrollBy({
        top: 100,
        behavior: "smooth"
      });
    },
    scrollUp() {
      document.querySelector(`#${this.id} .modal-content`).scrollBy({
        top: -100,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style scoped>
.cancel {
  position: absolute;
  top: 1vw;
  right: 1vw;
}

.cancel > svg {
  width: 20px;
}

.cancel > svg > path {
  fill: var(--color-title-text);
  transition: fill 0.6s ease-out;
}

h3 {
  font-size: 24px;
  font-family: var(--font-primary), sans-serif;
  color: var(--color-regular-text);
  margin-bottom: 30px;
  text-align: center;
  text-decoration: underline;
}

h4 {
  font-size: 24px;
  font-family: var(--font-primary), sans-serif;
  color: var(--color-regular-text);
  margin-bottom: 30px;
  text-decoration: underline;
}

@media (--mobile-narrow) {
  h3 {
    font-size: 20px;
  }

  h4 {
    font-size: 20px;
  }
}
</style>
