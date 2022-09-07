"use strict";
// Concrete types: 
// boolean
// string
// Date[]
const filter = (array, func) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (func(item)) {
            result.push(item);
        }
    }
    return result;
};
filter([1, 2, 3, 4, 5], (item) => item < 4);
filter(['a', 'b', 'c'], (item) => item !== 'c');
/* type M = {
  <T>(array: T[], func: (item: T) => void): []
} */
const map = (array, func) => {
    let result = [];
    for (let item of array) {
        const value = func(item);
        result.push(value);
    }
    return result;
};
const newArr = map([1, 2, 3, 4, 5], (item) => item.toString());
console.log(newArr);
const newArr2 = map(['1', '2', '3', '4', '5'], (item) => Number(item));
console.log(newArr2);
