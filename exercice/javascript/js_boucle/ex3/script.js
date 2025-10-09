// const number = prompt("Choisissez un nombre entre 0 et 10");

// switch (true) {
//   case number > 10:
//     console.log("Vous avez rentrer un nombre superieur a 10");
//     break;
//   case number < 0:
//     console.log("Vous avez rentrez un nombre inferieur a 0");
//     break;
//   default:
//     for (i = number; i >= 0; i--) {
//       console.log(i);
//     }
//     break;
// }

let number = parseInt(prompt("Veuillez saisir un 0 et 10 :"));

if (number >= 0 && number <= 10) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
} else {
  alert("Le nombre saisi doit être compris entre 0 et 10.");
}
