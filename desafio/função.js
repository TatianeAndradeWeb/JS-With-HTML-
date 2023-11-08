function getEventoAleatorio(numAleatorio) {

    var numAleatorio = Math.floor(Math.random() * 3);

    if (numAleatorio === 0) {
        console.log("Maratona");
    } else if (numAleatorio === 1) {
        console.log("Triathlon");
    } else if (numAleatorio == 2) {
        console.log("Pentathlon");
    }

    return numAleatorio;
}


function getDiasATreino(evento) {
    if (evento === 0) {
        console.log("Você tem até 50 dias para se preparar!");
    } else if (evento === 1) {
        console.log("Você tem até 100 dias para se preparar!");
    } else if (evento == 2) {
        console.log("Você tem até 200 dias para se preparar!");
    }
    
    return evento;
}


function logEvento(){
  let eventoale = getEventoAleatorio(); 
  console.log(eventoale);
}

function logTempo(){
    var evento = getEventoAleatorio(); 
    console.log(getDiasATreino(evento)); 
}

let nome = "Tatiane";
console.log("Olá " + nome + ". Seu evento será:");
console.log(logTempo());