
const obtenerPokemon = require("./library");

// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido



obtenerPokemon("chikorita").then(function imprimir(options) {
    console.log(options);
    
}).catch(function(err){
    console.log("problemas al ejecutar");
})
