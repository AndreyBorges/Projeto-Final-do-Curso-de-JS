import Numbers from "./numbers.js";

export default function initFetchAnimais(url, target) {
  // cria a div que terá o total de animais

  const createElement = (name, numbers) => {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const span = document.createElement("span");
    div.classList.add("animalNumber");
    h3.innerText = name;
    span.innerText = numbers;
    span.setAttribute("data-number", "");
    div.appendChild(h3);
    div.appendChild(span);
    return div;
  };

  // anima os numeros dos animais

  const animaNumbers = () => {
    const numbers = new Numbers("[data-number]", ".numbers", "active");
    numbers.init();
  };

  // puxa as informações do json e cria um objeto com as informações adiquiridas do json

  async function fetchAnimais() {
    try {
      // faz o fetch do json espera a resposta e depois transforma em json para tratar os dados.

      const animaisResp = await fetch(url);
      const animais = await animaisResp.json();
      const gridNumbers = document.querySelector(target);
      animais.forEach((animal) => {
        const animalSpecies = createElement(animal.specie, animal.total);
        gridNumbers.appendChild(animalSpecies);
      });
      animaNumbers();
    } catch (error) {
      console.log(error);
    }
  }

  return fetchAnimais();
}
