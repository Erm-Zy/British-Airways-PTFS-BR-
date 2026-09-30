/**
 * DADOS DOS MATERIAIS
 * Esta estrutura facilita a adição de novos cards no futuro.
 * Basta adicionar um novo objeto na lista.
 */
const materialsData = [
    {
        title: "Identidade Visual e Logos",
        description: "Acesse as logos oficiais da companhia em alta resolução (PNG, SVG) para uso em edições e vídeos.",
        buttonText: "Acessar Logos",
        link: "#"
    },
    {
        title: "Guia de Uniformes",
        description: "Códigos e IDs de roupas oficiais do Roblox para First Officers, Captains e Staff.",
        buttonText: "Ver Códigos",
        link: "#"
    },
    {
        title: "Rotas e Mapas Oficiais",
        description: "Lista de voos padrão da empresa interligando os aeroportos do PTFS.",
        buttonText: "Ver Rotas",
        link: "#"
    },
    {
        title: "Checklists (SOP)",
        description: "Acesso rápido aos passos de acionamento, taxi e decolagem para cada aeronave da frota.",
        buttonText: "Abrir Checklists",
        link: "#"
    },
    {
        title: "Banners e Redes Sociais",
        description: "Materiais gráficos pré-prontos para postagens oficiais e templates para recrutamento.",
        buttonText: "Ver Banners",
        link: "#"
    },
    {
        title: "Frota de Aeronaves",
        description: "Requisitos de Rank e informações detalhadas sobre as aeronaves operadas pela VA no jogo.",
        buttonText: "Ver Frota",
        link: "#"
    }
];

/**
 * FUNÇÃO: Renderizar Cards Dinamicamente
 * Injeta os dados da lista acima diretamente no HTML.
 */
function renderMaterialsCards() {
    const grid = document.getElementById('materials-grid');
    
    // Caso o elemento não seja encontrado na página, interrompe
    if (!grid) return; 

    materialsData.forEach(material => {
        // Criando a estrutura HTML do Card
        const cardHTML = `
            <div class="card">
                <div class="placeholder-card-img">[ PLACEHOLDER — MATERIAL: ${material.title.toUpperCase()} ]</div>
                <div class="card-body">
                    <h3>${material.title}</h3>
                    <p>${material.description}</p>
                    <a href="${material.link}" class="btn-secondary">${material.buttonText}</a>
                </div>
            </div>
        `;
        
        // Inserindo na grid
        grid.innerHTML += cardHTML;
    });
}

/**
 * FUNÇÃO: Menu Mobile (Hambúrguer)
 * Alterna a visibilidade do menu de navegação em telas pequenas.
 */
function setupMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Fecha o menu ao clicar em algum link
        const links = navMenu.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
}

/**
 * INICIALIZAÇÃO
 * Roda as funções assim que o conteúdo da página carrega.
 */
document.addEventListener('DOMContentLoaded', () => {
    renderMaterialsCards();
    setupMobileMenu();
});
