let Mensualidad1 = 18000
let Mersualidad2 = 35000
let Mensualidad3 = 86000

let Mensualidad = prompt("bienvenido al gimnasio ---, ingrese el numero de la mensualidad que desea pagar (1 (15 Dias), 2 (30 Dias), 3 (3 Meses))")

if (Mensualidad == 1){
    document.write(`El valor de la Mensualidad es de ${Mensualidad1}`)
} else if (Mensualidad == 2){
    document.write(`El valor de la Mensualidad es de ${Mersualidad2}`)
} else if (Mensualidad == 3){
    document.write(`El valor de la mensualidad es de ${Mensualidad3}`)
}