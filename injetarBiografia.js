// Funções necessárias para a biografia (injetarBiografia.js)

// Função para pegar o parâmetro da URL (reutilizada do seu código)
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search); 
    return urlParams.get(name);
}

// Função principal para injetar os dados na página biográfica
function injetarDadosBiografia() {
    // 1. Obter o ID do cientista na URL
    const cientistaId = getUrlParameter('id'); 

    // Checagem de segurança (assumindo que DADOS_CIENTISTAS é global e carregado)
    if (!cientistaId || typeof DADOS_CIENTISTAS === 'undefined') {
        console.error("ID do cientista não encontrado na URL ou DADOS_CIENTISTAS ausente.");
        return; 
    }

    // 2. Buscar o objeto do cientista na lista de dados
    const cientista = DADOS_CIENTISTAS.find(c => c.id === cientistaId);

    if (!cientista) {
        console.error(`Cientista com ID "${cientistaId}" não encontrado.`);
        return; 
    }

    // 3. Seletores e Injeção de Dados
    const conteudoBiografico = document.querySelector('.conteudoBibiografico');
    const portraitAside = document.querySelector('.portrait');

    // --- Injeção no Conteúdo Biográfico (Coluna da Direita) ---
    if (conteudoBiografico) {
        // Título H1 (Nome)
        const h1 = conteudoBiografico.querySelector('.nomeCientista h1');
        if (h1) h1.textContent = cientista.nome;

        // Frase Marcante (Usando 'resumo' como frase, já que 'frase_marcante' não existe no JSON)
        const fraseP = conteudoBiografico.querySelector('.fraseMarcante');
        if (fraseP) fraseP.textContent = cientista.resumo || 'Sem frase marcante definida.';
        
        // Biografia (Injetando as seções 'nascimento', 'educação', 'trabalhos', 'morte')
        const biografiaDiv = conteudoBiografico.querySelector('.biografia');
        if (biografiaDiv) {
            let bioHTML = '';
            
            // Apenas injeta o parágrafo se o conteúdo da chave no JSON existir (não for uma string vazia)
            if (cientista.nascimento) bioHTML += `<p>${cientista.nascimento}</p>`;
            if (cientista.educação) bioHTML += `<p>${cientista.educação}</p>`;
            if (cientista.trabalhos) bioHTML += `<p>${cientista.trabalhos}</p>`;
            if (cientista.morte) bioHTML += `<p>${cientista.morte}</p>`;
            
            // Substitui o HTML estático do container da biografia
            biografiaDiv.innerHTML = bioHTML || '<p>Biografia não disponível.</p>';
        }
    }

    // --- Injeção na Sidebar/Portrait (Coluna da Esquerda) ---
    if (portraitAside) {
        // Imagem
        const img = portraitAside.querySelector('img');
        if (img) {
            img.src = cientista.imagem_perfil_url;
            img.alt = `Foto de ${cientista.nome}`;
        }

        const informativoDiv = portraitAside.querySelector('.informativo');
        if (informativoDiv) {
            
            // Reconstruindo o HTML do informativo para garantir que o conteúdo estático seja substituído
            // (Usando as chaves ajustadas: 'origem' e 'grupo' / 'area')
            let infoHTML = `
                <p>
                    <span class="colorido">Nascimento e morte:</span> ${cientista.nascimento_morte}
                </p>
                <p>
                    <span class="colorido">Origem:</span> ${cientista.origem}
                </p>
                <p>
                    <span class="colorido">Principais descobertas:</span>
                </p>
                <ul>
                    ${cientista.area.map(d => `<li class="detalhes">${d}</li>`).join('')}
                </ul>
                <p>
                    <span class="colorido">Grupo Minoritário</span>
                </p>
                <ul>
                    ${cientista.grupo.map(g => `<li class="detalhes">${g}</li>`).join('')} 
                </ul>
            `;
            
            // Injeta todo o bloco, limpando o HTML estático anterior
            informativoDiv.innerHTML = infoHTML;
        }
    }
    
    console.log(`Dados do cientista ${cientista.nome} injetados com sucesso.`);
}

// Inicia a injeção dos dados assim que a página é carregada
window.onload = injetarDadosBiografia;