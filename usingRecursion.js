// Description: Using loop

function sumUsingLoop(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumUsingLoop([2, 3, 4], 3));
console.log(sumUsingLoop([2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Description: Using Recursion

function sum(arr, n) {
  if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  }

console.log(sum([2, 3, 4], 3));
console.log(sum([2, 3, 4, 5, 6, 7, 8, 9, 10], 9));
