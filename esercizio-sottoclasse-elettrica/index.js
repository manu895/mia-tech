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
console.log(miaAuto.descrizione());

miaAuto.aggiungiChilometri(90000);
console.log(miaAuto.mostraChilometraggio());

//auto elettrica
const miaAutoElettrica = new Elettrica("Tesla", "Model 3", 2023, 400);
console.log(miaAutoElettrica.descrizione());

miaAutoElettrica.ricarica(100);
console.log(miaAutoElettrica.descrizione());
