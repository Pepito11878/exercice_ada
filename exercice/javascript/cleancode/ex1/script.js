function sumArray(numbersArray) {
	let numbers = 0;
	for (let i = 0; i < numbersArray.length; i++) {
		numbers += numbersArray[i];
	}
	return numbers;
}

console.log(sumArray([1, 2, 3, 4])); // Devrait retourner 10
console.log(sumArray([1, 2])); // Devrait retourner 3
console.log(sumArray([0])); // Devrait retourner 0
console.log(sumArray([1, 0])) // Devrait retourner 1