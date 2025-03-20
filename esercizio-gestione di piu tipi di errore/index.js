function manipolaStringa(testo) {
    try {
      
      if (typeof testo !== "string") {
        throw new TypeError("Errore di tipo: il valore deve essere una stringa!");
      }
  
      
      if (testo.length === 0) {
        throw new Error("Errore generico: la stringa non può essere vuota!");
      }
  
      
      let risultato = testo.toUpperCase();
      console.log(`Stringa modificata: ${risultato}`);
    } catch (errore) {

        if (errore instanceof TypeError) {
        console.error("❌ " + errore.message);

      } else {
        console.warn("⚠️ " + errore.message);
      }
    }
  }
  
  
  manipolaStringa("ciao");

  manipolaStringa(123);
  
  manipolaStringa(""); 
  