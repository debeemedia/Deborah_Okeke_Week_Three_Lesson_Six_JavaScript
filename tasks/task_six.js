// Identifying and fixing errors

// TASK (I)
// Given the following code snippet, identify and fix the syntax error:

// if (x === 5 {
//   console.log("x is equal to 5");
// }

// CORRECTION: missing closing parentheses
// if (x === 5) {
//   console.log('x is equal to 5')
// }

// TASK (II)
// Given the following code snippet, identify and fix the syntax error:

// const message = "Hello, world"
// console.log(message)

// CORRECTION: missing semicolon; although the LINT will say otherwise
// const message = 'Hello, world';
// console.log(message);

// TASK (III)
// Task: Incorrect closing brace placement
// Given the following code snippet, identify and fix the syntax error:
// function sayHello() {
//   console.log("Hello!");
// }
// console.log("Goodbye!");

// CORRECTION: incorrect closing brace placement; closing curly brace should come after console.log('Goodbye!')
// function sayHello() {
//   console.log('Hello!');
//   console.log('Goodbye!');
// }

// TASK (IV)
// Task: Mismatched opening and closing brackets
// Given the following code snippet, identify and fix the syntax error:

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers[2];

// CORRECTION: closing parentheses for console.log
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers[2]);

// TASK (V)
// Task: Incorrect function definition
// Given the following code snippet, identify and fix the syntax error:

// const addNumbers = function(x, y)
//   return x + y;
// };
// console.log(addNumbers(5, 10));

// CORRECTION: opening curly brace in the function declaration
// const addNumbers = function(x, y) {
//   return x + y;
// };
// console.log(addNumbers(5, 10));
