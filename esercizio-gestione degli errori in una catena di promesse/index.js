function randomPromise() {
    return new Promise((resolve, reject) => {
        const randomValue = Math.random(); // genera un numero casuale tra 0 e 1
        if (randomValue > 0.5) {
            resolve("Operazione riuscita!"); // Successo se il valore è maggiore di 0.5
        } else {
            reject(new Error("Operazione fallita!")); // Errore se il valore è 0.5 o inferiore
        }
    });
}


randomPromise()
    .then((message) => {

        console.log("Successo:", message);

        return "Passo successivo completato!";
    })
    .then((nextMessage) => {
        console.log(nextMessage);

        return "Ultimo passo completato!";
    })
    .then((finalMessage) => {

        console.log(finalMessage);
    })
    .catch((error) => {

        console.error("Errore:", error.message); 
    });
