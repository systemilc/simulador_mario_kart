const fs = require('fs');
const prompt = require('prompt-sync')();

const personagensData = JSON.parse(fs.readFileSync('./src/personagens.json', 'utf8')).characters;

function listarPersonagens() {
  console.log("\nEscolha um personagem para cada jogador:");
  personagensData.forEach((personagem, index) => {
    console.log(`${index + 1}. ${personagem.nome}`);
  });
}

function buscarPersonagem(nome) {
  return personagensData.find(personagem => personagem.nome.toLowerCase() === nome.toLowerCase());
}

function inicializarJogadores() {
  listarPersonagens();
  const escolhaPlayer1 = prompt("\nEscolha o personagem para o Jogador 1: ");
  const escolhaPlayer2 = prompt("Escolha o personagem para o Jogador 2: ");

  const player1 = buscarPersonagem(escolhaPlayer1);
  const player2 = buscarPersonagem(escolhaPlayer2);

  if (!player1 || !player2) {
    console.log("Personagem não encontrado. Tente novamente.");
    return inicializarJogadores(); 
  }

  return { player1, player2 };
}

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;
    case random < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
  }

  return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`
  );
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);

    // Sortear bloco
    let block = await getRandomBlock();
    console.log(`Bloco sorteado: ${block}`);

    // Rolar os dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    // Teste de habilidade
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "RETA") {
      totalTestSkill1 = diceResult1 + character1.atributos.velocidade;
      totalTestSkill2 = diceResult2 + character2.atributos.velocidade;

      await logRollResult(
        character1.nome,
        "RETA",
        diceResult1,
        character1.atributos.velocidade
      );

      await logRollResult(
        character2.nome,
        "RETA",
        diceResult2,
        character2.atributos.velocidade
      );
    }

    if (block === "CURVA") {
      totalTestSkill1 = diceResult1 + character1.atributos.manobrabilidade;
      totalTestSkill2 = diceResult2 + character2.atributos.manobrabilidade;

      await logRollResult(
        character1.nome,
        "CURVA",
        diceResult1,
        character1.atributos.manobrabilidade
      );

      await logRollResult(
        character2.nome,
        "CURVA",
        diceResult2,
        character2.atributos.manobrabilidade
      );
    }

    if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.atributos.poder;
      let powerResult2 = diceResult2 + character2.atributos.poder;

      console.log(`${character1.nome} confrontou com ${character2.nome}! 🥊`);

      await logRollResult(
        character1.nome,
        "CONFRONTO",
        diceResult1,
        character1.atributos.poder
      );

      await logRollResult(
        character2.nome,
        "CONFRONTO",
        diceResult2,
        character2.atributos.poder
      );

      if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
        console.log(
          `${character1.nome} venceu o confronto! ${character2.nome} perdeu 1 ponto 🐢`
        );
        character2.PONTOS--;
      } else if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
        console.log(
          `${character2.nome} venceu o confronto! ${character1.nome} perdeu 1 ponto 🐢`
        );
        character1.PONTOS--;
      } else {
        console.log("Confronto empatado! Nenhum ponto foi perdido.");
      }
    }

    // Verificando o vencedor da rodada
    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${character1.nome} marcou um ponto!`);
      character1.PONTOS++;
    } else if (totalTestSkill2 > totalTestSkill1) {
      console.log(`${character2.nome} marcou um ponto!`);
      character2.PONTOS++;
    }

    console.log("-----------------------------");
  }
}

async function declareWinner(character1, character2) {
  console.log("Resultado final:");
  console.log(`${character1.nome}: ${character1.PONTOS} ponto(s)`);
  console.log(`${character2.nome}: ${character2.PONTOS} ponto(s)`);

  if (character1.PONTOS > character2.PONTOS)
    console.log(`\n${character1.nome} venceu a corrida! Parabéns! 🏆`);
  else if (character2.PONTOS > character1.PONTOS)
    console.log(`\n${character2.nome} venceu a corrida! Parabéns! 🏆`);
  else console.log("A corrida terminou em empate!");
}

(async function main() {
  console.log(`🏁🚨 Corrida começando...\n`);

  const { player1, player2 } = inicializarJogadores();

  player1.PONTOS = 0;
  player2.PONTOS = 0;

  await playRaceEngine(player1, player2);
  await declareWinner(player1, player2);
})();
