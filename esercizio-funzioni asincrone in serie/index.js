// Funzione asincrona che restituisce una promessa dopo 2 secondi

function firstAsyncFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Prima funzione completata!");
        }, 2000);
    });
}

// funzione asincrona che restituisce una promessa dopo 3 secondi
function secondAsyncFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Seconda funzione completata!");
        }, 3000);
    });
}

// Funzione asincrona che chiama le due funzioni in serie usando await
async function executeInSeries() {
    console.log("Inizio esecuzione...");

    // vengono attese le due funzioni ( result1 e result2)
    const result1 = await firstAsyncFunction(); 
    console.log(result1);

    const result2 = await secondAsyncFunction();
    console.log(result2);

    console.log("Esecuzione completata!");
}


executeInSeries();
