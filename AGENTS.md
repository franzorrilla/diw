# Materiales DIW de Fran Zorrilla
- Público inicial: alumnado de segundo curso; clases online de 55 minutos.
- Español claro. Objetivos visuales y prácticos; no exigir programación al alumnado.
- Antes de editar, leer la versión actual del repositorio y preservar cambios del usuario.
- Sitio estático sin dependencias externas necesarias. Servir exclusivamente public/.
- Mantener URLs permanentes: public/labs/color/index.html es el Lab de color.
- Nuevos contenidos teóricos pueden ir en public/teoria/<tema>/index.html.
- Preservar adaptación móvil, foco visible, textos accesibles y alternativas al portapapeles.
- Mantener la exportación a Classroom. No añadir cuentas, analítica o bases de datos sin encargo.
- No presentar significados culturales del color ni tendencias del cómic como reglas universales.
- Modelo cromático didáctico RYB; distinguirlo del RGB de las pantallas.
- Mantener fuentes de Marvel, DC, Instagram y X aportadas por el docente.
- No añadir una licencia que el usuario no haya elegido ni atribuirle derechos sobre material ajeno.
- Ejecutar python scripts/check_site.py antes de publicar. Esta comprobación no verifica apariencia ni todos los comportamientos: indicar qué revisión visual/funcional se hizo.
- Una propuesta se trabaja en una rama y se revisa antes de incorporar a main. Respetar una autorización explícita de publicación del usuario.
- main activa Pages tras pasar comprobaciones; nunca publicar secretos ni datos de alumnos.

## Identidad visual compartida
- Leer DESIGN.md antes de crear o modificar cualquier página.
- Todas las páginas enlazan public/assets/css/estilos.css mediante una ruta relativa, antes de su CSS específico.
- Cambiar los valores comunes en estilos.css; no duplicarlos en cada página. El CSS específico organiza el contenido, no redefine los valores de marca.
- Preservar los colores didácticos (círculo RYB, personajes, señales y simuladores), independientes de la paleta de interfaz.
- La portada es de toda la asignatura: no añadir un acceso destacado al Lab de color sin encargo.
