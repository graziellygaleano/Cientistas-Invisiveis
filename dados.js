const DADOS_GRUPOS = {
    "LGBTQIAP+": {
            // Mude tituloGrupo para titulo
            titulo: "Comunidade LGBTQIAP+", 
            // Mude descricao para descricao
            descricao: "Este grupo celebra as contribuições...", 
            // Mude descricaoSecundaria para descricaoSecundaria
            descricaoSecundaria: "O talento não tem orientação sexual...",
            // Se p3 for o 3º parágrafo, pode ser:
            descricaoTercearia: "O talento não tem orientação sexual e identidade de gênero..." 
        },
    "Feminismo": {
        titulo: "Mulheres na Ciência (Feminismo)",
        descricao: "Este grupo destaca a trajetória de mulheres que quebraram barreiras e fizeram descobertas cruciais em todas as áreas do conhecimento, muitas vezes superando o apagamento histórico e o preconceito de gênero.",
        descricaoSecundaria: "De Marie Curie a Katherine Johnson, veja como a persistência feminina moldou a ciência moderna.",
        descricaoTercearia: "De Marie Curie a Katherine Johnson, veja como a persistência feminina moldou a ciência moderna."
    },
    "PPI": {
        tituloGrupo: "Pessoas Pretas e Pardas (PPI)",
        descricao: "Este grupo homenageia cientistas negros e pardos, cuja genialidade frequentemente foi invisibilizada. O objetivo é ressaltar suas contribuições fundamentais para o avanço da ciência e tecnologia global.",
        descricaoSecundaria: "A representatividade importa. Conheça as mentes brilhantes que vieram das diásporas africanas e afro-brasileiras.",
        descricaoTercearia: "A representatividade importa. Conheça as mentes brilhantes que vieram das diásporas africanas e afro-brasileiras."
    },
    "PCD": {
        tituloGrupo: "Pessoas com Deficiência (PCD)",
        descricao: "Este grupo apresenta cientistas que, apesar ou por causa de suas deficiências físicas, sensoriais ou intelectuais, desenvolveram trabalhos inovadores, provando que a capacidade intelectual transcende as limitações físicas.",
        descricaoSecundaria: "A ciência é para todos. Conheça as histórias de superação e genialidade.",
        descricaoTercearia: "A ciência é para todos. Conheça as histórias de superação e genialidade."
    }
    // ... adicione outras áreas aqui (se houver)
};




const DADOS_CIENTISTAS = [
    { 
      "id": "1", 
      "nome": "Katherine Johnson", 
      "area": ["Matemática"], 
      "grupo": ["Mulher", "PPI"], 
      "resumo": "Katherine Johnson, a matemática que superou a segregação e a tecnologia da década de 60, era a garantia de que o astronauta John Glenn voltaria para casa.", 
      "imagem_perfil_url": "img/KatherineJohnson.jpg", 
      "bandeira_url": "img/estados unidos.png", 
      "nascimento_morte": "1918 - 2020", 
      "origem": "White Sulphur Springs, Estados Unidos",
      "nascimento": "Nascida em 26 de agosto de 1918, em White Sulphur Springs, Virgínia Ocidental, a infância de Katherine Johnson foi marcada por um cenário difícil durante o período de racismo institucionalizado nos Estados Unidos, onde até a década de 1960 pessoas negras viviam em segregação racial.",
      "educação": "O que poderia ter sido um impedimento, no entanto, tornou-se apenas um obstáculo para sua família e para a pequena e ambiciosa Katherine. Desde muito jovem, ela demonstrou uma aptidão para números que a levou a pular séries na escola e a alcançar o ensino médio com apenas 13 anos. Aos 18 anos, seu caminho se cruzou com o de um grande nome, W. W. Schieffelin Claytor, o terceiro homem negro a receber um doutorado em Matemática no país. Segundo algumas fontes, ele chegou a criar novos cursos de matemática para Johnson, que já havia \"gabaritado\" o currículo da faculdade. Apesar de ter se formado em 1937, seus momentos mais brilhantes ainda estavam por vir. Ela assumiu o cargo de professora em uma escola pública na Virgínia, mas poucos anos depois conheceu seu futuro marido, James Goble. Juntos, tiveram três filhas e, até que todas estivessem um pouco mais velhas, Katherine se dedicou integralmente à maternidade.",
      "trabalhos": "Em 1953, sua história alcançou os primeiros passos na trilha que a levou à missão Apollo 11. Katherine Johnson ouviu de um parente sobre vagas específicas para mulheres negras na Computação da Área Oeste na aposentada NACA, que hoje é conhecida como NASA. Johnson iniciou no cargo de computadora — uma função em que fazia diversos cálculos de alta precisão —, mas apenas duas semanas depois assumiu outra posição. O que deveria ser temporário a levou a quatro anos de análise de dados de testes de voo e na investigação de um acidente aéreo, antes de ser coautora do documento Notes on Space Technology, no qual fazia a análise da trajetória para a primeira missão tripulada dos EUA, em 1961. Em 1962, ela viveu o que se tornou o momento mais marcante de sua carreira, durante a missão Friendship 7. Os cálculos para esse voo eram tão complexos que exigiram a criação de uma rede de computadores da IBM. Como, nessa época, as máquinas ainda costumavam falhar e os astronautas ficavam temerosos, em um trecho da biografia de Katherine Johnson no site oficial da NASA conta como, durante a checagem pré-voo do Projeto Mercury, John Glenn pediu aos engenheiros que chamassem \"aquela garota\" para confirmar os cálculos programados pelo computador, alegando que \"Se ela disser que estão bons, estou pronto para ir\". Como registrado de sua missão, o voo foi um sucesso, marcando um ponto crucial durante a Guerra Fria. A longa carreira de Johnson durou 33 anos, totalizando mais de 20 publicações como autora ou coautora. Uma de suas pesquisas pode ser encontrada em https://ntrs.nasa.gov/citations/19980227091, sendo esta a primeira vez em que foi de fato creditada por seu trabalho. Um ponto importante de sua história é que, apesar das oportunidades que abraçou, Katherine Johnson não obteve muito reconhecimento até o fim de sua vida. Em 2015, aos 97 anos, a matemática foi condecorada pelo presidente Barack Obama com a Medalha Presidencial da Liberdade, a mais alta honra civil dos Estados Unidos.",
      "morte": "No entanto, em 2020, o mundo recebeu a triste notícia de seu falecimento em um lar de idosos em Newport News, em 24 de fevereiro, aos 101 anos."
    },
    
    { 
      "id": "2", 
      "nome": "Emmy Noether", 
      "area": ["Matemática"], 
      "grupo": ["Mulher"], 
      "resumo": "A matemática que contribuiu para a Teoria da Relatividade de Einstein e permaneceu como professora por 19 anos sem remuneração.", 
      "imagem_perfil_url": "img/Emmy Noether.jpg", 
      "bandeira_url": "img/alemanha.jpg", 
      "nascimento_morte": "1882 - 1935", 
      "origem": "Erlangen, Alemanha",
      "nascimento": "Amalie Emmy Noether nasceu em 1882 em Erlangen, Alemanha. De uma família judia e filha de Max Noether, um professor da Universidade de Erlangen conhecido por suas contribuições para a matemática algébrica, o gosto pela área era claramente familiar.",
      "educação": "Nessa época, durante o século XIX, a educação formal de mulheres se encerrava por volta dos 14 anos, e por essa razão, Emmy Noether não podia ser oficialmente vinculada a uma universidade. Entretanto, isso não foi suficiente para pará-la. Aos 18 anos, Emmy foi autorizada a frequentar aulas de matemática na faculdade como ouvinte, desde que conseguisse a autorização do professor responsável, mas alguns se recusavam, repudiando a ideia de lecionar com uma mulher na sala. Em 1904, a mesma universidade passou a permitir que mulheres se matriculassem, e sob a orientação de Paul Gordan, um professor e amigo de seu pai, Emmy concluiu sua tese de doutorado por volta de 1908. Após a conquista de seu doutorado, e apesar de já poderem se matricular, as mulheres ainda não eram reconhecidas para assumirem cargos acadêmicos. Então, Emmy permaneceu na faculdade sem remuneração para guiar suas pesquisas, e isso continuou inclusive quando foi convidada por David Hilbert para trabalhar na Universidade de Göttingen. Somente após a Primeira Guerra Mundial, em 1922, recebeu a habilitação para se tornar professora formalmente, e apenas em 1923 começou a receber um salário.",
      "trabalhos": "O trabalho principal de Noether foi desenvolvido entre 1915 e 1918, quando publicou a obra que é um pilar para a física moderna, hoje conhecida como o Teorema de Noether. Nele, estabelece uma conexão profunda e fundamental entre as leis de conservação na física e as simetrias da natureza, o que posteriormente foi essencial para a teoria da relatividade de Einstein. Em 1920, a genialidade de Emmy Noether  passou a ser mais difundida e em 1932, ela recebeu seu reconhecimento mais significativo com o Prêmio Memorial Ackermann-Teubner em Matemática por seu trabalho em álgebras não comutativas, teoria da representação, números hipercomplexos e transformações lineares. ",
      "morte": "Apenas um ano depois, Emmy foi forçada a abandonar seu emprego por conta das políticas repressivas sobre os judeus na Alemanha. Esse acontecimento a levou a trabalhar no Bryn Mawr College, na Pensilvânia, mas dois anos depois ela faleceu por complicações em uma cirurgia."
    },    

    { 
      "id": "3", 
      "nome": "Edith Clarke", 
      "area": ["Engenharia"], 
      "grupo": ["Mulher"], 
      "resumo": "A primeira engenheira eletricista e professora de engenharia elétrica do mundo", 
      "imagem_perfil_url": "img/portrait.png", 
      "bandeira_url": "img/estados unidos.png", 
      "nascimento_morte": "1883 - 1959", 
      "origem": "Maryland, Estados Unidos",
      "nascimento": "Nascida em 1883, em uma fazenda em Maryland, Edith Clarke teve uma infância difícil. Após a morte de seus pais, aos 12 anos, ela foi morar com um tio. Sua vida acadêmica começou em um internato, mas sua ambição a levou além. Aos 18 anos, usando a herança de seus pais, ela decidiu investir em sua educação.",
      "educação": "Em 1908, ela ingressou no Vassar College para estudar Matemática e Astronomia. Após a formatura, tentou a carreira de professora de matemática, mas rapidamente se desiludiu. Buscando uma nova direção, ela começou a cursar Engenharia Civil na Universidade de Wisconsin em 1911, mas novamente não se encontrou.",
      "trabalhos": "Sua paixão surgiria de forma inesperada. Em 1912, Clarke começou a trabalhar na AT&T como assistente de computador — uma função que, na época, envolvia cálculos complexos para os quais não existiam calculadoras. Foi lá que ela se aprofundou em teorias de linhas de transmissão e circuitos elétricos. Inspirada por esse trabalho, em 1919, ela se tornou a primeira mulher a obter um mestrado em Engenharia Elétrica no MIT. O ano de 1921 marcou um de seus maiores feitos: ela inventou a calculadora Clarke, patenteada em 1925. Essa ferramenta simplifica equações complexas de correntes elétricas, facilitando a resolução de problemas em linhas de transmissão. Em 1922, Clarke quebrou outra barreira ao ser contratada pela General Electric, tornando-se a primeira engenheira elétrica mulher nos Estados Unidos. Sua carreira foi um farol de inovação. Ela publicou 18 artigos técnicos e escreveu o livro 'Circuit Analysis of A-C Power Systems', que se tornou uma referência na indústria. Em 1947, ela fez história mais uma vez como a primeira professora de engenharia na Universidade de Austin, no Texas.",
      "morte": "Edith Clarke faleceu em 1959, dois anos após se aposentar, deixando um legado inestimável que pavimentou o caminho para muitas mulheres na ciência e na engenharia. Sua história é um testemunho da perseverança e da importância de seguir a própria vocação."
    },  

    { 
      "id": "4", 
      "nome": "Mary Jackson", 
      "area": ["Engenharia"], 
      "grupo": ["Mulher", "PPI"], 
      "resumo": "De primeira engenheira negra da NASA a uma frente humanitária que ajudou outras mulheres a serem contratadas", 
      "imagem_perfil_url": "img/Mary Jackson.jpg", 
      "bandeira_url": "img/estados unidos.png", 
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
      "imagem_perfil_url": "img/Stephanie Kwolek.png", 
      "bandeira_url": "img/estados unidos.png", 
      "nascimento_morte": "1923 - 2014", 
      "origem": "New Kensington, Estados Unidos",
      "nascimento": "Nascida em 1923, em New Kensington, Pensilvânia, Stephanie Kwolek foi criada pela mãe e, desde a infância, demonstrava um interesse especial por química, tecidos e costura. Em 1946, Stephanie se formou em química no Margaret Morrison Carnegie College.",
      "educação": "Inicialmente, seu plano ao entrar na empresa DuPont — onde futuramente faria descobertas excepcionais —, era apenas juntar dinheiro para, então, seguir a sua aspiração de estudar medicina. No início Stephanie começou a trabalhar no laboratório de fibras têxteis., mas logo depois, foi designada a uma pesquisa de polímeros que, segundo a própria Stephanie, a interessou tanto que a fez desistir da medicina. A pesquisa buscava novos polímeros e processos de condensação em baixas temperaturas e dentro do projeto que lhe abriu portas, uma de suas maiores conquistas foi a invenção do Kevlar, uma fibra de alta resistência e rigidez que hoje é amplamente utilizada em coletes à prova de balas.",
      "trabalhos": "Ao longo de sua carreira, Stephanie Kwolek se dedicou a mentorias para outras mulheres cientistas e participou de programas que incentivavam jovens a ingressarem na área, demonstrando seu interesse em expandir a presença feminina na ciência. Por suas descobertas, ela recebeu diversos prêmios, incluindo o National Inventors Hall of Fame (1995), a National Medal of Technology (1996) e a Perkin Medal (1997).",
      "morte": "Stephanie permaneceu na DuPont Company até se aposentar e em 2014, aos 90 anos, o mundo recebeu a notícia de seu falecimento."
    },

    { 
      "id": "6", 
      "nome": "Grace Hopper", 
      "area": ["Tecnologia"], 
      "grupo": ["Mulher"], 
      "resumo": "Grace Hopper, a contra-almirante da Marinha dos Estados Unidos que liderou a criação de linguagem de programação fundamental para o avanço da computação.", 
      "imagem_perfil_url": "img/Grace Hopper.jpg", 
      "bandeira_url": "img/estados unidos.png", 
      "nascimento_morte": "1906 - 1992", 
      "origem": "Nova York, Estados Unidos",
        "nascimento": "Nascida em 1906, em Nova York, Grace Hopper concluiu sua graduação em matemática e física no Vassar College, onde foi membro da fraternidade Phi Beta Kappa. Em 1928, continuou seus estudos na Universidade de Yale, onde obteve um mestrado em 1930 e um doutorado em matemática em 1934.",
        "educação": "Em 1933, ainda no início de sua carreira, Grace Hopper começou a lecionar no Vassar College, onde permaneceu por dez anos. Em 1943, alistou-se na Marinha através do programa WAVES (Mulheres Aceitas para o Serviço Voluntário de Emergência). Embora algumas fontes afirmam que, ela havia tentado se alistar antes sendo aceita somente após o ataque a Pearl Harbor, pois em sua primeira tentativa, aos 34 anos, foi rejeitada sob a alegação de que era 'velha e magra demais'. ",
        "trabalhos": "Sua primeira designação na Marinha foi no projeto de computação 'Bureau of Ships' na Universidade de Harvard. Lá, ela se juntou à equipe que trabalhava no computador Mark I, escrevendo um manual de 561 páginas para seu uso, publicado em 1946. Como uma das três primeiras programadoras do projeto, Hopper foi essencial para a transição dos computadores eletromecânicos para os eletrônicos. Grace Hopper também desempenhou um papel crucial na criação do FLOW-MATIC, a primeira linguagem de programação a usar palavras em inglês para comandos em vez de números. Essa linguagem foi a precursora do COBOL, que, apesar de antigo, ainda é fundamental para diversos sistemas bancários e governamentais. Aos 79 anos, Grace Hopper se aposentou da Marinha. Ao longo de sua vida, recebeu mais de 40 títulos honorários e inúmeros prêmios, destacando-se a Medalha Nacional de Tecnologia, que lhe foi concedida em 1991.",
        "morte": "Em 1992, aos 86 anos, Grace Hopper foi enterrada com honras militares no Cemitério Nacional de Arlington. Ela deixou um legado notável, com trabalhos que influenciaram e beneficiaram muitos outros grandes nomes da tecnologia."
    }, 
    
    { 
      "id": "7", 
      "nome": "Ada Lovelace", 
      "area": ["Tecnologia"], 
      "grupo": ["Mulher"], 
      "resumo": "A primeira programadora da história, entre homens e mulheres, tinha o título de Condessa na sociedade inglesa de 1835.", 
      "imagem_perfil_url": "img/Ada Lovelace.png", 
      "bandeira_url": "img/reino unido.jpg", 
      "nascimento_morte": "1815 - 1852", 
      "origem": "Inglaterra, Reino Unido",
        "nascimento": "Nascida na aristocrática Inglaterra em 1815, filha do famoso poeta Lord Byron e de Annabella Milbanke, a educação de Augusta Ada Byron King foi de fato privilegiada, recebendo as influências artísticas do pai e o encorajamento da mãe para a matemática.",
        "educação": "Ada nunca frequentou uma universidade, sendo formada por tutores particulares, incluindo Mary Somerville, algumas fontes indicam que foi ela quem abriu a principal porta na vida acadêmica de Ada ao apresentá-la a Charles Babbage e ao matemático Augustus De Morgan.",
        "trabalhos": "Ada traduziu um artigo escrito originalmente em francês por Luigi F. Menabrea sobre a Máquina Analítica de Charles Babbage — uma grande máquina, precursora do computador, composta por engrenagens e alavancas, que funcionava a vapor e tinha como objetivo realizar cálculos programáveis por meio de cartões perfurados. No entanto, ela foi incentivada pelo próprio criador a adicionar suas notas de rodapé. A fama da programadora baseia-se nesse artigo de 66 páginas, com suas notas sendo de duas a três vezes maiores que o manuscrito que traduzia. Ainda em 1843, Ada foi capaz de escrever em detalhes como a máquina de Babbage, que nunca chegou a ser construída por questões de complexidade e financiamento, seria instruída a inserir valores sucessivos em uma fórmula para produzir a sequência de números de Bernoulli e esse foi o marco conhecido como o primeiro algoritmo desenvolvido na história. Ada Lovelace hoje é reconhecida pela sua visão atemporal, construída provavelmente através dos ensinamentos artísticos do falecido pai, de como a Máquina Analítica poderia no futuro fazer cálculos matemáticos, assim como a manipulação de símbolos e a composição de músicas.",
        "morte": "Além de programadora, Ada também trilhou um caminho político como Condessa Lovelace ao se casar em 1835 com William, 8º Barão King, que apenas três anos depois recebeu o título de Conde de Lovelace. Em 27 de novembro de 1852, aos 36 anos, Ada foi enterrada ao lado do pai, Lord Byron."
    },

    { 
      "id": "8", 
      "nome": "Hedy Lamarr", 
      "area": ["Tecnologia"], 
      "grupo": ["Mulher"], 
      "resumo": "A atriz de Hollywood que desenvolveu uma patente para guiar torpedos durante a Segunda Guerra Mundial.", 
      "imagem_perfil_url": "img/Hedy Lamarr.jpg", 
      "bandeira_url": "img/austria.jpg", 
      "nascimento_morte": "1914 - 1852", 
      "origem": "Viena, Áustria",
      "nascimento": "Originária de Viena, em 1914, Hedwig Kiesler, conhecida como Hedy Lamarr, era filha única de Emil e Gertrude Kiesler, e tinha ascendência judaica. Embora alguns textos sobre sua infância se contradigam sobre a riqueza de sua família, é fato que seu pai era banqueiro o que proveu a família boas condições de vida, além disso fontes destacam o quanto Emil era interessado por tecnologia.",
      "educação": "Hedy Lamarr teve uma formação pouco esperada para uma inventora. Durante a juventude, estudou várias artes, incluindo balé e principalmente, piano, que seria fundamental para sua descoberta. Contudo, sua maior paixão estava no cinema. Desde cedo, atuou em pequenos filmes, e aos dezessete anos, protagonizou o mais famoso e polêmico longa de sua filmografia, 'Êxtase'.",
      "trabalhos": "Durante sua carreira como atriz na Europa, Hedy também vivia um casamento turbulento com um milionário vendedor de armas. Fontes sugerem que, antes da ascensão nazista na Austria, Friedrich Mandl simpatizava com o grupo, recebendo membros notáveis em sua casa para negociações. Isso, somado ao casamento já conturbado, foi uma das razões que levaram Lamarr a empacotar uma mala cheia de suas joias, fugir para a França e, em seguida, para os Estados Unidos. Uma vez na América do Norte, ela voltou a cativar o mundo com seus personagens, tornando-se uma das atrizes mais bem pagas entre as décadas de 40 e 50. No entanto, a aptidão de Hedy não se restringia às artes. Ela compartilhava o interesse do pai por tecnologia e se dedicava a esse hobby entre um filme e outro. Estimulada pelo avanço da Segunda Guerra Mundial, a atriz-inventora, com o apoio de seu colega compositor George Antheil, criou um sistema de comunicação secreto para torpedos. A tecnologia se baseia na frequência de salto, uma ideia que ambos tiveram e que utilizava registros de pianos mecânicos.",
      "morte": "Apesar de sua patenteada invenção não ter sido utilizada pela Marinha dos EUA durante a guerra, ela se revelou um avanço crucial e precursor de tecnologias como Wi-Fi, GPS e Bluetooth. Por essa razão, Hedy Lamarr foi agraciada em 1997 com o EFF Pioneer Award e uma menção honrosa por sua contribuição pioneira na eletrônica. Hedy Lamarr entrou para o Hall da Fama de Inventores dos EUA em 2014, embora tenha falecido em 19 de janeiro de 2000, aos 85 anos."
    },

    { 
      "id": "9", 
      "nome": "Marie Curie", 
      "area": ["Ciência"], 
      "grupo": ["Mulher"], 
      "resumo": "Marie Curie, a primeira a conquistar dois prêmios Nobel em áreas diferentes.", 
      "imagem_perfil_url": "img/MarieCurie.jpg", 
      "bandeira_url": "img/polonia.webp", 
      "nascimento_morte": "1867- 1934", 
      "origem": "Varsóvia, Polônia",
      "nascimento": "Marie Curie é reconhecida até hoje como a mãe da radioatividade, mas sua história começou bem antes. Nascida em 7 de novembro de 1867 como Manya Sklodowska em Varsóvia, Polônia, uma cidade que na época estava sob o domínio da Rússia, ela era filha de um professor de matemática e física, sendo ele responsável por despertar seu interesse pela ciência. A infância da cientista, no entanto, foi um pouco conturbada com a instabilidade financeira, dada questões políticas da época e o falecimento da mãe quando Marie tinha apenas dez anos.",
      "educação": "Seus estudos e os de sua irmã começaram com o pai, até que elas passaram a frequentar uma universidade clandestina, devido a uma proibição sobre o acesso de mulheres à educação formal. Apenas aos 24 anos, ela ingressou na faculdade de Matemática e Física em Sorbonne, em Paris, onde adotou o nome 'Marie'. Em 1893, conquistou seu mestrado em física e, no ano seguinte, em matemática. Sua tese de doutorado foi defendida em 1903. Foi na faculdade que Marie conheceu e se casou com Pierre Curie. Juntos, eles administravam um pequeno laboratório que faria história. Após a morte de Pierre, Marie o sucedeu como professora na Sorbonne.",
      "trabalhos": "Em 1903, o casal, ao lado de Henri Becquerel, recebeu o Prêmio Nobel de Física pela pesquisa em radioatividade. Mas a história de Marie não parou por aí. Ela se tornou a primeira pessoa a conquistar um segundo Nobel em uma área diferente. Em 1911, foi novamente laureada, desta vez com o Prêmio Nobel de Química, pela descoberta e isolamento do Rádio e do Polônio — este último em homenagem a seu país de origem. Durante a Primeira Guerra Mundial, Marie atuou como voluntária para o governo francês. Ao lado de sua filha Irène Joliot-Curie, ela usou suas descobertas científicas para socorrer os soldados feridos, utilizando máquinas de raio-x para localizar fragmentos de projéteis e outras lesões. Ela ajudou a equipar cerca de 20 carros com equipamentos de raio-x e ministrou aulas, ensinando mulheres a manipulá-los. Inicialmente, o exército resistiu à ideia de mulheres operando os equipamentos, mas a necessidade da guerra fez com que aceitassem a ajuda.",
      "morte": "Infelizmente, Marie Curie faleceu em 1934, na França. Sua morte por leucemia foi atribuída à alta exposição à radiação ao longo de sua vida."
    },
    
    { 
      "id": "10", 
      "nome": "Rosalind Franklin", 
      "area": ["Ciência"], 
      "grupo": ["Mulher"], 
      "resumo": "A química por trás da 'Fotografia 51', que viu o segredo do DNA, mas foi forçada a assistir de longe enquanto seu trabalho era roubado", 
      "imagem_perfil_url": "img/Rosalind Franklin.jpg", 
      "bandeira_url": "img/reino unido.jpg", 
      "nascimento_morte": "1920 - 1958", 
      "origem": "Londres, Inglaterra",
      "nascimento": "Rosalind Franklin, nascida em 1920 em uma família judaica de Londres, se interessou desde pequena pela carreira científica. Filha de um professor do Working Men's College, há imprecisões se ele apoiou ou não a carreira da filha. Fato é que, em 1941, ela se formou em ciências naturais no Newnham College, na Universidade de Cambridge, e em 1945 obteve seu doutorado com uma tese sobre a porosidade do carvão.",
      "educação": "Em 1947, Rosalind iniciou uma pesquisa no laboratório parisiense 'Laboratoire Central des Services Chimiques de l'État', onde estudou a cristalografia de raios-x e continuou suas pesquisas sobre o carvão. Ao retornar para a Inglaterra, ela utilizou a mesma técnica para investigar a estrutura do DNA, tirando a famosa 'fotografia 51' em 1952, que mostrava a forma de hélice dupla.",
      "trabalhos": "No ano seguinte, os bioquímicos James Dewey Watson e Francis Crick apresentaram um artigo com o modelo da dupla hélice, usando como base a pesquisa de Franklin sem consultá-la, assim como as fotos que haviam roubado. No mesmo ano, Rosalind se mudou para o Birkbeck College, em Londres, e passou a estudar o vírus do RNA. Mais tarde, inspirada por isso, começou a pesquisar sobre a composição do vírus da poliomielite.",
      "morte": "Em 1962, Watson e Crick ganharam o Prêmio Nobel de Fisiologia ou Medicina pela famosa descoberta do DNA, que surgiu do trabalho roubado de Franklin. A atitude antiética dos homens já era questionada no momento das publicações, entretanto por uma minoria, e considerando a época que Rosalind Franklin vivia, isso colaborou para que ela não recebesse o devido reconhecimento. A cientista, entretanto, nunca chegou a ver isso, pois em 1958, aos 38 anos, faleceu de câncer."
    },  

    { 
      "id": "11", 
      "nome": "Rachel Carson", 
      "area": ["Ciência"], 
      "grupo": ["Mulher"], 
      "resumo": "Rachel Carson, a cientista cujas descobertas incentivaram uma investigação governamental.", 
      "imagem_perfil_url": "img/Rachel Carson.jpg", 
      "bandeira_url": "img/estados unidos.png", 
      "nascimento_morte": "1907  - 1964 ", 
      "origem": "Pensilvânia, Estados Unidos",
      "nascimento": "Rachel Carson nasceu em 27 de maio de 1907 em uma zona rural da Pensilvânia. Desde pequena ela tinha gosto pela natureza e, com o incentivo de sua mãe, Maria Carson, também tinha o costume de escrever bastante.",
      "educação": "Apesar de ter iniciado o curso de inglês na faculdade Pennsylvania College for Women, trocou-o por biologia, formando-se com grandes honras. Além disso, em 1932, finalizou um mestrado na área de zoologia na Johns Hopkins University, mas por razões financeiras, Carson não deu continuidade a seu doutorado.",
      "trabalhos": "Após a faculdade, começou a trabalhar no U.S. Bureau of Fisheries em 1936, onde permaneceu por 15 anos. Neste emprego, Carson escreveu folhetos para o público, unindo seus conhecimentos de biologia e a paixão pela escrita. Destacou-se tanto em seus trabalhos que pouco depois foi promovida a editora-chefe das publicações do U.S. Fish and Wildlife Service. Durante sua carreira, escreveu três grandes livros. O primeiro, Under the Sea Wind, de 1941; o segundo, The Sea Around Us, de 1951; e o principal, Silent Spring, de 1962, o título considerado o responsável por iniciar uma revolução ambientalista nos Estados Unidos. No último livro, Rachel Carson denunciou a forma como os pesticidas possuíam um impacto intenso no ecossistema. ",
      "morte": "Até hoje, Carson é vista como a mãe do ambientalismo, pois na época da publicação, causou rebuliço com as empresas químicas produtoras de pesticidas, que fizeram uma série de investidas para descredibilizá-la. O governo americano iniciou uma investigação particular para confirmar os fatos apontados por Carson e, em 1972, proibiu o uso do DDT, Dicloro-Difenil-Tricloroetano. Rachel Carson faleceu em 1964 em sua casa em Silver Spring, Maryland."
    },

    { 
      "id": "12", 
      "nome": "David Harold Blackwell", 
      "area": ["Matemática"], 
      "grupo": ["PPI"], 
      "resumo": "Ele foi o primeiro professor negro em Berkeley, o primeiro afro-americano na Academia Nacional de Ciências e a mente brilhante por trás de uma revolução na estátistica.", 
      "imagem_perfil_url": "img/David Blackwell.jpg", 
      "bandeira_url": "img/estados unidos.png", 
      "nascimento_morte": "1919 - 2010  ", 
      "origem": "Illinois, Estados Unidos",
      "nascimento": "David Harold Blackwell nasceu em 24 de abril de 1919, em Centralia, Illinois. David veio de uma família humilde e seu pai, Grover Blackwell, trabalhava para a ferrovia. Nessa época, nos Estados Unidos ainda repercutiam as leis de segregação racial, o que tornou a vida da família mais difícil e criou mais obstáculos para os estudos de Blackwell.",
      "educação": "O aspirante a matemático, entretanto, não seu abalou sendo habilidoso nos estudos desde cedo, terminou a escola aos 16 anos e, em 1935, ingressou na University of Illinois-Champaign, completando um mestrado em 1938 e seu doutorado em 1941 com a tese 'Properties of Markov Chains'. Durante seu pós-doutorado, foi bolsista do Rosenwald Fellowship no Institute for Advanced Study em Princeton em 1941. Entretanto, por causa das políticas raciais da época, não foi aceito como professor. ",
      "trabalhos": "Em 1942, trabalhou como instrutor na Southern University e na Clark College de 1943 a 1944. A partir de 1944, chefiou por três anos o Departamento de Matemática na Universidade de Howard. A contribuição mais conhecida de Blackwell é o 'Rao-Blackwellization', para melhorar estimativas, além de sua colaboração com Abe Girshick na Teoria dos Jogos e Decisões Estatísticas. Ao longo de sua carreira, pode-se destacar David por ser o primeiro professor negro na Universidade da Califórnia, Berkeley, o primeiro afro-americano eleito para a Academia Nacional de Ciências, em 1965, além de ter recebido o Prêmio de Teoria John von Neumann em 1979 e o Prêmio R. A. Fisher em 1986.",
      "morte": "David Blackwell morreu em 2010 em Berkeley, na Califórnia."
    },

    {
      "id": "13",
      "nome": "Elbert Frank Cox",
      "area": ["Matemática"],
      "grupo": ["PPI"],
      "resumo": "O primeiro Ph.D. negro em matemática que transformou a rejeição em legado, inspirando futuros mestres da ciência exata.",
      "imagem_perfil_url": "img/portrait.png",
      "bandeira_url": "img/estados unidos.png",
      "nascimento_morte": "1895 - 1969",
      "origem": "Indiana, Estados Unidos",
      "nascimento": "Elbert Frank Cox nasceu em 1895 em um bairro misto em Evansville, Indiana; apesar disso, todas as escolas que frequentou eram segregadas.",
      "educação": "Durante a graduação, estudou na Universidade de Indiana, especializando-se em matemática. Antes de dar mais passos em direção à sua graduação, Elbert serviu na Primeira Guerra Mundial, e só então, em 1925, concluiu seu doutorado na Universidade Cornell, sobre soluções polinomiais da equação de diferença, sendo a primeira pessoa negra a conquistar esse título.",
      "trabalhos": "Após se formar, Elbert foi professor de matemática na Alves Street School em Henderson, Kentucky. Em seguida, migrou para a Universidade Howard, onde trabalhou por quase quarenta anos e foi promovido a professor titular em 1947. Algumas fontes dizem que Elbert orientou mais teses de mestrado do que qualquer outro professor do corpo docente. Apesar de sua excelência, Cox encontrou resistência institucional, com registros de rejeições para estudos de pós-graduação na Alemanha e na Inglaterra.",
      "morte": "Apesar de sua excelência, Cox encontrou resistência institucional, com registros de rejeições para estudos de pós-graduação na Alemanha e na Inglaterra. Seu impacto foi eternizado postumamente: após sua aposentadoria e falecimento em 1969, a Universidade Howard criou o Elbert F. Cox Scholarship Fund. Este fundo tornou-se essencial, ajudando a pavimentar o caminho para que muitos outros jovens negros avançassem em programas de pós-graduação e doutorado em matemática."
    },

    {
      "id": "14",
      "nome": "Otis Frank Boykin",
      "area": ["Engenharia"],
      "grupo": ["PPI"],
      "resumo": "Um inventor e engenheiro afro-americano que patenteou 26 dispositivos eletrônicos, incluindo um resistor de alta precisão crucial para mísseis e a unidade de controle do primeiro marca-passo cardíaco artificial implantável.",
      "imagem_perfil_url": "img/portrait.png",
      "bandeira_url": "img/estados unidos.png",
      "nascimento_morte": "1920 - 1982",
      "origem": "Texas, Estados Unidos",
      "nascimento": "Clarence Skip Ellis, nascido em Chicago em 1943 e criado somente pela mãe, desenvolveu seu interesse por computação na adolescência. Essa paixão surgiu enquanto ele trabalhava como guarda noturno em uma empresa que possuía um computador cujo uso lhe era estritamente proibido. Para ocupar o tempo, Ellis dedicava-se à leitura dos manuais da máquina.",
      "educação": "Sem muitos detalhes sobre sua educação, algumas referências indicam que ele foi aconselhado, durante a faculdade, a não “forçar a barra”, quando buscava se aprofundar em algumas matérias como matemática. Clarence concluiu o curso de física e matemática na Beloit College, em Wisconsin. Em 1966, recebeu um mestrado em matemática na Universidade de Illinois e, em 1969, um doutorado em Ciência da Computação pela mesma instituição, tornando-se o primeiro afro-americano a conquistar esse título.",
      "trabalhos": "Durante sua carreira, passou por muitas empresas. Segundo a própria Universidade de Illinois, trabalhou no Bell Telephone Laboratories, IBM, Xerox, Microelectronics and Computer Technology Corporation, Los Alamos Scientific Laboratory e Argonne National Laboratory. Um dos marcos de sua carreira foi a invenção do Officetalk, o primeiro sistema de escritório a usar ícones e Ethernet para colaboração à distância, considerado uma tecnologia pioneira na área de transformação operacional e precursora de ferramentas como o Google Docs. Como professor, Ellis também passou por diferentes instituições como a Universidade de Stanford, Universidade do Texas, MIT (Instituto de Tecnologia de Massachusetts) e Instituto de Tecnologia Stevens. Em 1992, entrou para o corpo docente da Universidade do Colorado em Boulder e lá frequentemente ministrava aulas introdutórias de computação. É relatado por uma notícia da Universidade de Illinois que a escolha de Clarence se dava pela motivação de ensinar alunos de todas as origens, sem crenças limitantes como aquelas que seus professores tentaram lhe impor no começo.",
      "morte": "Clarence Skip Ellis faleceu em 2014, quando ainda residia em Boulder, Colorado."
    },

    {
    "id": "15",
    "nome": "Charles F. Bolden, Jr.",
    "area": ["Engenharia"],
    "grupo": ["PPI"],
    "resumo": "Um ex-Major General do Corpo de Fuzileiros Navais, astronauta da NASA que voou em quatro missões do ônibus espacial e o 12º Administrador da NASA, sendo o primeiro homem negro a ocupar este cargo.",
    "imagem_perfil_url": "img/Charles F. Bolden Jr.jpg",
    "bandeira_url": "img/estados unidos.png",
    "nascimento_morte": "1946 - Presente",
    "origem": "Carolina do Sul, Estados Unidos",
    "nascimento": "Charles F. Bolden, Jr. nasceu em 1946, na Carolina do Sul. Formou-se na escola em 1964 e, em 1968, concluiu seu bacharelado em Ciência Elétrica. Além disso, obteve um mestrado em Gestão de Sistemas na Universidade da Califórnia do Sul em 1977.",
    "educação": "Charles viveu em um período marcante dos Estados Unidos, com a conhecida corrida espacial se propagando. Sendo assim, em 1968, Bolden se tornou segundo-tenente no Corpo de Fuzileiros Navais e, apenas dois anos depois, virou aviador naval.",
    "trabalhos": "Entre 1972 e 1973, voou mais de 100 missões de combate e, posteriormente, passou a testar uma vasta variedade de aeronaves até 1980. O piloto voou em quatro missões do ônibus espacial da NASA, tendo registrado mais de 680 horas no espaço.",
    "morte": "Charles F. Bolden, Jr. foi o 12º administrador da NASA, focando na Estação Espacial Internacional. Ele também liderou o Sistema de Lançamento Espacial e a Cápsula Orion Crew. O astronauta segue vivo, sendo morador de Mount Vernon, na Virgínia, e sua história ainda é inspiração para muitos. Afinal, liderou a NASA por oito anos, sendo o primeiro homem negro a assumir esse cargo.."
    },   

    {
    "id": "16",
    "nome": "Dorothy J. Vaughan",
    "area": ["Tecnologia"],
    "grupo": ["PPI", "Mulheres"],
    "resumo": "Matemática e programadora afro-americana que trabalhou como 'computadora humana' na NASA, sendo a primeira supervisora negra da agência e pioneira na programação em FORTRAN.",
    "imagem_perfil_url": "img/portrait.png",
    "bandeira_url": "img/estados unidos.png",
    "nascimento_morte": "1910 - 2008",
    "origem": "Kansas City, Missouri, Estados Unidos",
    "nascimento": "Dorothy J. Vaughan nasceu em Kansas City, Missouri, em 1910. Aos 19 anos, ainda no contexto da segregação racial nos Estados Unidos, Dorothy formou-se na Wilberforce University em matemática, com bolsa integral.",
    "educação": "Seu primeiro trabalho foi como professora de matemática na Robert Russa Moton High School, uma escola para afro-americanos em Farmville, Virgínia. Entretanto, em 1943, durante a Segunda Guerra Mundial, juntou-se ao Laboratório Aeronáutico Memorial Langley, na antiga NASA, para um cargo de computadora na Ala Oeste. Em seu emprego, Vaughan era responsável por fazer inúmeros cálculos de alta precisão referentes às viagens espaciais.",
    "trabalhos": "Alguns anos depois, durante a Guerra Fria e com os esforços dos Estados Unidos para vencer a corrida espacial, foram trazidos à NASA os novos computadores da IBM. A matemática, de maneira autodidata, aprendeu a linguagem de programação FORTRAN, o que acarretou em levar o grupo de mulheres negras da Ala Oeste a se tornarem programadoras.",
    "morte": "Dorothy foi imprescindível para a ocupação de cargos na empresa por mulheres negras, sendo a primeira supervisora afro-americana da história da empresa. Ela apoiou e defendeu outras colegas de trabalho, buscando melhores condições de trabalho. Em 10 de novembro de 2008, em Hampton, na Virgínia, Dorothy J. Vaughan faleceu, deixando eternamente sua marca na história da NASA e da luta de mulheres negras."
    },  

    {
    "id": "17",
    "nome": "Clarence Skip Ellis",
    "area": ["Tecnologia"],
    "grupo": ["PPI"],
    "resumo": "Cientista da computação afro-americano, a primeira pessoa negra a receber um Ph.D. em Ciência da Computação nos EUA, e inventor do Officetalk, pioneiro em sistemas de colaboração remota.",
    "imagem_perfil_url": "img/portrait.png",
    "bandeira_url": "img/estados unidos.png",
    "nascimento_morte": "1943 - 2014",
    "origem": "Chicago, Illinois, Estados Unidos",
    "nascimento": "Clarence Skip Ellis nasceu em 1943, em Chicago, e foi criado por sua mãe. Seu interesse por computação começou na adolescência, quando trabalhava como guarda noturno e lia os manuais de um computador cujo uso era proibido.",
    "educação": "Graduou-se em física e matemática pela Beloit College, em Wisconsin. Em 1966, recebeu um mestrado em matemática na Universidade de Illinois e, em 1969, um doutorado em Ciência da Computação pela mesma instituição, tornando-se o primeiro afro-americano a conquistar esse título.",
    "trabalhos": "Trabalhou em diversas empresas e laboratórios de pesquisa de destaque, incluindo Bell Telephone Laboratories, IBM, Xerox, Microelectronics and Computer Technology Corporation, Los Alamos Scientific Laboratory e Argonne National Laboratory. Inventou o **Officetalk**, o primeiro sistema de escritório a utilizar ícones e Ethernet para colaboração à distância, precursor de ferramentas como o Google Docs. Foi professor em instituições como Universidade de Stanford, Universidade do Texas, MIT e, a partir de 1992, na Universidade do Colorado em Boulder, onde se dedicou a inspirar alunos de todas as origens.",
    "morte": "Clarence Skip Ellis faleceu em 2014, aos 71 anos, enquanto residia em Boulder, Colorado."
    },

    {
    "id": "18",
    "nome": "Evelyn Boyd Granville",
    "area": ["Tecnologia"],
    "grupo": ["PPI", "Mulheres na Ciência"],
    "resumo": "Matemática e programadora afro-americana, uma das primeiras mulheres negras a obter um Ph.D. em Matemática nos EUA, crucial para as análises de órbita nas missões espaciais Mercury e Apollo da NASA.",
    "imagem_perfil_url": "img/portrait.png",
    "bandeira_url": "img/estados unidos.png",
    "nascimento_morte": "1924 - 2023",
    "origem": "Washington, D.C., Estados Unidos",
    "nascimento": "Evelyn Boyd Granville nasceu em 1º de maio de 1924, na cidade de Washington, D.C., filha de William Boyd e Julia Boyd. Evelyn cresceu em uma comunidade afro-americana da cidade, em um contexto em que a segregação racial ainda era uma realidade nos Estados Unidos.",
    "educação": "Desde a infância, foi uma aluna exemplar. Formou-se no ensino médio na Dunbar High School e, em seguida, graduou-se na Smith College em 1945, antes de iniciar seu doutorado na Universidade Yale. Passou um ano de seu pós-doutorado na Universidade de Nova York, onde também era instrutora de matemática em meio período.",
    "trabalhos": "Oficialmente, seu primeiro trabalho, em 1950, foi como membro do corpo docente na Universidade Fisk. Dois anos depois, ela retornou para Washington, onde trabalhou para o National Bureau of Standards, onde ajudava com cálculos para desenvolver mísseis. Entretanto, em 1956, iniciou sua carreira na NASA, através da IBM, como programadora. Ela era responsável por projetar softwares que ajudam a analisar órbitas de satélites para missões do projeto Mercury. Encerrando seus projetos na NASA, ela foi contratada pela North American Aviation para trabalhar na missão Apollo. Apesar dos trabalhos pelos quais passou, sua paixão verdadeira estava na licenciatura. Por volta de 1967, passou a ensinar programação na Universidade Estadual da Califórnia, onde ajudou a escrever um livro didático e participou do Miller Mathematical Improvement Project, no qual ensinou aos alunos do ensino fundamental.",
    "morte": "No final da vida, e mesmo após sua aposentadoria, a paixão de Evelyn pela educação a guiou de volta às salas de aula, sendo professora da oitava série e, posteriormente, de graduação. A Dr. Evelyn Boyd Granville faleceu em 2023."
    },

{
    "id": "19",
    "nome": "Ernest Everett Just",
    "area": ["Ciência"],
    "grupo": ["PPI"],
    "resumo": "Cientista e biólogo afro-americano, pioneiro no estudo do papel da superfície celular no desenvolvimento de organismos e um dos fundadores da Omega Psi Phi Fraternity.",
    "imagem_perfil_url": "img/portrait.png",
    "bandeira_url": "img/estados unidos.png",
    "nascimento_morte": "1883 - 1941",
    "origem": "Charleston, Carolina do Sul, Estados Unidos",
    "nascimento": "Ernest Everett Just nasceu em 1883, filho de Charles e Mary Just, em Charleston, na Carolina do Sul. Entretanto, após o falecimento do pai, a família se mudou para James Island. O aspirante a cientista se formou com honras na Universidade Dartmouth College em 1907.",
    "educação": "Seu primeiro cargo na Universidade de Howard foi no Departamento de Inglês. Entretanto, ele foi movido para o Departamento de Biologia em 1910, para logo em seguida ser promovido a chefe do Departamento de Zoologia, área de seu doutorado. Ele trabalhou com Frank Lillie, diretor do MBL (Marine Biological Laboratory), onde Ernest permaneceu por décadas como pesquisador e se focou em estudar como ovos de ouriços do mar são fertilizados.",
    "trabalhos": "Seu trabalho é reconhecido pelas pesquisas sobre o papel da superfície celular no desenvolvimento de organismos. Em 1922, publicou 'Basic Methods for Experiments on Eggs of Marine Animals' e, em 1939, o famoso livro 'The Biology of the Cell Surface'. Ao longo da carreira, escreveu cerca de 50 artigos.",
    "morte": "Ernest enfrentou um preconceito considerável nos EUA e não recebeu posições de pesquisa ou docência que fossem compatíveis com seu talento, o que o levou a buscar oportunidades na Europa, sendo o primeiro americano a ser convidado para conduzir pesquisas no Instituto Kaiser Wilhelm, em Berlim, na Alemanha. Entretanto, com o escalonamento da 2ª Guerra Mundial, foi obrigado a retornar para a América do Norte, pouco antes de sua morte. Ernest Everett Just faleceu em 1941 em Washington, D.C., por câncer no pâncreas."
  }

  ];


