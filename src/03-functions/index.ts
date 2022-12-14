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

// console.log(func());

function printMessage(this: User, message: string) {
    console.log(message, this.name);
}

printMessage.call({
    id: 'abc123',
    name: 'Edgar',
    age: 20,
}, 'hello')

// The 'this' context of type 'void' is not assignable to method's 'this' of type 'User'
// printMessage('hello')

// Generadors: generators

function* createFibonacci() {
    let a = 0
    let b = 1

    while (true) {
        yield a; // Return, pero con pause
        // let aux = a
        // a = b
        // b = aux + b
        [a, b] = [b, a + b]
    }
}


let fibonacciGenerator = createFibonacci()
fibonacciGenerator.next() // 0
fibonacciGenerator.next() // 1
fibonacciGenerator.next() // 2
fibonacciGenerator.next() // 3
fibonacciGenerator.next() // 4
console.log(fibonacciGenerator.next().value)// 5


// TODO: Utilizar un generador para generar esta serie: 1,2,3,4,5,6,7
function* createSequence() {
    let a = 1

    while (true) {
        yield a;
        a++
    }
}

let sequenceGenerator = createSequence()
sequenceGenerator.next()
sequenceGenerator.next()
sequenceGenerator.next()
console.log(sequenceGenerator.next());


// Iterable: Cualquier objeto que contenga un propiedad llamada Symbol.iterable
// Iterator: Cualquier objeto que define un método next

// Array en su forma base: 
let numbersIterator = {
    *[Symbol.iterator]() {
        for (let n = 1; n <= 10; n++) {
            yield n
        }
    }
}

const arrayIterable = [1, 2, 3, 4, 5]
arrayIterable[Symbol.iterator]

// Iterable -> Spread operator, destructuring
let allNumbersIterator = [...numbersIterator]
let [one, two, ...rest] = numbersIterator

// TODO: crear un iterable con los primeros 10 numeros de la serie de fibonacci

let fibonacciIterator = {
    *[Symbol.iterator]() {
        for (let i = 0; i < 10; i++) {
            let aux = i
            let b = aux
        }
    }
}

// Call signatures: 
// function: es un tipo que describe todas las funciones
console.log(typeof greet) // (name: string) => string

// type Callback = (message: string) => void
// Sobrecarga de métodos
type Callback = {
    (message: string): void
    (message: string, date: Date): void
    (message: string, date: Date, id: String): void
    (message: string, date: Date, number: number, id: String): void
}

function showDate(callback: Callback): void {
    // callback(new Date().toISOString())
    // callback('Hello', new Date())
    callback('Hello', new Date(), 12, 'abc123')
}

// Contextual typing
showDate((
    message: string,
    numberOrDate?: Date | number,
    id?
) => {
    console.log(message, numberOrDate, id) // -> Hello 2022-08-31T00:05:31.003Z 12
    console.log(message, numberOrDate, id) // -> Hello 2022-08-31T00:05:31.003Z abc123
})

// arrayIterable.map((n: number) => n * 2)
arrayIterable.map(n => n * 2)

// TODO: Investigar sobre polimorfismo y generics