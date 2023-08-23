"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Ejercicios de práctica numérica
// Realice un programa que solicite por propmt 2 números
// Calcule la diferencia entre ellos e informe por pantalla
// si el resultado es positivo, negativo o cero.
let numero1 = parseInt(prompt("Ingrese el primer numero"));
let numero2 = parseInt(prompt("Ingrese el segundo numero"));

let resultado = (numero1 - numero2)

if (resultado > 0) {
    console.log("El resultado es positivo")
} else {
    if (resultado < 0) {
        console.log("El resultado es negativo")
    } else {
        console.log("El resultado es cero")
    }
}