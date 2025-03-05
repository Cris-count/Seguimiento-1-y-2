let edad = 10

edad >= 15 ? console.log(`puedes pasar`) : console.log(`no puedes pasar`)

let numero = 8;

numero < 0 ? console.log(`negativo`) : console.log(`positivo`)

let OcuapcionComputador = true

let NumeroCoomputador = 5

let mensaje = OcuapcionComputador ? `El computador ${NumeroCoomputador} esta ocupado` : `El computador ${NumeroCoomputador} esta desocupado`
console.log(mensaje)

const usuario = "Cris_14"
const password = "5647"

usuario == "Cris_14" && password == "5647" ? console.log(`Bienvenido`) : console.log(`Usuario o contraseña incorrecta`)

let Peatones = "rojo"

Peatones == "verde" ? console.log(`El semaforo esta ${Peatones} puede pasar`) : console.log(`El semaforo esta ${Peatones} no puede pasar`)

// uso del If

let pulsaciones = 60

if (pulsaciones >= 60){
    console.log(`tus pulsaciones son de ${pulsaciones} estas entrando en bradicardia`)
}

let TipoCliente = "black"

if (TipoCliente == "white"){
    console.log(`tines acceso a las maquinas del establecimiento`)
}else if (TipoCliente == "black"){
    console.log(`tines acceso a las maquinas del establecimiento y al spa`)
}else{
    console.log(`No puede entra`)
}

let UsuarioBaseDatos = "Cris_14"
let PasswordBaseDatos = "5647"
let Usuario = "Cris_14"
let Password = "5647"
let Apodo = "Cristian"

if (UsuarioBaseDatos == Usuario && PasswordBaseDatos == Password){
    console.log(`${Apodo} Bienvenido, selecione una opcion`)
}else{
    console.log(`Usuario o contraseña incorrecta`)
}

let Dispara = false
let Recarga = true
let moverse = false

if(Dispara){
    console.log(`El personaje dispara`)
}else if (Recarga){
    console.log(`El personaje recarga`)
}else if (moverse){
    console.log(`El personaje se mueve`)
}else {
    console.log(`El personaje esta quieto`)
}


let EstadoLicuadora = true
let velocidad = 2

if (EstadoLicuadora){
    console.log(`La licuadora esta encendida`)
} if (velocidad == 1){
    console.log(`La licuadora esta en velocidad baja`)
} else if (velocidad == 2){
    console.log(`La licuadora esta en velocidad media`)
} else if (velocidad == 3){
    console.log(`La licuadora esta en velocidad alta`)
} else{
    console.log(`La licuadora no esta enchufada`)
}

let dia = "jueves"
let hora = "10:30 am"
let cita = "hospital"

if (dia == "jueves"){
    console.log(`Tienes cita el dia ${dia} a las ${hora} en el ${cita}`)
}