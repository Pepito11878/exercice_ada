// Nous souhaitons faire la somme du prix de plusieurs articles
// Prix de deux articles
const price1 = 10
const price2 = 20
// Nous calculons le total
let total = price1 + price2
// Prix d'un troisieme article
const price3 = 50
// Nous ajoutons le troisieme prix au total
total = total + price3

console.log("Le prix total avant reduction est de : ", total)

//Nous appliquons 20% de reduction
const tot2 = total * (1 - 20 / 100); //calcul de -20% au total
console.log("Le prix total après reduction est de : ", tot2)