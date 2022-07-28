import { recipes } from "./../data/recipes.js";
import Recipe from "./Recipe.js";

const listOfCards = document.getElementById("listOfCards");

function displayData(recipes) {
  recipes.forEach((element) => {
    const recipe = new Recipe(element);
    listOfCards.appendChild(recipe.getCardDom());
  });
}
displayData(recipes);
