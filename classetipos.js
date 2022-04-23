class tipos {
    constructor(nome1, nome2, nome3) {
        this.nome1 = nome1;
        this.nome2 = nome2;
        this.nome3 = nome3
    }

    introducao() {
        console.log("Vamos conhecer a seguir, a diferença entre a " + this.nome1 + ", " + this.nome2 + " e " + this.nome3 + ".");
    }
}

module.exports = tipos;