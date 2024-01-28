/* Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'. */


  const p = document.createElement("p");
  p.textContent = "Este texto está en un párrafo que a su vez está en un div.";
  
  document.body.appendChild(p);