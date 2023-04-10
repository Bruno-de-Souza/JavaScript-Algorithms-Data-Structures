var MyHashMap = function() {
    this.map = {}; // create a map object
};

MyHashMap.prototype.put = function(key, value) { // add a key and value to the map
    this.map[key] = value; // add the key and value to the map object
};

MyHashMap.prototype.get = function(key) {
    return this.map[key] || -1; // return the value of the key or -1 if the key is not in the map
};

MyHashMap.prototype.remove = function(key) {
    delete this.map[key]; // remove the key from the map
};

// Time Complexity: O(1) for all methods