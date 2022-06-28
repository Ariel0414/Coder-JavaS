/*let palabraUno =  "Hola"

let palabraDos = "Mundo"

let palabraTres = palabraUno+palabraDos


//console.log(palabraTres)

/*const NUMEROUNO = 2
let numeroDos = 6

let suma = NUMEROUNO + numeroDos
let division = NUMEROUNO / numeroDos
let multi = NUMEROUNO * numeroDos
/*
console.log(multi)
console.log(suma)
console.log(division)
*/

/*
let numeroCuatro = 5
console.log(numeroCuatro)
*/

/*let numeroUno = prompt("Ingrese el primer número")
let numeroDos = prompt("ingrese el segundo número")

let suma = parseFloat(numeroUno) + parseFloat (numeroDos)

alert("la suma es: " + suma)

console.log ("la suma es:" + suma)
*/

/*let tamaño = prompt("Ingresar tamaño de su auto");
let texto = prompt("Ingresar Texto a Repetir")
for (let index = 0; index > cantidad; index ++) {
    console.log (texto)
}
*/

/*for (let i = 1; i<= 20; i++) {
    let ingresarNombre = prompt ("Ingrese un número")
    alert ("Su día de reunión:" + i + "Nombre" + "Ingresar Nombre")
    break
}
*/


/*let libros = parseInt(prompt("Tipos de Novelas \n1. Psicológicas \n2. Suspenso \n3. Policial \n4. Romántica"));
if (libros === 1) {
    alert("Ha seleccionado una Novela Psicológica");
} else if (libros === 2) {
    alert( "Ha seleccionado una Novela Suspenso");
} else if (libros === 3) {
    alert( "Ha seleccionado una Novela Policial");
} else if (libros === 4) {
    alert( "Ha seleccionado una Novela Romántica");
}
*/

/*let nombre = "Ariel";

for(let i = 0; i <= 10; i++) {
    if (i == 7)
    break;
    else 
    console.log(i)
    console.log(nombre)
}
*/
/*
function saludar () {
    let nombre = prompt("Ingrese su nombre")
    alert ("Hola " + nombre)
}    
saludar()
*/

/*
let nombre = "Homero";
let apellido = "Simpson";
let edad = "39";
console.log(nombre);
console.log(apellido);
console.log(edad);
*/

/*
let ciudadUno = "Buenos Aires"
let ciudadDos = "Mar Del Plata"
let ciudadTres = "San Clamente"
console.log(ciudadUno);
console.log(ciudadDos);
console.log(ciudadTres);
*/

/*let persona = "Bart"
let domicilio = "742 Ever Green Terr."
let país = "Usa"
let nacimiento = "02-11-70"
const codigo = "B47U89RE243";
let carnet = "codigo: "+codigo+ "  "+
"Nombre: "+persona+" "+
"País: "+país+" " +
"Nacimiento: "+nacimiento+ " " +
"Domicilio:" +domicilio;
console.log(carnet); 
*/

/*
let integranteUno = prompt("Ingrese el Primer nombre de los integrantes");
let integranteDos = prompt("Ingrese el Segundo nombre de los integrantes");
let integranteTres = prompt("Ingrese el Tercero de los integrantes");
let integranteCuatro = prompt("Ingrese el Cuatro de los integrantes");
let familia = 
"1-" +integranteUno+"  "+
"2-" +integranteDos+" " +
"3-" +integranteTres+" " +
"+4-" +integranteCuatro+" ";
console.log(familia);
*/

/*
let precio = parseFloat(prompt("Ingrese precio"));
let descuento20 = precio - (precio *0.2);
let descuento30 = precio -(precio * 0.3);
console.log(descuento20);
console.log(descuento30);
*/

/*
let numero = prompt("ingrese número de repeticiones");
let texto = prompt("ingrese texto");
for (let index = 2; index < cantidad; index++) {
    console.log(texto);
}
*/

/*
let lados = prompt("ingresar cantidad de lados");
for (let index = 0; index < lados; index++) {
if (index > 3) {
    break;
}
alert ("lado");
}
*/

/*
let alumnos = " ";
for (let index =0; index < 10; index++) {
    alumnos+= prompt ("ingresar nombre del alumno")+ "\n";
}
alert(alumnos); 
*/

/*
let entrada = prompt("ingrese el nombre");
let ingresados = " ";
while (entrada != "Voldemort"){
    ingresados+=entrada + "\n";
    entrada = prompt("ingresar nombre")
}
alert (ingresados);
*/

/*
let entrada = prompt("ingrese un nombre");
let nombre = "Bart";
if (entrada == nombre) { 
    alert ("Fui yo"); 
} else {
        alert("yo no fui");
 }
 */

 /*
 let entrada2 = prompt("ingrese una tecla");
 if ((entrada2=="y") || (entrada2=="Y")){
alert ("correcto");
 } else {
    alert ("error");
 } 
 */
/*
 let entrada3 = prompt("ingrese un número");
 if (entrada3 == 1) {
    alert("elegiste a Homero");
 } else if (entrada3 ==2) {
    alert ("elegiste a Marge");
 } else if (entrada3 == 3) {
    alert ("elegiste a Bart");
 } else if (entrada3 == 4 ) {
    alert ("elegiste a Lisa");
 }
 else {
    alert("error");
 }
*/

/*
let nombre1= prompt("ingrese el nombre del primer integrante de la familia");
let nombre2= prompt("ingrese el nombre del segundo integrante de la familia");
 let familia=
 "1-" + nombre1+ " "+
 "2-" + nombre2 + " ";
 console.log(familia)
 */
/*
 let numero = parseFloat(prompt("ingrese un numero"));
 if((numero >=0) && (numero <=1000)){
    alert("presupuesto bajo");
 } else if ((numero>=1001) && (numero<=3000)){
    alert("presupuesto medio")
 }else if (numero> 3000) {
    alert("preupuesto alto");
 } else {
    alert ("error")
 }
*/

/*
let entrada= prompt("seleccionar producto de 1 a 4");
while(entrada!= "Esc") {
    switch(entrada){
        case "1":
            alert("tomate");
           break;
         case"2":
           alert("papa");
           break; 
           default:
            alert("error");
            break
    }
    entrada = prompt("seleccionar producto del 1 al 2");
}
*/
/*
function entrada(){
    return prompt("ingresar dato");
}

function procesamiento(valor){
return "la entrada es " + valor
}
function salida(valor){
    alert(valor)
}
salida(procesamiento(entrada()));
*/
/*
function redondeo (valor){
    return Math.round(valor)
} 
for(let index=0; index < 5; index++){
let entrada = prompt("ingresar numero");
alert(redondeo(entrada));
}
*/

let nombre = "Hola, Bienvenido al Simulador de Historia."
function saludar(){
    }
alert(nombre)
saludar()

let opciones = parseInt(prompt("El Estado soy yo.¿Quén lo dijo?:\n1. Luis XIV \n2. Luis XV \n3. Luis XVI"));
if (opciones ===1){
    alert("Correcto, Felicitaciones");
} else {
    alert("Respuesta incorrecta");
    
}

alert("Sigamos");

    alert("¿Qué edad tenía Luis XIV cuando dijo aquella frase?.");
    
    let entrada = prompt(" Ingrese una edad. Ayuda: 16, 12, 13, 21");
    
while (entrada != "Esc"){ 
    switch (entrada) {
        case "12":
             alert("Incorrecto");
         break;
        case "21":
             alert("Incorrecto");
         break;
        case "13":
            alert("Incorrecto");
        break;
        case "16":
            alert("Muy Bien");
        break;
        default:
            alert("error");
            break;
    }
    entrada = prompt(" Ingrese una edad. Ayuda: 16, 12, 13, 21");
} 
 

