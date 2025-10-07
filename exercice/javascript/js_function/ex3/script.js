// sendMessage("Je te rends visite la semaine prochaine", "Marc", "Linda"); cette ligne doit apparaitre appres la fonction sendMessage

function sendMessage(message, fromName, toName){
    console.log("From : " + fromName + "to : " + toName + " Message : " + message);
}

sendMessage("Je te rends visite la semaine prochaine", "Marc", "Linda");

sendMessage("Super on se voit mardi !", "Linda", "Marc")
// sendMessage["Super on se voit mardi !", "Linda", "Marc"] cette ligne sert a rien les arguments doivent etre rentré entre les parenthese de sendMessage

let contactName = "Jean"
let myName = "Ada"
let myMessage = "Je t'apprends à coder tes premières fonctions"
sendMessage(myMessage, myName, contactName) //les noms des variables mises dans sendMessage etait pas des variables existantes 
