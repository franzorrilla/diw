# U03 · Diseño Centrado en el Usuario

Material nuevo para DAW2, basado en la presentación aportada por Fran:
https://docs.google.com/presentation/d/1r-YXwpcHwxg9DN2yRa346SH609Qk8SGW6FQemktcZ_E/edit

## Decisiones de continuidad

Se revisaron las portadas publicadas de U01 (composición) y U02 (color), el chat «Adoptar estilo visual compartido», DESIGN.md y la hoja compartida. Se conserva Citron Counter. La numeración nueva es U03; no se reemplaza la página antigua «U03 Usabilidad + Accesibilidad» ni sus contenidos.

No se trasladan a las páginas las notas de plantilla o instrucciones de Zoom de la presentación. Los ejemplos comerciales históricos no se presentan como diagnósticos actuales. Los casos de tutorías, los seis supuestos y el simulador son adaptaciones didácticas nuevas. Se matiza que UI/UX/IxD se solapan y que menos clics no prueban mejor usabilidad.

## Correspondencia con la presentación

| Recurso | Contenido de origen | Actividad / evidencia |
| --- | --- | --- |
| Portada | Mapa UX/UI, usabilidad y fases DCU | Tres perspectivas, mapa y ruta docente |
| LAB 01 | UX antes/durante/después, UI, interacción y experiencias diseñadas/accidentales | Seis situaciones con feedback; análisis de una experiencia |
| LAB 02 | Siete factores de Peter Morville | Auditoría argumentada, incertidumbre y prioridad |
| LAB 03 | Modelos mentales/conceptuales, mapeo y feedback | Simulador de luces A/B, registro de acciones y transferencia a web |
| LAB 04 | Fase de análisis y comienzo del diseño | Entrevista, hallazgo, requisito comprobable, flujo y boceto |
| LAB 05 | Prototipos, pruebas, validación e iteración | Reserva simulada A/B, medición y observación, propuesta de mejora |

## Secuencia propuesta

Tres sesiones online de 55 minutos, sin exigir código al alumnado:
1. Apertura 5 + LAB 01 20 + LAB 02 25 + puesta en común 5.
2. Recuperación 5 + LAB 03 25 + primeros 25 del LAB 04.
3. Completar LAB 04 10 + LAB 05 40 + cierre 5.

Los LAB 04 y 05 pueden usar papel, formas y texto en una herramienta visual. El prototipo integrado es una alternativa disponible, no un sustituto obligatorio del boceto del alumnado. La entrevista simulada se etiqueta como tal. Evitar recopilar datos personales.

## Valoración formativa

Valorar análisis, diseño, validación e iteración. Para cada uno: pendiente (no aparece), en proceso (afirmación sin evidencia), logrado (justificado), sólido (además contrasta alternativas y reconoce límites). No hay ponderación ni calificación automática: las decide el docente.

LAB 01: UI, IxD, UX, UI, IxD, UX son los focos esperados. Aceptar una alternativa bien argumentada cuando explique otro alcance. LAB 02: útil tiene evidencia favorable; ubicable y accesible presentan problemas; creíble requiere revisar datos y confianza; usable, deseable y valioso necesitan más evidencia. La respuesta razonada importa más que seleccionar una etiqueta.

LAB 03: A mapea 1→inferior derecha, 2→superior izquierda, 3→inferior izquierda, 4→superior derecha. B usa posición y etiquetas. No interpretar la mejora del segundo intento como evidencia causal: hay aprendizaje. LAB 05: A omite información y recuperación deliberadamente; B añade detalles y cambio de cita. No es una prueba A/B experimental: se usa para aprender a observar, controlar el orden y reconocer límites.

## Incrustar en Google Sites

Las rutas de Pages parten de `https://franzorrilla.github.io/diw/`:
- `unidades/u03-dcu/`
- `labs/dcu-experiencias/`
- `labs/dcu-facetas/`
- `labs/dcu-mapeo/`
- `labs/dcu-investigar/`
- `labs/dcu-validar/`

En Google Sites, crear una página nueva «U03 Diseño Centrado en el Usuario» e insertar por URL la portada; los laboratorios se abren desde ella. También pueden crearse cinco subpáginas con cada URL. Preferir inserción de página completa; en bloques, dar altura suficiente y probar navegación y exportación. La inserción por URL recibe futuras actualizaciones de estilos.css y de contenido.

La presentación conserva los permisos de Google del documento original. Hay enlace directo y carga diferida. El entorno incrustado puede limitar portapapeles o descarga: se ofrece copia manual; abrir por URL en otra pestaña es otra alternativa.

Las respuestas solo viven en memoria: no se almacenan en localStorage ni se envían. Se pierden al cerrar/recargar/navegar fuera. Exportar antes. El informe incluye campos, intentos de LAB 01, acciones de LAB 03 y mediciones registradas de LAB 05; las capturas se adjuntan por separado en Classroom.

## Archivos y comprobaciones

`public/assets/css/dcu.css` y `public/assets/js/dcu.js` sirven a seis páginas. La marca sigue en `public/assets/css/estilos.css`; las reglas se documentan en DESIGN.md.

Ejecutar `python scripts/check_site.py` y `node --check public/assets/js/dcu.js`. Comprobar en navegador selección y feedback, casos con error/acierto, luces A/B y reinicio, formularios e informe, reserva vacía, reserva correcta, cambio, cronómetro y registro. Revisar escritorio y móvil. No afirmar conformidad WCAG completa a partir de estas comprobaciones.
