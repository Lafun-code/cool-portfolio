const translations = {
  en: {
    pageTitle: "H. Emre Berkay — Developer",
    metaDescription:
      "Personal CV site of H. Emre Berkay, passionate about software development, cybersecurity, and retro technology.",
    mainTitle: "Hüsnü Emre Berkay",
    subtitle: "> Full-Stack Developer & Retro Technology Enthusiast",
    navAbout: "[ about ]",
    navSkills: "[ skills ]",
    navExperience: "[ experience ]",
    navEducation: "[ education ]",
    navProjects: "[ projects ]",
    navContact: "[ contact ]",
    aboutTitle: "about.txt",
    aboutText:
      "Hello! I'm Emre. I build innovative solutions with modern web technologies. My journey started with HTML and CSS, and today I develop complex applications using technologies like C++ and C#. In my free time, I enjoy playing old games and dabbling in pixel art.",
    skillsTitle: "skills.ini",
    experienceTitle: "experience.log",
    job1Title: "HOME",
    job1Date: "January 2020 - Present",
    job1Desc: "Countless hours spent on a chair.",
    educationTitle: "education.log",
    schoolName: "Mehmet Akif Ersoy University",
    degree: "Computer Programming",
    // DÜZELTME: Tarih tutarlı hale getirildi.
    educationDate: "2024 - Present",
    projectsTitle: "projects.dir",
    project1Title: 'Game "Development"',
    project1Desc:
      "Memory analysis and real-time modification developed with C++.",
    // YENİ: Eksik proje başlıkları eklendi.
    project2Title: "Discord Bot",
    project2Desc:
      "An interactive music bot developed with JS for user engagement.",
    project3Title: "Youtube-downloader",
    project3Desc:
    "A powerful, Python-based desktop application for downloading YouTube videos in HD, SD, or MP3 format. Includes an intuitive graphical interface built with PyQt5 and seamless integration with yt-dlp.",
    project4Title: "Source Code of This Site",
    project4Desc: "The site is designed with the aesthetic of an old computer terminal (DOS command line), featuring green text on a black background. Information about the developer, such as About, Skills, Experience, Education, Projects, and Contact, is presented as if being displayed by running type [filename] commands.",
    contactTitle: "contact.bat",
  },
  tr: {
    pageTitle: "H. Emre Berkay — Geliştirici",
    metaDescription:
      "Yazılım geliştirme, siber güvenlik ve retro teknoloji tutkunu H. Emre Berkay'ın kişisel CV sitesi.",
    mainTitle: "Hüsnü Emre Berkay",
    subtitle: "> Full-Stack Geliştirici & Retro Teknoloji Meraklısı",
    navAbout: "[ hakkimda ]",
    navSkills: "[ yetenekler ]",
    navExperience: "[ deneyim ]",
    navEducation: "[ egitim ]",
    navProjects: "[ projeler ]",
    navContact: "[ iletisim ]",
    aboutTitle: "hakkimda.txt",
    aboutText:
      "Merhaba! Ben Emre. Modern web teknolojileriyle yenilikçi çözümler üretiyorum. HTML ve CSS yazarak başladığım bu serüvende, bugün C++ ve C# gibi teknolojilerle karmaşık uygulamalar geliştiriyorum. Boş zamanlarımda eski oyunları oynar, piksel sanatıyla ilgilenirim.",
    skillsTitle: "yetenekler.ini",
    experienceTitle: "deneyim.log",
    job1Title: "EV",
    job1Date: "Ocak 2020 - Günümüz",
    job1Desc: "Sandalye üstünde geçen tonla saat.",
    educationTitle: "egitim.log",
    schoolName: "Mehmet Akif Ersoy Üniversitesi",
    degree: "Bilgisayar Programcılığı",
    educationDate: "2024 - Günümüz",
    projectsTitle: "projeler.dir",
    project1Title: 'Oyun "Geliştirme"',
    project1Desc:
      "C++ ile geliştirilmiş memory analizi ve gerçek zamanlı degiştirme.",
    // YENİ: Eksik proje başlıkları eklendi.
    project2Title: "Discord Botu",
    project2Desc: "JS ile geliştirilmiş kullanıcı interaktifli bir müzik botu.",
    project3Title: "Youtube-indirici",
    project3Desc: "HD, SD veya MP3 formatında YouTube videoları indirmek için geliştirilmiş güçlü, Python tabanlı bir masaüstü uygulaması. PyQt5 ile oluşturulmuş sezgisel bir grafik arayüz ve yt-dlp ile sorunsuz entegrasyon içerir.",
    project4Title: "Bu Sitenin Kaynak Kodu",
    project4Desc: "Site, siyah arka plan üzerine yeşil metinlerin kullanıldığı eski bir bilgisayar terminali (DOS komut satırı) arayüzü şeklinde tasarlanmıştır. Geliştiricinin Hakkında, Yetenekler, Deneyim, Eğitim, Projeler ve İletişim bilgileri, type [dosya_adı] komutları çalıştırılıyormuş gibi sunulmaktadır.",
    contactTitle: "iletisim.bat",
  },
};

function changeLanguage(lang) {
  localStorage.setItem("language", lang);
  document.querySelectorAll("[data-lang]").forEach((el) => {
    const key = el.dataset.lang;
    if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
    }
  });
  document.querySelector("title").textContent = translations[lang].pageTitle;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", translations[lang].metaDescription);
  document.documentElement.lang = lang;
  document.getElementById("lang-en").classList.toggle("active", lang === "en");
  document.getElementById("lang-tr").classList.toggle("active", lang === "tr");
}

document.addEventListener("DOMContentLoaded", () => {
  // --- ASCII Art Loader ---
  const asciiArt = `
██╗  ██╗███████╗██████╗  
██║  ██║██╔════╝██╔══██╗ 
███████║█████╗  ██████╔╝ 
██╔══██║██╔══╝  ██╔══██╗ 
██║  ██║███████╗██║  ██║ 
╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ 
  `;
  document.querySelector(".ascii-art").textContent = asciiArt;

  // --- Language Switcher Logic ---
  const savedLang = localStorage.getItem("language");
  const browserLang = navigator.language.split("-")[0];
  const defaultLang = savedLang || (browserLang === "tr" ? "tr" : "en");
  changeLanguage(defaultLang);
  
  // İYİLEŞTİRME: Event listener'lar buraya taşındı.
  document.getElementById("lang-en").addEventListener("click", (e) => {
    e.preventDefault(); // Sayfanın en üste atlamasını engeller.
    changeLanguage("en");
  });

  document.getElementById("lang-tr").addEventListener("click", (e) => {
    e.preventDefault();
    changeLanguage("tr");
  });


  // --- Active Section Highlighting Logic ---
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".main-nav a");

  const observerOptions = {
    root: null,
    rootMargin: "-40% 0px -60% 0px",
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach((link) => {
          const href = link.getAttribute("href");
          link.classList.toggle("nav-active", href === `#${id}`);
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
});