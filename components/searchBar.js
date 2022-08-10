const searchInput = document.getElementById("searchInput");
const listOfCards = document.getElementById("listOfCards");

// Searchbar

const searchFilter = (recipes, searchInput) => {
  searchInput.addEventListener("input", (e) => {
    if (e.target.value.length >= 3) {
      listOfCards.innerHTML = "";
      const value = e.target.value.toLowerCase();
      const results = recipes.filter((recipe) => {
        return (
          recipe.name.toLowerCase().startsWith(value) ||
          recipe.description.toLowerCase().includes(value) ||
          recipe.ingredients.some((ingredient) =>
            ingredient.ingredient.toLowerCase().includes(value)
          )
        );
      });
      NewrecipeCard(results);
    }
  });
};
