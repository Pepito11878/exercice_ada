let count = 0;

const myButon = document.getElementById("counter");
//const myButton = document.querySelector("#counter");

myButon.addEventListener("click", () => {
  count++;
  myButon.innerText = `${count} clics !`;
});
