// Task 1
// Filter PLACES by type. If the type property of an object in PLACES matches the typePreference parameter.
function filterPlacesByType(typePreference) {
  const filteredPlaces = [];

  for (let i = 0; i < PLACES.length; i++) {
    if (PLACES[i].type === typePreference) {
      filteredPlaces.push(PLACES[i]);
    }
  }

  return filteredPlaces;
}

// Task 2
function createCard(place) {
  const div = document.createElement("div");
  div.classList.add("col");

  div.innerHTML = `
  <div class="card h-100" onclick="centerPlaceOnMap('${place.name}')">
      <img src="${place.img}" class="card-img-top" alt="${place.name}">
      <div class="card-body">
        <h5 class="card-title">${place.name}</h5>
        <p class="card-text">${place.location}</p>
      </div>
    </div>
  `;

  return div;
}

// Task 3
function populateRecommendationCards(filteredPlaces) {
  const recommendationsElement = document.getElementById("recommendations");
  recommendationsElement.innerHTML = "";
  filteredPlaces.forEach((place) => {
    const card = createCard(place);
    recommendationsElement.appendChild(card);
  });
}
// Task 4
function findPlaceByName(placeName) {
  for (let i = 0; i < PLACES.length; i++) {
    if (PLACES[i].name === placeName) {
      return PLACES[i];
    }
  }
}
