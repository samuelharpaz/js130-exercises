class SumOfMultiples {
  constructor(...numSet) {
    if (!numSet.length) {
      this.set = [3, 5];
    } else {
      this.set = numSet;
    }
  }

  to(max) {
    const multiples = [];

    for (let count = 1; count < max; count++) {
      for (let num of this.set) {
        if (this.isMultiple(count, num)) {
          multiples.push(count);
          break;
        }
      }
    }

    return multiples.reduce((acc, num) => acc + num, 0);
  }

  isMultiple(testNum, num) {
    return testNum % num === 0;
  }

  static to(max) {
    const nums = new this();
    return nums.to(max);
  }
}

module.exports = SumOfMultiples;

console.log(SumOfMultiples.to(20));
// Algorithm:

//  - create array `multiples`
//  - loop from count = 1 to ()`max` - 1), incrementing by 1 on each iteration
//    - loop over `this.set` and check if `count` is a multiple of any element within `this.set`
//    - if yes, add `count` to `multiples` and `continue` to next iteration of outer loop
//  - add up all numbers within `multiples` and return
