// Funzione per salvare un valore nel sessionStorage
function saveToSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
    console.log(`Valore salvato nel sessionStorage: ${key} = ${value}`);
}

// recupero un valore dal sessionStorage
function getFromSessionStorage(key) {
    let value = sessionStorage.getItem(key);
    if (value) {
        console.log(`Valore recuperato dal sessionStorage: ${key} = ${value}`);
    } else {
        console.log(`La chiave ${key} non esiste nel sessionStorage.`);
    }
    return value;
}

// rimozione di un valore dal sessionStorage
function removeFromSessionStorage(key) {
    sessionStorage.removeItem(key);
    console.log(`Valore rimosso dal sessionStorage: ${key}`);
}


saveToSessionStorage('utente', 'Manu'); // salva un valore

getFromSessionStorage('utente'); // recupera il valore

removeFromSessionStorage('utente'); // rimuove il valore

getFromSessionStorage('utente'); // prova a recuperare il valore rimosso
