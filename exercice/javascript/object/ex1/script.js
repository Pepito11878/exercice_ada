const candidates = [
  "Le Filip",
  "Ruby On The Nail",
  "Leona Winter",
  "Lula Strega",
  "Misty Phoenix",
  "Perseo",
  "Norma Bell",
  "Edeha Noire",
  "Magnetica",
  "Afrodite Amour",
];

// 1
console.log(candidates[0])

// 2 
console.log(candidates[7])

// 3
for(let i = 0; i < candidates.length; i++){
    console.log(candidates[i])
}

// 4

const list = document.querySelector(".list");

for(let i = 0; i < candidates.length; i++){
    list.innerHTML += `<li>${candidates[i]}</li>`;
}