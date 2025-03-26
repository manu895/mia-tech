function firstPromise() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Prima promessa!"), 2000); // dopo 2 secondi
    });
}

function secondPromise() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Seconda promessa!"), 3000); //  dopo 3 secondi
    });
}

// Utilizzato  Promise.race per ottenere il risultato della prima promessa viene risolta

Promise.race([firstPromise(), secondPromise()])

    .then((result) => {

        console.log("La prima promessa completata è:", result);
    })
    .catch((error) => {

        console.error("Errore:", error);
    });
