
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

    // Definição dos materiais e cores - AGORA COM IMAGENS
    const materiais = {
        couro: {
          nome: "Couro Sintético",
          cores: [
            { nome: "Preto Elegance", codigo: "#1A1A1A", imagem: "imagens/cor1.jpg" },
            { nome: "Marrom Clássico", codigo: "#5E2C04", imagem: "imagens/cor2.jpg" },
            { nome: "Bege Natural", codigo: "#E6D5B8", imagem: "imagens/cor3.jpg" },
            { nome: "Vinho Nobre", codigo: "#722F37", imagem: "imagens/cor4.jpg" },
            { nome: "Azul Royal", codigo: "#0F056B", imagem: "imagens/cor5.jpg" },
            { nome: "Verde Floresta", codigo: "#228B22", imagem: "imagens/cor6.jpg" },
            { nome: "Grafite", codigo: "#383838", imagem: "imagens/cor7.jpg" },
            { nome: "Terra Queimada", codigo: "#8B4513", imagem: "imagens/cor8.jpg" },
            { nome: "Borgonha", codigo: "#800020", imagem: "imagens/cor9.jpg" },
            { nome: "Caramelo", codigo: "#D27D46", imagem: "imagens/cor10.jpg" },
            { nome: "Cinza Platinum", codigo: "#C0C0C0", imagem: "imagens/cor11.jpg" },
            { nome: "Azul Petróleo", codigo: "#003B4D", imagem: "imagens/cor12.jpg" },
            { nome: "Off-White", codigo: "#F5F5DC", imagem: "imagens/cor13.jpg" }
          ]
        },
        couro_sport: {
          nome: "Couro Sport",
          cores: [
            { nome: "Preto com Costuras Vermelhas", codigo: "#000000", detalhe: "#FF0000", imagem: "imagens/cor14.jpg" },
            { nome: "Azul Racing com Branco", codigo: "#00008B", detalhe: "#FFFFFF", imagem: "imagens/cor15.jpg" },
            { nome: "Cinza Metalizado com Laranja", codigo: "#808080", detalhe: "#FFA500", imagem: "imagens/cor16.jpg" },
            { nome: "Branco Gelado com Preto", codigo: "#F8F8FF", detalhe: "#000000", imagem: "imagens/cor17.jpg" }
          ]
        },
        pelucia: {
          nome: "Pelúcia (Xinil)",
          cores: [
            { nome: "Preto Fosco", codigo: "#0D0D0D", imagem: "imagens/cor18.jpg" },
            { nome: "Cinza Chumbo", codigo: "#2F4F4F", imagem: "imagens/cor19.jpg" },
            { nome: "Azul Marinho", codigo: "#000080", imagem: "imagens/cor20.jpg" },
            { nome: "Verde Militar", codigo: "#4B5320", imagem: "imagens/cor21.jpg" },
            { nome: "Vermelho Ferrari", codigo: "#FF2800", imagem: "imagens/cor22.jpg" },
            { nome: "Bege Areia", codigo: "#F5E8C7", imagem: "imagens/cor23.jpg" },
            { nome: "Bordô", codigo: "#7C0A02", imagem: "imagens/cor24.jpg" },
            { nome: "Azul Celeste", codigo: "#4682B4", imagem: "imagens/cor25.jpg" },
            { nome: "Terracota", codigo: "#E2725B", imagem: "imagens/cor26.jpg" },
            { nome: "Lavanda", codigo: "#967BB6", imagem: "imagens/cor27.jpg" },
            { nome: "Verde Limão", codigo: "#C9DC87", imagem: "imagens/cor28.jpg" },
            { nome: "Rosa Blush", codigo: "#FFD1DC", imagem: "imagens/cor29.jpg" }
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

    // Armazenamento do kit selecionado
    let kitSelecionado = null;
    let corSelecionadaModal = null;
    let parteSelecionadaModal = null;

    // Elementos DOM
    const botoesLinha = document.querySelectorAll('.botao-linha');
    const selecaoContainer = document.getElementById('selecao-container');
    const marcaSelect = document.getElementById('marca');
    const modeloSelect = document.getElementById('modelo');
    const anoSelect = document.getElementById('ano');
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
    const kitsGrid = document.getElementById('kits-grid');
    const personalizacaoContainer = document.getElementById('personalizacao-container');
    const partesPersonalizacao = document.getElementById('partes-personalizacao');
    const tituloSelecao = document.getElementById('titulo-selecao');

    // Função para gerar protocolo
    function generateProtocol() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let protocol = '';
        for (let i = 0; i < 10; i++) {
            protocol += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return protocol;
    }

    // Função para mostrar os kits disponíveis
    function mostrarKitsRevestimento() {
        kitsGrid.innerHTML = '';
        
        Object.entries(kitsRevestimento).forEach(([id, kit]) => {
            const kitElement = document.createElement('div');
            kitElement.className = 'kit-item';
            kitElement.innerHTML = `
                <h4>${kit.nome}</h4>
                <p>${kit.descricao}</p>
                <p><strong>R$ ${kit.preco.toFixed(2)}</strong></p>
            `;
            
            kitElement.addEventListener('click', () => {
                // Resetar seleções anteriores
                document.querySelectorAll('.kit-item').forEach(el => {
                    el.classList.remove('selecionado');
                });
                
                // Marcar como selecionado
                kitElement.classList.add('selecionado');
                
                // Armazenar kit selecionado
                kitSelecionado = { ...kit, id };
                
                // Mostrar opções de personalização
                mostrarPersonalizacaoKit();
                
                // Feedback para o usuário
                mostrarFeedback(`Kit ${kit.nome} selecionado!`);
            });
            
            kitsGrid.appendChild(kitElement);
        });
        
        // Esconder personalização inicialmente
        personalizacaoContainer.style.display = 'none';
    }

    // Função para mostrar as partes do kit para personalização
    function mostrarPersonalizacaoKit() {
        partesPersonalizacao.innerHTML = '';
        
        Object.entries(kitSelecionado.partes).forEach(([parte, config]) => {
            const parteDiv = document.createElement('div');
            parteDiv.className = 'parte-kit';
            
            const materialInfo = materiais[config.material];
            
            parteDiv.innerHTML = `
                <label>${parte.replace(/_/g, ' ').toUpperCase()} (${materialInfo.nome})</label>
                <div class="seletor-cor-parte" data-parte="${parte}">
                    <div class="cor-preview" style="background-color: ${config.cor || '#ccc'};
                        ${config.detalhe ? `background: linear-gradient(135deg, ${config.cor} 50%, ${config.detalhe} 50%);` : ''}">
                    </div>
                    <span>${config.corNome || 'Clique para selecionar a cor'}</span>
                </div>
            `;
            
            // Adicionar evento para abrir seletor de cores
            parteDiv.querySelector('.seletor-cor-parte').addEventListener('click', function() {
                abrirModalCoresParaParte(parte, config.material);
            });
            
            partesPersonalizacao.appendChild(parteDiv);
        });
        
        personalizacaoContainer.style.display = 'block';
        
        // Rolagem suave para a seção de personalização
        setTimeout(() => {
            personalizacaoContainer.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }, 100);
    }

    // Função para abrir modal de cores para uma parte específica
    function abrirModalCoresParaParte(parte, tipoMaterial) {
        const tituloModal = modalCores.querySelector('h3');
        
        tituloModal.textContent = `Selecione cor para ${parte.replace(/_/g, ' ')}`;
        gridCores.innerHTML = '';
        
        // Obter cores disponíveis para este material
        const cores = materiais[tipoMaterial].cores;
        
        cores.forEach(cor => {
            const corItem = document.createElement('div');
            corItem.className = 'cor-item';
            
            // Verificar se esta cor já está selecionada para esta parte
            if (kitSelecionado.partes[parte].corNome === cor.nome) {
                corItem.classList.add('selecionada');
                corSelecionadaModal = cor;
            }
            
            corItem.innerHTML = `
                <img src="${cor.imagem}" alt="${cor.nome}">
                <span>${cor.nome}</span>
            `;
            
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
        if (!corSelecionadaModal) {
            mostrarFeedback('Selecione uma cor antes de confirmar', 'erro');
            return;
        }

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
        
        mostrarFeedback('Cor selecionada com sucesso!');
    }

    // Função para adicionar item ao carrinho
    function adicionarAoCarrinho() {
        if (!kitSelecionado) {
            mostrarFeedback('Selecione um kit de revestimento antes de adicionar ao carrinho', 'erro');
            return;
        }
        
        // Verificar se todas as partes têm cor selecionada
        for (const [parte, config] of Object.entries(kitSelecionado.partes)) {
            if (!config.cor) {
                mostrarFeedback(`Selecione uma cor para ${parte.replace(/_/g, ' ')}`, 'erro');
                return;
            }
        }
        
        // Verificar se marca, modelo e ano foram selecionados
        if (!marcaSelect.value || !modeloSelect.value || !anoSelect.value) {
            mostrarFeedback('Selecione marca, modelo e ano do equipamento', 'erro');
            return;
        }
        
        // Criar item para o carrinho
        const item = {
            tipo: 'kit_revestimento',
            kitId: kitSelecionado.id,
            nome: kitSelecionado.nome,
            preco: kitSelecionado.preco,
            partes: { ...kitSelecionado.partes },
            id: Date.now(),
            linha: state.linha,
            tipoMaquina: tipoMaquinaMap[state.tipoMaquina] || state.tipoMaquina,
            marca: marcaSelect.value,
            modelo: modeloSelect.value,
            ano: anoSelect.value
        };
        
        // Adicionar ao carrinho
        state.carrinho.push(item);
        salvarCarrinho();
        atualizarCarrinho();
        mostrarFeedback('Kit adicionado ao carrinho!');
        
        // Resetar seleção
        kitSelecionado = null;
        personalizacaoContainer.style.display = 'none';
        document.querySelectorAll('.kit-item').forEach(el => {
            el.classList.remove('selecionado');
        });
    }

    // Função para resetar a seleção
    function resetarSelecao() {
        // Resetar dropdowns
        marcaSelect.selectedIndex = 0;
        modeloSelect.innerHTML = '<option value="">Selecione uma marca primeiro</option>';
        anoSelect.innerHTML = '<option value="">Selecione um modelo primeiro</option>';
        
        // Resetar máquina selecionada
        document.querySelectorAll('.botao-maquina.ativo').forEach(btn => btn.classList.remove('ativo'));
        state.tipoMaquina = '';
        
        // Resetar kit selecionado
        kitSelecionado = null;
        personalizacaoContainer.style.display = 'none';
        document.querySelectorAll('.kit-item').forEach(el => {
            el.classList.remove('selecionado');
        });
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
        
        // Atualizar título da seção
        tituloSelecao.textContent = `Personalize o kit para ${tipoMaquinaMap[state.tipoMaquina] || state.tipoMaquina}`;
        
        // Mostrar container de seleção
        selecaoContainer.style.display = 'block';
        
        // Popular marcas
        popularMarcas();
        
        // Mostrar kits de revestimento
        mostrarKitsRevestimento();
        
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
                    <div>${item.linha} - ${item.tipoMaquina}</div>
                    <div>${item.marca} ${item.modelo} (${item.ano})</div>
                    ${partesHTML}
                    <div style="margin-top: 10px; font-weight: bold;">
                        Valor: R$ ${item.preco.toFixed(2)}
                    </div>
                </div>
                <button onclick="removerDoCarrinho(${item.id})">Remover</button>
            `;
            
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

    // Função para calcular frete (simulação)
    function calcularFrete() {
        const cep = cepFreteInput.value.replace(/\D/g, '');
        
        if (cep.length !== 8) {
            mostrarFeedback('Digite um CEP válido com 8 dígitos', 'erro');
            return;
        }
        
        // Simulação de cálculo de frete
        const valorFrete = Math.random() * 50 + 20; // Valor entre 20 and 70
        const prazo = Math.floor(Math.random() * 10) + 5; // Prazo entre 5 e 15 dias
        
        state.frete = {
            valor: parseFloat(valorFrete.toFixed(2)),
            prazo: prazo,
            transportadora: 'Correios'
        };
        
        // Atualizar exibição
        valorFreteSpan.textContent = `R$ ${state.frete.valor.toFixed(2)}`;
        prazoFreteSpan.textContent = `${state.frete.prazo} dias úteis`;
        transportadoraFreteSpan.textContent = state.frete.transportadora;
        
        resultadoFrete.style.display = 'block';
        atualizarTotais();
        
        mostrarFeedback('Frete calculado com sucesso!');
    }

    // Função para finalizar o pedido e abrir o WhatsApp
    function finalizarPedido() {
        // Validar formulário
        const nome = document.getElementById('nome').value;
        const cpf_cnpj = document.getElementById('cpf_cnpj').value;
        const telefone = document.getElementById('telefone').value;
        const cep = document.getElementById('cep').value;
        
        if (!nome || !cpf_cnpj || !telefone || !cep) {
            mostrarFeedback('Preencha todos os campos obrigatórios', 'erro');
            return;
        }
        
        if (state.carrinho.length === 0) {
            mostrarFeedback('Carrinho vazio! Adicione itens antes de finalizar', 'erro');
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
            mensagem += `${index+1} ${item.linha} - ${item.tipoMaquina}\n`;
            mensagem += `   ${item.marca} ${item.modelo} (${item.ano})\n`;
            mensagem += `   ${item.nome}\n`;
            mensagem += `   Valor: R$ ${item.preco.toFixed(2)}\n`;
            
            for (const [parte, config] of Object.entries(item.partes)) {
                mensagem += `   ${parte.replace(/_/g, ' ')}: ${config.corNome} (${config.cor})`;
                if (config.detalhe) {
                    mensagem += ` com detalhe em ${config.detalhe}`;
                }
                mensagem += '\n';
            }
            mensagem += '\n';
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
        
        // Abrir WhatsApp
        window.open(url, '_blank');
        
        // Limpar carrinho após envio
        state.carrinho = [];
        salvarCarrinho();
        atualizarCarrinho();
        
        mostrarFeedback('Pedido enviado com sucesso! Em breve entraremos em contato.');
    }

    // Inicialização
    document.addEventListener('DOMContentLoaded', () => {
        atualizarCarrinho();
        
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
    });
