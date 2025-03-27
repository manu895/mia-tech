// Funzione che esegue una richiesta POST a un'API pubblica
async function sendData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST", // Metodo HTTP POST
            headers: {
                "Content-Type": "application/json", // Specifica il tipo di dati inviati
            },
            body: JSON.stringify({ // Dati inviati nel corpo della richiesta
                title: "Nuovo Post",
                body: "Questo è il contenuto del post",
                userId: 1,
            }),
        });

        if (!response.ok) {
            throw new Error("Errore nella richiesta POST");
        }

        const data = await response.json(); // Conversione della  risposta in formato  JSON
        console.log("Risposta dal server:", data);

    } catch (error) {
        
        console.error("Errore:", error);

    }
}

// Chiamata alla funzione
sendData();
