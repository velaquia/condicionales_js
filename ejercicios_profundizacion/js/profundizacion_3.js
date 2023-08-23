"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Ejercicios de práctica numérica
// En este ejercicio les pediremos que investiguen por su cuentan
// algunas propiedades de javascript para manipular números
// usando la librería "Math":
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math

// Realice un programa que solicite ingresar tres valores de temperatura
// De las temperaturas ingresadas por consola determinar:
// 1 - ¿Cuáles de ellas es la máxima temperatura ingresada?
// Para este caso haga uso de la herramienta "Math.max",
// investigue y busque como utilizarla.
// 2 - ¿Cuáles de ellas es la mínima temperatura ingresada?
// Para este caso haga uso de la herramienta "Math.min",
// investigue y busque como utilizarla.
let temp1 = parseInt(prompt("Ingrese la primer temperatura"))
let temp2 = parseInt(prompt("Ingrese la segunda temperatura"))
let temp3 = parseInt(prompt("Ingrese la tercer temperatura"))

let temp_maxima = Math.max(temp1, temp2, temp3)
console.log("La temperatura maxima es:", temp_maxima)

let temp_minima = Math.min(temp1, temp2, temp3)
console.log("La temperatura minima es:", temp_minima)

// En cada caso imprimir en pantalla el resultado
