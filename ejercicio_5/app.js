
const obtenerPersonaFake = require("./library");

// Codigo funcion callback

function imprimir(url) {
    console.log(url);
    
}

// Fin codigo

// Usar la funcion obtenerPersonaFake(funcionCallback) en donde funcionCallback es una función
// que recibe el objeto persona extraido
obtenerPersonaFake(imprimir);




  
