
const obtenerPersonaFake = require("./library");

// Usar la funcion obtenerPersonaFake() la cual devuelve la promesa de traer el objeto persona extraido


obtenerPersonaFake().then(function imprimir(options) {




options.results.forEach(persona => {

    console.log("Nombre: " + persona.name.first + " " + persona.name.last);
    console.log("Sexo: " + persona.gender);
    console.log("Pais: " + persona.location.country);
    console.log("Estado: " + persona.location.state);
    console.log("Calle: " + persona.location.street.name);
    console.log("Numero: " + persona.location.street.number);
    console.log("Código Postal: " + persona.location.postcode);
    console.log("Email: " + persona.email);
    console.log("Usuario: " + persona.login.username);
    console.log("Password: " + persona.login.password);



})







    
}).catch(function(err){
    console.log("problemas al ejecutar"+err.message);
})


