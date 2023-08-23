"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejemplos variables de texto
let texto1 = '5';
let texto2 = '7';

//  Verifique cual cual de los dos textos es mayor alfabéticamente
//  Imprima en pantalla según corresponda
if (texto1 > texto2) {
    console.log(texto1, "es mayor a", texto2)
}   else {
        if (texto2 > texto1) {
            console.log(texto2, "es mayor a", texto1)
        } else {
            console.log(texto1, "y", texto2, "son iguales")
        }
}

//  Transforma esas variables tipo texto y almacénalas
//  en nuevas variables númericas (Number) con parseInt()
//  Repita el proceso, ¿Cuál de las nuevas variables es mayor?
//  Imprima en pantalla según corresponda
let Number1 = parseInt(texto1);
let Number2 = parseInt(texto2);

if (Number1 > Number2) {
    console.log(Number1, "es mayor a", Number2)
}   else {
        if (Number2 > Number1) {
            console.log(Number2, "es mayor a", Number1)
        } else {
            console.log(Number1, "y", Number2, "son iguales")
        }
    }


//  Para pensar!
//  ¿Por qué cree que texto_2 es mayor a texto_1?
//  Siendo números tiene sentido, pero son caracteres, texto,
//  aún así el operador arroja el mismo resultado que con las
//  variables numéricas, cierto? ¿Por qué creen que es así?
//  Esta pregunta estará repetida en el Campus para que puedan
//  responder.
//  NOTA: La respuesta no se encuentra en el apunte, sino en Google ;)
