/**
 * DADOS DOS MATERIAIS
 * Sem uniformes/vestimentas. Organizado em 5 categorias essenciais.
 */
const materialsData = [
    {
        title: "Identidade Visual & Logos",
        description: "Versões em alta resolução das marcas e escudos da companhia para transmissões, edições e conteúdos gráficos.",
        buttonText: "Acessar Logos",
        link: "#inicio"
    },
    {
        title: "Rotas & Cartas de Voo",
        description: "Rotas padronizadas interligando os aeroportos do PTFS, acompanhadas de dados de altitude e plano de navegação.",
        buttonText: "Ver Rotas",
        link: "#inicio"
    },
    {
        title: "Checklists Operacionais (SOP)",
        description: "Procedimentos passo a passo para preparação da cabine, acionamento, táxi, cruzeiro e pouso com segurança.",
        buttonText: "Abrir Checklists",
        link: "#inicio"
    },
    {
        title: "Conteúdo & Mídia Social",
        description: "Banners, artes promocionais e templates oficiais disponibilizados para divulgação de voos e recrutamento.",
        buttonText: "Ver Banners",
        link: "#inicio"
    },
    {
        title: "Frota de Aeronaves",
        description: "Ficha técnica e especificações dos modelos operados pela companhia no jogo, organizados por nível de experiência.",
        buttonText: "Ver Frota",
        link: "#inicio"
    }
];

/**
 * Renderiza os cards de materiais dinamicamente no HTML
 */
function renderMaterialsCards() {
    const grid = document.getElementById('materials-grid');
    if (!grid) return;

    grid.innerHTML = '';

    materialsData.forEach(material => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card reveal';
        cardElement.innerHTML = `
            <div class="placeholder-card-img">[ PLACEHOLDER — ${material.title.toUpperCase()} ]</div>
            <div class="card-body">
                <h3>${material.title}</h3>
                <p>${material.description}</p>
                <a href="${material.link}" class="btn-secondary">${material.buttonText}</a>
            </div>
        `;
        grid.appendChild(cardElement);
    });
}

/**
 * Configura o menu mobile e suas interações
 */
function setupMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!menuToggle || !navMenu) return;

    // Alternar abertura do menu
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fechar ao clicar em qualquer link da navegação
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

/**
 * Animações ao rolar a página (Intersection Observer for Scroll Reveal)
 */
function setupScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Anima apenas uma vez
            }
        });
    }, observerOptions);

    // Seleciona todos os elementos com a classe .reveal
    document.querySelectorAll('.reveal').forEach(element => {
        observer.observe(element);
    });
}

/**
 * Navegação suave para todos os botões e links âncora
 */
function setupSmoothNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Inicialização completa dos scripts após o carregamento do DOM
 */
document.addEventListener('DOMContentLoaded', () => {
    renderMaterialsCards();
    setupMobileMenu();
    setupScrollAnimations();
    setupSmoothNavigation();
});
