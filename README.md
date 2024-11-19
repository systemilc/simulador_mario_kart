<h1>Desafio de projeto: Mario Kart.JS</h1>
<p>Projeto desenvolvido acompanhando as aulas da DIO com o instrutor Felipão: Formação Node.js Fundamentals</p>
<p>Realizei algumas melhorias ao código para finalização e entrega final.</p>
<p><a href="https://github.com/digitalinnovationone/formacao-nodejs/tree/main/03-projeto-mario-kart" target="_blank">Acessar o repositório do Projeto Mario Kart</a></p>

<table>
  <tr>
    <td>
      <img src="./docs/header.gif" alt="Mario Kart" width="200">
    </td>
    <td>
      <b>Objetivo:</b>
      <p>Mario Kart é uma série de jogos de corrida desenvolvida e publicada pela Nintendo. Nosso desafio foi criar uma lógica de um jogo de vídeo game para simular corridas de Mario Kart, levando em consideração as regras e mecânicas abaixo.</p>
    </td>
  </tr>
</table>

<h2>Players</h2>
<table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
  <tr>
    <td style="border: 1px solid black; text-align: center;">
      <p>Mario</p>
      <img src="./docs/mario.gif" alt="Mario Kart" width="60" height="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Velocidade: 4</p>
      <p>Manobrabilidade: 3</p>
      <p>Poder: 3</p>
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Peach</p>
      <img src="./docs/peach.gif" alt="Mario Kart" width="60" height="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Velocidade: 3</p>
      <p>Manobrabilidade: 4</p>
      <p>Poder: 2</p>
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Yoshi</p>
      <img src="./docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Velocidade: 2</p>
      <p>Manobrabilidade: 4</p>
      <p>Poder: 3</p>
    </td>
  </tr>
  <tr>
    <td style="border: 1px solid black; text-align: center;">
      <p>Bowser</p>
      <img src="./docs/bowser.gif" alt="Mario Kart" width="60" height="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Velocidade: 5</p>
      <p>Manobrabilidade: 2</p>
      <p>Poder: 5</p>
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Luigi</p>
      <img src="./docs/luigi.gif" alt="Mario Kart" width="60" height="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Velocidade: 3</p>
      <p>Manobrabilidade: 4</p>
      <p>Poder: 4</p>
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Donkey Kong</p>
      <img src="./docs/dk.gif" alt="Mario Kart" width="60" height="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Velocidade: 2</p>
      <p>Manobrabilidade: 2</p>
      <p>Poder: 5</p>
    </td>
  </tr>
</table>

<h3>🕹️ Regras & mecânicas:</h3>

<b>Jogadores:</b>
<input type="checkbox" id="jogadores-item" />
<label for="jogadores-item">O Computador deve receber dois personagens para disputar a corrida em um objeto cada</label>

<b>Pistas:</b>

<ul>
  <li><input type="checkbox" id="pistas-1-item" /> <label for="pistas-1-item">Os personagens irão correr em uma pista aleatória de 5 rodadas</label></li>
  <li><input type="checkbox" id="pistas-2-item" /> <label for="pistas-2-item">A cada rodada, será sorteado um bloco da pista que pode ser uma reta, curva ou confronto</label>
    <ul>
      <li><input type="checkbox" id="pistas-2-1-item" /> <label for="pistas-2-1-item">Caso o bloco da pista seja uma RETA, o jogador deve jogar um dado de 6 lados e somar o atributo VELOCIDADE, quem vencer ganha um ponto</label></li>
      <li><input type="checkbox" id="pistas-2-2-item" /> <label for="pistas-2-2-item">Caso o bloco da pista seja uma CURVA, o jogador deve jogar um dado de 6 lados e somar o atributo MANOBRABILIDADE, quem vencer ganha um ponto</label></li>
      <li><input type="checkbox" id="pistas-2-3-item" /> <label for="pistas-2-3-item">Caso o bloco da pista seja um CONFRONTO, o jogador deve jogar um dado de 6 lados e somar o atributo PODER, quem perder, perde um ponto</label></li>
      <li><input type="checkbox" id="pistas-2-3-item" /> <label for="pistas-2-3-item">Nenhum jogador pode ter pontuação negativa (valores abaixo de 0)</label></li>
    </ul>
  </li>
</ul>

<b>Condição de vitória:</b>
<input type="checkbox" id="vitoria-item" />
<label for="vitoria-item">Ao final, vence quem acumulou mais pontos</label>

---

<h2>🚀 Como rodar o projeto</h2>

<h3>Pré-requisitos:</h3>
<p>Ter o <b>Node.js</b> instalado na sua máquina. Caso não tenha, você pode instalar a partir <a href="https://nodejs.org/" target="_blank">deste link</a>.</p>

<h3>Passo a passo:</h3>
<ol>
  <li><b>Clonar o repositório:</b> Abra o terminal no diretório onde deseja armazenar o projeto e execute o seguinte comando:
    <pre><code>git clone https://github.com/systemilc/simulador_mario_kart.git</code></pre>
  </li>
  <li><b>Instalar as dependências:</b> Navegue até a pasta do projeto e instale as dependências:
    <pre><code>cd simulador_mario_kart</code></pre>
    <pre><code>npm install</code></pre>
  </li>
  <li><b>Executar o projeto:</b> Após as dependências serem instaladas, você pode rodar o simulador com o comando:
    <pre><code>node ./src/index.js</code></pre>
  </li>
  <li><b>Acompanhar a simulação:</b> O jogo será executado no terminal, e você poderá acompanhar a disputa entre os jogadores, conforme as regras do Mario Kart.</li>
</ol>

---

<h2>Agradecimentos</h2>
<p>Agradeço imensamente ao <b>Felipe Silva Aguiar</b>, instrutor da <b>DIO</b>, pelas aulas e pelo acompanhamento durante o desenvolvimento desse projeto. As dicas e o feedback foram essenciais para o meu aprendizado!</p>

<p>Fique à vontade para contribuir com sugestões, melhorias ou feedbacks! 😊</p>
