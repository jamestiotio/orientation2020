export default {
  methods: {
    closeModal(id: string): void {
      let modal = <HTMLElement>document.getElementById(id);
      let backdrop = <HTMLElement>document.getElementById("backdrop");
      let lastFocusedEl = <HTMLElement>(
        document.getElementById(window.lastFocusedEl)
      );

      modal.style.display = "none";
      backdrop.style.display = "none";
      backdrop.style.opacity = "0";

      lastFocusedEl.focus();
    }
  }
};
