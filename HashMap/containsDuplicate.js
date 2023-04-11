/*
Given an integer array nums, return true if any value 
appears at least twice in the array, 
and return false if every element is distinct.
*/

const containsDuplicate = (nums) => {
    let hashSet = new Set(); // initialize the hashSet
    for(let i = 0; i < nums.length; i++) { // iterate through the array
        if(hashSet.has(nums[i])) { // if the number is in the hashSet
            return true; // return true
        }
        hashSet.add(nums[i]); // add the number to the hashSet
    }
    return false; // return false
}

console.log(containsDuplicate([1,2,3,4])); // false