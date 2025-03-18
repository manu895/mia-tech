const persona = {
    nome: "Manuel",
    eta: 33
};

const { nome, eta, città = "Piazza Armerina" } = persona;

console.log("Nome:", nome);

console.log("Età:", eta);

console.log("Città:", città);
