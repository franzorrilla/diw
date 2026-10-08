# DIW · Citron Counter
Versión 2.0 · Adaptación educativa del lenguaje de Katagami.

## Referencia
https://katagami.ai/language/en-019ef966-92a9-77f3-b14b-549b1067eac0
Imagen de portada: generación integrada de imágenes, dirección Vitrine Studio de Katagami.
El encargo adapta un estilo comercial a una asignatura: las llamadas a la acción conducen al aprendizaje.

## Valores comunes
La fuente de verdad es public/assets/css/estilos.css, enlazada antes del CSS de cada página.
- Fondo #FCFCF8, superficies #FFFFFF, planos secundarios #F4F3EC.
- Tinta #0B0C0A, lima #C7F23A, verde petróleo #063F3D, halo #E7FF6E.
- Texto secundario #626159: más oscuro que el original para mejorar contraste.
- Schibsted Grotesk para títulos, Afacad para cuerpo, Spline Sans Mono para etiquetas.
- Alternativas locales: Google Fonts mejora la apariencia, pero no es necesario para leer ni usar la web.
- Cuerpo 19 px; texto auxiliar 16 px; etiquetas breves 11–12 px.
- Paneles 22 px, campos 10 px y botones de cápsula. Líneas cálidas de 1 px.
- Sombras suaves solo en paneles principales. Sin tramas, franjas de color ni sombras sólidas.

## Composición y componentes
Espacio libre y separadores antes que tarjetas. Imagen dominante junto al texto de portada, una columna en móvil.
El lima identifica acciones principales y opciones seleccionadas; estas añaden borde interior para no depender solo del color.
El petróleo identifica orientación y confianza. No añadir un tercer acento de marca.
Reutilizar .button, .card, .eyebrow, .small y .muted. El CSS específico organiza sin redefinir la marca.
La portada presenta toda la asignatura; no destacar un Lab concreto sin encargo.

## Contenido pedagógico
Las paletas, personajes, círculo RYB, señales y simuladores son contenido, no marca.
Sus colores originales permanecen independientes, aunque incluyan tonos ajenos a Citron Counter.
Mantener textos, navegación, fuentes aportadas y exportación a Classroom.

## Accesibilidad y verificación
Foco visible petróleo (lima sobre petróleo), controles de al menos 44 px y reducción de movimiento.
Mantener teclado, adaptación móvil y alternativas al portapapeles.
Ejecutar scripts/check_site.py y revisar portada y Lab en móvil y escritorio cuando el navegador esté disponible.
Publicar public/ completa. Las inserciones por URL se actualizan al publicar; el HTML copiado y otros alojamientos no.
