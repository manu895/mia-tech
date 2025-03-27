// Funzione che restituisce una promessa che può risolversi o essere rifiutata

function createPromise(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("Operazione completata con successo"); // successo
            } else {
                reject("Operazione fallita"); // fallimento
            }
        }, 2000);
    });
}

// funzione asincrona che gestisce la promessa con try e catch

async function executeOperation(success) {
    try {
        const result = await createPromise(success); // Attende la risoluzione della promessa
        console.log("Successo:", result);
    } catch (error) {
        console.error("Errore:", error); 
    }
}

// chiamata della funzione con esito positivo e negativo

executeOperation(true);  // simula un'operazione riuscita

executeOperation(false); // Simula un'operazione fallita
