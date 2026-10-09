# DIW · Materiales y actividades
Proyecto de Fran Zorrilla para Diseño de Interfaces Web.

## Contenido
- `public/index.html`: portada general de la asignatura.
- `public/labs/u01-lab01/index.html`: laboratorio de jerarquía con cinco controles y evidencia copiable o descargable para Classroom.
- `public/teoria/seis-principios/index.html`: presentación original de Slides incrustada y seis casos de detectives visuales.
- `public/labs/principios-diseno/index.html`: cinco experimentos de jerarquía visual y conclusión; migrado de Google Sites.
- `public/unidades/u01-composicion/index.html`: presentación de U01 con experimento de jerarquía, sesión de 55 minutos y reflexión exportable.
- `public/unidades/u02-color/index.html`: inicio de U02 · Color, migrado del HTML incrustado; mantiene los enlaces a los Labs de Google Sites.
- `public/labs/color/index.html`: Color bajo sospecha (v1.3).
- `scripts/check_site.py`: comprobaciones de IDs, idioma, rutas locales y sintaxis JavaScript.
- `.github/workflows/pages.yml`: comprueba propuestas y publica los cambios de main.
- `AGENTS.md`: instrucciones permanentes para el agente.

## Activar una vez
En Settings > Pages > Build and deployment > Source, seleccionar **GitHub Actions**.
El repositorio debe tener Actions habilitado. La rama de publicación es main.
Después de incorporar estos archivos, consultar Actions para confirmar que ambos trabajos terminan correctamente.

Direcciones previstas (solo funcionarán tras una publicación correcta):
- https://franzorrilla.github.io/diw/
- https://franzorrilla.github.io/diw/labs/color/

En Google Sites, insertar la segunda dirección por URL, preferiblemente como página completa.
Conservar la ruta para no tener que cambiar la inserción al actualizar el contenido.

## Trabajar con Codex
Pedir un cambio indicando el material. Revisar la propuesta. Incorporar el cambio aprobado a main.
GitHub Actions ejecuta las comprobaciones y, si pasan, publica automáticamente.
Si fallan, la nueva versión no se despliega. Consultar el registro, corregir y volver a enviar.
Para deshacer una actualización, revertir su commit: el nuevo commit activa otra publicación.
No es necesario reescribir el historial ni borrar archivos.

## Verificación y límites
Las comprobaciones automáticas no garantizan calidad pedagógica, contraste, adaptación móvil
ni funcionamiento completo de cada interacción. Probar también navegación, recoloreado,
exportación y portapapeles dentro de Google Sites. El Lab no envía respuestas al docente.
Los HTML funcionan sin compilación ni dependencias de terceros.

## Diseño compartido
- `DESIGN.md`: manual visual para páginas nuevas y cambios posteriores.
- `public/assets/css/estilos.css`: colores, tipografías y componentes comunes.
- `public/assets/css/asignatura.css` y `lab-color.css`: distribución y detalles propios.
Ambas páginas cargan primero la base común. Los colores de los ejercicios permanecen independientes.
Para cambiar los botones principales, editar --button-bg y --button-text en la base y verificar contraste.
Los HTML requieren la carpeta assets: publicar public/ completa o insertar la URL de Pages en Sites.
