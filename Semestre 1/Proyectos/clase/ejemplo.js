let: identificador = 1
let: numero = 20

const nombre = "Juan"

let: n1 = 10;
console.log(numero)
let: direcion = "Calle 123"

"let es la palabra reservada para declarar variables"
"identificador es el nombre de la variable"
"valor es el valor que se le asigna a la variable"
"const es la palabra reservada para declarar constantes"
"el identificador no puede enpesar con un numero"
"el identificado puede empezar con una letra, un guion bajo o un signo de dolar"
"el let, const y var son palabras reservadas para declarar variables"
"el identificador no puede tener espacios"
"el valor tiene unos tipos de datos o valores"
"los tipos de datos pueden ser: number, string, boolean, object, function, undefined, null, symbol, bigint"


"1 Number: representa valores numericos, tanto enteros como decimales"
let entero = 42;
let decimal = 3.14;

"2 String: representa una secuncia de caracteres, se define entre comillas simples, dobles o backticks"
let texto = "Hola, mundo!";
let texto2 = 'Hola, mundo!';
let texto3 = `Hola, mundo!`;

"3 Boolean: representa un valor logico que puede ser verdadero o falso"
let esVerdadero = true;
let esFalso = false;

"4 Object: representa un objeto, una agrupacion de datos relacionados"
let persona = {
    nombre: "Juan",
    edad: 30
};

"5 Function: representa una funcion"
function saludar() {
    console.log("Hola!");
}

let saludarFlecha = () => {
    console.log("Hola!");
};

"6 Undefined: representa un valor no definido"
let indefinido;
console.log(indefinido); // undefined

"7 Null: representa la ausencia de valor"
let nulo = null;

"8 Symbol: representa un valor unico e inmutable, es utilizado como clave de las propiedades de los objetos"
let simbolo = Symbol("miSimbolo");

"9 BigInt: representa un valor entero de longitud arbitraria"
let diez = 10n;