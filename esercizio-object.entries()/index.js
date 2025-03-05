let student = {

    name: "Manuel",
    age: 33,
    grade: "13th",
    school: "Istituto tecnico"
};


let entries = Object.entries(student);


for (let i = 0; i < entries.length; i++) {
    
    console.log(entries[i][0] + ": " + entries[i][1]);
}