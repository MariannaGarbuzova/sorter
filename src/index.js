class Sorter {

  constructor() {
    this._arr = [];
    this._comporator = (left, right) => left - right;
  }

  add(element) {
    this._arr.push(element);
  }

  at(index) {
    return this._arr[index];
  }

  get length() {
    return this._arr.length;
  }

  toArray() {
    return [...this._arr];
  }

  sort(indices) {
    // sort indecies first
    indices.sort();

    // bubble sort of inner arr
    let foundUnsorted = true;
    while (foundUnsorted) {
      foundUnsorted = false;
      for (let i = 0; i < indices.length - 1; i++) {
        let a = this._arr[indices[i]];
        let b = this._arr[indices[i + 1]];
        if (this._comporator(a, b) > 0) {
          this._arr[indices[i]] = b;
          this._arr[indices[i + 1]] = a;
          foundUnsorted = true;
        }
      }
    }
  }

  setComparator(compareFunction) {
    this._comporator = compareFunction;
  }
}

module.exports = Sorter;