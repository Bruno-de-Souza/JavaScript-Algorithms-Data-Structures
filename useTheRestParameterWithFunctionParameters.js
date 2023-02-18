/* Use the Rest Parameter with Function Parameters */

/*
In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. 
With the rest parameter, you can create functions that take a variable number of arguments.
These arguments are stored in an array that can be accessed later from inside the function.
*/

const sum = (...args) => { // args is the name of the array
  return args.reduce((a, b) => a + b, 0); // a and b are the elements of the array
}
console.log(sum(1, 2, 3)); // 6
