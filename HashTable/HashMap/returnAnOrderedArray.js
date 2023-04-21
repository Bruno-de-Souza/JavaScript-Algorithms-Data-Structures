let list = [5, 7, 8, 1, 3];

list.sort(function (a, b) {
    return a - b;
})

console.log(list); // [1, 3, 5, 7, 8]