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

 //SIMBOLOS = valores unicos, no cambian ni son iguales a otros
 
 var simbolo1 = Symbol();

 var ambiente = Symbol("dev");

//JSON - objeto
var persona = {nombre: "Sergio", twitter:"yacafx"};

var personas =  [ 
    {nombre: "Jose", twitter:"dsgds"},
    {nombre: "Pedro", twitter:"ygfhfh"},
    {nombre: "Ale", twitter:"sdfssd"},
    persona
]

//si quiero pasar los datos a BD, convierto con stringify a STRING
var personaJSON = JSON.stringify(persona);

//para traer el string y convertirlo a objeto JSON
var nuevaPersona = JSON.parse(personaJSON);

//ARITMETICA
var datoA = 10;
var datoB = 20;

//suma +
var suma = datoA + datoB;
console.log("la suma de"+ datoA +"+"+datoB+"es igual a", suma);

//resta -
var resta = datoA - datoB;
console.log("la resta de"+ datoA +"-"+datoB+"es igual a", resta);

//multiplicacion *
var multiplicacion = datoA * datoB;
console.log("la multiplicacion de"+ datoA +"*"+datoB+"es igual a", multiplicacion);

//division /
var division = datoA / datoB;
console.log("la division de"+ datoA +"/"+datoB+"es igual a", division);

//modulo o residuo %
var modulo = datoA + datoB;
console.log("la suma de"+ datoA +"%"+datoB+"es igual a", modulo);

//incremento ++
var incremento = datoA;
incremento++;
console.log("el incremento ++ de"+ datoA +"es igual a", incremento);

//decremento ++
var decremento = datoA;
decremento--;
console.log("el decremento -- de"+ datoA +"es igual a", incremento);
