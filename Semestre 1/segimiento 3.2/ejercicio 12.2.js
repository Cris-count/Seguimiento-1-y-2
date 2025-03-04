let modeloDefectuoso = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];

let numeroModelo = Number(prompt("Ingrese el número de modelo de su carro"));

if (modeloDefectuoso.includes(numeroModelo)) {
    document.write("El automóvil está defectuoso, llevar a garantía");
} else {
    document.write("Su automóvil no está defectuoso");
}