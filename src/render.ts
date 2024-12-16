import catArray from "./cats";
import {
  catCardContainer,
  colorSelect,
  information,
  raceSelect,
} from "./elements";
import Color, { colorArray } from "./types/color";
import Race, { raceArray } from "./types/race";

const populateColorSelect = (
  selectElement: HTMLSelectElement,
  colors: Color[]
) => {
  colors.forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.textContent = color;
    selectElement.appendChild(option);
  });
};

const populateRaceSelect = (
  selectElement: HTMLSelectElement,
  races: Race[]
) => {
  races.forEach((race) => {
    const option = document.createElement("option");
    option.value = race;
    option.textContent = race;
    selectElement.appendChild(option);
  });
};

const updateCatInformation = () => {
  const numberOfCatsText = document.createElement("p");
  numberOfCatsText.textContent = `Number of cats: ${catArray.length}`;
  information.appendChild(numberOfCatsText);
};

const render = () => {
  populateColorSelect(colorSelect, colorArray);
  populateRaceSelect(raceSelect, raceArray);
  catArray.forEach((cat) => {
    const column = document.createElement("div");
    column.className = "column";
    const catCard = document.createElement("div");
    catCard.className = "cat-card";
    catCard.innerHTML = `<h2>${cat.name}</h2> <p>${cat.age}</p> <p>${cat.color}</p> <p>${cat.race}</p>`;
    column.appendChild(catCard);
    catCardContainer.appendChild(column);
  });
  updateCatInformation();
};
export default render;
