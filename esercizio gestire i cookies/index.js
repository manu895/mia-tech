// Funzione per creare un cookie
function setCookie(nome, valore, giorni) {
    let scadenza = "";
    if (giorni) {
        let data = new Date();
        data.setTime(data.getTime() + (giorni * 24 * 60 * 60 * 1000));
        scadenza = "; expires=" + data.toUTCString();
    }
    document.cookie = nome + "=" + valore + scadenza + "; path=/";
    console.log("Cookie creato: " + nome + "=" + valore);
}

// funzione per leggere il cookie
function getCookie(nome) {
    let nomeCercato = nome + "=";
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nomeCercato) === 0) {
            console.log("Cookie trovato: " + cookie.substring(nomeCercato.length));
            return cookie.substring(nomeCercato.length);
        }
    }
    console.log("Cookie non trovato");
    return "";
}

// Funzione per eliminare un cookie
function deleteCookie(nome) {
    document.cookie = nome + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    console.log("Cookie eliminato: " + nome);
}


setCookie("utente", "Manu", 7); // Crea un cookie

getCookie("utente"); // Legge il cookie

deleteCookie("utente"); // Cancella il cookie

getCookie("utente"); // Prova a leggere il cookie cancellato
