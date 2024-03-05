const main$$ = document.querySelector(".main");

/* const getCharacters = (() => {
    fetch("https://starwars-server.vercel.app/characters")
    .then(response => response.json)
    .then(data => console.log(data));
}) */
const getCharacters = async () => {
  try {
    const response = await fetch(
      "https://starwars-server.vercel.app/characters"
    );
    const result = await response.json();
    console.log(result);
    return result.data.characters;
  } catch (error) {
    console.log(error);
  }
};
/* const mapCharacters = (unmappedCharacters) => {
    console.log("Personajes sin mapear", unmappedCharacters)
    const mappedCharacters = unmappedCharacters.map((character) => ({
        nombre: character.name,
        imagen: character.image,
        rol: character.role
    }))
    console.log(mappedCharacters)
} */
const mapCharacters = (unmappedCharacters) => {
  return unmappedCharacters.map((character) => ({
    nombre: character.name,
    imagen: character.image,
    rol: character.role,
  }));
};

const drawCharacters = (characters) => {
    main$$.innerHTML = "";
      for (const character of characters) {
    /*     let characterDiv$$ = document.createElement("div")
    characterDiv$$.classname = "card"
    main$$.appendChild(characterDiv$$)
    let characterTitle$$ = document.createElement("h2")
    characterTitle$$.classname = "card-name"
    characterTitle$$.innerText = character.nombre  
    characterDiv$$.appendChild(h2$$)

    let characterImg$$ = document.createElement("img")
    characterImg$$.setAttribute("src", character.imagen)
    characterImg$$.setAttribute("alt", character.nombre) */

    let characterDiv$$ = document.createElement("div");
    characterDiv$$.className = "card";
    main$$.appendChild(characterDiv$$);
    characterDiv$$.innerHTML = `
    <h3>${character.nombre}</h3>
    <img src="${character.imagen}" alt="${character.nombre}">
    <p>${character.rol}</p>
    `;
  }
};
const drawInput = (characters) => {
  const input$$ = document.querySelector("input");
  input$$.addEventListener("input", () => {
    searchCharacters(input$$.value, characters);
  });
};
const searchCharacters = (filtro,arraySinFiltrar) => {
    let filteredCharacters = arraySinFiltrar.filter((character)=> character.nombre.toLowerCase().includes(filtro.toLowerCase()))
    drawCharacters(filteredCharacters)
};
const init = async () => {
  const characters = await getCharacters();
  const mappedCharacters = mapCharacters(characters);
  drawCharacters(mappedCharacters);
  drawInput();
};
init();
