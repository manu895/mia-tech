let students = [
    { name: "Manuel", grade: 77 },
    { name: "Carlo", grade: 61 },
    { name: "Giovanni", grade: 75 },
    { name: "Giacomo", grade: 87 },
    { name: "Aldo", grade: 35 }
];


let passedStudents = students.filter(student => student.grade >= 60);

let failedStudent = students.find(student => student.grade < 60);

console.log("Studenti promossi:", passedStudents);

console.log("Primo studente bocciato:", failedStudent);
