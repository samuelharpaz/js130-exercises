class Octal {
  constructor(numStr) {
    this.numStr = numStr;
  }

  toDecimal() {
    const digits = this.numStr.split('').map(char => +char);

    if (!this._validate(digits)) return 0;

    const reversedDigits = [...digits].reverse();

    return reversedDigits.reduce((total, num, idx) => {
      return total + num * 8 ** idx;
    }, 0);
  }

  _validate(nums) {
    for (let num of nums) {
      if (Number.isNaN(num) || [8, 9].includes(num)) {
        return false;
      }
    }

    return true;
  }
}

module.exports = Octal;

// const octal = new Octal('11');
// console.log(octal.toDecimal());

// Algorithm:
//  fn: validate
//  - validate each character
//    - transform character into a number
//    `- if result is NaN or 8 or 9, return false
//  `- ELSE return true

//  - split `numStr` into an array of characters
//  - map `chars   to an array of numbers (convert each str character to a number)
//  - reverse the array
//  - map over array:
//      - multiply current element by 8 to the power of the current index
//      - return the result
//    - add up array and return result
