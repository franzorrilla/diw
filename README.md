# DIW · Materiales y actividades
Proyecto de Fran Zorrilla para Diseño de Interfaces Web.

## Contenido
- `public/index.html`: índice de materiales.
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
