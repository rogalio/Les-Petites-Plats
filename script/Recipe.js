export default class Recipe {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.ingredients = data.ingredients;
    this.description = data.description;
    this.ustensils = data.ustensils;
  }

  getCardDom() {
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
    cardName.textContent = this.name;
    cardTime.textContent = this.time;
    iconeMinuteur.classList.add(
      "fa-solid",
      "fa-timer",
      "w-6",
      "h-6",
      "bg-red-500",
      "text-white"
    );
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

    this.ingredients.forEach((ingredient) => {
      const ingredientItem = document.createElement("p");
      ingredientsDiv.appendChild(ingredientItem);
      ingredientItem.textContent = `${ingredient.ingredient} : ${
        ingredient.quantity ? ingredient.quantity : ""
      } ${ingredient.unit ? ingredient.unit : ""} `;
      ingredientsDiv.classList.add("text-sm", "w-full");
    });
    descriptionDiv.textContent = this.description.substring(0, 250);
    descriptionDiv.classList.add("text-sm");
    return cardBox;
  }
}
