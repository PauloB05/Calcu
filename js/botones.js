
function prender() {
const pantalla = document.getElementById("pantalla");
const uno = document.querySelector("#numero1");
const dos = document.querySelector("#numero2");
const tres = document.querySelector("#numero3");
const cuatro = document.querySelector("#numero4");
const cinco = document.querySelector("#numero5");
const seis = document.querySelector("#numero6");
const siete = document.querySelector("#numero7");
const ocho = document.querySelector("#numero8");
const nueve = document.querySelector("#numero9");
const cero = document.querySelector("#numero0");
const suma = document.querySelector("#suma");
const resta = document.querySelector("#resta");
const division = document.querySelector("#division");
const multiplicacion = document.querySelector("#multiplicacion");
const ce = document.querySelector("#ce");
const igual = document.querySelector("#igual");
var valor1;
var simbolo;

uno.onclick = function uno () {
    pantalla.value = pantalla.value + "1" 
 
}

dos.onclick = function dos () {
    pantalla.value = pantalla.value + "2"
}

tres.onclick = function tres () {
    pantalla.value = pantalla.value + "3"
}

cuatro.onclick = function cuatro () {
    pantalla.value = pantalla.value + "4"
}

cinco.onclick = function cinco () {
    pantalla.value = pantalla.value + "5"
}

seis.onclick = function seis () {
    pantalla.value = pantalla.value + "6"
}

siete.onclick = function siete () {
    pantalla.value = pantalla.value + "7"
}

ocho.onclick = function ocho () {
    pantalla.value = pantalla.value + "8"
}

nueve.onclick = function nueve () {
    pantalla.value = pantalla.value + "9"
}

cero.onclick = function cero () {
    pantalla.value = pantalla.value + "0"
}

suma.onclick = function suma () {   
    valor1 = pantalla.value;
    simbolo = "1";
    pantalla.value = "";
}

resta.onclick = function resta () {
    valor1 = pantalla.value;
    simbolo = "2";
    pantalla.value = "";
}

division.onclick = function divi () {
    valor1 = pantalla.value;
    simbolo ="4";
    pantalla.value = "";
   
}

multiplicacion.onclick = function multi() {
    valor1 = pantalla.value;
    simbolo ="3";
    pantalla.value = "";

}

ce.onclick = function ce () {
    pantalla.value = "";
    valor1 = "";
    simbolo = "";
}
igual.onclick = function igual () {
    if (simbolo == "1"){
   pantalla.value   = parseInt( valor1 ) + parseInt( pantalla.value );
   simbolo = "0"
    }
    if (simbolo == "2"){
        pantalla.value = parseInt( valor1 ) - parseInt( pantalla.value );
        simbolo = "0"
    }
    if (simbolo == "3") {
        pantalla.value = parseInt( valor1 ) * parseInt(pantalla.value );
        simbolo = "0"
    }
   if (simbolo == "4") {
       pantalla.value = parseInt (valor1 ) / parseInt( pantalla.value);
       simbolo = "0"
   }
  

}
}
