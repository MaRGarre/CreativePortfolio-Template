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

    "nav.services": "Services",
    "services.title": "Services",
    "services.intro":
      "Here's an overview of everything I can help you with. Get in touch for a personalized quote.",
    "services.cat.brand": "Brand Identity",
    "services.brand.1": "Logo design",
    "services.brand.2": "Brand identity manuals (colors, typography, usage)",
    "services.brand.3": "Corporate stationery (business cards, envelopes, folders...)",
    "services.brand.4": "Naming & visual branding",
    "services.cat.marketing": "Advertising & Marketing",
    "services.marketing.1": "Brochures & flyers (2-sided)",
    "services.marketing.2": "Bifolds & trifolds (4 or 6 panels)",
    "services.marketing.3": "Social media management (Instagram, Facebook, X...)",
    "services.marketing.4": "Print & digital ads",
    "services.marketing.5": "Vehicle signage for businesses",
    "services.cat.stationery": "Stationery & Events",
    "services.stationery.1": "Event invitations (weddings, birthdays, openings...)",
    "services.stationery.2": "Restaurant menus",
    "services.stationery.3": "Merchandise (mugs, t-shirts, stickers...)",
    "services.cat.multimedia": "Multimedia",
    "services.multimedia.1": "WhatsApp/Telegram stickers",
    "services.multimedia.2": "Product mockups",
    "services.multimedia.3": "Video thumbnails",
    "services.cat.editorial": "Editorial Design",
    "services.editorial.1": "Cover design",
    "services.editorial.2": "Layout & typesetting",
    "services.editorial.3": "Magazines",
    "services.editorial.4": "Catalogs",
    "services.cat.illustration": "Illustration",
    "services.illustration.1": "Editorial illustration (books, magazines...)",
    "services.illustration.2": "Social media illustration",
    "services.illustration.3": "Custom portraits (people, pets...)",
    "services.illustration.4": "Children's illustration",
    "services.illustration.5": "Character design & brand mascots",
    "services.cat.digital": "Digital Design",
    "services.digital.1": "Presentations (Canva)",
    "services.digital.2": "Infographics",
    "services.digital.3": "Simple animations for posts",
    "services.digital.4": "Favicons & brand iconography",
    "services.cat.photography": "Photography",
    "services.photography.1": "Photo retouching & editing",
    "services.photography.2": "Social media content sessions",
    "services.photography.3": "Interior/space photography",
    "services.photography.4": "Corporate event photography",
    "services.photography.5": "Editorial photography (books, magazines, posters...)",
    "services.photography.6": "Composition & photo compositing",

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

    "nav.services": "Servicios",
    "services.title": "Servicios",
    "services.intro":
      "Aquí tienes un resumen de todo en lo que puedo ayudarte. Contáctame para un presupuesto personalizado.",
    "services.cat.brand": "Identidad de Marca",
    "services.brand.1": "Diseño de logotipos",
    "services.brand.2": "Manuales de identidad corporativa (colores, tipografías, usos)",
    "services.brand.3": "Papelería corporativa (tarjetas, sobres, carpetas...)",
    "services.brand.4": "Naming y branding visual",
    "services.cat.marketing": "Publicidad y Marketing",
    "services.marketing.1": "Folletos y flyers (a doble cara)",
    "services.marketing.2": "Dípticos y trípticos (4 o 6 caras)",
    "services.marketing.3": "Gestión de redes sociales (Instagram, Facebook, X...)",
    "services.marketing.4": "Anuncios impresos y digitales",
    "services.marketing.5": "Rotulación de vehículos para empresas",
    "services.cat.stationery": "Papelería y Eventos",
    "services.stationery.1": "Invitaciones para eventos (bodas, cumpleaños, inauguraciones...)",
    "services.stationery.2": "Cartas de restaurante",
    "services.stationery.3": "Merchandising (tazas, camisetas, pegatinas...)",
    "services.cat.multimedia": "Multimedia",
    "services.multimedia.1": "Stickers para WhatsApp/Telegram",
    "services.multimedia.2": "Mockups de producto",
    "services.multimedia.3": "Miniaturas para vídeos",
    "services.cat.editorial": "Diseño Editorial",
    "services.editorial.1": "Diseño de portadas",
    "services.editorial.2": "Maquetación",
    "services.editorial.3": "Revistas",
    "services.editorial.4": "Catálogos",
    "services.cat.illustration": "Ilustración",
    "services.illustration.1": "Ilustración editorial (libros, revistas...)",
    "services.illustration.2": "Ilustración para redes sociales",
    "services.illustration.3": "Retratos personalizados (personas, mascotas...)",
    "services.illustration.4": "Ilustración infantil",
    "services.illustration.5": "Diseño de personajes y mascotas de marca",
    "services.cat.digital": "Diseño Digital",
    "services.digital.1": "Presentaciones (Canva)",
    "services.digital.2": "Infografías",
    "services.digital.3": "Animaciones sencillas para publicaciones",
    "services.digital.4": "Favicons e iconografía de marca",
    "services.cat.photography": "Fotografía",
    "services.photography.1": "Retoque y edición fotográfica",
    "services.photography.2": "Sesiones de contenido para redes sociales",
    "services.photography.3": "Fotografía de espacios e interiores",
    "services.photography.4": "Fotografía de eventos corporativos",
    "services.photography.5": "Fotografía editorial (libros, revistas, carteles...)",
    "services.photography.6": "Composición y montaje fotográfico",

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
