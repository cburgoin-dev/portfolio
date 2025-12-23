// Cursor Toggle
const cursorToggle = document.getElementById('cursor-toggle');
const cursorToggleSidebar = document.getElementById('cursor-toggle-sidebar');
cursorToggle.addEventListener('click', () => {
    setCursorActive(!cursorActive);
})
cursorToggleSidebar.addEventListener('click', () => {
    setCursorActive(!cursorActive);
})

function setCursorActive(active) {
    cursorActive = active;

    // Header
    if (active) {
        cursorToggle.classList.add('active');
    } else {
        cursorToggle.classList.remove('active');
    }

    // Sidebar
    if (active) {
        cursorToggleSidebar.classList.add('active');
    } else {
        cursorToggleSidebar.classList.remove('active');
    }

    // Turn on / turn off particles
    if (active) {
        document.addEventListener('mousemove', cursorMouseMove);
    } else {
        document.removeEventListener('mousemove', cursorMouseMove);
    }


    localStorage.setItem('cursorParticles', active);
}

function cursorMouseMove(e) {
    createParticle(e.clientX, e.clientY);
}

let cursorActive = false;
setCursorActive(cursorActive);

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('cursor-particle');

    const size = Math.random() * 6 + 4;
    const offsetX = (Math.random() - 0.5) * 10;
    const offsetY = (Math.random() - 0.5) * 10;

    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = x + offsetX + 'px';
    particle.style.top = y + offsetY + 'px';

    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 450);
}

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const themeToggleSidebar = document.getElementById('theme-toggle-sidebar');

const themeIconHeader = themeToggle.querySelector('i');
const themeIconSidebar = themeToggleSidebar.querySelector('i');
const root = document.documentElement;

function toggleTheme() {
    const isLight = document.body.classList.toggle('light-mode');
    const newTheme = isLight ? 'light' : 'dark';

    localStorage.setItem('theme', newTheme);
    applyTheme(themes[newTheme]);

    const iconClass = isLight ? 'fa-solid fa-moon moon' : 'fa-solid fa-sun sun';
    themeIconHeader.className = iconClass;
    themeIconSidebar.className = iconClass;
}

themeToggle.addEventListener('click', toggleTheme);
themeToggleSidebar.addEventListener('click', toggleTheme);

const themes = {
    dark: {
        '--bg-color': '#000000',
        '--bg-color2': '#222222',
        '--bg-color3': '#FF6B35',
        '--text-color': '#ffffff',
        '--text-color2': '#222222',
        '--text-color3': '#ffffff',
        '--form-label-color': '#FF6B35',
        '--form-text-color': '#ffffff',
        '--form-focus-color': '#ffffff',
        '--acent-color': '#FF6B35',
        '--acent-dark': '#C65D28',
        '--acent-color2': '#FFD700',
        '--muted-gray': '#222222',
        '--image-border': '#ffffff',
    },
    light: {
        '--bg-color': '#ffffff',
        '--bg-color2': '#FF6B35',
        '--bg-color3': '#222222',
        '--text-color': '#222222',
        '--text-color2': '#ffffff',
        '--text-color3': '#ffffff',
        '--form-label-color': '#222222',
        '--form-text-color': '#ffffff',
        '--form-focus-color': '#FF6B35',
        '--acent-color': '#FF6B35',
        '--acent-dark': '#C65D28',
        '--acent-color2': '#FFD700',
        '--muted-gray': '#222222',
        '--image-border': '#000000',
    }
}

function applyTheme(theme) {
    Object.keys(theme).forEach(key => {
        root.style.setProperty(key, theme[key]);
    });
}

function setLangSwitches(lang) {
    const isEs = (lang === 'es');
    langSwitch.checked = isEs;
    langSwitchSidebar.checked = isEs;
}

const langSwitch = document.getElementById('lang-switch');
const langSwitchSidebar = document.getElementById('lang-switch-sidebar')

langSwitch.addEventListener('change', () => {
    const lang = langSwitch.checked ? 'es' : 'en';
    setLangSwitches(lang);
    setLanguage(lang);
    updateLangColor(lang);
    updatePreloaderText(lang)
});
langSwitchSidebar.addEventListener('change', () => {
    const lang = langSwitchSidebar.checked ? 'es' : 'en';
    setLangSwitches(lang);
    setLanguage(lang);
    updateLangColor(lang);
    updatePreloaderText(lang)
});

// Language system
const translations = {
    en: {
        headerResume: 'Resume',
        aboutLink: 'About Me',
        projectsLink: 'Projects',
        experienceLink: 'Experience',
        skillsLink: 'Skills',
        contactLink: 'Contact',
        heroTitle: 'Cristian Burgoin',
        heroSubtitle: 'Software Engineer',
        heroResume: 'Resume',
        aboutTitle: 'About Me',
        aboutFirstParagraph: `The first time I used a computer, I was 4 years old, and since then I haven't been able to step away from technology. I am currently in the final stage of my degree: Software Development Engineering.`,
        aboutSecondParagraph: `During my studies, I gained knowledge that allowed me to establish myself as a Fullstack developer with a Backend focus. I prioritize code efficiency and maintainability, have worked with multiple languages and technologies, and my goal is to build clear solutions that solve real problems.`,
        aboutPhrase: 'A solution for a problem, one line at a time',
        projectsTitle: 'Projects',
        projects: {
            project1: {
                title: 'Reservation System',
                desc: 'A backend reservation system built with Java, MySQL, and REST, featuring real booking rules, synced room status updates, price calculation, full booking lifecycle, and a clean Controller–Service–DAO architecture secured with JWT and roles.',
            }
        },
        liveDemoButton: 'In Development',
        experienceTitle: 'Experience',
        experience: {
            uabcs: {
                title: 'UABCS - Software Development Engineering',
                tag: `Bachelor's Degree`,
                date: 'Aug 2023 - Present',
                desc: 'Currently in the 6th semester of the Software Development Engineering degree. Experience with Java, Python, MySQL, backend architecture, APIs, and full-stack projects. Focused on clean code, maintainable systems, and problem-solving through algorithms and data structures.'
            },
            independent: {
                title: 'Independent Projects & Learning',
                tag: `Self-Taught`,
                date: 'May 2022 - Present',
                desc: 'Started learning programming independently through Unity and personal projects. This early interest grew into consistent practice and self-driven learning, especially in OOP and building small software prototypes.'
            },
            cbtis: {
                title: 'CBTIS 230 - Programming Technician',
                tag: `Foundations`,
                date: 'Aug 2016 - June 2019',
                desc: 'Graduated as a Programming Technician, where I learned the fundamentals of sotfware development, algorithms, data structures, and logic-based problem solving.'
            }
        },
        skillsTitle: 'Skills',
        contactTitle: 'Contact',
        contactPhrase: 'Like what you see? Get in touch!',
        formName: 'Name:',
        formEmail: 'Email:',
        formSubject: 'Subject:',
        formMessage: 'Message:',
        formSubmit: 'Send',
        footerText: '© YEAR Cristian Burgoin — All rights reserved'
    },
    es: {
        headerResume: 'Currículum',
        aboutLink: 'Sobre Mí',
        projectsLink: 'Proyectos',
        experienceLink: 'Experiencia',
        skillsLink: 'Habilidades',
        contactLink: 'Contacto',
        heroTitle: 'Cristian Burgoin',
        heroSubtitle: 'Ingeniero de Software',
        heroResume: 'Currículum',
        aboutTitle: 'Sobre Mí',
        aboutFirstParagraph: 'La primera vez que utilicé una computadora tenía 4 años, y desde entonces no me he podido despegar de la tecnología. Actualmente estoy en la etapa final de mi carrera: Ingeniería en Desarrollo de Software.',
        aboutSecondParagraph: 'Durante mi formación, adquirí conocimientos que me permitieron consolidarme como desarrollador Fullstack con enfoque en Backend. Priorizo la eficiencia y mantenibilidad del código, he trabajado con distintos lenguajes y tecnologías, y mi objetivo es construir soluciones claras que resuelvan problemas reales.',
        aboutPhrase: 'Una solución para un problema, una línea a la vez',
        projectsTitle: 'Proyectos',
        projects: {
            project1: {
                title: 'Sistema de Reservaciones',
                desc: 'Un sistema de reservaciones backend construido con Java, MySQL y REST, que incluye reglas reales de reserva, actualización sincronizada del estado de habitaciones, cálculo de precios, ciclo completo de reserva y una arquitectura limpia Controller–Service–DAO protegida con JWT y roles.',
            }
        },
        liveDemoButton: 'En Desarrollo',
        experienceTitle: 'Experiencia',
        experience: {
            uabcs: {
                title: 'UABCS - Ingeniería en Desarrollo de Software',
                tag: `Licenciatura`,
                date: 'Ago 2023 - Presente',
                desc: 'Actualmente en el 6to semestre de la carrera de Ingeniería en Desarrollo de Software. Experiencia con Java, Python, MySQL, arquitectura backend, APIs y proyectos full-stack. Enfocado en código limpio, sistemas mantenibles y resolución de problemas mediante algoritmos y estructuras de datos.'
            },
            independent: {
                title: 'Proyectos y Aprendizaje Independiente',
                tag: `Autodidacta`,
                date: 'Mayo 2022 - Presente',
                desc: 'Comencé a aprender programación de manera independiente a través de Unity y proyectos personales. Este interés inicial se convirtió en práctica constante y aprendizaje autodirigido, especialmente en POO y en la creación de pequeños prototipos de software.'
            },
            cbtis: {
                title: 'CBTIS 230 - Técnico en Programación',
                tag: `Fundamentos`,
                date: 'Ago 2016 - Jun 2019',
                desc: 'Me gradué como Técnico en Programación, donde aprendí los fundamentos del desarrollo de software, algoritmos, estructuras de datos y resolución de problemas basada en lógica.'
            }
        },
        skillsTitle: 'Habilidades',
        contactTitle: 'Contacto',
        contactPhrase: '¿Te gusta lo que ves? ¡Contáctame!',
        formName: 'Nombre:',
        formEmail: 'Correo:',
        formSubject: 'Asunto:',
        formMessage: 'Mensaje:',
        formSubmit: 'Enviar',
        footerText: '© YEAR Cristian Burgoin — Todos los derechos reservados'
    }
}

const translationMap = {
    'header-resume': 'headerResume',
    'sidebar-resume': 'headerResume',
    'about-link': 'aboutLink',
    'projects-link': 'projectsLink',
    'experience-link' : 'experienceLink',
    'skills-link': 'skillsLink',
    'contact-link': 'contactLink',
    'about-sidebar-link': 'aboutLink',
    'projects-sidebar-link': 'projectsLink',
    'experience-sidebar-link': 'experienceLink',
    'skills-sidebar-link': 'skillsLink',
    'contact-sidebar-link': 'contactLink',
    'hero-title': 'heroTitle',
    'hero-subtitle': 'heroSubtitle',
    'hero-resume': 'heroResume',
    'about-title': 'aboutTitle',
    'about-first-paragraph': 'aboutFirstParagraph',
    'about-second-paragraph': 'aboutSecondParagraph',
    'about-phrase' : 'aboutPhrase',
    'projects-title' : 'projectsTitle',
    'live-demo-button': 'liveDemoButton',
    'experience-title' : 'experienceTitle',
    'skills-title': 'skillsTitle',
    'contact-title': 'contactTitle',
    'contact-phrase': 'contactPhrase',
    'form-name': 'formName',
    'form-email': 'formEmail',
    'form-subject': 'formSubject',
    'form-message': 'formMessage',
    'form-submit': 'formSubmit',
    'footer-text': 'footerText',
};

function setLanguage(lang) {
    Object.entries(translationMap).forEach(([id, key]) => {
        const el = document.getElementById(id);
        if (el) {
            if (id === 'footer-text') {
                const year = new Date().getFullYear();
                el.textContent = translations[lang][key].replace('YEAR', year);
            } else if (id === 'header-resume' || id === 'sidebar-resume' || id === 'hero-resume') {
                if (id === 'hero-resume') {
                    el.innerHTML = `<i class="fa-solid fa-file"></i> ${translations[lang][key]}`;
                } else {
                    el.innerHTML = `${translations[lang][key]}`
                }

                el.setAttribute('href', `assets/resume/CristianBurgoin_CV_${lang.toUpperCase()}.pdf`);
                const downloadName = lang === 'es' ? 'Cristian-Burgoin-CV-ES.pdf' : 'Cristian-Burgoin-Resume-EN.pdf';
                el.setAttribute('download', downloadName);
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const keys = el.dataset.i18n.split('.');
        let text = translations[lang];
        keys.forEach(k => text = text[k]);
        el.textContent = text;
    })

    localStorage.setItem('lang', lang);
}

// Active language in orange
const langSpans = document.querySelectorAll('.lang-labels span');

function updateLangColor(lang) {
    langSpans.forEach(span => {
        if ((span.textContent === 'EN' && lang === 'en') || (span.textContent === 'ES' && lang === 'es')) {
            span.style.color = 'var(--acent-color)';
        } else {
            span.style.color = 'var(--text-color)';
        }
    });
}

updateLangColor(langSwitch.checked ? 'es' : 'en');

// Mobile sidebar
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const closeSidebarBtn = document.querySelector('.close-sidebar');
const sidebarLinks = document.querySelectorAll('.sidebar-link');

menuToggle.addEventListener('click', () => {
    sidebar.classList.add('open');
    document.body.style.overflow = 'hidden';
});

closeSidebarBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
    document.body.style.overflow = '';
})

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('open');
        document.body.style.overflow = '';
    })
})

// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const body = document.body;

    body.style.visibility = 'visible';
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 2000);
});

function updatePreloaderText(lang) {
    const preloaderText = document.querySelector('.preloader-text');
    if (!preloaderText) return;

    preloaderText.textContent = lang === 'es' ? 'Cargando...' : 'Loading...';
}

// Load DOM content
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';

    if (savedTheme === 'light') {
        document.body.classList.add('light-mode')
    }
    applyTheme(themes[savedTheme]);

    const themeIcon = savedTheme === 'light' ? 'fa-solid fa-moon moon' : 'fa-solid fa-sun sun';
    themeIconHeader.className = themeIcon;
    themeIconSidebar.className = themeIcon;

    const savedLang = localStorage.getItem('lang') || 'en';

    document.querySelector('.lang-toggle').classList.add('no-transition');

    setLangSwitches(savedLang);
    setLanguage(savedLang);
    updateLangColor(savedLang);
    updatePreloaderText(savedLang);

    requestAnimationFrame(() => {
        document.querySelector('.lang-toggle').classList.remove('no-transition');
    });
});

// Projects gallery logic
document.querySelectorAll('.project').forEach(project => {
    const gallery = project.querySelector('.project-gallery');
    const track = gallery.querySelector('.gallery-track');
    const images = track.querySelectorAll('img');
    const prevBtn = project.querySelector('.prev');
    const nextBtn = project.querySelector('.next');
    const indicators = gallery.querySelectorAll('.indicator');

    let index = 0;
    let interval;

    function updateGallery() {
        const width = images[0].clientWidth;
        track.style.transform = `translateX(${-index * width}px)`;

        indicators.forEach(ind => ind.classList.remove('active'));
        indicators[index].classList.add('active');
    }

    function nextImage() {
        index = (index + 1) % images.length;
        updateGallery();
    }

    function prevImage() {
        index = (index - 1 + images.length) % images.length;
        updateGallery();
    }

    function startAutoSlide() {
        interval = setInterval(nextImage, 4000);
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    nextBtn.addEventListener('click', () => {
        stopAutoSlide();
        nextImage();
        startAutoSlide();
    })

    prevBtn.addEventListener('click', () => {
        stopAutoSlide();
        prevImage();
        startAutoSlide();
    });

    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => {
            stopAutoSlide();
            index = i;
            updateGallery();
            startAutoSlide();
        });
    });

    window.addEventListener('resize', updateGallery);

    startAutoSlide();
})

const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('form-submit');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const lang = localStorage.getItem('lang') || 'en';

    const sendingText = lang === 'es' ? 'Enviando...' : 'Sending...';
    const sendText = lang === 'es' ? 'Enviar' : 'Send';

    submitBtn.disabled = true;
    submitBtn.textContent = sendingText;

    emailjs.sendForm('service_ehf5yah', 'template_b7mobw6', this)
    .then(() => {
        showToast(lang === 'es' ? '¡Mensaje enviado con éxito!' : 'Message sent successfully!', 'success');
        contactForm.reset();

        submitBtn.disabled = false;
        submitBtn.textContent = sendText;
    }, (err) => {
        console.error('Error: ', err);
        showToast(lang === 'es' 
            ? 'Oops, algo salió mal. Intenta de nuevo.' 
            : 'Oops, something went wrong. Try again.'
        , 'error');

        submitBtn.disabled = false;
        submitBtn.textContent = sendText;
    });
});

function showToast(message, type = 'success') {
    const container = document.querySelector('.toast-container');

    const toast = document.createElement('div');
    toast.classList.add('toast', type);
    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}