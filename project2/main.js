// تبديل اللغة
const langToggle = document.getElementById("lang-toggle");
const langText = langToggle.querySelector("span");

let currentLang = "en";

const translations = {
  en: {
    home: "Home",
    projects: "Projects",
    contractors: "Contractors",
    about: "About",
    heroTitle: "We Build <span>the Future</span>",
    heroText: "Connecting clients with trusted contractors to make construction easier.",
    btnStart: "Get Started Today",
    btnLearn: "Learn More",
    statsContractors: "Contractors",
    statsProjects: "Projects",
    statsClients: "Clients",
    featuredTitle: "Featured Projects",
    featuredDesc: "Discover some of the top-rated construction projects.",
    viewAll: "View All Projects",
    ctaTitle: "Build Your Dream Project Today",
    ctaText: "Join thousands of satisfied clients and contractors."
  },
  ar: {
    home: "الرئيسية",
    projects: "المشاريع",
    contractors: "المقاولون",
    about: "من نحن",
    heroTitle: "نحن نبني <span>المستقبل</span>",
    heroText: "نربط العملاء بالمقاولين الموثوقين لجعل البناء أسهل.",
    btnStart: "ابدأ اليوم",
    btnLearn: "اعرف المزيد",
    statsContractors: "مقاول",
    statsProjects: "مشروع",
    statsClients: "عميل",
    featuredTitle: "المشاريع المميزة",
    featuredDesc: "اكتشف أبرز المشاريع الإنشائية.",
    viewAll: "عرض جميع المشاريع",
    ctaTitle: "ابن مشروع أحلامك اليوم",
    ctaText: "انضم إلى آلاف العملاء والمقاولين الراضين."
  }
};

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "ar" : "en";
  langText.textContent = currentLang === "en" ? "EN" : "AR";

  const t = translations[currentLang];

  // تحديث النصوص
  document.querySelectorAll(".nav-links a")[0].textContent = t.home;
  document.querySelectorAll(".nav-links a")[1].textContent = t.projects;
  document.querySelectorAll(".nav-links a")[2].textContent = t.contractors;
  document.querySelectorAll(".nav-links a")[3].textContent = t.about;

  document.querySelector(".hero-text h1").innerHTML = t.heroTitle;
  document.querySelector(".hero-text p").textContent = t.heroText;

  document.querySelector(".btn-primary").textContent = t.btnStart;
  document.querySelector(".btn-secondary").textContent = t.btnLearn;

  document.querySelectorAll(".stat p")[0].textContent = t.statsContractors;
  document.querySelectorAll(".stat p")[1].textContent = t.statsProjects;
  document.querySelectorAll(".stat p")[2].textContent = t.statsClients;

  document.querySelector(".section h2").textContent = t.featuredTitle;
  document.querySelector(".section p").textContent = t.featuredDesc;

  document.querySelector(".view-all a").textContent = t.viewAll;

  document.querySelector(".cta h2").textContent = t.ctaTitle;
  document.querySelector(".cta p").textContent = t.ctaText;

  // اتجاه الصفحة
  document.body.dir = currentLang === "ar" ? "rtl" : "ltr";
});





