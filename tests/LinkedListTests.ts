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

  it("add method should add node to linked list", () => {
    const linkedList = new LinkedList();
    linkedList.add(500);
    expect(linkedList.at(0).data).to.equal(500);
    expect(linkedList.length).to.equal(1);
  });
});
