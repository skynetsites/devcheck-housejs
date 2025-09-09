// ================== Insere o style CSS na <style> no <head> ==================

// Cria o elemento <style>
const estilo = document.createElement("style");
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
  --box-shadow-label: 0 4px 10px rgba(0, 0, 0, 0.2);

  /* Bordas */
  --border-padrao: 1px solid #ced4da;
  --border-foco: 1px solid var(--cor-secundaria);
}

/* Tirar borda de contorno ao focar */
input,
button {
  outline: none;
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

/* Botão de voz */
#btnMute {
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

#btnMute:hover {
  background-color: var(--cor-primaria-hover);
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
  right: -300px;
  width: 300px;
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
.opcao-label.narrando.correta,
.opcao-label.narrando.incorreta {
    box-shadow: var(--box-shadow-label) !important;
    font-weight: normal;
    transform: translateY(0);
}

.opcao-label.narrando {
  border: 2px solid var(--cor-narrando-hover);
  background-color: var(--cor-narrando);
  box-shadow: var(--box-shadow-narrando) !important;
  border-radius: 5px;
  padding: 5px;
  font-weight: bold;
  transform: translateY(-3px);
}

.opcao-label.narrando:hover {
  background-color: var(--cor-narrando-hover);
  border: 2px solid var(--cor-narrando);
}

.opcao-label.narrando.correta:hover,
.opcao-label.narrando.incorreta:hover {
  transform: translateY(-3px) !important;
}

.opcao-label.narrando.correta:hover {
  background-color: #273f2f;
  border-color: #3a8652f5;
}

.opcao-label.narrando.incorreta:hover {
  background-color: #5e2c2c;
  border-color: #ad4646ec;
}

.opcao-label.narrando span {
  text-shadow: 0 4px 15px var(--cor-narrando-shadow);
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

/* Responsividade */
@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    right: -100%;
  }

  .btn-hamburger {
    top: 15px;
    right: 15px;
    font-size: 22px;
  }
  
  #btnMute {
    padding: 15px 20px;
    font-size: 18px;
  }
}
`;
document.head.appendChild(estilo);

// ================== Insere o HTML do sidebar primeiro ==================
document.body.insertAdjacentHTML(
  "beforeend",
  `
  <div id="sidebar" class="sidebar">
    <div class="sidebar-header">
      <h3>Configurações de Voz</h3>
      <button id="sidebar-close" class="btn-fechar">&times;</button>
    </div>
    <div class="sidebar-content">
      <div class="controles-voz">
        <button id="btnMute">🔇 Desativar Narrador</button>
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
            <label for="select-voz-pergunta">Pergunta:</label>
            <select id="select-voz-pergunta"></select>
          </div>
          <div class="narrador-grupo">
            <label for="select-voz-opcoes">Alternativas:</label>
            <select id="select-voz-opcoes"></select>
          </div>
          <div class="narrador-grupo">
            <label for="select-voz-resposta">Resposta:</label>
            <select id="select-voz-resposta"></select>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Botão hambúrguer com ícone de som dinâmico -->
  <button style="display:none" class="btn-hamburger">🔊</button>
  <div id="sidebar-overlay" class="sidebar-overlay"></div>
`
);

// ==================== VARIÁVEIS GLOBAIS ====================

const volumeSlider = document.getElementById("volume-slider");
const volumeLabel = document.getElementById("volume-label");

const btnSidebarClose = document.getElementById("sidebar-close");
const btnMute = document.getElementById("btnMute");

const vozAtual = document.getElementById("voz-atual");

const selectVoz = document.getElementById("select-voz");
const selectVozPergunta = document.getElementById("select-voz-pergunta");
const selectVozOpcoes = document.getElementById("select-voz-opcoes");
const selectVozResposta = document.getElementById("select-voz-resposta");

const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebar-overlay");

const analiseFinalDiv = document.getElementById("analise-final");

let volumeAtual = 1;

let vozAtivada = true;
let vozesDisponiveis = [];
let vozSelecionada = null;
let vozPergunta = null;
let vozOpcoes = null;
let vozResposta = null;

let filaNarracao = [];

let narradorMutado = false;
let narracaoAtiva = false;
let narracaoPausada = false;

let indiceNarracaoAtual = 0;

let previousVolume = volumeAtual;

let narracaoAtivaNasPerguntas = false;

// ================== FUNÇÕES ==================

// criar botão MUTE (se quiser usar o botão já existente, adapte o seletor)
const controlesVozDiv = document.querySelector(".controles-voz");
if (!btnMute) {
  btnMute = document.createElement("button");
  btnMute.id = "btnMute";
  btnMute.textContent = "🔇 Desativar Narrador";
  if (controlesVozDiv)
    controlesVozDiv.insertBefore(btnMute, controlesVozDiv.firstChild);
}

// Substitui a implementação anterior por esta, que delega ao speakFilaItem
function processarFilaNarracao() {
  if (
    !vozAtivada ||
    narracaoPausada ||
    indiceNarracaoAtual >= filaNarracao.length
  ) {
    narracaoAtiva = false;
    return;
  }
  // Fala o item atual da fila
  speakFilaItem(indiceNarracaoAtual);
}

function speakFilaItem(index) {
  if (!filaNarracao[index]) return;

  const item = filaNarracao[index];

  // Seleciona a voz correta
  let vozParaUsar = vozSelecionada;
  switch (item.tipo) {
    case "pergunta":
      vozParaUsar = vozPergunta || vozSelecionada;
      break;
    case "opcoes":
      vozParaUsar = vozOpcoes || vozSelecionada;
      break;
    case "resposta":
      vozParaUsar = vozResposta || vozSelecionada;
      break;
  }

  // Cria utterance (criarUtterance usa volumeAtual, que refletirá o estado mutado)
  const utter = criarUtterance(item.texto, vozParaUsar);
  utteranceAtual = utter; // expõe globalmente para controles

  // Função que aplica destaque às alternativas
  function aplicarDestaqueOpcao(opcaoLabel) {
    if (!narradorMutado && opcaoLabel) {
      opcaoLabel.classList.add("narrando");
    }
  }

  // Função que remove destaque de alternativas
  function removerDestaqueOpcao(opcaoLabel) {
    if (opcaoLabel) {
      opcaoLabel.classList.remove("narrando");
    }
  }

  // Destacar alternativa
  let opcaoLabel = null;
  if (item.tipo === "opcoes") {
    const match = item.texto.match(/Alternativa ([A-Z]):/);
    if (match) {
      const letra = match[1];
      opcaoLabel = document.querySelector(
        `.opcao-label[data-letra="${letra}"]`
      );
      aplicarDestaqueOpcao(opcaoLabel); // aplica somente se não estiver mutado
    }
  }

  utter.onend = () => {
    removerDestaqueOpcao(opcaoLabel); // aplica somente se estiver mutado
    indiceNarracaoAtual++;
    processarFilaNarracao();
  };

  utter.onerror = () => {
    narracaoAtiva = false;
  };

  // Garante que narracaoAtiva esteja true ao falar
  narracaoAtiva = true;
  speechSynthesis.speak(utter);
}

// Toggle mute com efeito imediato
btnMute.addEventListener("click", () => {
  narradorMutado = !narradorMutado;

  const btnHamb = document.querySelector(".btn-hamburger");
  [btnHamb, btnMute].forEach((btn, i, arr) => {
    btn.textContent = narradorMutado
      ? i
        ? "🔊 Ativar Narrador"
        : "🔇"
      : i
      ? "🔇 Desativar Narrador"
      : "🔊";
    btn.style.background = narradorMutado ? "#fda006" : "";
    arr[1 - i].style.animation = narradorMutado ? "none" : "";
  });

  if (narradorMutado) {
    // guardar volume e silenciar futuros utterances

    previousVolume = volumeAtual;
    volumeAtual = 0;

    // remove todas as classes narrando do DOM imediatamente
    document.querySelectorAll(".opcao-label.narrando").forEach((el) => {
      el.classList.remove("narrando");
    });

    // Se estiver falando algo agora, cancela e reinicia mudo
    if (speechSynthesis.speaking) {
      document.querySelectorAll(".opcao-label.narrando").forEach((el) => {
        el.classList.remove("narrando");
      });
      const currentIndex = Math.max(0, indiceNarracaoAtual);
      //speechSynthesis.cancel();
      speechSynthesis.pause();
      setTimeout(() => {
        if (filaNarracao[currentIndex]) {
          indiceNarracaoAtual = currentIndex;
          speakFilaItem(currentIndex); // volume = 0, sem destaque
        }
      }, 30);
    }
  } else {
    // restaurar volume
    volumeAtual = previousVolume || 1;

    document.querySelectorAll(".opcao-label.narrando").forEach((el) => {
      el.classList.remove("narrando");
    });

    // No próximo utterance a classe "narrando" voltará a ser adicionada normalmente
    if (speechSynthesis.speaking) {
      const currentIndex = Math.max(0, indiceNarracaoAtual);
      speechSynthesis.cancel();
      setTimeout(() => {
        if (filaNarracao[currentIndex]) {
          indiceNarracaoAtual = currentIndex;
          speakFilaItem(currentIndex); // agora com som e destaque
        }
      }, 30);
    }
  }
});

volumeSlider.addEventListener("input", (e) => {
  e.preventDefault();

  // Atualiza a variável global de volume
  volumeAtual = parseFloat(e.target.value);
  volumeLabel.textContent = `${Math.round(volumeAtual * 100)}%`;
});

// Função para criar um utterance padronizado
function criarUtterance(texto, voz = null) {
  const utterance = new SpeechSynthesisUtterance(texto);
  utterance.lang = "pt-BR";
  utterance.rate = 0.95;
  utterance.pitch = 1.05;
  utterance.volume = volumeAtual; // usa o valor do input slider;
  if (voz) utterance.voice = voz;

  return utterance;
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
    //speechSynthesis.pause(); // pausa a narração atual
    processarFilaNarracao(); // reinicia da posição atual com a nova voz
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
  vozesDisponiveis = speechSynthesis.getVoices().filter(v => v.lang.startsWith("pt-BR"));
  if (!vozesDisponiveis.length) return;

  // Recupera vozes salvas do sessionStorage
  const vozPrincipalSalva = sessionStorage.getItem("vozPrincipal");
  const vozPerguntaSalva  = sessionStorage.getItem("vozPergunta");
  const vozOpcoesSalva    = sessionStorage.getItem("vozOpcoes");
  const vozRespostaSalva  = sessionStorage.getItem("vozResposta");

  // Define vozes padrão ou restauradas
  vozSelecionada = vozesDisponiveis.find(v => v.name === vozPrincipalSalva) || vozesDisponiveis[0];
  vozPergunta    = vozesDisponiveis.find(v => v.name === vozPerguntaSalva) || vozesDisponiveis[4] || vozSelecionada;
  vozOpcoes      = vozesDisponiveis.find(v => v.name === vozOpcoesSalva) || vozesDisponiveis[2] || vozSelecionada;
  vozResposta    = vozesDisponiveis.find(v => v.name === vozRespostaSalva) || vozesDisponiveis[3] || vozSelecionada;

  const selects = [
    { el: selectVoz, chave: "vozPrincipal", voz: vozSelecionada },
    { el: selectVozPergunta, chave: "vozPergunta", voz: vozPergunta },
    { el: selectVozOpcoes, chave: "vozOpcoes", voz: vozOpcoes },
    { el: selectVozResposta, chave: "vozResposta", voz: vozResposta },
  ];

  selects.forEach(({ el, chave, voz }) => {
    if (!el) return;

    // Atualiza opções mantendo a seleção
    el.innerHTML = vozesDisponiveis
      .map(v => `<option value="${v.name}" ${v.name === voz.name ? "selected" : ""}>
                    ${simplificarNome(v.name)}
                 </option>`)
      .join("");

    // Adiciona listener apenas uma vez
    if (!el.dataset.listenerAtivo) {
      el.addEventListener("change", e => {
        const novaVoz = vozesDisponiveis.find(v => v.name === e.target.value);
        if (!novaVoz) return;

        sessionStorage.setItem(chave, e.target.value);
        atualizarVozAoVivo(chave === "vozPrincipal" ? "geral" : chave, novaVoz);
      });
      el.dataset.listenerAtivo = "true"; // marca que listener já existe
    }
  });

  if (vozAtual) {
    vozAtual.textContent = `🔊 Voz atual: ${simplificarNome(vozSelecionada.name)}`;
  }
}

// Chamar depois de carregar o DOM
speechSynthesis.onvoiceschanged = carregarVozes;
window.addEventListener("load", carregarVozes);

// 1) Tenta carregar imediatamente
carregarVozes();

// 2) Recarrega quando o navegador disparar o evento (Android/Chrome)
speechSynthesis.onvoiceschanged = carregarVozes;

// 3) Fallback: tenta mais algumas vezes caso o evento não venha
[100, 500, 1000].forEach((ms) => {
  setTimeout(carregarVozes, ms);
});

// ==================== FUNÇÃO FALAR ====================
function falar(texto) {
  if (isMuted || !texto || !narracaoAtivaNasPerguntas) return; // só fala se for perguntas
  const utterance = criarUtterance(texto, vozSelecionada);
  window.speechSynthesis.cancel();
  utterance.onend = () => {
    estaNarrando = false;
  };
  utterance.onerror = (e) => {
    console.error("Erro na fala:", e);
    estaNarrando = false;
  };
  utterance.onpause = () => {
    estaNarrando = false;
  };
  utterance.onresume = () => {
    estaNarrando = true;
  };
  window.speechSynthesis.speak(utterance);
  utteranceAtual = utterance;
  estaNarrando = true;
}

function iniciarNarracao() {
  if (!vozAtivada || filaNarracao.length === 0) return;

  narracaoAtiva = true;
  narracaoPausada = false;
  processarFilaNarracao();
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

function exibirQuestao() {
  const questao = perguntas[indiceQuestaoAtual];
  const opcoesEmbaralhadas = embaralharArray([...questao.opcoes]);

  const btnHamb = document.querySelector(".btn-hamburger");
  btnHamb.style.display = "block";

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
    </div>
    <div id="feedback-questao">
    </div>
  `;

  narrarPerguntaCompleta(questao, opcoesEmbaralhadas);

  /* Listener das opções */
  document.querySelectorAll('input[name="opcao"]').forEach((input) => {
    input.addEventListener("click", () => handleResposta2(input), {
      once: true,
    });
  });

  const btnHamburger = document.querySelector(".btn-hamburger");
  if (btnHamburger) {
    btnHamburger.addEventListener("click", abrirSidebar);
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

  if (btnSidebarClose) {
    btnSidebarClose.addEventListener("click", fecharSidebar);
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", fecharSidebar);
  }
});

// ==================== Para a narração na análise final ====================

if (analiseFinalDiv) {
  const observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
      if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
        // desativa narração fora das perguntas
        narracaoAtivaNasPerguntas = false;
        speechSynthesis.cancel();
        estaNarrando = false;
      }
    }
  });

  observer.observe(analiseFinalDiv, { childList: true, subtree: true });
}
