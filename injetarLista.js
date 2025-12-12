


function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search); 
    return urlParams.get(name);
}


function criarCardHtml(cientista) {

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
    const totalElement = document.getElementById('total-cientistas'); 
    
    let htmlContent = ''; 

    if (!container) { 
        console.error("ERRO CRÍTICO: O ponto de injeção 'cientistas-container' não foi encontrado!");
        return; 
    }

    cientistasParaExibir.forEach(cientista => {
        htmlContent += criarCardHtml(cientista); 
    });

    container.innerHTML = htmlContent;

    if (totalElement) {
        totalElement.textContent = cientistasParaExibir.length;
    }
}



window.onload = function() {
    

    const areaFiltro = getUrlParameter('area'); 
    let listaParaRenderizar = DADOS_CIENTISTAS;

    if (areaFiltro) {

        listaParaRenderizar = DADOS_CIENTISTAS.filter(cientista => {

            return cientista.area.map(a => a.toLowerCase()).includes(areaFiltro.toLowerCase());
        });
    }
    

    renderizarCientistas(listaParaRenderizar);
};








