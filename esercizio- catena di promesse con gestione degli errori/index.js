function creaPromessa() {
    return new Promise((resolve, reject) => {
        const valoreCasuale = Math.random();

        
        if (valoreCasuale > 0.5) {
            resolve("Promessa risolta con successo!"); // Messaggio di successo
        } else {
            reject("Si è verificato un errore."); // Messaggio di errore
        }
    });
}

creaPromessa()
    .then((risultato) => {
        console.log("Risultato della promessa:", risultato);

        return risultato + " Continuo la manipolazione!"; // Aggiungiamo una stringa al risultato
    })
    .then((risultatoManipolato) => {
        console.log("Risultato manipolato:", risultatoManipolato);
        // Mostriamo il risultato dopo averlo manipolato
    })
    .catch((errore) => {
        console.error("Errore:", errore);
        // Gestiamo l'errore se la promessa è rifiutata
    });

