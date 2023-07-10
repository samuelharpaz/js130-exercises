class Series {
  constructor(numStr) {
    this.arr = [...numStr].map(char => +char);
  }

  slices(length) {
    const arrLen = this.arr.length;
    if (length > arrLen) throw RangeError('argument may not exceed length of series');

    const result = [];

    for (let idx = 0; idx <= arrLen - length; idx++) {
      result.push(this.arr.slice(idx, idx + length));
    }

    return result;
  }
}

module.exports = Series;

// Algorithm
// fn: `slices`(length)
//  - IF slices length is greater than length of `arr`, throw a RangeError
//  ` create array `result
// `- loop over `arr` from `idx` 0 to index[`arr` length - 'length')
//    - create a slice from (current)`idx up to (`idx` + )`length`
//    - push slice into `result` `
