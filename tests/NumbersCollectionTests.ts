import { expect } from "chai";
import "mocha";
import { NumbersCollection } from "../src/NumbersCollection";

describe("Numbers Collection Tests", () => {
  it("should sort the array from least to greatest", () => {
    const numbersCollection = new NumbersCollection([5, 2, 1, 3, 4]);
    numbersCollection.sort();
    expect(numbersCollection.data).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it("should sort array given negative numbers", () => {
    const numbersCollection = new NumbersCollection([-1, 0, 4, 2, -5]);
    numbersCollection.sort();
    expect(numbersCollection.data).to.deep.equal([-5, -1, 0, 2, 4]);
  });

  it("should sort array of only 1 character", () => {
    const numbersCollection = new NumbersCollection([50]);
    numbersCollection.sort();
    expect(numbersCollection.data).to.deep.equal([50]);
  });
});
