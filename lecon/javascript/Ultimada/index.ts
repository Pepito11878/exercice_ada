class Character {
  public hp: number = 10;
  constructor() {}

  attack(cible: Character) {
    cible.hp--;
  }
}

class Warrior extends Character {
  constructor() {
    super();
  }
}

class Monster extends Character {
  constructor() {
    super();
  }
}
