
/**
 * Basic Typescript Project for learning.
 * Consists of examples using different data types
 */

//Declaring variables
let username = "Jack";
let hasLoggedIn = true;

username = username + " Herrington";

console.log(username);

//Number
let myNumber: number = 10;

//RegExp
let myRegex: RegExp = /foo/;

//Two ways of initializing arrays
const names: string[] = username.split(" ");
const myValues: Array<number> = [1, 2, 3];

//Creating an interface Person to reuse the structure
interface Person {
    first: string;
    last: string;
}

//Creating an object
const myPerson: Person = {
    first: "Jack",
    last: "Herrington"
}

//Record
const ids: Record<number, string> = {
    10: "a",
    20: "b"
}

ids[30] = "c";

if (ids[30] === "D") {
}

//For loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//ForEach loop
[1, 2, 3].forEach((v) => console.log(v));

//Map
const out: number[] = [4, 5, 6].map(v => v * 10);