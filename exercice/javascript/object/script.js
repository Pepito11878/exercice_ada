const obj = {
  candidate: "Le Filip",
  age: 29,
  city: "Paris",
  region: "Île-de-France",
};

const data = [
  {
    candidate: "Afrodite Amour",
    age: 27,
    city: "Lyon",
    region: "Auvergne-Rhône-Alpes",
  },
  {
    candidate: "Edeha Noire",
    age: 34,
    city: "Lyon",
    region: "Auvergne-Rhône-Alpes",
  },
  {
    candidate: "Le Filip",
    age: 29,
    city: "Paris",
    region: "Île-de-France",
  },
];

// affiche le nom de la candidate dans l'objet obj
console.log(obj.candidate);

// afficher dans la console la liste de tous les noms des candidates du tableau data

for (let i = 0; i < data.length; i++) {
  console.log(data[i].candidate);
}
