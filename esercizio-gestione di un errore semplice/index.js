function dividi(a, b) {
    try {
      if (b === 0) {
        throw new Error("Errore: divisione per zero non consentita!");
      }
  
      let risultato = a / b;
      console.log(`Risultato: ${risultato}`);
    } catch (errore) {
      
      console.error(errore.message);
    }
  }
  
  
  dividi(10, 2);

  dividi(8, 0);  // Output: errore
  