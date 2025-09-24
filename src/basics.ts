// Basic TypeScript example
function greet(name: string) {
    console.log(`Hello, ${name}!`);
}

greet("World");

// Let's add some type definitions
let age: number = 25;
let names: string[] = ["John", "Jane", "Alice"];

// Simple interface
interface Person {
    name: string;
    age: number;
}

const person: Person = {
    name: "John Doe",
    age: 30
};

console.log(person);
