const searchInput = document.getElementById("searchInput");
const listOfCards = document.getElementById("listOfCards");

//faire une class search qui dans constructor passe les receipts

export const searchFilter = (recipes, searchInput) => {
  searchInput.addEventListener("input", (e) => {
    if (e.target.value.length >= 3) {
      listOfCards.innerHTML = "";
      const value = e.target.value.toLowerCase();
      const results = recipes.filter((recipe) => {
        return (
          recipe.name.toLowerCase().includes(value) ||
          recipe.description.toLowerCase().includes(value) ||
          recipe.ingredients.some((ingredient) =>
            ingredient.ingredient.toLowerCase().includes(value)
          )
        );
      });
      return results;
    }
  });
};
