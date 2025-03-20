let personeJSON = '[{"nome":"Manuel","età":33,"professione":"Sviluppatore"},{"nome":"Sara","età":28,"professione":"Designer"}]';

let persone = JSON.parse(personeJSON);


persone.push({
  nome: "Luca",
  età: 25,
  professione: "Ingegnere"
});


let personeAggiornateJSON = JSON.stringify(persone);


console.log(personeAggiornateJSON);

