// Función para verificar si el puntaje crediticio es óptimo.
function verificarPuntaje(puntaje) {
    if (puntaje >= 6) {
        return true;
    } else {
        return false;
    }
}

// Función para verificar si los ingresos mensuales son suficientes.
function verificarIngresos(ingresos) {
    if (ingresos >= 350000) {
        return true;
    } else {
        return false;
    }
}

// Función para procesar la solicitud de crédito.
function procesarSolicitud(nombre, puntaje, ingresos) {
    if (verificarPuntaje(puntaje) && verificarIngresos(ingresos)) {
        return `${nombre}, felicidades, eres elegible para un crédito.`;
    } else {
        return `${nombre}, lo siento, no cumples con los requisitos para el crédito.`;
    }
}

// Función para procesar múltiples solicitudes.
function procesarSolicitudes() {
    const numSolicitudes = parseInt(prompt("Ingrese el número de solicitudes a procesar:"));

    for (let i = 1; i <= numSolicitudes; i++) {
        const nombre = prompt("Ingrese su nombre:");
        const puntaje = parseInt(prompt("Ingrese su puntaje crediticio:"));
        const ingresos = parseInt(prompt("Ingrese sus ingresos mensuales:"));

        const resultado = procesarSolicitud(nombre, puntaje, ingresos);
        document.write(resultado);
    }
}