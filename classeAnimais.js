class animais {

    constructor(nomecientifico, nomepopular, filo, classe, familia, ordem, reino, alimentacao, origem) {
        this.nomecientifico = nomecientifico,
        this.nomepopular = nomepopular,
        this.filo = filo,
        this.classe = classe,
        this.familia = familia,
        this.ordem = ordem,
        this.reino = reino,
        this.alimentacao = alimentacao,
        this.origem = origem
    };

    descrever() {
        console.log("A espécie " + this.nomepopular + ", tem o nome científico de " + this.nomecientifico + " e pertence a família " + this.familia + ".");
    };

    comida() {
        console.log("A espécie " + this.nomepopular + " se alimenta de pequenos animais, tais como " + this.alimentacao + ", etc.");
    };

    proveniente() {
        console.log("A espécie " + this.nomepopular + " é provenientes da " + this.origem + " e chegou na América do Sul através dos navios negreiros.");
    };

};

module.exports = animais;