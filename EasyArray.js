// Challenge: Given an array of numbers, write a function that returns the sum of all the even numbers in the array.

const numbers = [5, 8, 12, 3, 6, 9, 10, 14];

const sum = (arr) => {
    //filter even nums
    const evens = arr.filter((num) => num % 2 === 0);
    return evens.reduce((a,b) => a + b)
    // return sum of new array
}

console.log(sum(numbers));

// Challenge: Given an array of strings, write a function that returns a new array containing only the strings that have a length greater than or equal to a specified length.

const strings = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];

const minStringLength = (arr, limit) => {
    return arr.filter((string) => string.length >= limit)
}

console.log(minStringLength(strings, 6));

// Challenge: Given an array of numbers, write a function that returns a new array containing only the unique numbers (remove duplicates).

const numbers2 = [5, 8, 2, 5, 9, 8, 12, 2, 15, 5];

const deDuplicate = (arr) => {
    const newArr= [];
    arr.forEach(element => {
        if(!newArr.includes(element)){
            newArr.push(element)
        }
    
    });
    return newArr;
}

console.log(deDuplicate(numbers2));

// Solve by using a set

const deDuplicateWithSet = (arr) => {
    const newSet = new Set(arr) ;
    return newSet;
}

console.log(deDuplicateWithSet(numbers2));

// Return set to an array after de-duplication

const setToArray = (set) => {
    let newArr = [...set];
    return newArr;
}

console.log(setToArray(deDuplicateWithSet(numbers2)));