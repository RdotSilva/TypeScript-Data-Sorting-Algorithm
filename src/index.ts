class Sorter {
  constructor(public collection: number[] | string) {}

  /*
   * Sorting algorithm using Bubble Sort
   */
  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // All of this only works if collection nis number[]
        // If collection is an array of numbers then run this

        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }

        // Will only work if collection is a string
        // If collection is a string, do this logic instead:
        // Logic to compare and swap characters in a string
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
