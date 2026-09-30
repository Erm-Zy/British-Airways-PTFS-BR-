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
 * DADOS DA FROTA (12 AERONAVES)
 */
const fleetData = {
    pequeno: [
        {
            name: "Embraer 190",
            badge: "Pequeno Porte · A1",
            badgeClass: "badge-small",
            placeholder: "[ PLACEHOLDER — EMBRAER 190 ]",
            description: "Jato regional ágil e eficiente, ideal para conectar hubs regionais no PTFS.",
            details: "Excelente para etapas curtas, fácil dirigibilidade em táxi e aproximações de precisão."
        },
        {
            name: "ATR 72",
            badge: "Pequeno Porte · A1",
            badgeClass: "badge-small",
            placeholder: "[ PLACEHOLDER — ATR 72 ]",
            description: "Turboélice versátil para rotas curtas e operação suave em pistas reduzidas.",
            details: "Aeronave turboélice referência regional, perfeita para instrução e etapas curtas no PTFS."
        },
        {
            name: "CRJ-700",
            badge: "Pequeno Porte · A1",
            badgeClass: "badge-small",
            placeholder: "[ PLACEHOLDER — CRJ-700 ]",
            description: "Jato executivo e regional com alta velocidade de cruzeiro.",
            details: "Combina excelente desempenho de subida com ótimo perfil de aproximação."
        }
    ],
    medio: [
        {
            name: "Airbus A320",
            badge: "Médio Porte · B2",
            badgeClass: "badge-medium",
            placeholder: "[ PLACEHOLDER — AIRBUS A320 ]",
            description: "Aeronave de médio porte para voos domésticos e internacionais no PTFS.",
            details: "Modelo clássico de alta manuseabilidade e estabilidade em cruzeiro."
        },
        {
            name: "Boeing 737",
            badge: "Médio Porte · B2",
            badgeClass: "badge-medium",
            placeholder: "[ PLACEHOLDER — BOEING 737 ]",
            description: "Bimotor consagrado para rotas continentais e excelente resposta no pouso.",
            details: "Espinha dorsal da aviação comercial virtual entre os principais aeroportos do PTFS."
        },
        {
            name: "Boeing 757",
            badge: "Médio Porte · B2",
            badgeClass: "badge-medium",
            placeholder: "[ PLACEHOLDER — BOEING 757 ]",
            description: "Desempenho elevado de subida e alcance em rotas de média e longa distância.",
            details: "Reconhecido por sua potência e estabilidade em altitude para voos em evento."
        }
    ],
    grande: [
        {
            name: "Airbus A350",
            badge: "Grande Porte · C3",
            badgeClass: "badge-large",
            placeholder: "[ PLACEHOLDER — AIRBUS A350 ]",
            description: "Widebody moderno para voos de longo curso com navegação precisa.",
            details: "Destaque em tecnologia e eficiência aerodinâmica em rotas de longa distância."
        },
        {
            name: "Boeing 747",
            badge: "Grande Porte · C3",
            badgeClass: "badge-large",
            placeholder: "[ PLACEHOLDER — BOEING 747 ]",
            description: "O clássico 'Jumbo Jet' de dois andares para voos solenes do grupo.",
            details: "Ícone da aviação mundial, oferecendo presença marcante e pilotagem envolvente."
        },
        {
            name: "Airbus A380",
            badge: "Grande Porte · C3",
            badgeClass: "badge-large",
            placeholder: "[ PLACEHOLDER — AIRBUS A380 ]",
            description: "A maior aeronave comercial de passageiros para voos festivos e grandes turmas.",
            details: "O gigante dos céus exige planejamento na aproximação e pátio dedicado."
        },
        {
            name: "Boeing 767",
            badge: "Grande Porte · C3",
            badgeClass: "badge-large",
            placeholder: "[ PLACEHOLDER — BOEING 767 ]",
            description: "Aeronave de duplo corredor consagrada para transições entre rotas longas.",
            details: "Combinação equilibrada de porte e dirigibilidade para voos intercontinentais."
        },
        {
            name: "Boeing 777",
            badge: "Grande Porte · C3",
            badgeClass: "badge-large",
            placeholder: "[ PLACEHOLDER — BOEING 777 ]",
            description: "Bimotor de longo alcance potente e estável para voos internacionais.",
            details: "Aeronave símbolo de viagens virtuais com excelente sustentação e resposta."
        },
        {
            name: "Boeing 787",
            badge: "Grande Porte · C3",
            badgeClass: "badge-large",
            placeholder: "[ PLACEHOLDER — BOEING 787 ]",
            description: "Jato comercial ultra moderno e eficiente para longas jornadas.",
            details: "Asas de alta flexibilidade e sistemas avançados para voos noturnos no PTFS."
        }
    ]
};

/**
 * Renderiza Cards de Materiais
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
                    ? `<a href="pages/fleet.html" class="btn-secondary btn-nav-anim">${material.buttonText}</a>`
                    : `<button type="button" class="btn-secondary btn-toast">${material.buttonText}</button>`
                }
            </div>
        `;
        grid.appendChild(cardElement);
    });
}

/**
 * Renderiza Cards da Frota
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
                        <button type="button" class="btn-secondary btn-fleet-details">Ver detalhes</button>
                    </div>
                </div>
            `;

            card.addEventListener('click', () => openFleetModal(plane));
            grid.appendChild(card);
        });
    });
}

/**
 * Modal de Detalhes da Aeronave
 */
function openFleetModal(plane) {
    const modal = document.getElementById('fleet-modal');
    if (!modal) return;

    const modalImg = document.getElementById('modal-img-placeholder');
    if (modalImg) modalImg.innerText = plane.placeholder;

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
        if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });
}

/**
 * Animação de Carregamento nos Botões ao Clicar & Transição de Página
 */
function setupButtonLoadingAnimations() {
    document.body.classList.add('page-loaded');

    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href]');
        if (!link) return;

        const href = link.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('javascript:') || link.target === '_blank') {
            return;
        }

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            document.body.classList.add('page-exit');
            return;
        }

        e.preventDefault();

        let progressBar = link.querySelector('.btn-progress-bar');
        if (!progressBar && (link.classList.contains('btn-primary') || link.classList.contains('btn-secondary') || link.classList.contains('btn-back') || link.classList.contains('btn-nav-anim'))) {
            progressBar = document.createElement('span');
            progressBar.className = 'btn-progress-bar';
            link.appendChild(progressBar);
        }

        link.classList.add('btn-loading');

        setTimeout(() => {
            document.body.classList.add('page-exit');
        }, 180);

        setTimeout(() => {
            window.location.href = href;
        }, 340);
    });
}

/**
 * Utilitários do Layout
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
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

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
                setTimeout(() => toast.remove(), 280);
            }, 3000);
        }
    });
}

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

function setupSmoothNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

/**
 * Inicialização
 */
document.addEventListener('DOMContentLoaded', () => {
    renderMaterialsCards();
    renderFleetCards();
    setupModalClose();
    setupButtonLoadingAnimations();
    setupBackToTop();
    setupMobileMenu();
    setupSmartNavbar();
    setupScrollspy();
    setupToastSystem();
    setupScrollAnimations();
    setupSmoothNavigation();
});
