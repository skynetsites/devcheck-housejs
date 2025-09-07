// Cria o elemento <style>
const estilo = document.createElement("style");
estilo.type = "text/css";

// Coloca o CSS dentro do <style>
estilo.textContent = `
/* Root de cores e sombras */
:root {
  /* Cores primárias */
  --cor-primaria: #28a745;
  --cor-primaria-hover: #23b345ff;
  --cor-alerta: #fda006;
  --cor-secundaria: #007bff;
  --cor-secundaria-hover: #0056b3;

  /* Fundo e bordas */
  --cor-fundo: #f8f9fa;
  --cor-fundo-claro: #e9ecef;
  --cor-overlay: rgba(0, 0, 0, 0.5);

  /* Texto */
  --cor-desativado: #6c757d;
  --cor-texto-principal: #495057;
  --cor-texto-claro: #ffffff;
  --cor-texto-alerta: #212529;

  /* Narrando */
  --cor-narrando: #00789b;
  --cor-narrando-hover: #00a9c7;
  --cor-narrando-shadow: #016c8dff;

  /* Sombras */
  --box-shadow-hamburger: 0 4px 15px rgba(0, 123, 255, 0.3);
  --box-shadow-narrando: 0 4px 15px var(--cor-narrando);
  --box-shadow-focus: 0 0 0 2px rgba(0, 123, 255, 0.25);
  --box-shadow-sidebar: -2px 0 10px rgba(0, 0, 0, 0.1);

  /* Bordas */
  --border-padrao: 1px solid #ced4da;
  --border-foco: 1px solid var(--cor-secundaria);
}

/* Botão hambúrguer */
.btn-hamburger {
  position: fixed;
  top: 15px;
  right: 15px;
  border: none;
  border-radius: 50%;
  padding: 16px;
  min-width: 45px;
  min-height: 45px;
  width: auto;
  margin: 0;
  z-index: 100;
  display: inline-block;
  animation: bounce 0.6s infinite alternate;
  background-color: var(--cor-primaria);
  border-color: var(--cor-primaria);
  color: var(--cor-texto-claro);
  box-shadow: var(--box-shadow-hamburger);
}

.btn-hamburger:hover {
  background-color: var(--cor-primaria-hover);
}

.btn-hamburger.paused,
.btn-hamburger.paused:hover {
  background-color: var(--cor-alerta);
  border-color: var(--cor-alerta);
  color: var(--cor-texto-alerta);
  animation: none;
}

/* Botão de voz */
.btn-voz,
.btn-voz.ativado {
  background-color: var(--cor-primaria);
  border-color: var(--cor-primaria);
  color: var(--cor-texto-claro);
  padding: 10px 20px;
  margin: 0;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  width: 100%!important;
  min-width: 180px;
  text-align: center;
}

.btn-voz:hover,
.btn-voz.ativado:hover {
  background-color: var(--cor-primaria-hover);
}

.btn-voz.desativado {
  background-color: var(--cor-desativado);
  border-color: var(--cor-desativado);
  color: var(--cor-texto-claro);
}

.btn-voz.pausado {
  background-color: var(--cor-alerta);
  border-color: var(--cor-alerta);
  color: var(--cor-texto-alerta);
}

/* Animação do botão */
@keyframes bounce {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.2); }
  100% { transform: scale(1); }
}

/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  right: -320px;
  width: 320px;
  height: 100vh;
  background: var(--cor-fundo);
  box-shadow: var(--box-shadow-sidebar);
  z-index: 1000;
  transition: right 0.3s ease;
  overflow-y: auto;
}

.sidebar.open {
  right: 0;
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid var(--cor-fundo-claro);
  background: var(--cor-fundo);
}

.sidebar-header h3 {
  margin: 0;
  color: var(--cor-texto-principal);
  font-size: 18px;
}

/* Botão fechar */
.btn-fechar {
  background: none;
  border: none;
  font-size: 24px;
  color: var(--cor-desativado);
  padding: 5px;
  border-radius: 4px;
  transition: all 0.3s ease;
  width: auto;
  margin: 0;
}

.btn-fechar:hover {
  background: var(--cor-fundo-claro);
  color: var(--cor-texto-principal);
}

/* Conteúdo da sidebar */
.sidebar-content {
  padding: 20px;
  text-align: left;
}

/* Overlay */
.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--cor-overlay);
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.sidebar-overlay.active {
  opacity: 1;
  visibility: visible;
}

/* Controles de narrador */
.controles-voz {
  background: var(--cor-fundo);
  padding: 0;
  border-radius: 12px;
  margin-bottom: 20px;
}

.narradores-especificos {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid var(--cor-fundo-claro);
}

.narradores-especificos h4 {
  margin: 0 0 15px 0;
  color: var(--cor-texto-principal);
  font-size: 16px;
  font-weight: 600;
}

.narrador-grupo {
  display: flex;
  align-items: start;
  flex-direction: column;
  margin-bottom: 12px;
  gap: 10px;
}

.narrador-grupo label {
  min-width: 200px;
  font-weight: 500;
  color: var(--cor-texto-principal);
  font-size: 14px;
  margin: 0;
}

.narrador-grupo select {
  flex: 1;
  padding: 8px 12px;
  border: var(--border-padrao);
  border-radius: 6px;
  background-color: white;
  font-size: 14px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
}

.narrador-grupo select:focus,
.narrador-grupo select:hover {
  outline: none;
  border-color: var(--border-foco);
  box-shadow: var(--box-shadow-focus);
}

#select-voz {
  padding: 8px 12px;
  border: var(--border-padrao);
  border-radius: 6px;
  background-color: white;
  font-size: 14px;
  cursor: pointer;
  margin: 0;
  width: 100%;
  min-width: 200px;
}

#voz-atual {
  font-size: 12px;
  color: var(--cor-desativado);
  margin-top: 8px;
  font-weight: 500;
}

/* Alternativa narrando */
.opcao-label.narrando {
  border: 2px solid var(--cor-narrando-hover);
  background-color: var(--cor-narrando);
  box-shadow: var(--box-shadow-narrando)!important;
  border-radius: 5px;
  padding: 5px;
  font-weight: bold;
  transform: translateY(-3px);
}

.opcao-label.narrando:hover {
  background-color: var(--cor-narrando-hover);
  border: 2px solid var(--cor-narrando);
}

.opcao-label.narrando span {
  text-shadow: 0 4px 15px var(--cor-narrando-shadow);
}

/* Responsividade */
@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    right: -100%;
  }

  .btn-hamburger {
    top: 15px;
    right: 15px;
  }
}

/* Controle de volume */
.controle-volume {
  margin-top: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
}

.controle-volume label {
  font-weight: 500;
  color: var(--cor-texto-principal);
}

.controle-volume input[type="range"] {
  flex: 1;
  cursor: pointer;
  height: 6px;
  border-radius: 3px;
  background: var(--cor-secundaria);
  accent-color: var(--cor-primaria);
}

.controle-volume span {
  width: 35px;
  text-align: right;
  font-size: 12px;
  color: var(--cor-desativado);
}

`;
// Adiciona o <style> no <head> da página
document.head.appendChild(estilo);

// ================== INSERE O HTML DO SIDEBAR RIGHT PRIMEIRO ==================
document.body.insertAdjacentHTML(
  "beforeend",
  `
  <div id="sidebar" class="sidebar">
    <div class="sidebar-header">
      <h3>Configurações de Voz</h3>
      <button id="close-sidebar" class="btn-fechar">&times;</button>
    </div>
    <div class="sidebar-content">
      <div class="controles-voz">
        <button class="btn-voz">🔊 Voz Ativada</button>
        <div hidden>
          <select id="select-voz"></select>
          <div id="voz-atual">🔊 Voz atual: Carregando...</div>
        </div>

       <div class="controle-volume">
          <label for="volume-slider">Volume:</label>
          <input type="range" id="volume-slider" min="0" max="1" step="0.05" value="1">
          <span id="volume-label">100%</span>
        </div>

        <div class="narradores-especificos">
          <h4>Narradores Específicos:</h4>
          <div class="narrador-grupo">
            <label for="select-voz-pergunta">Perguntas:</label>
            <select id="select-voz-pergunta"></select>
          </div>
          <div class="narrador-grupo">
            <label for="select-voz-opcoes">Opções:</label>
            <select id="select-voz-opcoes"></select>
          </div>
          <div class="narrador-grupo">
            <label for="select-voz-resposta">Respostas:</label>
            <select id="select-voz-resposta"></select>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="sidebar-overlay" class="sidebar-overlay"></div>
`
);

const btnVoz = document.querySelector(".btn-voz")
const selectVoz = document.getElementById("select-voz")
const vozAtual = document.getElementById("voz-atual")

const selectVozPergunta = document.getElementById("select-voz-pergunta")
const selectVozOpcoes = document.getElementById("select-voz-opcoes")
const selectVozResposta = document.getElementById("select-voz-resposta")

const closeSidebarBtn = document.getElementById("close-sidebar")
const sidebar = document.getElementById("sidebar")
const sidebarOverlay = document.getElementById("sidebar-overlay")

const volumeSlider = document.getElementById("volume-slider")
const volumeLabel = document.getElementById("volume-label")

let volumeAtual = 1
let vozAtivada = true
let vozesDisponiveis = []
let vozSelecionada = null

let vozPergunta = null
let vozOpcoes = null
let vozResposta = null

let filaNarracao = []
let narracaoAtiva = false
let narracaoPausada = false
let indiceNarracaoAtual = 0
let utteranceAtual = null
let textoAtual = ""
let tipoAtual = ""
let narrandoAlternativas = false

// ================== FUNÇÕES ==================

// Slider de volume
//volumeSlider.addEventListener("input", (e) => {
  //volumeAtual = parseFloat(e.target.value);
  //volumeLabel.textContent = `${Math.round(volumeAtual * 100)}%`;

  // Se estava mudo e voltou > 0, desativa mudo
  //if (volumeAtual > 0 && mudoAtivo) {
   // mudoAtivo = false;
    //btnMudo.textContent = "🔊 Som";
  //}

  // Se a narração está ativa, reinicia a fala atual
  //if (narracaoAtiva && filaNarracao[indiceNarracaoAtual]) {
    //speechSynthesis.cancel(); // cancela a fala atual
    //processarFilaNarracao(); // reinicia da posição atual com o novo volume
  //}
//});

function criarUtterance(texto, voz) {
  const utterance = new SpeechSynthesisUtterance(texto)
  utterance.volume = volumeAtual || 1
  utterance.voice = voz
  return utterance
}

function atualizarVozAoVivo(tipo, novaVoz) {
  // Atualiza a voz da variável correta
  switch (tipo) {
    case "geral":
      vozSelecionada = novaVoz;
      break;
    case "pergunta":
      vozPergunta = novaVoz;
      break;
    case "opcoes":
      vozOpcoes = novaVoz;
      break;
    case "resposta":
      vozResposta = novaVoz;
      break;
  }

  // Se tiver narração ativa, reinicia do ponto atual
  if (narracaoAtiva && filaNarracao[indiceNarracaoAtual]) {
    speechSynthesis.cancel(); // cancela a narração atual
    processarFilaNarracao(); // reinicia da posição atual com a nova voz
  }
}


// Slider de volume
volumeSlider.addEventListener("input", (e) => {
  e.preventDefault()

  // Atualiza a variável global de volume
  volumeAtual = Number.parseFloat(e.target.value)
  volumeLabel.textContent = `${Math.round(volumeAtual * 100)}%`

  if (narracaoAtiva && utteranceAtual) {
    // Salva posição atual e texto
    const textoRestante = textoAtual
    const tipoRestante = tipoAtual

    // Cancela fala atual
    speechSynthesis.cancel()

    // Reinicia imediatamente com novo volume
    setTimeout(() => {
      if (vozAtivada && !narracaoPausada) {
        const vozParaUsar = obterVozPorTipo(tipoRestante)
        const utterance = criarUtterance(textoRestante, vozParaUsar)
        utteranceAtual = utterance

        // Mantém os event listeners
        configurarEventListenersUtterance(utterance, tipoRestante)
        speechSynthesis.speak(utterance)
      }
    }, 10)
  }
})

function obterVozPorTipo(tipo) {
  switch (tipo) {
    case "pergunta":
      return vozPergunta
    case "opcoes":
      return vozOpcoes
    case "resposta":
      return vozResposta
    default:
      return vozSelecionada
  }
}

function configurarEventListenersUtterance(utterance, tipo) {
  let opcaoLabel = null
  if (tipo === "opcoes") {
    const letra = textoAtual.split(":")[0].replace("Alternativa ", "").trim()
    opcaoLabel = document.querySelector(`.opcao-label[data-letra="${letra}"]`)
    if (opcaoLabel) opcaoLabel.classList.add("narrando")
  }

  utterance.onend = () => {
    if (opcaoLabel) opcaoLabel.classList.remove("narrando")
    utteranceAtual = null
    indiceNarracaoAtual++

    if (indiceNarracaoAtual < filaNarracao.length && !narracaoPausada) {
      processarFilaNarracao()
    } else {
      narracaoAtiva = false
      narrandoAlternativas = false
    }
  }

  utterance.onerror = () => {
    if (opcaoLabel) opcaoLabel.classList.remove("narrando")
    utteranceAtual = null
    narracaoAtiva = false
    narrandoAlternativas = false
  }
}

function adicionarNaFila(texto, tipo = "geral") {
  filaNarracao.push({ texto, tipo });
}

function limparFilaNarracao() {
  filaNarracao = [];
  indiceNarracaoAtual = 0;
  narracaoAtiva = false;
  speechSynthesis.cancel();
}

function processarFilaNarracao() {
  if (
    !vozAtivada ||
    narracaoPausada ||
    indiceNarracaoAtual >= filaNarracao.length
  ) {
    narracaoAtiva = false;
    return;
  }

  const item = filaNarracao[indiceNarracaoAtual];

  // Seleciona a voz correta
  let vozParaUsar = vozSelecionada;
  switch (item.tipo) {
    case "pergunta":
      vozParaUsar = vozPergunta;
      break;
    case "opcoes":
      vozParaUsar = vozOpcoes;
      break;
    case "resposta":
      vozParaUsar = vozResposta;
      break;
  }

  const utterance = criarUtterance(item.texto, vozParaUsar);

  // Destaca a alternativa se for do tipo 'opcoes'
  let opcaoLabel = null;
  if (item.tipo === "opcoes") {
    // Acha o label correspondente pela letra
    const letra = item.texto.split(":")[0].replace("Alternativa ", "").trim();
    opcaoLabel = document.querySelector(`.opcao-label[data-letra="${letra}"]`);
    if (opcaoLabel) opcaoLabel.classList.add("narrando");
  }

  utterance.onend = () => {
    // Remove a borda após terminar de narrar
    if (opcaoLabel) opcaoLabel.classList.remove("narrando");

    indiceNarracaoAtual++;
    if (indiceNarracaoAtual < filaNarracao.length && !narracaoPausada) {
      processarFilaNarracao();
    } else {
      narracaoAtiva = false;
    }
  };

  utterance.onerror = () => {
    if (opcaoLabel) opcaoLabel.classList.remove("narrando");
    narracaoAtiva = false;
  };

  speechSynthesis.speak(utterance);
}

function pausarNarracao() {
  narracaoPausada = true;
  speechSynthesis.pause();
  atualizarIconeHamburger();
}

function retomarNarracao() {
  if (narracaoPausada) {
    narracaoPausada = false;
    speechSynthesis.resume();

    // Se a narração foi completamente interrompida, reinicia do ponto atual
    if (
      !speechSynthesis.speaking &&
      indiceNarracaoAtual < filaNarracao.length
    ) {
      processarFilaNarracao();
    }

    atualizarIconeHamburger();
  }
}

function simplificarNome(vozNome) {
  // Remove "Microsoft " inicial
  let nome = vozNome.replace("Microsoft ", "").trim();

  // Encontra primeiro índice de "-" ou "Online" ou "("
  const indices = [
    nome.indexOf("-") > -1 ? nome.indexOf("-") : nome.length,
    nome.indexOf("Online") > -1 ? nome.indexOf("Online") : nome.length,
    nome.indexOf("(") > -1 ? nome.indexOf("(") : nome.length,
  ];
  const corte = Math.min(...indices);

  // Corta e pega apenas até duas palavras
  nome = nome.substring(0, corte).trim();
  const partes = nome.split(" ");
  return partes.slice(0, 2).join(" ");
}

function carregarVozes() {
  vozesDisponiveis = speechSynthesis
    .getVoices()
    .filter((v) => v.lang.startsWith("pt"));
  if (vozesDisponiveis.length === 0) return;

  // Define vozes padrão
  vozSelecionada = vozesDisponiveis[0];
  vozPergunta = vozesDisponiveis[4] || vozSelecionada;
  vozOpcoes = vozesDisponiveis[2] || vozSelecionada;
  vozResposta = vozesDisponiveis[3] || vozSelecionada;

  // Preenche os selects com a voz selecionada marcada
  [selectVoz, selectVozPergunta, selectVozOpcoes, selectVozResposta].forEach(
    (el) => {
      if (el) {
        el.innerHTML = vozesDisponiveis
          .map((v) => {
            let selecionada = "";
            if (
              (el === selectVoz && v === vozSelecionada) ||
              (el === selectVozPergunta && v === vozPergunta) ||
              (el === selectVozOpcoes && v === vozOpcoes) ||
              (el === selectVozResposta && v === vozResposta)
            )
              selecionada = "selected";
            return `<option value="${v.name}" ${selecionada}>${simplificarNome(
              v.name
            )}</option>`;
          })
          .join("");
      }
    }
  );
  if (vozAtual) {
    vozAtual.textContent = `🔊 Voz atual: ${simplificarNome(
      vozSelecionada.name
    )}`;
  }
}

speechSynthesis.onvoiceschanged = carregarVozes;
window.addEventListener("load", carregarVozes);

speechSynthesis.onvoiceschanged = () => {
  //console.log("Evento voiceschanged disparado");
  carregarVozes();
};

document.addEventListener("DOMContentLoaded", () => {
  //console.log("DOM carregado, tentando carregar vozes");
  // Tenta carregar imediatamente
  carregarVozes();

  setTimeout(() => {
    //console.log("Tentativa após 100ms");
    carregarVozes();
  }, 100);

  setTimeout(() => {
    //console.log("Tentativa após 500ms");
    carregarVozes();
  }, 500);

  setTimeout(() => {
    //console.log("entativa após 1000ms");
    carregarVozes();
  }, 1000);
});

window.addEventListener("load", () => {
  //console.log("Window load, carregando vozes");
  carregarVozes();
});

function falar(texto) {
  if (!vozAtivada) return;

  const utterance = criarUtterance(item.texto, vozSelecionada);

  // Remove destaque anterior
  document
    .querySelectorAll(".opcao-label")
    .forEach((label) => label.classList.remove("narrando"));

  // Se for tipo "opcoes", destaca a alternativa sendo narrada
  if (item.tipo === "opcoes") {
    // Extrai a letra da alternativa do texto: "Alternativa A: Texto"
    const match = item.texto.match(/Alternativa ([A-Z]):/);
    if (match) {
      const letra = match[1];
      const label = document.querySelector(
        `.opcao-label[data-letra="${letra}"]`
      );
      if (label) label.classList.add("narrando"); // adiciona classe para styles
    }
  }

  speechSynthesis.speak(utterance);
}

function narrarPerguntaCompleta(questao, opcoes) {
  limparFilaNarracao();

  // Adiciona pergunta na fila com tipo específico
  adicionarNaFila(
    `Pergunta ${indiceQuestaoAtual + 1}: ${questao.pergunta}`,
    "pergunta"
  );

  // Adiciona alternativas na fila com tipo específico
  opcoes.forEach((opcao, index) => {
    const letra = String.fromCharCode(65 + index);
    adicionarNaFila(`Alternativa ${letra}: ${opcao.texto}`, "opcoes");
  });

  // Inicia a narração sequencial
  iniciarNarracao();
}

function iniciarNarracao() {
  if (!vozAtivada || filaNarracao.length === 0) return;

  narracaoAtiva = true;
  narracaoPausada = false;
  processarFilaNarracao();
}

function exibirQuestao() {
  const questao = perguntas[indiceQuestaoAtual];
  const opcoesEmbaralhadas = embaralharArray([...questao.opcoes]);

  questoesContainer.innerHTML = `
    <div class="questao">
      <div class="pergunta-header">
        <span class="questao-nivel">Nível: ${questao.nivel}</span>
        <span class="questao-categoria">Tema: ${questao.categoria}</span>
      </div>
      <h3>${indiceQuestaoAtual + 1}. ${questao.pergunta}</h3>
      <div class="opcoes">
        ${opcoesEmbaralhadas
          .map((o, index) => {
            const letra = String.fromCharCode(65 + index);
            return `
            <label class="opcao-label" data-letra="${letra}">
              <input type="radio" name="opcao" value="${o.texto}" data-correta="${o.correta}">
              <span class="opcao-texto">${letra}. ${o.texto}</span>
            </label>`;
          })
          .join("")}
      </div>
      <!-- Botão hambúrguer com ícone de som dinâmico -->
      <button id="btn-hamburger" class="btn-hamburger ${
        narracaoPausada ? "paused" : ""
      }">
        ${getIconeEstadoNarracao()}
      </button>
    </div>
    <div id="feedback-questao"></div>
  `;

  narrarPerguntaCompleta(questao, opcoesEmbaralhadas);

  // Listener das opções
  document.querySelectorAll('input[name="opcao"]').forEach((input) => {
    input.addEventListener("click", () => handleResposta2(input), {
      once: true,
    });
  });

  const hamburgerBtnNovo = document.getElementById("btn-hamburger");
  if (hamburgerBtnNovo) {
    hamburgerBtnNovo.addEventListener("click", abrirSidebar);
  }

  //console.log("Aplicação iniciada!");
}

function handleResposta2(inputSelecionado2) {
  const vozPerguntaTemp = vozPergunta;
  const vozOpcoesTemp = vozOpcoes;
  const vozRespostaTemp = vozResposta;
  const vozSelecionadaTemp = vozSelecionada;

  // Para a narração atual ao clicar em uma alternativa
  limparFilaNarracao();

  vozPergunta = vozPerguntaTemp;
  vozOpcoes = vozOpcoesTemp;
  vozResposta = vozRespostaTemp;
  vozSelecionada = vozSelecionadaTemp;

  //console.log("Vozes preservadas após resposta:");
  //console.log("Pergunta:", vozPergunta?.name);
  //console.log("Opções:", vozOpcoes?.name);
  //console.log("Resposta:", vozResposta?.name);

  const opcaoSelecionada = inputSelecionado2.value;
  const questao = perguntas[indiceQuestaoAtual];
  const opcao = questao.opcoes.find((o) => o.texto === opcaoSelecionada);
  const feedbackQuestaoDiv = document.getElementById("feedback-questao");

  const respostaCorreta = opcao.correta;
  if (respostaCorreta) pontuacao++;

  respostasUsuario.push({
    pergunta: questao.pergunta,
    categoria: questao.categoria,
    nivel: questao.nivel,
    correta: respostaCorreta,
    explicacao: opcao.explicacao,
  });

  feedbackQuestaoDiv.className = `feedback-questao ${
    respostaCorreta ? "correta" : "incorreta"
  }`;
  feedbackQuestaoDiv.innerHTML = `
    <p><strong>${
      respostaCorreta ? "✅ Resposta Correta!" : "❌ Resposta Incorreta"
    }</strong></p>
    <p>${opcao.explicacao}</p>
  `;

  const labelSelecionado = inputSelecionado2.closest(".opcao-label");
  labelSelecionado.classList.add(respostaCorreta ? "correta" : "incorreta");

  // Destacar a resposta correta se a selecionada estiver errada
  if (!respostaCorreta) {
    const inputCorreto = document.querySelector('input[data-correta="true"]');
    if (inputCorreto) {
      inputCorreto.closest(".opcao-label").classList.add("correta");
    }
  }

  // Desabilitar todas as opções
  document
    .querySelectorAll('input[name="opcao"]')
    .forEach((i) => (i.disabled = true));

  const textoFeedback = respostaCorreta
    ? `Muito bem! Resposta correta. ${opcao.explicacao}`
    : `Não foi dessa vez. Resposta incorreta. ${opcao.explicacao}`;

  adicionarNaFila(textoFeedback, "resposta");
  iniciarNarracao();

  proximaQuestaoBtn.style.display = "block";
}

function getIconeEstadoNarracao() {
  if (!vozAtivada) {
    return "🔇"; // Ícone de som desativado quando voz está desativada
  } else if (narracaoPausada) {
    return "🔇"; // Ícone de som pausado quando narração está pausada
  } else {
    return "🔊"; // Ícone de som ativo (padrão quando voz está ativa)
  }
}

function atualizarBotaoVoz() {
  if (!vozAtivada) {
    btnVoz.textContent = "🔇 Voz Desativada";
    btnVoz.classList.add("desativado");
    btnVoz.classList.remove("ativado", "pausado");
  } else if (narracaoPausada) {
    btnVoz.textContent = "🔇 Voz Pausada";
    btnVoz.classList.remove("ativado");
    btnVoz.classList.add("pausado");
  } else {
    btnVoz.textContent = "🔊 Voz Ativada";
    btnVoz.classList.add("ativado");
    btnVoz.classList.remove("pausado", "desativado");
  }

  atualizarIconeHamburger();
}

function atualizarIconeHamburger() {
  const hamburgerBtn = document.getElementById("btn-hamburger");
  if (hamburgerBtn) {
    hamburgerBtn.textContent = getIconeEstadoNarracao();
    hamburgerBtn.classList.toggle("paused", narracaoPausada);
  }
}

btnVoz.addEventListener("click", () => {
  if (narracaoPausada) {
    // Se está pausada, retoma
    retomarNarracao();
  } else if (vozAtivada && (narracaoAtiva || speechSynthesis.speaking)) {
    // Se está ativa e falando, pausa
    pausarNarracao();
  } else {
    // Alterna ativação/desativação
    vozAtivada = !vozAtivada;
    if (!vozAtivada) {
      limparFilaNarracao();
    }
  }

  atualizarBotaoVoz();
});

btnVoz.addEventListener("mouseenter", () => {
  const textoOriginal = btnVoz.textContent;

  if (narracaoPausada) {
    btnVoz.textContent = "🔊 Clique para Retomar";
  } else if (vozAtivada && (narracaoAtiva || speechSynthesis.speaking)) {
    btnVoz.textContent = "⏸️ Clique para Pausar";
  } else if (vozAtivada) {
    btnVoz.textContent = "🔇 Clique para Desativar";
  } else {
    btnVoz.textContent = "🔊 Clique para Ativar";
  }

  btnVoz.dataset.textoOriginal = textoOriginal;
});

/*
btnVoz.addEventListener("mouseleave", () => {
  if (btnVoz.dataset.textoOriginal) {
    btnVoz.textContent = btnVoz.dataset.textoOriginal;
    delete btnVoz.dataset.textoOriginal;
  } else {
    atualizarBotaoVoz();
  }
});
*/

window.addEventListener("beforeunload", () => {
  // Salva o índice atual da narração e se estava pausada
  sessionStorage.setItem("indiceNarracaoAtual", indiceNarracaoAtual);
  sessionStorage.setItem("narracaoPausada", narracaoPausada);
  sessionStorage.setItem("vozAtivada", vozAtivada);

  // Pausa ou cancela a narração quando o usuário sai ou recarrega a página
  narracaoPausada = true;
  speechSynthesis.pause();
  // Se quiser cancelar completamente:
  // speechSynthesis.cancel()
});

// ================== FUNÇÕES DO SIDEBAR ==================

function abrirSidebar() {
  sidebar.classList.add("open");
  sidebarOverlay.classList.add("active");
  document.body.style.overflow = "hidden"; // Previne scroll do body
}

function fecharSidebar() {
  sidebar.classList.remove("open");
  sidebarOverlay.classList.remove("active");
  document.body.style.overflow = ""; // Restaura scroll do body
}

// Fechar sidebar com tecla ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && sidebar.classList.contains("open")) {
    fecharSidebar();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (selectVoz) {
    selectVoz.addEventListener("change", (e) => {
      const v = vozesDisponiveis.find((voz) => voz.name === e.target.value);
      if (v) atualizarVozAoVivo("geral", v);
    });
  }

  if (selectVozPergunta) {
    selectVozPergunta.addEventListener("change", (e) => {
      const v = vozesDisponiveis.find((voz) => voz.name === e.target.value);
      if (v) atualizarVozAoVivo("pergunta", v);
    });
  }

  if (selectVozOpcoes) {
    selectVozOpcoes.addEventListener("change", (e) => {
      const v = vozesDisponiveis.find((voz) => voz.name === e.target.value);
      if (v) atualizarVozAoVivo("opcoes", v);
    });
  }

  if (selectVozResposta) {
    selectVozResposta.addEventListener("change", (e) => {
      const v = vozesDisponiveis.find((voz) => voz.name === e.target.value);
      if (v) atualizarVozAoVivo("resposta", v);
    });
  }

  if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener("click", fecharSidebar);
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", fecharSidebar);
  }
});

// ==================== Para a narração na análise final ====================
const analiseFinalDiv = document.getElementById("analise-final");
if (analiseFinalDiv) {
  const observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
      if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
        // Conteúdo foi adicionado → apenas para a narração
        narracaoPausada = true;
        narracaoAtiva = false;
        speechSynthesis.cancel(); // cancela a narração atual
      }
    }
  });

  observer.observe(analiseFinalDiv, { childList: true, subtree: true });
}
