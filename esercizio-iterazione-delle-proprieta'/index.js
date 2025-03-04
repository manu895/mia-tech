let person = {
    name: "Manuel",
    age: 33,
    city: "Enna",

};


person.age = 45;

person.job = "sviluppatore junior";


for (let key in person) {
    console.log(key + ": " + person[key]); 
}