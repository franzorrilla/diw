# DIW · Manual de identidad visual
Versión 1.0 · Fran Zorrilla

## Propósito
Una web educativa para observar, experimentar y justificar decisiones de diseño.
Mantener el estilo actual: fondo crema, tinta oscura, amarillo y violeta; tipografía contundente, bordes nítidos y sombras sin desenfoque.
Este manual documenta el diseño propio de DIW. No adopta un estilo concreto de Katagami.

## Valores comunes
La fuente de verdad ejecutable es public/assets/css/estilos.css.
- Fondo: --paper (#faf6eb).
- Texto y bordes: --ink (#171722).
- Énfasis y botones principales: --yellow (#ffdc38).
- Acento: --purple (#6536b8).
- Tarjetas: --surface (#fff), --line y --shadow-card.
- Botones: --button-bg y --button-text. Cambiar ambos si la nueva combinación lo necesita.
- Texto secundario: --muted. Foco: --focus.
- Tipografía: --font-body (system-ui, sans-serif) y --font-label (monospace).
- Cuerpo: 17 px, interlineado 1.6. Títulos grandes adaptativos; etiquetas breves.
- Bordes: 2 px, rectos. Sombras sólidas, sin desenfoque.

## Componentes y composición
Reutilizar .button, .card, .eyebrow, .small y .muted.
La base define la identidad. El CSS de cada página define su distribución, tamaños y estados específicos.
La portada presenta la asignatura completa. La teoría favorece la lectura y los Labs la experimentación.
Las acciones secundarias pueden ser blancas; estados seleccionados oscuros con texto blanco.
No todas las páginas necesitan idéntica distribución ni todos los botones la misma función.
Usar espacios generosos, jerarquía clara y una acción principal reconocible.

## Contenido pedagógico
Los colores de personajes, círculo cromático RYB, muestras y señales son contenido, no marca.
No sustituirlos al cambiar la paleta global. Sus valores permanecen en el HTML/JS o CSS específico del Lab.
Las asociaciones culturales se explican con contexto y excepciones.
No incorporar enlaces a un Lab concreto en la portada general sin encargo.

## Accesibilidad
Mantener foco visible, navegación por teclado y textos legibles; contrastar cada combinación nueva.
No comunicar estados únicamente con color: añadir texto o símbolos.
Conservar adaptación móvil, reducción de movimiento y alternativas al portapapeles.
No añadir animación ni dependencias externas necesarias para reforzar la estética.

## Cómo aplicar a una nueva página
1. Leer este manual y AGENTS.md.
2. Enlazar assets/css/estilos.css con ruta relativa a la página.
3. Cargar después su hoja propia, si necesita distribución específica.
4. Usar las variables comunes en vez de repetir colores de marca.
5. Verificar rutas y JavaScript con python scripts/check_site.py; revisar móvil y teclado cuando haya navegador disponible.

## Cambios globales
Actualizar estilos.css y este manual juntos cuando cambien decisiones de marca.
Un cambio en una variable llega a todas las páginas que la utilizan; los ejemplos didácticos y estados específicos conservan sus reglas.
GitHub Pages publica la carpeta public/ tras las comprobaciones.
