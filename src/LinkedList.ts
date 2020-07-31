import { Sorter } from "./Sorter";
class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  /*
   * Add a new Node to the linked
   * @param {number} data - The value of the Node
   */
  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;

    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  /*
   * Fetches the length of the linked list
   * @returns {number} The length of the linked list
   */
  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;

    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  /*
   * Fetches a Node at a specific index
   * @param {number} index - The index of the Node to retrieve
   * @returns {Node} The Node at a specific index
   */
  at(index: number): Node {
    if (!this.head) {
      throw new Error("Index out of bounds");
    }

    let counter = 0;
    let node: Node | null = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    throw new Error("Index out of bounds");
  }

  /*
   * Compare the two values to see if the first value is greater than the next value
   * @param {number} leftIndex - The index of the first number to compare
   * @param {number} rightIndex - The index of the second number to compare
   * @returns {boolean} Result of comparing leftIndex > rightIndex
   */
  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("List is empty");
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  /*
   * Swap the VALUES of linked list. Does NOT swap the actual NODE
   * @param {number} leftIndex - the index on the left side that will swap with right side
   * @param {number} rightIndex - the index on the right side that will swap with left side
   */
  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  /*
   * Print each node value in the linked list
   */
  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
