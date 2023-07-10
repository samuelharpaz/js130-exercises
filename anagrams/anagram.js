class Anagram {
  constructor(word) {
    this.word = word.toLowerCase();
  }

  match(strArr) {
    return strArr.filter(str => this.isAnagram(str));
  }

  isAnagram(str) {
    str = str.toLowerCase();

    if (str === this.word) return false;
    if (str.length !== this.word.length) return false;

    return [...str].sort().join('') === [...this.word].sort().join('');
  }
}


module.exports = Anagram;