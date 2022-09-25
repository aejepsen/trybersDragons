export default abstract class Race {
  constructor(private _name: string, private _dexterity: number) {
    this._name = _name;
    this._dexterity = _dexterity;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  abstract get maxLifePoints(): number;

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
}
