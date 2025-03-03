
let score = prompt("Inserisci il tuo punteggio:");


score = parseInt(score);


if (score >= 90 && score <= 100) {
    document.getElementById("risultato").innerText = "Voto ottimo";
} else if (score >= 70 && score <= 89) {
    document.getElementById("risultato").innerText = "Voto buono";
} else if (score >= 60 && score <= 69) {
    document.getElementById("risultato").innerText = "Voto sufficiente";
} else if (score >= 0 && score <= 59) {
    document.getElementById("risultato").innerText = "Voto insufficiente";
} else {
    document.getElementById("risultato").innerText = "Inserisci un numero valido tra 0 e 100.";
}