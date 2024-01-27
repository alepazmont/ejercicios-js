/* Crea una función llamada ``swap`` que reciba un array y dos parametros que sean indices del array. La función deberá 
intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
resultante.
 */

function swap(array, sale, entra, minuto) {
    if (sale < 0 || sale >= array.length || entra < 0 || entra >= array.length) {
        console.log("Índices inválidos. No se realizará el cambio.");
        return array;
    }
    if (array[entra].titular === true) {
        console.log("El jugador ya está en el campo.")
    } else if (array[sale].titular === true) {
        const cambio = array[sale];
        array[sale] = array[entra];
        array[entra] = cambio;

        array[entra].cambiado = true;
        array[sale].cambiado = true;

        array[sale].titular = true;
        array[entra].titular = false;

        console.log("En el minuto", minuto, "sale", array[sale].nombre, "y entra", array[entra].nombre)
        return array;
    } else {
        console.log("No puede salir un jugador que no está en el campo.")
        return array;
    }
}

const campeonesEspaña2010 = [
/* 0 */ { nombre: 'Iker Casillas', posicion: 'Portero', titular: true },
/* 1 */ { nombre: 'Sergio Ramos', posicion: 'Defensa', titular: true },
/* 2 */ { nombre: 'Carles Puyol', posicion: 'Defensa', titular: true },
/* 3 */ { nombre: 'Gerard Piqué', posicion: 'Defensa', titular: true },
/* 4 */ { nombre: 'Joan Capdevila', posicion: 'Defensa', titular: true },
/* 5 */ { nombre: 'Andrés Iniesta', posicion: 'Centrocampista', titular: true },
/* 6 */ { nombre: 'Xabi Alonso', posicion: 'Centrocampista', titular: true }, // Sale por Fábregas
/* 7 */ { nombre: 'Xavi Hernández', posicion: 'Centrocampista', titular: true },
/* 8 */ { nombre: 'Sergio Busquets', posicion: 'Centrocampista', titular: true },
/* 9 */ { nombre: 'David Villa', posicion: 'Delantero', titular: true }, // Sale por Torres
/* 10 */ { nombre: 'Pedro Rodríguez', posicion: 'Delantero', titular: true }, // Sale por Navas
/* 11 */ { nombre: 'Fernando Torres', posicion: 'Delantero', titular: false }, // Entra por Villa
/* 12 */ { nombre: 'Víctor Valdés', posicion: 'Portero', titular: false },
/* 13 */ { nombre: 'Raúl Albiol', posicion: 'Defensa', titular: false },
/* 14 */ { nombre: 'Jordi Alba', posicion: 'Defensa', titular: false },
/* 15 */ { nombre: 'Cesc Fàbregas', posicion: 'Centrocampista', titular: false }, // Entra por Alonso
/* 16 */ { nombre: 'Jesús Navas', posicion: 'Delantero', titular: false }, // Entra por Rodríguez
/* 17 */ { nombre: 'Fernando Llorente', posicion: 'Delantero', titular: false }
];

console.group("Once inicial:")
for (let i = 0; i < campeonesEspaña2010.length; i++) {
    const jugador = campeonesEspaña2010[i];
    if (jugador.titular) {
        console.log(`${i + 1}: ${jugador.nombre} - ${jugador.posicion}`);
    }
}
console.groupEnd()

console.group("Cambios:") 
swap(campeonesEspaña2010, 10, 16, 60);
swap(campeonesEspaña2010, 6, 15, 87);
swap(campeonesEspaña2010, 9, 11, 106);
console.groupEnd()

console.log("¡Andres Iniesta marca en el minuto 115!")

console.log("PI, PI, PIIIIIIIII\n¡Final del partido!\n¡ESPAÑA CAMPEONA DEL MUNDO!")


console.group("Once final:")
for (let i = 0; i < campeonesEspaña2010.length; i++) {
    const jugador = campeonesEspaña2010[i];
    if (jugador.titular) {
        console.log(`${i + 1}: ${jugador.nombre} - ${jugador.posicion}`);
    }
}
console.groupEnd()

console.group("Jugadores cambiados:")
for (const jugador of campeonesEspaña2010) {
    if (jugador.titular === false && jugador.cambiado === true) {
        console.log(`${jugador.nombre} - ${jugador.posicion}`);
    }
}
console.groupEnd()