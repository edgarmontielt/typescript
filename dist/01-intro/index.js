"use strict";
/**
 * tslint: linter para TS
 * @types/node: type declarations
 * npm install -D typescript tslint @types/node
 */
let number = 1;
let text = "Hello";
const bool = true;
let array = [1, 3, ""];
let arrayStr = [""];
let arrayBool = [true, false];
function operation(number = 0) {
    return number / 2;
}
function boolTest() {
    let value = false;
    value = true;
    return value;
}
console.log(operation(2));
function squareRoot(n) {
    return n * n;
}
squareRoot(1);
// type: conjunto de valores y las cosas que podemos hacer con ellos
// se debe evitar usar el tipo any a menos que no hay otra opción
let numValue = 222;
let str = ".55";
let union = str + numValue;
// unknown: cuando desoconocemos el tipo con aticipación -> refinamiento
// let value: unknown = 300
// let add = value + 10 //-> da error
/**
 *
 * Objects
 * */
class Person {
    // name: string
    // address:  address: { street: string }
    // constructor(name: string, address:  address: { street: string }) {
    //     this.name = name
    //     this.address = address
    // }
    constructor(name, address // public es un atajo a this.address
    ) {
        this.name = name;
        this.address = address;
    }
}
// Tipado estructural
const edgar = new Person("Edgar", {
    street: "Street",
    // number: 234,
    city: "Tlaxcala"
});
let obj = {
    name: "Edgar",
    address: {
        street: "Street",
        number: 234,
        live: false
    }
};
//object -> para TS es algo que esta definido y no es null
edgar.name;
obj.name;
obj.address.number;
// let user: User = {
//     name: 'edgar'
// }
// interface User {
//     readonly name: string, // readonly -> se refiere a una propiedad de solo lectura
// }
// user.name = 'Paco' // da error si usamos readonly
// Omitir definir objetos vacíos
// let exampleObject:object
let exampleObject;
exampleObject = [];
exampleObject = 2;
