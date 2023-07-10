class Robot {
  static names = [];

  name() {
    if (this.robotName) return this.robotName;

    let newName = this.generateName();

    while (Robot.names.includes(newName)) {
      newName = this.generateName();
    }

    Robot.names.push(newName);
    this.robotName = newName;
    return newName;
  }

  reset() {
    const idx = Robot.names.indexOf(this.robotName);
    Robot.names.splice(idx, 1);
    this.robotName = null;
  }

  generateName() {
    let result = '';

    for (let count = 1; count <= 2; count++) {
      result += this.generateRandomLetter();
    }

    for (let count = 1; count <= 3; count++) {
      result += this.generateRandomNumber();
    }

    return result;
  }

  generateRandomLetter() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const idx = Math.floor(Math.random() * 26);
    return letters[idx];
  }

  generateRandomNumber() {
    return Math.floor(Math.random() * 10);
  }
}

module.exports = Robot;
