async function testCORS() {
    try {
        // Tentiamo di fare una richiesta GET ad una API che non supporta CORS
        const response = await fetch('https://api.some-website-that-does-not-allow-cors.com/data');
        const data = await response.json();
        console.log("Dati ricevuti:", data);
    } catch (error) {
        // Gestione dell'errore CORS
        console.error("Errore CORS:", error);
    }
}

testCORS();

