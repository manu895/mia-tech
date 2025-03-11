class Automobile {
    constructor(marca, modello, anno) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
    }

    descrizione() {
        return this.anno + " " + this.marca + " " + this.modello;
    }
}

const miaAuto = new Automobile("Jeep", "Renegade", 20018);
console.log(miaAuto.descrizione());