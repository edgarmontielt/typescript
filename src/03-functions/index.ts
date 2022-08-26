// Funtions JS: First class objects

function add(a: number, b: number): number {
    return a + b
}

add(1, 1)

// Function expression
const greet = function (name: string): string {
    return `Hello, ${name}`
}

// Arrow function expression
let greetTwo = (name: string): string => {
    return `Hello, ${name}`
}

// Shorthand arrow function expression
let greetThree = (name: string): string => `Hello, ${name}`

// Funtion constructor
let greetFour = new Function('name', 'return "Hello, " + name')

// // Optional Parameters

// function log(message: string, userID?: string): void {
//     let time = new Date().toLocaleDateString()
//     console.log(time, message, userID || 'Not signed in')
// }

// log('hola', 'abc123')
// log('hola');

// Objects received

interface User {
    id: string;
    name: string;
    age: number;
    profilePic?: string;
}

function log(
    message: string,
    user: User = {
        id: "abc123",
        name: "Anonymus",
        age: 12,
    }
) {
    let time = new Date().toLocaleDateString();
    console.log(time, message, user.name);
}

log("hola");
log("hola", {
    id: "abc123",
    name: "Edgar",
    age: 20,
});

// rest parameters: TS no support
function sum(numbers: number[]) {
    return numbers.reduce((total: number, n: number): number => total + n, 0)
}

const res = sum([1, 2, 3, 4, 5])

// Esto esta prohibido en TS (usar arguments):
// function sum() {
//     return Array.from(arguments).reduce((total: number, n: number): number => total + n, 0)
// }

// sum(1, 2, 3, 4, 5) // incorrect

// Se resolvería de esta forma: 
function sumTwo(...numbers: number[]) {
    return numbers.reduce((total: number, n: number): number => total + n, 0)
}

sumTwo(1, 2, 3, 4, 5, 6, 7)

console.log(
    add(10, 20),
    add.apply(null, [10, 20]),
    add.call(null, 10, 20),
    add.bind(null, 10, 20)()
);

let x = {
    a() {
        return this
    }
}

x.a()
let func = x.a

console.log(func());