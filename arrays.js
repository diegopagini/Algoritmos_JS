// Property .length

const numbers = [1, 2, 3, 4];

numbers.length // 4



// Index
// Accessing an array element
const myArray = [100, 200, 300];

console.log(myArray[0]); // 100
console.log(myArray[1]); // 200
console.log(myArray[2]); // 300


// Method .push()
// Adding a single element:
const cart = ['apple', 'orange'];
cart.push('pear'); 

// Adding multiple elements:
const numbers = [1, 2];
numbers.push(3, 4, 5);


// Method .pop()
const ingredients = ['eggs', 'flour', 'chocolate'];

const poppedIngredient = ingredients.pop(); // 'chocolate'
console.log(ingredients); // ['eggs', 'flour']



// Mutable
const names = ['Alice', 'Bob'];

names.push('Carl');
// ['Alice', 'Bob', 'Carl']



// Arrays

// An array containing numbers
const numberArray = [0, 1, 2, 3];

// An array containing different data types
const mixedArray = [1, 'chicken', false];