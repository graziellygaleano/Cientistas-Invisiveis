

//PÁGINA BIOGRÁFICA



// Função para pegar o parâmetro da URL (reutilizada do seu código)
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search); 
    return urlParams.get(name);
}

// Função principal para injetar os dados na página biográfica
function injetarDadosBiografia() {
    // 1. Obter o ID do cientista na URL (o que foi passado no card)
    const cientistaId = getUrlParameter('id'); 

    // Se não houver ID, ou se DADOS_CIENTISTAS não existir, exibe erro e para
    if (!cientistaId || typeof DADOS_CIENTISTAS === 'undefined') {
        console.error("ID do cientista não encontrado na URL ou DADOS_CIENTISTAS ausente.");
        // Opcional: Redirecionar para a lista ou exibir uma mensagem de erro na tela
        return; 
    }

    // 2. Buscar o objeto do cientista na lista de dados
    const cientista = DADOS_CIENTISTAS.find(c => c.id === cientistaId);

    if (!cientista) {
        console.error(`Cientista com ID "${cientistaId}" não encontrado.`);
        // Opcional: Redirecionar para a lista ou exibir uma mensagem de "não encontrado"
        return; 
    }

    // 3. Injetar os dados nos elementos HTML

    // Seletor do Conteúdo Principal (Coluna da Direita)
    const conteudoBiografico = document.querySelector('.conteudoBibiografico');
    
    // Seletor da Sidebar/Portrait (Coluna da Esquerda)
    const portraitAside = document.querySelector('.portrait');

    // --- Injeção no Conteúdo Biográfico (Direita) ---
    if (conteudoBiografico) {
        // Título H1 (Nome)
        const h1 = conteudoBiografico.querySelector('.nomeCientista h1');
        if (h1) h1.textContent = cientista.nome;

        // Frase Marcante
        const fraseP = conteudoBiografico.querySelector('.fraseMarcante');
        if (fraseP) fraseP.textContent = cientista.frase_marcante || 'Sem frase marcante definida.';
        
        // Biografia (assumindo que o primeiro parágrafo contém a biografia completa ou um resumo)
        // Nota: Idealmente, você deve ter um container específico para a biografia
        const biografiaDiv = conteudoBiografico.querySelector('.biografia');
        if (biografiaDiv) {
            // Se a biografia for um array de parágrafos no JSON, você pode injetá-los
            biografiaDiv.innerHTML = cientista.biografia.map(p => `<p>${p}</p>`).join('');
        }
    }

    // --- Injeção na Sidebar/Portrait (Esquerda) ---
    if (portraitAside) {
        // Imagem
        const img = portraitAside.querySelector('img');
        if (img) {
            img.src = cientista.imagem_perfil_url;
            img.alt = `Foto de ${cientista.nome}`;
        }

        // Informações (Nascimento/Morte, Origem, Descobertas, Minorias)
        const informativoDiv = portraitAside.querySelector('.informativo');
        if (informativoDiv) {
            // Acessando e atualizando a data de Nascimento e Morte
            const dataP = informativoDiv.querySelector('p:nth-child(1)'); // Posição 1
            if (dataP) dataP.innerHTML = `<span class="colorido">Nascimento e morte:</span> ${cientista.nascimento_morte}`;
            
            // Acessando e atualizando a Origem
            const origemP = informativoDiv.querySelector('p:nth-child(2)'); // Posição 2
            if (origemP) origemP.innerHTML = `<span class="colorido">Origem:</span> ${cientista.origem_cidade_pais}`;
            
            // Lista de Principais Descobertas
            const descobertasUl = informativoDiv.querySelector('ul:nth-of-type(1)');
            if (descobertasUl && cientista.principais_descobertas) {
                descobertasUl.innerHTML = cientista.principais_descobertas.map(d => `<li class="detalhes">${d}</li>`).join('');
            }
            
            // Lista de Grupos Minoritários
            const minoriasUl = informativoDiv.querySelector('ul:nth-of-type(2)');
            if (minoriasUl && cientista.grupo_minoritario) {
                minoriasUl.innerHTML = cientista.grupo_minoritario.map(g => `<li class="detalhes">${g}</li>`).join('');
            }
        }
    }
    
    console.log(`Dados do cientista ${cientista.nome} injetados com sucesso.`);
}

// Inicia a injeção dos dados assim que a página é carregada
window.onload = injetarDadosBiografia;