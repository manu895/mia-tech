function creaPromessa() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(5), 1000); // Restituisce il numero 5 dopo 1 secondo
    });
}

creaPromessa()
    .then((numero) => {
        console.log("Numero iniziale:", numero);
        return numero * 2; // Moltiplica il numero per 2
    })
    .then((numeroDopoMoltiplicazione) => {
        console.log("Numero dopo moltiplicazione per 2:", numeroDopoMoltiplicazione);
        return numeroDopoMoltiplicazione + 3; // Aggiunge 3 al numero
    })
    .then((risultatoFinale) => {
        console.log("Risultato finale:", risultatoFinale); // Stampa il risultato finale
    })
    .catch(console.error); // Gestisce eventuali errori
