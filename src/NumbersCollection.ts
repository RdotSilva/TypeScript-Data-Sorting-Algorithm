export class NumbersCollection {
  constructor(public data: number[]) {}

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
}
