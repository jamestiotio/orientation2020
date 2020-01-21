<template>
  <div :id="id" :class="`modal modal-${type}`" role="dialog" aria-modal="true">
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  props: {
    id: String,
    type: String
  }
};
</script>

<style scoped>
.modal {
  display: none;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--modal-body-color);
  padding: 2vw 2vw;
  z-index: 999;
  outline: 5px solid var(--color-accent);
}

.modal-content {
  height: 100%;
  overscroll-behavior-y: contain;
}

.modal-clausal {
  width: 60vw;
  height: 50vh;
}

.modal-confirmation {
  width: 42vw;
  height: 35vh;
}

@media (--desktop-narrow) {
  .modal {
    padding: 20px 6vw;
  }

  .modal-clausal {
    width: 80vw;
  }

  .modal-confirmation {
    width: 60vw;
  }
}

@media (--mobile-narrow) {
  .modal-clausal {
    padding: 50px 8vw;
    height: 70vh;
  }

  .modal-clausal {
    width: 90vw;
  }

  .modal-confirmation {
    padding: 0 6vw;
    height: 25vh;
  }

  .modal-confirmation {
    width: 80vw;
  }
}
</style>
