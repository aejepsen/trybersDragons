import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private _player1: Fighter,
    private _player2: Fighter,
  ) {
    super(_player1);
    this._player1 = _player1;
    this._player2 = _player2;
  }

  fight(): number {
    const player1 = this._player1;
    const player2 = this._player2;

    while (player1.lifePoints > 0 && player2.lifePoints > 0) {
      player1.attack(player2);
      player2.attack(player1);
    }
  
    return super.fight();
  }
}
