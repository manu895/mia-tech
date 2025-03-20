function mostraMessaggio() {
    console.log("Messaggio stampato ogni secondo!");
  }
  
  let intervallo = setInterval(mostraMessaggio, 1000);
  
  setTimeout(() => {
    clearInterval(intervallo); // Interrompe l'intervallo
    console.log("Intervallo fermato dopo 5 secondi!");
  }, 5000);
  