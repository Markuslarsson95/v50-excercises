import catArray from "./cats";
import {
  addCatButton,
  ageInput,
  catCardContainer,
  catForm,
  colorSelect,
  nameInput,
  raceSelect,
} from "./elements";
import render from "./render";
import "./style.css";
import { Cat } from "./types/cat";
import Color from "./types/color";
import Race from "./types/race";

render();

addCatButton.addEventListener("click", (e) => {
  e.preventDefault();
  const cat: Cat = {
    name: nameInput.value,
    age: parseInt(ageInput.value),
    color: colorSelect.value as Color,
    race: raceSelect.value as Race,
  };
  catArray.push(cat);
  catForm.reset();
  // nameInput.value = "";
  // ageInput.value = "";
  // colorSelect.innerHTML = "";
  // raceSelect.innerHTML = "";
  catCardContainer.innerHTML = "";
  render();
});
