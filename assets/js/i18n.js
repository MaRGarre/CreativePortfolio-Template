// ==========================================================================
// LANGUAGE SWITCHER (EN / ES)
// ==========================================================================
// Every translatable piece of text lives in the `translations` dictionary
// below, keyed by the string used in each element's data-i18n attribute.
// data-i18n        -> element.innerHTML
// data-i18n-placeholder -> element.placeholder
// data-i18n-aria    -> element aria-label attribute
//
// The chosen language is stored in localStorage on the visitor's own
// browser (per-visitor, not tied to any one machine), so it works the
// same wherever this site ends up hosted.
// ==========================================================================

const translations = {
  en: {
    "meta.title": "Portfolio Artístico Marina Garre",
    "meta.description":
      "Marina Garre — Freelance illustrator and graphic designer. Traditional and digital illustration, graphic design, and photography portfolio.",

    "nav.logo": "ARTISTIC PORTFOLIO",
    "nav.toggleAria": "Open navigation menu",
    "nav.home": "Home",
    "nav.about": "About Me",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    "hero.subtitle": "Freelance Artist",
    "hero.cta": "View My Work",
    "hero.scroll": "Scroll",

    "about.title": "About Me",
    "about.text":
      "I've been drawing for about 7 years now, both for fun and to keep improving my skills. I studied Graphic Design and Illustration, and I love creating characters, exploring different styles, and making fanart. My goal is to grow as an artist and eventually work in illustration and concept art.",
    "studies.title": "Studies",
    "studies.completed": "Completed",

    "projects.title": "Featured Projects",
    "projects.filtersAria": "Project filters",
    "projects.filter.all": "All",
    "projects.filter.traditional": "Traditional Art",
    "projects.filter.digital": "Digital Art",
    "projects.filter.graphic": "Graphic Design",
    "projects.filter.photography": "Photography",

    "proj-itomori-title": "\"Itomori (Kimi No Na Wa)\"",
    "proj-itomori-desc": "Graphite on paper.",
    "proj-itomori-aria": "Project: Itomori (Kimi No Na Wa), graphite drawing",
    "proj-objectilike-title": "\"Object I Like\"",
    "proj-objectilike-desc": "Ink on paper.",
    "proj-objectilike-aria": "Project: Object I Like, ink drawing",
    "proj-marmarina-title": "\"MaR & Marina\"",
    "proj-marmarina-desc": "Graphite on paper.",
    "proj-marmarina-aria": "Project: MaR & Marina, graphite drawing",
    "proj-eastside-title": "\"Eastside (Sayra Splatoon)\"",
    "proj-eastside-desc": "Graphite on paper.",
    "proj-eastside-aria": "Project: Eastside (Sayra Splatoon), graphite drawing",
    "proj-shy-title": "\"Do you like being a good person!?\"",
    "proj-shy-desc": "Procreate fanart.",
    "proj-shy-aria": "Project: Do you like being a good person!?, Procreate fanart",
    "proj-shine-title": "\"Shines on its own\"",
    "proj-shine-desc": "Procreate fanart.",
    "proj-shine-aria": "Project: Shines on its own, Procreate fanart",
    "proj-selfportrait-title": "\"MaR Self-Portrait\"",
    "proj-selfportrait-desc": "Procreate self-portrait.",
    "proj-selfportrait-aria": "Project: MaR Self-Portrait, Procreate self-portrait",
    "proj-heartsound-title": "\"The sound of the heart\"",
    "proj-heartsound-desc": "Procreate fanart.",
    "proj-heartsound-aria": "Project: The sound of the heart, Procreate fanart",
    "proj-magazine-title": "\"Photography Magazine\"",
    "proj-magazine-desc": "Photoshop magazine.",
    "proj-magazine-aria": "Project: Photography Magazine, Photoshop layout",
    "proj-exhibitionposter-title": "\"Photographic Exhibition Poster\"",
    "proj-exhibitionposter-desc": "Photoshop poster.",
    "proj-exhibitionposter-aria":
      "Project: Photographic Exhibition Poster, Photoshop poster",
    "proj-gameposters-title":
      "\"Video Game Posters Based on the Fundamentals of Graphic Design\"",
    "proj-gameposters-desc": "Procreate posters.",
    "proj-gameposters-aria":
      "Project: Video Game Posters Based on the Fundamentals of Graphic Design, Procreate posters",
    "proj-hotwheels-title":
      "\"Product photo Hotwheels x Initial D collaboration\"",
    "proj-hotwheels-desc": "Procreate and Photoshop poster.",
    "proj-hotwheels-aria":
      "Project: Product photo Hotwheels x Initial D collaboration, Procreate and Photoshop poster",
    "proj-civicfront34-title": "\"Dreams Come True — Front Three-Quarter\"",
    "proj-civicfront34-desc":
      "Canon EOS2000D and Photoshop car photoshoot, front three-quarter angle.",
    "proj-civicfront34-aria":
      "Project: Dreams Come True — Front Three-Quarter View, car photography",
    "proj-civicrear-title": "\"Dreams Come True — Rear\"",
    "proj-civicrear-desc":
      "Canon EOS2000D and Photoshop car photoshoot, rear angle.",
    "proj-civicrear-aria":
      "Project: Dreams Come True — Rear View, car photography",
    "proj-civicfront-title": "\"Dreams Come True — Front\"",
    "proj-civicfront-desc":
      "Canon EOS2000D and Photoshop car photoshoot, front angle.",
    "proj-civicfront-aria":
      "Project: Dreams Come True — Front View, car photography",
    "proj-civicrear34-title": "\"Dreams Come True — Rear Three-Quarter\"",
    "proj-civicrear34-desc":
      "Canon EOS2000D and Photoshop car photoshoot, rear three-quarter angle.",
    "proj-civicrear34-aria":
      "Project: Dreams Come True — Rear Three-Quarter View, car photography",

    "stay.title": "Stay Connected",
    "stay.text":
      "Follow me for all my work, and be the first to know when I release a new project.<br />I'd also love for you to check out my full gallery on my ArtStation profile.",

    "contact.title": "Contact",
    "contact.text":
      "I'm currently open to commissions, freelance projects, or collaborations.<br />If you're interested in working together, please don't hesitate to message me!",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",

    "footer.copyright": "© 2025 Marina Garre — Artistic Portfolio.",
    "footer.backToTop": "Back to top",
  },

  es: {
    "meta.title": "Portfolio Artístico Marina Garre",
    "meta.description":
      "Marina Garre — Ilustradora y diseñadora gráfica freelance. Portfolio de ilustración tradicional y digital, diseño gráfico y fotografía.",

    "nav.logo": "PORTFOLIO ARTÍSTICO",
    "nav.toggleAria": "Abrir menú de navegación",
    "nav.home": "Inicio",
    "nav.about": "Sobre Mí",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",

    "hero.subtitle": "Artista Freelance",
    "hero.cta": "Ver Mi Trabajo",
    "hero.scroll": "Desplázate",

    "about.title": "Sobre Mí",
    "about.text":
      "Llevo unos 7 años dibujando, tanto por diversión como para seguir mejorando. Estudié Diseño Gráfico e Ilustración, y me encanta crear personajes, explorar distintos estilos y hacer fanart. Mi objetivo es seguir creciendo como artista y acabar trabajando en ilustración y concept art.",
    "studies.title": "Estudios",
    "studies.completed": "Completado",

    "projects.title": "Proyectos Destacados",
    "projects.filtersAria": "Filtros de proyectos",
    "projects.filter.all": "Todos",
    "projects.filter.traditional": "Arte Tradicional",
    "projects.filter.digital": "Arte Digital",
    "projects.filter.graphic": "Diseño Gráfico",
    "projects.filter.photography": "Fotografía",

    "proj-itomori-title": "\"Itomori (Kimi No Na Wa)\"",
    "proj-itomori-desc": "Grafito sobre papel.",
    "proj-itomori-aria": "Proyecto: Itomori (Kimi No Na Wa), dibujo a grafito",
    "proj-objectilike-title": "\"Un Objeto Que Me Gusta\"",
    "proj-objectilike-desc": "Tinta sobre papel.",
    "proj-objectilike-aria": "Proyecto: Object I Like, dibujo a tinta",
    "proj-marmarina-title": "\"MaR & Marina\"",
    "proj-marmarina-desc": "Grafito sobre papel.",
    "proj-marmarina-aria": "Proyecto: MaR & Marina, dibujo a grafito",
    "proj-eastside-title": "\"Eastside (Sayra Splatoon)\"",
    "proj-eastside-desc": "Grafito sobre papel.",
    "proj-eastside-aria": "Proyecto: Eastside (Sayra Splatoon), dibujo a grafito",
    "proj-shy-title": "\"¿Te Gusta Ser Buena Persona?!\"",
    "proj-shy-desc": "Fanart hecho en Procreate.",
    "proj-shy-aria": "Proyecto: Do you like being a good person!?, fanart hecho en Procreate",
    "proj-shine-title": "\"Brilla Con Luz Propia\"",
    "proj-shine-desc": "Fanart hecho en Procreate.",
    "proj-shine-aria": "Proyecto: Shines on its own, fanart hecho en Procreate",
    "proj-selfportrait-title": "\"Autorretrato de MaR\"",
    "proj-selfportrait-desc": "Autorretrato hecho en Procreate.",
    "proj-selfportrait-aria": "Proyecto: MaR Self-Portrait, autorretrato hecho en Procreate",
    "proj-heartsound-title": "\"El Sonido del Corazón\"",
    "proj-heartsound-desc": "Fanart hecho en Procreate.",
    "proj-heartsound-aria": "Proyecto: The sound of the heart, fanart hecho en Procreate",
    "proj-magazine-title": "\"Revista de Fotografía\"",
    "proj-magazine-desc": "Revista maquetada en Photoshop.",
    "proj-magazine-aria": "Proyecto: Photography Magazine, maquetación hecha en Photoshop",
    "proj-exhibitionposter-title": "\"Cartel de Exposición Fotográfica\"",
    "proj-exhibitionposter-desc": "Póster diseñado en Photoshop.",
    "proj-exhibitionposter-aria":
      "Proyecto: Photographic Exhibition Poster, póster diseñado en Photoshop",
    "proj-gameposters-title":
      "\"Carteles de Videojuegos Basados en los Fundamentos del Diseño Gráfico\"",
    "proj-gameposters-desc": "Pósters hechos en Procreate.",
    "proj-gameposters-aria":
      "Proyecto: Video Game Posters Based on the Fundamentals of Graphic Design, pósters hechos en Procreate",
    "proj-hotwheels-title":
      "\"Foto de Producto: Colaboración Hotwheels x Initial D\"",
    "proj-hotwheels-desc": "Póster hecho con Procreate y Photoshop.",
    "proj-hotwheels-aria":
      "Proyecto: Product photo Hotwheels x Initial D collaboration, póster hecho con Procreate y Photoshop",
    "proj-civicfront34-title": "\"Dreams Come True — Frontal Tres Cuartos\"",
    "proj-civicfront34-desc":
      "Sesión de fotos de coche con Canon EOS2000D y Photoshop, ángulo frontal tres cuartos.",
    "proj-civicfront34-aria":
      "Proyecto: Dreams Come True — vista frontal tres cuartos, fotografía de coche",
    "proj-civicrear-title": "\"Dreams Come True — Trasera\"",
    "proj-civicrear-desc":
      "Sesión de fotos de coche con Canon EOS2000D y Photoshop, ángulo trasero.",
    "proj-civicrear-aria":
      "Proyecto: Dreams Come True — vista trasera, fotografía de coche",
    "proj-civicfront-title": "\"Dreams Come True — Frontal\"",
    "proj-civicfront-desc":
      "Sesión de fotos de coche con Canon EOS2000D y Photoshop, ángulo frontal.",
    "proj-civicfront-aria":
      "Proyecto: Dreams Come True — vista frontal, fotografía de coche",
    "proj-civicrear34-title": "\"Dreams Come True — Trasera Tres Cuartos\"",
    "proj-civicrear34-desc":
      "Sesión de fotos de coche con Canon EOS2000D y Photoshop, ángulo trasero tres cuartos.",
    "proj-civicrear34-aria":
      "Proyecto: Dreams Come True — vista trasera tres cuartos, fotografía de coche",

    "stay.title": "Mantente Conectado",
    "stay.text":
      "Sígueme para ver todo mi trabajo y entérate antes que nadie de mis nuevos proyectos.<br />Además, échale un vistazo a mi galería completa en mi perfil de ArtStation.",

    "contact.title": "Contacto",
    "contact.text":
      "Estoy abierta a encargos, proyectos freelance o colaboraciones.<br />Si te interesa que trabajemos juntos, no dudes en escribirme.",
    "contact.name": "Nombre",
    "contact.email": "Correo electrónico",
    "contact.message": "Mensaje",
    "contact.send": "Enviar Mensaje",

    "footer.copyright": "© 2025 Marina Garre — Portfolio Artístico.",
    "footer.backToTop": "Volver arriba",
  },
};

const LANG_STORAGE_KEY = "portfolioLang";

function setLanguage(lang) {
  const dict = translations[lang] || translations.en;

  document.documentElement.lang = lang;
  document.title = dict["meta.title"];
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute("content", dict["meta.description"]);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
  });

  document.querySelectorAll(".lang-option").forEach((opt) => {
    opt.classList.toggle("active", opt.dataset.lang === lang);
  });

  const currentLabel = document.querySelector(".lang-current");
  if (currentLabel) currentLabel.textContent = lang.toUpperCase();

  localStorage.setItem(LANG_STORAGE_KEY, lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem(LANG_STORAGE_KEY);
  setLanguage(savedLang === "es" ? "es" : "en");

  const toggleBtn = document.getElementById("langToggleBtn");
  const dropdown = document.getElementById("langDropdown");

  function closeDropdown() {
    dropdown.classList.remove("open");
    toggleBtn.setAttribute("aria-expanded", "false");
  }

  function openDropdown() {
    dropdown.classList.add("open");
    toggleBtn.setAttribute("aria-expanded", "true");
  }

  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.contains("open") ? closeDropdown() : openDropdown();
  });

  document.querySelectorAll(".lang-option").forEach((opt) => {
    opt.addEventListener("click", () => {
      setLanguage(opt.dataset.lang);
      closeDropdown();
    });
  });

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target) && e.target !== toggleBtn) closeDropdown();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDropdown();
  });
});
