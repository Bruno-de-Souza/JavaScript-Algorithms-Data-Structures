var interseption = function(array1, array2){ // array1 = [1,2,3,4,5,6,7,8,9,10] array2 = [1,2,3,4,5,6,7,8,9,10]
	let map = new map(); //Initialize the map
	let result = []; //Initialize the result array
		for(let i = 0; i < array1.length; i++) { //iterate through the first array
			map.set(array1[i], 1); //add the number to the map
		}
		for(let i = 0; i < array2.length; i++) { //iterate through the second array
			if(map.has(array2[i])) { //if the number is in the map
				result.push(array2[i]); //add the number to the result array
				map.delete(array2[i]); //delete the number from the map
			}
		}
		return result; //return the result array
}


console.log(intersection([1,], [1,2,3,])); // [1] 