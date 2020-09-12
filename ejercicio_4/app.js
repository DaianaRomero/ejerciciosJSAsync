
const obtenerPokemon = require("./library");

// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido



obtenerPokemon("charizard").then(function imprimir(options) {

    console.log("Nombre: "+ options.name);
    console.log("Habilidades: ");
    options.abilities.forEach(skill => {
        console.log("*"+skill.ability.name);
    })
    

   
    
}).catch(function(err){
    console.log("problemas al ejecutar");
})
