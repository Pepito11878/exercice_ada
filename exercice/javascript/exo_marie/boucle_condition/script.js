let life = 20;
let magic = 0;
let mind = 10;

for (let i = 1; i <= 7; i++) {
  let responce = prompt("What do you want to do today ?");

  if (responce == "study") {
    magic += 3;
    mind -= 1;
    console.log(
      `You studied well, you have ${magic} points of magic and you have ${mind} points of mind.`
    );
  } else if (responce == "duel") {
    let result = Math.random();
    if (result > 0.5) {
      magic += 5;
      mind += 3;
      console.log(
        `Congrats you won ! You have now ${magic} points of magic and ${mind} points of mind`
      );
    } else {
      life -= 5;
      mind -= 3;
      console.log(
        `Crap, you lost ! You have now ${magic} points of magic and ${mind} points of mind`
      );
    }
  } else if (responce == "sleep") {
    life += 5;
    mind += 3;
    console.log(
      `You slept well, you have ${life} points of life and ${mind} points of mind`
    );
  } else {
    console.log("You did nothing today");
  }

  if (life <= 0) {
    console.log("You died");
  }
}

magic > 10
  ? console.log("You passed the week")
  : console.log("You have to take another week");

// condition ternaire
// exemple : consition ? uneAction : uneAutreAction
// ? = si c'est vrai
// : = sinon
