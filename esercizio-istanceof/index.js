class Automobile {
    #contatoreChiamate = 0; // Contatore privato per tutti i metodi
    #contatoreAggiungiChilometri = 0; // aggiungiChilometri

    constructor(marca, modello, anno) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = 0;
    }

    // Metodo privato per incrementare il contatore generale
    #incrementaContatore() {
        this.#contatoreChiamate += 1;
    }

    // Getter per chilometraggio
    get chilometraggioAttuale() {
        return this.chilometraggio;
    }

    // Setter per chilometraggio
    set chilometraggioAttuale(nuovoChilometraggio) {
        if (nuovoChilometraggio >= this.chilometraggio) {
            this.chilometraggio = nuovoChilometraggio;
        } else {
            console.log("Errore: Non puoi diminuire il chilometraggio!");
        }
    }

    // Metodo per ottenere il numero di chiamate totali
    mostraContatoreChiamate() {
        return `Numero di chiamate ai metodi: ${this.#contatoreChiamate}`;
    }

    // Metodo per ottenere il numero di chiamate specifiche a aggiungiChilometri
    mostraContatoreAggiungiChilometri() {
        return `Il metodo aggiungiChilometri è stato chiamato ${this.#contatoreAggiungiChilometri} volte.`;
    }

    descrizione() {
        this.#incrementaContatore();
        return this.anno + " " + this.marca + " " + this.modello;
    }

    aggiungiChilometri(km) {
        this.#incrementaContatore();
        this.#contatoreAggiungiChilometri += 1;
        if (km > 0) {
            this.chilometraggio += km;
        }
    }

    mostraChilometraggio() {
        this.#incrementaContatore();
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

    aggiornaChilometri(km) {
        this.aggiungiChilometri(km);
    }

    // Metodo statico per verificare se un oggetto è un'istanza di una classe
    static verificaIstanza(obj, classe) {
        if (obj instanceof classe) {
            return `L'oggetto è un'istanza della classe ${classe.name}.`;
        } else {
            return `L'oggetto NON è un'istanza della classe ${classe.name}.`;
        }
    }
}

// Metodo saluta al prototype di Automobile
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

//  Classe Camion con caricoMassimo
class Camion extends Automobile {
    constructor(marca, modello, anno, caricoMassimo) {
        super(marca, modello, anno);
        this.caricoMassimo = caricoMassimo;
        this.caricoAttuale = 0;
    }

    // Metodo che carica il camion
    carica(kg) {
        if (kg > 0) {
            if (this.caricoAttuale + kg <= this.caricoMassimo) {
                this.caricoAttuale += kg;
            } else {
                console.log("Errore: Il carico supera il limite massimo!");
            }
        }
    }

    // decrizione sovrascritta
    descrizione() {
        return `${super.descrizione()} - Carico massimo: ${this.caricoMassimo} kg`;
    }
}

// Test con l'auto Jeep Renegade
const miaAuto = new Automobile("Jeep", "Renegade", 2018);

console.log(miaAuto.saluta());

console.log(miaAuto.descrizione());

console.log(miaAuto.mostraChilometraggio());

miaAuto.aggiungiChilometri(90000);
miaAuto.aggiungiChilometri(10000);

console.log(`Chilometraggio attuale della Jeep Renegade: ${miaAuto.chilometraggioAttuale} km`);

console.log(miaAuto.mostraChilometraggio());

console.log(miaAuto.mostraEtà());

console.log(miaAuto.controllaChilometraggio());

// classe Camion
const mioCamion = new Camion("Scania", "R500", 2019, 20000);

console.log(mioCamion.descrizione()); // descrizione camion

mioCamion.carica(5000);
console.log(`Carico attuale: ${mioCamion.caricoAttuale} kg`);

mioCamion.carica(20000); //superato il limite massimo

// instanceof 
console.log(Automobile.verificaIstanza(miaAuto, Automobile)); // è un'istanza di Automobile
console.log(Automobile.verificaIstanza(miaAuto, Camion)); // non è un'istanza di Camion
console.log(Automobile.verificaIstanza(mioCamion, Camion)); //  è un'istanza di Camion
console.log(Automobile.verificaIstanza(mioCamion, Automobile)); // è anche un'istanza di Automobile
