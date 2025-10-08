const number = prompt("Choisissez un nombre entre 0 et 10");

switch (true) {
  case number > 10:
    console.log("Vous avez rentrer un nombre superieur a 10");
    break;
  case number < 0:
    console.log("Vous avez rentrez un nombre inferieur a 0");
    break;
  default:
    for (i = number; i > -1; i--) {
      console.log(i);
    }
    break;
}
