"use strict"
// modo estricto, me pide declarar funciones primero

//alert("Hola desde un archivo externo");

// este es un mensaje en consola
console.log("Hola consola");

//declaración de variable
var x;
x = "3.1416"

//VAR globales y locales

var nombre = "Fran";

console.log(nombre)

//Variables globales: puedo acceder a ella en cualquier parte
//Var son destructivas, se sobreescriben.

//función básica modificacion de variable solo dentro de funcion:

function saludo (){
    let nombre = "Rebe";
        console.log(nombre)

    let edad = 30;
    console.log(edad)
}

 saludo();

 //LET es una variable local o de bloque