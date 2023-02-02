//What is the difference between Call, Apply and Bind

//Call: The call() method invokes a function with a given this value and arguments provided one by one
var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
invite.call(employee2, "Hello", "How are you?");

//Apply: Invokes the function with a given this value and allows you to pass in arguments as an array

var employee3 = { firstName: "naga", lastName: "Rodson" };
var employee4 = { firstName: "brahmi", lastName: "Baily" };

// function invite(greeting1, greeting2) {
//   console.log(
//     greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
//   );
// }

invite.apply(employee3, ["Hello", "How are you?"]); // Hello John Rodson, How are you?
invite.apply(employee4, ["Hello", "How are you?"]);

// bind: returns a new function, allowing you to pass any number of arguments
var employee5 = { firstName: "bind", lastName: "Rodson" };
var employee6 = { firstName: "brahmi", lastName: "Baily" };

var inviteEmployee1 = invite.bind(employee5);
var inviteEmployee2 = invite.bind(employee6);

inviteEmployee1("Hello", "How are you?"); // Hello John Rodson, How are you?
inviteEmployee2("Hello", "How are you?"); // Hello Jimmy Baily, How are you?

// Call and apply are pretty interchangeable. Both execute the current function immediately. You need to decide whether it’s easier to send in an array or a comma separated list of arguments. You can remember by treating Call is for comma (separated list) and Apply is for Array.

// Whereas Bind creates a new function that will have this set to the first parameter passed to bind().