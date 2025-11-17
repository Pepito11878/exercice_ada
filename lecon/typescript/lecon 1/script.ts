interface Student {
  name: string;
  favoriteSpell: string;
  magicLevel: string;
}

const students: Student[] = [
  {
    name: "Harry",
    favoriteSpell: "expeliamus",
    magicLevel: "5",
  },
  {
    name: "Herminoe",
    favoriteSpell: "levisoa",
    magicLevel: "5",
  },
  {
    name: "Ron",
    favoriteSpell: "reducto",
    magicLevel: "2",
  },
  {
    name: "Luna",
    favoriteSpell: "incendio",
    magicLevel: "3",
  },
];

function pickRandomStudent(excludeStudent?: Student): Student {
  let studentPicked: Student;
  do {
    studentPicked = students[Math.floor(Math.random() * students.length)];
  } while (excludeStudent == studentPicked);
  return studentPicked;
}

const firstStudent: Student = pickRandomStudent();
const secondStudent: Student = pickRandomStudent(firstStudent);

if (firstStudent.magicLevel > secondStudent.magicLevel) {
  console.log(`${firstStudent.name} a gagné contre ${secondStudent.name}`);
} else {
  console.log(`${secondStudent.name} a gagné contre ${firstStudent.name}`);
}
