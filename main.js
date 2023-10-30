// esta función es para verificar el puntaje crediticio es optimo.
function verificarPuntaje(puntaje) {
    if (puntaje >= 6) {
        return true;
    } else {
        return false;
    }
}

// esta función es  para verificar ingresos mensuales son suficientes
function verificarIngresos(ingresos) {
    if (ingresos >= 350000) {
        return true;
    } else {
        return false;
    }
}

// esta función es para procesar la solicitud de crédito
function procesarSolicitud(nombre, puntaje, ingresos) {
    if (verificarPuntaje(puntaje) && verificarIngresos(ingresos)) {
        return nombre + ", felicidades, eres elegible para un crédito.   ";
    } else {
        return nombre + ", lo siento, no cumples con los requisitos para el crédito.   ";
    }
}


// y este ciclo es para procesar múltiples solicitudes
for (let i = 1; i < 3; i++) {
    const nombre = prompt("Ingrese su nombre:");
    const nombreEnMayusculas = nombre.toUpperCase();
    

    
    const puntaje = parseInt(prompt("Ingrese su puntaje crediticio:"));
    const ingresos = parseInt(prompt("Ingrese sus ingresos mensuales:"));

    const resultado = procesarSolicitud (nombreEnMayusculas, puntaje, ingresos);
    document.write(resultado);
}