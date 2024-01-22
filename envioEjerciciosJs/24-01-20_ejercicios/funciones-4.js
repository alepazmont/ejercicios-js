/**
 * Parte 1.Crear un objeto literal persona con nombre y edad y un método (función propia de un objeto) que indique si la persona es mayor de edad
 */

// Inicio parte 1

let persona = {
  name: "Manuel",
  age: 34,
  esMayorDeEdad: function () {
    return this.age >= 18;
  },
};
console.group("Parte 1");
console.log(persona)
console.groupEnd();

// Fin parte 1

/**
 * Parte 2. Crear una función que, dado un nombre y una edad, genere el objeto anterior (nombre, edad y función) con esos datos.
 * Por ejemplo:
 *
 * generarPersona('Iván', 18) devolvería:
 * {
 *  nombre: 'Iván',
 *  edad: 18,
 *  esMayorDeEdad()
 * }
 */

// Inicio parte 2

function generarPersona(name, age) {
  return {
    name: name,
    age: age,
    esMayorDeEdad: function () {
      return this.age >= 18;
    },
  };
}

let nuevaPersona = generarPersona("Iván", 18);
console.group("Parte 2");
console.log(nuevaPersona.name);
console.log(nuevaPersona.age);
console.log(nuevaPersona.esMayorDeEdad());
console.groupEnd();

// Fin parte 2

/**
 * Parte 3. Crea un array con varias personas
 */

// Inicio parte 3

let listaPersonas = [
    
        generarPersona ("Jesús", 19,),
        generarPersona ("Luis", 22,),
        generarPersona ("Ana", 16,),
        
];
console.group("Parte 3");
for (let persona of listaPersonas) {
    console.log(persona.name);
}
console.groupEnd();


// Fin parte 3

/**
 * Parte 4. Crear una función que, dado el listado de la parte 3, devuelva la edad promedio de todas las personas.
 */

// Inicio parte 4

function sumarEdades(a) {
    let resultadoSuma = 0;

    for (let i = 0; i < a.length; i++) {
        resultadoSuma += a[i].age;
    }
    return resultadoSuma;

}
function calcularEdadPromedio(a) {

   let suma = sumarEdades(a)
   let promedio = suma / a.length

   return promedio;
   
}

console.group("Parte 4");
console.log(`La suma de las edades de las personas de listaPersonas es ${sumarEdades(listaPersonas)}`);
console.log(`El promedio de las edades de las personas de listaPersonas es ${calcularEdadPromedio(listaPersonas)}`);
console.groupEnd();

// Fin parte 4
