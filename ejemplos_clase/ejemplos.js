'use strict';

/* Inove Coding School
 * Ejemplos de código de clase.
 * Condicionales.
 * Este archivo sirve como borrador con el código visto en la clase.
 */

// Ejemplo de condicional "if"

let numero = 20;

if (numero > 10) {

    console.log("El numero " + numero + " es mayor a 10");

}

// Ejemplo de condicional "if..else"

let dinero = false;

console.log("Entramos al supermercado y seleccionamos los productos");

if (dinero === true) {
    // Acá entra si el dinero es igual a true
    console.log("Se abona con efectivo la compra");
} else {
    // Acá entra si el dinero no es true
    console.log("La compra se abona con tarjeta");
}

console.log("Salimos del supermercado con nuestros productos");

// Ejemplo de condicional "if..else" anidado

let tarjeta = true;
let dinero = false;

console.log("Entramos al supermercado y seleccionamos los productos");

if (dinero === true) {
    // Acá entra si el dinero es igual a true
    console.log("Se abona con efectivo la compra");
} else {
    // Acá entra si el dinero no es true
    if (tarjeta === true) {
        // Acá entra si tenemos la tarjeta
        console.log("La compra se abona con tarjeta");
    } else {
        // Acá entra si NO tenemos la tarjeta
        console.log("No se puede realizar la compra");
    }
}
console.log("Salimos del supermercado");


// Aplicación de operadores relacionales. La idea del ejemplo,
// es cambiar los valores de las variables y comprobar el comportamiento.

// Igualdad                (a == b) --> Devuelve true si ambos operandos  son iguales.
// Desigualdad             (a != b) --> Devuelve true si ambos operandos son distintos.
// Estrictamente iguales (a === b) ---> Devuelve true si los operandos son iguales y tienen el mismo tipo
// Mayor que                (a > b) --> Devuelve true si el operando de la izquierda es mayor que el operando de la derecha.
// Mayor o igual que       (a >= b) --> Devuelve true si el operando de la izquierda es mayor o igual que el operando de la derecha.
// Menor que                (a < b) --> Devuelve true si el operando de la izquierda es menor que el operando de la derecha.
// Menor o igual que       (a <= b) --> Devuelve true si el operando de la izquierda es menor o igual que el operando de la derecha.
// AND Lógico              (a && b) --> Devuelve true si ambos operandos son true.
// OR Lógico               (a || b) --> Devuelve true si uno de los dos operandos es true.
// NOT Lógico                (a!)   --> Devuelve true si el operando es false.

// Construya su operador :D
let a = true;
let b = false;

if (!a) {
    console.log(true);
} else {
    console.log(false);
}

// Ejemplo de uso de método prompt()

let dato_ingresado = "";

dato_ingresado = prompt("Esta es la entrada de datos");

console.log(dato_ingresado);

// Ejemplo de uso de método alert()

let mensaje = "";

alert("Este es el mensaje de alert");

// Ejemplo de uso de método confirm()

let confirmacion = false;

confirmacion = confirm("Este mensaje es de confirmación");

// Ejemplos de aplicación de operadores relacionales con cadenas de texto.

// a --> es el mínimo 
// z --> es el máximo
// Mayúscula es el mínimo
// Minúscula es maximo
// aa es menor que aaaa, cuenta cantidad de caracteres
let texto1 = "a";
let texto2 = "z";

if (texto1 < texto2) {
    console.log(texto1 + " es menor que " + texto2);
}
if (texto1 === texto2) {
    console.log(texto1 + " es igual a " + texto2);
}
if (texto1 > texto2) {
    console.log(texto1 + " es mayor que " + texto2);
}
