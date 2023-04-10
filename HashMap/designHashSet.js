var MyHashSet = function() {
    this.hashSet = []; // initialize the hashSet
};

MyHashSet.prototype.add = function(key) {
    if(!this.contains(key)) { // if the key is not in the hashSet
        this.hashSet.push(key); // add the key to the hashSet
    }  
};

MyHashSet.prototype.remove = function(key) {
    if(this.contains(key)) { // if the key is in the hashSet
        this.hashSet.splice(this.hashSet.indexOf(key), 1); // remove the key from the hashSet
    }
};

MyHashSet.prototype.contains = function(key) {
    return this.hashSet.includes(key); // return true if the key is in the hashSet
};

// Time Complexity: O(n) for add, O(n) for remove, O(n) for contains