import Person from './Person';

export default class Team {
  constructor() {
    this[Symbol.for('size')] = 0;
  }

  getPersons(object) {
    if (object instanceof Person) {
      this[this[Symbol.for('size')]] = object;
      this[Symbol.for('size')] += 1;
    } else {
      throw (new Error('Добавить можно только объект класса Person'));
    }
  }

  * [Symbol.iterator]() {
    for (let index = 0; index < this[Symbol.for('size')]; index += 1) yield this[index];
  }
}
