const persona = {
    nome: "Manuel",
    cognome: "Bologna",
    eta: 33
};

const { nome: firstName, cognome: lastName, eta: age } = persona;

console.log("First Name:", firstName);

console.log("Last Name:", lastName);

console.log("Age:", age);