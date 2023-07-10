class Triangle {
  constructor(side1, side2, side3) {
    this.sides = [side1, side2, side3].sort((a, b) => a - b);
    
    if (!this._isValid()) {
      throw new Error('invalid lengths');
    }
  }

  _isValid() {
    const [ s1, s2, s3 ] = this.sides;

    return (s1 > 0) && ((s1 + s2 > s3));
}

  kind() { 
    const [ s1, s2, s3 ] = this.sides;

    if ((s1 === s2) && (s1 === s3)) return 'equilateral';
    if ((s1 === s2) || (s2 === s3)) return 'isosceles';
    return 'scalene';
  }
}

module.exports = Triangle;

