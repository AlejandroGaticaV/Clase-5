document.write("<h1> hola javaScript")
//comentarios de una line
/* comentarios de bloque */

let nombre = "Carlos"

console.log(nombre)

//Array

let datos=["Ana", "Pablo", "Carlos"]

let edades=[23, 17, 44, 15]

let objetoDatos={
    nombre:"Ana",
    edad:25,
    cuenta:"Alumno",
    notas:[5.5, 6.8, 5.9]
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

let uno=1
let unoString="1"

console.log(uno==unoString)
console.log(uno===unoString)

//estructuras de control

if (uno==unoString)
    console.log("Son Iguales ?")
if (uno===unoString){
    console.log("son Iguales")
}
else{
    console.log("No son Iguales")
}

let tipoAlumno="diurno"

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

