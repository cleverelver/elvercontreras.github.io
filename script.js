// ===== 🚀 SISTEMA INTERACTIVO DEL HEAD =====

// 🎯 1. TÍTULO DINÁMICO ROTATIVO
const dynamicTitles = [
    '🚀 Elver Contreras - Full Stack Developer',
    '⚛️ Elver Contreras - React Specialist', 
    '🐍 Elver Contreras - Python Developer',
    '💻 Elver Contreras - JavaScript Expert',
    '🏢 Elver Contreras - Odoo ERP Developer',
    '🎯 Elver Contreras - Ingeniero de Software'
];

let currentTitleIndex = 0;
const originalTitle = 'Elver Contreras - Ingeniero de Software | Desarrollador Web Full-Stack';

function rotateTitles() {
    const titleElement = document.getElementById('dynamic-title');
    if (titleElement) {
        titleElement.textContent = dynamicTitles[currentTitleIndex];
        document.title = dynamicTitles[currentTitleIndex];
        currentTitleIndex = (currentTitleIndex + 1) % dynamicTitles.length;
    }
}

// ⏰ 2. META DESCRIPTION DINÁMICO POR HORA
function updateDynamicDescription() {
    const hour = new Date().getHours();
    const descElement = document.getElementById('dynamic-description');
    let dynamicDesc;
    
    if (hour >= 6 && hour < 12) {
        dynamicDesc = "🌅 ¡Buenos días! Portafolio de Elver Contreras - Desarrollador apasionado creando soluciones desde temprano. React, Python, JavaScript y más!";
    } else if (hour >= 12 && hour < 18) {
        dynamicDesc = "☀️ ¡Buenas tardes! Explora el portafolio de Elver Contreras - Innovando con código todo el día. Especialista en desarrollo full-stack.";
    } else if (hour >= 18 && hour < 22) {
        dynamicDesc = "🌇 ¡Buenas tardes! Descubre el trabajo de Elver Contreras - Creando soluciones tecnológicas increíbles. React, Python, Odoo ERP.";
    } else {
        dynamicDesc = "🌙 ¡Buenas noches! Elver Contreras - Desarrollador que programa hasta altas horas. Portafolio con proyectos increíbles esperándote.";
    }
    
    if (descElement) {
        descElement.setAttribute('content', dynamicDesc);
    }
}

// 🔄 3. FAVICON DINÁMICO SEGÚN ESTADO DE PESTAÑA
let isTabActive = true;
const originalFaviconHref = '/favicon.ico';

function updateFavicon(isActive) {
    const faviconElement = document.getElementById('dynamic-favicon');
    if (faviconElement) {
        if (isActive) {
            faviconElement.href = originalFaviconHref;
            document.title = dynamicTitles[currentTitleIndex] || originalTitle;
        } else {
            // Crear favicon de notificación con data URI (emoji)
            const canvas = document.createElement('canvas');
            canvas.width = 32;
            canvas.height = 32;
            const ctx = canvas.getContext('2d');
            
            // Fondo naranja para llamar la atención
            ctx.fillStyle = '#ff6b35';
            ctx.fillRect(0, 0, 32, 32);
            
            // Texto de notificación
            ctx.fillStyle = 'white';
            ctx.font = 'bold 20px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('!', 16, 22);
            
            faviconElement.href = canvas.toDataURL('image/png');
            document.title = '🔔 ¡Vuelve! - Elver Contreras Portfolio';
        }
    }
}

// 🎨 Easter egg: Cambiar título al hacer hover fuera de la ventana (para escritorio)
function initDesktopHoverEffects() {
    if (!window.matchMedia('(max-width: 768px)').matches) {
        let hoverTimeout;
        
        window.addEventListener('mouseleave', function() {
            hoverTimeout = setTimeout(() => {
                if (document.title.includes('Elver Contreras')) {
                    document.title = '👋 ¡Eh, vuelve! - ' + document.title;
                }
            }, 3000);
        });
        
        window.addEventListener('mouseenter', function() {
            clearTimeout(hoverTimeout);
            if (document.title.includes('👋 ¡Eh, vuelve!')) {
                document.title = document.title.replace('👋 ¡Eh, vuelve! - ', '');
            }
        });
    }
}

// 🎬 INICIALIZAR SISTEMA INTERACTIVO DEL HEAD
function initInteractiveHead() {
    console.log('🚀 Sistema Interactivo del HEAD activado!');
    
    // Actualizar description según la hora
    updateDynamicDescription();
    
    // Iniciar rotación de títulos cada 4 segundos
    const titleInterval = setInterval(rotateTitles, 4000);
    
    // Detector de cambio de pestaña
    document.addEventListener('visibilitychange', function() {
        isTabActive = !document.hidden;
        updateFavicon(isTabActive);
        
        if (isTabActive) {
            // Reanudar rotación de títulos
            clearInterval(window.titleInterval);
            window.titleInterval = setInterval(rotateTitles, 4000);
        } else {
            // Pausar rotación cuando no está activa
            clearInterval(window.titleInterval);
        }
    });
    
    // Guardar referencia del intervalo
    window.titleInterval = titleInterval;
    
    // Inicializar efectos de hover para desktop
    initDesktopHoverEffects();
    
    // 🎉 Mensaje de bienvenida en consola
    console.log('%c🎯 ¡Hola Developer! 👋', 'color: #22d3ee; font-size: 16px; font-weight: bold;');
    console.log('%c🚀 Portafolio interactivo de Elver Contreras', 'color: #10b981; font-size: 14px;');
    console.log('%c⚡ Tecnologías: React | Python | JavaScript | Odoo', 'color: #8b5cf6; font-size: 12px;');
    console.log('%c📧 Contacto: elver.contreras@example.com', 'color: #f59e0b; font-size: 12px;');
    
    // 🔄 Actualizar description cada hora
    setInterval(updateDynamicDescription, 3600000); // 1 hora = 3600000ms
}

// ===== 🔗 NAVEGACIÓN SIDEBAR =====

// Sidebar siempre estático - sin toggle
// Selección de links
const navLinks = document.querySelectorAll(".sidebar nav a");

// Cargar estado activo desde localStorage
const activeLink = localStorage.getItem("activeLink");
if (activeLink) {
    const savedLink = document.querySelector(`.sidebar nav a[href="${activeLink}"]`);
    if (savedLink) savedLink.classList.add("active");
}

// Cuando hago click en un link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
    // Quitar activo de todos
    navLinks.forEach(l => l.classList.remove("active"));
    // Marcar el que se clickeó
    link.classList.add("active");

    // Guardar en localStorage
    localStorage.setItem("activeLink", link.getAttribute("href"));
    });
});// Obtener todas las secciones y los links del menú
const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll("nav a");

// Función para mostrar sección
function showSection(target) {
    sections.forEach(sec => sec.classList.remove("active"));
    document.querySelector(target).classList.add("active");
}

// Evento click en cada link
menuLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = link.getAttribute("href");
        showSection(target);
    });
});

// Mostrar "home" al cargar
showSection("#home");

// ===== NUEVAS FUNCIONALIDADES PARA HOME =====

// Efecto de escritura para roles cambiantes
const roles = [
    "Estudiante de Ingeniería",
    "Desarrollador Web", 
    "Entusiasta de Python",
    "Futuro Ingeniero",
    "Aprendiz de Odoo"
];

let currentRoleIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function typeRole() {
    const changingRole = document.getElementById('changing-role');
    const currentRole = roles[currentRoleIndex];
    
    if (isDeleting) {
        changingRole.textContent = currentRole.substring(0, currentCharIndex - 1);
        currentCharIndex--;
    } else {
        changingRole.textContent = currentRole.substring(0, currentCharIndex + 1);
        currentCharIndex++;
    }
    
    let typeSpeed = 100;
    
    if (isDeleting) {
        typeSpeed = 50;
    }
    
    if (!isDeleting && currentCharIndex === currentRole.length) {
        typeSpeed = 2000; // Pausa antes de borrar
        isDeleting = true;
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        typeSpeed = 500; // Pausa antes de escribir el siguiente
    }
    
    setTimeout(typeRole, typeSpeed);
}

// Contador animado para estadísticas
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        if (isNaN(target)) return;
        
        const increment = target / 50;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            const displayValue = Math.floor(current);
            counter.textContent = displayValue;
            
            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            }
        }, 30);
    });
}

// ===== GITHUB API INTEGRATION =====
async function fetchGitHubStats() {
    const username = 'tuusuario'; // Cambia por tu username real
    
    try {
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userResponse.json();
        
        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
        const reposData = await reposResponse.json();
        
        // Calculate stats
        const stats = {
            repos: userData.public_repos || 8,
            followers: userData.followers || 2,
            years: Math.max(1, new Date().getFullYear() - new Date(userData.created_at).getFullYear()) || 2,
            commits: await estimateCommits(username) || 500
        };
        
        return stats;
    } catch (error) {
        console.log('GitHub API unavailable, using fallback data');
        // Fallback data
        return {
            repos: 8,
            followers: 2,
            years: 2,
            commits: 500
        };
    }
}

async function estimateCommits(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/events/public?per_page=100`);
        const events = await response.json();
        
        const pushEvents = events.filter(event => event.type === 'PushEvent');
        const commitCount = pushEvents.reduce((total, event) => {
            return total + (event.payload.commits ? event.payload.commits.length : 0);
        }, 0);
        
        // Estimate based on recent activity (multiply by factor for total estimate)
        return Math.max(commitCount * 10, 500);
    } catch {
        return 500; // Fallback
    }
}

// Animar estadísticas del sidebar con datos reales
async function animateSidebarStats() {
    const sidebarStats = document.querySelectorAll('.footer-stats .stat-number[data-target]');
    
    // Fetch real GitHub data
    const githubStats = await fetchGitHubStats();
    
    // Update data-target with real values
    const statsMap = {
        0: githubStats.repos,    // Projects
        1: githubStats.years     // Years
    };
    
    sidebarStats.forEach((stat, index) => {
        const realTarget = statsMap[index];
        if (realTarget) {
            stat.setAttribute('data-target', realTarget);
        }
        
        const target = parseInt(stat.getAttribute('data-target'));
        if (isNaN(target)) return;
        
        let current = 0;
        const increment = target / 30;
        
        const timer = setInterval(() => {
            current += increment;
            const displayValue = Math.floor(current);
            stat.textContent = displayValue;
            
            if (current >= target) {
                stat.textContent = target;
                clearInterval(timer);
            }
        }, 50);
    });
}

// Update hero metrics with GitHub data
async function updateHeroMetrics() {
    const githubStats = await fetchGitHubStats();
    
    // Update hero metrics
    const metricElements = document.querySelectorAll('.dev-metrics .metric-number[data-target]');
    const metricsMap = {
        0: githubStats.commits,   // Commits
        1: githubStats.repos,     // Projects  
        2: 15,                    // Technologies (keep static)
        3: githubStats.years      // Years coding
    };
    
    metricElements.forEach((element, index) => {
        const realValue = metricsMap[index];
        if (realValue) {
            element.setAttribute('data-target', realValue);
            element.textContent = '0'; // Reset for animation
        }
    });
}

// Funcionalidad del botón descargar CV
document.getElementById('download-cv')?.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Simulación de descarga (puedes reemplazar con tu CV real)
    const link = document.createElement('a');
    link.href = '#'; // Aquí pondrías la ruta a tu CV
    link.download = 'Elver_Contreras_CV.pdf';
    
    // Feedback visual
    const originalText = this.innerHTML;
    this.innerHTML = '<i class="bi bi-check"></i> ¡Próximamente!';
    this.style.background = '#10b981';
    
    setTimeout(() => {
        this.innerHTML = originalText;
        this.style.background = '';
    }, 2000);
});

// Inicializar efectos cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // 🚀 INICIALIZAR SISTEMA INTERACTIVO DEL HEAD (PRIORITARIO)
    initInteractiveHead();
    
    // Iniciar efecto de escritura después de 1 segundo
    setTimeout(typeRole, 1000);
    
    // Iniciar contadores después de 1.5 segundos
    setTimeout(animateCounters, 1500);
});

// Observador de intersección para activar animaciones cuando la sección home esté visible
const homeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id === 'home') {
            // Reiniciar animaciones cuando home esté visible
            setTimeout(animateCounters, 500);
        }
    });
});

// Observar la sección home
const homeSection = document.getElementById('home');
if (homeSection) {
    homeObserver.observe(homeSection);
}

// ===== FUNCIONALIDADES PARA LA SECCIÓN ABOUT =====

// Observador de intersección para animaciones en About
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Activar animaciones de timeline
            const timelineItems = entry.target.querySelectorAll('.timeline-item');
            timelineItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, index * 200);
            });

            // Activar animaciones de goal cards
            const goalCards = entry.target.querySelectorAll('.goal-card');
            goalCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 150 + 300);
            });

            // Activar animaciones de value items
            const valueItems = entry.target.querySelectorAll('.value-item');
            valueItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 100 + 600);
            });
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
});

// Observar la sección about
const aboutSection = document.getElementById('about');
if (aboutSection) {
    aboutObserver.observe(aboutSection);
}

// Efecto parallax suave para las cards al hacer scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const aboutSection = document.getElementById('about');
    
    if (aboutSection) {
        const aboutTop = aboutSection.offsetTop;
        const aboutHeight = aboutSection.offsetHeight;
        
        // Solo aplicar parallax si estamos en la sección about
        if (scrolled >= aboutTop - window.innerHeight && scrolled <= aboutTop + aboutHeight) {
            const parallaxElements = aboutSection.querySelectorAll('.stat-card, .goal-card, .value-item');
            
            parallaxElements.forEach((element, index) => {
                const speed = 0.5 + (index % 3) * 0.1;
                const yPos = -(scrolled - aboutTop) * speed;
                element.style.transform = `translateY(${yPos}px)`;
            });
        }
    }
});

// Efecto de hover mejorado para las stat cards
document.addEventListener('DOMContentLoaded', function() {
    const statCards = document.querySelectorAll('.stat-card');
    
    statCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 30px rgba(34, 211, 238, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });

    // Efecto de click en los botones CTA
    const ctaButtons = document.querySelectorAll('.about-cta .btn-primary, .about-cta .btn-outline');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Crear efecto de ripple
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: ripple 0.6s linear;
                left: ${x}px;
                top: ${y}px;
                width: ${size}px;
                height: ${size}px;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Añadir la animación de ripple al CSS dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== FUNCIONALIDADES PARA LA SECCIÓN SKILLS =====

// Sistema de filtros para habilidades
function initSkillsFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillCategories = document.querySelectorAll('.skills-category');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetCategory = this.getAttribute('data-category');
            
            // Actualizar botones activos
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filtrar categorías
            skillCategories.forEach(category => {
                const categoryType = category.getAttribute('data-category');
                
                if (targetCategory === 'all' || categoryType === targetCategory) {
                    category.classList.remove('hidden');
                    // Reanimy las progress bars cuando se muestran
                    setTimeout(() => {
                        animateProgressBars(category);
                    }, 300);
                } else {
                    category.classList.add('hidden');
                }
            });
            
            // Efecto de vibración en el botón
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

// Animación de barras de progreso
function animateProgressBars(container = document) {
    const progressBars = container.querySelectorAll('.progress-bar');
    
    progressBars.forEach((bar, index) => {
        const targetWidth = bar.getAttribute('data-width');
        
        // Resetear la barra
        bar.style.width = '0%';
        
        // Animar con delay progresivo
        setTimeout(() => {
            bar.style.width = targetWidth + '%';
            bar.closest('.skill-item').classList.add('animate');
        }, index * 100);
    });
}

// Observador para la sección skills
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animar barras de progreso cuando la sección sea visible
            setTimeout(() => {
                animateProgressBars();
            }, 300);
            
            // Animar skill items
            const skillItems = entry.target.querySelectorAll('.skill-item');
            skillItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 100);
            });
            
            // Animar achievements
            const achievementItems = entry.target.querySelectorAll('.achievement-item');
            achievementItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, index * 150 + 600);
            });
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
});

// Efectos hover mejorados para skill items
function initSkillsHoverEffects() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // Efecto de brillo en el icono
            const icon = this.querySelector('.skill-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.boxShadow = '0 10px 25px rgba(34, 211, 238, 0.3)';
            }
            
            // Acelerar animación de la barra de progreso
            const progressBar = this.querySelector('.progress-bar');
            if (progressBar) {
                progressBar.style.transition = 'width 0.5s ease-in-out';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.skill-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.style.boxShadow = 'none';
            }
            
            const progressBar = this.querySelector('.progress-bar');
            if (progressBar) {
                progressBar.style.transition = 'width 1.5s ease-in-out';
            }
        });
    });
}

// Efecto de counter animado para porcentajes
function animateSkillPercentages() {
    const percentages = document.querySelectorAll('.skill-percentage');
    
    percentages.forEach(percentage => {
        const targetValue = parseInt(percentage.textContent);
        let currentValue = 0;
        const increment = targetValue / 50;
        
        const timer = setInterval(() => {
            currentValue += increment;
            percentage.textContent = Math.floor(currentValue) + '%';
            
            if (currentValue >= targetValue) {
                percentage.textContent = targetValue + '%';
                clearInterval(timer);
            }
        }, 30);
    });
}

// Inicializar funcionalidades cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar filtros
    initSkillsFilters();
    
    // Inicializar efectos hover
    initSkillsHoverEffects();
    
    // Observar la sección skills
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
});

// Funcionalidad adicional: tooltip personalizado para skills
function createSkillTooltips() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        const tooltip = document.createElement('div');
        tooltip.className = 'skill-tooltip';
        tooltip.style.cssText = `
            position: absolute;
            background: rgba(15, 23, 42, 0.95);
            color: #22d3ee;
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 0.8rem;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
            border: 1px solid rgba(34, 211, 238, 0.3);
            backdrop-filter: blur(10px);
        `;
        
        const skillLevel = item.querySelector('.skill-level').textContent;
        const skillName = item.querySelector('.skill-details h4').textContent;
        tooltip.textContent = `${skillName} - Nivel ${skillLevel}`;
        
        document.body.appendChild(tooltip);
        
        item.addEventListener('mouseenter', (e) => {
            tooltip.style.opacity = '1';
            tooltip.style.visibility = 'visible';
        });
        
        item.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
            tooltip.style.visibility = 'hidden';
        });
        
        item.addEventListener('mousemove', (e) => {
            tooltip.style.left = e.clientX + 10 + 'px';
            tooltip.style.top = e.clientY - 40 + 'px';
        });
    });
}

// Llamar después de que todo esté cargado
window.addEventListener('load', function() {
    createSkillTooltips();
});

// ===== FUNCIONALIDADES PARA LA SECCIÓN PROJECTS =====

// Datos de los proyectos para el modal
const projectsData = {
    portfolio: {
        title: "Portafolio Personal Interactivo",
        description: "Un portafolio web moderno y responsive desarrollado desde cero con HTML5, CSS3 y JavaScript vanilla. Incluye animaciones fluidas, efectos visuales avanzados, y una experiencia de usuario optimizada para todos los dispositivos.",
        features: [
            "Diseño responsive y mobile-first",
            "Animaciones CSS y JavaScript personalizadas",
            "Sistema de navegación por secciones",
            "Efectos visuales con gradientes y transiciones",
            "Optimización de rendimiento y SEO",
            "Compatibilidad cross-browser"
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Animations", "Git"],
        github: "https://github.com/tuusuario/portfolio",
        demo: "#home"
    },
    management: {
        title: "Sistema de Gestión Empresarial",
        description: "Sistema web completo para la gestión de inventarios, ventas y clientes. Desarrollado con Python Flask, incluye autenticación de usuarios, dashboard interactivo, generación de reportes y API REST.",
        features: [
            "Sistema de autenticación y autorización",
            "Dashboard con gráficos interactivos",
            "CRUD completo para productos y clientes",
            "Generación de reportes en PDF",
            "API REST para integraciones",
            "Base de datos relacional optimizada"
        ],
        technologies: ["Python", "Flask", "SQLAlchemy", "Bootstrap", "Chart.js", "SQLite"],
        github: "https://github.com/tuusuario/management-system",
        demo: "#"
    },
    taskmanager: {
        title: "Task Manager con React",
        description: "Aplicación de gestión de tareas desarrollada en React con hooks modernos. Permite crear, editar, filtrar y organizar tareas con una interfaz intuitiva y almacenamiento local persistente.",
        features: [
            "Interfaz de usuario intuitiva y moderna",
            "CRUD completo de tareas",
            "Sistema de filtros y categorías",
            "Almacenamiento local persistente",
            "Drag & drop para organización",
            "Responsive design"
        ],
        technologies: ["React", "Hooks", "CSS Modules", "LocalStorage", "JSX", "Webpack"],
        github: "https://github.com/tuusuario/react-task-manager",
        demo: "https://tuusuario.github.io/react-task-manager"
    },
    scraper: {
        title: "Web Scraper Automático",
        description: "Script automatizado en Python para extracción de datos de sitios web. Incluye manejo robusto de errores, rotación de proxies, exportación a múltiples formatos y scheduling automático.",
        features: [
            "Extracción automática de datos web",
            "Manejo de JavaScript con Selenium",
            "Rotación de user agents y proxies",
            "Exportación a CSV, Excel y JSON",
            "Sistema de logs detallado",
            "Configuración flexible via JSON"
        ],
        technologies: ["Python", "BeautifulSoup", "Selenium", "Pandas", "Requests", "Schedule"],
        github: "https://github.com/tuusuario/web-scraper",
        demo: "#"
    },
    calculator: {
        title: "Calculadora Científica Web",
        description: "Calculadora web con funciones científicas avanzadas. Interfaz moderna e intuitiva, soporte para operaciones complejas, historial de cálculos y modo PWA para uso offline.",
        features: [
            "Operaciones básicas y científicas",
            "Interfaz responsive y accesible",
            "Historial de cálculos",
            "Soporte para teclado físico",
            "Modo PWA (Progressive Web App)",
            "Tema claro y oscuro"
        ],
        technologies: ["JavaScript", "CSS3", "Math.js", "PWA", "Service Workers", "LocalStorage"],
        github: "https://github.com/tuusuario/scientific-calculator",
        demo: "https://tuusuario.github.io/scientific-calculator"
    }
};

// Sistema de filtros para proyectos
function initProjectsFilters() {
    const filterButtons = document.querySelectorAll('.project-filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTech = this.getAttribute('data-tech');
            
            // Actualizar botones activos
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filtrar proyectos
            projectCards.forEach((card, index) => {
                const cardTechs = card.getAttribute('data-tech');
                
                if (targetTech === 'all' || (cardTechs && cardTechs.includes(targetTech))) {
                    card.style.display = 'block';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(30px)';
                    
                    // Animar entrada
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(-30px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
            
            // Efecto de vibración en el botón
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

// Funcionalidad del modal de proyectos - CENTRADO ABSOLUTO
function initProjectModal() {
    const modal = document.getElementById('project-modal');
    const modalClose = document.querySelector('.modal-close');
    const viewDetailsButtons = document.querySelectorAll('.btn-view-details');
    
    // Abrir modal
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const projectData = projectsData[projectId];
            
            if (projectData) {
                populateModal(projectData);
                
                // Bloquear scroll del body completamente
                document.body.style.overflow = 'hidden';
                document.body.style.position = 'fixed';
                document.body.style.width = '100%';
                document.body.style.height = '100%';
                
                // Mostrar modal con centrado absoluto
                modal.classList.add('show');
                
                // Animar entrada
                setTimeout(() => {
                    const modalContent = modal.querySelector('.modal-content');
                    modalContent.style.transform = 'scale(1)';
                    modalContent.style.opacity = '1';
                }, 10);
            }
        });
    });
    
    // Cerrar modal al hacer clic en la X
    modalClose.addEventListener('click', closeModal);
    
    // Cerrar modal al hacer clic en el fondo del modal
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Cerrar modal con Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
    
    function closeModal() {
        // Animar salida
        const modalContent = modal.querySelector('.modal-content');
        modalContent.style.transform = 'scale(0.9)';
        modalContent.style.opacity = '0';
        
        setTimeout(() => {
            modal.classList.remove('show');
            
            // Restaurar completamente el body
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.height = '';
            
            // Resetear animación para próxima apertura
            modalContent.style.transform = '';
            modalContent.style.opacity = '';
        }, 300);
    }
}

// Llenar el modal con datos del proyecto
function populateModal(projectData) {
    document.getElementById('modal-title').textContent = projectData.title;
    document.getElementById('modal-description').textContent = projectData.description;
    
    // Llenar características
    const featuresList = document.getElementById('modal-features-list');
    featuresList.innerHTML = '';
    projectData.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    // Llenar tecnologías
    const techTags = document.getElementById('modal-tech-tags');
    techTags.innerHTML = '';
    projectData.technologies.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'tech-tag';
        span.textContent = tech;
        techTags.appendChild(span);
    });
    
    // Actualizar enlaces
    document.getElementById('modal-github').href = projectData.github;
    document.getElementById('modal-demo').href = projectData.demo;
    
    // Deshabilitar demo si no está disponible
    const demoLink = document.getElementById('modal-demo');
    if (projectData.demo === '#') {
        demoLink.classList.add('disabled');
        demoLink.style.opacity = '0.5';
        demoLink.style.pointerEvents = 'none';
        demoLink.innerHTML = '<i class="bi bi-tools"></i> En desarrollo';
    } else {
        demoLink.classList.remove('disabled');
        demoLink.style.opacity = '1';
        demoLink.style.pointerEvents = 'auto';
        demoLink.innerHTML = '<i class="bi bi-eye"></i> Ver Demo';
    }
}

// Observador para la sección projects
const projectsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animar project cards
            const projectCards = entry.target.querySelectorAll('.project-card');
            projectCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 150);
            });
            
            // Animar estadísticas
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                animateStatNumber(stat);
            });
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
});

// Animar números de estadísticas
function animateStatNumber(element) {
    const finalValue = element.textContent.replace('+', '');
    const isPlus = element.textContent.includes('+');
    const numericValue = parseInt(finalValue);
    
    if (isNaN(numericValue)) return;
    
    let currentValue = 0;
    const increment = numericValue / 50;
    
    const timer = setInterval(() => {
        currentValue += increment;
        const displayValue = Math.floor(currentValue);
        element.textContent = displayValue + (isPlus ? '+' : '');
        
        if (currentValue >= numericValue) {
            element.textContent = finalValue + (isPlus ? '+' : '');
            clearInterval(timer);
        }
    }, 40);
}

// Efectos hover mejorados para project cards
function initProjectsHoverEffects() {
    const projectCards = document.querySelectorAll('.project-card:not(.coming-soon)');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Efecto de elevación más pronunciado
            this.style.transform = 'translateY(-15px) scale(1.02)';
            
            // Animar tech tags
            const techTags = this.querySelectorAll('.tech-tag');
            techTags.forEach((tag, index) => {
                setTimeout(() => {
                    tag.style.transform = 'translateY(-2px)';
                    tag.style.boxShadow = '0 5px 15px rgba(34, 211, 238, 0.3)';
                }, index * 50);
            });
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            
            const techTags = this.querySelectorAll('.tech-tag');
            techTags.forEach(tag => {
                tag.style.transform = 'translateY(0)';
                tag.style.boxShadow = 'none';
            });
        });
    });
}

// ===== CONTACT SECTION FUNCTIONALITY =====

// Contact form functionality
function initContactForm() {
    const form = document.getElementById('contact-form');
    const submitBtn = form.querySelector('.btn-submit');
    const resetBtn = form.querySelector('.btn-reset');
    const messageTextarea = document.getElementById('contact-message');
    const charCount = document.getElementById('char-count');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    
    // Character counter
    messageTextarea.addEventListener('input', () => {
        const count = messageTextarea.value.length;
        charCount.textContent = count;
        
        if (count > 500) {
            charCount.parentElement.style.color = '#ef4444';
        } else if (count > 400) {
            charCount.parentElement.style.color = '#f59e0b';
        } else {
            charCount.parentElement.style.color = '#64748b';
        }
    });
    
    // Form validation
    function validateForm() {
        const formData = new FormData(form);
        const errors = [];
        
        // Required fields
        const requiredFields = ['name', 'email', 'subject', 'message'];
        requiredFields.forEach(field => {
            if (!formData.get(field) || formData.get(field).trim() === '') {
                errors.push(`El campo ${getFieldLabel(field)} es obligatorio`);
            }
        });
        
        // Email validation
        const email = formData.get('email');
        if (email && !isValidEmail(email)) {
            errors.push('El formato del email no es válido');
        }
        
        // Message length validation
        const message = formData.get('message');
        if (message && message.length > 500) {
            errors.push('El mensaje no puede exceder 500 caracteres');
        }
        
        return errors;
    }
    
    function getFieldLabel(field) {
        const labels = {
            'name': 'Nombre',
            'email': 'Email',
            'subject': 'Asunto', 
            'message': 'Mensaje'
        };
        return labels[field] || field;
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Show form messages
    function showMessage(type, text) {
        hideMessages();
        
        if (type === 'success') {
            successMessage.querySelector('span').textContent = text;
            successMessage.classList.add('show');
        } else {
            errorMessage.querySelector('span').textContent = text;
            errorMessage.classList.add('show');
        }
        
        // Auto hide after 5 seconds
        setTimeout(hideMessages, 5000);
    }
    
    function hideMessages() {
        successMessage.classList.remove('show');
        errorMessage.classList.remove('show');
    }
    
    // Submit form
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const errors = validateForm();
        if (errors.length > 0) {
            showMessage('error', errors[0]);
            return;
        }
        
        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        try {
            // Simulate form submission
            await simulateFormSubmission();
            
            // Success
            showMessage('success', '¡Mensaje enviado exitosamente! Te responderé pronto.');
            form.reset();
            charCount.textContent = '0';
            
            // Save form data to localStorage (for demo purposes)
            const formData = new FormData(form);
            const contactData = Object.fromEntries(formData.entries());
            contactData.timestamp = new Date().toISOString();
            
            let contacts = JSON.parse(localStorage.getItem('portfolio_contacts') || '[]');
            contacts.push(contactData);
            localStorage.setItem('portfolio_contacts', JSON.stringify(contacts));
            
        } catch (error) {
            showMessage('error', 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.');
        } finally {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });
    
    // Reset form
    resetBtn.addEventListener('click', () => {
        hideMessages();
        charCount.textContent = '0';
        charCount.parentElement.style.color = '#64748b';
    });
    
    // Simulate form submission
    function simulateFormSubmission() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // 90% success rate for demo
                if (Math.random() > 0.1) {
                    resolve();
                } else {
                    reject(new Error('Simulation error'));
                }
            }, 2000);
        });
    }
}

// Contact animations
function initContactAnimations() {
    const contactMethods = document.querySelectorAll('.contact-method');
    const faqItems = document.querySelectorAll('.faq-item');
    const socialBtns = document.querySelectorAll('.social-btn');
    
    // Animate contact methods on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 200);
            }
        });
    }, observerOptions);
    
    contactMethods.forEach((method) => {
        method.style.opacity = '0';
        method.style.transform = 'translateX(-30px)';
        method.style.transition = 'all 0.6s ease';
        contactObserver.observe(method);
    });
    
    // Animate FAQ items
    const faqObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
    }, observerOptions);
    
    faqItems.forEach((item) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease';
        faqObserver.observe(item);
    });
    
    // Social buttons hover effects
    socialBtns.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Contact section enhancement
function initContactEnhancements() {
    // Copy to clipboard functionality for contact info
    const contactMethods = document.querySelectorAll('.contact-method');
    
    contactMethods.forEach(method => {
        const methodInfo = method.querySelector('.method-info p');
        if (methodInfo) {
            method.addEventListener('click', async () => {
                const text = methodInfo.textContent;
                
                try {
                    await navigator.clipboard.writeText(text);
                    
                    // Show copied feedback
                    const originalText = methodInfo.textContent;
                    methodInfo.textContent = '¡Copiado!';
                    methodInfo.style.color = '#22c55e';
                    
                    setTimeout(() => {
                        methodInfo.textContent = originalText;
                        methodInfo.style.color = '#22d3ee';
                    }, 2000);
                } catch (error) {
                    console.log('Clipboard not available');
                }
            });
            
            // Add pointer cursor
            method.style.cursor = 'pointer';
            method.title = 'Clic para copiar';
        }
    });
    
    // Form auto-save functionality
    const form = document.getElementById('contact-form');
    if (form) {
        const formInputs = form.querySelectorAll('input, select, textarea');
        
        formInputs.forEach(input => {
            input.addEventListener('input', () => {
                const formData = {};
                formInputs.forEach(field => {
                    if (field.value) {
                        formData[field.name] = field.value;
                    }
                });
                localStorage.setItem('contact_form_draft', JSON.stringify(formData));
            });
        });
        
        // Restore form data on page load
        const savedData = localStorage.getItem('contact_form_draft');
        if (savedData) {
            try {
                const data = JSON.parse(savedData);
                Object.keys(data).forEach(key => {
                    const field = form.querySelector(`[name="${key}"]`);
                    if (field) {
                        field.value = data[key];
                        
                        // Update character count for message
                        if (key === 'message') {
                            const charCount = document.getElementById('char-count');
                            if (charCount) {
                                charCount.textContent = data[key].length;
                            }
                        }
                    }
                });
            } catch (error) {
                console.log('Error restoring form data');
            }
        }
        
        // Clear draft on successful submit
        form.addEventListener('submit', () => {
            localStorage.removeItem('contact_form_draft');
        });
    }
}

// Contact form field effects
function initContactFieldEffects() {
    const formGroups = document.querySelectorAll('.form-group');
    
    formGroups.forEach(group => {
        const input = group.querySelector('input, select, textarea');
        const label = group.querySelector('label');
        
        if (input && label) {
            // Focus effects
            input.addEventListener('focus', () => {
                group.style.transform = 'translateY(-2px)';
                label.style.color = '#22d3ee';
            });
            
            input.addEventListener('blur', () => {
                group.style.transform = 'translateY(0)';
                if (!input.value) {
                    label.style.color = '#22d3ee';
                }
            });
            
            // Validation styling
            input.addEventListener('invalid', () => {
                input.style.borderColor = '#ef4444';
                label.style.color = '#ef4444';
            });
            
            input.addEventListener('input', () => {
                input.style.borderColor = 'rgba(34, 211, 238, 0.2)';
                label.style.color = '#22d3ee';
            });
        }
    });
}

// Initialize contact functionality
function initContactSection() {
    initContactForm();
    initContactAnimations();
    initContactEnhancements();
    initContactFieldEffects();
}

// ===== ADVANCED MICRO-INTERACTIONS =====
function initMicroInteractions() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline');
    buttons.forEach(button => {
        button.classList.add('ripple-effect');
    });
    
    // Add magnetic effect to important elements
    const magneticElements = document.querySelectorAll('.cta-button, .btn-primary');
    magneticElements.forEach(element => {
        element.classList.add('magnetic-effect');
    });
    
    // Stagger animation for nav links
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.add('stagger-animation');
    }
    
    // Enhanced scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);
    
    // Observe key elements for animations
    const animatedElements = document.querySelectorAll('.dev-metrics, .tech-stack, .about-content > div');
    animatedElements.forEach(el => animationObserver.observe(el));
}

// Add loading skeleton while GitHub API loads
function showLoadingState() {
    const metrics = document.querySelectorAll('.metric-number, .stat-number');
    metrics.forEach(metric => {
        metric.classList.add('loading-skeleton');
    });
}

function hideLoadingState() {
    const metrics = document.querySelectorAll('.metric-number, .stat-number');
    metrics.forEach(metric => {
        metric.classList.remove('loading-skeleton');
    });
}

// Inicializar todas las funcionalidades
document.addEventListener('DOMContentLoaded', function() {
    // 🚀 SISTEMA INTERACTIVO DEL HEAD (YA INICIALIZADO ARRIBA - LÍNEA ~290)
    
    // Inicializar Micro-interactions
    initMicroInteractions();
    
    // Inicializar Projects
    initProjectsFilters();
    initProjectModal();
    initProjectsHoverEffects();
    
    // Inicializar Contact
    initContactSection();
    
    // Update metrics with GitHub data and animate
    setTimeout(async () => {
        showLoadingState();
        await updateHeroMetrics();
        await animateSidebarStats();
        hideLoadingState();
        // Re-animate hero counters with new data
        setTimeout(animateCounters, 200);
    }, 500);
    
    // Observar las secciones
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        projectsObserver.observe(projectsSection);
    }
    
    // 🎊 Confirmación de que todo está listo
    setTimeout(() => {
        console.log('%c✅ ¡Portafolio completamente cargado y listo! 🎉', 'color: #10b981; font-size: 14px; font-weight: bold;');
    }, 2500);
});
