import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";}
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([-2, 10000, 3, -5, 0]);
const numberSorter = new Sorter(numbersCollection);

const charactersCollection = new CharactersCollection("XaaybCsZv");
const stringSorter = new Sorter(charactersCollection);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
const linkedListSorter = new Sorter(linkedList);

numberSorter.sort();
stringSorter.sort();
linkedListSorter.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
linkedList.print();
