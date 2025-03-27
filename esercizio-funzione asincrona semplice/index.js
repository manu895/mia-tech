async function asyncFunction() {

    //  promessa che si risolve dopo 2 secondi

    let promise = new Promise((resolve) => {
        setTimeout(() => resolve("Promessa risolta dopo 2 secondi"), 2000);
    });

    // attendiamo la risoluzione della promessa 
    let result = await promise;

    
    console.log(result);
}

// chiamiamo la funzione asincrona
asyncFunction();
