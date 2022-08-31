const Person = require('./Person')
// // Type safety: utiliza tipos para prevenir que el código haga cosas inválidas

// console.log(3+[]);

// let obj = {}

// console.log(obj.propety);

// function operation(number) {
//     return number/2
// }

// console.log(operation("abc"));

function printMessage(message) {
    console.log(message, this);
}

const object = {
    name: 'Edgar',
    country: 'México'
}

printMessage.apply(object, ["Hello with apply"])
printMessage.call(object, 'Hello with call')
let newPrintMessage = printMessage.bind(object)
newPrintMessage('Hello with bind')

const edgar = new Person('Edgar')

edgar.getName()

let getName = edgar.getName.bind(edgar)

setTimeout(getName, 2000)