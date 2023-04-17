/* 
The hash map is one of the implementations of a map which is used to store (key, value) pairs.
*/

// initialize the hash map
let hashMap = new Map();

// add key-value pairs to the hash map
hashMap.set("key1", "value1");

// get the value of a key
hashMap.get("key1");

// check if the hash map contains a key
hashMap.has("key1");

// delete a key-value pair from the hash map
hashMap.delete("key1");

// get the size of the hash map
hashMap.size;

// clear the hash map
hashMap.clear();

// iterate over the hash map
hashMap.forEach((value, key) => {
  console.log(key, value);
});

// Path: HashTable\HashMap\hashMap.js

console.log("hashMap.js"); // hashMap.js