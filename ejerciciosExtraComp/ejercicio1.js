// Ejecuta "npm install"
/**
 * Crear un programa que, dado un número, te calcule el factorial de ese número.
 * Por ejemplo:
 * 5 => 5 * 4 * 3 * 2 * 1 = 120
 */

const prompt = require('prompt-sync')({ sigint: true });

const number = parseInt(prompt('Introduzca un número: '));

// Empieza el ejercicio debajo

if ( number >= 0 ) {
    let factorial = 1;

    for (let i ; i >= 1 ; i++ ) {
        factorial *= i;
    }

    console.log(`El factorial de ${number} es ${factorial}`)

} else {
    console.log(`Introduce un número no negativo`)
}

