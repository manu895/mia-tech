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
}

const miaAuto = new Automobile("jeep", "Renegade", 2018);
console.log(miaAuto.descrizione());

miaAuto.aggiungiChilometri(90000);
console.log(miaAuto.mostraChilometraggio());