
const obtenerPersonaFake = require("./library");

// Usar la funcion obtenerPersonaFake() la cual devuelve la promesa de traer el objeto persona extraido


obtenerPersonaFake().then(function imprimir(options) {
    console.log(options);
    
}).catch(function(err){
    console.log("problemas al ejecutar"+err.message);
})


