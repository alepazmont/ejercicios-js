const publicKey = "aa29056e5d617dc3350e460867e76ad6"; // Tu clave pública
const privateKey = "4b33a1071550ce0d15ae9aa32da03d21cb587b32"; // Tu clave privada

function generateUrl(timestamp) {
  const hash = CryptoJS.MD5(timestamp + privateKey + publicKey).toString();
  return `http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
}

function calculateTimestamp() {
  // Fecha del 8 de febrero de 2024
  const february8_2024 = new Date("2024-02-08");

  // Fecha actual
  const currentDate = new Date();

  // Calcula la diferencia en milisegundos entre la fecha actual y el 8 de febrero de 2024
  const differenceInMilliseconds = currentDate - february8_2024;

  // Convierte la diferencia de milisegundos a días
  const differenceInDays = Math.floor(
    differenceInMilliseconds / (1000 * 60 * 60 * 24)
  );

  // Suma 1 a la diferencia de días
  const timestamp = differenceInDays + 1;

  return timestamp.toString();
}

// Ejemplo de cómo utilizar la función calculateTimestamp:
const timestamp = calculateTimestamp();
const url = generateUrl(timestamp);
console.log(url);



const main$$ = document.querySelector(".main");

const getCharacters = async () => {
  try {
    const response = await fetch(url);
    const results = await response.json();

    console.log(results.data.results);
    console.log(response.json)
    return results.data.results;
  } catch (error) {
    console.log(error);
  }
};

const mapCharacters = (charactersSinMapear) => {
  return charactersSinMapear.map((character) => ({
    nombre: character.name,
    imagen: character.thumbnail.path + "." + character.thumbnail.extension,
    descripcion: character.description,
  }));
};

const drawCharacters = (characters) => {
  main$$.innerHTML = "";
  for (const character of characters) {
    let characterDiv$$ = document.createElement("div");
    characterDiv$$.className = "main_div";
    characterDiv$$.innerHTML = `
    <h3>${character.nombre}</h3>
    <img src="${character.imagen}" alt="${character.nombre}">
    <p>${character.descripcion}</p>
    `;
    main$$.appendChild(characterDiv$$);
  }
};

const drawInput = (characters) => {
  const input$$ = document.querySelector("input");
  input$$.addEventListener("input", () => {
    searchCharacters(input$$.value, characters);
  });
};

const searchCharacters = (filtro, arraySinFiltrar) => {
  let filteredCharacters = arraySinFiltrar.filter((character) =>
    character.nombre.toLowerCase().includes(filtro.toLowerCase())
  );
  drawCharacters(filteredCharacters);
};

const loadMoreCharacters = async () => {
  try {
    // Incrementa el offset para obtener los siguientes 20 personajes
    const offset = characters.length;
    const timestamp = calculateTimestamp();
    const url = generateUrl(timestamp) + `&offset=${offset}`;

    // Realiza la solicitud a la API con el nuevo offset
    const response = await fetch(url);
    const data = await response.json();
    
    // Agrega los nuevos personajes al arreglo existente
    characters = characters.concat(data.data.results);
    
    // Vuelve a dibujar los personajes en el DOM
    drawCharacters(characters);
  } catch (error) {
    console.error('Error al cargar más personajes:', error);
  }
}

const init = async () => {
  // primero le digo que espero a mi peticion que es digamos la linea importante
  const characters = await getCharacters();
  getCharacters()
  //   console.log("funcion init",characters);
  //  segundo mapeo mis personajes pasandole a la funcion nuestros characters de la linea 24
const charactersMapeados = mapCharacters(characters);
    //   console.log("funcion init despues del map", charactersMapeados);
  // tercer lugar vamos a llamar a mi funcion pintar y le pasaremos por parametro lo que queremos que pinte
    drawCharacters(charactersMapeados); 
  //   vamos a llamar la funcion draw input que me coge mi input, y va a coger a mis character mapeados que es lo que utilizara luego para filtrar
     drawInput(charactersMapeados); 
};
init();
