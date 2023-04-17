/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hashSet = new Set(); // initialize the hashSet
    for(let i = 0; i < nums.length; i++) { // iterate through the array
        if(hashSet.has(nums[i])) { // if the number is in the hashSet
            hashSet.delete(nums[i]); // delete the number from the hashSet
        } else {
            hashSet.add(nums[i]); // add the number to the hashSet
        }
    }
    return hashSet.values().next().value; // return the first value in the hashSet
};

console.log(singleNumber([5, 2, 3])); // 5