// =====================================================
// VARIÁVEIS GLOBAIS
// =====================================================
let carrinho = [];
let maquinaSelecionada = "";
let kitAtual = null;
let personalizacaoAtual = {};

// =====================================================
// INICIALIZAÇÃO
// =====================================================
document.addEventListener("DOMContentLoaded", () => {
  inicializarSite();
});

function inicializarSite() {
  gerarCarrosselKits();
  configurarSelecaoMaquina();
  configurarEventListeners();
  
  // Oculta seções que aparecem após seleção do kit
  ocultarSecoesAbaixoDoCarrossel();
}

function configurarEventListeners() {
  // Popup ajuda
  const btnAjuda = document.getElementById("btn-ajuda");
  const popup = document.getElementById("popup-ajuda");
  btnAjuda.addEventListener("click", () => {
    popup.style.display = popup.style.display === "block" ? "none" : "block";
  });

  // Menu hamburguer
  const menuToggle = document.getElementById("menu-toggle");
  const menuLinks = document.getElementById("menu-links");
  menuToggle.addEventListener("click", () => {
    menuLinks.classList.toggle("mostrar");
  });

  // Fechar modal
  document.getElementById("fechar-modal").addEventListener("click", fecharModal);
  
  // Fechar modal ao clicar fora
  window.addEventListener("click", function(event) {
    const modal = document.getElementById("modal-cores");
    if (event.target === modal) {
      fecharModal();
    }
  });
}

function ocultarSecoesAbaixoDoCarrossel() {
  document.getElementById("selecao-container").style.display = "none";
  document.getElementById("personalizacao-container").style.display = "none";
  document.querySelector(".carrinho").style.display = "none";
  document.getElementById("form-cliente-container").style.display = "none";
}

// =====================================================
// FLUXO PRINCIPAL - SELEÇÃO DE MÁQUINA
// =====================================================
function configurarSelecaoMaquina() {
  const itensMaquina = document.querySelectorAll('.maquina-item');

  itensMaquina.forEach(item => {
    item.addEventListener('click', function() {
      // Remove seleção anterior
      itensMaquina.forEach(i => i.classList.remove('selecionado'));
      
      // Adiciona seleção atual
      this.classList.add('selecionado');
      
      // Atualiza máquina selecionada
      maquinaSelecionada = this.dataset.maquina;
      
      // Mostra seção de detalhes da máquina
      document.getElementById("maquina-detalhes").style.display = "block";
    });
  });
}

// =====================================================
// FLUXO PRINCIPAL - SELEÇÃO DE KIT
// =====================================================
function selecionarKit(chave) {
  // Verificar se máquina foi selecionada
  if (!maquinaSelecionada) {
    alert("Por favor, selecione uma máquina primeiro!");
    document.getElementById("selecao-container").scrollIntoView({ behavior: "smooth" });
    return;
  }

  // Verificar se dados da máquina foram preenchidos
  const marca = document.getElementById("maquina-marca").value;
  const modelo = document.getElementById("maquina-modelo").value;
  const ano = document.getElementById("maquina-ano").value;
  
  if (!marca || !modelo || !ano) {
    alert("Por favor, preencha todos os dados da máquina (marca, modelo e ano)!");
    return;
  }

  const kit = kitsRevestimento[chave];
  if (!kit) return;

  kitAtual = { ...kit, chave: chave };
  personalizacaoAtual = JSON.parse(JSON.stringify(kit.partes));

  // MOSTRAR MODAL DE PERSONALIZAÇÃO (Passo 4 do fluxo)
  mostrarModalPersonalizacao();
}

// =====================================================
// PERSONALIZAÇÃO (MODAL)
// =====================================================
function mostrarModalPersonalizacao() {
  const modal = document.getElementById("modal-cores");
  const conteudoModal = document.getElementById("conteudo-modal");

  conteudoModal.innerHTML = "";

  document.getElementById("titulo-modal").textContent = `Personalize: ${kitAtual.nome}`;

  // Gerar seções para cada parte do kit
  Object.entries(kitAtual.partes).forEach(([parte, config]) => {
    const material = materiais[config.material];
    if (!material) return;

    const parteDiv = document.createElement("div");
    parteDiv.className = "parte-personalizacao";

    parteDiv.innerHTML = `
      <div class="parte-titulo">${obterNomeParte(parte)} - ${material.nome}</div>
      <div class="opcoes-materiais" id="opcoes-${parte}"></div>
    `;

    conteudoModal.appendChild(parteDiv);

    // Gerar opções de cores
    const opcoesDiv = document.getElementById(`opcoes-${parte}`);
    material.cores.forEach(cor => {
      const corCard = document.createElement("div");
      corCard.className = "material-card";
      corCard.dataset.parte = parte;
      corCard.dataset.cor = cor.nome;
      corCard.dataset.imagem = cor.imagem;

      corCard.innerHTML = `
        <img src="${cor.imagem}" alt="${cor.nome}" onerror="this.src='https://via.placeholder.com/120x80/333/fff?text=Imagem+Não+Encontrada'">
        <span>${cor.nome}</span>
      `;

      corCard.addEventListener("click", () => selecionarCor(parte, cor.nome, cor.imagem));
      opcoesDiv.appendChild(corCard);
    });
  });

  // Seletor de tipo de chão se necessário
  if (kitAtual.opcaoChao) {
    const seletorChao = document.createElement("div");
    seletorChao.className = "seletor-chao";
    seletorChao.innerHTML = `
      <label for="tipo-chao">Tipo do Chão:</label>
      <select id="tipo-chao" onchange="atualizarTipoChao(this.value)">
        <option value="couro">Couro Sintético</option>
        <option value="couro_sport">Couro Sport</option>
      </select>
    `;
    conteudoModal.appendChild(seletorChao);
  }

  modal.style.display = "flex";
  atualizarResumoPersonalizacao();
}

function obterNomeParte(parte) {
  const nomes = {
    kit: "Kit Completo",
    chao: "Chão",
    banco: "Banco",
    braco: "Apoio de Braço",
    cabeca: "Apoio de Cabeça",
    laterais: "Laterais"
  };
  return nomes[parte] || parte;
}

function selecionarCor(parte, corNome, corImagem) {
  personalizacaoAtual[parte].cor = corImagem;
  personalizacaoAtual[parte].corNome = corNome;

  const cards = document.querySelectorAll(`[data-parte="${parte}"]`);
  cards.forEach(card => {
    card.classList.remove("selecionado");
    if (card.dataset.cor === corNome) {
      card.classList.add("selecionado");
    }
  });

  atualizarResumoPersonalizacao();
}

function atualizarTipoChao(tipo) {
  if (personalizacaoAtual.chao) {
    personalizacaoAtual.chao.material = tipo;

    const opcoesChao = document.getElementById("opcoes-chao");
    opcoesChao.innerHTML = "";

    const material = materiais[tipo];
    material.cores.forEach(cor => {
      const corCard = document.createElement("div");
      corCard.className = "material-card";
      corCard.dataset.parte = "chao";
      corCard.dataset.cor = cor.nome;
      corCard.dataset.imagem = cor.imagem;

      corCard.innerHTML = `
        <img src="${cor.imagem}" alt="${cor.nome}" onerror="this.src='https://via.placeholder.com/120x80/333/fff?text=Imagem+Não+Encontrada'">
        <span>${cor.nome}</span>
      `;

      corCard.addEventListener("click", () => selecionarCor("chao", cor.nome, cor.imagem));
      opcoesChao.appendChild(corCard);
    });

    personalizacaoAtual.chao.cor = "";
    personalizacaoAtual.chao.corNome = "";
  }
}

function atualizarResumoPersonalizacao() {
  const resumo = document.getElementById("resumo-personalizacao");
  resumo.innerHTML = "<strong>Resumo da Personalização:</strong>";

  Object.entries(personalizacaoAtual).forEach(([parte, config]) => {
    if (config.corNome) {
      const item = document.createElement("div");
      item.className = "resumo-item";
      item.innerHTML = `
        <span>${obterNomeParte(parte)}:</span>
        <span>${config.corNome}</span>
      `;
      resumo.appendChild(item);
    }
  });
}

function confirmarCores() {
  // Verificar se todas as partes foram personalizadas
  const partesNaoSelecionadas = Object.entries(personalizacaoAtual)
    .filter(([parte, config]) => !config.corNome)
    .map(([parte, config]) => obterNomeParte(parte));

  if (partesNaoSelecionadas.length > 0) {
    alert(`Por favor, selecione cores para: ${partesNaoSelecionadas.join(", ")}`);
    return;
  }

  fecharModal();
  continuarFluxoAposPersonalizacao();
}

function fecharModal() {
  document.getElementById("modal-cores").style.display = "none";
}

function continuarFluxoAposPersonalizacao() {
  // Mostrar seções seguintes
  document.getElementById("personalizacao-container").style.display = "block";
  document.querySelector(".carrinho").style.display = "block";
  
  // Atualizar resumo na seção de personalização
  const partesDiv = document.getElementById("partes-personalizacao");
  partesDiv.innerHTML = `
    <p><strong>${kitAtual.nome}</strong></p>
    <p style="color:#ccc">${kitAtual.descricao}</p>
    <div class="resumo-personalizacao">
      <strong>Personalização Selecionada:</strong>
      ${Object.entries(personalizacaoAtual).map(([parte, config]) =>
        `<div class="resumo-item">
          <span>${obterNomeParte(parte)}:</span>
          <span>${config.corNome}</span>
        </div>`
      ).join('')}
    </div>
    <p><strong>Preço: R$ ${kitAtual.preco.toFixed(2)}</strong></p>
    <input type="hidden" id="kit-selecionado-chave" value="${kitAtual.chave}">
    <button class="btn-adicionar-carrinho" onclick="adicionarAoCarrinho()">Adicionar ao Carrinho</button>
  `;

  // Rolagem suave para a personalização
  document.getElementById("personalizacao-container").scrollIntoView({ behavior: "smooth" });
}

// =====================================================
// CARRINHO
// =====================================================
function adicionarAoCarrinho() {
  if (!kitAtual) return alert("Selecione um kit primeiro!");

  const existeNoCarrinho = carrinho.some(item => item.chave === kitAtual.chave);
  if (!existeNoCarrinho) {
    carrinho.push({
      chave: kitAtual.chave,
      nome: kitAtual.nome,
      preco: kitAtual.preco,
      descricao: kitAtual.descricao,
      personalizacao: { ...personalizacaoAtual }
    });
    atualizarCarrinho();
    alert("Kit personalizado adicionado ao carrinho!");
  } else {
    alert("Este kit já está no carrinho!");
  }
}

function atualizarCarrinho() {
  const lista = document.getElementById("listaCarrinho");
  lista.innerHTML = "";
  let total = 0;

  carrinho.forEach((kit, index) => {
    lista.innerHTML += `
      <li>
        ${kit.nome} - R$ ${kit.preco.toFixed(2)}
        <button class="btn-remover" onclick="removerDoCarrinho(${index})">×</button>
      </li>
    `;
    total += kit.preco;
  });

  document.getElementById("total-geral").textContent = `R$ ${total.toFixed(2)}`;
}

function removerDoCarrinho(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

// =====================================================
// FORMULÁRIO E WHATSAPP
// =====================================================
function mostrarFormularioCliente() {
  if (carrinho.length === 0) {
    alert("Adicione pelo menos um kit ao carrinho antes de finalizar!");
    return;
  }

  if (!maquinaSelecionada) {
    alert("Selecione uma máquina antes de finalizar!");
    return;
  }

  document.getElementById("form-cliente-container").style.display = "block";
  document.getElementById("form-cliente-container").scrollIntoView({ behavior: "smooth" });
}

// ... (mantenha as funções de validação do formulário existentes)
// ... (mantenha a função validarFormulario existente)
// ... (mantenha a função gerarCarrosselKits existente)