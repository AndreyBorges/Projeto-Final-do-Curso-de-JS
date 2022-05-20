import Numbers from "./numbers.js";

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    try {
      const animaisResp = await fetch(url);
      const animais = await animaisResp.json();
      const gridNumbers = document.querySelector(".gridNumbers");
      animais.forEach((animal) => {
        const animalSpecies = createElement(animal.specie, animal.total);
        gridNumbers.appendChild(animalSpecies);
      });
      const numbers = new Numbers('[data-number]','.numbers', 'active');
      numbers.init();
    } catch (error) {
      console.log(error);
    }
  }

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

  fetchAnimais("./dataAnimais.json");
}
