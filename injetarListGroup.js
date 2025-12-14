function getUrlParameter(name) {
    // Note: O nome do parâmetro na URL dos seus links de minoria é 'area'
    const urlParams = new URLSearchParams(window.location.search); 
    return urlParams.get(name); // Busca o valor do parâmetro 'area'
}

function criarCardHtml(cientista) {
    // ... (sua função criarCardHtml permanece a mesma) ...
    return `
        <div class="persona">
            <div class="image-container">
                <img src="${cientista.imagem_perfil_url}" alt="Foto de ${cientista.nome}" width="196" height="246">
            </div>

            <a href="pagBiografica.html?id=${cientista.id}" class="card-link">
                <div class="card">
                    <div class="content">
                        <h2 class="nome">${cientista.nome} (${cientista.nascimento_morte})</h2>
                        <p class="descricao">${cientista.resumo}</p>
                        <div class="location">
                            <img src="${cientista.bandeira_url}" class="bandeira" alt="Bandeira de ${cientista.origem}" width="32" height="20">
                            <p class="origem">${cientista.origem}</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    `;
}

function renderizarCientistas(cientistasParaExibir) {
    const container = document.getElementById('cientistas-container');
    // const totalElement = document.getElementById('total-cientistas'); // Removido, pois o ID não está no HTML
    
    let htmlContent = ''; 

    if (!container) { 
        console.error("ERRO CRÍTICO: O ponto de injeção 'cientistas-container' não foi encontrado!");
        return; 
    }

    cientistasParaExibir.forEach(cientista => {
        htmlContent += criarCardHtml(cientista); 
    });

    container.innerHTML = htmlContent;

}

function injetarDadosDoGrupo(chaveGrupo) {
    // Usa a chave para buscar os dados no novo objeto DADOS_GRUPOS
    const grupo = DADOS_GRUPOS[chaveGrupo];

    // Se o grupo for encontrado, injeta o título e a descrição
    if (grupo) {
        document.getElementById('titulo-grupo').textContent = grupo.titulo;
        
        // Injeta a descrição principal (usando o primeiro parágrafo)
        const p1 = document.getElementById('descricao-paragrafo-1');
        if (p1) {
             p1.textContent = grupo.descricao;
        }

        // Injeta a descrição secundária (usando o segundo parágrafo)
        const p2 = document.getElementById('descricao-paragrafo-2');
        if (p2 && grupo.descricaoSecundaria) {
             p2.textContent = grupo.descricaoSecundaria;
        }
        
        // Limpa o último parágrafo (ou injeta um padrão, se desejar)
        const p3 = document.getElementById('descricao-paragrafo-3');

        if (p3) {
            if (grupo.descricaoTercearia) {
                // Se a descrição terciária existe no dados.js, injete-a e mostre o parágrafo.
                p3.textContent = grupo.descricaoTercearia;
                p3.style.display = 'block'; 
            } else {
                // Se a descrição terciária NÃO existe, esconda o parágrafo.
                p3.textContent = '';
                p3.style.display = 'none'; 
            }
        }
    }
}


window.onload = function() {
    // 1. Pega o parâmetro 'area' da URL
    const areaFiltro = getUrlParameter('area'); 
    
    // 2. Garante que temos uma lista de cientistas para renderizar
    let listaParaRenderizar = DADOS_CIENTISTAS || [];

    if (areaFiltro) {
        // 3. Injeta o título e a descrição do grupo
        injetarDadosDoGrupo(areaFiltro);

        // 4. Filtra os cientistas
        listaParaRenderizar = DADOS_CIENTISTAS.filter(cientista => {
            // Verifica se o array 'area' do cientista inclui a área de filtro
            // Convertendo para maiúsculas/minúsculas para garantir a correspondência
            return cientista.area.map(a => a.toUpperCase()).includes(areaFiltro.toUpperCase());
        });
    } else {
        // Se não houver filtro, mostra uma mensagem e limpa o título
        document.getElementById('titulo-grupo').textContent = "Todos os Cientistas";
        document.getElementById('descricao-paragrafo-1').textContent = "Veja todos os cientistas em nosso banco de dados.";
        // Limpa os demais parágrafos se não houver grupo
        const descContainer = document.querySelector('.descricao');
        if (descContainer) {
            descContainer.innerHTML = `<p>${document.getElementById('descricao-paragrafo-1').textContent}</p>`;
        }
    };
    
    // 5. Renderiza a lista de cards
    renderizarCientistas(listaParaRenderizar);
    
}