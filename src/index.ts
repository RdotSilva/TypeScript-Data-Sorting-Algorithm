import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// NumbersCollection test
const numbersCollection = new NumbersCollection([-2, 10000, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

// CharactersCollection test
const charactersCollection = new CharactersCollection("XaaybCsZv");
charactersCollection.sort();
console.log(charactersCollection.data);

// LinkedList test
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
