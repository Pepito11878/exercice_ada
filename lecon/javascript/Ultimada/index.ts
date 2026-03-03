class Character {
  public hp: number = 10;
  public maxHp: number = 10;
  constructor() {}

  attackTarget(target: Character) {
    target.hp--;
  }
}

class Warrior extends Character {
  constructor() {
    super();
  }
}

class Healer extends Character {
  constructor() {
    super();
  }
}

class Monster extends Character {
  constructor() {
    super();
  }
}

const warrior = new Warrior()
const monster = new Monster()

warrior.attackTarget(monster)
console.log(monster.hp)