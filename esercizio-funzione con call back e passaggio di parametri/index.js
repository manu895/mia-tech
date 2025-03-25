function operazioneConCallback(a, b, callback) {
    
    let risultato = a * b; //  moltiplicazione

    console.log("Il risultato dell'operazione è:", risultato);


    // chiamata al callback passando il risultato
    if (callback && typeof callback === "function") {
        callback(risultato);
    }
}

// Callback che riceve il risultato e lo mostra nella console
function mostraRisultato(valore) {
    
    console.log("Il callback ha ricevuto:", valore);
}


operazioneConCallback(4, 5, mostraRisultato);
