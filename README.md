# PORTFOLIO ARTÍSTICO - MARINA GARRE

Encuentra aquí el proyecto desplegado: [https://margarre.github.io/CreativePortfolio-Template/](https://margarre.github.io/CreativePortfolio-Template/)

## DESCRIPCIÓN DEL PROYECTO

Este proyecto es un portfolio artístico personal desarrollado como parte de la asignatura de "Diseño de aplicaciones móviles y webapp". Se trata de una página web responsive que muestra proyectos creativos con un enfoque en la accesibilidad, animaciones fluidas y efectos visuales interactivos.

El portfolio está diseñado con una estética moderna que combina elementos visuales llamativos, como los efectos "glow" en color rojo, con una navegación intuitiva, ofreciendo una experiencia de usuario agradable tanto en dispositivos móviles como de escritorio.

## CARACTERÍSTICAS PRINCIPALES

- **Diseño Responsive**: Adaptable a diferentes tamaños de pantalla (móvil, tablet, escritorio).
- **Animaciones de Scroll**: Implementadas con `IntersectionObserver` para un rendimiento óptimo.
- **Efectos Visuales Interactivos**: 
  - Mouse trail de color rojo con efecto de desvanecimiento.
  - Tarjetas de proyecto con hover effects.
  - Revelado progresivo de contenido.
- **Accesibilidad**: 
  - Estructura HTML semántica.
  - Soporte para `prefers-reduced-motion`.
  - Enlaces de salto para navegación por teclado.
  - Contraste de colores adecuado.
- **Navegación Fluida**: Menú de navegación fijo con enlaces a secciones.

## TECNOLOGÍAS UTILIZADAS

- **HTML5**: Estructura semántica del contenido.
- **CSS3**: 
  - Diseño modular con múltiples archivos CSS (reset, base, components, layout, navigation, theme).
  - Flexbox y CSS Grid.
  - Custom properties (variables CSS).
  - Media queries para responsive design.
- **JavaScript Vanilla**: 
  - IntersectionObserver API.
  - Canvas API para efectos visuales.
  - Event listeners optimizados.
- **Google Fonts**: Roboto, IBM Plex Mono, PT Serif, Audiowide.
- **ImageKit**: Para la optimización y entrega de imágenes.

## ESTRUCTURA DEL PROYECTO

CreativePortfolio-Template/
├── index.html              # Página principal
├── 404.html               # Página de error personalizada
├── README.md              # Este archivo
├── assets/
│   ├── css/
│   │   ├── index.css      # Punto de entrada de estilos
│   │   ├── reset.css      # Reset de estilos del navegador
│   │   ├── base.css       # Estilos base
│   │   ├── components.css # Componentes reutilizables
│   │   ├── layout.css     # Sistema de layout
│   │   ├── navigation.css # Estilos del menú
│   │   └── theme.css      # Variables de tema y colores
│   └── js/
│       └── main.js        # Lógica de la aplicación
└── docs/
    ├── plan.md            # Plan del proyecto
    ├── project-brief.md   # Brief del proyecto
    ├── project-inspiration.md
    └── project.yaml

## FUNCIONALIDADES IMPLEMENTADAS

### 1. Animaciones de Scroll
Utilizando `IntersectionObserver` para detectar cuando los elementos entran en el viewport y activar animaciones de revelado.

### 2. Mouse Trail Effect
Efecto visual que dibuja un trazo rojo que sigue el cursor del mouse usando Canvas API. El trazo se desvanece gradualmente después de un período de inactividad.

### 3. Navegación Responsive
Sistema de navegación que se adapta a diferentes tamaños de pantalla y proporciona feedback visual al usuario.

### 4. Grid de Proyectos
Visualización de proyectos en formato de tarjetas con efectos hover y transiciones suaves.

## DIFICULTADES Y APRENDIZAJES

### Mouse Trail Effect
Una de las principales dificultades fue implementar el **efecto de trail del mouse de color rojo**. Los desafíos específicos fueron:

- **Sincronización del Canvas**: Inicialmente, el canvas no se redimensionaba correctamente al cambiar el tamaño de la ventana, lo que causaba que el trail no se dibujara en las coordenadas correctas.

- **Gestión de Performance**: El primer intento utilizaba muchos más puntos, lo que causaba problemas de rendimiento. Fue necesario limitar el array de puntos a 30 elementos máximo (`maxTrail = 30`) y optimizar la función de dibujo usando `requestAnimationFrame`.

- **Efecto de Desvanecimiento**: Lograr un fade out suave cuando el mouse permanecía inactivo fue complicado. La solución implicó:
  - Trackear el tiempo de inactividad usando `performance.now()`.
  - Calcular un `fadeProgress` gradual.
  - Aplicar este progreso a la opacidad de cada segmento del trail.
  - Mantener el efecto visual coherente con diferentes velocidades de movimiento.

- **Cálculo de Opacidad**: Combinar la opacidad base (que aumenta a lo largo del trail) con el efecto de fade out global requirió experimentar con diferentes fórmulas hasta encontrar `baseAlpha * (1 - fadeProgress)`.

Finalmente, tras varias iteraciones y pruebas, se logró un efecto fluido y visualmente atractivo que mejora la experiencia del usuario sin comprometer el rendimiento.

### Animaciones con IntersectionObserver
Entender el concepto del `IntersectionObserver` y sus ventajas sobre los event listeners tradicionales fue un proceso de aprendizaje importante. La clave fue comprender:
- Los parámetros `root`, `rootMargin` y `threshold`.
- La importancia de dejar de observar elementos una vez revelados (`unobserve`).
- El respeto por las preferencias de accesibilidad del usuario.

### Navegación Responsive
Aunque se implementó un diseño responsive para la barra de navegación, existe una **limitación importante en pantallas muy pequeñas**. A partir de cierto ancho de pantalla (aproximadamente en dispositivos móviles pequeños o con zoom alto), los enlaces de navegación ("Home", "About Me", "Projects", "Contact") comienzan a perderse o a salirse del viewport.

Este problema se debe a que la navegación actual utiliza un diseño horizontal sin un menú hamburguesa alternativo para pantallas pequeñas. En futuras iteraciones, sería recomendable:
- Implementar un menú hamburguesa para dispositivos móviles.
- Considerar un diseño de navegación colapsable.
- Ajustar el tamaño de fuente y espaciado de forma más agresiva en breakpoints pequeños.
- Explorar soluciones como un menú desplegable o un drawer lateral.

## DISEÑO Y ESTÉTICA

El portfolio utiliza una paleta de colores moderna con toques de rojo saturado como color de acento. Las fuentes se han elegido cuidadosamente para crear jerarquía visual y mantener legibilidad:
- **Roboto**: Texto general.
- **IBM Plex Mono**: Elementos de código o técnicos.
- **PT Serif**: Títulos y detalles elegantes.
- **Audiowide**: Logo y elementos destacados.

## DESPLIEGUE

El proyecto está desplegado en GitHub Pages y se actualiza automáticamente con cada push a la rama principal.

**URL del proyecto**: [https://margarre.github.io/CreativePortfolio-Template/]
(https://margarre.github.io/CreativePortfolio-Template/)

## LICENCIA

Este proyecto está bajo la licencia especificada en el archivo LICENSE.

## AUTORA

**Marina Garre Bandera**  
- GitHub: [@MaRGarre](https://github.com/MaRGarre)
- ArtStation: [MaRowo](https://www.artstation.com/margarre)
- Instagram: [@marowo_ink](https://www.instagram.com/marowo_ink)

*Proyecto desarrollado para UDIT | Universidad del Diseño y la Tecnología, para la asignatura de "Diseño de aplicaciones móviles y webapp"*