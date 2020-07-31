import { Sorter } from "./Sorter";

/** Class representing an Array of numbers */
export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  /**
   * Fetch the length of the NumbersCollection
   * @readonly
   * @type {number}
   * @memberof NumbersCollection
   */
  get length(): number {
    return this.data.length;
  }

  /**
   * Compare the number located at left index with the number located at right index
   * @param {number} leftIndex - The index of the number on the left to compare to the number on the right
   * @param {number} rightIndex - The index of the number on the right to compare with the number on the left
   * @returns {boolean}
   * @memberof NumbersCollection
   */
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  /**
   * Swap the number at the left index with the number at the right index
   * @param {number} leftIndex - The index of the number on the left to swap with the number on the right
   * @param {number} rightIndex - The index of the number on the right to swap with the number on the left
   * @memberof NumbersCollection
   */
  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
