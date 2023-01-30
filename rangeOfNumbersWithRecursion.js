function rangeOfNumbers(startNum, endNum) { 
  // startNum and endNum are integers
  if (endNum - startNum === 0) {
    // base case
    return [startNum]; // return array with startNum
  } else {
    // recursive case
    const numbers = rangeOfNumbers(startNum, endNum - 1); // call rangeOfNumbers with startNum and endNum - 1
    numbers.push(endNum); // add endNum to the end of the array
    return numbers; // return the array with endNum added
  }
}

console.log(rangeOfNumbers(1, 5)); // [1, 2, 3, 4, 5]
