const element = document.querySelector(".orange-cat");
const elementBlack = document.querySelector(".black-cat");

async function orangeCatFetch() {
  element.innerHTML = `<p>Chargement d'une liste de orange cat</p>`;

  try {
    const orangeCatApi = await fetch(`https://cataas.com/api/cats?tags=orange,cute`);
    const orangeCat = await orangeCatApi.json();

    element.innerHTML = orangeCat
      .map(
        (orangeCat) => `
        <img src="https://cataas.com/cat/${orangeCat.id}"/>
    `
      )
      .join("");
  } catch (error) {
    element.innerHTML = `erreur lors du chargement`;
    console.error("erreur de chargement");
  }
}

async function blackCat() {
  elementBlack.innerHTML = `<p>Chargement d'une liste de black cat</p>`;

  try {
    const blackCatApi = await fetch("https://cataas.com/api/cats?tags=Black");
    const blackCatJson = await blackCatApi.json();

    elementBlack.innerHTML = blackCatJson
      .map(
        (blackCatJson) => `
            <img src="https://cataas.com/cat/${blackCatJson.id}" />
        `
      )
      .join("");
  } catch (error) {
    elementBlack.innerHTML = `erreur lors du chargement`;
    console.error("erreur de chargement");
  }
}

orangeCatFetch();
blackCat();
