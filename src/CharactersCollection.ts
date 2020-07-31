import { Sorter } from "./Sorter";

/** Class representing a String */
export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  /**
   * Fetches the length of the string
   * @returns {number} - The length of the string
   */
  get length(): number {
    return this.data.length;
  }

  /**
   * Compare the two characters to see if the first character is greater than the next character
   * @param {number} leftIndex - The index of the first character to compare
   * @param {number} rightIndex - The index of the second character to compare
   * @returns {boolean}
   * @memberof CharactersCollection
   */
  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  /**
   * Swap the character at the left index with the character at the right index
   * @param {number} leftIndex - the index of the character on the left side that will swap with right side
   * @param {number} rightIndex - the index of the character on the right side that will swap with left side
   * @memberof CharactersCollection
   */
  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split("");

    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;

    this.data = characters.join("");
  }
}
