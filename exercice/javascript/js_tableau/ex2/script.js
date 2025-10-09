const students = {
    "A001": {
        id: "A001",
        name: "Alice Martin",
        age: 22,
        major: "Computer Science",
        grades: [14, 16, 12, 18, 15],
        absences: 3,
        courses: ["JavaScript", "Algorithms", "Database"]
    },
    "A002": {
        id: "A002",
        name: "Bob Dupont",
        age: 24,
        major: "Mathematics",
        grades: [11, 9, 15, 8, 13],
        absences: 7,
        courses: ["Calculus", "Statistics", "Algebra"]
    },
    "A003": {
        id: "A003",
        name: "Claire Leroy",
        age: 21,
        major: "Computer Science",
        grades: [17, 19, 16, 18, 20],
        absences: 1,
        courses: ["JavaScript", "Web Development", "Data Structures"]
    },
    "A004": {
        id: "A004",
        name: "David Moreau",
        age: 23,
        major: "Physics",
        grades: [12, 14, 11, 10, 13],
        absences: 5,
        courses: ["Mechanics", "Quantum Physics", "Thermodynamics"]
    },
    "A005": {
        id: "A005",
        name: "Emma Bernard",
        age: 22,
        major: "Computer Science",
        grades: [15, 17, 16, 14, 19],
        absences: 2,
        courses: ["JavaScript", "Networks", "Security"]
    }
};

// Calculer la moyenne de chaque etudiant
function studentMoyenne(etudiant){
    for(const id in students){
        const student = students[id];
        const grades = student.grades;
        const name = student.name;
        let moyenne = 0;
        let nb = 0;

        if(name == etudiant){
            for(i = 0; i < grades.length; i++){
                moyenne += grades[i];
                nb++
            }
            console.log(`La moyenne de ${name} est ${moyenne / nb}`)
        }
    }
}

studentMoyenne("Alice Martin")
studentMoyenne("Bob Dupont")
studentMoyenne("Claire Leroy")
studentMoyenne("David Moreau")
studentMoyenne("Emma Bernard")


// Trouver les étudiant·es d'une filière donnée

function searchByMajor(filiere){
    for(const id in students){
        const student = students[id];
        const major = student.major;
        const name = student.name;

        if(major == filiere){
            console.log(`${name} a comme filière ${filiere}`)
        }
    }
}

searchByMajor("Computer Science")
searchByMajor("Mathematics")
searchByMajor("Physics")

// Identifier l'étudiante avec la meilleure moyenne

function findBestStudentMoyenne(){
    for(const id in students){
        const student = students[id];
        const name = student.name;
        let moyenne = 0;
        let nb = 0;
        let total = 0
        
        
    }
}

findBestStudentMoyenne()
