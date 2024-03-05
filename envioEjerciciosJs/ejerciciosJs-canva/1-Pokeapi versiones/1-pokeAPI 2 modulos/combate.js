// COMBATES POKÉMON


const combatButton = document.getElementById("combat-button").addEventListener("click", combat);

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
  const weaknesses1 = weaknesses[pokemon1.mainType.toLowerCase()];

  if (weaknesses1 && weaknesses1.includes(type2)) {
    multiplicadorTipo = 2; // Si el tipo del pokemon1 es débil frente al tipo del pokemon2
  }

  // Calculamos el poder del Pokémon usando la ecuación propuesta
  const power =
    ((HP * (Ataque + AtaqueEspecial)) / (Defensa + DefensaEspecial)) *
    (Velocidad / 75) *
    multiplicadorTipo *
    factorAleatorio;

  return power;
}

function determineWinner(pokemon1, pokemon2) {
  if (!pokemon1 || !pokemon2) {
    return null; // Manejar el caso en que uno de los Pokémon no está definido
  }

  const power1 = calculatePower(pokemon1, pokemon2);
  const power2 = calculatePower(pokemon2, pokemon1);

  if (power1 > power2) {
    return pokemon1;
  } else if (power2 > power1) {
    return pokemon2;
  } else {
    return null;
  }
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
  const winner = determineWinner(pokemon1, pokemon2);
  if (winner) {
    const HP1 = pokemon1.stats[0].base_stat;
    const Ataque1 = pokemon1.stats[1].base_stat;
    const Defensa1 = pokemon1.stats[2].base_stat;
    const AtaqueEspecial1 = pokemon1.stats[3].base_stat;
    const DefensaEspecial1 = pokemon1.stats[4].base_stat;
    const Velocidad1 = pokemon1.stats[5].base_stat;

    const HP2 = pokemon2.stats[0].base_stat;
    const Ataque2 = pokemon2.stats[1].base_stat;
    const Defensa2 = pokemon2.stats[2].base_stat;
    const AtaqueEspecial2 = pokemon2.stats[3].base_stat;
    const DefensaEspecial2 = pokemon2.stats[4].base_stat;
    const Velocidad2 = pokemon2.stats[5].base_stat;

    const multiplicadorTipo1 =
      weaknesses[pokemon2.mainType.toLowerCase()] &&
      weaknesses[pokemon2.mainType.toLowerCase()].includes(
        pokemon1.mainType.toLowerCase()
      )
        ? 2
        : 1;
    const multiplicadorTipo2 =
      weaknesses[pokemon1.mainType.toLowerCase()] &&
      weaknesses[pokemon1.mainType.toLowerCase()].includes(
        pokemon2.mainType.toLowerCase()
      )
        ? 2
        : 1;

    const factorAleatorio1 = 0.85 + Math.random() * 0.3;
    const factorAleatorio2 = 0.85 + Math.random() * 0.3;

    const power1 =
      ((HP1 * (Ataque1 + AtaqueEspecial1)) / (Defensa1 + DefensaEspecial1)) *
      (Velocidad1 / 75) *
      multiplicadorTipo1 *
      factorAleatorio1;
    const power2 =
      ((HP2 * (Ataque2 + AtaqueEspecial2)) / (Defensa2 + DefensaEspecial2)) *
      (Velocidad2 / 75) *
      multiplicadorTipo2 *
      factorAleatorio2;

    const powerEquation1 = `((${HP1} * (${Ataque1} + ${AtaqueEspecial1})) / (${Defensa1} + ${DefensaEspecial1})) * (${Velocidad1} / 75) * ${multiplicadorTipo1} * ${factorAleatorio1}`;
    const powerEquation2 = `((${HP2} * (${Ataque2} + ${AtaqueEspecial2})) / (${Defensa2} + ${DefensaEspecial2})) * (${Velocidad2} / 75) * ${multiplicadorTipo2} * ${factorAleatorio2}`;

    const resultText = `
    <div class="ganador">${pokemon1.name}</div><br>
    <div class="ecuacion">(Power  = (<math xmlns="http://www.w3.org/1998/Math/MathML">
    <mfenced>
        <mtable>
            <mtr>
                <mtd>
                    <mfrac>
                        <mrow>
                            <mo>${HP1}</mo>
                            <mo>×</mo>
                            <mo>(</mo>
                            <mo>${Ataque1}</mo>
                            <mo>+</mo>
                            <mo>${AtaqueEspecial1}</mo>
                            <mo>)</mo>
                        </mrow>
                        <mrow>
                            <mo>${Defensa1}</mo>
                            <mo>+</mo>
                            <mo>${DefensaEspecial1}</mo>
                        </mrow>
                    </mfrac>
                </mtd>
            </mtr>
        </mtable>
    </mfenced>
    <mo>×</mo>
    <mfenced>
        <mtable>
            <mtr>
                <mtd>
                    <mfrac>
                        <mrow>
                            <mo>${Velocidad1}</mo>
                        </mrow>
                        <mn>75</mn>
                    </mfrac>
                </mtd>
            </mtr>
        </mtable>
    </mfenced>
    <mo>×</mo>
    <mo>${multiplicadorTipo1}</mo>
    <mo>×</mo>
    <mo>${factorAleatorio1}</mo>
</math>)</div><br>
    <div class="gana">gana el combate a</div><br>
    <div class="perdedor">${pokemon2.name}</div><br>
    <div class="ecuacion">(Power  = (<math xmlns="http://www.w3.org/1998/Math/MathML">
    <mfenced>
        <mtable>
            <mtr>
                <mtd>
                    <mfrac>
                        <mrow>
                            <mo>${HP2}</mo>
                            <mo>×</mo>
                            <mo>(</mo>
                            <mo>${Ataque2}</mo>
                            <mo>+</mo>
                            <mo>${AtaqueEspecial2}</mo>
                            <mo>)</mo>
                        </mrow>
                        <mrow>
                            <mo>${Defensa2}</mo>
                            <mo>+</mo>
                            <mo>${DefensaEspecial2}</mo>
                        </mrow>
                    </mfrac>
                </mtd>
            </mtr>
        </mtable>
    </mfenced>
    <mo>×</mo>
    <mfenced>
        <mtable>
            <mtr>
                <mtd>
                    <mfrac>
                        <mrow>
                            <mo>${Velocidad2}</mo>
                        </mrow>
                        <mn>75</mn>
                    </mfrac>
                </mtd>
            </mtr>
        </mtable>
    </mfenced>
    <mo>×</mo>
    <mo>${multiplicadorTipo2}</mo>
    <mo>×</mo>
    <mo>${factorAleatorio2}</mo>
</math>)</div>  `;

    document.getElementById("result").innerHTML = resultText;

    main$$.innerHTML = "";

    drawCards([pokemon1, pokemon2]);
  } else {
    document.getElementById("result").textContent = `¡Empate!`;
    drawCards([pokemon1, pokemon2]);
  }
}
