import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player1: Fighter;
  private _player2: Monster[] | Fighter[] | SimpleFighter[];
  constructor(
    player: Fighter,  
    monster: Monster[] | Fighter[] | SimpleFighter[],
  ) {
    super(player);
    this._player1 = player;
    this._player2 = monster;
  }

  fight(): number {
    this._player2.forEach((monster) => {
      while (this._player1.lifePoints > 0 && monster.lifePoints > 0) {
        this._player1.attack(monster);
        monster.attack(this._player1);
      }
    });
    return super.fight();
  }
}