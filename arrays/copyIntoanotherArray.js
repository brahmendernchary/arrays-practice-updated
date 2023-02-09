// ##Take this array var array = [1,2,3,4,5] and copy it using
// Method 1 - The slice method

var array = [1,2,3,4,5,6];

var result = array.slice();  // to copy an array to new array

console.log(array);  // [1,2,3,4,5,6]
console.log(result); // [1,2,3,4,5,6]

// Method 2 - The for loop method

var array = [1, 2, 3, 4, 5, 6];
var array2 = [ ];

for (var i = 0; i < array.length; ++i) {

  array2[i] = array[i];
}

console.log (array2); // [ 1, 2, 3, 4, 5, 6 ]