import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([-2, 10000, 3, -5, 0]);
const numberSorter = new Sorter(numbersCollection);

const charactersCollection = new CharactersCollection("XaaybCsZv");
const stringSorter = new Sorter(charactersCollection);

numberSorter.sort();
stringSorter.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
