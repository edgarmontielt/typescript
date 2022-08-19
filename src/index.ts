/**
 * tslint: linter para TS
 * @types/node: type declarations
 * npm install -D typescript tslint @types/node
 */

let number: number = 1
let text: string = "Hello"
const bool: boolean = true
let array: array = [1, 3, ""]

let arrayStr: string[] = [""]
let arrayBool: boolean[] = [true, false]

type array = [
    number,
    number,
    string
]

function operation(number: number = 0) {
    return number / 2
}

function boolTest(): boolean {
    let value: boolean = false
    value = true
    return value
}

console.log(operation(2));

function squareRoot(n: number): number {
    return n * n
}

squareRoot(1)

// type: conjunto de valores y las cosas que podemos hacer con ellos

// se debe evitar usar el tipo any a menos que no hay otra opción
let numValue: any = 222
let str = ".55"
let union: any = str + numValue

// unknown: cuando desoconocemos el tipo con aticipación -> refinamiento
// let value: unknown = 300
// let add = value + 10 //-> da error


/** Objects */

class Person {
    // name: string
    // address:  address: { street: string }

    // constructor(name: string, address:  address: { street: string }) {
    //     this.name = name
    //     this.address = address
    // }

    constructor(
        public name: string,
        public address: {
            // street: string,
            // number: number,
            // numInt?: number, // ? -> optional value
            // [key: number]: boolean // cualquier tipo de propiedades numericas que sean boolean
            [key: string]: string // cualquier propiedad en str que almacene str
        } // public es un atajo a this.address
    ) {

    }
}

// Tipado estructural
const edgar = new Person("Edgar", {
    street: "Street",
    // number: 234,
    city: "Tlaxcala"
})

let obj: Types = {
    name: "Edgar",
    address: {
        street: "Street",
        number: 234,
        live: false
    }
}

interface Types {
    name: string,
    address: {
        street: string,
        number: number,
        live: boolean
    }
}

//object -> para TS es algo que esta definido y no es null

edgar.name

obj.name