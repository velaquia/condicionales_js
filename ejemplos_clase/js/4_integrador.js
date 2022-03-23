'use strict';

/* Inove Coding School
 * Ejemplos de código de clase.
 * Condicionales.
 * Este archivo sirve como borrador con el código visto en la clase.
 */

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");

// Operador AND para chequear que ambas condiciones son verdaderas
if ( (apellido != "")  && (apellido != "") ) {
    alert("Hola: " + myname + " " + surname);
}
else {
    alert("Por favor ingresa tanto su nombre como apellido");
}

// Ingresar un texto y transformarlo a número
let edad = parseInt(prompt("Ingrese su edad"));
if( edad >= 18) {
    alert("Sos mayor de edad");
}