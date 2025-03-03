let word;

do {
    word = prompt("Inserisci una parola di almeno 5 caratteri:");
} while (word.length < 5);

document.body.innerHTML += "<p>La parola inserita è: " + word + "</p>";