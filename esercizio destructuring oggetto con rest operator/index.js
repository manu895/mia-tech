let persona = {
    nome: "Manuel",
    età: 33,
    professione: "Sviluppatore",
    città: "Piazza Armerina",
    paese: "Italia"
  };
  
  let { nome, età, ...resto } = persona;
  
  console.log(nome);

  console.log(età);
  
  console.log(resto);
  