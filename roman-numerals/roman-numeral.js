class RomanNumeral {
  static ROMAN_NUMERALS = {
    I: 1,
   IV: 4,
    V: 5,
   IX: 9,
    X: 10,
   XL: 40,
    L: 50,
   XC: 90,
    C: 100,
   CD: 400,
    D: 500,
   CM: 900,
    M: 1000
 }
  
  constructor(num) {
    this.num = num;
  }

  toRoman() {
    let romanStr = '';
    let current = this.num;

    const rn = RomanNumeral.ROMAN_NUMERALS

    const values = Object.values(rn);

    while (current > 0) {
      const highestDivisible = Math.max(...values.filter(value => value <= current));
      const numeral = Object.keys(rn).find(numeral => rn[numeral] === highestDivisible);
      
      const multiplier = Math.trunc(current / highestDivisible);
      romanStr += numeral.repeat(multiplier);
      current = current % highestDivisible;
    }

    return romanStr;
  }
}

const num1 = new RomanNumeral(849);
console.log(num1.toRoman());

module.exports = RomanNumeral;