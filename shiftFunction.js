/*

Manipulate Arrays With shift()
pop() always removes the last element of an array. What if you want to remove the first?

That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.

*/

// Setup
const myArray = [["John", 23], ["dog", 3]];
console.log(myArray);
// Only change code below this line
const removedFromMyArray = myArray.shift();

console.log(myArray);
console.log(removedFromMyArray);