let score = parseInt(prompt("Inserisci il tuo punteggio (0-100):"));


let voto;

switch (true) {
    case (score >= 90 && score <= 100):
        voto = "Voto ottimo";
        break;
    case (score >= 70 && score < 90):
        voto = "Voto buono";
        break;
    case (score >= 60 && score < 70):
        voto = "Voto sufficiente";
        break;
    case (score >= 0 && score < 60):
        voto = "Voto insufficiente";
        break;
    default:
        voto = "Errore: inserisci un numero tra 0 e 100.";
}


document.getElementById("risultato").innerText = voto;