// ##What are the results of these splice and slice methods

var a = ['zero', 'one', 'two', 'three'];
var names = ['jason', 'john', 'peter', 'karen'];

var sliced = a.slice(1, 3);
var spliced = names.splice(1,3);


// The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.

console.log(sliced); // creates a new array ['one', 'two'] 
console.log(a); // main array remains untouched 

// The splice() method changes the content of an array by removing existing elements and/or adding new elements.

console.log(spliced); // it returns  [ 'john', 'peter', 'karen' ] 
console.log(names); // however the array only contains jason now
