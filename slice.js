const number =[0,1,2,3,4,5,6];
//in slice method the original array will not be change

//numbers b/w index 1 and index 4
const num2 = number.slice(1,4);
//last 3 numbers 
const num3 = number.slice(-3);
//numbers from index 1
const num4 = number.slice(1);

console.log(num4)

// The slice() method returns the selected elements in an array as a new array object. It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element. If you omit the second argument then it selects till the end.

let arrayIntegers = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]

console.log(arrayIntegers1)
console.log(arrayIntegers2)

// Doesn't modify the original array(immutable)
// Returns the subset of original array
// Used to pick the elements from array