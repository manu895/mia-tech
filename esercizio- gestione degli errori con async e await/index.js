// Funzione asincrona che esegue una richiesta GET e gestisce gli errori
async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1"); // viene eseguita la richiesta a GET

        if (!response.ok) { 
            throw new Error("Errore nella richiesta GET"); // se la risposta non va bene viene generato un errore
        }

        const data = await response.json(); // Conversione della risposta in formato JSON
        console.log("Dati ricevuti:", data);

    } catch (error) {

        console.error("Errore:", error); // gestisce eventuali errori presenti
    }
}

// Chiamata alla funzione
fetchData();
