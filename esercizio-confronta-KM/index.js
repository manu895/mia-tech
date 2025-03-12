class Automobile {
    constructor(marca, modello, anno) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = 0;
    }

    descrizione() {
        return this.anno + " " + this.marca + " " + this.modello;
    }

    aggiungiChilometri(km) {
        if (km > 0) {
            this.chilometraggio += km;
        }
    }

    mostraChilometraggio() {
        return "Chilometri: " + this.chilometraggio + " km";
    }

   
    #calcolaEtà() {
        const annoCorrente = new Date().getFullYear(); 
        return annoCorrente - this.anno; 
    }

    // metodo pubblico per mostrare l'età dell'auto
    mostraEtà() {
        return `L'età dell'automobile è di ${this.#calcolaEtà()} anni.`;
    }

    // Metodo protetto per controllare il chilometraggio
    _controllaChilometri() {
        if (this.chilometraggio > 100000) {
            return "Attenzione! Il chilometraggio ha superato i 100,000 km.";
        }
        return "Il chilometraggio è sotto il limite.";
    }

    // Metodo statico per confrontare il chilometraggio di due automobili
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

    // Verifica il chilometraggio usando il metodo protetto
    verificaChilometraggio() {
        console.log(this._controllaChilometri());
    }
}


const miaAuto = new Automobile("Jeep", "Renegade", 2018);

console.log(miaAuto.saluta());

console.log(miaAuto.descrizione());

console.log(miaAuto.mostraChilometraggio());

miaAuto.aggiungiChilometri(90000);

console.log(miaAuto.mostraChilometraggio());

console.log(miaAuto.mostraEtà());

console.log(miaAuto._controllaChilometri());


//auto elettrica
const miaAutoElettrica = new Elettrica("Tesla", "Model 3", 2023, 400);
console.log(miaAutoElettrica.saluta());

console.log(miaAutoElettrica.descrizione());

miaAutoElettrica.ricarica(100);

console.log(miaAutoElettrica.descrizione());

miaAutoElettrica.aggiungiChilometri(120000);

miaAutoElettrica.verificaChilometraggio();

// Confronto dei chilometri tra le due auto
console.log(Automobile.confrontaChilometraggio(miaAuto, miaAutoElettrica));