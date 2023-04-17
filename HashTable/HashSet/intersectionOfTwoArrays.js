/*
Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must be unique and you may return the result in any order.
*/

var intersection = function(nums1, nums2) { 
    let map = new Map(); // initialize the map
    let result = []; // initialize the result array
    for(let i = 0; i < nums1.length; i++){ // iterate through the first array
        map.set(nums1[i], 1); // add the number to the map
    }
    for(let i = 0; i < nums2.length; i++){      // iterate through the second array
        if(map.has(nums2[i])){ // if the number is in the map
            result.push(nums2[i]); // add the number to the result array
            map.delete(nums2[i]); // delete the number from the map
        }
    }
    return result; // return the result array
};


console.log(intersection([1,2,2,1,1], [2,2,1])); // [2,1]