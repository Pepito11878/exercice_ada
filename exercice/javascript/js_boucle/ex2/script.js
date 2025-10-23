let message = "";
let message2 = "";

let letters = ["A", "d", "a", "-", "T", "e", "c", "h"];
let letters2 = ["A", "d", "a", "-", "S", "c", "h", "o", "o", "l"];

for (i = 0; i < letters.length; i++) {
  message += letters[i];
}

for (i = 0; i < letters2.length; i++) {
  message2 += letters2[i];
}

console.log(`le premier message est ${message}`);
console.log(`le second message est ${message2}`);
