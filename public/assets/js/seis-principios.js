'use strict';
const cases = [
 {title:'Una agenda a trompicones',question:'Las citas tienen la misma importancia, pero los huecos entre ellas cambian sin criterio. ¿Qué principio trabajarías primero para crear una secuencia regular?',hint:'Fíjate en la secuencia y en la repetición de los intervalos.',why:'Ritmo: repetir intervalos coherentes ayuda a construir una secuencia. Después puedes introducir una variación con una intención concreta.'},
 {title:'Todo el peso a un lado',question:'El objetivo es una composición estable. Un bloque enorme concentra el peso a la izquierda y dos notas mínimas quedan a la derecha. ¿Qué relación revisarías primero?',hint:'No necesitas copiar un lado en el otro: busca una distribución de pesos.',why:'Balance: puedes redistribuir tamaño, posición o espacio para compensar los pesos. El equilibrio no exige simetría.'},
 {title:'Tres jefes para una tarea',question:'La tarea principal es reservar una plaza. Las tres acciones reciben el mismo tratamiento. ¿Qué principio usarías para dar protagonismo a la reserva?',hint:'La pregunta es qué acción merece destacar, no qué color te gusta.',why:'Énfasis: establece una acción principal reconocible y deja las secundarias disponibles con menos protagonismo.'},
 {title:'La referencia se ha comido el título',question:'La referencia interna es secundaria, pero su tamaño domina sobre el nombre del taller. ¿Qué principio describe directamente esta desproporción?',hint:'Compara las dimensiones del dato secundario y del título.',why:'Escala: el tamaño relativo asigna peso visual. Ajustar esa relación puede devolver protagonismo al nombre del taller.'},
 {title:'La web de las tres familias',question:'Las tarjetas tienen el mismo nivel y función, pero cada una usa un lenguaje formal distinto. ¿Qué principio trabajarías para que se perciban como parte del mismo conjunto?',hint:'Observa la relación entre tipografías, formas y tratamientos.',why:'Armonía: compartir criterios visuales hace reconocible una familia. No hace falta que todos sus elementos sean idénticos.'},
 {title:'El club del aviso repetido',question:'La persona solo necesita fecha, plazas y acceso a la reserva. Los reclamos repetidos ocupan buena parte de la pantalla. ¿Qué principio aplicarías al eliminar ruido sin perder información útil?',hint:'Quita obstáculos a la tarea, no los datos necesarios para decidir.',why:'Simplicidad: elimina redundancias y adornos que compiten con la tarea. Conserva la información y las acciones necesarias.'}
];
let current=0;const solved=new Set();
const byId=id=>document.getElementById(id);
const options=[...document.querySelectorAll('[data-answer]')];
function render(focus=false){
 const c=cases[current];byId('case-count').textContent=`Caso ${current+1} de ${cases.length}`;
 byId('case-title').textContent=c.title;byId('case-question').textContent=c.question;byId('hint').textContent=c.hint;byId('hint-box').open=false;
 document.querySelectorAll('[data-scene]').forEach((s,i)=>s.hidden=i!==current);
 options.forEach((b,i)=>{b.disabled=solved.has(current);b.setAttribute('aria-pressed',String(solved.has(current)&&i===current));});
 byId('previous').disabled=current===0;byId('next').disabled=!solved.has(current)||current===cases.length-1;
 byId('progress').textContent=`${solved.size} de ${cases.length} casos resueltos`;
 byId('feedback').textContent=solved.has(current)?'Caso resuelto. '+c.why:'Observa la maqueta y selecciona un principio.';
 byId('finish').hidden=solved.size!==cases.length;
 if(focus)byId('case-title').focus();
}
options.forEach(button=>button.addEventListener('click',()=>{
 if(solved.has(current))return;
 if(Number(button.dataset.answer)===current){solved.add(current);render();}
 else{byId('feedback').textContent='Buena hipótesis, pero busca la pista principal del enunciado. '+cases[current].hint+' Puedes volver a intentarlo.';}
}));
byId('next').addEventListener('click',()=>{if(solved.has(current)&&current<cases.length-1){current++;render(true);}});
byId('previous').addEventListener('click',()=>{if(current>0){current--;render(true);}});
byId('restart').addEventListener('click',()=>{current=0;solved.clear();render(true);});
render();
