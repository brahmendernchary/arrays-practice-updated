// ##Write some code to put these numbers in order var numbers = [1, 12, 2 ,23,77,7,33,5,99,234,];
var numbers2 = [1, 12, 2 ,23,77,7,33,5,99,234];
var numbers3 = numbers2.sort((a, b) => {
   return a - b;
});

console.log(numbers3); // [ 1, 2, 5, 7, 12, 23, 33, 77, 99, 234 ]