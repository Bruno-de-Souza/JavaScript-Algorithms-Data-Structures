/*
Given a string, find the first non-repeating character in it and return it's index. 
If it doesn't exist, return -1.
*/

var findDuplicatesByHashMap = function (s) {
    let map = new Map(); // initialize the map
    for (let i = 0; i < s.length; i++) { // iterate through the string
        if (map.has(s[i])) { // if the character is in the map
        map.set(s[i], map.get(s[i]) + 1); // increment the value
        } else { // if the character is not in the map
        map.set(s[i], 1); // add the character to the map
        }
    }
    for (let i = 0; i < s.length; i++) { // iterate through the string
        if (map.get(s[i]) === 1) { // if the value is 1
        return i; // return the index
        }
    }
    return -1; // return -1
}

console.log(findDuplicatesByHashMap("leetcode")); // 0