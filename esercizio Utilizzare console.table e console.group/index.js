let persone = [
    { nome: "Mario", età: 30, città: "Roma" },
    { nome: "Sara", età: 28, città: "Milano" },
    { nome: "Luca", età: 25, città: "Napoli" }
  ];
  
  console.table(persone);
  
  console.group("Messaggi di Debug");

  console.log("Questo è un messaggio di log.");

  console.warn("Questo è un avviso.");

  console.error("Questo è un errore.");

  console.groupEnd();// chiude il gruppo
  