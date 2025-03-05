let emitePitido = prompt("¿La computadora emite un pitido al iniciarse? (si/no)").toLowerCase();
let discoGira = prompt("¿El disco duro gira? (si/no)").toLowerCase();

if (emitePitido === "si" && discoGira === "si") {
    document.write("Póngase en contacto con el técnico de apoyo");
} else if (emitePitido === "si" && discoGira === "no") {
    document.write("Verificar contactos de la unidad");
} else if (emitePitido === "no" && discoGira === "no") {
    document.write("Traiga la computadora para repararla en la central");
} else if (emitePitido === "no" && discoGira === "si") {
    document.write("Compruebe las conexiones de altavoces");
} else {
    document.write("Entrada no válida. Por favor, responda 'si' o 'no'.");
}