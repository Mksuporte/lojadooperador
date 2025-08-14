  // Dados dos produtos atualizados
  const dados = {
    "Linha Amarela": {
      "Zoomlion": {
        "ZE205E": { anos: ["2018", "2019", "2020"] },
        "ZE360E": { anos: ["2019", "2020", "2021"] }
      },
      "Komatsu": {
        "PC200": { anos: ["2015", "2016", "2017"] },
        "PC300": { anos: ["2019", "2020", "2021"] },
        "PC450": { anos: ["2018", "2019", "2020"] }
      },
      "Hyundai": {
        "R220LC-9S": { anos: ["2017", "2018", "2019"] },
        "R300LC-9S": { anos: ["2019", "2020", "2021"] }
      },
      "John Deere": {
        "200G": { anos: ["2016", "2017", "2018"] },
        "350G": { anos: ["2019", "2020", "2021"] }
      },
      "New Holland": {
        "C232": { anos: ["2015", "2016", "2017"] },
        "C238": { anos: ["2018", "2019", "2020"] }
      },
      "Volvo": {
        "EC200E": { anos: ["2017", "2018", "2019"] },
        "EC300E": { anos: ["2019", "2020", "2021"] }
      },
      "CAT": {
        "320D": { anos: ["2015", "2016", "2017"] },
        "336D": { anos: ["2018", "2019", "2020"] },
        "349D": { anos: ["2019", "2020", "2021"] }
      },
      "SDLG": {
        "E6135F": { anos: ["2018", "2019", "2020"] },
        "E6225F": { anos: ["2019", "2020", "2021"] }
      },
      "Case": {
        "CX210C": { anos: ["2017", "2018", "2019"] },
        "CX350C": { anos: ["2019", "2020", "2021"] }
      },
      "Link Belt": {
        "X3 2050": { anos: ["2016", "2017", "2018"] },
        "X3 3050": { anos: ["2019", "2020", "2021"] }
      }
    },
    "Linha Verde": {
      "John Deere": {
        "Trator 5075E": { anos: ["2018", "2019", "2020"] },
        "Trator 6110J": { anos: ["2019", "2020", "2021"] },
        "Colheitadeira S550": { anos: ["2017", "2018", "2019"] },
        "Colheitadeira S770": { anos: ["2019", "2020", "2021"] },
        "Plantadeira 2512H": { anos: ["2016", "2017", "2018"] },
        "Pulverizador 4730": { anos: ["2018", "2019", "2020"] }
      },
      "Case IH": {
        "Trator Magnum 340": { anos: ["2017", "2018", "2019"] },
        "Trator Puma 220": { anos: ["2019", "2020", "2021"] },
        "Colheitadeira Axial Flow 240": { anos: ["2015", "2016", "2017"] },
        "Colheitadeira Axial Flow 7150": { anos: ["2019", "2020", "2021"] },
        "Plantadeira Exact Emerge 1200": { anos: ["2018", "2019", "2020"] },
        "Pulverizador Patriot 2250": { anos: ["2017", "2018", "2019"] }
      },
      "New Holland": {
        "Trator T7.210": { anos: ["2016", "2017", "2018"] },
        "Trator T8.390": { anos: ["2019", "2020", "2021"] },
        "Colheitadeira CR6.80": { anos: ["2018", "2019", "2020"] },
        "Colheitadeira TC5.90": { anos: ["2019", "2020", "2021"] },
        "Plantadeira PL5000": { anos: ["2017", "2018", "2019"] },
        "Pulverizador PL6020": { anos: ["2019", "2020", "2021"] }
      },
      "Massey Ferguson": {
        "Trator MF 6713": { anos: ["2015", "2016", "2017"] },
        "Trator MF 7714": { anos: ["2018", "2019", "2020"] },
        "Colheitadeira MF 9250": { anos: ["2017", "2018", "2019"] },
        "Colheitadeira MF 9795": { anos: ["2019", "2020", "2021"] },
        "Plantadeira MF 9800": { anos: ["2016", "2017", "2018"] },
        "Pulverizador MF 3200": { anos: ["2018", "2019", "2020"] }
      },
      "Valtra": {
        "Trator A114": { anos: ["2017", "2018", "2019"] },
        "Trator N134": { anos: ["2019", "2020", "2021"] },
        "Colheitadeira BH 2080": { anos: ["2016", "2017", "2018"] },
        "Colheitadeira BH 3080": { anos: ["2018", "2019", "2020"] },
        "Plantadeira VP 1250": { anos: ["2015", "2016", "2017"] },
        "Pulverizador VP 3000": { anos: ["2019", "2020", "2021"] }
      }
    },
    "Linha Mini": {
      "Bobcat": {
        "E20": { anos: ["2018", "2019", "2020"] },
        "E35": { anos: ["2019", "2020", "2021"] }
      },
      "Takeuchi": {
        "TB216": { anos: ["2017", "2018", "2019"] },
        "TB230": { anos: ["2019", "2020", "2021"] }
      }
    }
  };

  // Cores numeradas de 1 a 30
  // Lista completa com nomes personalizados
const cores = [
"Vermelho Ferrari",
"Azul Royal",
"Preto Fosco",
"Branco Gelo",
"Verde Floresta",
"Amarelo Ouro",
"Cinza Chumbo",
"Laranja Queimado",
"Roxo Profundo",
"Marrom Chocolate",
"Azul Celeste",
"Verde Limão",
"Rosa Pink",
"Bege Areia",
"Grafite",
"Vinho",
"Turquesa",
"Lilás",
"Dourado",
"Prata",
"Cobre",
"Verde Militar",
"Azul Marinho",
"Bordô",
"Coral",
"Mostarda",
"Petróleo",
"Lavanda",
"Terracota",
"Off-White"
];
  // Mapeamento de tipos de máquina para exibição
  const tipoMaquinaMap = {
    'escavadeira-hidraulica': 'Escavadeira Hidráulica',
    'retro-escavadeira': 'Retro Escavadeira',
    'pa-carregadeira': 'Pá Carregadeira',
    'moto-niveladora': 'Moto Niveladora',
    'trator-esteira': 'Trator de Esteira',
    'trator': 'Trator',
    'pulverizador': 'Pulverizador',
    'colheitadeira': 'Colheitadeira',
    'mini-escavadeira': 'Mini Escavadeira',
    'mini-carregadeira': 'Mini Carregadeira'
  };

  // Variáveis globais
  const state = {
    linha: '',
    tipoMaquina: '',
    carrinho: JSON.parse(localStorage.getItem('carrinho')) || [],
    frete: {
      valor: 0,
      prazo: 0,
      transportadora: 'Correios'
    }
  };

  // Armazenamento da cor selecionada
  let corSelecionada = {
    nome: '',
    imagem: 'imagens/cores/placeholder.jpg'
  };

  // Elementos DOM
  const botoesLinha = document.querySelectorAll('.botao-linha');
  const selecaoContainer = document.getElementById('selecao-container');
  const marcaSelect = document.getElementById('marca');
  const modeloSelect = document.getElementById('modelo');
  const anoSelect = document.getElementById('ano');
  const corPreviewImg = document.getElementById('cor-preview-img');
  const maquinasAmarelas = document.getElementById('maquinas-amarelas');
  const maquinasVerdes = document.getElementById('maquinas-verdes');
  const maquinasMini = document.getElementById('maquinas-mini');
  const botoesMaquina = document.querySelectorAll('.botao-maquina');
  const btnFinalizar = document.querySelector('.btn-finalizar');
  const feedback = document.getElementById('feedback');
  const feedbackIcon = document.getElementById('feedback-icon');
  const feedbackMessage = document.getElementById('feedback-message');
  const formClienteContainer = document.getElementById('form-cliente-container');
  const formCliente = document.getElementById('formCliente');
  const cepFreteInput = document.getElementById('cep-frete');
  const resultadoFrete = document.getElementById('resultado-frete');
  const valorFreteSpan = document.getElementById('valor-frete');
  const prazoFreteSpan = document.getElementById('prazo-frete');
  const transportadoraFreteSpan = document.getElementById('transportadora-frete');
  const totalItensSpan = document.getElementById('total-itens');
  const totalGeralSpan = document.getElementById('total-geral');
  const modalCores = document.getElementById('modal-cores');
  const gridCores = document.getElementById('grid-cores');
  const fecharModal = document.querySelector('.fechar-modal');
  const confirmarCorBtn = document.getElementById('confirmar-cor');
  const seletorCor = document.getElementById('seletor-cor');
  const textoCorSelecionada = document.getElementById('texto-cor-selecionada');
  let corSelecionadaModal = null;

  // Inicialização
  document.addEventListener('DOMContentLoaded', () => {
    atualizarCarrinho();
    atualizarPreviewCor();
    
    // Adiciona eventos aos botões de linha principal
    botoesLinha.forEach(botao => {
      botao.addEventListener('click', function() {
        selecionarLinha(this);
      });
    });
    
    // Adiciona eventos aos botões de máquina
    botoesMaquina.forEach(botao => {
      botao.addEventListener('click', function() {
        selecionarMaquina(this);
      });
    });

    // Abrir modal de cores quando clicar no seletor
    seletorCor.addEventListener('click', abrirModalCores);

    // Fechar modal
    fecharModal.addEventListener('click', fecharModalCores);
    modalCores.addEventListener('click', function(e) {
      if (e.target === modalCores) {
        fecharModalCores();
      }
    });

    // Confirmar seleção de cor
    confirmarCorBtn.addEventListener('click', confirmarCorSelecionada);

    // Fechar modal com ESC
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modalCores.style.display === 'flex') {
        fecharModalCores();
      }
    });

    // Auto-completar endereço via CEP
    document.getElementById('cep').addEventListener('blur', buscarEnderecoViaCEP);
  });

  // Função para buscar endereço via CEP (ViaCEP)
  async function buscarEnderecoViaCEP() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    
    if (cep.length !== 8) {
      return;
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (!data.erro) {
        document.getElementById('estado').value = data.uf;
        document.getElementById('cidade').value = data.localidade;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('rua').value = data.logradouro;
      } else {
        mostrarFeedback('CEP não encontrado', 'erro');
      }
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
      mostrarFeedback('Erro ao buscar CEP', 'erro');
    }
  }

  // Função para calcular frete usando API pública (ViaCEP + lógica regional)
  async function calcularFrete() {
    const cep = cepFreteInput.value.replace(/\D/g, '');
    
    if (!cep || cep.length !== 8) {
      mostrarFeedback('Digite um CEP válido (8 dígitos)', 'erro');
      return;
    }

    // Mostrar loading
    const btnFrete = document.querySelector('.btn-calcular-frete');
    btnFrete.disabled = true;
    btnFrete.textContent = 'Calculando...';

    try {
      // 1. Validar CEP usando ViaCEP
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const cepData = await response.json();
      
      if (cepData.erro) {
        throw new Error('CEP não encontrado');
      }

      // 2. Calcular frete baseado na região do CEP
      const regiao = parseInt(cep.charAt(0));
      let valorFrete = 0;
      let prazoFrete = 0;
      let transportadora = 'Correios';

      // Tabela de frete baseada na região
      switch(regiao) {
        case 1: case 2: case 3: // Sudeste
          valorFrete = 30 + (state.carrinho.length * 5);
          prazoFrete = 3;
          transportadora = 'Correios PAC';
          break;
        case 4: case 5: // Nordeste
          valorFrete = 45 + (state.carrinho.length * 7);
          prazoFrete = 7;
          transportadora = 'Correios PAC';
          break;
        case 6: // Centro-Oeste
          valorFrete = 40 + (state.carrinho.length * 6);
          prazoFrete = 5;
          transportadora = 'Correios SEDEX';
          break;
        case 7: case 8: case 9: // Sul e Norte
          valorFrete = 50 + (state.carrinho.length * 8);
          prazoFrete = 8;
          transportadora = 'Correios PAC';
          break;
        default: // Outros
          valorFrete = 60 + (state.carrinho.length * 10);
          prazoFrete = 10;
          transportadora = 'Transportadora Parceira';
      }

      // 3. Atualizar estado e UI
      state.frete = {
        valor: valorFrete,
        prazo: prazoFrete,
        transportadora: transportadora
      };

      valorFreteSpan.textContent = `R$ ${state.frete.valor.toFixed(2)}`;
      prazoFreteSpan.textContent = `${state.frete.prazo} dias úteis`;
      transportadoraFreteSpan.textContent = state.frete.transportadora;
      resultadoFrete.style.display = 'block';

      atualizarTotais();
      mostrarFeedback('Frete calculado com sucesso!');

    } catch (error) {
      console.error('Erro no cálculo de frete:', error);
      mostrarFeedback(`Erro ao calcular frete: ${error.message}`, 'erro');
      
      // Usar valores padrão como fallback
      state.frete = {
        valor: 50 + (state.carrinho.length * 10),
        prazo: 5,
        transportadora: 'Transportadora padrão'
      };
      
      valorFreteSpan.textContent = `R$ ${state.frete.valor.toFixed(2)}`;
      prazoFreteSpan.textContent = `${state.frete.prazo} dias úteis`;
      transportadoraFreteSpan.textContent = state.frete.transportadora;
      resultadoFrete.style.display = 'block';
    } finally {
      btnFrete.disabled = false;
      btnFrete.textContent = 'Calcular';
    }
  }

  // Função para atualizar a pré-visualização da cor
  function atualizarPreviewCor() {
    corPreviewImg.src = corSelecionada.imagem;
    corPreviewImg.alt = `Pré-visualização ${corSelecionada.nome}`;
    textoCorSelecionada.textContent = corSelecionada.nome || 'Selecione uma cor';
  }

  // Função para abrir o modal de cores
  function abrirModalCores() {
    // Limpar grid
    gridCores.innerHTML = '';
    
    // Popular o grid com as opções de cor
    cores.forEach((cor, index) => {
      const corItem = document.createElement('div');
      corItem.className = 'cor-item';
      if (corSelecionada.nome === cor) {
        corItem.classList.add('selecionada');
        corSelecionadaModal = cor;
      }
      
      corItem.dataset.cor = cor;
      corItem.dataset.imagem = `imagens/cores/cor${index+1}.jpg`;
      
      corItem.innerHTML = `
        <img src="imagens/cores/cor${index+1}.jpg" alt="${cor}" loading="lazy">
        <span>${cor}</span>
      `;
      
      corItem.addEventListener('click', function() {
        // Remover seleção anterior
        document.querySelectorAll('.cor-item.selecionada').forEach(item => {
          item.classList.remove('selecionada');
        });
        
        // Adicionar seleção atual
        this.classList.add('selecionada');
        corSelecionadaModal = this.dataset.cor;
      });
      
      gridCores.appendChild(corItem);
    });
    
    // Mostrar modal
    modalCores.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  // Função para fechar o modal de cores
  function fecharModalCores() {
    modalCores.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  // Função para confirmar a cor selecionada
  function confirmarCorSelecionada() {
    if (corSelecionadaModal) {
      const corItemSelecionado = document.querySelector('.cor-item.selecionada');
      if (corItemSelecionado) {
        corSelecionada = {
          nome: corItemSelecionado.dataset.cor,
          imagem: corItemSelecionado.dataset.imagem
        };
        atualizarPreviewCor();
        fecharModalCores();
        
        // Foco no botão de adicionar ao carrinho para melhor usabilidade
        setTimeout(() => {
          document.querySelector('[onclick="adicionarAoCarrinho()"]').focus();
        }, 100);
      } else {
        mostrarFeedback('Selecione uma cor antes de confirmar', 'erro');
      }
    } else {
      mostrarFeedback('Nenhuma cor selecionada', 'erro');
    }
  }

  // Função para resetar a seleção
  function resetarSelecao() {
    // Resetar seleção de cor
    corSelecionada = {
      nome: '',
      imagem: 'imagens/cores/placeholder.jpg'
    };
    atualizarPreviewCor();
    
    // Resetar dropdowns
    marcaSelect.selectedIndex = 0;
    modeloSelect.innerHTML = '<option value="">Selecione uma marca primeiro</option>';
    anoSelect.innerHTML = '<option value="">Selecione um modelo primeiro</option>';
    
    // Resetar máquina selecionada
    document.querySelectorAll('.botao-maquina.ativo').forEach(btn => btn.classList.remove('ativo'));
    state.tipoMaquina = '';
  }

  // Função para mostrar formulário do cliente
  function mostrarFormularioCliente() {
    if (state.carrinho.length === 0) {
      mostrarFeedback('Carrinho vazio!', 'erro');
      return;
    }
    
    document.querySelector('.carrinho').style.display = 'none';
    formClienteContainer.style.display = 'block';
    formClienteContainer.scrollIntoView({ behavior: 'smooth' });
  }

  // Função para selecionar linha principal
  function selecionarLinha(botao) {
    // Remover classe 'ativo' de todos os botões
    botoesLinha.forEach(btn => btn.classList.remove('ativo'));
    
    // Adicionar classe 'ativo' ao botão clicado
    botao.classList.add('ativo');
    
    // Definir linha selecionada
    state.linha = botao.dataset.linha;
    
    // Mostrar botões de máquina apropriados
    if (state.linha === "Linha Amarela") {
      maquinasAmarelas.style.display = "grid";
      maquinasVerdes.style.display = "none";
      maquinasMini.style.display = "none";
    } else if (state.linha === "Linha Verde") {
      maquinasAmarelas.style.display = "none";
      maquinasVerdes.style.display = "grid";
      maquinasMini.style.display = "none";
    } else if (state.linha === "Linha Mini") {
      maquinasAmarelas.style.display = "none";
      maquinasVerdes.style.display = "none";
      maquinasMini.style.display = "grid";
    }
    
    // Ocultar formulário de seleção até escolher a máquina
    selecaoContainer.style.display = 'none';
    
    // Rolagem suave para os botões de máquina
    setTimeout(() => {
      if (state.linha === "Linha Amarela") {
        maquinasAmarelas.scrollIntoView({ behavior: 'smooth' });
      } else if (state.linha === "Linha Verde") {
        maquinasVerdes.scrollIntoView({ behavior: 'smooth' });
      } else if (state.linha === "Linha Mini") {
        maquinasMini.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }

  // Função para selecionar máquina específica
  function selecionarMaquina(botao) {
    // Remover classe 'ativo' de todos os botões de máquina
    botoesMaquina.forEach(btn => btn.classList.remove('ativo'));
    
    // Adicionar classe 'ativo' ao botão clicado
    botao.classList.add('ativo');
    
    // Definir tipo de máquina selecionada
    state.tipoMaquina = botao.dataset.tipo;
    
    // Mostrar container de seleção
    selecaoContainer.style.display = 'block';
    
    // Popular marcas
    popularMarcas();
    
    // Rolagem suave para o formulário
    setTimeout(() => {
      selecaoContainer.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  // Popular marcas
  function popularMarcas() {
    marcaSelect.innerHTML = '<option value="">Selecione...</option>';
    modeloSelect.innerHTML = '<option value="">Selecione uma marca primeiro</option>';
    anoSelect.innerHTML = '<option value="">Selecione um modelo primeiro</option>';
    
    // Obter todas as marcas disponíveis para a linha selecionada
    const marcas = Object.keys(dados[state.linha]);
    
    marcas.forEach(marca => {
      const option = document.createElement('option');
      option.value = marca;
      option.textContent = marca;
      marcaSelect.appendChild(option);
    });
  }

  // Evento para marca
  marcaSelect.addEventListener('change', function() {
    modeloSelect.innerHTML = '<option value="">Selecione...</option>';
    anoSelect.innerHTML = '<option value="">Selecione um modelo primeiro</option>';
    
    if (!this.value) return;
    
    // Obter todos os modelos da marca selecionada
    const modelos = Object.keys(dados[state.linha][this.value]);
    
    modelos.forEach(modelo => {
      const option = document.createElement('option');
      option.value = modelo;
      option.textContent = modelo;
      modeloSelect.appendChild(option);
    });
  });

  // Evento para modelo
  modeloSelect.addEventListener('change', function() {
    anoSelect.innerHTML = '<option value="">Selecione...</option>';
    
    if (!this.value || !marcaSelect.value) return;
    
    // Obter anos para o modelo selecionado
    const anosDisponiveis = dados[state.linha][marcaSelect.value][this.value].anos;
    
    anosDisponiveis.forEach(ano => {
      const option = document.createElement('option');
      option.value = ano;
      option.textContent = ano;
      anoSelect.appendChild(option);
    });
  });

  // Adicionar ao carrinho
  function adicionarAoCarrinho() {
    const campos = [
      {id: 'marca', nome: 'Marca'},
      {id: 'modelo', nome: 'Modelo'},
      {id: 'ano', nome: 'Ano'}
    ];

    // Verificar se uma cor foi selecionada
    if (!corSelecionada.nome) {
      mostrarFeedback('Selecione uma cor', 'erro');
      return;
    }

    // Verificar outros campos vazios
    const faltando = campos.filter(campo => !document.getElementById(campo.id).value);
    
    if(faltando.length > 0) {
      mostrarFeedback(`Preencha: ${faltando.map(c => c.nome).join(', ')}`, 'erro');
      return;
    }
    
    const item = {
      linha: state.linha,
      tipo: state.tipoMaquina,
      marca: marcaSelect.value,
      modelo: modeloSelect.value,
      ano: anoSelect.value,
      cor: corSelecionada.nome,
      id: Date.now()
    };
    
    state.carrinho.push(item);
    salvarCarrinho();
    atualizarCarrinho();
    mostrarFeedback('Item adicionado ao carrinho!');
    
    // Resetar seleção para novo item
    resetarSelecao();
    
    // Rolagem suave para o carrinho
    setTimeout(() => {
      document.querySelector('.carrinho').scrollIntoView({ behavior: 'smooth' });
    }, 300);
  }

  // Mostrar feedback visual
  function mostrarFeedback(mensagem, tipo = 'sucesso') {
    feedbackIcon.textContent = tipo === 'sucesso' ? '✓' : '✗';
    feedbackMessage.textContent = mensagem;
    
    // Atualizar classes
    feedback.className = 'feedback';
    feedback.classList.add(tipo === 'erro' ? 'erro' : 'sucesso');
    feedback.classList.add('visible');
    
    setTimeout(() => {
      feedback.classList.remove('visible');
    }, 3000);
  }

  // Salvar carrinho no localStorage
  function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(state.carrinho));
    atualizarTotais();
  }

  // Atualizar exibição do carrinho
  function atualizarCarrinho() {
    const lista = document.getElementById("listaCarrinho");
    lista.innerHTML = "";
    
    if (state.carrinho.length === 0) {
      lista.innerHTML = "<li style='text-align:center;'>Seu carrinho está vazio</li>";
      atualizarTotais();
      return;
    }
    
    state.carrinho.forEach((item, i) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <div>
          <strong>${item.linha} - ${tipoMaquinaMap[item.tipo] || item.tipo}</strong><br>
          ${item.marca} ${item.modelo} (${item.ano})<br>
          Cor: ${item.cor}
        </div>
        <button onclick="removerItem(${item.id})" style="
          background: #ff3333;
          color: white;
          border: none;
          border-radius: 5px;
          padding: 5px 10px;
          cursor: pointer;
          font-size: 0.8rem;
        ">Remover</button>
      `;
      lista.appendChild(li);
    });
    
    atualizarTotais();
  }

  // Atualizar totais do carrinho
  function atualizarTotais() {
    const totalItens = state.carrinho.length * 450;
    totalItensSpan.textContent = `R$ ${totalItens.toFixed(2)}`;
    
    const totalGeral = totalItens + state.frete.valor;
    totalGeralSpan.textContent = `R$ ${totalGeral.toFixed(2)}`;
  }

  // Remover item do carrinho
  function removerItem(id) {
    const index = state.carrinho.findIndex(item => item.id === id);
    if (index !== -1) {
      state.carrinho.splice(index, 1);
      salvarCarrinho();
      atualizarCarrinho();
      mostrarFeedback('Item removido do carrinho');
    }
  }

  // Gerar protocolo aleatório
  function generateProtocol() {
    const datePart = new Date().toISOString().slice(2, 10).replace(/-/g, '');
    const randomPart = Math.floor(1000 + Math.random() * 9000);
    return `PED-${datePart}-${randomPart}`;
  }

  // Finalizar pedido
  function finalizarPedido() {
    // Verificar dados do cliente
    const camposCliente = [
      'nome', 'cpf_cnpj', 'inscricao_estadual', 'telefone',
      'cep', 'estado', 'cidade', 'bairro', 'rua', 'numero'
    ];
    
    const faltando = camposCliente.filter(campo => !document.getElementById(campo).value);
    
    if(faltando.length > 0) {
      mostrarFeedback('Preencha todos os dados do cliente', 'erro');
      return;
    }
    
    if (state.carrinho.length === 0) {
      mostrarFeedback('Carrinho vazio!', 'erro');
      return;
    }
    
    // Desabilitar o botão para evitar múltiplos cliques
    const btnEnviar = document.querySelector('#form-cliente-container button');
    btnEnviar.disabled = true;
    btnEnviar.innerHTML = '<span>Preparando mensagem...</span>';
    
    // Salvar dados do cliente
    const cliente = {};
    camposCliente.forEach(campo => {
      cliente[campo] = document.getElementById(campo).value;
    });
    localStorage.setItem('cliente', JSON.stringify(cliente));
    
    // Dados da loja
    const numeroWhatsApp = "554399546879";
    const numeroPedido = Math.floor(10000 + Math.random() * 90000);
    const protocolo = generateProtocol();
    const dataHora = new Date().toLocaleString('pt-BR');
    const pixInfo = "000.000.000-00 (CNPJ)\nNome: HELTO MACHADO";
    
    // Montar cabeçalho
    let mensagem = "*LOJA DO OPERADOR - CAPAS PERSONALIZADAS*\n";
    mensagem += "Av. Exemplo, 123 - Centro, Ivaipora, PR, 86870-000\n";
    mensagem += "43 9954-6879\n";
    mensagem += "--------------------------------------------------\n";
    mensagem += `*Pedido:* ${numeroPedido}\n`;
    mensagem += `*Protocolo:* ${protocolo}\n`;
    mensagem += `*Data/Hora:* ${dataHora}\n`;
    mensagem += "--------------------------------------------------\n";
    
    // Dados do cliente
    mensagem += "*DADOS DO CLIENTE*\n";
    mensagem += `Nome: ${cliente.nome}\n`;
    mensagem += `CPF/CNPJ: ${cliente.cpf_cnpj}\n`;
    mensagem += `Inscrição Estadual: ${cliente.inscricao_estadual}\n`;
    mensagem += `Telefone: ${cliente.telefone}\n`;
    mensagem += `Endereço: ${cliente.rua}, ${cliente.numero}, ${cliente.bairro}\n`;
    mensagem += `${cliente.cidade}/${cliente.estado} - CEP: ${cliente.cep}\n`;
    mensagem += "--------------------------------------------------\n";
    
    // Itens do pedido
    mensagem += "*ITENS DO PEDIDO*\n\n";
    state.carrinho.forEach((item, index) => {
      mensagem += `${index+1} ${item.linha} - ${tipoMaquinaMap[item.tipo] || item.tipo}\n`;
      mensagem += `   ${item.marca} ${item.modelo} (${item.ano})\n`;
      mensagem += `   Cor: ${item.cor}\n`;
      mensagem += `   Valor: R$ 450,00\n\n`;
    });
    
    // Rodapé
    const totalItens = state.carrinho.length * 450;
    const totalGeral = totalItens + state.frete.valor;
    
    mensagem += "--------------------------------------------------\n";
    mensagem += `*Taxa de entrega:* R$ ${state.frete.valor.toFixed(2)}\n`;
    mensagem += `*Transportadora:* ${state.frete.transportadora}\n`;
    mensagem += `*Prazo de entrega:* ${state.frete.prazo} dias úteis\n`;
    mensagem += `*Total dos itens:* R$ ${totalItens.toFixed(2)}\n`;
    mensagem += `*Total:* R$ ${totalGeral.toFixed(2)}\n\n`;
    mensagem += "*Forma de Pagamento:* A definir\n";
    mensagem += `*Chave PIX:* ${pixInfo}\n`;
    mensagem += "--------------------------------------------------\n";
    mensagem += "*Observações:* \n";
    mensagem += "--------------------------------------------------\n";
    mensagem += "Agradecemos pela preferência! Confirmaremos seu pedido em breve.";
    
    // Codificar a mensagem para URL
    const mensagemCodificada = encodeURIComponent(mensagem);
    
    // Criar o link do WhatsApp
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
    
    // Abrir em nova aba após um pequeno delay para dar feedback visual
    setTimeout(() => {
      window.open(url, "_blank");
      
      // Restaurar o botão após 2 segundos
      setTimeout(() => {
        btnEnviar.disabled = false;
        btnEnviar.innerHTML = '<span>📦 Enviar Pedido via WhatsApp</span>';
      }, 2000);
    }, 500);
  }
