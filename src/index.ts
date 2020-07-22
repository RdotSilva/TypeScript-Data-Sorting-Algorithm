class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {
    // TODO: Add bubble sorting implementation
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
