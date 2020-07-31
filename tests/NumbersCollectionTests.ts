import { expect } from "chai";
import "mocha";
import { NumbersCollection } from "../src/NumbersCollection";

describe("Numbers Collection Tests", () => {
  it("should sort the array from least to greatest", () => {
    const numbersCollection = new NumbersCollection([5, 2, 1, 3, 4]);
    numbersCollection.sort();
    expect(numbersCollection.data).to.deep.equal([1, 2, 3, 4, 5]);
  });
});
