/**
 * DADOS DOS MATERIAIS
 */
const materialsData = [
    {
        title: "Identidade Visual & Logos",
        description: "Versões em alta resolução das marcas e escudos da companhia para transmissões, edições e conteúdos gráficos.",
        buttonText: "Acessar Logos"
    },
    {
        title: "Rotas & Cartas de Voo",
        description: "Rotas padronizadas interligando os aeroportos do PTFS, acompanhadas de dados de altitude e plano de navegação.",
        buttonText: "Ver Rotas"
    },
    {
        title: "Checklists Operacionais (SOP)",
        description: "Procedimentos passo a passo para preparação da cabine, acionamento, táxi, cruzeiro e pouso com segurança.",
        buttonText: "Abrir Checklists"
    },
    {
        title: "Conteúdo & Mídia Social",
        description: "Banners, artes promocionais e templates oficiais disponibilizados para divulgação de voos e recrutamento.",
        buttonText: "Ver Banners"
    },
    {
        title: "Frota de Aeronaves",
        description: "Ficha técnica e especificações dos modelos operados pela companhia no jogo, organizados por categoria de porte.",
        buttonText: "Ver Frota"
    }
];

/**
 * DADOS DA FROTA (12 AERONAVES DIVIDIDAS EM 3 CATEGORIAS)
 */
const fleetData = {
    pequeno: [
        {
            name: "Embraer 190",
            badge: "Pequeno Porte · A1",
            badgeClass: "badge-small",
            placeholder: "[ PLACEHOLDER — EMBRAER 190 ]",
            description: "Jato regional ágil e eficiente, ideal para conectar hubs regionais com rápida resposta de comandos no PTFS.",
            details: "Excelente para etapas curtas, fácil dirigibilidade em táxi e aproximações de precisão em pistas regionais do mapa."
        },
        {
            name: "ATR 72",
            badge: "Pequeno Porte · A1",
            badgeClass: "badge-small",
            placeholder: "[ PLACEHOLDER — ATR 72 ]",
            description: "Turboélice versátil para rotas curtas, oferecendo pousos suaves e excelente operação em pistas reduzidas.",
            details: "Aeronave turboélice referência em operacionalidade regional, perfeita para voos de instrução e etapas curtas no PTFS."
        },
        {
            name: "CRJ-700",
            badge: "Pequeno Porte · A1",
            badgeClass: "badge-small",
            placeholder: "[ PLACEHOLDER — CRJ-700 ]",
            description: "Jato executivo e regional com voo estável e alta velocidade de cruzeiro para rotas de menor densidade.",
            details: "Combina excelente desempenho de subida com ótimo perfil de aproximação para operações regionais rápidas."
        }
    ],
    medio: [
        {
            name: "Airbus A320",
            badge: "Médio Porte · B2",
            badgeClass: "badge-medium",
            placeholder: "[ PLACEHOLDER — AIRBUS A320 ]",
            description: "Aeronave de médio porte amplamente utilizada em voos domésticos e internacionais de média distância no PTFS.",
            details: "Modelo clássico de alta manuseabilidade, estabilidade em cruzeiro e voo intuitivo para todos os pilotos."
        },
        {
            name: "Boeing 737",
            badge: "Médio Porte · B2",
            badgeClass: "badge-medium",
            placeholder: "[ PLACEHOLDER — BOEING 737 ]",
            description: "Bimotor consagrado para rotas continentais, combinando versatilidade e excelente resposta nos procedimentos de pouso.",
            details: "Espinha dorsal da aviação comercial virtual, ideal para voos regulares entre os principais aeroportos do PTFS."
        },
        {
            name: "Boeing 757",
            badge: "Médio Porte · B2",
            badgeClass: "badge-medium",
            placeholder: "[ PLACEHOLDER — BOEING 757 ]",
            description: "Aeronave com alto desempenho de subida e grande alcance para rotas de média e longa distância de densidade média.",
            details: "Reconhecido por sua potência e estabilidade em altitude, sendo uma excelente opção para voos em evento e comboios."
        }
    ],
    grande: [
        {
            name: "Airbus A350",
            badge: "Grande Porte · C3",
            badgeClass: "badge-large",
            placeholder: "[ PLACEHOLDER — AIRBUS A350 ]",
            description: "Widebody moderno de última geração para voos de longo curso com navegação precisa e extrema estabilidade.",
            details: "Destaque em tecnologia de cabine e eficiência aerodinâmica em rotas de longa distância nas operações virtuais."
        },
        {
            name: "Boeing 747",
            badge: "Grande Porte · C3",
            badgeClass: "badge-large",
            placeholder: "[ PLACEHOLDER — BOEING 747 ]",
            description: "O clássico 'Jumbo Jet' de dois andares, utilizado em voos solenes e de grande capacidade de passageiros.",
            details: "Ícone da aviação mundial, oferecendo uma presença marcante na pista e pilotagem desafiadora e compensadora."
        },
        {
            name: "Airbus A380",
            badge: "Grande Porte · C3",
            badgeClass: "badge-large",
            placeholder: "[ PLACEHOLDER — AIRBUS A380 ]",
            description: "A maior aeronave comercial de passageiros do mundo, ideal para voos festivos e operações de grande público.",
            details: "O gigante dos céus exige planejamento na aproximação e pátio dedicado, garantindo visual espetacular no jogo."
        },
        {
            name: "Boeing 767",
            badge: "Grande Porte · C3",
            badgeClass: "badge-large",
            placeholder: "[ PLACEHOLDER — BOEING 767 ]",
            description: "Aeronave de duplo corredor consagrada, excelente para transições entre rotas médias e voos intercontinentais.",
            details: "Combinação equilibrada de porte e dirigibilidade, perfeita para linhas de longa distância do grupo."
        },
        {
            name: "Boeing 777",
            badge: "Grande Porte · C3",
            badgeClass: "badge-large",
            placeholder: "[ PLACEHOLDER — BOEING 777 ]",
            description: "Bimotor de longo alcance potente e estável, altamente requisitado em rotas internacionais da companhia.",
            details: "Aeronave símbolo de viagens intercontinentais virtuais, com excelente sustentação e resposta equilibrada."
        },
        {
            name: "Boeing 787",
            badge: "Grande Porte · C3",
            badgeClass: "badge-large",
            placeholder: "[ PLACEHOLDER — BOEING 787 ]",
            description: "Jato comercial ultra moderno e eficiente, perfeito para voos diretos e longas jornadas com suavidade.",
            details: "Equipado com asas de alta flexibilidade e sistemas avançados para voos noturnos e transoceânicos no PTFS."
        }
    ]
};

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
        const isFleetLink = material.title === "Frota de Aeronaves";
        
        cardElement.innerHTML = `
            <div class="placeholder-card-img">[ PLACEHOLDER — ${material.title.toUpperCase()} ]</div>
            <div class="card-body">
                <h3>${material.title}</h3>
                <p>${material.description}</p>
                ${isFleetLink 
                    ? `<a href="pages/fleet.html" class="btn-secondary">${material.buttonText} &rarr;</a>`
                    : `<button class="btn-secondary btn-toast">${material.buttonText}</button>`
                }
            </div>
        `;
        grid.appendChild(cardElement);
    });
}

/**
 * Renderiza os cards da frota divididos por categoria
 */
function renderFleetCards() {
    const categories = ['pequeno', 'medio', 'grande'];

    categories.forEach(catKey => {
        const grid = document.getElementById(`fleet-${catKey}`);
        if (!grid) return;

        grid.innerHTML = '';

        fleetData[catKey].forEach(plane => {
            const card = document.createElement('div');
            card.className = 'card fleet-card reveal';

            card.innerHTML = `
                <div class="placeholder-card-img">${plane.placeholder}</div>
                <div class="card-body">
                    <div class="card-top">
                        <span class="category-badge ${plane.badgeClass}">${plane.badge}</span>
                    </div>
                    <h3>${plane.name}</h3>
                    <p>${plane.description}</p>
                    <div class="fleet-card-footer">
                        <span class="fleet-card-action">Ver detalhes &rarr;</span>
                    </div>
                </div>
            `;

            card.addEventListener('click', () => openFleetModal(plane));
            grid.appendChild(card);
        });
    });
}

/**
 * Controla a abertura do Modal de Detalhes da Aeronave
 */
function openFleetModal(plane) {
    const modal = document.getElementById('fleet-modal');
    if (!modal) return;

    const modalImgPlaceholder = document.getElementById('modal-img-placeholder');
    if (modalImgPlaceholder) modalImgPlaceholder.innerText = plane.placeholder;

    const badgeElem = document.getElementById('modal-badge');
    if (badgeElem) {
        badgeElem.innerText = plane.badge;
        badgeElem.className = `category-badge ${plane.badgeClass}`;
    }

    const titleElem = document.getElementById('modal-title');
    if (titleElem) titleElem.innerText = plane.name;

    const descElem = document.getElementById('modal-desc');
    if (descElem) descElem.innerText = plane.description;

    const detailsElem = document.getElementById('modal-details');
    if (detailsElem) detailsElem.innerText = plane.details;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

/**
 * Fechamento do Modal
 */
function setupModalClose() {
    const modal = document.getElementById('fleet-modal');
    const closeBtn = document.getElementById('modal-close');
    const btnModalClose = document.getElementById('modal-btn-close');

    if (!modal) return;

    const closeModal = () => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (btnModalClose) btnModalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

/**
 * Controla o botão Voltar ao Topo
 */
function setupBackToTop() {
    const backBtn = document.getElementById('back-to-top');
    if (!backBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backBtn.classList.add('visible');
        } else {
            backBtn.classList.remove('visible');
        }
    });

    backBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Configura o Menu Mobile (Abertura/Fechamento)
 */
function setupMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

/**
 * Cabeçalho Inteligente (Adiciona sombra ao rolar a página)
 */
function setupSmartNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/**
 * Scrollspy Ativo (Grifa a seção atual no menu durante a rolagem)
 */
function setupScrollspy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (sections.length === 0 || navLinks.length === 0) return;

    window.addEventListener('scroll', () => {
        let currentSection = '';
        const scrollPosition = window.scrollY + 140;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                link.classList.remove('active');
                if (href === `#${currentSection}`) {
                    link.classList.add('active');
                }
            }
        });
    });
}

/**
 * Sistema de Notificação Toast
 */
function setupToastSystem() {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    document.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('btn-toast')) {
            e.preventDefault();
            
            const toast = document.createElement('div');
            toast.className = 'toast';
            toast.innerText = 'Material em breve disponível na versão final.';
            
            container.appendChild(toast);

            setTimeout(() => toast.classList.add('show'), 10);

            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }
    });
}

/**
 * Animações ao Rolar a Página (IntersectionObserver)
 */
function setupScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.12
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(element => {
        observer.observe(element);
    });
}

/**
 * Navegação Suave (Smooth Scroll) para links internos
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
 * Inicialização completa de todos os sistemas JS
 */
document.addEventListener('DOMContentLoaded', () => {
    renderMaterialsCards();
    renderFleetCards();
    setupModalClose();
    setupBackToTop();
    setupMobileMenu();
    setupSmartNavbar();
    setupScrollspy();
    setupToastSystem();
    setupScrollAnimations();
    setupSmoothNavigation();
});
