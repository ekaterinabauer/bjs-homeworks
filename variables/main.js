// Задача 1

class Weapon {
  constructor ({name, attack, durability, range}) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;
  }

  takeDamage(damage) {
    this.durability = this.durability - damage;
    if (this.durability < 0) {
      this.durability = 0;
    }
  }

  getDamage() {
    if (this.durability == 0){
      return 0;
    }else if(this.durability >= (10 * 0,3)) {
      return this.attack;
    } else if(0 < this.durability < (10 * 0,3)) {
      return (this.attack / 2);
    }
  }

  isBroken() {
    if (this.durability > 0){
      return false;
    } else {
      return true;
    }
  }
}

const arm = new Weapon({
  name: 'Рука',
  attack: 1,
  durability: Infinity,
  range: 1,
});

const bow = new Weapon({
  name: 'Лук',
  attack: 10,
  durability: 200,
  range: 3,
});

const sword = new Weapon({
  name: 'Меч',
  attack: 25,
  durability: 500,
  range: 1,
});

const knife = new Weapon({
  name: 'Нож',
  attack: 5,
  durability: 300,
  range: 1,
});

const staff = new Weapon({
  name: 'Посох',
  attack: 8,
  durability: 300,
  range: 2,
});

class ReinforcedWeapon extends Weapon {
  constructor ({name, attack, durability, range}) {
    super({name, attack, durability, range})
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;
  }
}

const longBow = new ReinforcedWeapon({
  name: 'Длинный лук',
  attack: 15,
  durability: bow.durability,
  range: 4,
});

const poleaxe = new ReinforcedWeapon({
  name: 'Секира',
  attack: 27,
  durability: 800,
  range: sword.range,
});

const stormStaff = new ReinforcedWeapon({
  name: 'Посох Бури',
  attack: 10,
  durability: staff.durability,
  range: 3,
});