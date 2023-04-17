/*
Given an array of integers, return indices of the two numbers 
such that they add up to a specific target.
*/

/*
Template for using hash map to find duplicates.
Replace ReturnType with the actual type of your return value.
*/

var ReturnType = function() {
  let hashMap = new Map(); // initialize the hash map
    let result = new ReturnType(); // initialize the return value
    for (let i = 0; i < nums.length; i++) { // iterate over the array
        if (hashMap.has(nums[i])) { // check if the hash map contains the current number
            result = new ReturnType(nums[i], hashMap.get(nums[i])); // update the return value  
            break; // break the loop
        } else {
            hashMap.set(target - nums[i], nums[i]); // add the current number to the hash map
        }
    }
    return result; // return the return value
}

console.log("returnType.js"); // returnType.js