const cartas = [
    { carta: '2', valor: 2 },
    { carta: '3', valor: 3 },
    { carta: '4', valor: 4 },
    { carta: '5', valor: 5 },
    { carta: '6', valor: 6 },
    { carta: '7', valor: 7 },
    { carta: '8', valor: 8 },
    { carta: '9', valor: 9 },
    { carta: '10', valor: 10 },
    { carta: 'J', valor: 10 },
    { carta: 'Q', valor: 10 },
    { carta: 'K', valor: 10 },
    { carta: 'A', valor: 11 } // El valor del As puede ser 1 o 11, aquí se simplifica a 11
];

let manoJugador = [];
let puntajeJugador = 0;
let opcion;

do {
    opcion = prompt("Ingrese una opción: 1. Pedir carta, 2. Plantarse, 3. Salir");
    switch (opcion) {
        case '1':
            const carta = cartas[Math.floor(Math.random() * cartas.length)];
            manoJugador.push(carta);
            puntajeJugador += carta.valor;
            console.log(`Carta: ${carta.carta}, Valor: ${carta.valor}`);
            console.log(`Mano del Jugador: ${manoJugador.map(c => c.carta).join(', ')}`);
            console.log(`Puntaje del Jugador: ${puntajeJugador}`);
            if (puntajeJugador > 21) {
                console.log("¡Te has pasado de 21! Has perdido.");
                opcion = '3'; // Forzar salida del bucle
            }
            break;
        case '2':
            console.log(`Jugador se plantó con ${puntajeJugador} puntos.`);
            opcion = '3'; // Forzar salida del bucle
            break;
        case '3':
            console.log("Gracias por jugar.");
            break;
        default:
            console.log("Opción no válida. Por favor, ingrese 1, 2 o 3.");
    }
} while (opcion !== '3');