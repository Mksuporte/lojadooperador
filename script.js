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

// Definição dos materiais e cores
const materiais = {
    couro: {
      nome: "Couro Sintético",
      cores: [
        { nome: "Preto Elegance", codigo: "#1A1A1A" },
        { nome: "Marrom Clássico", codigo: "#5E2C04" },
        { nome: "Bege Natural", codigo: "#E6D5B8" },
        { nome: "Vinho Nobre", codigo: "#722F37" },
        { nome: "Azul Royal", codigo: "#0F056B" },
        { nome: "Verde Floresta", codigo: "#228B22" },
        { nome: "Grafite", codigo: "#383838" },
        { nome: "Terra Queimada", codigo: "#8B4513" },
        { nome: "Borgonha", codigo: "#800020" },
        { nome: "Caramelo", codigo: "#D27D46" },
        { nome: "Cinza Platinum", codigo: "#C0C0C0" },
        { nome: "Azul Petróleo", codigo: "#003B4D" },
        { nome: "Off-White", codigo: "#F5F5DC" }
      ]
    },
    couro_sport: {
      nome: "Couro Sport",
      cores: [
        { nome: "Preto com Costuras Vermelhas", codigo: "#000000", detalhe: "#FF0000" },
        { nome: "Azul Racing com Branco", codigo: "#00008B", detalhe: "#FFFFFF" },
        { nome: "Cinza Metalizado com Laranja", codigo: "#808080", detalhe: "#FFA500" },
        { nome: "Branco Gelado com Preto", codigo: "#F8F8FF", detalhe: "#000000" }
      ]
    },
    pelucia: {
      nome: "Pelúcia (Xinil)",
      cores: [
        { nome: "Preto Fosco", codigo: "#0D0D0D" },
        { nome: "Cinza Chumbo", codigo: "#2F4F4F" },
        { nome: "Azul Marinho", codigo: "#000080" },
        { nome: "Verde Militar", codigo: "#4B5320" },
        { nome: "Vermelho Ferrari", codigo: "#FF2800" },
        { nome: "Bege Areia", codigo: "#F5E8C7" },
        { nome: "Bordô", codigo: "#7C0A02" },
        { nome: "Azul Celeste", codigo: "#4682B4" },
        { nome: "Terracota", codigo: "#E2725B" },
        { nome: "Lavanda", codigo: "#967BB6" },
        { nome: "Verde Limão", codigo: "#C9DC87" },
        { nome: "Rosa Blush", codigo: "#FFD1DC" }
      ]
    }
};

// Definição dos kits de revestimento
const kitsRevestimento = {
    "pelucia_total": {
      nome: "Kit em Pelúcia (Xinil) - Total",
      descricao: "Todas as partes em pelúcia/xinil",
      preco: 1200,
      partes: {
        chao: { material: "pelucia", cor: "", corNome: "" },
        banco: { material: "pelucia", cor: "", corNome: "" },
        braco: { material: "pelucia", cor: "", corNome: "" },
        cabeca: { material: "pelucia", cor: "", corNome: "" },
        laterais: { material: "pelucia", cor: "", corNome: "" }
      }
    },
    "couro_chao_pelucia_resto": {
      nome: "Couro no Chão + Resto em Pelúcia",
      descricao: "Chão em couro sintético, demais partes em pelúcia",
      preco: 1500,
      partes: {
        chao: { material: "couro", cor: "", corNome: "" },
        banco: { material: "pelucia", cor: "", corNome: "" },
        braco: { material: "pelucia", cor: "", corNome: "" },
        cabeca: { material: "pelucia", cor: "", corNome: "" },
        laterais: { material: "pelucia", cor: "", corNome: "" }
      }
    },
    "couro_total": {
      nome: "Kit Couro Completo",
      descricao: "Todas as partes em couro sintético",
      preco: 2000,
      partes: {
        chao: { material: "couro", cor: "", corNome: "" },
        banco: { material: "couro", cor: "", corNome: "" },
        braco: { material: "couro", cor: "", corNome: "" },
        cabeca: { material: "couro", cor: "", corNome: "" },
        laterais: { material: "couro", cor: "", corNome: "" }
      }
    },
    "couro_sport": {
      nome: "Kit Couro Sport",
      descricao: "Couro com detalhes esportivos",
      preco: 2200,
      partes: {
        chao: { material: "couro_sport", cor: "", corNome: "", detalhe: "" },
        banco: { material: "couro_sport", cor: "", corNome: "", detalhe: "" },
        braco: { material: "couro_sport", cor: "", corNome: "", detalhe: "" },
        cabeca: { material: "couro_sport", cor: "", corNome: "", detalhe: "" },
        laterais: { material: "couro_sport", cor: "", corNome: "", detalhe: "" }
      }
    }
};

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

// Armazenamento do kit selecionado
let kitSelecionado = null;

// Variável para controlar o tipo de revestimento selecionado
let tipoRevestimento = 'cor-simples';

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
const kitRevestimentoContainer = document.getElementById('kit-revestimento-container');
const personalizacaoContainer = document.getElementById('personalizacao-container');
const partesPersonalizacao = document.getElementById('partes-personalizacao');

let corSelecionadaModal = null;
let parteSelecionadaModal = null;

// Função para selecionar o tipo de revestimento
function selecionarTipoRevestimento(tipo) {
    tipoRevestimento = tipo;
    
    // Ativar/desativar botões
    document.querySelectorAll('.botao-opcao').forEach(botao => {
        botao.classList.toggle('ativo', botao.dataset.tipo === tipo);
    });
    
    // Mostrar container correto
    document.getElementById('cor-simples-container').style.display = 
        tipo === 'cor-simples' ? 'block' : 'none';
    document.getElementById('kit-revestimento-container').style.display = 
        tipo === 'kit-revestimento' ? 'block' : 'none';
    
    // Se for kit, carregar os kits
    if (tipo === 'kit-revestimento') {
        mostrarKitsRevestimento();
    }
}

// Função para mostrar os kits disponíveis
function mostrarKitsRevestimento() {
    const grid = document.querySelector('.kits-grid');
    grid.innerHTML = '';
    
    Object.entries(kitsRevestimento).forEach(([id, kit]) => {
        const kitElement = document.createElement('div');
        kitElement.className = 'botao-linha';
        kitElement.innerHTML = `
            <h4>${kit.nome}</h4>
            <p>${kit.descricao}</p>
            <p>R$ ${kit.preco.toFixed(2)}</p>
        `;
        
        kitElement.addEventListener('click', () => {
            // Resetar seleções anteriores
            document.querySelectorAll('.kits-grid > div').forEach(el => {
                el.classList.remove('selecionado');
            });
            
            // Marcar como selecionado
            kitElement.classList.add('selecionado');
            
            // Armazenar kit selecionado
            kitSelecionado = { ...kit, id };
            
            // Mostrar opções de personalização
            mostrarPersonalizacaoKit();
        });
        
        grid.appendChild(kitElement);
    });
    
    // Esconder personalização inicialmente
    document.getElementById('personalizacao-container').style.display = 'none';
}

// Função para mostrar as partes do kit para personalização
function mostrarPersonalizacaoKit() {
    const container = document.getElementById('personalizacao-container');
    const partesContainer = document.getElementById('partes-personalizacao');
    
    partesContainer.innerHTML = '';
    
    Object.entries(kitSelecionado.partes).forEach(([parte, config]) => {
        const parteDiv = document.createElement('div');
        parteDiv.className = 'parte-kit';
        
        const materialInfo = materiais[config.material];
        
        parteDiv.innerHTML = `
            <label>${parte.replace(/_/g, ' ')} (${materialInfo.nome})</label>
            <div class="seletor-cor-parte" data-parte="${parte}">
                <div class="cor-preview" style="background-color: ${config.cor || '#ccc'}"></div>
                <span>${config.corNome || 'Selecione a cor'}</span>
            </div>
        `;
        
        // Adicionar evento para abrir seletor de cores
        parteDiv.querySelector('.seletor-cor-parte').addEventListener('click', function() {
            abrirModalCoresParaParte(parte, config.material);
        });
        
        partesContainer.appendChild(parteDiv);
    });
    
    container.style.display = 'block';
    
    // Rolagem suave para a seção de personalização
    setTimeout(() => {
        container.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }, 100);
}

// Função para abrir modal de cores para uma parte específica
function abrirModalCoresParaParte(parte, tipoMaterial) {
    const modal = document.getElementById('modal-cores');
    const grid = document.getElementById('grid-cores');
    const tituloModal = modal.querySelector('h3');
    
    tituloModal.textContent = `Selecione cor para ${parte.replace(/_/g, ' ')}`;
    grid.innerHTML = '';
    
    // Obter cores disponíveis para este material
    const cores = materiais[tipoMaterial].cores;
    
    cores.forEach(cor => {
        const corItem = document.createElement('div');
        corItem.className = 'cor-item';
        
        // Estilo especial para cores com detalhes
        if (cor.detalhe) {
            corItem.style.background = `linear-gradient(135deg, ${cor.codigo} 50%, ${cor.detalhe} 50%)`;
        } else {
            corItem.style.backgroundColor = cor.codigo;
        }
        
        corItem.innerHTML = `<span>${cor.nome}</span>`;
        
        corItem.addEventListener('click', function() {
            // Remover seleção anterior
            document.querySelectorAll('.cor-item.selecionada').forEach(item => {
                item.classList.remove('selecionada');
            });
            
            // Adicionar seleção atual
            this.classList.add('selecionada');
            corSelecionadaModal = cor;
            parteSelecionadaModal = parte;
        });
        
        grid.appendChild(corItem);
    });
    
    // Mostrar modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Função para fechar o modal de cores
function fecharModalCores() {
    modalCores.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Função para confirmar a cor selecionada
function confirmarCorSelecionada() {
    if (corSelecionadaModal && parteSelecionadaModal) {
        // Atualizar a cor no kit selecionado
        kitSelecionado.partes[parteSelecionadaModal].cor = corSelecionadaModal.codigo;
        kitSelecionado.partes[parteSelecionadaModal].corNome = corSelecionadaModal.nome;
        
        if (corSelecionadaModal.detalhe) {
            kitSelecionado.partes[parteSelecionadaModal].detalhe = corSelecionadaModal.detalhe;
        }
        
        // Atualizar o preview
        const seletor = document.querySelector(`.seletor-cor-parte[data-parte="${parteSelecionadaModal}"]`);
        if (seletor) {
            const preview = seletor.querySelector('.cor-preview');
            preview.style.backgroundColor = corSelecionadaModal.codigo;
            if (corSelecionadaModal.detalhe) {
                preview.style.background = `linear-gradient(135deg, ${corSelecionadaModal.codigo} 50%, ${corSelecionadaModal.detalhe} 50%)`;
            }
            seletor.querySelector('span').textContent = corSelecionadaModal.nome;
        }
        
        fecharModalCores();
        
        // Resetar variáveis
        corSelecionadaModal = null;
        parteSelecionadaModal = null;
    } else {
        mostrarFeedback('Selecione uma cor antes de confirmar', 'erro');
    }
}

// Função para adicionar o kit personalizado ao carrinho
function adicionarKitAoCarrinho() {
    // Verificar se todas as partes têm cor selecionada
    for (const [parte, config] of Object.entries(kitSelecionado.partes)) {
        if (!config.cor) {
            mostrarFeedback(`Selecione uma cor para ${parte.replace(/_/g, ' ')}`, 'erro');
            return;
        }
    }
    
    // Criar item para o carrinho
    const item = {
        tipo: 'kit_revestimento',
        kitId: kitSelecionado.id,
        nome: kitSelecionado.nome,
        preco: kitSelecionado.preco,
        partes: { ...kitSelecionado.partes },
        id: Date.now()
    };
    
    // Adicionar ao carrinho
    state.carrinho.push(item);
    salvarCarrinho();
    atualizarCarrinho();
    mostrarFeedback('Kit adicionado ao carrinho!');
    
    // Resetar seleção
    kitSelecionado = null;
    document.getElementById('personalizacao-container').style.display = 'none';
    document.querySelectorAll('.kits-grid > div').forEach(el => {
        el.classList.remove('selecionado');
    });
}

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

    // Adicionar eventos para os botões de seleção de tipo de revestimento
    document.querySelectorAll('.botao-opcao').forEach(botao => {
        botao.addEventListener('click', function() {
            selecionarTipoRevestimento(this.dataset.tipo);
        });
    });
    
    // Inicializar com cor simples selecionada
    selecionarTipoRevestimento('cor-simples');
    
    // Adicionar evento para o botão de adicionar kit ao carrinho
    document.getElementById('btn-adicionar-kit').addEventListener('click', adicionarKitAoCarrinho);
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
    const cores = [
        { nome: "Preto", codigo: "#000000", imagem: "imagens/cores/preto.jpg" },
        { nome: "Cinza", codigo: "#808080", imagem: "imagens/cores/cinza.jpg" },
        { nome: "Vermelho", codigo: "#FF0000", imagem: "imagens/cores/vermelho.jpg" },
        { nome: "Azul", codigo: "#0000FF", imagem: "imagens/cores/azul.jpg" },
        { nome: "Verde", codigo: "#008000", imagem: "imagens/cores/verde.jpg" },
        { nome: "Amarelo", codigo: "#FFFF00", imagem: "imagens/cores/amarelo.jpg" },
        { nome: "Branco", codigo: "#FFFFFF", imagem: "imagens/cores/branco.jpg" },
        { nome: "Marrom", codigo: "#A52A2A", imagem: "imagens/cores/marrom.jpg" },
        { nome: "Bege", codigo: "#F5F5DC", imagem: "imagens/cores/bege.jpg" },
        { nome: "Laranja", codigo: "#FFA500", imagem: "imagens/cores/laranja.jpg" },
        { nome: "Roxo", codigo: "#800080", imagem: "imagens/cores/roxo.jpg" },
        { nome: "Rosa", codigo: "#FFC0CB", imagem: "imagens/cores/rosa.jpg" }
    ];
  
    cores.forEach((cor, index) => {
        const corItem = document.createElement('div');
        corItem.className = 'cor-item';
        if (corSelecionada.nome === cor.nome) {
            corItem.classList.add('selecionada');
            corSelecionadaModal = cor;
        }
        
        corItem.dataset.cor = cor.nome;
        corItem.dataset.imagem = cor.imagem;
        
        corItem.innerHTML = `
            <img src="${cor.imagem}" alt="${cor.nome}" loading="lazy">
            <span>${cor.nome}</span>
        `;
        
        corItem.addEventListener('click', function() {
            // Remover seleção anterior
            document.querySelectorAll('.cor-item.selecionada').forEach(item => {
                item.classList.remove('selecionada');
            });
            
            // Adicionar seleção atual
            this.classList.add('selecionada');
            corSelecionadaModal = {
                nome: this.dataset.cor,
                imagem: this.dataset.imagem
            };
        });
        
        gridCores.appendChild(corItem);
    });
    
    // Mostrar modal
    modalCores.style.display = 'flex';
    document.body.style.overflow = 'hidden';
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
    kitRevestimentoContainer.style.display = 'none';
    
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
    kitRevestimentoContainer.style.display = 'none';
    
    // Popular marcas
    popularMarcas();
    
    // Rolagem suave para o formulário
    setTimeout(() => {
        selecaoContainer.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}
  
// Função para popular marcas
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
    
    // Obter todos os anos para o modelo selecionado
    const anos = dados[state.linha][marcaSelect.value][this.value].anos;
    
    anos.forEach(ano => {
        const option = document.createElement('option');
        option.value = ano;
        option.textContent = ano;
        anoSelect.appendChild(option);
    });
});
  
// Função para adicionar item ao carrinho
function adicionarAoCarrinho() {
    if (!state.linha || !state.tipoMaquina || !marcaSelect.value || !modeloSelect.value || !anoSelect.value || !corSelecionada.nome) {
        mostrarFeedback('Preencha todos os campos antes de adicionar ao carrinho', 'erro');
        return;
    }
  
    const item = {
        linha: state.linha,
        tipoMaquina: tipoMaquinaMap[state.tipoMaquina] || state.tipoMaquina,
        marca: marcaSelect.value,
        modelo: modeloSelect.value,
        ano: anoSelect.value,
        cor: corSelecionada.nome,
        corImagem: corSelecionada.imagem,
        preco: calcularPreco(state.linha, state.tipoMaquina),
        id: Date.now()
    };
  
    state.carrinho.push(item);
    salvarCarrinho();
    atualizarCarrinho();
    mostrarFeedback('Item adicionado ao carrinho!');
}
  
// Função para calcular preço baseado no tipo de máquina
function calcularPreco(linha, tipoMaquina) {
    // Preços base por linha
    const precosBase = {
        "Linha Amarela": 1500,
        "Linha Verde": 1200,
        "Linha Mini": 1000
    };
    
    // Adicionais por tipo de máquina
    const adicionais = {
        "Escavadeira Hidráulica": 200,
        "Retro Escavadeira": 150,
        "Pá Carregadeira": 180,
        "Moto Niveladora": 100,
        "Trator de Esteira": 250,
        "Trator": 100,
        "Pulverizador": 150,
        "Colheitadeira": 200,
        "Mini Escavadeira": 50,
        "Mini Carregadeira": 50
    };
    
    const precoBase = precosBase[linha] || 1000;
    const adicional = adicionais[tipoMaquina] || 0;
    
    return precoBase + adicional;
}
  
// Função para salvar carrinho no localStorage
function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(state.carrinho));
}
  
// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('listaCarrinho');
    listaCarrinho.innerHTML = '';
    
    let total = 0;
    
    state.carrinho.forEach(item => {
        const li = document.createElement('li');
        
        if (item.tipo === 'kit_revestimento') {
            let partesHTML = '';
            for (const [parte, config] of Object.entries(item.partes)) {
                partesHTML += `
                    <div style="margin-left: 10px; margin-top: 8px; display: flex; align-items: center;">
                        <div style="
                            width: 15px;
                            height: 15px;
                            border-radius: 50%;
                            background-color: ${config.cor};
                            ${config.detalhe ? `background: linear-gradient(135deg, ${config.cor} 50%, ${config.detalhe} 50%);` : ''}
                            margin-right: 8px;
                        "></div>
                        <span style="font-size: 0.8rem;">
                            ${parte.replace(/_/g, ' ')}: 
                            <strong>${config.corNome}</strong>
                        </span>
                    </div>
                `;
            }
            
            li.innerHTML = `
                <div>
                    <strong style="color: ${
                        item.kitId.includes('sport') ? '#08d118' : 
                        item.kitId.includes('couro') ? '#F9A01B' : '#4682B4'
                    };">${item.nome}</strong>
                    ${partesHTML}
                    <div style="margin-top: 10px; font-weight: bold;">
                        Valor: R$ ${item.preco.toFixed(2)}
                    </div>
                </div>
                <button onclick="removerDoCarrinho(${item.id})">Remover</button>
            `;
        } else {
            li.innerHTML = `
                <div>
                    <strong>${item.tipoMaquina}</strong><br>
                    ${item.marca} ${item.modelo} (${item.ano})<br>
                    Cor: ${item.cor}
                    <div style="margin-top: 10px; font-weight: bold;">
                        Valor: R$ ${item.preco.toFixed(2)}
                    </div>
                </div>
                <button onclick="removerDoCarrinho(${item.id})">Remover</button>
            `;
        }
        
        listaCarrinho.appendChild(li);
        total += item.preco;
    });
    
    totalItensSpan.textContent = `R$ ${total.toFixed(2)}`;
    atualizarTotais();
}
  
// Função para atualizar totais (itens + frete)
function atualizarTotais() {
    const totalItens = state.carrinho.reduce((sum, item) => sum + item.preco, 0);
    const totalGeral = totalItens + state.frete.valor;
    
    totalItensSpan.textContent = `R$ ${totalItens.toFixed(2)}`;
    totalGeralSpan.textContent = `R$ ${totalGeral.toFixed(2)}`;
}
  
// Função para remover item do carrinho
function removerDoCarrinho(id) {
    state.carrinho = state.carrinho.filter(item => item.id !== id);
    salvarCarrinho();
    atualizarCarrinho();
    mostrarFeedback('Item removido do carrinho');
}
  
// Função para mostrar feedback ao usuário
function mostrarFeedback(mensagem, tipo = 'sucesso') {
    feedbackMessage.textContent = mensagem;
    feedback.className = 'feedback visible';
    feedbackIcon.textContent = tipo === 'erro' ? '✕' : '✓';
    
    if (tipo === 'erro') {
        feedback.classList.add('erro');
    } else {
        feedback.classList.remove('erro');
    }
    
    setTimeout(() => {
        feedback.classList.remove('visible');
    }, 3000);
}
  
// Função para finalizar pedido via WhatsApp (versão atualizada)
function finalizarPedido() {
    if (state.carrinho.length === 0) {
        mostrarFeedback('Carrinho vazio!', 'erro');
        return;
    }
    
    // Validar formulário
    const form = document.getElementById('formCliente');
    if (!form.checkValidity()) {
        form.reportValidity();
        mostrarFeedback('Preencha todos os campos obrigatórios', 'erro');
        return;
    }
    
    // Dados da loja
    const numeroWhatsApp = "554399546879";
    const numeroPedido = Math.floor(10000 + Math.random() * 90000);
    const protocolo = generateProtocol();
    const dataHora = new Date().toLocaleString('pt-BR');
    const pixInfo = "000.000.000-00 (CNPJ)\nNome: HELTO MACHADO";
    
    // Obter dados do cliente
    const cliente = {
        nome: document.getElementById('nome').value,
        cpf_cnpj: document.getElementById('cpf_cnpj').value,
        inscricao_estadual: document.getElementById('inscricao_estadual').value,
        telefone: document.getElementById('telefone').value,
        rua: document.getElementById('rua').value,
        numero: document.getElementById('numero').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
        cep: document.getElementById('cep').value
    };
  
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
        if (item.tipo === 'kit_revestimento') {
            mensagem += `${index+1} ${item.nome}\n`;
            mensagem += `   Valor: R$ ${item.preco.toFixed(2)}\n`;
            
            for (const [parte, config] of Object.entries(item.partes)) {
                mensagem += `   ${parte.replace(/_/g, ' ')}: ${config.corNome} (${config.cor})`;
                if (config.detalhe) {
                    mensagem += ` com detalhe em ${config.detalhe}`;
                }
                mensagem += '\n';
            }
        } else {
            mensagem += `${index+1} ${item.linha} - ${item.tipoMaquina}\n`;
            mensagem += `   ${item.marca} ${item.modelo} (${item.ano})\n`;
            mensagem += `   Cor: ${item.cor}\n`;
            mensagem += `   Valor: R$ ${item.preco.toFixed(2)}\n\n`;
        }
    });
    
    // Rodapé
    const totalItens = state.carrinho.reduce((sum, item) => sum + item.preco, 0);
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
    
    // Abrir WhatsApp em nova aba
    window.open(url, '_blank');
    
    // Limpar carrinho após envio
    state.carrinho = [];
    salvarCarrinho();
    atualizarCarrinho();
    form.reset();
    formClienteContainer.style.display = 'none';
    document.querySelector('.carrinho').style.display = 'block';
}
  
// Função para gerar protocolo
function generateProtocol() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let protocol = '';
    for (let i = 0; i < 10; i++) {
        protocol += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return protocol;
}
