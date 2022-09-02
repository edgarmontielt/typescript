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

