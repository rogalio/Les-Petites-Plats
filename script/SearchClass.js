export default class Search {
  constructor(data) {
    this.recipes = data;
    this.searchValue = "";
  }

  cleanDom() {
    document.getElementById("listOfCards").innerHTML = "";
    document.getElementById("ingredientsLists").innerHTML = "";
  }

  displayRecipes(recipes) {
    recipes.forEach((display) => {
      const listOfCards = document.getElementById("listOfCards");
      listOfCards.appendChild(display.getCardDom());
    });
  }

  getSearch(searchValue = null) {
    let results = [];
    this.cleanDom();
    if (searchValue != null) {
      this.searchValue = searchValue.toLowerCase();
    }
    if (this.searchValue.length >= 3) {
      const value = this.searchValue;
      results = this.recipes.filter((recipe) => {
        return (
          recipe.name.toLowerCase().includes(value) ||
          recipe.description.toLowerCase().includes(value) ||
          recipe.ingredients.some((ingredient) =>
            ingredient.ingredient.toLowerCase().includes(value)
          )
        );
      });
    } else {
      results = this.recipes;
    }
    // filtrer selons selections
    results.forEach((items) => {
      items.ingredients.forEach((item) => {
        const ingredientsLists = document.getElementById("ingredientsLists");
        const li = document.createElement("li");
        li.textContent = item.ingredient;
        ingredientsLists.appendChild(li);
      });
    });
    this.displayRecipes(results);
  }
}
