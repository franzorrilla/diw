'use strict';
const example = document.getElementById('example');
const feedback = document.getElementById('feedback');
const controls = [...document.querySelectorAll('[data-change]')];
const observations = {
  hierarchy: 'Tamaños: el título gana énfasis y la acción se distingue del texto explicativo.',
  space: 'Espacio: la descripción, los datos prácticos y la acción forman grupos separados.',
  alignment: 'Alineación: un borde común facilita seguir la información entre grupos.'
};
function updateExample() {
  const active = [];
  controls.forEach(button => {
    const selected = button.getAttribute('aria-pressed') === 'true';
    example.classList.toggle('with-' + button.dataset.change, selected);
    if (selected) active.push(observations[button.dataset.change]);
  });
  feedback.textContent = active.length ? active.join(' ') : 'Sin cambios: compara qué destaca, qué parece relacionado y por dónde recorre tu mirada la tarjeta.';
}
controls.forEach(button => button.addEventListener('click', () => {
  button.setAttribute('aria-pressed', button.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
  updateExample();
}));
document.getElementById('reset').addEventListener('click', () => {
  controls.forEach(button => button.setAttribute('aria-pressed', 'false'));
  updateExample();
});
const answer = document.getElementById('answer');
const exportStatus = document.getElementById('export-status');
function getAnswer() {
  const value = answer.value.trim();
  if (!value) { exportStatus.textContent = 'Escribe tu reflexión antes de copiarla o descargarla.'; answer.focus(); return ''; }
  return 'U01 · Composición, percepción y jerarquía\n\n' + value;
}
document.getElementById('copy').addEventListener('click', async () => {
  const text = getAnswer(); if (!text) return;
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Portapapeles no disponible');
    await navigator.clipboard.writeText(text);
    exportStatus.textContent = 'Texto copiado. Pégalo en la tarea de Classroom y añade tu captura.';
  } catch {
    answer.focus(); answer.select();
    exportStatus.textContent = 'El navegador no permite copiar automáticamente. El texto está seleccionado: cópialo con el menú del dispositivo o Ctrl+C / Cmd+C. También puedes descargarlo.';
  }
});
document.getElementById('download').addEventListener('click', () => {
  const text = getAnswer(); if (!text) return;
  const url = URL.createObjectURL(new Blob([text], {type:'text/plain;charset=utf-8'}));
  const link = document.createElement('a'); link.href = url; link.download = 'U01-mi-decision-visual.txt';
  document.body.appendChild(link); link.click(); link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  exportStatus.textContent = 'Descarga solicitada. Adjunta el archivo y tu captura en la tarea de Classroom.';
});
