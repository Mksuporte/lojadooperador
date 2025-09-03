  // Dados dos produtos
 const dados = {
"Linha Amarela": {
        "CAT": {
            // Modelos D2L (joystick hidráulico)
            "312D2L": { anos: ["2010", "2011", "2012", "2013", "2014", "2015"] },
            "313D2L": { anos: ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "315D2L": { anos: ["2010", "2011", "2012", "2013", "2014", "2015"] },
            "318D2L": { anos: ["2010", "2011", "2012", "2013", "2014", "2015"] },
            "320D2L": { anos: ["2010", "2011", "2012", "2013", "2014", "2015"] },
            "323D2L": { anos: ["2010", "2011", "2012", "2013", "2014", "2015"] },
            "336D2L": { anos: ["2010", "2011", "2012", "2013", "2014", "2015"] },
            
            // Modelos GC (joystick elétrico)
            "313GC": { anos: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "316GC": { anos: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "318GC": { anos: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "320GC": { anos: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "323GC": { anos: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "330GC": { anos: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "336GC": { anos: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "340GC": { anos: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "350GC": { anos: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] }
        },
        
        "Hyundai": {
            // Modelos LC7 (molde antigo até 2011)
            "140LC7": { anos: ["2008", "2009", "2010", "2011"] },
            "160LC7": { anos: ["2008", "2009", "2010", "2011"] },
            
            // Modelos LC9 (molde novo a partir de 2013)
            "140LC9": { anos: ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "150LC9": { anos: ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "160LC9": { anos: ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "180LC9": { anos: ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "200RLC9": { anos: ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "225LC9": { anos: ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "260LC9": { anos: ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "350LC9": { anos: ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "360LC9": { anos: ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] }
        },
        
        "Volvo": {
            // Modelos até 2013 (molde SDLG, banco grande)
            "140": { anos: ["2008", "2009", "2010", "2011", "2012", "2013"] },
            "200": { anos: ["2008", "2009", "2010", "2011", "2012", "2013"] },
            "210": { anos: ["2008", "2009", "2010", "2011", "2012", "2013"] },
            "220": { anos: ["2008", "2009", "2010", "2011", "2012", "2013"] },
            "240": { anos: ["2008", "2009", "2010", "2011", "2012", "2013"] },
            "360": { anos: ["2008", "2009", "2010", "2011", "2012", "2013"] },
            "460": { anos: ["2008", "2009", "2010", "2011", "2012", "2013"] },
            
            // Modelos a partir de 2014 (banco grande)
            "140": { anos: ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "200": { anos: ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "210": { anos: ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "220": { anos: ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "240": { anos: ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "360": { anos: ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "460": { anos: ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] }
        },
        
        "SDLG": {
            "LG6150": { anos: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "LG6225": { anos: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "LG6250": { anos: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] }
        },
        
        "Komatsu": {
            "PC130": { anos: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "PC160": { anos: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "PC180": { anos: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "PC200": { anos: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "PC210": { anos: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "PC240": { anos: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "PC300": { anos: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "PC340": { anos: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "PC350": { anos: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "PC360": { anos: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "PC380": { anos: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "PC400": { anos: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "PC450": { anos: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "PC500": { anos: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] }
        },
        
        "John Deere": {
            "130G": { anos: ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "130P": { anos: ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "160G": { anos: ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "160P": { anos: ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "200G": { anos: ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "210G": { anos: ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "210P": { anos: ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "250G": { anos: ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "250P": { anos: ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "350G": { anos: ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "350P": { anos: ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "470G": { anos: ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "470P": { anos: ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] }
        },
        
        "New Holland": {
            "145C": { anos: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "175C": { anos: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "215C": { anos: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "245C": { anos: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "385C": { anos: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "405C": { anos: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "485C": { anos: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] }
        },
        
        "Case": {
            "CX130": { anos: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "CX180": { anos: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "CX220": { anos: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "CX240": { anos: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "CX350": { anos: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "CX370": { anos: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "CX490": { anos: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "CX500": { anos: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "CX800": { anos: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] }
        },
        
        "Link Belt": {
            "X3 2050": { anos: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
            "X3 3050": { anos: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] }
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

// Variáveis globais
let linhaSelecionada = null;
let tipoMaquinaSelecionada = null;
let marcaSelecionada = null;
let modeloSelecionado = null;
let anoSelecionado = null;
let kitSelecionado = null;
let coresSelecionadas = {};
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Kits disponíveis
const kits = [
    {
        id: 'kit-basico',
        nome: 'Kit Básico',
        descricao: 'Assento + Encosto',
        preco: 350.00,
        partes: ['assento', 'encosto'],
        imagem: 'imagens/kits/kit-basico.jpg'
    },
    {
        id: 'kit-completo',
        nome: 'Kit Completo',
        descricao: 'Assento + Encosto + Braços',
        preco: 450.00,
        partes: ['assento', 'encosto', 'braços'],
        imagem: 'imagens/kits/kit-completo.jpg'
    },
    {
        id: 'kit-premium',
        nome: 'Kit Premium',
        descricao: 'Assento + Encosto + Braços + Apoio de Cabeça',
        preco: 550.00,
        partes: ['assento', 'encosto', 'braços', 'apoio_cabeca'],
        imagem: 'imagens/kits/kit-premium.jpg'
    }
];

// Cores disponíveis
const cores = [
    { id: 'preto', nome: 'Preto', hex: '#000000', imagem: 'imagens/cores/preto.jpg' },
    { id: 'cinza', nome: 'Cinza', hex: '#808080', imagem: 'imagens/cores/cinza.jpg' },
    { id: 'azul', nome: 'Azul', hex: '#0000FF', imagem: 'imagens/cores/azul.jpg' },
    { id: 'vermelho', nome: 'Vermelho', hex: '#FF0000', imagem: 'imagens/cores/vermelho.jpg' },
    { id: 'verde', nome: 'Verde', hex: '#008000', imagem: 'imagens/cores/verde.jpg' },
    { id: 'amarelo', nome: 'Amarelo', hex: '#FFFF00', imagem: 'imagens/cores/amarelo.jpg' },
    { id: 'laranja', nome: 'Laranja', hex: '#FFA500', imagem: 'imagens/cores/laranja.jpg' },
    { id: 'marrom', nome: 'Marrom', hex: '#A52A2A', imagem: 'imagens/cores/marrom.jpg' }
];

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    inicializarEventListeners();
    atualizarCarrinho();
});

function inicializarEventListeners() {
    // Botões de linha
    document.querySelectorAll('.botao-linha').forEach(botao => {
        botao.addEventListener('click', function() {
            selecionarLinha(this.dataset.linha);
        });
    });

    // Botões de máquina
    document.querySelectorAll('.botao-maquina').forEach(botao => {
        botao.addEventListener('click', function() {
            selecionarMaquina(this.dataset.tipo);
        });
    });

    // Fechar modal de cores
    document.querySelector('.fechar-modal').addEventListener('click', fecharModalCores);
    document.getElementById('confirmar-cor').addEventListener('click', confirmarCor);

    // Event listeners para formulário
    document.getElementById('tipo_pessoa').addEventListener('change', function() {
        const cpfCnpjField = document.getElementById('cpf_cnpj');
        if (this.value === 'pf') {
            cpfCnpjField.placeholder = 'CPF (apenas números)';
        } else if (this.value === 'pj') {
            cpfCnpjField.placeholder = 'CNPJ (apenas números)';
        }
    });

    document.getElementById('cep').addEventListener('blur', function() {
        if (this.value.length >= 8) {
            buscarEnderecoPorCEP(this.value);
        }
    });

    // Formatação automática
    document.getElementById('cpf_cnpj').addEventListener('input', function() {
        const tipoPessoa = document.getElementById('tipo_pessoa').value;
        if (tipoPessoa === 'pf') {
            formatarCampo(this, '###.###.###-##');
        } else if (tipoPessoa === 'pj') {
            formatarCampo(this, '##.###.###/####-##');
        }
    });

    document.getElementById('telefone').addEventListener('input', function() {
        formatarCampo(this, '(##) #####-####');
    });

    document.getElementById('cep').addEventListener('input', function() {
        formatarCampo(this, '#####-###');
    });

    // Cortina checkbox
    document.getElementById('cortina-checkbox').addEventListener('change', function() {
        document.getElementById('cortina-personalizacao').style.display = this.checked ? 'block' : 'none';
    });
}

function selecionarLinha(linha) {
    linhaSelecionada = linha;
    
    // Esconder todos os containers de máquinas
    document.querySelectorAll('.maquinas-container').forEach(container => {
        container.style.display = 'none';
    });
    
    // Mostrar o container correto
    if (linha === 'Linha Amarela') {
        document.getElementById('maquinas-amarelas').style.display = 'grid';
    } else if (linha === 'Linha Verde') {
        document.getElementById('maquinas-verdes').style.display = 'grid';
    } else if (linha === 'Linha Mini') {
        document.getElementById('maquinas-mini').style.display = 'grid';
    }
    
    // Scroll para as máquinas
    document.querySelector('.maquinas-container').scrollIntoView({ behavior: 'smooth' });
}

function selecionarMaquina(tipo) {
    tipoMaquinaSelecionada = tipo;
    
    // Popular marcas
    const marcaSelect = document.getElementById('marca');
    marcaSelect.innerHTML = '<option value="">Selecione uma marca</option>';
    
    if (dados[linhaSelecionada]) {
        Object.keys(dados[linhaSelecionada]).forEach(marca => {
            const option = document.createElement('option');
            option.value = marca;
            option.textContent = marca;
            marcaSelect.appendChild(option);
        });
    }
    
    // Mostrar container de seleção
    document.getElementById('selecao-container').style.display = 'block';
    document.getElementById('titulo-selecao').textContent = `Selecione os detalhes para ${tipo}`;
    
    // Scroll para o formulário
    document.getElementById('selecao-container').scrollIntoView({ behavior: 'smooth' });
}

// Popular modelos baseado na marca selecionada
document.getElementById('marca').addEventListener('change', function() {
    marcaSelecionada = this.value;
    const modeloSelect = document.getElementById('modelo');
    modeloSelect.innerHTML = '<option value="">Selecione um modelo</option>';
    
    if (marcaSelecionada && dados[linhaSelecionada][marcaSelecionada]) {
        Object.keys(dados[linhaSelecionada][marcaSelecionada]).forEach(modelo => {
            const option = document.createElement('option');
            option.value = modelo;
            option.textContent = modelo;
            modeloSelect.appendChild(option);
        });
    }
});

// Popular anos baseado no modelo selecionado
document.getElementById('modelo').addEventListener('change', function() {
    modeloSelecionado = this.value;
    const anoSelect = document.getElementById('ano');
    anoSelect.innerHTML = '<option value="">Selecione o ano</option>';
    
    if (modeloSelecionado && dados[linhaSelecionada][marcaSelecionada][modeloSelecionado]) {
        dados[linhaSelecionada][marcaSelecionada][modeloSelecionado].anos.forEach(ano => {
            const option = document.createElement('option');
            option.value = ano;
            option.textContent = ano;
            anoSelect.appendChild(option);
        });
    }
    
    // Quando modelo é selecionado, mostrar os kits
    if (modeloSelecionado) {
        mostrarKitsDisponiveis();
    }
});

function mostrarKitsDisponiveis() {
    const kitsGrid = document.getElementById('kits-grid');
    kitsGrid.innerHTML = '';
    
    kits.forEach(kit => {
        const kitElement = document.createElement('div');
        kitElement.className = 'kit-item';
        kitElement.innerHTML = `
            <img src="${kit.imagem}" alt="${kit.nome}" class="kit-imagem" onerror="this.src='imagens/placeholder.jpg'">
            <div class="kit-info">
                <h4>${kit.nome}</h4>
                <p>${kit.descricao}</p>
                <p class="kit-preco">R$ ${kit.preco.toFixed(2)}</p>
            </div>
        `;
        
        kitElement.addEventListener('click', () => selecionarKit(kit));
        kitsGrid.appendChild(kitElement);
    });
    
    document.getElementById('personalizacao-container').style.display = 'block';
}

function selecionarKit(kit) {
    kitSelecionado = kit;
    
    // Destacar kit selecionado
    document.querySelectorAll('.kit-item').forEach(item => {
        item.classList.remove('selecionado');
    });
    event.currentTarget.classList.add('selecionado');
    
    // Mostrar personalização das partes
    const partesContainer = document.getElementById('partes-personalizacao');
    partesContainer.innerHTML = '';
    
    kit.partes.forEach(parte => {
        const parteDiv = document.createElement('div');
        parteDiv.className = 'parte-kit';
        parteDiv.innerHTML = `
            <label>${parte.toUpperCase()}</label>
            <div class="seletor-cor-parte" data-parte="${parte}">
                <div class="cor-preview" style="background-color: #ccc;"></div>
                <span>Clique para selecionar a cor</span>
            </div>
        `;
        
        parteDiv.querySelector('.seletor-cor-parte').addEventListener('click', () => {
            abrirModalCores(parte);
        });
        
        partesContainer.appendChild(parteDiv);
    });
}

function abrirModalCores(parte) {
    const modal = document.getElementById('modal-cores');
    const gridCores = document.getElementById('grid-cores');
    gridCores.innerHTML = '';
    
    cores.forEach(cor => {
        const corElement = document.createElement('div');
        corElement.className = 'cor-item';
        corElement.dataset.corId = cor.id;
        corElement.innerHTML = `
            <img src="${cor.imagem}" alt="${cor.nome}" onerror="this.style.backgroundColor='${cor.hex}'">
            <span>${cor.nome}</span>
        `;
        
        corElement.addEventListener('click', () => {
            document.querySelectorAll('.cor-item').forEach(item => {
                item.classList.remove('selecionada');
            });
            corElement.classList.add('selecionada');
        });
        
        gridCores.appendChild(corElement);
    });
    
    modal.style.display = 'flex';
    modal.dataset.parteSelecionada = parte;
}

function fecharModalCores() {
    document.getElementById('modal-cores').style.display = 'none';
}

function confirmarCor() {
    const modal = document.getElementById('modal-cores');
    const parte = modal.dataset.parteSelecionada;
    const corSelecionada = document.querySelector('.cor-item.selecionada');
    
    if (corSelecionada) {
        const corId = corSelecionada.dataset.corId;
        const cor = cores.find(c => c.id === corId);
        
        // Atualizar visualização da cor
        const seletor = document.querySelector(`.seletor-cor-parte[data-parte="${parte}"]`);
        seletor.querySelector('.cor-preview').style.backgroundColor = cor.hex;
        seletor.querySelector('span').textContent = cor.nome;
        
        // Salvar cor selecionada
        coresSelecionadas[parte] = cor;
        
        fecharModalCores();
    } else {
        mostrarFeedback('Selecione uma cor primeiro', 'erro');
    }
}

function adicionarAoCarrinho() {
    if (!kitSelecionado) {
        mostrarFeedback('Selecione um kit primeiro', 'erro');
        return;
    }
    
    // Verificar se todas as partes têm cor selecionada
    for (const parte of kitSelecionado.partes) {
        if (!coresSelecionadas[parte]) {
            mostrarFeedback(`Selecione a cor para ${parte}`, 'erro');
            return;
        }
    }
    
    // Verificar cortina
    let cortina = null;
    if (document.getElementById('cortina-checkbox').checked) {
        if (!coresSelecionadas['cortina']) {
            mostrarFeedback('Selecione a cor para a cortina', 'erro');
            return;
        }
        cortina = {
            nome: 'Cortina',
            preco: 150.00,
            cor: coresSelecionadas['cortina']
        };
    }
    
    // Criar item do carrinho
    const item = {
        id: Date.now(),
        linha: linhaSelecionada,
        tipo: tipoMaquinaSelecionada,
        marca: marcaSelecionada,
        modelo: modeloSelecionado,
        ano: anoSelecionado,
        kit: kitSelecionado,
        cores: { ...coresSelecionadas },
        cortina: cortina,
        preco: kitSelecionado.preco + (cortina ? cortina.preco : 0),
        data: new Date().toLocaleString('pt-BR')
    };
    
    // Adicionar ao carrinho
    carrinho.push(item);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    
    // Atualizar carrinho
    atualizarCarrinho();
    
    // Feedback
    mostrarFeedback('Item adicionado ao carrinho!', 'sucesso');
    
    // Resetar seleções
    resetarSelecoes();
}

function resetarSelecoes() {
    kitSelecionado = null;
    coresSelecionadas = {};
    document.querySelectorAll('.kit-item').forEach(item => {
        item.classList.remove('selecionado');
    });
    document.getElementById('cortina-checkbox').checked = false;
    document.getElementById('cortina-personalizacao').style.display = 'none';
}

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('listaCarrinho');
    const totalItens = document.getElementById('total-itens');
    const totalGeral = document.getElementById('total-geral');
    
    listaCarrinho.innerHTML = '';
    
    let total = 0;
    
    carrinho.forEach((item, index) => {
        total += item.preco;
        
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <strong>${item.marca} ${item.modelo} (${item.ano})</strong><br>
                ${item.kit.nome} - R$ ${item.kit.preco.toFixed(2)}
                ${item.cortina ? ` + Cortina: R$ ${item.cortina.preco.toFixed(2)}` : ''}
            </div>
            <button onclick="removerDoCarrinho(${index})">❌</button>
        `;
        listaCarrinho.appendChild(li);
    });
    
    totalItens.textContent = `R$ ${total.toFixed(2)}`;
    totalGeral.textContent = `R$ ${total.toFixed(2)}`;
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarCarrinho();
    mostrarFeedback('Item removido do carrinho', 'sucesso');
}

function calcularFrete() {
    const cep = document.getElementById('cep-frete').value.replace(/\D/g, '');
    
    if (cep.length !== 8) {
        mostrarFeedback('CEP inválido', 'erro');
        return;
    }
    
    // Simulação de cálculo de frete
    const frete = Math.random() * 50 + 20; // Entre R$ 20 e R$ 70
    const prazo = Math.floor(Math.random() * 10) + 5; // Entre 5 e 15 dias
    
    document.getElementById('valor-frete').textContent = `R$ ${frete.toFixed(2)}`;
    document.getElementById('prazo-frete').textContent = `${prazo} dias úteis`;
    document.getElementById('resultado-frete').style.display = 'block';
    
    // Atualizar total geral
    const totalItens = carrinho.reduce((sum, item) => sum + item.preco, 0);
    document.getElementById('total-geral').textContent = `R$ ${(totalItens + frete).toFixed(2)}`;
}

function mostrarFormularioCliente() {
    if (carrinho.length === 0) {
        mostrarFeedback('Carrinho vazio!', 'erro');
        return;
    }
    
    document.getElementById('form-cliente-container').style.display = 'block';
    document.getElementById('form-cliente-container').scrollIntoView({ behavior: 'smooth' });
}

// FUNÇÕES DE VALIDAÇÃO
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
    
    let soma = 0;
    for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;
    
    soma = 0;
    for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    return resto === parseInt(cpf.charAt(10));
}

function validarCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, '');
    if (cnpj.length !== 14 || /^(\d)\1{13}$/.test(cnpj)) return false;
    
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    
    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
    }
    
    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== parseInt(digitos.charAt(0))) return false;
    
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    
    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
    }
    
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    return resultado === parseInt(digitos.charAt(1));
}

function validarTelefone(telefone) {
    const numero = telefone.replace(/\D/g, '');
    return numero.length >= 10 && numero.length <= 11;
}

function validarNome(nome) {
    const partes = nome.trim().split(/\s+/);
    return partes.length >= 2 && partes.every(parte => parte.length >= 2);
}

function buscarEnderecoPorCEP(cep) {
    cep = cep.replace(/\D/g, '');
    if (cep.length !== 8) return false;
    
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (!data.erro) {
                document.getElementById('estado').value = data.uf;
                document.getElementById('cidade').value = data.localidade;
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('rua').value = data.logradouro;
                document.getElementById('endereco-container').style.display = 'block';
            } else {
                mostrarFeedback('CEP não encontrado', 'erro');
            }
        })
        .catch(error => {
            console.error('Erro ao buscar CEP:', error);
            mostrarFeedback('Erro ao buscar CEP', 'erro');
        });
}

function formatarCampo(campo, formato) {
    let valor = campo.value.replace(/\D/g, '');
    let resultado = '';
    let indice = 0;
    
    for (let i = 0; i < formato.length; i++) {
        if (formato[i] === '#') {
            resultado += valor[indice] || '';
            indice++;
        } else {
            resultado += formato[i];
        }
    }
    
    campo.value = resultado;
}

function mostrarFeedback(mensagem, tipo = 'sucesso') {
    const feedback = document.getElementById('feedback');
    feedback.textContent = mensagem;
    feedback.className = `feedback ${tipo} visible`;
    
    setTimeout(() => {
        feedback.className = 'feedback';
    }, 3000);
}

function validarFormulario() {
    const tipoPessoa = document.getElementById('tipo_pessoa').value;
    const cpfCnpj = document.getElementById('cpf_cnpj').value.replace(/\D/g, '');
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value.replace(/\D/g, '');
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    const numero = document.getElementById('numero').value;
    
    let isValid = true;
    
    if (!validarNome(nome)) {
        mostrarFeedback('Nome completo inválido', 'erro');
        isValid = false;
    }
    
    if (!tipoPessoa) {
        mostrarFeedback('Selecione o tipo de pessoa', 'erro');
        isValid = false;
    }
    
    if (tipoPessoa === 'pf' && !validarCPF(cpfCnpj)) {
        mostrarFeedback('CPF inválido', 'erro');
        isValid = false;
    }
    
    if (tipoPessoa === 'pj' && !validarCNPJ(cpfCnpj)) {
        mostrarFeedback('CNPJ inválido', 'erro');
        isValid = false;
    }
    
    if (!validarTelefone(telefone)) {
        mostrarFeedback('Telefone inválido', 'erro');
        isValid = false;
    }
    
    if (cep.length !== 8) {
        mostrarFeedback('CEP inválido', 'erro');
        isValid = false;
    }
    
    if (!numero) {
        mostrarFeedback('Número é obrigatório', 'erro');
        isValid = false;
    }
    
    if (isValid) {
        finalizarPedido();
    }
}

function finalizarPedido() {
    const cliente = {
        nome: document.getElementById('nome').value,
        tipo_pessoa: document.getElementById('tipo_pessoa').value,
        cpf_cnpj: document.getElementById('cpf_cnpj').value,
        telefone: document.getElementById('telefone').value,
        cep: document.getElementById('cep').value,
        estado: document.getElementById('estado').value,
        cidade: document.getElementById('cidade').value,
        bairro: document.getElementById('bairro').value,
        rua: document.getElementById('rua').value,
        numero: document.getElementById('numero').value,
        complemento: document.getElementById('complemento').value
    };
    
    // Montar mensagem para WhatsApp
    let mensagem = `*NOVO PEDIDO - LOJA DO OPERADOR*%0A%0A`;
    mensagem += `*Cliente:* ${cliente.nome}%0A`;
    mensagem += `*Telefone:* ${cliente.telefone}%0A`;
    mensagem += `*CPF/CNPJ:* ${cliente.cpf_cnpj}%0A%0A`;
    
    mensagem += `*ITENS:*%0A`;
    carrinho.forEach((item, index) => {
        mensagem += `${index + 1}. ${item.marca} ${item.modelo} (${item.ano})%0A`;
        mensagem += `   ${item.kit.nome} - R$ ${item.kit.preco.toFixed(2)}%0A`;
        if (item.cortina) {
            mensagem += `   Cortina - R$ ${item.cortina.preco.toFixed(2)}%0A`;
        }
        mensagem += `%0A`;
    });
    
    const total = carrinho.reduce((sum, item) => sum + item.preco, 0);
    mensagem += `*TOTAL: R$ ${total.toFixed(2)}*%0A%0A`;
    
    mensagem += `*ENDEREÇO:*%0A`;
    mensagem += `${cliente.rua}, ${cliente.numero}%0A`;
    mensagem += `${cliente.bairro}, ${cliente.cidade}-${cliente.estado}%0A`;
    mensagem += `CEP: ${cliente.cep}%0A`;
    
    // Número do WhatsApp (substitua pelo seu número)
    const whatsappNumber = '5511999999999';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(url, '_blank');
    
    // Limpar carrinho após envio
    carrinho = [];
    localStorage.removeItem('carrinho');
    atualizarCarrinho();
    
    mostrarFeedback('Pedido enviado com sucesso!', 'sucesso');
}

