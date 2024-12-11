import catArray from "./cats";
import { addCatButton, ageInput, colorSelect, nameInput } from "./elements";
import render from "./render";
import "./style.css";
import { Cat } from "./types/cat";

render();

addCatButton.addEventListener("click", (e) => {
  e.preventDefault();
  const cat: Cat = {
    name: nameInput.value,
    age: parseInt(ageInput.value),
    color: colorSelect.value,
  };
  catArray.push(cat);
  render();
});
