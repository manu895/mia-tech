function firstPromise() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Prima promessa completata!"), 2000); // dopo 2 secondi
    });
}

function secondPromise() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Seconda promessa completata!"), 3000); //  dopo 3 secondi
    });
}

// Utilizzato il  Promise.all per eseguire in parallalo

Promise.all([firstPromise(), secondPromise()])
    .then((results) => {

        console.log("Tutte le promesse sono state risolte:");

        console.log(results); // stampa a video i risultati di tutte le promesse
    })
    .catch((error) => {
        console.error("Errore in una delle promesse:", error);
    });
