function seleccioneValorT(tipoLvadora){
    if(tipoLvadora == 1){
        return 3000
    }else {
        return 4000
    }
}

function calcularDescuento(valorH, cantidadLavadoras, tiempoH){
    if(cantidadLavadoras >= 3){
        return (valorH * cantidadLavadoras * tiempoH) * 0.03
    }else {
        return 0
    }
}

function valorApagar(valorH, cantidadLavadoras, tiempoH, descuento){
    return (valorApagar * cantidadLavadoras * tiempoH)-descuento
}

valorApagar( seleccioneValorT(1), 4, 3, calcularDescuento(seleccioneValorT(1), 4, 3))

let opcion = 1
switch(opcion){
    case 1:{
        console.log("Mostrar horas" + seleccioneValorT)
        break
    }
}