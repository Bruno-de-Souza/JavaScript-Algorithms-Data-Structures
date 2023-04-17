/*

The hash set is one of the implementations of a set which is a data structure to store no repeated values. 

*/

// Create a hash set

var set = new HashSet();

// Add values to the set

set.add(1);

// Remove a value from the set

set.remove(1);

// Check if the set contains a value

set.contains(1); // true

// Get the size of the set

set.size(); // 1

// Clear the set

set.clear();

// Iterate through the set

set.forEach(function(value) {
    for(var i = 0; i < value; i++) {
        console.log(value);
    }
};

// Check if the set is empty

set.isEmpty(); // true


