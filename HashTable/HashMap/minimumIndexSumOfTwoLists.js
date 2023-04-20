/*
Given two arrays of strings list1 and list2, 
find the common strings with the least index sum.

A common string is a string that appeared in both list1 and list2.

A common string with the least index sum is a common string 
such that if it appeared at list1[i] and list2[j] 
then i + j should be the minimum value among all the other common strings.

Return all the common strings with the least index sum. 
Return the answer in any order.
*/

var findRestaurant = function(list1, list2) {
    let map = new Map(); // initialize the map
    let result = []; // initialize the result array
    let min = Infinity; // initialize the min to infinity

    for(let i = 0; i < list1.length; i++) { // iterate through the first array
        map.set(list1[i], i); // add the number to the map
    }
    for(let i = 0; i < list2.length; i++) { // iterate through the second array
        if(map.has(list2[i])) { // if the number is in the map
            let sum = map.get(list2[i]) + i; // get the sum of the two indexes
            if(sum < min) { // if the sum is less than the min
                result = [list2[i]]; // set the result to the current number
                min = sum; // set the min to the sum
            } else if(sum === min) { // if the sum is equal to the min
                result.push(list2[i]); // add the number to the result array
            }
        }
    }
    return result; // return the result array
}