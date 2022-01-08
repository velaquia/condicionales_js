"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 * Objetivos: adquirir herramientas para identificar 
 * problemas en el código, dar solución a las consignas planteadas.
 * Seleccionar cada ejercicio cambiando la variable "ejercicio"
 */

// seleccione el ejercicio a ejecutar

var ejercicio = 0;

if (ejercicio == 0) {
    ejercicio = prompt("Bienvenido, ingrese el número de ejercicio que quiere realizar");
}


// Ejercicios de práctica numérica

if (ejercicio == 1) {
    // Comparadores
    // Ingrese dos números cualesquiera y realice las sigueintes
    // comparaciones entre ellos
    var numero1 = parseInt(prompt('Ingrese el primer número:\n'));

    var numero2 = parseInt(prompt('Ingrese el segundo número:\n'));

    // Compare cual de los dos números es mayor
    // Imprima en pantalla según corresponda

    // Verifique si el numero1 positivo, negativo o cero
    // Imprima el resultado en cada caso

    // Verifique si el numero1 es mayor a 0 y menor a 100
    // Imprima en pantalla si se cumple o no la condición

    // Verifique si el numero1 es menor a 10 o el numero2
    // es mayor a - 2
    // Imprima en pantalla si se cumple o no la condición
}

// Ejemplos variables de texto
if (ejercicio == 2) {

    // Comparadores
    // Ingrese dos palabras cualesquiera y realice las sigueintes
    // comparaciones entre ellas
    var texto1 = prompt('Ingrese la primera palabra:');

    var texto2 = prompt('Ingrese la segunda palabra:');

    //  Compare cual de las dos palabras es mayor (alfabéticamente)
    //  Imprima en pantalla según corresponda

    var copiaTexto1 = texto1  // Copia de la variable texto1

    // Verifique que copiaTexto1 es igual a texto1
    // Imprima en pantalla según corresponda

    // Verifique que copiaTexto1 es distinta a texto2
    // Imprima en pantalla según corresponda

}

//  Ejercicios de práctica numérica
if (ejercicio == 3) {

    //  Condicionales anidados
    var numero1 = 7;
    var numero2 = -2;

    //  Verifique si el numero1 es mayor a 5
    //    --> En caso afirmativo, verifique si el numero2
    //        es positivo
    //        --> En caso afirmativo imprima en pantalla "Resp=1"
    //        --> En caso negativo imprima en pantalla   "Resp=2"
    //   --> En caso negativo (numero1 no es mayor a 5)
    //       verifique si el numero2 es mayor a 5
    //        --> En caso afirmativo imprima en pantalla "Resp=3"
    //        --> En caso negativo imprima en pantalla "Resp=4"

    //  Verifique la calificación de un estudiante según su
    //  puntaje en un examen
    var puntaje = 70;

    //  Si el puntaje es mayor igual a 90 --> imprimir A
    //  Si el puntaje es mayor igual a 80 --> imprimir B
    //  Si el puntaje es mayor igual a 70 --> imprimir C
    //  Si el puntaje es mayor igual a 60 --> imprimir D
    //  Si el puntaje es manor a  60      --> imprimir F

    // Debe imprimir en pantalla la calificacion
    // Utilizar "if" anidados

}

// Ejemplos variables de texto
if (ejercicio == 4) {

    var texto1 = '5';
    var texto2 = '7';


    //  Verifique cual cual de los dos textos es mayor alfabéticamente
    //  Imprima en pantalla según corresponda

    //  Transforma esas variables tipo texto y almacénalas
    //  en nuevas variables númericas (Number) con parseInt()
    //  Repita el proceso, ¿Cuál de las nuevas variables es mayor?
    //  Imprima en pantalla según corresponda

    //  Para pensar!
    //  ¿Por qué cree que texto_2 es mayor a texto_1?
    //  Siendo números tiene sentido, pero son caracteres, texto,
    //  aún así el operador arroja el mismo resultado que con las
    //  variables numéricas, cierto? ¿Por qué creen que es así?
    //  Esta pregunta estará repetida en el Campus para que puedan
    //  responder.
    //  NOTA: La respuesta no se encuentra en el apunte, sino en Google ;)

}
