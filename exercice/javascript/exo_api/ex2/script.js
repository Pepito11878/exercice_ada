const choice = document.getElementById("choice");
const btnValid = document.querySelector(".btn-valid");
const content = document.querySelector(".content");

async function choiceCatTag() {
  const getTagCat = await fetch("https://cataas.com/api/tags");
  const tagList = await getTagCat.json();

  choice.innerHTML = tagList.map(
    (tag) => `<option value="${tag}">${tag}</option>`
  );

  btnValid.addEventListener("click", () => {
    const selected = choice.value;

    async function getImg() {
      content.innerHTML = "<p>Chargement des chats...</p>";

      try {
        const catImg = await fetch(
          `https://cataas.com/api/cats?tags=${selected}`
        );
        const imgList = await catImg.json();

        content.innerHTML = imgList
          .map((img) => `<img src="https://cataas.com/cat/${img.id}" />`)
          .join("");
      } catch (error) {
        content.innerHTML = "<p>Erreur lors du chargement des chats.</p>"
        console.error(error);
      }
    }

    getImg();
  });
}

choiceCatTag();
