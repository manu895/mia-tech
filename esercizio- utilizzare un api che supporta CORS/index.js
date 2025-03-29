async function fetchData() {
    try {
        // Eseguiamo una richiesta GET a un'API che supporta CORS 
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        // Verifica se la risposta è corretta
        if (!response.ok) {
            throw new Error('Errore nella richiesta: ' + response.status);
        }

        // Parsing della risposta in formato JSON
        const data = await response.json();
        
        
        console.log('Dati ricevuti:', data);
    } catch (error) {
        
        console.error('Errore:', error);
    }
}

// Chiamata alla funzione
fetchData();
