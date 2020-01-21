export default {
  methods: {
    openModal(id: string, caller: string): void {
      let modal = <HTMLElement>document.getElementById(id);
      let modalFocusEntry = <HTMLElement>(
        document.getElementById(`${id}-first-focus`)
      );
      let backdrop = <HTMLElement>document.getElementById("backdrop");

      modal.style.display = "flex";
      modalFocusEntry.focus();
      backdrop.style.display = "block";
      backdrop.style.opacity = "0.5";

      window.lastFocusedEl = caller;
    }
  }
};
