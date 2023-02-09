// ##Write a function to check if milk exists in your array var items = ['milk', 'bread', 'sugar'];

var items = ['milk', 'bread', 'sugar'];

function checkForProduct(item){
   
    if (items.indexOf(item) === -1) {
   
    console.log('item does not exist');
} else {

    console.log('item is in your list');

}
}

checkForProduct('socks'); //item does not exist
checkForProduct('milk'); //item is in your list

// ##Now you've found milk exists add some code to find the index of milk and remove that item.

var items = ['milk', 'bread', 'sugar'];

//find index of item if it exists
var a = items.indexOf('milk');
console.log(a); // 0

//remove that index from array 
items.splice(0,1);
console.log(items); // [ 'bread', 'sugar']