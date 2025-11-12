const element = document.querySelector(".element");

async function fetchOffers() {
  element.innerHTML = `<p>chargement des offres...</p>`;

  try {
    const response = await fetch(
      "https://corsproxy.io/?https://codepassport.dev/api/offers"
    );
    const offers = await response.json();

    element.innerHTML = offers
      .map(
        (offers) => `
      <h2>${offers.titre}</h2>
      <p>${offers.description}</p>
    `
      )
      .join("");
  } catch (error) {
    element.innerHTML = `<p>Erreur lors du chargement des offres.</p>`;
  }
}
fetchOffers();
