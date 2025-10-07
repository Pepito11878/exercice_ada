function repPhrase(phrase, nbRepetition) {
  for (let i = 0; i < nbRepetition; i++) {
    console.log(phrase);
  }
}

repPhrase("une phrase random", 5);

// function calculPoint(pointActuels, pointAjoutes) {
//   const total = pointActuels + pointAjoutes;
//   console.log(`Vous avez ${total} points`);
// }

// calculPoint(25, 56);

function calculPoint(pointActuels, pointAjoutes) {
  return pointActuels + pointAjoutes;
}

const total = calculPoint(10, 45);
console.log(`Vous avez ${total} points`);


function presentation(prenom, maison){
    console.log(`${prenom} appartient a ${maison}`)
}

presentation("Harry", "Griffondor")