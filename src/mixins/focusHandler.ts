export default {
  methods: {
    focusHandler(toFocus: string): void {
      let elToFocus = <HTMLElement>document.querySelector(`#${toFocus}`);
      elToFocus.focus();
    }
  }
};
