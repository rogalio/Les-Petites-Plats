import { recipes } from "./../data/recipes.js";
import { searchbar } from "./../components/searchBar.js";
import Recipe from "./Recipe.js";

const listOfCards = document.getElementById("listOfCards");

const searchInput = document.querySelector("#searchInput");
let search = [];

console.log("test");
// recuperer recette avec searchBar
searchInput.addEventListener("keydown", (e) => {
  console.log("hh");
  listOfCards.innerHTML = "";
  const value = e.target.value.toLowerCase();
});

function displayData(recipes) {
  recipes.forEach((element) => {
    const recipe = new Recipe(element);
    listOfCards.appendChild(recipe.getCardDom());
  });
}
displayData(recipes);
