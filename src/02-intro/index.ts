// Intermission: Type alliases, unions, intersections

/**
 * Type alliases
 * */

type Age = number;

type Persona = {
  name: string;
  age: Age;
};

let person: Persona = {
  name: "Edgar",
  age: 20,
};

let person2: Persona = {
  name: "Juan",
  age: 23,
};

// Scope de bloque:
if (Math.random() < 0.5) {
  type Persona = {
    nombre: string;
    edad: Age;
  };
}

/**
 * Unions and intersection
 * ** -> | &
 * */

type Cat = {
  name: string;
  purrs: boolean;
};

type Dog = {
  name: string;
  barks: boolean;
  wags: boolean;
};

let animal: Cat | Dog = {
  name: "Paco",
  barks: true,
  wags: false,
};

let animal2: Cat & Dog = {
  name: "Killy",
  purrs: false,
  barks: true,
  wags: true,
};

function trueOrNull(isTrue: boolean) {
  if (true) return "Is True";

  return null;
}

type Returns = string | null;

let value: Returns = trueOrNull(true);

function aOrB(a: string, b: number) {
  return a || b;
}

/**
 * @type: Arrays[]
 */

let numbers: number[] = [1, 2, 3];
const strings: string[] = ["a", "b", "c"];
let numbersAndStrings: (number | string)[] = [1, "a", 2, "b", 3, "c"];
let numbersStrAndBool: (number | string | boolean | undefined)[] = [
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
  return value.toUpperCase()
});


function completeArray(): (string | number | boolean )[] {
    let array = []
    array.push(1)
    array.push('str')
    array.push(false)

    return array
}

let newArray2 = completeArray()
// newArray.push(true) // ya no hay accesso al arreglo

let tuple: [string, string, number?] = ["a", "b"] // en TS se conoce como tupla

// Rest element en tuplas

let friends: [string, ...string[]] = ['Juanito', 'Pablito']

// ReadOnly arrays 
// let readonlyArray: readonly number[] = [10, 9, 8]
let readonlyArray: Readonly<number[]> = [10, 9, 8]
// readonlyArray[0] = 12 // No esta permitido por el readonly

// null, undefined, void, never

// null:
function nullReturn(value:number): number | null {
    if (value < 10) return value

    return null
}

// undefined: 
function undefinedReturn(): undefined {
    return undefined
}

// void 

function voidReturn(): void {
    console.log('hola');
}

function neverReturn(): never {
    throw new Error('Error')
}

// Enum -> lista de opciones disponibles
enum Language {
    JavaScript,
    TypeScript,
    Python,
    Golang,
    Java
}

let myFirstLanguage = Language.Java

console.log(Language.Python);
