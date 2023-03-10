/*

Manipulate Arrays With unshift()
Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning of an array i.e. add elements in front of the array.

.unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.

*/

// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
console.log(myArray);
// Only change code below this line
myArray.unshift(["Paul", 35]);
console.log(myArray);