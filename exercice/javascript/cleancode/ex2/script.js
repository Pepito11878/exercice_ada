function statutAbonnement(estAbonne) {
  if (estAbonne) {
    return "Abonné";
  } else {
    return "Non abonné";
  }
}

const categorieAge = (age) => {
  if (age < 18) return "Jeune";
  if (age < 60) return "Adulte";
  return "Senior";
};

const genererRapportUtilisateur = (nom, age, ville, profession, estAbonne) => {
  return `Rapport utilisateur :
Nom : ${nom}
Age : ${age} ans
Ville : ${ville}
Profession : ${profession}
Statut : ${statutAbonnement(estAbonne)}
Catégorie : ${categorieAge(age)}
`;
};

console.log(
  genererRapportUtilisateur("Alice", 25, "Paris", "Développeuse", true)
);
