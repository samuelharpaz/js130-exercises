module.exports = class {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(otherDNAStrand) {
    if (!this.strand.length || !otherDNAStrand.length) return 0;
    
    let distance = 0;
    let shorterLength = Math.min(this.strand.length, otherDNAStrand.length);


    for (let idx = 0; idx < shorterLength; idx++) {
      if (this.strand[idx] !== otherDNAStrand[idx]) {
        distance += 1;
      }
    }
    
    return distance;
  }
}