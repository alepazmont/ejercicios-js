/*
- while 
- do...while
- for
*/

//let a = 2;

while(/* condición de parada*/ true) {
    /** Qué pasa si no se cumple la condición de parada */
    console.log('Hola');
    a++;

    if (a === 3) {
        break;
    }
}

while (a !== 3) {
    a += 2;
}

while (false) {
    console.log('Hola');
}

do {
    console.log('Hola');
} while (false);


// Contador
/// Con while
let a = 1; // Variable contadora

while (a !== 15 /** Condición de parada */) {
    console.log('Mensaje');
    a += 2; // Sumador

    if (a === 15) {
        continue; // Bucle infinito porque salta la condición de parada
    }
}

/// Con for
for (let a = 2 /** Variable contadora */; a < 15 /** Condición de parada */; a += 2 /** Sumador */) {
    console.log('Mensaje');
}

// Infinito
/// Con while
while (true) {
    console.log('Soy infinito');
}

/// Con for
for (let a = 2 /** Variable contadora */; true /** Condición de parada */; a += 2 /** Sumador */) {
    console.log('Mensaje');
    // break;
}

// Array
//         0  1  2  3
const b = [1, 2, 3, 4];
b[/** Índice que queremos acceder */ 1];

//         0   1      2
const c = [1, true, 'Hola'];

c.push(1, 2, 3, 4, 5, 6); // c = [1, true, 'Hola',1, 2, 3, 4, 5, 6]
const valor /* 'Hola' */ = c.pop(); // c = [1, true]
const sublista /* [1, true] */ = c.slice(0, 2); // Crea una copia, no modifica el original
const numeroDeElementosEnLista /* 3 */ = c.length;
const texto /* "1|true|Hola" */ = c.join('|');
const subtexto /* "1|true" */ = c.slice(0, 2).join('|');
const elementosEliminados /* [true, 'Hola'] */ = c.splice(1, 2, 'Hola2', 'Hola3'); /* c = [1, ''Hola2', 'Hola3']; */
c.splice(1, 0, 'Hola1', 'Hola2', true); /* c = [1, 'Hola1', 'Hola2', true, true, 'Hola'] */
const primerElemento /** 1 */ = c.shift(); /** c = [true, 'Hola'] */
c.unshift(1, 2, 3, 4); /** c = [1, 2, 3, 4, 1, true, 'Hola'] */
c.reverse(); /** c = ['Hola', true, 1] */
c.sort(); // c = [ 1, 'Hola', true ]

const d = [1, 2, 10, 20, 2, 3];
d.sort(); /** c = [ 1, 10, 2, 20, 3 ] */ // Ordena 'alfabéticamente'
d.sort(function(a, b) {
    if (a < b) {
        return -1;
    }
    if (a === b) {
        return 0;
    }
    if (a > b) {
        return 1;
    }
}); /** c = [ 1, 2, 3, 10, 20 ] */
const newArray /** [1, 2, 10, 20, 3, 1, true, 'Hola'] */ = d.concat(c);
const indice /* 1 */ = d.indexOf(2); // Primera posición del elemento
const indice2 /* 4 */ = d.lastIndexOf(2); // Última posición del elemento
const existe /** true */ = d.includes(2); // Si existe o no
const existe2 /** false */ = d.includes('Coca cola');

const numero = prompt('Número'); // numero = 10

// Veces que existe un elemento
let veces = 0;

for (let i = 0; i < d.length; i++) {
    if (d[i] === numero) {
        veces++
    }
}

console.log(`Aparece ${veces} veces`); // Aparece 2 veces
console.log('Aparece ' + veces + ' veces'); // Aparece 2 veces

// String
const texto1 = 'Hola';
const lista /** ['H', 'o', 'l', 'a'] */ = texto1.split('');
const frase = 'Soy un genio de JS';
const lista2 /** ['Soy', 'un', 'genio', 'de', 'JS'] */ = frase.split(' ');
const perro = 'p-e-r-r-o';
const perro2 /** ['p', 'e', 'r', 'r', 'o'] */= perro.split('-');
const perro3 /** perro */ = perro2.join('');

// Condicionales
/// IF 
const valor1 = prompt('Dame un número');

if (valor1 % 2 === 0 /** Condicional siempre tiene que devolver un booleano */) {
    console.log('Es par');
    // Que pasa si valor1 es par
}

/// IF...else
const valor2 = prompt('Dame un número');

if (valor2 % 2 === 0 /** Condicional siempre tiene que devolver un booleano */) {
    console.log('Es par');
    // Que pasa si valor1 es par
} else {
    // Qué se ejecuta si valor2 NO es par
    console.log('Es impar');
}

/// IF...else if...else
const valor2 = prompt('Dame un número');

if (valor2 % 2 === 0 /** Condicional siempre tiene que devolver un booleano */) {
    console.log('Es par');
    // Que pasa si valor1 es par
} else if (valor2 % 3 === 0) {
    console.log('Es divisible entre 3');
} else {
    // Qué se ejecuta si valor2 NO es par
    console.log('Es impar');
}

// Varias respuestas
const valor2 = prompt('Dame un número');

if (valor2 % 2 === 0 /** Condicional siempre tiene que devolver un booleano */) {
    console.log('Es par');
    // Que pasa si valor1 es par
}

if (valor2 % 4 === 0) {
    console.log('Divisible entre 4');
} else {
    console.log('No es divisible entre 4');
}

/// Objetos
const character = {name: 'Jack Sparrow', age: 10, color: 'rojo'};
character.trabajo = 'no'; // Añadir datos
character.age = 25; // Sobreescribir valor
delete character.age; // Eliminar propiedad

const character2 = character; // REFERENCIA!
character2.age = 10; // character.age = 10
character2.patas = 'Si'; // character.patas = 'Si'

const client = {name: 'Ivan'};
const client2 = {name: 'Pepe'};

const clients = [
    {name: 'Ivan'}, {name: 'Pepe'}
]; // listado de clientes

clients.push({name: 'Ana'});
clients[0].name = 'Manuel'; // const clients = [{name: 'Manuel'}, {name: 'Pepe'}, {name: 'Ana'}];

// Funciones
function y /* Nombre de la función */(x /** Parámetros */) {
    return 2 * x + 2; /** Valor de retorno */
}

const variable = y(1); // equivalente al cuerpo de la función: 2 * 1 + 2
const variable2 = y(20); // 2 * 20 + 2
const variable3 = y(300); // 2 * 300 + 2

/*
const clients = [
    {name: 'Ivan'}, {name: 'Pepe'}
]; // listado de clientes
*/

function imprimirListadoDeNombres(clientes) {
    for (let i = 0; i < clientes.length; i++) {
        const cliente = clientes[i];

        console.log(cliente.name);
    }
}

imprimirListadoDeNombres(clients);

function saluda() {
    console.log('Hola');
}

/// Valor por defecto en funciones
function saluda(name = 'Juan Gabriel de todos los santos') {
    console.log(`Hola ${name}, ¿Qué tal?`);
}

const nombres = ['Iván', 'Manuel', 'Paloma', 'Ana', undefined];

for (let i = 0; i < nombres.length; i++) {
    saluda(nombres[i]);
}

nombres.join();

/// Closures - Funciones dentro de funciones
function operar(a) {
    function suma(b) {
        return a + b;
    }

    function resta(b) {
        return a - b;
    }

    function mul(b) {
        return a * b;
    }

    return {
        suma,
        resta, 
        mul
    };
}

console.log(operar(1).suma(2));
console.log(operar(2).mul(3));

/// Objetos avanzados
const cliente = {
    id: 32,
    name: 'Ivan',
    secondName: 'Ceballos',
    age: 12,
    address: 'Calle Virgen del Carmen',
    getFullname: function() {
        return this.name + ' ' + this.secondName;
    }
};

function generarCliente(id, name, sec) {
    let tempClient;
    Object.assign(tempClient, cliente);

    tempClient.name = name;
    tempClient.id = id;
    tempClient.secondName = sec;

    return tempClient;
}

let cliente2;
Object.assign(a, cliente);

cliente2.name = 'Alfredo';
cliente2.getFullname();

console.log(cliente.name);
console.log(cliente.getFullname());

// Propiedades calculadas
const clave = 'Hola';
const objeto = {
    [clave]: '3',
};

const valor3 = objeto[clave] // Accedemos mediante el valor de esa variable

// Bucles remix
const lista1 = [1, 2, 3, 4];
const objeto1 = {
    nombre: 'Juan',
    apellido: 'Gonzalez',
};


/// For in - coger las claves
console.groupCollapsed('For-in');
for (let clave in lista1) {
    console.log(clave, lista1[clave]);
}

for (let clave in objeto1) {
    console.log(clave, objeto1[clave]);
}
console.groupEnd();

/// For of - coger los valores
console.groupCollapsed('For of')
for (let valor of lista1) {
    console.log(valor);
}

for (let valor of objeto1) {
    console.log(valor);
}
