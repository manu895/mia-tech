function createPromise(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve("Operazione completata con successo!"); // Messaggio di successo
        } else {
            reject(new Error("Operazione fallita!")); // Creiamo un oggetto Error
        }
    });
}


createPromise(true)
    .then((message) => {
        console.log("Successo:", message); 
    })
    .catch((error) => {
        console.error("Errore:", error.message); 
    });

createPromise(false)
    .then((message) => {
        console.log("Successo:", message);
    })
    .catch((error) => {
        console.error("Errore:", error.message); 
    });

