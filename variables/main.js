// Задача 1 + Задача 2

class Weapon {
  constructor ({name, attack, durability, range}) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;
    this.initialDurability = durability;
  }

  takeDamage(damage) {
    if (this.durability - damage >= 0) {
      this.durability = this.durability - damage;
    } else if (this.durability - damage < 0) {
      this.durability = 0;
    }
      return this.durability;
  }

  getDamage() {
    if (this.durability >= 0.3 * this.initialDurability) {
      return this.attack;
    } else if (this.durability === 0) {
      return 0;
    }else if (this.durability < 0.3 * this.initialDurability) {
      return this.attack / 2;
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

class Arm extends Weapon {
}

const arm = new Arm({
  name: 'Рука',
  attack: 1,
  durability: Infinity,
  range: 1,
});

class Bow extends Weapon {  
}

const bow = new Bow({
  name: 'Лук',
  attack: 10,
  durability: 200,
  range: 3,
});

class Sword extends Weapon {
}

const sword = new Sword({
  name: 'Меч',
  attack: 25,
  durability: 500,
  range: 1,
});

class Knife extends Weapon {
}

const knife = new Knife({
  name: 'Нож',
  attack: 5,
  durability: 300,
  range: 1,
});

class Staff extends Weapon {
}

const staff = new Staff({
  name: 'Посох',
  attack: 8,
  durability: 300,
  range: 2,
});

class ReinforcedWeapon extends Weapon {
  
}

class LongBow extends Bow {
}

const longBow = new LongBow({
  name: 'Длинный лук',
  attack: 15,
  durability: bow.durability,
  range: 4,
});

class Poleaxe extends Sword {
}

const poleaxe = new Poleaxe({
  name: 'Секира',
  attack: 27,
  durability: 800,
  range: sword.range,
});

class StormStaff extends Staff {
}

const stormStaff = new StormStaff({
  name: 'Посох Бури',
  attack: 10,
  durability: staff.durability,
  range: 3,
});

bow.takeDamage(20);
console.log(bow.durability);
console.log(bow.getDamage());
console.log(bow.isBroken());
bow.takeDamage(160);
console.log(bow.durability);
console.log(bow.getDamage());
console.log(bow.isBroken());
bow.takeDamage(20);
console.log(bow.getDamage());
console.log(bow.isBroken());
bow.takeDamage(20);
console.log(bow.getDamage());
console.log(bow.isBroken());

console.log();

arm.takeDamage(20);
console.log(arm.durability);
console.log(arm.getDamage());
console.log(arm.isBroken());
arm.takeDamage(160);
console.log(arm.durability);
console.log(arm.getDamage());
console.log(arm.isBroken());
arm.takeDamage(50);
console.log(arm.getDamage());
console.log(arm.isBroken());

console.log();

poleaxe.takeDamage(20);
console.log(poleaxe.durability);
console.log(poleaxe.getDamage());
console.log(poleaxe.isBroken());
poleaxe.takeDamage(160);
console.log(poleaxe.durability);
console.log(poleaxe.getDamage());
console.log(poleaxe.isBroken());
poleaxe.takeDamage(20);
console.log(poleaxe.getDamage());
console.log(poleaxe.isBroken());
poleaxe.takeDamage(500);
console.log(poleaxe.getDamage());
console.log(poleaxe.isBroken());