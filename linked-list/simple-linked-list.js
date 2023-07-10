export class Element {
  constructor(value, nextRef = null) {
    this.value = value;
    this.nextRef = nextRef;
  }

  datum() {
    return this.value;
  }

  isTail() {
    return this.nextRef === null;
  }

  next() {
    return this.nextRef;
  }
}

export class SimpleLinkedList {
  size() {
    let total = 0;
    let current = this.head();

    while (current !== null) {
      total += 1;
      current = current.next();
    }

    return total;
  }

  isEmpty() {
    return !this.head();
  }

  push(datum) {
    const newEl = new Element(datum, this.head());
    this.headEl = newEl;
  }

  pop() {
    const currHead = this.head();
    this.headEl = currHead.next();

    return currHead.datum();
  }

  head() {
    return this.headEl || null;
  }

  peek() {
    const head = this.head();
    return head ? head.datum() : null;
  }

  toArray() {
    const arr = [];

    let current = this.head();

    while (current !== null) {
      arr.push(current.datum());
      current = current.next();
    }

    return arr;
  }

  reverse() {
    const arr = this.toArray();
    return SimpleLinkedList.fromArray([...arr].reverse());
  }

  static fromArray(arr) {
    if (!arr) arr = [];

    const list = new this();

    if (arr.length) {
      for (let idx = arr.length - 1; idx >= 0; idx--) {
        list.push(arr[idx]);
      }
    }

    return list;
  }
}
