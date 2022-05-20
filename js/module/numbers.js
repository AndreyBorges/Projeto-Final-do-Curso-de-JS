export default class Numbers {
  constructor(dtnumb, observerTarget, observerClass) {
    this.dataNumbers = document.querySelectorAll(dtnumb);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    // bind do this do objeto ao callback da mutação

    this.handleMutation = this.handleMutation.bind(this);
  }

  // recebe o elemento do dom que será observado incrementa os numeros a partir de 0  até o numero total

  static incrementNumb(numbers) {
    const tot = numbers.innerText;
    const increment = Math.floor(tot / 100);
    let start = 0;

    const timer = setInterval(() => {
      start += increment;
      numbers.innerText = start;
      start > tot ? ((numbers.innerText = tot), clearInterval(timer)) : null;
    }, 25 * Math.random());
  }

  // ativa incrementar para cada numero selecionado do dom

  animaNumbers() {
    this.dataNumbers.forEach((number) => this.constructor.incrementNumb(number));
  }

  // função que observará quando ocorrrá a mutação do elemento que será observado

  handleMutation(ev) {
    ev[0].target.classList.contains(this.observerClass)
      ? (this.observer.disconnect(), this.animaNumbers())
      : null;
  }

  // adiciona o mutation observer ao elemento do dom que observará quando a classe ativa for adicionada

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    this.dataNumbers.length && this.observerTarget ? this.addMutationObserver() : null;
    return this;
  }
}
