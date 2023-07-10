let CustomSet = require('./custom-set.js');

describe('CustomSet', () => {
  describe('empty: returns true if the set contains no elements', () => {
    test('sets with no elements are empty', () => {
      const actual = new CustomSet().isEmpty();
      expect(actual).toBe(true);
    });

    test('sets with elements are not empty', () => {
      const actual = new CustomSet([1]).isEmpty();
      expect(actual).toBe(false);
    });
  });

  describe('contains: sets can report if they contain an element', () => {
    test('nothing is contained in an empty set', () => {
      const actual = new CustomSet().contains(1);
      expect(actual).toBe(false);
    });

    test('when the element is in the set', () => {
      const actual = new CustomSet([1, 2, 3]).contains(1);
      expect(actual).toBe(true);
    });

    test('when the element is not in the set', () => {
      const actual = new CustomSet([1, 2, 3]).contains(4);
      expect(actual).toBe(false);
    });
  });

  describe('subset: a set is a subset if all of its elements are contained in the other set', () => {
    test('empty set is a subset of another empty set', () => {
      const actual = new CustomSet().isSubset(new CustomSet());
      expect(actual).toBe(true);
    });

    test('empty set is a subset of non-empty set', () => {
      const actual = new CustomSet().isSubset(new CustomSet([1]));
      expect(actual).toBe(true);
    });

    test('non-empty set is not a subset of empty set', () => {
      const actual = new CustomSet([1]).isSubset(new CustomSet());
      expect(actual).toBe(false);
    });

    test('set is a subset of set with exact same elements', () => {
      const actual = new CustomSet([1, 2, 3]).isSubset(new CustomSet([1, 2, 3]));
      expect(actual).toBe(true);
    });

    test('set is a subset of larger set with same elements', () => {
      const actual = new CustomSet([1, 2, 3]).isSubset(new CustomSet([4, 1, 2, 3]));
      expect(actual).toBe(true);
    });

    test('set is not a subset of set that does not contain its elements', () => {
      const actual = new CustomSet([1, 2, 3]).isSubset(new CustomSet([4, 1, 3]));
      expect(actual).toBe(false);
    });
  });

  describe('disjoint: sets are disjoint if they share no elements', () => {
    test('the empty set is disjoint with itself', () => {
      const actual = new CustomSet().isDisjoint(new CustomSet([]));
      expect(actual).toBe(true);
    });

    test('empty set is disjoint with non-empty set', () => {
      const actual = new CustomSet().isDisjoint(new CustomSet([1]));
      expect(actual).toBe(true);
    });

    test('non-empty set is disjoint with empty set', () => {
      const actual = new CustomSet([1]).isDisjoint(new CustomSet([]));
      expect(actual).toBe(true);
    });

    test('sets are not disjoint if they share an element', () => {
      const actual = new CustomSet([1, 2]).isDisjoint(new CustomSet([2, 3]));
      expect(actual).toBe(false);
    });

    test('sets are disjoint if they share no elements', () => {
      const actual = new CustomSet([1, 2]).isDisjoint(new CustomSet([3, 4]));
      expect(actual).toBe(true);
    });
  });

  describe('isSame: sets with the same elements are equal', () => {
    test('empty sets are equal', () => {
      const actual = new CustomSet().isSame(new CustomSet());
      expect(actual).toBe(true);
    });

    test('empty set is not equal to non-empty set', () => {
      const actual = new CustomSet().isSame(new CustomSet([1, 2, 3]));
      expect(actual).toBe(false);
    });

    test('non-empty set is not equal to empty set', () => {
      const actual = new CustomSet([1, 2, 3]).isSame(new CustomSet());
      expect(actual).toBe(false);
    });

    test('sets with the same elements are equal', () => {
      const actual = new CustomSet([1, 2]).isSame(new CustomSet([2, 1]));
      expect(actual).toBe(true);
    });

    test('sets with different elements are not equal', () => {
      const actual = new CustomSet([1, 2, 3]).isSame(new CustomSet([1, 2, 4]));
      expect(actual).toBe(false);
    });
  });

  describe('add: unique elements can be added to a set', () => {
    test('add to empty set', () => {
      const actual = new CustomSet().add(3);
      const expected = new CustomSet([3]);
      expect(actual.isSame(expected)).toBe(true);
    });

    test('add to non-empty set', () => {
      const actual = new CustomSet([1, 2, 4]).add(3);
      const expected = new CustomSet([1, 2, 4, 3]);
      expect(actual.isSame(expected)).toBe(true);
    });

    test('adding an existing element does not change the set', () => {
      const actual = new CustomSet([1, 2, 3]).add(3);
      const expected = new CustomSet([1, 2, 3]);
      expect(actual.isSame(expected)).toBe(true);
    });
  });

  describe('intersection: returns a set of all shared elements', () => {
    test('intersection of two empty sets is an empty set', () => {
      const actual = new CustomSet().intersection(new CustomSet());
      const expected = new CustomSet();
      expect(actual.isSame(expected)).toBe(true);
    });

    test('intersection of an empty set and non-empty set is an empty set', () => {
      const actual = new CustomSet().intersection(new CustomSet([3, 2, 5]));
      const expected = new CustomSet([]);
      expect(actual.isSame(expected)).toBe(true);
    });

    test('intersection of a non-empty set and an empty set is an empty set', () => {
      const actual = new CustomSet([1, 2, 3, 4]).intersection(new CustomSet([]));
      const expected = new CustomSet([]);
      expect(actual.isSame(expected)).toBe(true);
    });

    test('intersection of two sets with no shared elements is an empty set', () => {
      const actual = new CustomSet([1, 2, 3]).intersection(new CustomSet([4, 5, 6]));
      const expected = new CustomSet([]);
      expect(actual.isSame(expected)).toBe(true);
    });

    test('intersection of two sets with shared elements is a set of the shared elements', () => {
      const actual = new CustomSet([1, 2, 3, 4]).intersection(new CustomSet([3, 2, 5]));
      const expected = new CustomSet([2, 3]);
      expect(actual.isSame(expected)).toBe(true);
    });
  });

  describe('difference of a set is a set of all elements that are only in the first set', () => {
    test('difference of two empty sets is an empty set', () => {
      const actual = new CustomSet().difference(new CustomSet());
      const expected = new CustomSet();
      expect(actual.isSame(expected)).toBe(true);
    });

    test('difference of empty set and non-empty set is an empty set', () => {
      const actual = new CustomSet().difference(new CustomSet([3, 2, 5]));
      const expected = new CustomSet();
      expect(actual.isSame(expected)).toBe(true);
    });

    test('difference of a non-empty set and an empty set is the non-empty set', () => {
      const actual = new CustomSet([1, 2, 3, 4]).difference(new CustomSet());
      const expected = new CustomSet([1, 2, 3, 4]);
      expect(actual.isSame(expected)).toBe(true);
    });

    test('difference of two non-empty sets is a set of elements that are only in the first set', () => {
      const actual = new CustomSet([3, 2, 1]).difference(new CustomSet([2, 4]));
      const expected = new CustomSet([3, 1]);
      expect(actual.isSame(expected)).toBe(true);
    });
  });

  describe('union: returns a set of all elements in either set', () => {
    test('union of empty sets is an empty set', () => {
      const actual = new CustomSet().union(new CustomSet());
      const expected = new CustomSet();
      expect(actual.isSame(expected)).toBe(true);
    });

    test('union of an empty set and non-empty set is the non-empty set', () => {
      const actual = new CustomSet().union(new CustomSet([2]));
      const expected = new CustomSet([2]);
      expect(actual.isSame(expected)).toBe(true);
    });

    test('union of a non-empty set and empty set is the non-empty set', () => {
      const actual = new CustomSet([1, 3]).union(new CustomSet());
      const expected = new CustomSet([1, 3]);
      expect(actual.isSame(expected)).toBe(true);
    });

    test('union of non-empty sets contains all unique elements', () => {
      const actual = new CustomSet([1, 3]).union(new CustomSet([2, 3]));
      const expected = new CustomSet([1, 2, 3]);
      expect(actual.isSame(expected)).toBe(true);
    });
  });
});
