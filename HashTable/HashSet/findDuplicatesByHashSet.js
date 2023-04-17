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

console.log(findDuplicatesByHashSet([1,2,3,4,5,5,6,7,8,9,10])); // true