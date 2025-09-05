// Perguntas do quiz
const perguntasOriginais = [
  // --- PERGUNTAS NÍVEL INICIANTE (4) ---
  {
    categoria: "Lógica de Programação",
    nivel: "Iniciante",
    pergunta: "O que é uma 'variável' em programação?",
    opcoes: [
      {
        texto: "Um tipo de erro de programação.",
        correta: false,
        explicacao:
          "Incorreto. Erros de programação são problemas que impedem o código de funcionar.",
      },
      {
        texto:
          "Um espaço nomeado na memória do computador para armazenar dados.",
        correta: true,
        explicacao:
          "Correto. Variáveis guardam valores que podem ser modificados durante o programa.",
      },
      {
        texto: "Um comando para dividir o código em várias funções.",
        correta: false,
        explicacao: "Incorreto. Funções são blocos de código reutilizáveis.",
      },
    ],
  },
  {
    categoria: "Lógica de Programação",
    nivel: "Iniciante",
    pergunta:
      "Qual é o objetivo de uma estrutura de repetição (laço `for` ou `while`)?",
    opcoes: [
      {
        texto: "Armazenar dados permanentemente.",
        correta: false,
        explicacao:
          "Incorreto. O armazenamento permanente de dados é feito com bancos de dados ou arquivos.",
      },
      {
        texto:
          "Executar um bloco de código repetidamente até que uma condição seja satisfeita.",
        correta: true,
        explicacao:
          "Correto. Laços de repetição executam um bloco de código múltiplas vezes.",
      },
      {
        texto:
          "Dividir o código em várias partes, para que a função possa entrar nas variáveis.",
        correta: false,
        explicacao: "Incorreto. Para dividir o código, usamos funções.",
      },
    ],
  },
  {
    categoria: "Fundamentos da Computação",
    nivel: "Iniciante",
    pergunta: "O que é 'hardware'?",
    opcoes: [
      {
        texto: "O conjunto de programas e dados que o computador usa.",
        correta: false,
        explicacao: "Incorreto. Os programas e dados são o 'software'.",
      },
      {
        texto:
          "A parte lógica e intangível de um computador. Funciona de maneira semelhante ao cérebro humano.",
        correta: false,
        explicacao: "Incorreto. A parte lógica é o 'software'.",
      },
      {
        texto:
          "A parte física e tangível de um computador, como teclado, mouse e processador.",
        correta: true,
        explicacao:
          "Correto. Hardware se refere a todos os componentes físicos de um computador.",
      },
    ],
  },
  {
    categoria: "JavaScript",
    nivel: "Iniciante",
    pergunta: "Qual a principal função do JavaScript em um site?",
    opcoes: [
      {
        texto: "Dar estilo e aparência aos elementos da página e somente isso.",
        correta: false,
        explicacao: "Incorreto. Estilos são aplicados com CSS.",
      },
      {
        texto:
          "Adicionar interatividade, como animações, validações de formulário, etc.",
        correta: true,
        explicacao:
          "Correto. JavaScript torna as páginas web dinâmicas e interativas.",
      },
      {
        texto: "Criar a estrutura básica e o conteúdo da página.",
        correta: false,
        explicacao:
          "Incorreto. A estrutura e o conteúdo são definidos com HTML.",
      },
    ],
  },

  // --- PERGUNTAS NÍVEL INTERMEDIÁRIO (3) ---
  {
    categoria: "Lógica de Programação",
    nivel: "Intermediário",
    pergunta: "O que é 'recursão' em programação?",
    opcoes: [
      {
        texto:
          "Um método para quebrar um loop infinito. Exige uma função específica para funcionar.",
        correta: false,
        explicacao:
          "Incorreto. Para quebrar um loop, usamos `break` ou ajustamos a condição.",
      },
      {
        texto: "Uma função que chama a si mesma para resolver um problema.",
        correta: true,
        explicacao:
          "Correto. Recursão é quando uma função chama a si mesma até atingir uma condição de parada.",
      },
      {
        texto: "A repetição de um bloco de código com diferentes variáveis.",
        correta: false,
        explicacao: "Incorreto. A repetição é feita com estruturas de laço.",
      },
    ],
  },
  {
    categoria: "Fundamentos da Computação",
    nivel: "Intermediário",
    pergunta: "O que é 'algoritmo de ordenação'?",
    opcoes: [
      {
        texto:
          "Um algoritmo que organiza dados em uma sequência específica, como ordem alfabética ou numérica.",
        correta: true,
        explicacao:
          "Correto. Algoritmos de ordenação (como Bubble Sort) são fundamentais para organizar dados de forma eficiente.",
      },
      {
        texto:
          "Um conjunto de regras para somar números. Não se aplica a ordenação.",
        correta: false,
        explicacao:
          "Incorreto. Um algoritmo de ordenação não é específico para somas, mas para a organização de dados.",
      },
      {
        texto: "Um tipo de erro que impede o código de compilar.",
        correta: false,
        explicacao:
          "Incorreto. Erros de compilação estão relacionados à sintaxe do código.",
      },
    ],
  },
  {
    categoria: "JavaScript",
    nivel: "Intermediário",
    pergunta: "Em JavaScript, o que são 'Promises'?",
    opcoes: [
      {
        texto: "Um tipo de variável para armazenar texto.",
        correta: false,
        explicacao: "Incorreto. Variáveis de texto são `Strings`.",
      },
      {
        texto:
          "Um erro que acontece quando a função não encontra um elemento no DOM.",
        correta: false,
        explicacao:
          "Incorreto. O erro de não encontrar um elemento no DOM geralmente é um `TypeError`.",
      },
      {
        texto:
          "Objetos que representam a conclusão (sucesso ou falha) de uma operação assíncrona.",
        correta: true,
        explicacao:
          "Correto. Promises são essenciais para lidar com operações assíncronas de forma mais limpa.",
      },
    ],
  },

  // --- PERGUNTAS NÍVEL EXPERT (3) ---
  {
    categoria: "Lógica de Programação",
    nivel: "Expert",
    pergunta:
      "O que é 'complexidade de tempo' em um algoritmo e por que ela é importante?",
    opcoes: [
      {
        texto: "É o tempo exato que um algoritmo leva para ser executado.",
        correta: false,
        explicacao:
          "Incorreto. A complexidade de tempo não mede o tempo exato, mas a taxa de crescimento dele.",
      },
      {
        texto:
          "Mede o quanto de memória um algoritmo consome durante a execução.",
        correta: false,
        explicacao:
          "Incorreto. O consumo de memória é a 'complexidade de espaço'.",
      },
      {
        texto:
          "Mede a taxa de crescimento do tempo de execução em função do tamanho da entrada, essencial para prever seu desempenho.",
        correta: true,
        explicacao:
          "Correto. A complexidade de tempo, expressa em notação Big O, é um conceito fundamental para otimizar a eficiência de um algoritmo.",
      },
    ],
  },
  {
    categoria: "Fundamentos da Computação",
    nivel: "Expert",
    pergunta:
      "Em redes de computadores, o que é o modelo 'OSI' e qual sua finalidade?",
    opcoes: [
      {
        texto: "Um tipo de linguagem de programação.",
        correta: false,
        explicacao:
          "Incorreto. Linguagens de programação são usadas para criar software.",
      },
      {
        texto: "É um modelo de banco de dados para sistemas distribuídos.",
        correta: false,
        explicacao:
          "Incorreto. O modelo OSI não se refere a bancos de dados, mas a como os sistemas de comunicação interagem.",
      },
      {
        texto:
          "Um modelo de referência para o funcionamento de redes, dividido em sete camadas para padronizar a comunicação entre diferentes sistemas.",
        correta: true,
        explicacao:
          "Correto. O modelo OSI ajuda a entender como os dados se movem em uma rede.",
      },
    ],
  },
  {
    categoria: "JavaScript",
    nivel: "Expert",
    pergunta: "O que é 'closure' em JavaScript?",
    opcoes: [
      {
        texto:
          "Um erro que acontece quando você tenta acessar uma variável que não existe.",
        correta: false,
        explicacao:
          "Incorreto. Acessar uma variável não existente geralmente resulta em um `ReferenceError`.",
      },
      {
        texto: "Um tipo de objeto que armazena pares de chave-valor.",
        correta: false,
        explicacao:
          "Incorreto. Objetos que armazenam pares de chave-valor são `Objects` ou `Maps`.",
      },
      {
        texto:
          "A capacidade de uma função interna de 'lembrar' e acessar variáveis de seu escopo externo (léxico).",
        correta: true,
        explicacao:
          "Correto. Closures permitem a criação de funções com estado e dados privados, um conceito avançado e poderoso.",
      },
    ],
  },
];

const homepageSection = document.getElementById("homepage");
const iniciarQuizBtn = document.getElementById("iniciar-quiz");
const cadastroSection = document.getElementById("cadastro");
const cadastroForm = document.getElementById("cadastro-form");
const quizSection = document.getElementById("quiz");
const questoesContainer = document.getElementById("questoes-container");

const proximaQuestaoBtn = document.createElement("button");
proximaQuestaoBtn.id = "proxima-questao";
proximaQuestaoBtn.textContent = "Próxima";
proximaQuestaoBtn.style.display = "none";
quizSection.appendChild(proximaQuestaoBtn);

const resultadoSection = document.getElementById("resultado");
const nivelResultadoFinal = document.getElementById("nivel-resultado-final");
const analiseFinal = document.getElementById("analise-final");

// Variáveis para os botões da tela de resultado
let voltarHomepageBtn;
let enviarResultadoBtn;
let refazerTesteBtn;

let perguntas = [];
let pontuacao = 0;
let indiceQuestaoAtual = 0;
let nomeUsuario = "";
let emailUsuario = "";
let respostasUsuario = [];
let quizConcluido = sessionStorage.getItem("quizConcluido") === "true";
let resultadoQuiz = JSON.parse(sessionStorage.getItem("resultadoQuiz")) || null;

// Função para embaralhar as perguntas
function embaralharArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Função para preparar as perguntas
function prepararPerguntas() {
  const perguntasIniciante = perguntasOriginais.filter(
    (q) => q.nivel === "Iniciante"
  );
  const perguntasIntermediario = perguntasOriginais.filter(
    (q) => q.nivel === "Intermediário"
  );
  const perguntasExpert = perguntasOriginais.filter(
    (q) => q.nivel === "Expert"
  );

  embaralharArray(perguntasIniciante);
  embaralharArray(perguntasIntermediario);
  embaralharArray(perguntasExpert);

  perguntas = [
    ...perguntasIniciante,
    ...perguntasIntermediario,
    ...perguntasExpert,
  ];
}

function mostrarSeccao(seccao) {
  document
    .querySelectorAll(".quiz-section")
    .forEach((sec) => sec.classList.remove("active"));
  document.getElementById(seccao).classList.add("active");
}

if (quizConcluido && resultadoQuiz) {
  const totalPerguntas =
    (resultadoQuiz.respostas && resultadoQuiz.respostas.length) ||
    perguntasOriginais.length;

  homepageSection.innerHTML = `
    <img src="logo2.png" alt="House JS Logo" class="house-js-logo">
    <h1>DevCheck - Nível Dev</h1>
    <p>Você já completou o quiz!</p>
    <div id="nivel-resultado-homepage"><strong>Seu Nível:</strong> ${resultadoQuiz.nivel}</div>
    <p id="pontuacao-final-homepage">Você acertou ${resultadoQuiz.pontuacao} de ${totalPerguntas} perguntas.</p>
    <button id="ver-feedback-btn">Ver seu Desempenho</button>
  `;

  const verFeedbackBtn = document.getElementById("ver-feedback-btn");
  verFeedbackBtn.addEventListener("click", () => {
    exibirResultado(resultadoQuiz);
  });
  mostrarSeccao("homepage");
} else {
  prepararPerguntas();
  mostrarSeccao("homepage");
}

iniciarQuizBtn.addEventListener("click", () => {
  mostrarSeccao("cadastro");
});

// Envio do cadastro pelo usuário
cadastroForm.addEventListener("submit", (e) => {
  e.preventDefault();
  nomeUsuario = document.getElementById("nome").value;
  emailUsuario = document.getElementById("email").value;
  mostrarSeccao("quiz");
  exibirQuestao();
});

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
        .map(
          (opcao) => `
        <label>
          <input type="radio" name="opcao" value="${opcao.texto}" data-correta="${opcao.correta}">
          <span>${opcao.texto}</span>
        </label>
      `
        )
        .join("")}
    </div>
  </div>
  <div id="feedback-questao"></div>
  `;

  document.querySelectorAll('input[name="opcao"]').forEach((input) => {
    input.addEventListener(
      "click",
      () => {
        handleResposta(input);
      },
      { once: true }
    );
  });
}

// Função que trata a resposta
function handleResposta(inputSelecionado) {
  const opcaoSelecionada = inputSelecionado.value;
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
    <p><strong>Resposta ${
      respostaCorreta ? "Correta!" : "Incorreta."
    }</strong></p>
    <p>${opcao.explicacao}</p>
  `;

  const labelSelecionada = inputSelecionado.parentElement;
  labelSelecionada.classList.add(respostaCorreta ? "correta" : "incorreta");

  if (!respostaCorreta) {
    const opcaoCorretaLabel = document.querySelector(
      `input[data-correta="true"]`
    ).parentElement;
    opcaoCorretaLabel.classList.add("correta");
  }

  document.querySelectorAll('input[name="opcao"]').forEach((input) => {
    input.disabled = true;
  });

  proximaQuestaoBtn.style.display = "block";
}

proximaQuestaoBtn.addEventListener("click", () => {
  indiceQuestaoAtual++;
  proximaQuestaoBtn.style.display = "none";

  if (indiceQuestaoAtual < perguntas.length) {
    exibirQuestao();
  } else {
    const resultadoFinal = {
      pontuacao,
      nivel: "",
      respostas: respostasUsuario,
    };
    exibirResultado(resultadoFinal);
  }
});

// Resultado do quiz
function exibirResultado(resultadoData) {
  mostrarSeccao("resultado");

  let nivel = "";
  let feedbackNivel = "";
  const acertosPorNivel = { Iniciante: 0, Intermediário: 0, Expert: 0 };
  const totalPorNivel = {
    Iniciante: perguntas.filter((q) => q.nivel === "Iniciante").length,
    Intermediário: perguntas.filter((q) => q.nivel === "Intermediário").length,
    Expert: perguntas.filter((q) => q.nivel === "Expert").length,
  };
  const acertosPorCategoria = {};
  const totalPorCategoria = {};

  perguntas.forEach((p) => {
    if (!totalPorCategoria[p.categoria]) {
      totalPorCategoria[p.categoria] = 0;
      acertosPorCategoria[p.categoria] = 0;
    }
    totalPorCategoria[p.categoria]++;
  });

  resultadoData.respostas.forEach((res) => {
    if (res.correta) {
      acertosPorNivel[res.nivel]++;
      acertosPorCategoria[res.categoria]++;
    }
  });

  const totalAcertos = resultadoData.pontuacao;

  if (totalAcertos <= 4) {
    nivel = "Iniciante";
    feedbackNivel =
      "Você está no início da sua jornada. Foque em construir uma base sólida em lógica e fundamentos da computação. Continue praticando, pois isso é crucial para qualquer caminho na programação.";
  } else if (totalAcertos <= 7) {
    nivel = "Intermediário";
    feedbackNivel =
      "Você pode se considerar intermediário. Demonstrou familiaridade com conceitos-chave. O próximo passo é se aprofundar em temas mais complexos para chegar ao nível Expert.";
  } else {
    nivel = "Expert";
    feedbackNivel =
      "Excelente! Você demonstrou um conhecimento sólido e abrangente, especialmente em temas avançados. Está pronto para enfrentar desafios de alto nível e se destacar no mercado.";
  }

  let pontosFortes = [];
  let pontosMelhorar = [];
  for (const categoria in acertosPorCategoria) {
    const percentual =
      (acertosPorCategoria[categoria] / totalPorCategoria[categoria]) * 100;
    if (percentual > 60) {
      pontosFortes.push(categoria);
    } else {
      pontosMelhorar.push(categoria);
    }
  }

  nivelResultadoFinal.innerHTML = `<h3>Seu Nível: ${nivel}</h3>`;
  analiseFinal.innerHTML = `
    <div class="feedback-final-card">
      <p><strong>Pontuação:</strong> Você acertou ${
        resultadoData.pontuacao
      } de ${perguntas.length} perguntas.</p>
      <p>${feedbackNivel}</p>
      <p><strong>Seus pontos fortes:</strong> ${
        pontosFortes.length > 0
          ? pontosFortes.join(", ")
          : "Você sabe um pouco de tudo, então, não tem ainda um ponto forte."
      }</p>
      <p><strong>O que você pode fazer:</strong> ${
        pontosMelhorar.length > 0
          ? `Reforce seus estudos em: <strong>${pontosMelhorar.join(
              ", "
            )}</strong>.`
          : "Continue praticando e explorando novos conceitos para manter seu conhecimento atualizado."
      }</p>
    </div>
    <div class="botoes-resultado">
      <button id="enviar-resultado-btn">Enviar Resultado Para o Seu Email</button>
      <button id="refazer-teste-btn">Refazer Teste</button>
    </div>
  `;

  // Define os dados a serem enviados
  const resultadoParaEnviar = {
    pontuacao: resultadoData.pontuacao,
    nivel,
    pontosFortes,
    ptosMelhorar: pontosMelhorar,
  };
  
  // A chamada para a planilha deve vir aqui, DEPOIS que o HTML foi renderizado
  enviarResultadoParaPlanilha(resultadoParaEnviar);

  enviarResultadoBtn = document.getElementById("enviar-resultado-btn");
  enviarResultadoBtn.addEventListener("click", () => {
    // envia e-mail
    enviarResultadoPorEmail(resultadoParaEnviar);

    enviarResultadoBtn.disabled = true;
    enviarResultadoBtn.textContent = "Enviado!";
  });

  refazerTesteBtn = document.getElementById("refazer-teste-btn");
  refazerTesteBtn.addEventListener("click", () => {
    pontuacao = 0;
    indiceQuestaoAtual = 0;
    respostasUsuario = [];
    sessionStorage.clear();
    window.location.reload();
  });

  sessionStorage.setItem("quizConcluido", "true");
  sessionStorage.setItem(
    "resultadoQuiz",
    JSON.stringify({
      pontuacao: resultadoData.pontuacao,
      nivel,
      respostas: resultadoData.respostas,
    })
  );
}

// Função que envia o resultado pro Google Forms
function enviarResultadoParaPlanilha(resultadoData) {
  const FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSdlahHWiLMMTDBC5PP0mUwU3RTzcUHarPfbeR5AVdGrahcIig/formResponse";

  const params = new URLSearchParams();
  params.append("entry.697814456", nomeUsuario);
  params.append("entry.1742734606", emailUsuario);
  params.append("entry.82915780", resultadoData.pontuacao);
  params.append("entry.302556256", resultadoData.nivel);
  params.append("entry.988138350", resultadoData.pontosFortes);
  params.append("entry.648974086", resultadoData.pontosMelhorar);

  fetch(FORM_URL, {
    method: "POST",
    body: params,
    mode: "no-cors",
  })
    .then(() => console.log("Dados enviados com sucesso para a planilha!"))
    .catch((error) =>
      console.error("Erro ao enviar dados para a planilha:", error)
    );
}

// Função que envia os dados para o servidor.
async function enviarResultadoPorEmail(dados) {
  await fetch("https://devcheck-housejs.vercel.app/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome: nomeUsuario,
      email: emailUsuario,
      pontuacao: dados.pontuacao,
      nivel: dados.nivel,
      pontosFortes: dados.pontosFortes,
      pontosMelhorar: dados.pontosMelhorar,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.ok) {
        Swal.fire({
          icon: "success",
          title: "Sucesso!",
          text: "Resultado enviado com sucesso para seu e-mail!",
          confirmButtonText: "OK",
          confirmButtonColor: "#1c5c1eef",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Erro!",
          text: "Erro ao enviar resultado por e-mail. Tente novamente mais tarde.",
          confirmButtonText: "Fechar",
          confirmButtonColor: "rgba(122, 35, 35, 0.94)",
        });
      }
    })
    .catch((err) => {
      console.error("Erro de rede:", err);
      Swal.fire({
        icon: "warning",
        title: "Falha de conexão",
        text: "Não foi possível conectar ao servidor de e-mail. Verifique sua conexão.",
        confirmButtonText: "OK",
      });
    });
}