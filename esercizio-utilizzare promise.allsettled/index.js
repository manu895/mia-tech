function firstPromise() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Prima promessa risolta"), 1000); // risolve dopo 1 secondo
    });
}

function secondPromise() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Seconda promessa risolta"), 2000); // risolve dopo 2 secondi
    });
}

function thirdPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => reject("Terza promessa rifiutata"), 1500); // rifiuta dopo 1.5 secondi
    });
}

// utilizzato Promise.allSettled per attendere tutte le promesse

Promise.allSettled([firstPromise(), secondPromise(), thirdPromise()])
    .then((results) => {

        console.log("Risultati delle promesse:", results);
    });
