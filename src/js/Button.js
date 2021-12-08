export default class Button {
  constructor(element) {
    if (!element) {
      throw new Error('Элемент не существует');
    } else {
      this.element = element;

      this.listenerofButton();
    }
  }

  listenerofButton() {
    this.element.addEventListener('click', (e) => this.constructor.appearance(e));
  }

  static appearance(e) {
    if (e.target.classList.contains('submit')) {
      const popovers = document.querySelector('.popovers');
      popovers.classList.toggle('active');
      const top = -(popovers.offsetTop + 1.1 * popovers.offsetHeight);
      popovers.style.top = `${top}px`;
    }
  }
}
