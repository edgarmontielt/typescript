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


console.log(operation(2));

