/* 
Given an array of integers, find if the array contains any duplicates. 
*/

const findDuplicatesByHashSet = (nums) => {
    let hashSet = new Set(); // initialize the hashSet
    for(let i = 0; i < nums.length; i++) { // iterate through the array
        if(hashSet.has(nums[i])) { // if the number is in the hashSet
            return true; // return true
        }
        hashSet.add(nums[i]); // add the number to the hashSet
    }
    return false; // return false
}

/*********************/

MyHashSet.prototype.contains = function(nums) {
    return this.hashSet.includes(nums); // return true if the number is in the hashSet
    this.hashSet.add(nums); // add the number to the hashSet
}