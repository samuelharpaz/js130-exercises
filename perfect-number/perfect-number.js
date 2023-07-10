class PerfectNumber {
  static classify(num) {
    if (num < 0) {
      throw RangeError('number must be positive');
    }
    
    const numDivisors = this._getSumOfFactors(num);

    if (num > numDivisors) return 'deficient';
    if (num < numDivisors) return 'abundant';
    
    return 'perfect';
  }

  static _getSumOfFactors(num) {
    let sum = 0;

    for (let count = 1; count <= (num / 2); count++) {
      if (num % count === 0) sum += count;
    }

    return sum;
  }
}

module.exports = PerfectNumber;