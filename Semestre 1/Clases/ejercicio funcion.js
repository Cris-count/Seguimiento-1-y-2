function procesar(n, f){
    return n + f
}
function procesar2(m){
    return m + 5
}

console.log( procesar( procesar2(1)+ 3, procesar2(2)))