const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const getRandomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const dragonDamage = () => getRandomBetween(15, dragon.strength);

const warriorDamage = () => getRandomBetween(warrior.strength, (warrior.strength * warrior.weaponDmg));

const mageDamage = () => {
  if (mage.mana > 15) {
    return { 
      damage: getRandomBetween(mage.intelligence, (mage.intelligence * 2)), 
      mana: 15,
    }
  }
  return {
    damage: 0,
    mana: 0,
  }
}

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: (dealingDamage) => {
    warrior.damage = dealingDamage();
    dragon.healthPoints -= warrior.damage;
  },
  mageTurn: (dealingDamage) => {
    Object.assign(mage, dealingDamage());
    dragon.healthPoints -= mage.damage;
  },
  dragonTurn: (dealingDamage) => {
    dragon.damage = dealingDamage();
    warrior.healthPoints -= dragon.damage;
    mage.healthPoints -= dragon.damage;
  },
  showTurn: () => {
    do {
      gameActions.warriorTurn(warriorDamage);
      gameActions.mageTurn(mageDamage);
      gameActions.dragonTurn(dragonDamage);
      console.log(battleMembers);
    } while(dragon.healthPoints > 0 && warrior.healthPoints > 0 && mage.healthPoints > 0);
  }
};

gameActions.showTurn();
