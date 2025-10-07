function verification(firstName, age){
    if(age < 17){
        console.log(`${firstName} n'a pas l'age de conduire car il ou elle a moins de 17 ans`)
    }else{
        console.log(`${firstName} est autorisé a conduire car il ou elle a au moins 17 ans`)
    }
}

verification("Mathieu", 22)
verification("Léa", 15)
verification("Jean", 17)