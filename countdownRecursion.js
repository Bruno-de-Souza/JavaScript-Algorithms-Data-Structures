function countdown(n) {
  if (n < 1) {
    // base case
    return []; // return empty array
  } else {
    // recursive case
    const arr = countdown(n - 1); // call countdown with n - 1
    arr.unshift(n); // add n to the front of the array
    return arr; // return the array with n added
  }
}
