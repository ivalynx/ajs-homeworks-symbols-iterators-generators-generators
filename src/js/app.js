export default class Team {
  * [Symbol.iterator]() {
    for (let index = 0; index < this.team.length; index += 1) yield this.team[index];
  }
}
