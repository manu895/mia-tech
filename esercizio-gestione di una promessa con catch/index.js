function creaPromessa(valore) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (valore > 0) {
                resolve("Promessa completata con successo!");
            } else {
                reject("Errore: Il valore deve essere maggiore di zero.");
            }
        }, 2000);
    });
}

creaPromessa(-1)

    .then(console.log) // Stampa se la promessa è risolta
    
    .catch(console.error); // Gestisce l'errore se la promessa è rifiutata
