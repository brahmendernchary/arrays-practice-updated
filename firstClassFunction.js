// In Javascript, functions are first class objects. First-class functions means when functions in that language are treated like any other variable.

// For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable. For example, in the below example, handler functions assigned to a listener

const handler = () => console.log("This is a click handler function");
document.addEventListener("click", handler);

// What is a first order function
// First-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value.

const firstOrder = () => console.log("I am a first order function!");

// What is a higher order function
// Higher-order function is a function that accepts another function as an argument or returns a function as a return value or both.


const firstOrderFunc = () =>
  console.log("Hello, I am a First order function");
const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
higherOrder(firstOrderFunc);

// What is a unary function
// Unary function (i.e. monadic) is a function that accepts exactly one argument. It stands for a single argument accepted by a function

const unaryFunction = (a) => console.log(a + 10); // Add 10 to the given argument and display the value