
    /* =====================================================
       DADOS DOS MATERIAIS E CORES
       ===================================================== */
    const materiais = {
      couro: {
        nome: "Couro Sintético",
        cores: [
          { nome: "Preto Amarelo", imagem: "imagens/cores/pretoamarelo.jpg" },
          { nome: "Azul Marinho", imagem: "imagens/cores/azulmarinho.jpg" },
          { nome: "Couro Vermelho", imagem: "imagens/cores/courovermelho.jpg" },
          { nome: "Preto com Prata", imagem: "imagens/cores/pretocomprata.jpg" },
          { nome: "Preto com Vermelho", imagem: "imagens/cores/pretocomvermelho.jpg" },
          { nome: "Grafite com Grafite", imagem: "imagens/cores/grafitecomgrafite.jpg" },
          { nome: "Marrom Café", imagem: "imagens/cores/marromcafe.jpg" },
          { nome: "Marrom Ferrari", imagem: "imagens/cores/marromferrari.jpg" },
          { nome: "Preto Mosaico", imagem: "imagens/cores/pretomosaico.jpg" },
          { nome: "Preto com Azul", imagem: "imagens/cores/pretocomazul.jpg" },
          { nome: "Bege com Marrom", imagem: "imagens/cores/begecommarrom.jpg" },
          { nome: "Corolla", imagem: "imagens/cores/corolla.jpg" },
          { nome: "Preto com Verde", imagem: "imagens/cores/pretocomverde.jpg" }
        ]
      },
      couro_sport: {
        nome: "Couro Sport",
        cores: [
          { nome: "Preto com Costuras Vermelhas", imagem: "imagens/cores/couromarrom.jpg" },
          { nome: "Azul Racing com Branco", imagem: "imagens/cores/courosportebege.jpg" },
          { nome: "Cinza Metalizado com Laranja", imagem: "imagens/cores/courosportecinzaclaro.jpg" },
          { nome: "Branco Gelado com Preto", imagem: "imagens/cores/courosportecinzaescuro.jpg" }
        ]
      },
      pelucia: {
        nome: "Pelúcia (Xinil)",
        cores: [
          { nome: "Grafite Mais Pelinhos", imagem: "imagens/cores/grafite2.jpg" },
          { nome: "Grafite", imagem: "imagens/cores/grafite.jpg" },
          { nome: "Preto Mais Pelinhos", imagem: "imagens/cores/preto2.jpg" },
          { nome: "Preto", imagem: "imagens/cores/preto.jpg" },
          { nome: "Azul Mais Pelinhos", imagem: "imagens/cores/azul.jpg" },
          { nome: "Mescla", imagem: "imagens/cores/mescla.jpg" },
          { nome: "Marrom", imagem: "imagens/cores/marrom.jpg" },
          { nome: "Vermelho Mais Pelinhos", imagem: "imagens/cores/vermelho.jpg" },
          { nome: "Amarelo Mais Pelinhos", imagem: "imagens/cores/amarelo.jpg" },
          { nome: "Verde Mais Pelinhos", imagem: "imagens/cores/verde.jpg" },
          { nome: "Rosa", imagem: "imagens/cores/rosa.jpg" },
          { nome: "Laranja", imagem: "imagens/cores/laranja.jpg" }
        ]
      }
    };

    // Definição dos kits de revestimento - AGORA COM IMAGENS
    const kitsRevestimento = {
      "pelucia_total": {
        nome: "Kit todo na Pelúcia (Xinil)",
        descricao: "Todas as partes na pelúcia (Xinil)",
        preco: 850,
        imagem: "imagens/kits/kit_pelucia_total.jpg",
        partes: {
          kit: { material: "pelucia", cor: "", corNome: "" }
        }
      },
      "couro_chao_pelucia_resto": {
        nome: "Kit Couro no Chão + Resto na Pelúcia (Xinil)",
        descricao: "Chão, Pedais, e Sapateira em couro sintético, demais partes em pelúcia (Xinil)",
        preco: 950,
        imagem: "imagens/kits/kit_couro_chao.jpg",
        partes: {
          chao: { material: "couro", cor: "", corNome: "" },
          banco: { material: "pelucia", cor: "", corNome: "" },
          braco: { material: "pelucia", cor: "", corNome: "" },
          cabeca: { material: "pelucia", cor: "", corNome: "" },
          laterais: { material: "pelucia", cor: "", corNome: "" }
        }
      },
      "couro_total": {
        nome: "Couro sintético Sporte no chão + restante na Pelúcia (Xinil)",
        descricao: "Chão + pedais + sapateira em couro, restante do kit na pelucia (Xinil)",
        preco: 1000,
        imagem: "imagens/kits/kit_couro_total.jpg",
        partes: {
          chao: { material: "couro", cor: "", corNome: "" },
          banco: { material: "pelucia", cor: "", corNome: "" },
          braco: { material: "pelucia", cor: "", corNome: "" },
          cabeca: { material: "pelucia", cor: "", corNome: "" },
          laterais: { material: "pelucia", cor: "", corNome: "" }
        },
        opcaoChao: true // ⚙️ novo campo que ativa o seletor de tipo do chão
      },
      "couro_sport": {
        nome: "Kit Couro com detalhes esportivos ",
        descricao: "Couro sintetico no chão + banco, apoio de braço e apoio de cabeça no Sued, Restante na Pelucia (Xinil)",
        preco: 1150,
        imagem: "imagens/kits/kit_couro_sport.jpg",
        partes: {
          chao: { material: "couro_sport", cor: "", corNome: "", detalhe: "" },
          banco: { material: "couro_sport", cor: "", corNome: "", detalhe: "" },
          braco: { material: "couro_sport", cor: "", corNome: "", detalhe: "" },
          cabeca: { material: "couro_sport", cor: "", corNome: "", detalhe: "" },
          laterais: { material: "couro_sport", cor: "", corNome: "", detalhe: "" }
        }
      }
    };

    let carrinho = [];
    let maquinaSelecionada = "";
    let kitAtual = null;
    let personalizacaoAtual = {};

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

      kitAtual = { ...kit, chave: chave };
      personalizacaoAtual = JSON.parse(JSON.stringify(kit.partes));


      document.getElementById("selecao-container").style.display = "block";

      setTimeout(() => {
        document.getElementById("selecao-container").scrollIntoView({
          behavior: "smooth"
        });
      }, 100);

      // Mostrar modal de personalização
      // mostrarModalPersonalizacao();
    }

    /* =====================================================
       MODAL DE PERSONALIZAÇÃO
       ===================================================== */
    function mostrarModalPersonalizacao() {
      const modal = document.getElementById("modal-cores");
      const conteudoModal = document.getElementById("conteudo-modal");

      // Limpar conteúdo anterior
      conteudoModal.innerHTML = "";

      // Título do modal
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

        // Gerar opções de cores para esta parte
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

      // Adicionar seletor de tipo de chão se necessário
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

      // Mostrar modal
      modal.style.display = "flex";

      // Atualizar resumo
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
      // Atualizar seleção na personalização atual
      personalizacaoAtual[parte].cor = corImagem;
      personalizacaoAtual[parte].corNome = corNome;

      // Atualizar visual da seleção
      const cards = document.querySelectorAll(`[data-parte="${parte}"]`);
      cards.forEach(card => {
        card.classList.remove("selecionado");
        if (card.dataset.cor === corNome) {
          card.classList.add("selecionado");
        }
      });

      // Atualizar resumo
      atualizarResumoPersonalizacao();
    }

    function atualizarTipoChao(tipo) {
      if (personalizacaoAtual.chao) {
        personalizacaoAtual.chao.material = tipo;

        // Atualizar opções de cores para o chão
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

        // Resetar seleção do chão
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

      // Fechar modal
      document.getElementById("modal-cores").style.display = "none";

      // Continuar com o fluxo normal
      continuarSelecaoAposPersonalizacao();
    }

    function continuarSelecaoAposPersonalizacao() {
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

      secaoSelecao.scrollIntoView({ behavior: "smooth" });
    }

    // Fechar modal ao clicar no X
    document.getElementById("fechar-modal").addEventListener("click", function () {
      document.getElementById("modal-cores").style.display = "none";
    });

    // Fechar modal ao clicar fora dele
    window.addEventListener("click", function (event) {
      const modal = document.getElementById("modal-cores");
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });

    /* =====================================================
       RESTANTE DO CÓDIGO (seleção de máquina, carrinho, formulário)
       ===================================================== */
    function configurarSelecaoMaquina() {
      const itensMaquina = document.querySelectorAll('.maquina-item');

      itensMaquina.forEach(item => {
        item.addEventListener('click', function () {
          // Remove seleção anterior
          itensMaquina.forEach(i => i.classList.remove('selecionado'));

          // Adiciona seleção atual
          this.classList.add('selecionado');

          // Atualiza máquina selecionada
          maquinaSelecionada = this.querySelector('p').textContent;
        });
      });
    }

    function adicionarAoCarrinho() {
      if (!kitAtual) return alert("Selecione um kit primeiro!");

      // Verifica se já existe no carrinho
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

    // ... (restante das funções de validação e envio para WhatsApp)

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
    });
