let opcion = prompt("ingrese una opcion: ") // ventana para ingresar datos

let opcion1 = Number(prompt("ingrese un numero"))

switch(opcion){
    case "gafas": document.write("gafas")
    break
    case "gorra": document.write("gorra")
    break
    case "sepillo": document.write("sepillo")
    break
    default: console.log("error en la elecion")
}


switch(opcion1){
    case "1": document.write('1 $[opcion]')
    break
    case "2": document.write("2 (opcion)")
    break
    case "3": document.write("3 (opcion)")
}