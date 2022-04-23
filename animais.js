const tipos = require('./classetipos');
const animais = require('./classeAnimais');

let Tipos = new tipos("Largatixa de parede", "Osga-turca", "Camaleão")
let largatixa = new animais("hemidactylus mabouia", "lagartixa de parede", "chordata", "reptilia", "gekkonidae", "squamata", "animalia", "aranhas, besouros, traças, moscas, mosquitos", "Africa");
let osgaturca = new animais("hemidactylus turcicus", "osga-turca", "chordata", "reptilia", "gekkonidae", "squamata","animalia", "traças, baratas", "Europa");
let camaleao = new animais("chamaeleo chamaeleon", "camaleão", "chordata", "reptilia", "chamaeleonidae", "squamata", "animalia", "gafanhotos, insetos", "Europa");

space();
Tipos.introducao();
space();
largatixa.descrever();
largatixa.comida();
largatixa.proveniente();
space();
osgaturca.descrever();
osgaturca.comida();
osgaturca.proveniente();
space();
camaleao.descrever();
camaleao.comida();
camaleao.proveniente();
space();

function space() {
    console.log("");
};