class Automobile {
    constructor(marca, modello, anno) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = 0;
        this.contatoreChiamate = 0; // Contatore
    }

    // Metodo per incrementare il contatore
    incrementaContatore() {
        this.contatoreChiamate += 1;
    }

    // Metodo per ottenere il numero di chiamate
    mostraContatoreChiamate() {
        return `Numero di chiamate al metodo: ${this.contatoreChiamate}`;
    }

    descrizione() {
        this.incrementaContatore();  // Incrementa il contatore ogni volta che viene chiamato
        return this.anno + " " + this.marca + " " + this.modello;
    }

    aggiungiChilometri(km) {
        this.incrementaContatore();
        if (km > 0) {
            this.chilometraggio += km;
        }
    }

    mostraChilometraggio() {
        this.incrementaContatore();  // Incrementa il contatore ogni volta che viene chiamato
        return "Chilometri: " + this.chilometraggio + " km";
    }

    calcolaEtà() {
        const annoCorrente = new Date().getFullYear(); 
        return annoCorrente - this.anno; 
    }

    mostraEtà() {
        return `L'età dell'automobile è di ${this.calcolaEtà()} anni.`;
    }

    controllaChilometraggio() {
        if (this.chilometraggio > 100000) {
            return "Attenzione! Il chilometraggio ha superato i 100,000 km.";
        }
        return "Il chilometraggio è sotto il limite.";
    }

    static confrontaChilometraggio(auto1, auto2) {
        if (auto1.chilometraggio > auto2.chilometraggio) {
            return `${auto1.marca} ${auto1.modello} ha un chilometraggio maggiore di ${auto2.marca} ${auto2.modello}.`;
        } else if (auto1.chilometraggio < auto2.chilometraggio) {
            return `${auto2.marca} ${auto2.modello} ha un chilometraggio maggiore di ${auto1.marca} ${auto1.modello}.`;
        } else {
            return `Le due automobili hanno lo stesso chilometraggio.`;
        }
    }
}

// Metodo saluta() al prototype di Automobile
Automobile.prototype.saluta = function() {
    return `Ciao! Sono una ${this.marca} ${this.modello}.`;
};

class Elettrica extends Automobile {
    constructor(marca, modello, anno, autonomia) {
        super(marca, modello, anno);
        this.autonomia = autonomia;
    }

    descrizione() {
        return this.anno + " " + this.marca + " " + this.modello + " - Autonomia: " + this.autonomia + " km";
    }

    ricarica(km) {
        if (km > 0) {
            this.autonomia += km;
        }
    }

    verificaChilometraggio() {
        console.log(this.controllaChilometraggio());
    }
}

// Test con l'auto Jeep Renegade
const miaAuto = new Automobile("Jeep", "Renegade", 2018);

console.log(miaAuto.saluta());

console.log(miaAuto.descrizione());

console.log(miaAuto.mostraChilometraggio());

miaAuto.aggiungiChilometri(90000);

console.log(miaAuto.mostraChilometraggio());

console.log(miaAuto.mostraEtà());

console.log(miaAuto.controllaChilometraggio());



// Test con l'auto Tesla Model 3
const miaAutoElettrica = new Elettrica("Tesla", "Model 3", 2023, 400);

console.log(miaAutoElettrica.saluta());

console.log(miaAutoElettrica.descrizione());

miaAutoElettrica.ricarica(100);

console.log(miaAutoElettrica.descrizione());

miaAutoElettrica.aggiungiChilometri(120000);

miaAutoElettrica.verificaChilometraggio();

// Confronto dei chilometri tra le due auto
console.log(Automobile.confrontaChilometraggio(miaAuto, miaAutoElettrica));

// Mostra il numero di chiamate al contatore
console.log(miaAuto.mostraContatoreChiamate());

console.log(miaAutoElettrica.mostraContatoreChiamate());