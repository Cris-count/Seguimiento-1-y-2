let Genero = prompt("¿Cuál es tu género?")
let Edad = prompt("¿Cuál es tu edad?")

if (Genero == "Femenino" && Edad <= 29) {
    ayuda = 0
    document.write(`El valor de ayuda mensual es de ${ayuda}`)
} else if (Genero == "Femenino" && Edad >= 30 && Edad <= 49) {
    let ayuda = 100000
    document.write(`El valor de ayuda mensual es de ${ayuda}`)
} else if (Genero == "Femenino" && Edad >= 50) {
    let ayuda = 120000
    document.write(`El valor de ayuda mensual es de ${ayuda}`)
} else if (Genero == "Masculino") {
    let ayuda = 40000
    document.write(`El valor de ayuda mensual es de ${ayuda}`)
}