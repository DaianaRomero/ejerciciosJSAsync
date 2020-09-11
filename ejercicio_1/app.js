
const obtenerChiste = require("./library");

// Codigo funcion callback

function imprimir(url) {
    console.log(url);
    
}


// Fin codigo

// Usar la funcion obtenerChiste(funcionCallback) en donde funcionCallback es una
// función que recibe el objeto chiste extraido


  
  obtenerChiste(imprimir);
