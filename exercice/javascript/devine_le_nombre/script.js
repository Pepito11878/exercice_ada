// step 1
function askNumber() {
  const input = prompt("Input your number");
  const inputNumber = Number(input);
  console.log("askNumber log", inputNumber);
  return inputNumber;
}

// step 2
function didIWin(giveNumber) {
  const numberToGuess = 22;
  if (giveNumber === numberToGuess) {
    alert("Bravo ! Vous avez devinez le nombre !");
  } else if (giveNumber <= numberToGuess) {
    alert("Plus Grand !");
  } else {
    alert("Plus petit !");
  }
}

const giveNumber = askNumber();
console.log("giverNumber", giveNumber);
didIWin(giveNumber)
