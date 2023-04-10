/* Function to check if the array contains a given value */

var arrayLetras = []; // arrayLetras = ["a", "b", "c"]

function containsLetras(letra) { // letra = "a"
    return arrayLetras.includes(letra); // arrayLetras = ["a", "b", "c"]
}

containsLetras("a"); // true
containsLetras("2"); // false
containsLetras("Q"); // false