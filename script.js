/* ===========================
   NEFISLY - İNTERAKTİF KODLAR
   =========================== */

document.addEventListener('DOMContentLoaded', function() {
    // Görsel Koruma - Sağ tık engelleme (sadece görseller için)
    document.addEventListener('contextmenu', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            return false;
        }
    });

    // Görsel sürükle-bırak engelleme
    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            return false;
        }
    });

    // Hamburger Menü
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Sayfa linkleri tıklandığında menü kapanacak
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });

    // Scroll animasyonları
    observeElements();

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Logo linki için (#) özel işlem
            if (href === '#') {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Navbar shadow scroll ile
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.12)';
        } else {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
        }
    });
});

// Intersection Observer - Scroll animasyonları
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Feature cards ve diğer elementleri observe et
    document.querySelectorAll('.feature-card, .responsibility-text').forEach(el => {
        observer.observe(el);
    });
}

// Sayfa yüklendikten sonra animasyonlar
window.addEventListener('load', function() {
    console.log('Nefisly tanıtım sayfası yüklendi ✨');
    
    // Scroll position reset
    window.scrollTo(0, 0);
});

// Download linklerini yapılandırma
document.addEventListener('DOMContentLoaded', function() {
    // Gerçek app store linklerinizi buraya ekleyebilirsiniz
    const googlePlayLink = document.querySelector('.google-play');
    const appStoreLink = document.querySelector('.app-store');

    if (googlePlayLink) {
        googlePlayLink.href = 'https://play.google.com/store/apps/details?id=com.nefisly.app';
    }

    if (appStoreLink) {
        appStoreLink.href = 'https://apps.apple.com/tr/app/nefisly/id123456789';
    }

    // FAQ açılır/kapanır işlevi
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.closest('.faq-item');
            const allFaqItems = document.querySelectorAll('.faq-item');
            
            // Diğer açık itemleri kapat
            allFaqItems.forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                }
            });
            
            // Seçili itemi toggle et
            faqItem.classList.toggle('active');
        });
    });
});

// Responsive menu close
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            navLinks.classList.remove('active');
        }
    }
});
