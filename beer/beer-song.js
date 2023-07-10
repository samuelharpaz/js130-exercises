class BeerSong {
  static verse(num) {
    if (num === 0) {
      return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
    }

    const next = num - 1 || 'no more';
    const currentBottleStr = num !== 1 ? 'bottles' : 'bottle';
    const nextBottleStr = next !== 1 ? 'bottles' : 'bottle';

    return `${num} ${currentBottleStr} of beer on the wall, ${num} ${currentBottleStr} of beer.\nTake ${
      num !== 1 ? 'one' : 'it'
    } down and pass it around, ${next} ${nextBottleStr} of beer on the wall.\n`;
  }

  static verses(first, last) {
    const versesArr = [];

    for (let num = first; num >= last; num--) {
      versesArr.push(this.verse(num));
    }

    return versesArr.join('\n');
  }

  static lyrics() {
    return this.verses(99, 0);
  }
}

module.exports = BeerSong;
