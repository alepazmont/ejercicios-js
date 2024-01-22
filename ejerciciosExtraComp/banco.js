// Ejecuta "npm install" si no lo has hecho antes
/**
 * Tienes que crear una aplicación de banco.
 * El usuario tendrá una cantidad inicial de 100 euros.
 * El programa tendrá un menú que se dibujará y mostrará las siguientes opciones:
 *  1. Extraer dinero:  El programa pedirá al usuario una cantidad de dinero a extraer.
 *                      La cantidad a extraer no puede ser superior a la cantidad que tenga el usuario.
 *                      La cantidad será restada del saldo del usuario.
 *  2. Ingresar dinero: El programa pedirá al usuario una cantidad de dinero a ingresar.
 *                      Esta cantidad se sumará al saldo del usuario.
 *  3. Ver movimientos: Mostrará una lista de los movimientos realizados por el usuario.
 *  4. Salir:           Finalizará la ejecución de la aplicación.
 * 
 * Para pedir una entrada al usuario se usará la función `prompt("Mensaje a enseñar")`
 */

const prompt = require('prompt-sync')({ sigint: true });

// Esta función dibuja el menú
function menu() {
    console.log('Menu ATM');
    console.log('1. Extraer dinero.');
    console.log('2. Ingresar dinero');
    console.log('3. Ver movimientos');

    return prompt('¿Qué opción quiere usar?');
}

// Empieza el ejercicio debajo

let saldo = 100;
let movimientos = [];

