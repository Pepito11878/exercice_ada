// console.log(document.getElementById("bouton-1"));
// console.log(document.querySelector(".bouton-2"));
// console.log(document.querySelector("#bouton-1"));
// console.log(document.querySelector("p"));

const myButton = document.querySelector(".bouton-1");

myButton.addEventListener("click", function () {
  myButton.innerText = "Bouton changer !";
});

// 

const myButton2 = document.querySelector(".bouton-2")

myButton2.addEventListener("click", function() {
    myButton2.innerHTML = "<b>Html changer !</b>"
})

