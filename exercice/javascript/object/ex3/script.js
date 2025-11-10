const fs = require("fs");
const filepath = "data.json";

const content = fs.readFileSync(filepath, { encoding: "utf8", flag: "r" });
const data = JSON.parse(content);

// 1
console.log(`le type de data.json est : ${typeof data}`);

// 2
console.log(data[0]);

// 3
const number = data.length;
console.log(number);

// 4
for (let i = 0; i < data.length; i++) {
  if (i === 4) {
    console.log(data[i]);
  }
}

// 5
let sum = 0;
let nb = 0;
for (let i = 0; i < data.length; i++) {
    sum += data[i].age
    nb++
}
console.log(sum / nb)
