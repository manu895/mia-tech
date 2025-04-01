// Funzione che salva un valore nel localstorage
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
    console.log(`Valore salvato nel localStorage: ${key} = ${value}`);
}

// Funzione che  recupera  un valore dal localstorage
function getFromLocalStorage(key) {
    let value = localStorage.getItem(key);
    if (value) {
        console.log(`Valore recuperato dal localStorage: ${key} = ${value}`);
    } else {
        console.log(`La chiave ${key} non esiste nel localStorage.`);
    }
    return value;
}

// Funzione che  rimuove un valore dal localstorage
function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
    console.log(`Valore rimosso dal localStorage: ${key}`);
}

// Funzione che salva  un valore nel sessionstorage
function saveToSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
    console.log(`Valore salvato nel sessionStorage: ${key} = ${value}`);
}

// funzione che  recupera un valore dal sessionstorage
function getFromSessionStorage(key) {
    let value = sessionStorage.getItem(key);
    if (value) {
        console.log(`Valore recuperato dal sessionStorage: ${key} = ${value}`);
    } else {
        console.log(`La chiave ${key} non esiste nel sessionStorage.`);
    }
    return value;
}

// funzione che rimuove un valore dal sessionstorage
function removeFromSessionStorage(key) {
    sessionStorage.removeItem(key);
    console.log(`Valore rimosso dal sessionStorage: ${key}`);
}


saveToLocalStorage('utenteLocal', 'Manu'); // Salvataggio all'interno del localstorage

getFromLocalStorage('utenteLocal'); // recupero dal localstorage

removeFromLocalStorage('utenteLocal'); // Rimozione  dal localtorage

saveToSessionStorage('utenteSession', 'Anna'); // Salvataggio  nel sessiontorage

getFromSessionStorage('utenteSession'); // Recupero dal sessiontorage

removeFromSessionStorage('utenteSession'); // Rimozione  dal sessionStorage
