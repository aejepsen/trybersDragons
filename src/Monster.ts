import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  constructor(  
    public _lifePoints: number = 85,
    private _strength: number = 63,
  ) {}

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._lifePoints;
    if (damage > 0) {
      this._lifePoints -= damage;
      if (this._lifePoints <= 0) {
        this._lifePoints = -1;
      }
    }
    return this._lifePoints;
  }
}