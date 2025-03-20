function descriviPersona(persona) {
    return `Nome: ${persona.nome}
  Cognome: ${persona.cognome}
  Età: ${persona.età}
  Città: ${persona.città}`;
  }
  
  let personaEsempio = {
    nome: "Manuel",
    cognome: "Bologna",
    età: 33,
    città: "Piazza Armerina"
  };
  
  console.log(descriviPersona(personaEsempio));
  