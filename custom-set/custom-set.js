class CustomSet {
  constructor(arr = []) {
    this.set = this._getUnique(arr);
  }

  _getUnique(arr) {
    let result = [];

    arr.forEach(el => {
      if (!result.includes(el)) {
        result.push(el);
      }
    });

    return result;
  }

  isEmpty() {
    return this.set.length === 0;
  }

  contains(el) {
    return this.set.includes(el);
  }

  isSubset(set2) {
    if (this.isEmpty()) return true;
    if (set2.isEmpty()) return false;

    return this.set.every(el => set2.contains(el));
  }

  isDisjoint(set2) {
    if (this.isEmpty() || set2.isEmpty()) return true;

    return this.set.every(el => !set2.contains(el));
  }

  isSame(set2) {
    if (this.set.length !== set2.set.length) return false;

    return this.isSubset(set2);
  }

  add(newEl) {
    if (!this.contains(newEl)) {
      this.set.push(newEl);
    }

    return this;
  }

  intersection(set2) {
    return new CustomSet(this.set.filter(el => set2.contains(el)));
  }

  difference(set2) {
    return new CustomSet(this.set.filter(el => !set2.contains(el)));
  }

  union(set2) {
    return new CustomSet([...this.set, ...set2.set]);
  }
}

module.exports = CustomSet;
