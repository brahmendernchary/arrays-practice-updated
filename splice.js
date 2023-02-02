//in splice method change an arry by removing or replacing exting array

const numbers =[1,2,3,4,5,6];

//we want to deleted last two numbers 4 is starting index,2 is how many deleted
//const deleted = numbers.splice(4,2);

//we want to deleted last two numbers 4 is starting index,2 is how many deleted.if want add to any numbers 
//const deleted = numbers.splice(4,2,7,8);

//we want to deleted last two numbers 4 is starting index,if dont want deleted.if want add to any numbers these numbers add in after index 4 and index 5
const deleted = numbers.splice(4,0,7,8);

console.log(numbers);
console.log(deleted)

// The splice() method is used either adds/removes items to/from an array, and then returns the removed item. The first argument specifies the array position for insertion or deletion whereas the optional second argument indicates the number of elements to be deleted. Each additional argument is added to the array.

let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2); // returns [1, 2]; original array: [3, 4, 5]
let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3]
let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]
console.log(arrayIntegers1);
console.log(arrayIntegers2);
console.log(arrayIntegers3);

//Modifies the original array(mutable)
//Returns the deleted elements as array
//Used to insert or delete elements to/from array