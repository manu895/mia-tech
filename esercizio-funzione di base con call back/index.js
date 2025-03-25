function sommaEseguiCallback(a, b, callback) {
    let risultato = a + b;
    console.log("Il risultato della somma è:", risultato);
    
    // callback
    if (callback && typeof callback === "function") {
        callback();
    }
}


function mioCallback() {
    console.log("Il callback è stato eseguito!");
}


sommaEseguiCallback(5, 10, mioCallback);