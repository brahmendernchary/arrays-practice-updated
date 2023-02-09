// ##Flatten this array to one single array using reduce Var array = [[0, 1], [2, 3], [4, 5]];

var array =  [[0, 1], [2, 3], [4, 5]];

var flattened = array.reduce(function(a, b) {
    return a.concat(b);
},[ ]);

console.log(flattened); // [ 0, 1, 2, 3, 4, 5 ]



// ##Filter this array to return just the dogs

var animals = [
    { name: "Jason", species:"rabbit"},
    { name: "Jessica", species:"dog"},
    { name: "Jacky", species:"owl"},
    { name: "Luke", species:"fish"},
    { name: "Junior", species:"rat"},
    { name: "Thomas", species:"cat"}
]
Answer

/******************************************
   filter method with callback function
******************************************/

var dogs = animals.filter(function(animals){
    return animals.species === "dog";
});

console.log(dogs);

Returns

[ { name: 'Jessica', species: 'dog' }]

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.