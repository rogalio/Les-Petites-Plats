const searchInput = document.getElementById("searchInput");
const listOfCards = document.getElementById("listOfCards");

// Searchbar

searchInput.addEventListener("input", (e) => {
  listOfCards.innerHTML = "";
  const value = e.target.value.toLowerCase();
});
