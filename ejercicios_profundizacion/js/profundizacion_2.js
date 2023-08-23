"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Práctica numérica
// Realice un programa que solicite el ingreso de tres números
// enteros, y luego en cada caso informe si el número es par
// o impar.
// Para cada caso imprimir el resultado en pantalla.
let numero1 = parseInt(prompt("Ingrese el primer numero"));
let numero2 = parseInt(prompt("Ingrese el segundo numero"));
let numero3 = parseInt(prompt("Ingrese el tercer numero"));

if (numero1 %2 ===0) {
    console.log(numero1, "es par")
} else {
    console.log(numero1, "es impar")
}


if (numero2 %2 ===0) {
    console.log(numero2, "es par")
} else {
    console.log(numero2, "es impar")
}


if (numero3 %2 ===0) {
    console.log(numero3, "es par")
} else {
    console.log(numero3, "es impar")
}