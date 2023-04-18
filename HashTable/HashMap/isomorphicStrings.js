/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be 
replaced to get t.

All occurrences of a character must be replaced with another 
character while preserving the order of characters. 
No two characters may map to the same character, 
but a character may map to itself.
*/

var isIsomorphic = function(s, t) {
    let map = new Map(); // initialize the map
    let set = new Set(); // initialize the set
    for(let i = 0; i < s.length; i++){ // iterate through the first array
        if(map.has(s[i])){ // if the number is in the map
            if(map.get(s[i]) !== t[i]){ // if the number is in the map
                return false; // return false
            }
        } else { // if the number is not in the map
            if(set.has(t[i])){ // if the number is in the set
                return false; // return false
            }
            map.set(s[i], t[i]); // add the number to the map
            set.add(t[i]); // add the number to the set
        }
    }
    return true; // return true
}

console.log(isIsomorphic("egg", "add")); // true

 