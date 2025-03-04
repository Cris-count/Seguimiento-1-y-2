let operador = prompt("Ingrese su operador (claro, tigo, movistar)").toLowerCase();
let minutosInternacionales = Number(prompt("Ingrese la cantidad de minutos internacionales consumidos"));

let cargoFijo, valorMinuto, valorPaqueteDatos;

if (operador === "tigo") {
    cargoFijo = 45000;
    valorMinuto = 200;
    valorPaqueteDatos = 12000;
} else if (operador === "claro") {
    cargoFijo = 30000;
    valorMinuto = 100;
    valorPaqueteDatos = 18000;
} else if (operador === "movistar") {
    cargoFijo = 40000;
    valorMinuto = 250;
    valorPaqueteDatos = 8000;
} else {
    document.write("Operador no válido");
    cargoFijo = null;
}

if (cargoFijo !== null) {
    let costoTotal = cargoFijo + (valorMinuto * minutosInternacionales) + valorPaqueteDatos;
    document.write(`El costo total es: $${costoTotal}`);
}