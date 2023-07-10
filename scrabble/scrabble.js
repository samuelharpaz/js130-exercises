class Scrabble {
  static LETTER_VALUES = {
    '1': {
      letters: ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
      value: 1
    },
    '2': {
      letters: ['d', 'g'],
      value: 2
    },
    '3': {
      letters: ['b', 'c', 'm', 'p'],
      value: 3
    },
    '4': {
      letters: ['f', 'h', 'v', 'w', 'y'],
      value: 4
    },
    '5': {
      letters: ['k'],
      value: 5
    },
    '8': {
      letters: ['j', 'x'],
      value: 8
    },
    '10': {
      letters: ['q', 'z'],
      value: 10
    }
  };
  
  constructor(word) {
    this.word = word;
  }

  score() {
    if (this.word === null) return 0;

    const word = this.word.toLowerCase();

    let total = 0;

    [...word].forEach(char => total += this.charScore(char));
    return total;
  }

  charScore(char) {
    if (!char.trim()) return 0;

    char = char.toLowerCase().trim();

    let vals = Scrabble.LETTER_VALUES

    for (let val of Object.keys(vals)) {
      const { letters, value } = vals[val];

      if (letters.includes(char)) return value;
    }
  }

  static score(word) {
    let newWord = new this(word);
    return newWord.score();
  }
}

module.exports = Scrabble;