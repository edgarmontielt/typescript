// Concrete types: 
// boolean
// string
// Date[]

type Filter = {
    (array: (string | number)[], func: (item: string | number) => boolean): (string | number)[]
}

const filter: Filter = (array, func) => {
    let result: (number | string)[] = []

    for (let i = 0; i < array.length; i++) {
        let item: number | string = array[i];

        if (func(item)) {
            result.push(item)
        }
    }
    return result
}

filter([1, 2, 3, 4, 5], (item: number | string): boolean => item < 4)
filter(['a', 'b', 'c'], (item: number | string): boolean => item !== 'c')



type M = {
    (array: (string | number)[], func: (item: string | number) => string | number): (string | number)[]
}

/* type M = {
  <T>(array: T[], func: (item: T) => void): []
} */

const map: M = (array, func) => {
    let result = []

    for (let item of array) {
        const value: string | number = func(item)
        result.push(value)
    }

    return result
}

const newArr = map([1, 2, 3, 4, 5], (item) => item.toString())
console.log(newArr)

const newArr2: (string | number)[] = map(['1', '2', '3', '4', '5'], (item) => Number(item))
console.log(newArr2)

let promise = new Promise<number>((resolve, reject) => {
    resolve(500)
})

promise
.then((res) => {
    const operation = res * 5
})