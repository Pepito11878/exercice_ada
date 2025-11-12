const element = document.querySelector(".element");
const reload = document.querySelector(".reload");

async function fetchCatFact() {
  element.innerHTML = `<p>Chargement d'un cat fact...</p>`;

  try {
    const api = await fetch("https://meowfacts.herokuapp.com/");
    const catFact = await api.json();

    element.innerHTML = `
    <p>${catFact.data}</p>
    `;
  } catch (error) {
    element.innerHTML = `impossible de charger un cat fact`;
  }
}
fetchCatFact();

reload.addEventListener("click", () => {
  location.reload();
});
