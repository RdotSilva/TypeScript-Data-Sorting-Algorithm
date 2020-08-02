import { expect } from "chai";
import "mocha";
import { CharactersCollection } from "./../src/CharactersCollection";

describe("Characters Collection Tests", () => {
  it("sort method should sort lower case string", () => {
    const charactersCollection = new CharactersCollection("bdca");
    charactersCollection.sort();
    expect(charactersCollection.data).to.equal("abcd");
  });

  it("sort method should sort upper case string", () => {
    const charactersCollection = new CharactersCollection("BDCA");
    charactersCollection.sort();
    expect(charactersCollection.data).to.equal("ABCD");
  });

  it("sort method should sort string with only one character", () => {
    const charactersCollection = new CharactersCollection("A");
    charactersCollection.sort();
    expect(charactersCollection.data).to.equal("A");
  });

  it("length getter method should return correct length", () => {
    const charactersCollection = new CharactersCollection("abc");
    expect(charactersCollection.length).to.equal(3);
  });
});
