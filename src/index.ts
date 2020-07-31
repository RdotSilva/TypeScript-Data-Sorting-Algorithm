import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";}
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([-2, 10000, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("XaaybCsZv");
charactersCollection.sort();
console.log(charactersCollection.data);