/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

var twoSum = function (nums, target) {
    let hashMap = new Map(); // key: number, value: index
    let result = {}; // key: index, value: index
    for (let i = 0; i < nums.length; i++) { // loop through the array
        let complement = target - nums[i]; // complement = target - current number
        if (hashMap.has(complement)) { // if the complement is in the map
            result = [i, hashMap.get(complement)]; // add the current index and the index of the complement to the result
            break; // break the loop
        }
        hashMap.set(nums[i], i); // add the current number and its index to the map
    }
    return result; // return the result
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]