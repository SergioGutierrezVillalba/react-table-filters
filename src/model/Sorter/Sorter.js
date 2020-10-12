export default class Sorter {
  constructor({ elements }) {
    if (!this.elements instanceof Array) {
      throw new Error(
        `Elements must be an array, instead received type ${elements.constructor.name}`
      );
    }
    this.elements = elements;
    this.type = null;
  }

  reverse() {
    return this.elements.reverse();
  }

  sort() {
    if (arguments.length > 0) {
      const [type] = arguments;
      this.type = type;
      return this;
    }

    return this.elements.sort();
  }

  byField(field) {
    const elementsSorted = this.elements.sort((a, b) => a[field] > b[field]);
    if (this.type === "ASC") return elementsSorted;
    if (this.type === "DESC") return elementsSorted.reverse();
    console.log(`Type ${this.type} is not supported as a type of sorting`);
    return this.elements;
  }
}
