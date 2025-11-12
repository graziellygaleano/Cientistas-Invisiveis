const DADOS_CIENTISTAS = [
    { 
      "id": "1", 
      "nome": "Katherine Johnson", 
      "area": ["Matemática"], 
      "grupo": ["Mulher", "PPI"], 
      "resumo": "Katherine Johnson, a matemática que superou a segregação e a tecnologia da década de 60, era a garantia de que o astronauta John Glenn voltaria para casa.", 
      "imagem_perfil_url": "img/katherine_johnson.jpg", 
      "bandeira_url": "img/eua.png", 
      "nascimento_morte": "1918 - 2020", 
      "origem": "White Sulphur Springs, Estados Unidos",
      "nascimento": "", "educação": "", "trabalhos": "", "morte": "" 
    },
    
    { 
      "id": "2", 
      "nome": "Emmy Noether", 
      "area": ["Matemática"], 
      "grupo": ["Mulher"], 
      "resumo": "A matemática que contribuiu para a Teoria da Relatividade de Einstein e permaneceu como professora por 19 anos sem remuneração.", 
      "imagem_perfil_url": "img/emmy_noether.jpg", 
      "bandeira_url": "img/alemanha.webp", 
      "nascimento_morte": "1882  - 1935", 
      "origem": "Erlangen, Alemanha",
      "nascimento": "", "educação": "", "trabalhos": "", "morte": "" 
    },    

    { 
      "id": "3", 
      "nome": "Edith Clarke", 
      "area": ["Engenharia"], 
      "grupo": ["Mulher"], 
      "resumo": "A primeira engenheira eletricista e professora de engenharia elétrica do mundo", 
      "imagem_perfil_url": "img/edith_clarke.jpg", 
      "bandeira_url": "img/eua.webp", 
      "nascimento_morte": "1883  - 1959", 
      "origem": "Maryland, Estados Unidos",
      "nascimento": "", "educação": "", "trabalhos": "", "morte": "" 
    },  

    { 
      "id": "4", 
      "nome": "Mary Jackson", 
      "area": ["Engenharia"], 
      "grupo": ["Mulher", "PPI"], 
      "resumo": "De primeira engenheira negra da NASA a uma frente humanitária que ajudou outras mulheres a serem contratadas", 
      "imagem_perfil_url": "img/mary_jackson.jpg", 
      "bandeira_url": "img/eua.webp", 
      "nascimento_morte": "1921 - 2005", 
      "origem": "Hampton, Estados Unidos",
      "nascimento": "", "educação": "", "trabalhos": "", "morte": "" 
    },  

    { 
      "id": "5", 
      "nome": "Stephanie Kwolek", 
      "area": ["Engenharia"], 
      "grupo": ["Mulher"], 
      "resumo": "A química que vestiu policiais com coletes a prova de balas graças a suas descobertas", 
      "imagem_perfil_url": "img/stephanie_kwolek.jpg", 
      "bandeira_url": "img/eua.webp", 
      "nascimento_morte": "1923 - 2014", 
      "origem": "New Kensington, Estados Unidos",
      "nascimento": "", "educação": "", "trabalhos": "", "morte": "" 
    },  

    { 
      "id": "6", 
      "nome": "Grace Hopper", 
      "area": ["Tecnologia"], 
      "grupo": ["Mulher"], 
      "resumo": "Grace Hopper, a contra-almirante da Marinha dos Estados Unidos que liderou a criação de linguagem de programação fundamental para o avanço da computação.", 
      "imagem_perfil_url": "img/grace_hopper.jpg", 
      "bandeira_url": "img/eua.webp", 
      "nascimento_morte": "1906 - 1992", 
      "origem": "Nova York, Estados Unidos",
      "nascimento": "", "educação": "", "trabalhos": "", "morte": "" 
    }, 
    
    { 
      "id": "7", 
      "nome": "Ada Lovelace", 
      "area": ["Tecnologia"], 
      "grupo": ["Mulher"], 
      "resumo": "A primeira programadora da história, entre homens e mulheres, tinha o título de Condessa na sociedade inglesa de 1835.", 
      "imagem_perfil_url": "img/ada_lovelace.jpg", 
      "bandeira_url": "img/reino_unido.webp", 
      "nascimento_morte": "1815 - 1852", 
      "origem": "Inglaterra, Reino Unido",
      "nascimento": "", "educação": "", "trabalhos": "", "morte": "" 
    },  

    { 
      "id": "8", 
      "nome": "Hedy Lamarr", 
      "area": ["Tecnologia"], 
      "grupo": ["Mulher"], 
      "resumo": "A atriz de Hollywood que desenvolveu uma patente para guiar torpedos durante a Segunda Guerra Mundial.", 
      "imagem_perfil_url": "img/hedy_lamarr.jpg", 
      "bandeira_url": "img/austria.webp", 
      "nascimento_morte": "1914 - 1852", 
      "origem": "Viena, Áustria",
      "nascimento": "", "educação": "", "trabalhos": "", "morte": "" 
    },        

    { 
      "id": "9", 
      "nome": "Marie Curie", 
      "area": ["Ciência"], 
      "grupo": ["Mulher"], 
      "resumo": "Marie Curie, a primeira a conquistar dois prêmios Nobel em áreas diferentes.", 
      "imagem_perfil_url": "img/marie_curie.jpg", 
      "bandeira_url": "img/polonia.webp", 
      "nascimento_morte": "1867  - 1934", 
      "origem": "Varsóvia, Polônia",
      "nascimento": "", "educação": "", "trabalhos": "", "morte": "" 
    },    
    
    { 
      "id": "10", 
      "nome": "Rosalind Franklin", 
      "area": ["Ciência"], 
      "grupo": ["Mulher"], 
      "resumo": "A química por trás da 'Fotografia 51', que viu o segredo do DNA, mas foi forçada a assistir de longe enquanto seu trabalho era roubado", 
      "imagem_perfil_url": "img/rosalind_franklin.jpg", 
      "bandeira_url": "img/reino_unido.webp", 
      "nascimento_morte": "1920 - 1958", 
      "origem": "Londres, Inglaterra",
      "nascimento": "", "educação": "", "trabalhos": "", "morte": "" 
    },  

    { 
      "id": "11", 
      "nome": "Rachel Carson", 
      "area": ["Ciência"], 
      "grupo": ["Mulher"], 
      "resumo": "Rachel Carson, a cientista cujas descobertas incentivaram uma investigação governamental.", 
      "imagem_perfil_url": "img/rachel_carson.jpg", 
      "bandeira_url": "img/eua.webp", 
      "nascimento_morte": "1907  - 1964 ", 
      "origem": "Pensilvânia, Estados Unidos",
      "nascimento": "", "educação": "", "trabalhos": "", "morte": "" 
    }
];


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