function getLatinCharacterList(text) {
  return text.split("");
}

const latinToMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

function translateLatinCharacter(character) {
  return latinToMorse[character.toUpperCase()];
}

function encode(text) {
  const array = []; 
  const splittedText = getLatinCharacterList(text); 
  for (let i = 0; i < splittedText.length; i++) {
    if (splittedText[i] == " ") {
      array.push("/");
    } else {
      array.push(translateLatinCharacter(splittedText[i]));
    }
  }
  return array.join(" ");
}

const morseToLatin = {
  "-": "T",
  "--": "M",
  "---": "O",
  "--.": "G",
  "--.-": "Q",
  "--..": "Z",
  "-.": "N",
  "-.-": "K",
  "-.--": "Y",
  "-.-.": "C",
  "-..": "D",
  "-..-": "X",
  "-...": "B",
  ".": "E",
  ".-": "A",
  ".--": "W",
  ".---": "J",
  ".--.": "P",
  ".-.": "R",
  ".-..": "L",
  "..": "I",
  "..-": "U",
  "..-.": "F",
  "...": "S",
  "...-": "V",
  "....": "H",
};

function getMorseCharacterList(text) {
  return text.split(" ");
}


function translateMorseCharacter(character) {
  return morseToLatin[character];
}

function decode(text) {
  const array = [];

  const splittedText = getMorseCharacterList(text);

  for (let i = 0; i < splittedText.length; i++) {
    if (splittedText[i] == "/") {
      array.push(" "); 
    } else {
      array.push(translateMorseCharacter(splittedText[i]).toLowerCase());
    }
  }
  return array.join(""); 
}

const inputUser = document.getElementById("text");

const buttonTranslateMorse = document.querySelector(".latin-morse");
const buttonTranslateLatin = document.querySelector(".morse-latin");

const resultTranslate = document.querySelector(".result");


buttonTranslateMorse.addEventListener("click", function () {
  resultTranslate.textContent = encode(inputUser.value);
});


buttonTranslateLatin.addEventListener("click", function () {
  resultTranslate.textContent = decode(inputUser.value);
});


inputUser.addEventListener("input", function () {
  if (inputUser.value !== ``) {
    buttonTranslateMorse.disabled = false;
    buttonTranslateLatin.disabled = false;
  } else {
    buttonTranslateMorse.disabled = true;
    buttonTranslateLatin.disabled = true;
  }
});