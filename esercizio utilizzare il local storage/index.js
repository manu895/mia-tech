//  salviamo un valore nel localStorage
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
    console.log(`Valore salvato nel localStorage: ${key} = ${value}`);
}

// funzione per recuperare un valore dal localStorage
function getFromLocalStorage(key) {
    let value = localStorage.getItem(key);
    if (value) {
        console.log(`Valore recuperato dal localStorage: ${key} = ${value}`);
    } else {
        console.log(`La chiave ${key} non esiste nel localStorage.`);
    }
    return value;
}

// funzione per rimuovere un valore dal localStorage
function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
    console.log(`Valore rimosso dal localStorage: ${key}`);
}


saveToLocalStorage('nome', 'Manu'); // Salva un valore

getFromLocalStorage('nome'); // Recupera il valore

removeFromLocalStorage('nome'); // Rimuove il valore

getFromLocalStorage('nome'); // Prova a recuperare il valore rimosso
