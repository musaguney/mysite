// --- NAVBAR MOBİL MENÜ ---
const mobileBtn = document.getElementById('mobile-menu-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link'); // Linklere tıklandığında menü kapansın

mobileBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // İkon değişimi (Opsiyonel)
    const icon = mobileBtn.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Menü linkine tıklanınca menüyü kapat
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileBtn.querySelector('i').classList.remove('fa-times');
        mobileBtn.querySelector('i').classList.add('fa-bars');
    });
});

// --- DİL ÇEVİRİSİ ---
const translations = {
    tr: {
        nav_projects: "Projeler",
        nav_about: "Hakkımda",
        nav_skills: "Teknolojiler",
        nav_contact: "İletişim",
        nav_cv: "CV",
        
        proj_title: "01 // Seçilmiş Çalışmalar",
        
        // Proje 1: Kılıç Cıvata
        proj_1_desc: "Python ve Django teknolojileri kullanılarak Kılıç Cıvata markası için özel bir web uygulaması geliştirilmiştir. Projenin veri tabanı mimarisi SQLite üzerine kurulmuş olup, hızlı veri akışı hedeflenmiştir. Kullanıcı arayüzü JavaScript ve özelleştirilmiş CSS ile zenginleştirilerek, mobil uyumlu ve interaktif bir deneyim sunulmuştur. Bu çalışma, full-stack geliştirme yetkinliklerimi sergileyen güncel bir projedir.",
        
        // Proje 2: Erken Uyarı
        proj_2_desc: "Flutter kullanarak multi platformlu bir Erken Uyarı Sistemi mobil uygulaması geliştirdim. Gerçek zamanlı veri senkronizasyonu ve anlık bildirimler için Firebase altyapısını entegre ettim. Sistemin karmaşık risk hesaplamalarını ve veri işleme mantığını, sunucu tarafında Next.js tabanlı bir API servisi kurarak optimize ettim. 'Kaynak kod firma anlaşmasından dolayı paylaşılmamıştır.'",
        
        // Proje 3: Gezi Uygulaması
        proj_3_desc: "Seyahatseverler için gezilecek yerleri bulma ve deneyim paylaşımı odaklı bir mobil platform tasarladım. Flutter ile modern ve akıcı bir arayüz geliştirirken, arka planda güvenli oturum açma ve kullanışlı bir kullanıcı deneyimi sundum.",

        // Proje 4: Optik Reader (HTML'de data-lang="proj_4_desc" yapmalısın)
        proj_4_desc: "Python ve görüntü işleme kütüphaneleri (OpenCV) kullanılarak, optik form fotoğraflarını analiz eden bir OMR (Optik İşaret Tanıma) masaüstü uygulaması geliştirildi. Algoritma, işaretlenen cevapları tespit edip otomatik puanlama yapmakta ve sonuçları (Öğrenci No, Puan) yapılandırılmış CSV formatında raporlamaktadır.",

        // Proje 5: UzakPC (HTML'de data-lang="proj_5_desc" yapmalısın)
        proj_5_desc: "Python ve SQLite kullanılarak, uzaktaki Pardus sistemlere IP ve kullanıcı bilgileriyle erişim sağlayan web tabanlı bir izleme (monitoring) paneli geliştirildi. Uygulama, uzaktaki cihazdan anlık sistem kaynaklarını (CPU, RAM, Disk) ve donanım özelliklerini çekerek web arayüzünde görselleştirmektedir.",

        about_title: "02 // Hakkımda",
        // Yeni Hakkımda Metinleri
        about_text_1: "&nbsp; Web, mobil ve masaüstü platformlarında fikirleri işlevsel ürünlere dönüştürme konusunda tutkuluyum. <strong>Python</strong> ile görüntü işleme algoritmalarından, <strong>Flutter</strong> ile mobil uygulama mimarilerine kadar geniş bir teknoloji yelpazesinde projeler üretiyorum.",
        about_text_2: "&nbsp; Benim için yazılım geliştirmek sadece kod yazmaktan ibaret değil; her alanda, gerçek dünya problemlerini çözen katma değerli çözümlerdir.",
        
        skills_title: "03 // Teknoloji Yığını",
        skill_cat_backend: "Backend & Core",
        skill_cat_frontend: "Frontend & Web",
        skill_cat_mobile: "Mobile & Cloud",
        contact_headline: "Bir sonraki büyük projeyi<br>birlikte başlatalım.",
        contact_sub: "Aşağıdaki platformlardan bana ulaşabilirsiniz.",
        footer_rights: "Tüm hakları saklıdır."
    },
    en: {
        nav_projects: "Projects",
        nav_about: "About Me",
        nav_skills: "Tech Stack",
        nav_contact: "Contact",
        nav_cv: "CV",
        
        proj_title: "01 // Selected Works",
        
        proj_1_desc: "A custom web application was developed for the Kılıç Cıvata brand using Python and Django technologies. The database architecture is built on SQLite, aiming for fast data flow. The user interface is enriched with JavaScript and customized CSS, offering a mobile-compatible and interactive experience. This work represents my full-stack development competencies.",
        
        proj_2_desc: "I developed a multi-platform Early Warning System mobile application using Flutter. I integrated Firebase infrastructure for real-time data synchronization and instant notifications. I optimized the system's complex risk calculations and data processing logic by establishing a Next.js-based API service on the server side. 'Source code not shared due to company agreement.'",
        
        proj_3_desc: "I designed a mobile platform for travel lovers focused on finding places to visit and sharing experiences. While developing a modern and smooth interface with Flutter, I provided a secure login and useful user experience in the background.",

        proj_4_desc: "An OMR (Optical Mark Recognition) desktop application was developed analyzing optical form photos using Python and image processing libraries (OpenCV). The algorithm detects marked answers, performs automatic scoring, and reports the results (Student ID, Score) in a structured CSV format.",

        proj_5_desc: "A web-based monitoring panel was developed using Python and SQLite to access remote Pardus systems via IP and user information. The application visualizes instant system resources (CPU, RAM, Disk) and hardware features fetched from the remote device on the web interface.",

        about_title: "02 // About Me",
        about_text_1: "&nbsp; I am passionate about transforming ideas into functional products across web, mobile, and desktop platforms. I actively produce projects within a wide technological range, from image processing algorithms with <strong>Python</strong> to mobile application architectures with <strong>Flutter</strong>.",
        about_text_2: "&nbsp; For me, software development is not just about writing code; it is about producing value-added solutions that solve real-world problems in every field.",
        
        skills_title: "03 // Tech Stack",
        skill_cat_backend: "Backend & Core",
        skill_cat_frontend: "Frontend & Web",
        skill_cat_mobile: "Mobile & Cloud",
        contact_headline: "Let's build the next<br>big project together.",
        contact_sub: "You can reach me via the platforms below.",
        footer_rights: "All rights reserved."
    }
};

let currentLang = "tr";
const langBtn = document.getElementById("lang-toggle");

langBtn.addEventListener("click", () => {
    currentLang = currentLang === "tr" ? "en" : "tr";
    langBtn.textContent = currentLang.toUpperCase();
    updateLanguage();
});

function updateLanguage() {
    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
}

// --- TEMA VE SCROLL ---
const themeBtn = document.getElementById("theme-toggle");
const htmlTag = document.documentElement;
const themeIcon = themeBtn.querySelector("i");
const savedTheme = localStorage.getItem("theme") || "dark";
htmlTag.setAttribute("data-theme", savedTheme);
updateThemeIcon(savedTheme);

themeBtn.addEventListener("click", () => {
    const currentTheme = htmlTag.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    htmlTag.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === "dark") {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    } else {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
});

const style = document.createElement('style');
style.innerHTML = `.reveal.active { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);