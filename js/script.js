const translations = {
    pt: pt.translations,
    en: en.translations,
    es: es.translations
};

const fullContent = {
    pt: pt.content,
    en: en.content,
    es: es.content
};

const langNames = {
    pt: "Português",
    en: "English",
    es: "Español"
};

let currentLang = localStorage.getItem('selectedLang') || 'pt';
let currentReferencesPage = 1;
let referencesItems = [];
const referencesPerPage = 4;

const langSelect = document.getElementById('langSelect');
const langSelectFixed = document.getElementById('langSelectFixed');
const themeToggle = document.getElementById('themeToggle');
const themeToggleFixed = document.getElementById('themeToggleFixed');
const fixedHeader = document.getElementById('fixedHeader');
const progressBar = document.getElementById('progressBar');
const toast = document.getElementById('toastMessage');
const citeABNTBtn = document.getElementById('citeABNT');
const citeAPABtn = document.getElementById('citeAPA');
const citeABNTFooterBtn = document.getElementById('citeABNTFooter');
const downloadPdfBtn = document.getElementById('downloadPdfBtn');
const openLetterBtn = document.getElementById('openAcceptanceLetterBtn');
const openLetterFooterBtn = document.getElementById('openAcceptanceLetterFooterBtn');
const citeAPAFooterBtn = document.getElementById('citeAPAFooter');

const menuToggleFixed = document.getElementById('menuToggleFixed');
const menuCloseFixed = document.getElementById('menuCloseFixed');
const mobileMenuFixed = document.getElementById('mobileMenuFixed');
const menuOverlayFixed = document.getElementById('menuOverlayFixed');

const pdfModal = document.getElementById('pdfModal');
const pdfModalIframe = document.getElementById('pdfModalIframe');
const pdfModalClose = document.getElementById('pdfModalClose');

const downloadPdfFooterBtn = document.getElementById('downloadPdfFooterBtn');

if (langSelect) langSelect.value = currentLang;
if (langSelectFixed) langSelectFixed.value = currentLang;

const scrollThreshold = 100;

let toastTimeout = null;

function showToast(msg, type = 'success') {
    if (!toast) return;

    let icon = '';
    switch (type) {
        case 'success':
            icon = '<i class="fas fa-check-circle" style="margin-right: 8px;"></i>';
            break;
        case 'error':
            icon = '<i class="fas fa-exclamation-circle" style="margin-right: 8px;"></i>';
            break;
        case 'info':
            icon = '<i class="fas fa-info-circle" style="margin-right: 8px;"></i>';
            break;
        default:
            icon = '<i class="fas fa-check-circle" style="margin-right: 8px;"></i>';
    }

    toast.innerHTML = icon + msg;
    toast.classList.add('show');

    if (toastTimeout) clearTimeout(toastTimeout);

    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function openPdfModal(pdfPath) {
    if (!pdfModal || !pdfModalIframe) return;

    const loader = document.getElementById('pdfModalLoader');
    if (loader) loader.classList.remove('hidden');

    const viewerUrl = `pdfjs/web/viewer.html?file=${encodeURIComponent(pdfPath)}`;
    pdfModalIframe.src = viewerUrl;
    pdfModal.classList.add('open');
    pdfModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closePdfModal() {
    if (!pdfModal) return;
    pdfModal.classList.remove('open');
    pdfModal.setAttribute('aria-hidden', 'true');
    pdfModalIframe.src = '';
    document.body.style.overflow = '';
}

function initPdfModal() {
    if (!pdfModal || !pdfModalClose) return;

    pdfModalClose.addEventListener('click', closePdfModal);

    pdfModal.addEventListener('click', (e) => {
        if (e.target === pdfModal) closePdfModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && pdfModal.classList.contains('open')) {
            closePdfModal();
        }
    });

    if (pdfModalIframe) {
        pdfModalIframe.addEventListener('load', () => {
            const loader = document.getElementById('pdfModalLoader');
            if (loader) {
                setTimeout(() => loader.classList.add('hidden'), 200);
            }
        });
    }
}

function initMobileMenu() {
    if (!menuToggleFixed || !mobileMenuFixed || !menuOverlayFixed) return;

    function openMenu() {
        mobileMenuFixed.classList.add('open');
        menuOverlayFixed.classList.add('active');
        mobileMenuFixed.setAttribute('aria-hidden', 'false');
        menuToggleFixed.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        mobileMenuFixed.classList.remove('open');
        menuOverlayFixed.classList.remove('active');
        mobileMenuFixed.setAttribute('aria-hidden', 'true');
        menuToggleFixed.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    menuToggleFixed.addEventListener('click', openMenu);
    if (menuCloseFixed) menuCloseFixed.addEventListener('click', closeMenu);
    menuOverlayFixed.addEventListener('click', closeMenu);

    mobileMenuFixed.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
            const target = link.getAttribute('href').slice(1);
            const el = document.getElementById(target);
            if (el) {
                setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });
}

function updateUITexts(lang) {
    const t = translations[lang];

    const logoArea = document.querySelector('.logo-area h4');
    if (logoArea) logoArea.innerText = t.logo;
    
    const heroBadge = document.querySelector('.hero-badge');
    if (heroBadge) heroBadge.innerText = t.hero.badge;

    const heroMetaHighlight = document.querySelector('.hero-meta-highlight');
    if (heroMetaHighlight) {
        heroMetaHighlight.innerHTML = `<i class="fas fa-award"></i> ${t.hero.status}`;
    }

    const fixedHeaderTitle = document.getElementById('fixedHeaderTitle');
    if (fixedHeaderTitle) {
        fixedHeaderTitle.innerText = t.hero.titulo.replace('<br>', ' ');
    }

    const fixedLinks = document.querySelectorAll('.fixed-header .nav-links-fixed a');
    const fixedKeys = ['resumo', 'introducao', 'metodologia', 'referencial', 'resultados', 'consideracoes', 'referencias'];
    fixedLinks.forEach((link, i) => {
        if (fixedKeys[i]) link.innerText = t.nav[fixedKeys[i]];
    });

    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
    mobileLinks.forEach((link, i) => {
        if (fixedKeys[i]) link.innerText = t.nav[fixedKeys[i]];
    });

    const mobileNavTitle = document.querySelector('.mobile-nav-header h4');
    if (mobileNavTitle) mobileNavTitle.innerText = t.toc.titulo;

    const topBarLinks = document.querySelectorAll('.top-bar .nav-links a');
    topBarLinks.forEach((link, i) => {
        if (fixedKeys[i]) link.innerText = t.nav[fixedKeys[i]];
    });

    const heroH1 = document.querySelector('.hero h1');
    if (heroH1) heroH1.innerHTML = t.hero.titulo;

    const heroP = document.querySelector('.hero p');
    if (heroP) heroP.innerHTML = t.hero.subtitulo;

    const authors = document.querySelectorAll('.byline .authors span');
    const authorKeys = ['autor1', 'autor2', 'autor3'];
    authors.forEach((span, i) => {
        if (authorKeys[i]) {
            span.innerHTML = `<i class="fas fa-user"></i> ${t.byline[authorKeys[i]]}`;
        }
    });

    if (downloadPdfBtn) {
        downloadPdfBtn.innerHTML = `<i class="pi pi-file-pdf"></i> ${t.buttons.abrirPDF}`;
    }

    const readingTimes = document.querySelectorAll('.reading-time');
    readingTimes.forEach(rt => {
        rt.innerHTML = `<i class="pi pi-clock"></i> <span class="estimatedReadingTime">${t.byline.tempoLeitura}</span> ${t.byline.minLeitura}`;
    });

    if (citeABNTBtn) {
        citeABNTBtn.innerHTML = `<i class="fas fa-quote-right"></i> ${t.buttons.citarABNT}`;
    }
    if (citeAPABtn) {
        citeAPABtn.innerHTML = `<i class="pi pi-book"></i> ${t.buttons.citarAPA}`;
    }
    if (themeToggleFixed) {
        const isDark = document.body.classList.contains('dark');
        themeToggleFixed.innerHTML = `<i class="pi ${isDark ? 'pi-sun' : 'pi-moon'}"></i>`;
        themeToggleFixed.title = t.buttons.tema;
        themeToggleFixed.setAttribute('aria-label', t.buttons.tema);
    }

    const tocTitle = document.querySelector('.toc h3');
    if (tocTitle) tocTitle.innerHTML = `<i class="pi pi-list"></i> ${t.toc.titulo}`;

    const tocLinks = document.querySelectorAll('.toc ul li a');
    const tocKeys = ['resumo', 'introducao', 'metodologia', 'referencial', 'resultados', 'consideracoes', 'referencias'];
    const tocIcons = ['pi-file-pdf', 'pi-info-circle', 'pi-cog', 'pi-book', 'pi-chart-bar', 'pi-check-circle', 'pi-database'];
    tocLinks.forEach((link, i) => {
        if (tocKeys[i]) {
            link.innerHTML = `<i class="pi ${tocIcons[i]}"></i> ${t.toc[tocKeys[i]]}`;
        }
    });

    const footerH3 = document.querySelectorAll('.footer-section h3');
    const footerKeys = ['autores', 'instituicao', 'links', 'compartilhe'];
    const footerIcons = ['pi-users', 'pi-building', 'pi-link', 'pi-share-alt'];
    footerH3.forEach((h3, i) => {
        if (footerKeys[i]) {
            h3.innerHTML = `<i class="pi ${footerIcons[i]}"></i> ${t.footer[footerKeys[i]]}`;
        }
    });

    const footerLinks = document.querySelectorAll('.footer-links li a');
    const footerLinkKeys = ['resumoArtigo', 'metodologia', 'resultados', 'referencias'];
    footerLinks.forEach((link, i) => {
        if (footerLinkKeys[i]) {
            link.innerHTML = `<i class="pi pi-arrow-right"></i> ${t.footer[footerLinkKeys[i]]}`;
        }
    });

    const footerCiteP = document.querySelector('.footer-cite p');
    if (footerCiteP) {
        footerCiteP.innerHTML = `<i class="pi pi-quote-right"></i> ${t.footer.comoCitar}`;
    }

    if (citeABNTFooterBtn) {
        citeABNTFooterBtn.innerHTML = `<i class="fas fa-quote-right"></i> ${t.buttons.citarABNT}`;
    }

    if (citeAPAFooterBtn) {
    citeAPAFooterBtn.innerHTML = `<i class="pi pi-book"></i> ${t.buttons.citarAPA}`;
}

    const footerCopyright = document.querySelector('.footer-copyright');
    if (footerCopyright) {
        footerCopyright.innerHTML = `<i class="pi pi-copyright"></i> 2025 — ${t.footer.direitos}`;
    }

    const referencesTitle = document.querySelector('#referencias h2 span');
    if (referencesTitle) {
        referencesTitle.innerHTML = `<i class="fas fa-book"></i> ${t.references.title}`;
    }

    if (openLetterBtn) {
        openLetterBtn.innerHTML = `<i class="pi pi-envelope"></i> ${t.buttons.cartaAceite}`;
    }
    if (openLetterFooterBtn) {
        openLetterFooterBtn.innerHTML = `<i class="pi pi-envelope"></i> ${t.buttons.cartaAceite}`;
    }
if (downloadPdfFooterBtn) {
    downloadPdfFooterBtn.innerHTML = `<i class="pi pi-file-pdf"></i> ${t.buttons.abrirPDF}`;
}
if (citeAPAFooterBtn) {
    citeAPAFooterBtn.innerHTML = `<i class="pi pi-book"></i> ${t.buttons.citarAPA}`;
}

const footerBadgeText = document.getElementById('footerBadgeText');
if (footerBadgeText) {
    footerBadgeText.innerText = t.hero.status;
}
    }
function updatePaginationTexts(lang) {
    const t = translations[lang];
    const paginationInfo = document.querySelector('.pagination-info');
    if (paginationInfo) {
        const currentPage = paginationInfo.dataset.current;
        const totalPages = paginationInfo.dataset.total;
        const totalItems = paginationInfo.dataset.items;
        if (currentPage && totalPages && totalItems) {
            paginationInfo.innerText = `${t.references.page} ${currentPage} ${t.references.of} ${totalPages} (${totalItems} ${t.references.references})`;
        }
    }

    const prevBtn = document.querySelector('.pagination-btn:first-child');
    const nextBtn = document.querySelector('.pagination-btn:last-child');
    if (prevBtn && !prevBtn.disabled) {
        prevBtn.innerHTML = `<i class="fas fa-chevron-left"></i> ${t.references.previous}`;
    }
    if (nextBtn && !nextBtn.disabled) {
        nextBtn.innerHTML = `${t.references.next} <i class="fas fa-chevron-right"></i>`;
    }
}

function renderFullArticle() {
    const t = fullContent[currentLang];
    const titles = translations[currentLang];

    const articleContainer = document.getElementById('articleContainer');
    if (!articleContainer) return;

    const html = `
        <section id="resumo" class="resumo-card"><h2><i class="fas fa-file-lines"></i> ${titles.toc.resumo.toUpperCase()}</h2>${t.resumo}</section>
        <section id="introducao"><h2>1. ${titles.toc.introducao.toUpperCase()}</h2>${t.introducao}</section>
        <section id="metodologia"><h2>2. ${titles.toc.metodologia.toUpperCase()}</h2>${t.metodologia}</section>
        <section id="referencial"><h2>3. ${titles.toc.referencial.toUpperCase()}</h2>${t.referencial}</section>
        <section id="resultados"><h2>4. ${titles.toc.resultados.toUpperCase()}</h2>${t.resultados}</section>
        <section id="consideracoes"><h2>5. ${titles.toc.consideracoes.toUpperCase()}</h2>${t.consideracoes}</section>
        <section id="referencias">
            <h2 style="display: flex; align-items: center; justify-content: space-between; cursor: pointer;" onclick="toggleReferences()">
                <span><i class="fas fa-book"></i> ${titles.references.title}</span>
                <span id="referencesToggleIcon" style="font-size: 1.2rem;"><i class="fas fa-chevron-down"></i></span>
            </h2>
            <div id="referencesContent" style="display: none;">
                <div id="referencesPaginationContainer"></div>
            </div>
        </section>
    `;
    articleContainer.innerHTML = html;

    processReferencesWithPagination(t.referencias);
    updateUITexts(currentLang);
    updateTocActive();
}

function extractReferenceItems(referencesHtml) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = referencesHtml;
    const items = tempDiv.querySelectorAll('.reference-item');
    return Array.from(items).map(item => item.outerHTML);
}

function renderReferencesPage() {
    const container = document.getElementById('referencesPaginationContainer');
    if (!container) return;

    const start = (currentReferencesPage - 1) * referencesPerPage;
    const end = start + referencesPerPage;
    const pageItems = referencesItems.slice(start, end);
    const totalPages = Math.ceil(referencesItems.length / referencesPerPage);

    const itemsHtml = `<div class="references-grid">${pageItems.join('')}</div>`;

    const paginationHtml = `
        <div class="references-pagination">
            <button class="pagination-btn" onclick="changeReferencesPage(${currentReferencesPage - 1})" ${currentReferencesPage === 1 ? 'disabled' : ''}>
                <i class="fas fa-chevron-left"></i> ${translations[currentLang].references.previous}
            </button>
            <span class="pagination-info" data-current="${currentReferencesPage}" data-total="${totalPages}" data-items="${referencesItems.length}">
                ${translations[currentLang].references.page} ${currentReferencesPage} ${translations[currentLang].references.of} ${totalPages} (${referencesItems.length} ${translations[currentLang].references.references})
            </span>
            <button class="pagination-btn" onclick="changeReferencesPage(${currentReferencesPage + 1})" ${currentReferencesPage === totalPages ? 'disabled' : ''}>
                ${translations[currentLang].references.next} <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    `;

    container.innerHTML = itemsHtml + paginationHtml;
}

function changeReferencesPage(newPage) {
    const totalPages = Math.ceil(referencesItems.length / referencesPerPage);
    if (newPage >= 1 && newPage <= totalPages) {
        currentReferencesPage = newPage;
        renderReferencesPage();
    }
}

function processReferencesWithPagination(referencesHtml) {
    referencesItems = extractReferenceItems(referencesHtml);
    currentReferencesPage = 1;
    renderReferencesPage();
}

function toggleReferences() {
    const referencesContent = document.getElementById('referencesContent');
    const toggleIcon = document.getElementById('referencesToggleIcon');

    if (!referencesContent || !toggleIcon) return;

    if (referencesContent.style.display === 'none') {
        referencesContent.style.display = 'block';
        toggleIcon.innerHTML = '<i class="fas fa-chevron-up"></i>';
        renderReferencesPage();
    } else {
        referencesContent.style.display = 'none';
        toggleIcon.innerHTML = '<i class="fas fa-chevron-down"></i>';
    }
}

function updateTocActive() {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.toc a, .mobile-nav-links a');
    if (sections.length === 0) return;

    const focalPoint = window.innerHeight * 0.35;
    let currentSection = sections[0].getAttribute('id');

    for (let i = 0; i < sections.length; i++) {
        const rect = sections[i].getBoundingClientRect();
        if (rect.top <= focalPoint) {
            currentSection = sections[i].getAttribute('id');
        } else {
            break;
        }
    }

    const scrollBottom = window.scrollY + window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    if (scrollBottom >= docHeight - 5) {
        currentSection = sections[sections.length - 1].getAttribute('id');
    }

    links.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href && href === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

function initProgressBar() {
    window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        if (height > 0 && progressBar) {
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + '%';
        }
    }, { passive: true });
}

function initFixedHeader() {
    if (!fixedHeader) return;
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > scrollThreshold) {
            fixedHeader.classList.add('visible');
        } else {
            fixedHeader.classList.remove('visible');
        }
    }, { passive: true });
}

function updateThemeButtons() {
    if (!themeToggleFixed) return;
    const isDark = document.body.classList.contains('dark');
    const themeIcon = themeToggleFixed.querySelector('i');
    if (themeIcon) {
        themeIcon.className = isDark ? 'pi pi-sun' : 'pi pi-moon';
    }
}

function syncLanguageSelects(sourceSelect, targetSelect, value) {
    if (targetSelect) targetSelect.value = value;
    currentLang = value;
    localStorage.setItem('selectedLang', value);
    renderFullArticle();
    updateUITexts(value);
    updatePaginationTexts(value);
    showToast(`${translations[value].toast.langChanged}${langNames[value]}`);
}

function initLanguageSelects() {
    if (langSelectFixed) {
        langSelectFixed.addEventListener('change', (e) => {
            if (langSelect) langSelect.value = e.target.value;
            syncLanguageSelects(langSelectFixed, langSelect, e.target.value);
        });
    }

    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            if (langSelectFixed) langSelectFixed.value = e.target.value;
            syncLanguageSelects(langSelect, langSelectFixed, e.target.value);
        });
    }
}

function initTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
    }
    updateThemeButtons();

    const observer = new MutationObserver(() => {
        updateThemeButtons();
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark');
            localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
        });
    }

    if (themeToggleFixed) {
        themeToggleFixed.addEventListener('click', () => {
            if (themeToggle) themeToggle.click();
        });
    }
}

function initCitations() {
    const abntText = "ARAÚJO, Andressa Barbosa Carvalho; ABIB, Matheus Bilitardo; CARVALHO, Luciano Gonçalves de. ENTRE A TECNOLOGIA E O CUIDADO: análise comparativa estruturada de chatbots na saúde digital. 2025.";
    const apaText = "Araújo, A. B. C., Abib, M. B., & Carvalho, L. G. (2025). Entre a tecnologia e o cuidado: análise comparativa estruturada de chatbots na saúde digital.";

    if (citeABNTBtn) {
        citeABNTBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(abntText);
            showToast(translations[currentLang].toast.citeABNTCopied);
        });
    }

    if (citeABNTFooterBtn) {
        citeABNTFooterBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(abntText);
            showToast(translations[currentLang].toast.citeABNTCopied);
        });
    }

    if (citeAPABtn) {
        citeAPABtn.addEventListener('click', () => {
            navigator.clipboard.writeText(apaText);
            showToast(translations[currentLang].toast.citeAPACopied);
        });
    }

    if (citeAPAFooterBtn) {
        citeAPAFooterBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(apaText);
            showToast(translations[currentLang].toast.citeAPACopied);
        });
    }
}

function initPdfButtons() {
    if (downloadPdfBtn) {
        downloadPdfBtn.addEventListener('click', () => {
            openPdfModal('../../docs/Artigo-Cientifico.pdf');
        });
    }

    if (openLetterBtn) {
        openLetterBtn.addEventListener('click', () => {
            openPdfModal('../../docs/DECLARACAO_ACEITE.pdf');
        });
    }

    if (openLetterFooterBtn) {
        openLetterFooterBtn.addEventListener('click', () => {
            openPdfModal('../../docs/DECLARACAO_ACEITE.pdf');
        });
    }
}

function initTocSmoothScroll() {
    document.querySelectorAll('.toc a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href').slice(1);
            const el = document.getElementById(target);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

function init() {
    if (langSelect) langSelect.value = currentLang;
    if (langSelectFixed) langSelectFixed.value = currentLang;

    renderFullArticle();
    updateUITexts(currentLang);
    updatePaginationTexts(currentLang);

    initProgressBar();
    initFixedHeader();
    initLanguageSelects();
    initTheme();
    initCitations();
    initPdfButtons();
    initTocSmoothScroll();
    initMobileMenu();
    initPdfModal();

    window.addEventListener('scroll', updateTocActive, { passive: true });
    window.addEventListener('resize', updateTocActive);
    setTimeout(() => updateTocActive(), 150);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

window.changeReferencesPage = changeReferencesPage;
window.toggleReferences = toggleReferences;