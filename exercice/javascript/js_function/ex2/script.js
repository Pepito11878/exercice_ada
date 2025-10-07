//1
// function carre(number){
//     const resultCarre = number*number
//     return resultCarre;
// }

function carre(number){
    number = prompt("Choisissez un nombre");
    const result = number*number;
    return result;
}

//2
// const varCarre = carre(4)

// function multiplication(){
//     const resultMultiplication = varCarre * 10;
//     return resultMultiplication;
// }

const varCarre = carre();


function multiplication(){
    console.log(varCarre)
    const resultMultiplication = varCarre * 10;
    return resultMultiplication;
}

console.log(multiplication())

// console.log(multiplication())