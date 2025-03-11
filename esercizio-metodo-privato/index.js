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

    // Metodo calcolaEtà (privato)
    #calcolaEtà() {
        const annoCorrente = new Date().getFullYear(); 
        return annoCorrente - this.anno;
    }

    // metodo mostraEtà (pubblico)
    mostraEtà() {
        return `L'età dell'automobile è di ${this.#calcolaEtà()} anni.`;
    }
}


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
}

const miaAuto = new Automobile("Jeep", "Renegade", 2018);

console.log(miaAuto.saluta());

console.log(miaAuto.descrizione());

console.log(miaAuto.mostraChilometraggio());

miaAuto.aggiungiChilometri(90000);

console.log(miaAuto.mostraChilometraggio());

console.log(miaAuto.mostraEtà());



const miaAutoElettrica = new Elettrica("Tesla", "Model 3", 2023, 400);

console.log(miaAutoElettrica.saluta());

console.log(miaAutoElettrica.descrizione());

miaAutoElettrica.ricarica(100);

console.log(miaAutoElettrica.descrizione());

console.log(miaAutoElettrica.mostraEtà()); 
