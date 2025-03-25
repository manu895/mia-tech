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

creaPromessa(5)

    .then(console.log) // Stampa se la promessa è risolta

    .catch(console.error) // Stampa l'errore se la promessa è rifiutata
    
    .finally(() => {
        console.log("Operazione completata, indipendentemente dal risultato.");
    });
