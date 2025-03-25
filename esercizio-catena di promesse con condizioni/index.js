function creaPromessa() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(5), 1000);
    });
}

creaPromessa()
    .then((numero) => {
        if (numero % 2 === 0) {
            return numero * 2;  // Se il numero è pari, lo moltiplichiamo per 2
        } else {
            return numero + 1;  // Se il numero è dispari invece  aggiungiamo 1
        }
    })
    .then((numeroManipolato) => {
        console.log("Risultato finale:", numeroManipolato);
    })
    .catch(console.error);
