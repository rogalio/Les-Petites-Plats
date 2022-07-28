// recuperer mes elements html
const listOfCards = document.getElementById("listOfCards");
const searchInput = document.querySelector("[data-search]");
let search = [];

//recuperer ma data (recettes)
async function getData() {
  const recipeData = "data/recipe.json";
  let response = await fetch(recipeData);
  let data = await response.json();
  return data;
}

// recuperer recette avec searchBar
searchInput.addEventListener("input", (e) => {
  listOfCards.innerHTML = "";
  const value = e.target.value.toLowerCase();
  search.forEach((word) => {
    const isVisible =
      word.named.toLowerCase().includes(value) ||
      word.descriptiond.toLowerCase().includes(value);

    // console.log(isVisible, word);
    if (isVisible) {
      listOfCards.appendChild(word.element);
    }
  });
});

//parcourir les recettes pour afficher une card de chacune d"elle
function displayData(recipes) {
  for (let i = 0; i < recipes.length; i++) {
    search = recipes.map((element) => {
      const cardBox = document.createElement("div");
      const cardName = document.createElement("p");
      const cardTime = document.createElement("p");
      const timeIconeDiv = document.createElement("div");
      const titleTimeDiv = document.createElement("div");
      const iconeMinuteur = document.createElement("i");
      const imageCard = document.createElement("div");
      const ingredientsDescriptionDiv = document.createElement("div");
      const ingredientsDiv = document.createElement("div");
      const descriptionDiv = document.createElement("div");
      // configuration de la card
      listOfCards.appendChild(cardBox);
      // ajout image
      cardBox.appendChild(imageCard);
      cardBox.classList.add("cardbox");
      imageCard.classList.add("bg-red-500", "w-[400px]", "h-40");
      // ajout nom + minuteur
      cardBox.appendChild(titleTimeDiv);
      titleTimeDiv.classList.add("flex", "justify-between", "mx-4", "mt-2");
      titleTimeDiv.appendChild(cardName);
      titleTimeDiv.appendChild(timeIconeDiv);
      timeIconeDiv.appendChild(cardTime);
      timeIconeDiv.appendChild(iconeMinuteur);
      timeIconeDiv.classList.add("flex");
      cardName.textContent = element.name;
      cardTime.textContent = element.time;
      iconeMinuteur.classList.add("fa-solid", "fa-timer", "w-6");
      // ajout ingredients + description
      cardBox.appendChild(ingredientsDescriptionDiv);
      ingredientsDescriptionDiv.classList.add("flex");
      ingredientsDescriptionDiv.appendChild(ingredientsDiv);
      ingredientsDescriptionDiv.appendChild(descriptionDiv);
      ingredientsDescriptionDiv.classList.add(
        "grid",
        "grid-cols-2",
        "mt-4",
        "mx-4",
        "gap-2"
      );

      element.ingredients.map((ingredient) => {
        const ingredientItem = document.createElement("p");
        ingredientsDiv.appendChild(ingredientItem);
        ingredientItem.textContent = `${ingredient.ingredient} : ${ingredient.quantity} ${ingredient.unit} `;
        ingredientsDiv.classList.add("text-sm", "w-full");
      });
      descriptionDiv.textContent = element.description.substring(0, 250);
      descriptionDiv.classList.add("text-sm");

      return {
        ingredientd: element.ingredients,
        descriptiond: element.description,
        named: element.name,
        element: cardBox,
      };
    });
  }
}

async function init() {
  const { recipes } = await getData();

  displayData(recipes);
}

init();
