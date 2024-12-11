import catArray from "./cats";
import { ageInput, catCardContainer, colorSelect, nameInput } from "./elements";
import Color, { colorArray } from "./types/color";

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

const render = () => {
  colorSelect.innerHTML = "";
  nameInput.value = "";
  ageInput.value = "";
  catCardContainer.innerHTML = "";
  populateColorSelect(colorSelect, colorArray);
  catArray.forEach((cat) => {
    const column = document.createElement("div");
    column.className = "column";
    const catCard = document.createElement("div");
    catCard.className = "cat-card";
    catCard.innerHTML = `<h2>${cat.name}</h2> <p>${cat.age}</p> <p>${cat.color}</p>`;
    column.appendChild(catCard);
    catCardContainer.appendChild(column);
  });
};
export default render;
