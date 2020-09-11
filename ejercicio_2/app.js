
const obtenerChiste = require("./library");

// Usar la funcion obtenerChiste() la cual devuelve la promesa de traer el objeto chiste extraido

// Codigo funcion callback




obtenerChiste("chikorita").then(function imprimir(options) {
    console.log(options);
    
}).catch(function(err){
    console.log("problemas al ejecutar");
})


