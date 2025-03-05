let numeroCopias = Number(prompt("Ingrese el número de copias que desea imprimir"));

let precioPorCopia;
let precioTotal;

if (numeroCopias >= 0 && numeroCopias <= 499) {
    let precioPorCopia = 120
    document.write(`total a pagar es de ${precioPorCopia}`)
} else if (numeroCopias >= 500 && numeroCopias <= 749) {
    let precioPorCopia = 100
    document.write(`total a pagar es de ${precioPorCopia}`)
} else if (numeroCopias >= 750 && numeroCopias <= 999) {
    let precioPorCopia = 80
    document.write(`total a pagar es de ${precioPorCopia}`)
} else if (numeroCopias >= 1000) {
    let precioPorCopia = 50 * numeroCopias
    document.write(`total a pagar es de ${precioPorCopia}`)
} 