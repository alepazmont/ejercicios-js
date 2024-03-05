const main$$ = document.querySelector(".main");
const original150 = [];
const loader$$ = document.getElementById("loader-screen");
let isFirstLoad = true;

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const showLoader = () => {
  loader$$.style.display = "block";
};

const hideLoader = () => {
  loader$$.style.display = "none";
};

const getPokemon = async () => {
  try {
    if (isFirstLoad) {
      showLoader();
    }

    await new Promise((resolve) => setTimeout(resolve, 3000));
    for (let i = 1; i < 151; i++) {
      const singlePokemonResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${i}`
      );
      const singlePokemonData = await singlePokemonResponse.json();
      const pokemon = {
        id: singlePokemonData.id,
        name: capitalizeFirstLetter(singlePokemonData.name),
        sprite: singlePokemonData.sprites.other.dream_world.front_default,
        mainType: capitalizeFirstLetter(singlePokemonData.types[0].type.name),
        type: singlePokemonData.types
          .map((type) => capitalizeFirstLetter(type.type.name))
          .join(", "),
        abilities: singlePokemonData.abilities.map((ability) =>
          capitalizeFirstLetter(ability.ability.name)
        ),
        stats: singlePokemonData.stats,
        exp: singlePokemonData.base_experience,
        sound: singlePokemonData.cries.legacy,
      };
      pokemon.abilities = pokemon.abilities.join("<br>");
      original150.push(pokemon);
    }

    if (isFirstLoad) {
      hideLoader();
      isFirstLoad = false;
    }
  } catch (error) {
    console.log(error);
  }
};

const drawCards = (pokemon) => {
  main$$.innerHTML = "";
  for (const poke of pokemon) {
    let characterDiv$$ = document.createElement("div");
    characterDiv$$.className = "card " + poke.mainType;
    characterDiv$$.innerHTML = `
    <h3>#${poke.id} ${poke.name} <img class="iconType ${poke.mainType}" src="img/icons/${poke.mainType}.svg" alt="Tipo ${poke.mainType}"></h3>
    <p class="exp">Exp. Inicial ${poke.exp}</p>
    <img class="pokeImg" src="${poke.sprite}" alt="${poke.name}">
    <div class="cardInfo">
    <table>
      <tr>
        <td>
          <p><b>Tipo:</b><br>
          ${poke.type}</p><br>
          <p><b>Habilidades:</b><br>
          ${poke.abilities}</p>
        </td>
          <td>
          <p><b>Estadísticas:</b><br>
          HP: ${poke.stats[0].base_stat}<br>
          Ataque: ${poke.stats[1].base_stat}<br>
          Defensa: ${poke.stats[2].base_stat}<br>
          Ataq. Esp.: ${poke.stats[3].base_stat}<br>
          Def. Esp.: ${poke.stats[4].base_stat}<br>
          Velocidad: ${poke.stats[5].base_stat}<br>
          </p>
         </td>
      </tr>
    </table>
    
    </div>
    `;
    characterDiv$$.addEventListener("click", () => {
      playPokemonSound(poke.sound);
    });
    main$$.appendChild(characterDiv$$);
  }
};

const drawInput = () => {
  const input$$ = document.querySelector("#search input[type='text']");
  input$$.addEventListener("input", () => {
    searchPokemon(input$$.value);
  });
};

const searchPokemon = (filtro) => {
  let filteredPokemon = original150.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(filtro.toLowerCase())
  );
  drawCards(filteredPokemon);
};

const drawSelector = () => {
  const selector$$ = document.querySelector("select");
  selector$$.addEventListener("change", () => {
    filterType(selector$$.value);
  });
};

const filterType = (filtro) => {
  if (filtro === "default") {
    drawCards(original150);
  } else {
    let filteredType = original150.filter((pokemon) => {
      return (
        pokemon.mainType.toLowerCase() === filtro.toLowerCase() ||
        pokemon.type.toLowerCase().includes(filtro.toLowerCase())
      );
    });
    drawCards(filteredType);
  }
};

const playPokemonSound = (soundUrl) => {
  if (soundUrl) {
    const audio = new Audio(soundUrl);
    audio.volume = 0.2;
    audio.play();
  } else {
    console.log("El Pokémon no tiene sonido registrado.");
  }
};

const init = async () => {
  await getPokemon();
  drawCards(original150);
  drawInput();
  drawSelector();
  fillPokemonSelects();
};

init();

function fillPokemonSelects() {
  const pokemonSelect1 = document.getElementById("pokemon1");
  const pokemonSelect2 = document.getElementById("pokemon2");
  for (const pokemon of original150) {
    const option1 = document.createElement("option");
    option1.value = pokemon.name;
    option1.textContent = pokemon.name;
    const option2 = document.createElement("option");
    option2.value = pokemon.name;
    option2.textContent = pokemon.name;
    pokemonSelect1.appendChild(option1);
    pokemonSelect2.appendChild(option2);
  }
}

document.getElementById("combat-button").addEventListener("click", combat);








// COMBATES POKÉMON

const weaknesses = {
  Normal: ["Fighting"],
  Fighting: ["Flying", "Psychic", "Fairy"],
  Flying: ["Electric", "Ice", "Rock"],
  Poison: ["Ground", "Psychic"],
  Ground: ["Water", "Grass", "Ice"],
  Rock: ["Fighting", "Ground", "Steel", "Water", "Grass"],
  Bug: ["Flying", "Rock", "Fire"],
  Ghost: ["Ghost", "Dark"],
  Steel: ["Fighting", "Ground", "Fire"],
  Fire: ["Ground", "Rock", "Water"],
  Water: ["Grass", "Electric"],
  Grass: ["Flying", "Poison", "Bug", "Fire", "Ice"],
  Electric: ["Ground"],
  Psychic: ["Bug", "Ghost", "Dark"],
  Ice: ["Fighting", "Rock", "Steel", "Fire"],
  Dragon: ["Ice", "Dragon", "Fairy"],
  Dark: ["Fighting", "Bug", "Fairy"],
  Fairy: ["Poison", "Steel", "Fire"],
};

function calculatePower(pokemon1, pokemon2) {
  const HP = pokemon1.stats[0].base_stat;
  const Ataque = pokemon1.stats[1].base_stat;
  const Defensa = pokemon1.stats[2].base_stat;
  const AtaqueEspecial = pokemon1.stats[3].base_stat;
  const DefensaEspecial = pokemon1.stats[4].base_stat;
  const Velocidad = pokemon1.stats[5].base_stat;

  // Factor aleatorio entre 0.85 y 1.15
  const factorAleatorio = 0.85 + Math.random() * 0.3;

  // Calculamos el multiplicador de tipo
  let multiplicadorTipo = 1;
  const type2 = pokemon2.mainType.toLowerCase();
  const weaknesses1 = weaknesses[pokemon1.mainType];

  if (weaknesses1 && weaknesses1.includes(type2)) {
    multiplicadorTipo = 2; // Si el tipo del pokemon1 es débil frente al tipo del pokemon2
  } else {
    const weaknesses2 = weaknesses[pokemon2.mainType];
    if (weaknesses2 && weaknesses2.includes(pokemon1.mainType.toLowerCase())) {
      multiplicadorTipo = 0.5; // Si el tipo del pokemon2 es débil frente al tipo del pokemon1
    }
  }

  // Calculamos el poder del Pokémon usando la ecuación propuesta
  const poder =
    ((HP * (Ataque + AtaqueEspecial)) / (Defensa + DefensaEspecial)) *
    (Velocidad / 75) *
    multiplicadorTipo *
    factorAleatorio;

  return {
    power: poder,
    equation: `(${HP} * (${Ataque} + ${AtaqueEspecial})) / (${Defensa} + ${DefensaEspecial}) * (${Velocidad} / 75) * ${multiplicadorTipo} * ${factorAleatorio.toFixed(2)}`,
    typeMultiplier: multiplicadorTipo
  };
}

function combat() {
  const pokemon1Name = document.getElementById("pokemon1").value;
  const pokemon2Name = document.getElementById("pokemon2").value;
  if (!pokemon1Name || !pokemon2Name) {
    alert("Por favor, selecciona dos Pokémon para combatir.");
    return;
  }
  const pokemon1 = original150.find((pokemon) => pokemon.name === pokemon1Name);
  const pokemon2 = original150.find((pokemon) => pokemon.name === pokemon2Name);
  const { power: power1, equation: equation1, typeMultiplier: typeMultiplier1 } = calculatePower(pokemon1, pokemon2);
  const { power: power2, equation: equation2, typeMultiplier: typeMultiplier2 } = calculatePower(pokemon2, pokemon1);

  const winner = power1 > power2 ? pokemon1 : power2 > power1 ? pokemon2 : null;
  if (winner) {
    const resultText = `<span class="ganador">${winner.name}<br>Power: ${winner === pokemon1 ? power1.toFixed(2) : power2.toFixed(2)} (Power Equation: ${winner === pokemon1 ? equation1 : equation2}, Type Multiplier: ${winner === pokemon1 ? typeMultiplier1 : typeMultiplier2})</span><br><span class="gana">gana el combate a</span><br><span class="perdedor">${winner === pokemon1 ? pokemon2.name : pokemon1.name}<br>Power: ${winner === pokemon1 ? power2.toFixed(2) : power1.toFixed(2)} (Power Equation: ${winner === pokemon1 ? equation2 : equation1}, Type Multiplier: ${winner === pokemon1 ? typeMultiplier2 : typeMultiplier1})</span>`;
    document.getElementById("result").innerHTML = resultText;

    main$$.innerHTML = "";

    drawCards([pokemon1, pokemon2]);
  } else {
    document.getElementById("result").textContent = `¡Empate!`;
    drawCards([pokemon1, pokemon2]);
  }
}

