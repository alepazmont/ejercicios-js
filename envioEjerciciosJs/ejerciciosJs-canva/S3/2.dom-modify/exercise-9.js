/* Basandote en el siguiente html y javascript,inserta p con el texto 'Voy dentro!', 
dentro de todos los div con la clase .fn-insert-here */

const fill = "Voy dentro!";
const divs = document.querySelectorAll("div.fn-insert-here");

for (div of divs) {
  div.textContent = fill;
}