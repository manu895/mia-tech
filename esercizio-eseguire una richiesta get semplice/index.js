// funzione che esegue una richiesta GET a un'API pubblica
async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1"); // API di esempio
        if (!response.ok) {
            throw new Error("Errore nella richiesta");
        }
        const data = await response.json(); // Conversione della  risposta in formato JSON
        console.log("Dati ricevuti:", data);

    } catch (error) {
        console.error("Errore:", error);

    }
}

// Chiamata alla funzione
fetchData();
