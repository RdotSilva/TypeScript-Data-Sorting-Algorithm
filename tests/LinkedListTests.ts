import { expect } from "chai";
import "mocha";
import { LinkedList } from "./../src/LinkedList";

describe("Linked List Tests", () => {
  it("sort method should sort linked list", () => {
    const linkedList = new LinkedList();
    linkedList.add(500);
    linkedList.add(-10);
    linkedList.add(-3);
    linkedList.add(4);
    linkedList.sort();
    expect(linkedList.at(0).data).to.equal(-10);
  });
});
