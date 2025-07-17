<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Loja do Operador</title>
  <link rel="icon" href="favicon.png" type="image/png">
  <style>
    :root {
      --cor-primaria: #000;
      --cor-secundaria: #ffa500;
      --cor-terciaria: #ffcc00;
      --cor-fundo: #333;
      --cor-texto: #fff;
      --cor-destaque: #4CAF50;
      --cor-erro: #f44336;
      --transition: all 0.3s ease;
      --primary-color: #ffcc00;
      --secondary-color: #08d118;
    
      
      
    }
    
    body {
      font-family: 'Segoe UI', Arial, sans-serif;
      padding: 20px;
      background-color: var(--cor-fundo);
      color: var(--cor-texto);
      line-height: 1.6;
    }
     
    
   
    
    header {
      background-color: var(--cor-primaria);
      color: var(--cor-secundaria);
      padding: 20px;
      text-align: center;
      border-radius: 10px;
      margin-bottom: 30px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    
    }
    
    header img {
      height: 200px;
      max-width: 100%;
      margin-bottom: 20px;
    }
    
    h1 {
      color: var(--primary-color);
      margin-bottom: 10px;
    }
    
    /* NOVO ESTILO DOS BOTÕES NO FORMATO QUADRADO */
    .linha-botoes {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-bottom: 40px;
    }
    
    .botao-linha {
      background-color: var(--card-bg);
      border-radius: 10px;
      padding: 30px;
      text-align: center;
      transition: var(--transition);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      border: none;
      color: var(--text-primary);
    }
    
    .botao-linha.linha-amarela {
      border-top: 4px solid var(--primary-color);
    }
    
    .botao-linha.linha-verde {
      border-top: 4px solid var(--secondary-color);
    }
    
    .botao-linha.linha-mini {
      border-top: 4px solid #fff;
    }
    
    .botao-linha:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px rgba(255, 215, 0, 0.1);
    }
    
    .botao-linha.ativo {
      background-color: rgba(255, 204, 0, 0.2);
    }
    
    .botao-linha.linha-verde.ativo {
      background-color: rgba(8, 209, 24, 0.2);
    }
    
    .botao-linha.linha-mini.ativo {
      background-color: rgba(255, 255, 255, 0.2);
    }
    
    .linha-titulo {
      font-size: 1.3rem;
      font-weight: bold;
      margin-bottom: 10px;
      color: var(--primary-color);
    }
    
    .linha-descricao {
      font-size: 0.9rem;
      color: var(--text-secondary);
    }
    
    .botao-linha.linha-verde .linha-titulo {
      color: var(--secondary-color);
    }
    
    .botao-linha.linha-mini .linha-titulo {
      color: #fff;
    }
    
    /* Container de seleção */
    .selecao-container {
      display: none;
      max-width: 600px;
      margin: 0 auto 40px;
      background-color: var(--card-bg);
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
    
    /* Estilos para selects */
    select, button {
      margin: 15px 0;
      padding: 12px;
      width: 100%;
      border: 1px solid #555;
      border-radius: 8px;
      background-color: #fff;
      color: #000;
      font-size: 16px;
      transition: var(--transition);
    }
    
    select:focus, button:focus {
      outline: none;
      box-shadow: 0 0 0 2px var(--primary-color);
    }
    
    button[onclick="adicionarAoCarrinho()"] {
      background-color: var(--primary-color);
      color: #000;
      font-weight: bold;
      border: none;
      margin-top: 20px;
    }
    
    /* Carrinho */
    .carrinho {
      max-width: 800px;
      margin: 0 auto;
      background-color: var(--card-bg);
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
    
    .carrinho h3 {
      color: var(--primary-color);
      border-bottom: 2px solid var(--primary-color);
      padding-bottom: 10px;
    }
    
    #listaCarrinho {
      padding: 0;
      list-style: none;
    }
    
    #listaCarrinho li {
      padding: 15px;
      margin: 10px 0;
      background-color: #555;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .btn-finalizar {
      background-color: var(--secondary-color);
      color: #000;
      font-weight: bold;
      padding: 15px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: var(--transition);
      display: block;
      width: 100%;
      margin-top: 20px;
      font-size: 1.1rem;
    }
    
    .btn-finalizar:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(8, 209, 24, 0.3);
    }
    
    /* Responsivo */
    @media (max-width: 768px) {
      .linha-botoes {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <header>
    <img src="logo.png" alt="Logo" /> 
    <h1>INTERNAS PERSONALISADAS ENVIO PARA TODO BRASIL </h1>
    <p> ✧ Seu patrimônio protegido. Sua equipe motivada. Seu negócio mais forte! ✧</p>
    <p> ✧ Cuidando das Suas Máquinas e Quem As Opera ✧ </p>
  </header>

  <!-- BOTÕES DE LINHA NO FORMATO QUADRADO -->
  <div class="linha-botoes">
    <button class="botao-linha linha-amarela" data-linha="Linha Amarela">
      <div class="linha-titulo">Linha Amarela</div>
      <div class="linha-descricao">Máquinas de Terraplenagem</div>
    </button>
    
    <button class="botao-linha linha-verde" data-linha="Linha Verde">
      <div class="linha-titulo">Linha Verde</div>
      <div class="linha-descricao">Máquinas Agrícolas</div>
    </button>
    
    <button class="botao-linha linha-mini" data-linha="Linha Mini">
      <div class="linha-titulo">Linha Mini</div>
      <div class="linha-descricao">Máquinas Compactas</div>
    </button>
  </div>

  <!-- CONTAINER DOS SELECTS -->
  <div id="selecao-container" class="selecao-container">
    <label>Categoria da Máquina:</label>
    <select id="categoria">
      <option value="">Selecione uma categoria</option>
    </select>

    <label>Marca:</label>
    <select id="marca">
      <option value="">Selecione uma marca</option>
    </select>

    <label>Modelo:</label>
    <select id="modelo">
      <option value="">Selecione um modelo</option>
    </select>

    <label>Cor:</label>
    <select id="cor">
      <option value="">Selecione uma cor</option>
    </select>

    <button onclick="adicionarAoCarrinho()">Adicionar ao Carrinho</button>
  </div>

  <!-- CARRINHO -->
  <div class="carrinho">
    <h3>🛒 Carrinho de Compras</h3>
    <ul id="listaCarrinho"></ul>
    <button class="btn-finalizar" onclick="finalizarPedido()">Finalizar Pedido no WhatsApp</button>
  </div>

  <script>
    // [O resto do JavaScript permanece EXATAMENTE IGUAL à versão anterior]
    // Dados dos produtos
    const dados = {
      "Linha Amarela": {
        "Escavadeira": {
          "Caterpillar": ["320D", "336D"],
          "Komatsu": ["PC200", "PC300"]
        },
        "Retroescavadeira": {
          "JCB": ["3CX", "4CX"],
          "Case": ["580N", "695ST"]
        }
      },
      "Linha Verde": {
        "Moto Niveladora": {
          "John Deere": ["620G", "670G"],
          "Caterpillar": ["120K", "140K"]
        },
        "Escavadeira": {
          "Komatsu": ["PC130", "PC210"]
        }
      },
      "Linha Mini": {
        "Miniescavadeira": {
          "Bobcat": ["E20", "E35"],
          "Takeuchi": ["TB216", "TB230"]
        }
      }
    };

    const cores = ["Preto", "Cinza", "Bege", "Marrom", "Azul", "Verde", "Vermelho", "Amarelo", "Branco", "Grafite", "Laranja", "Rosa"];

    // Variáveis globais
    let linhaSelecionada = '';
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    // Elementos DOM
    const botoesLinha = document.querySelectorAll('.botao-linha');
    const selecaoContainer = document.getElementById('selecao-container');
    const categoriaSelect = document.getElementById('categoria');
    const marcaSelect = document.getElementById('marca');
    const modeloSelect = document.getElementById('modelo');
    const corSelect = document.getElementById('cor');

    // Inicialização
    document.addEventListener('DOMContentLoaded', () => {
      popularCores();
      atualizarCarrinho();
    });

    // Popular cores
    function popularCores() {
      corSelect.innerHTML = '<option value="">Selecione...</option>';
      cores.forEach(cor => {
        const option = document.createElement('option');
        option.value = cor;
        option.textContent = cor;
        corSelect.appendChild(option);
      });
    }

    // Evento para os botões de linha
    botoesLinha.forEach(botao => {
      botao.addEventListener('click', function() {
        // Remover classe 'ativo' de todos os botões
        botoesLinha.forEach(btn => btn.classList.remove('ativo'));
        
        // Adicionar classe 'ativo' ao botão clicado
        this.classList.add('ativo');
        
        // Mostrar container de seleção com animação
        selecaoContainer.style.display = 'block';
        
        // Definir linha selecionada
        linhaSelecionada = this.dataset.linha;
        
        // Popular categorias
        popularCategorias();
      });
    });

    function popularCategorias() {
      categoriaSelect.innerHTML = '<option value="">Selecione...</option>';
      marcaSelect.innerHTML = '<option value="">Selecione uma categoria primeiro</option>';
      modeloSelect.innerHTML = '<option value="">Selecione uma marca primeiro</option>';
      
      const categorias = dados[linhaSelecionada];
      for (let categoria in categorias) {
        const option = document.createElement('option');
        option.value = categoria;
        option.textContent = categoria;
        categoriaSelect.appendChild(option);
      }
    }

    // Evento para categoria
    categoriaSelect.addEventListener('change', function() {
      marcaSelect.innerHTML = '<option value="">Selecione...</option>';
      modeloSelect.innerHTML = '<option value="">Selecione uma marca primeiro</option>';
      
      const marcas = dados[linhaSelecionada][this.value];
      for (let marca in marcas) {
        const option = document.createElement('option');
        option.value = marca;
        option.textContent = marca;
        marcaSelect.appendChild(option);
      }
    });

    // Evento para marca
    marcaSelect.addEventListener('change', function() {
      modeloSelect.innerHTML = '<option value="">Selecione...</option>';
      
      const modelos = dados[linhaSelecionada][categoriaSelect.value][this.value];
      modelos.forEach(modelo => {
        const option = document.createElement('option');
        option.value = modelo;
        option.textContent = modelo;
        modeloSelect.appendChild(option);
      });
    });

    // Adicionar ao carrinho
    function adicionarAoCarrinho() {
      const item = {
        linha: linhaSelecionada,
        categoria: categoriaSelect.value,
        marca: marcaSelect.value,
        modelo: modeloSelect.value,
        cor: corSelect.value,
        id: Date.now()
      };
      
      if (!linhaSelecionada || Object.values(item).includes("")) {
        alert("Preencha todas as opções antes de adicionar.");
        return;
      }
      
      carrinho.push(item);
      salvarCarrinho();
      atualizarCarrinho();
      
      // Feedback visual
      const feedback = document.createElement('div');
      feedback.textContent = 'Item adicionado ao carrinho!';
      feedback.style.position = 'fixed';
      feedback.style.bottom = '20px';
      feedback.style.left = '50%';
      feedback.style.transform = 'translateX(-50%)';
      feedback.style.backgroundColor = '#08d118';
      feedback.style.color = 'white';
      feedback.style.padding = '10px 20px';
      feedback.style.borderRadius = '5px';
      feedback.style.boxShadow = '0 3px 10px rgba(0,0,0,0.2)';
      document.body.appendChild(feedback);
      
      setTimeout(() => {
        feedback.remove();
      }, 2000);
    }

    // Salvar carrinho no localStorage
    function salvarCarrinho() {
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
    }

    // Atualizar exibição do carrinho
    function atualizarCarrinho() {
      const lista = document.getElementById("listaCarrinho");
      lista.innerHTML = "";
      
      if (carrinho.length === 0) {
        lista.innerHTML = "<li style='text-align:center;'>Seu carrinho está vazio</li>";
        return;
      }
      
      carrinho.forEach((item, i) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <div>
            <strong>${item.linha}</strong><br>
            ${item.categoria} - ${item.marca} ${item.modelo}<br>
            Cor: ${item.cor}
          </div>
          <button onclick="removerItem(${item.id})" style="
            background: #ff3333;
            color: white;
            border: none;
            border-radius: 5px;
            padding: 5px 10px;
            cursor: pointer;
          ">Remover</button>
        `;
        lista.appendChild(li);
      });
    }

    // Remover item do carrinho
    function removerItem(id) {
      const index = carrinho.findIndex(item => item.id === id);
      if (index !== -1) {
        carrinho.splice(index, 1);
        salvarCarrinho();
        atualizarCarrinho();
      }
    }

    // Finalizar pedido
    function finalizarPedido() {
      if (carrinho.length === 0) {
        alert("Carrinho vazio!");
        return;
      }
      
      let mensagem = "Olá! Gostaria de fazer um pedido:\n\n";
      mensagem += "*Itens do Pedido:*\n\n";
      
      carrinho.forEach((item, i) => {
        mensagem += `➤ ${item.linha} - ${item.marca} ${item.modelo}\n`;
        mensagem += `   Categoria: ${item.categoria}\n`;
        mensagem += `   Cor: ${item.cor}\n\n`;
      });
      
      mensagem += "Por favor, confirme os itens e informe as formas de pagamento e entrega.";
      
      const url = `https://wa.me/SEUNUMERO?text=${encodeURIComponent(mensagem)}`;
      window.open(url, "_blank");
    }
  </script>
</body>
</html>
