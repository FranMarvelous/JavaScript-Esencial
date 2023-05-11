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
//LET es una variable local o de bloque

function saludo (){
    let nombre = "Rebe";
        console.log(nombre)

    let edad = 30;
    console.log(edad)
}

 saludo();


// CONST es una variable no modificable
 const pi = 3.1416;

 //NUMEROS ... datos numericos (sin comillas)

 var edad = 35; //numero 
 var cantidad = "100"; //string
 //var nuevaCantidad = number(cantidad); //cambia el string a numerico

 //si sumo string más numero, solo se concatenan
 //parseInt(datos a enteros)
 //parseFloat(datos a decimal)
 //String(numero a string)

 //TEXTOS:
 var bebida = "agua";
 var comida = "ceviche";
 var instruccion = "El platillo es "+comida;
 console.log(instruccion);


 //BOOLEANS
 var activo = false;

 var estado = Boolean(10 < 9); //esto dará false

 //FECHAS
 var fecha = new Date();
 
 //fecha.getDay() -- dia de semana
 //fecha.getDate() -- dia del mes
 //fecha.getHours() -- hora del momento de ejecucion
 //fecha.setDate(5) -- le asigno datos a la fecha

 