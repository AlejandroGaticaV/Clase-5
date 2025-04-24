document.write("<h1> hola javaScript")
//comentarios de una line
/* comentarios de bloque */

let nombre = "Carlos"

console.log(nombre)

//Array

let datos = ["Ana", "Pablo", "Carlos"]

let edades = [23, 17, 44, 15]

let objetoDatos = {
    nombre: "Ana",
    edad: 25,
    cuenta: "Alumno",
    notas: [5.5, 6.8, 5.9]
}

console.log(datos)
console.log(edades)
console.log(objetoDatos)

//operadores relacionales
/*
>
<
>=
<=
==
!=
===
*/

let uno = 1
let unoString = "1"

console.log(uno == unoString)
console.log(uno === unoString)

//estructuras de control

if (uno == unoString)
    console.log("Son Iguales ?")
if (uno === unoString) {
    console.log("son Iguales")
}
else {
    console.log("No son Iguales")
}

let tipoAlumno = "diurno"

switch (tipoAlumno) {
    case "diurno":
        console.log("Es alumno de día")
        break;
    case "vespertino":
        console.log("Es alumno de noche")
    default:
        console.log("No es alumno")
}

//ciclos

//while

/* mostrar los primeros 10 numeros positivos */

let numero = 1;

while (numero <= 10) {
    console.log(numero)
    numero = numero + 1

}

//for

let nombres = ["Ana", "Pablo", "Carlos"]

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i])
}

//funciones

function mensaje() {
    console.log("Saludos")
}

mensaje()

//Nota: if( numero % 2 == 0)

/*
Muestre la cantidad de numeros pares que 
existen dentro de un arreglo
use una funcion que retorne
si el numero es par o inpar o no.
*/

let numeros = [45, 33, 14, 23, 20, 4, 7, 12, 68, 3];

let contP = 0

function es_par(num){
    if(num %2==0)
        return true
    return false
}

for(let i=0;i<numeros.length;i++){
    if(es_par(numeros[i]))
        contP++
}

console.log("Los pares son ", contP)

// Modifique el ejercicio para mostrar la
// cantidad de impares

let contI = 0

function es_impar(num){
    if(num %2 !==0)
        return true
    return false
}

for(let i=0;i<numeros.length;i++){
    if(es_impar(numeros[i]))
        contI++
}

console.log("Los numeros impares ", contI)