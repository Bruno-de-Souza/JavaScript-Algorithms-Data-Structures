/*
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.
*/

var isHappy = function (n) {
    let hashSet = new Set(); // initialize the hashSet
    while (n !== 1) { // while n is not equal to 1
        let sum = 0; // initialize the sum
        while (n > 0) { // while n is greater than 0
            let digit = n % 10; // get the last digit
            sum += digit * digit; // add the digit to the sum
            n = Math.floor(n / 10); // get the next digit
        }
        if (hashSet.has(sum)) { // if the sum is in the hashSet
            return false; // return false
        }
        hashSet.add(sum); // add the sum to the hashSet
        n = sum; // set n equal to the sum
    }
    return true; // return true
}

console.log(isHappy(3)); // false
