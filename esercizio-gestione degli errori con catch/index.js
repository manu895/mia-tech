function creaPromessa() {
    return new Promise((resolve, reject) => {
        
        // viene rifiutata con un messaggio di errore
        reject("Errore: qualcosa non ha funzionato!");
    });
}

creaPromessa()
    .catch((errore) => {

        console.error("Gestione dell'errore:", errore); // Gestiamo l'errore e stampiamo il messaggio nella console
    });
