// 1
function addThreeNumbers(){
    return 1+2+3;
}

const result = addThreeNumbers();

console.log(`Le resultat de la somme est ${result}`);

// 2
const firstVar = 6
const secondVar = 9
const thirdVar = 12

function addThreeNumbersWithArgs(firstNumber, secondNumber, thirdNumber){
    return firstNumber + secondNumber +thirdNumber;
}

console.log(`Le resultat de la somme est ${addThreeNumbersWithArgs(firstVar, secondVar, thirdVar)}`);

//3
console.log(`Le resultat de la somme est ${addThreeNumbersWithArgs(12, 54, 35)}`);
console.log(`Le resultat de la somme est ${addThreeNumbersWithArgs(4, 9, 45)}`);
console.log(`Le resultat de la somme est ${addThreeNumbersWithArgs(2, 98, 28)}`);

