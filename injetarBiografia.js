
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search); 
    return urlParams.get(name);
}


function injetarDadosBiografia() {
    const cientistaId = getUrlParameter('id'); 

    if (!cientistaId || typeof DADOS_CIENTISTAS === 'undefined') {
        console.error("ID do cientista não encontrado na URL ou DADOS_CIENTISTAS ausente.");
        return; 
    }

    const cientista = DADOS_CIENTISTAS.find(c => c.id === cientistaId);

    if (!cientista) {
        console.error(`Cientista com ID "${cientistaId}" não encontrado.`);
        return; 
    }

    const conteudoBiografico = document.querySelector('.conteudoBibiografico');
    const portraitAside = document.querySelector('.portrait');

    if (conteudoBiografico) {
        const h1 = conteudoBiografico.querySelector('.nomeCientista h1');
        if (h1) h1.textContent = cientista.nome;

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
        //Fonte
        const elementoFonte = portraitAside.querySelector('.fonte p');

        if (elementoFonte && cientista.fonte) {
            elementoFonte.textContent = cientista.fonte;
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