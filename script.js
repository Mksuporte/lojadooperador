/* =====================================================
   script.js — Versão refinada com envio para WhatsApp
   ===================================================== */

const kitsRevestimento = {
  pelucia_total: {
    nome: "Kit todo na Pelúcia (Xinil)",
    descricao: "Todas as partes na pelúcia (Xinil)",
    preco: 850,
    imagem: "imagens/kits/kit_pelucia_total.jpg",
  },
  couro_chao_pelucia_resto: {
    nome: "Kit Couro no Chão + Resto na Pelúcia (Xinil)",
    descricao: "Chão e pedais em couro, restante na pelúcia (Xinil)",
    preco: 950,
    imagem: "imagens/kits/kit_couro_chao.jpg",
  },
  couro_total: {
    nome: "Kit Couro sintético Sport no chão + restante na Pelúcia (Xinil)",
    descricao: "Chão e pedais em couro, restante na pelúcia (Xinil)",
    preco: 1000,
    imagem: "imagens/kits/kit_couro_total.jpg",
  },
  couro_sport: {
    nome: "Kit Couro com detalhes esportivos",
    descricao: "Couro sintético + detalhes em Sued + Pelúcia (Xinil)",
    preco: 1150,
    imagem: "imagens/kits/kit_couro_sport.jpg",
  },
};

let carrinho = [];
let maquinaSelecionada = "";

/* =====================================================
   GERA O CARROSSEL DINAMICAMENTE
   ===================================================== */
function gerarCarrosselKits() {
  const slidesContainer = document.getElementById("slides-kits");
  slidesContainer.innerHTML = "";

  Object.entries(kitsRevestimento).forEach(([key, kit]) => {
    slidesContainer.innerHTML += `
      <div class="swiper-slide" data-kit="${key}">
        <div class="slide-content">
          <img src="${kit.imagem}" alt="${kit.nome}" class="slide-img" loading="lazy">
          <div class="slide-caption">
            <h3>${kit.nome}</h3>
            <p>${kit.descricao}</p>
            <strong style="color:#f9a01b">R$ ${kit.preco.toFixed(2)}</strong><br>
            <button class="btn-selecionar-kit" data-kit="${key}">
              Selecionar Este Kit
            </button>
          </div>
        </div>
      </div>
    `;
  });

  const swiper = new Swiper(".main-swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    autoplay: { delay: 4000, disableOnInteraction: false },
  });

  // Clique no botão ou slide
  document.querySelectorAll(".btn-selecionar-kit").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      selecionarKit(btn.dataset.kit);
    });
  });

  document.querySelectorAll(".swiper-slide").forEach((slide) => {
    slide.addEventListener("click", (e) => {
      const kitKey = slide.dataset.kit;
      selecionarKit(kitKey);
    });
  });
}

/* =====================================================
   AO CLICAR EM UM KIT DO CARROSSEL
   ===================================================== */
function selecionarKit(chave) {
  const kit = kitsRevestimento[chave];
  if (!kit) return;

  const secaoSelecao = document.getElementById("selecao-container");
  const personalizacao = document.getElementById("personalizacao-container");
  const carrinhoSection = document.querySelector(".carrinho");
  const form = document.getElementById("form-cliente-container");

  [secaoSelecao, personalizacao, carrinhoSection, form].forEach((el) => {
    el.style.display = "block";
    setTimeout(() => el.classList.add("mostrar"), 50);
  });

  const partesDiv = document.getElementById("partes-personalizacao");
  partesDiv.innerHTML = `
    <p><strong>${kit.nome}</strong></p>
    <p style="color:#ccc">${kit.descricao}</p>
    <p><strong>Preço: R$ ${kit.preco.toFixed(2)}</strong></p>
    <input type="hidden" id="kit-selecionado-chave" value="${chave}">
    <button class="btn-adicionar-carrinho" onclick="adicionarAoCarrinho()">Adicionar ao Carrinho</button>
  `;

  secaoSelecao.scrollIntoView({ behavior: "smooth" });
}

/* =====================================================
   SELEÇÃO DE MÁQUINA
   ===================================================== */
function configurarSelecaoMaquina() {
  const itensMaquina = document.querySelectorAll('.maquina-item');
  
  itensMaquina.forEach(item => {
    item.addEventListener('click', function() {
      // Remove seleção anterior
      itensMaquina.forEach(i => i.classList.remove('selecionado'));
      
      // Adiciona seleção atual
      this.classList.add('selecionado');
      
      // Atualiza máquina selecionada
      maquinaSelecionada = this.querySelector('p').textContent;
      document.getElementById('maquina-selecionada').value = maquinaSelecionada;
    });
  });
}

/* =====================================================
   CARRINHO
   ===================================================== */
function adicionarAoCarrinho() {
  const chave = document.getElementById("kit-selecionado-chave").value;
  const kit = kitsRevestimento[chave];
  if (!kit) return alert("Selecione um kit primeiro!");

  // Verifica se já existe no carrinho
  const existeNoCarrinho = carrinho.some(item => item.chave === chave);
  if (!existeNoCarrinho) {
    carrinho.push({
      chave: chave,
      nome: kit.nome,
      preco: kit.preco,
      descricao: kit.descricao
    });
    atualizarCarrinho();
    alert("Kit adicionado ao carrinho!");
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

/* =====================================================
   FORMULÁRIO + VALIDAÇÃO + WHATSAPP
   ===================================================== */
function mostrarFormularioCliente() {
  if (carrinho.length === 0) {
    alert("Adicione pelo menos um kit ao carrinho antes de finalizar!");
    return;
  }
  
  if (!maquinaSelecionada) {
    alert("Selecione uma máquina antes de finalizar!");
    return;
  }
  
  document.getElementById("form-cliente-container").scrollIntoView({ behavior: "smooth" });
}

function formatarPedidoWhatsApp(dadosCliente) {
  let mensagem = "🛒 *PEDIDO - LOJA DO OPERADOR* 🛒\n\n";
  
  // Dados do cliente
  mensagem += "*DADOS DO CLIENTE:*\n";
  mensagem += `👤 Nome: ${dadosCliente.nome}\n`;
  mensagem += `📄 CPF/CNPJ: ${dadosCliente.cpf_cnpj}\n`;
  mensagem += `📞 Telefone: ${dadosCliente.telefone}\n\n`;
  
  // Máquina selecionada
  mensagem += `🚗 *Máquina Selecionada:* ${maquinaSelecionada}\n\n`;
  
  // Itens do pedido
  mensagem += "*ITENS DO PEDIDO:*\n";
  let total = 0;
  
  carrinho.forEach((kit, index) => {
    mensagem += `▫️ ${kit.nome}\n`;
    mensagem += `   📝 ${kit.descricao}\n`;
    mensagem += `   💰 R$ ${kit.preco.toFixed(2)}\n\n`;
    total += kit.preco;
  });
  
  // Total
  mensagem += `💵 *TOTAL: R$ ${total.toFixed(2)}*`;
  
  return encodeURIComponent(mensagem);
}

function enviarParaWhatsApp(dadosCliente) {
  const mensagem = formatarPedidoWhatsApp(dadosCliente);
  const telefoneWhatsApp = "5543999999999"; // Substitua pelo número real
  
  const urlWhatsApp = `https://wa.me/${telefoneWhatsApp}?text=${mensagem}`;
  window.open(urlWhatsApp, '_blank');
}

/* =====================================================
   INICIALIZAÇÃO
   ===================================================== */
document.addEventListener("DOMContentLoaded", () => {
  gerarCarrosselKits();
  configurarSelecaoMaquina();

  // Oculta tudo abaixo do carrossel inicialmente
  document.getElementById("selecao-container").style.display = "none";
  document.getElementById("personalizacao-container").style.display = "none";
  document.querySelector(".carrinho").style.display = "none";
  document.getElementById("form-cliente-container").style.display = "none";

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

  // Validação de formulário
  document.getElementById("formCliente").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const nome = document.getElementById("nome");
    const cpf = document.getElementById("cpf_cnpj");
    const tel = document.getElementById("telefone");
    let valido = true;

    // Validações
    if (!/^[A-Za-zÀ-ú\s]{2,}$/.test(nome.value.trim())) {
      document.getElementById("erro-nome").style.display = "block";
      valido = false;
    } else {
      document.getElementById("erro-nome").style.display = "none";
    }

    if (!/^[0-9]{11,14}$/.test(cpf.value.replace(/\D/g, ''))) {
      document.getElementById("erro-cpf_cnpj").style.display = "block";
      valido = false;
    } else {
      document.getElementById("erro-cpf_cnpj").style.display = "none";
    }

    if (!/^[0-9]{10,11}$/.test(tel.value.replace(/\D/g, ''))) {
      document.getElementById("erro-telefone").style.display = "block";
      valido = false;
    } else {
      document.getElementById("erro-telefone").style.display = "none";
    }

    if (valido) {
      const dadosCliente = {
        nome: nome.value.trim(),
        cpf_cnpj: cpf.value,
        telefone: tel.value
      };
      
      // Envia para WhatsApp
      enviarParaWhatsApp(dadosCliente);
      
      // Limpa formulário e carrinho
      e.target.reset();
      carrinho = [];
      maquinaSelecionada = "";
      document.getElementById('maquina-selecionada').value = "";
      document.querySelectorAll('.maquina-item').forEach(item => {
        item.classList.remove('selecionado');
      });
      atualizarCarrinho();
      
      alert("Pedido enviado para o WhatsApp! ✅");
    }
  });
});