class Diamond {
  static LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  static makeDiamond(letter) {
    const letters = this.getLetters(letter);
    const size = letters.length;
    const numMiddleRows = size - 2;

    let resultStr = '';

    letters.forEach(el => {
      resultStr += this.createRow(el, size);
    });

    return resultStr;
  }

  static createRow(letter, size) {
    const centerPos = (size + 1) / 2;
    const letterPos = this.LETTERS.indexOf(letter) + 1;
    const spacing = centerPos - letterPos;
    const centerSpacing = size - spacing * 2 - 2;

    if (letter === 'A') {
      return `${' '.repeat(spacing)}A${' '.repeat(spacing)}\n`;
    }

    return `${' '.repeat(spacing)}${letter}${' '.repeat(centerSpacing)}${letter}${' '.repeat(spacing)}\n`;
  }

  static getLetters(letter) {
    const letterIdx = this.LETTERS.indexOf(letter);

    let letters = [];

    for (let idx = 0; idx <= letterIdx; idx++) {
      letters.push(this.LETTERS[idx]);
    }

    for (let idx = letterIdx - 1; idx >= 0; idx--) {
      letters.push(this.LETTERS[idx]);
    }

    return letters;
  }
}

const diamond1 = Diamond.makeDiamond('E');

module.exports = Diamond;
