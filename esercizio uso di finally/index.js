function dividiNumeri(a, b) {
    try {
      
      if (b === 0) {
        throw new Error("Errore: divisione per zero non consentita!");
      }
  
      
      let risultato = a / b;
      console.log(`Risultato: ${risultato}`);
    } catch (errore) {
      
      console.error("❌ " + errore.message);
    } finally {
      
      console.log("✅ Operazione completata.");
    }
  }
  

  dividiNumeri(10, 2); 
  
  dividiNumeri(8, 0);
  