function operazioneUno(a, b, callback) {
    let risultato = a + b;
    console.log(`Risultato della prima operazione (somma): ${risultato}`);

    // Chiamata  callback con il risultato della prima operazione
    if (callback && typeof callback === "function") {
        callback(risultato);

    }
}

// Seconda funzione che riceve il risultato della prima e esegue un'altra operazione
function operazioneDue(valore, callback) {
    let nuovoRisultato = valore * 2;

    console.log(`Risultato della seconda operazione (moltiplicazione per 2): ${nuovoRisultato}`);

    // Chiamata  callback con il nuovo risultato
    if (callback && typeof callback === "function") {
        callback(nuovoRisultato);
    }
}

// Funzione finale che mostra il risultato
function mostraRisultato(finale) {
    console.log(`Risultato finale: ${finale}`);
}


operazioneUno(5, 3, function (somma) {
    operazioneDue(somma, mostraRisultato);
});
