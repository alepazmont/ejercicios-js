/* Usa un bucle for of para recorrer todos los juguetes y elimina los que incluyan la palabra `gato`. 
Recuerda que puedes usar la función `.includes()` para comprobarlo. */

const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

/* for (let toy of toys) {
  if (toy.name.includes("gato")) {
    const index = toys.indexOf(toy);
    toys.splice(index, 1);
  }
} */

/* for (let i of toys) {
  if (toys[i].name.includes("gato")) {
    toys.splice(i, 1);
  }
} */

/* for (let i = toys.length - 1; i >= 0; i--) {
  if (toys[i].name.includes("gato")) {
    toys.splice(i, 1);
  }
}

console.log(toys); */

/* const updatedToys = [];

for (let toy of toys) {
  if (!toy.name.includes("gato")) {
    // Si el nombre del juguete no incluye "gato", lo agregamos al nuevo array
    updatedToys.push(toy);
  }
}

// Sobrescribe el array original con los juguetes actualizados
toys.length = 0;
toys.push(...updatedToys);

console.log(toys); */

const updatedToys = [];

for (let toy of toys) {
  if (!toy.name.includes("gato")) {
    // Si el nombre del juguete no incluye "gato", lo agregamos al nuevo array
    updatedToys.push(toy);
  }
}

// Ahora, "updatedToys" contiene solo los juguetes que no incluyen la palabra "gato"
console.log(updatedToys);