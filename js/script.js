/**
 * DADOS DOS MATERIAIS
 * 5 Categorias oficiais sem a área de vestimentas/uniformes.
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
        description: "Ficha técnica e especificações dos modelos operados pela companhia no jogo, organizados por nível de experiência.",
        buttonText: "Ver Frota"
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
                <button class="btn-secondary btn-toast">${material.buttonText}</button>
            </div>
        `;
        grid.appendChild(cardElement);
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

    window.addEventListener('scroll', () => {
        let currentSection = '';
        const scrollPosition = window.scrollY + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
}

/**
 * Sistema de Notificação Toast (Aviso elegante ao clicar em botões de placeholders)
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
    setupMobileMenu();
    setupSmartNavbar();
    setupScrollspy();
    setupToastSystem();
    setupScrollAnimations();
    setupSmoothNavigation();
});
