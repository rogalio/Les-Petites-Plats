import { recipes } from "./../data/recipes.js";

import Search from "./SearchClass.js";
import Recipe from "./Recipe.js";

const InstanceRecipes = [];

const listOfCards = document.getElementById("listOfCards");

const searchInput = document.querySelector("#searchInput");

// recuperer recette avec searchBar
function displayData(recipes) {
  recipes.forEach((element) => {
    const recipe = new Recipe(element);
    InstanceRecipes.push(recipe);
    listOfCards.appendChild(recipe.getCardDom());
  });
}

displayData(recipes);
let search = new Search(InstanceRecipes);
searchInput.addEventListener("input", (e) => {
  search.getSearch(e.target.value);
});
