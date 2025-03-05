let tamaño = prompt("Ingrese el tamaño del sándwich (pequeño o grande)").toLowerCase();
let costoSandwich;

if (tamaño === "pequeño") {
    costoSandwich = 6000;
} else if (tamaño === "grande") {
    costoSandwich = 12000;
} else {
    document.write("Tamaño no válido");
    costoSandwich = null;
}

if (costoSandwich !== null) {
    let ingredientes = prompt("Ingrese los ingredientes adicionales separados por comas (tocineta, jalapeño, pavo, queso)").toLowerCase().split(",");
    let costoIngredientes = 0;

    ingredientes.forEach(ingrediente => {
        if (ingrediente.trim() === "tocineta" || ingrediente.trim() === "pavo") {
            costoIngredientes += 3000;
        } else if (ingrediente.trim() === "queso") {
            costoIngredientes += 2500;
        }
    });

    let costoTotal = costoSandwich + costoIngredientes;
    document.write(`El costo total del sándwich es: $${costoTotal}`);
}