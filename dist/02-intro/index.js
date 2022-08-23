"use strict";
// Intermission: Type alliases, unions, intersections
let person = {
    name: "Edgar",
    age: 20,
};
let person2 = {
    name: "Juan",
    age: 23,
};
// Scope de bloque:
if (Math.random() < 0.5) {
}
let animal = {
    name: "Paco",
    barks: true,
    wags: false,
};
let animal2 = {
    name: "Killy",
    purrs: false,
    barks: true,
    wags: true,
};
function trueOrNull(isTrue) {
    if (true)
        return "Is True";
    return null;
}
let value = trueOrNull(true);
function aOrB(a, b) {
    return a || b;
}
/**
 * @type: Arrays[]
 */
let numbers = [1, 2, 3];
const strings = ["a", "b", "c"];
let numbersAndStrings = [1, "a", 2, "b", 3, "c"];
let numbersStrAndBool = [
    1,
    "a",
    true,
    undefined,
];
// numbersAndStrings.push(false) // incorrect, the variable only accept numbers and str
numbersAndStrings.push("d");
const newArray = numbersAndStrings.map((value) => {
    if (typeof value === "number") {
        return value * 10;
    }
    return value.toUpperCase();
});
function completeArray() {
    let array = [];
    array.push(1);
    array.push('str');
    array.push(false);
    return array;
}
let newArray2 = completeArray();
// newArray.push(true) // ya no hay accesso al arreglo
let tuple = ["a", "b"]; // en TS se conoce como tupla
// Rest element en tuplas
let friends = ['Juanito', 'Pablito'];
// ReadOnly arrays 
// let readonlyArray: readonly number[] = [10, 9, 8]
let readonlyArray = [10, 9, 8];
// readonlyArray[0] = 12 // No esta permitido por el readonly
// null, undefined, void, never
// null:
function nullReturn(value) {
    if (value < 10)
        return value;
    return null;
}
// undefined: 
function undefinedReturn() {
    return undefined;
}
// void 
function voidReturn() {
    console.log('hola');
}
function neverReturn() {
    throw new Error('Error');
}
// Enum -> lista de opciones disponibles
var Language;
(function (Language) {
    Language[Language["JavaScript"] = 0] = "JavaScript";
    Language[Language["TypeScript"] = 1] = "TypeScript";
    Language[Language["Python"] = 2] = "Python";
    Language[Language["Golang"] = 3] = "Golang";
    Language[Language["Java"] = 4] = "Java";
})(Language || (Language = {}));
let myFirstLanguage = Language.Java;
console.log(Language.Python);
