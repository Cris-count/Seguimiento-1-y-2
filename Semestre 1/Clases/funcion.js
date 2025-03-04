// funcion - bloque de codigo -accion
let numero1 = 2
let numero2 = 3 
// funcion sin parametros y sin retorno 
function sumar(){
    // Implementacion-
    let suma = numero1 + numero2
    console.log(suma)
}
sumar() // call la funcion

function mostrarMensaje(){
    console.log("hola...")
}
mostrarMensaje()


// es la mas usasda ya que me permite reutilizar y llamarla cuantas veces quiera
function sumar2(n1, n2){ // sin valor se llama parametro
    let suma = n1 + n2
    console.log(suma)
}

sumar2(4, 5) // se le acignan valores a los parametros
sumar2(3, 7)

function sumar3(num, num2){
    return num + num2
}

// log es una funcion
console.log (sumar3(3,5))

// funcio parametro y retorno

function mostrar(p ,r){
};
mostrar(3, 5)

let mostrar2 = (p, r) => {
    return p * r;
}
mostrar2 (3, 5)

let mostrar3 = (p, r) => p + r;
mostrar3 (4, 8)

// mostar 3 y 4 son iguales se le puede quitar las llaves y el return por que solo es una linea de codigo
// si tengo un parametro le puedo quitar los parentecis, si tengo mas no se le puede quitar

let mostrar4 = () => 4;

let mostrar5 = x => {
    x = 3;
    x++;
    x--;
}

r = x => x
c = a => a - 1

let f = c(r(3))
console.log (f)

let x = a => a ? 5 : 4
let c = v => v * 2
let w =  c(x(true))