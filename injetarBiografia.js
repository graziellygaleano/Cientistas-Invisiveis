// Função para pegar o parâmetro da URL (reutilizada do seu código)
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search); 
    return urlParams.get(name);
}

// Função principal para injetar os dados na página biográfica
function injetarDadosBiografia() {
    // ... (obtenção do cientistaId e busca do objeto 'cientista' - ESTÁ CORRETO) ...
    const cientistaId = getUrlParameter('id'); 
    if (!cientistaId || typeof DADOS_CIENTISTAS === 'undefined') return; 
    const cientista = DADOS_CIENTISTAS.find(c => c.id === cientistaId);
    if (!cientista) return;
    
    // 3. Injetar os dados nos elementos HTML

    const conteudoBiografico = document.querySelector('.conteudoBibiografico');
    const portraitAside = document.querySelector('.portrait');

    // --- Injeção no Conteúdo Biográfico (Direita) ---
    if (conteudoBiografico) {
        // Título H1 (Nome) - CORRETO
        const h1 = conteudoBiografico.querySelector('.nomeCientista h1');
        if (h1) h1.textContent = cientista.nome;

        // Frase Marcante - AJUSTADO (Usando 'resumo' como fallback, já que 'frase_marcante' não existe)
        const fraseP = conteudoBiografico.querySelector('.fraseMarcante');
        if (fraseP) fraseP.textContent = cientista.resumo || 'Sem frase marcante definida.';
        
        // Biografia - AJUSTADO (Você não tem uma array 'biografia', mas sim campos textuais separados)
        const biografiaDiv = conteudoBiografico.querySelector('.biografia');
        if (biografiaDiv) {
            // Injetando as seções separadas como parágrafos
            let bioHTML = `<p>${cientista.nascimento}</p>`;
            bioHTML += `<p>${cientista.educação}</p>`;
            bioHTML += `<p>${cientista.trabalhos}</p>`;
            bioHTML += `<p>${cientista.morte}</p>`;
            
            // Verifica se as chaves existem antes de injetar, para evitar "undefined"
            biografiaDiv.innerHTML = bioHTML;
            
            // Remova o código antigo: biografiaDiv.innerHTML = cientista.biografia.map(p => `<p>${p}</p>`).join('');
        }
    }

    // --- Injeção na Sidebar/Portrait (Esquerda) ---
    if (portraitAside) {
        // Imagem - CORRETO
        const img = portraitAside.querySelector('img');
        if (img) {
            img.src = cientista.imagem_perfil_url;
            img.alt = `Foto de ${cientista.nome}`;
        }

        const informativoDiv = portraitAside.querySelector('.informativo');
        if (informativoDiv) {
            // Nascimento e Morte - CORRETO
            const dataP = informativoDiv.querySelector('p:nth-child(1)'); 
            if (dataP) dataP.innerHTML = `<span class="colorido">Nascimento e morte:</span> ${cientista.nascimento_morte}`;
            
            // Origem - AJUSTADO (Mudando para 'cientista.origem' em vez de 'cientista.origem_cidade_pais')
            const origemP = informativoDiv.querySelector('p:nth-child(2)'); 
            if (origemP) origemP.innerHTML = `<span class="colorido">Origem:</span> ${cientista.origem}`;
            
            // Lista de Principais Descobertas - AJUSTADO (Usando 'cientista.area' em vez de 'principais_descobertas')
            const descobertasUl = informativoDiv.querySelector('ul:nth-of-type(1)');
            if (descobertasUl && cientista.area) {
                descobertasUl.innerHTML = cientista.area.map(d => `<li class="detalhes">${d}</li>`).join('');
            }
            
            // Lista de Grupos Minoritários - AJUSTADO (Usando 'cientista.grupo' em vez de 'grupo_minoritario')
            const minoriasUl = informativoDiv.querySelector('ul:nth-of-type(2)');
            if (minoriasUl && cientista.grupo) {
                minoriasUl.innerHTML = cientista.grupo.map(g => `<li class="detalhes">${g}</li>`).join('');
            }
        }
    }
    
    console.log(`Dados do cientista ${cientista.nome} injetados com sucesso.`);
}

// Inicia a injeção dos dados assim que a página é carregada
window.onload = injetarDadosBiografia;