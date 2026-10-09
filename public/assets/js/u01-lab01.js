'use strict';
const byId=id=>document.getElementById(id);
const tabs=[...document.querySelectorAll('[role="tab"]')];
const panels=[byId('panel-lab'),byId('panel-evidence')];
function show(i,focusPanel=false){
 if(i!==0&&i!==1)return;
 tabs.forEach((tab,j)=>{tab.setAttribute('aria-selected',String(i===j));tab.tabIndex=i===j?0:-1;panels[j].hidden=i!==j;});
 if(focusPanel)panels[i].querySelector('h2').focus();
}
tabs.forEach((tab,i)=>{
 tab.addEventListener('click',()=>show(i));
 tab.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight'||e.key==='ArrowLeft')next=1-i;if(e.key==='Home')next=0;if(e.key==='End')next=1;if(next!==undefined){e.preventDefault();show(next);tabs[next].focus();}});
});
byId('toEvidence').addEventListener('click',()=>show(1,true));byId('back').addEventListener('click',()=>show(0,true));
function selected(name){return document.querySelector(`input[name="${name}"]:checked`).value;}
function settings(){return {size:Number(byId('size').value),space:Number(byId('space').value),contrast:selected('contrast'),weight:selected('weight'),position:selected('position')};}
function update(){
 const s=settings(),cta=byId('cta'),target=byId('target');
 cta.style.padding=`${Math.round(s.size*.72)}px ${s.size}px`;cta.style.fontSize=`${0.72+s.size/50}rem`;cta.style.fontWeight=s.weight;
 cta.style.background=s.contrast==='high'?'#111':'#b8b8b8';cta.style.color='#fff';target.style.padding=`${s.space}px`;
 cta.style.display='block';cta.style.width='fit-content';cta.style.marginLeft=s.position==='center'?'auto':'0';cta.style.marginRight=s.position==='center'?'auto':'0';
 byId('sizeValue').textContent=s.size;byId('spaceValue').textContent=s.space+' px';byId('labFeedback').hidden=true;
}
document.querySelectorAll('.control input').forEach(input=>input.addEventListener(input.type==='range'?'input':'change',update));
function checkLab(){
 const s=settings();const notes=[s.contrast==='high'?'Contraste: el texto blanco sobre fondo oscuro se distingue más que en el gris inicial.':'Contraste: el texto blanco sobre gris claro sigue siendo difícil de leer. Prueba el contraste alto.',`Tamaño: nivel ${s.size} de 24. Compara su peso con «Descargar programa», sin perder legibilidad ni desbordar el espacio.`,`Espacio: ${s.space} px alrededor del bloque. Observa si ayuda a separar la acción del resto.`,s.weight==='900'?'Peso: la variante más fuerte puede añadir énfasis; su efecto depende de la fuente.':'Peso: mantienes la negrita inicial.',s.position==='center'?'Posición: has centrado la acción dentro de su tarjeta. Comprueba si encaja con el recorrido; centrar no es una mejora automática.':'Posición: la acción se alinea a la izquierda dentro de su tarjeta. Valora su relación con el texto.', 'No hay una combinación ganadora: pide a otra persona que identifique la acción principal y justifica tus decisiones.'];
 const f=byId('labFeedback');f.textContent=notes.join('\n\n');f.style.whiteSpace='pre-line';f.hidden=false;
}
byId('check').addEventListener('click',checkLab);
byId('reset').addEventListener('click',()=>{
 byId('size').value=14;byId('space').value=14;
 for(const [name,value] of Object.entries({contrast:'low',weight:'700',position:'left'}))document.querySelectorAll(`input[name="${name}"]`).forEach(r=>r.checked=r.value===value);
 update();
});
function evidence(){
 const answers=[1,2,3,4].map(n=>byId('q'+n).value.trim());
 const missing=answers.findIndex(a=>!a);
 if(missing!==-1){byId('exportStatus').textContent=`Completa la respuesta ${missing+1} antes de exportar.`;byId('q'+(missing+1)).focus();return '';}
 const s=settings();return 'U01 · Lab 01 · Laboratorio + evidencia\n\nConfiguración: tamaño '+s.size+'; espacio '+s.space+' px; contraste '+(s.contrast==='high'?'alto':'bajo')+'; peso '+s.weight+'; posición '+(s.position==='center'?'centrada':'izquierda')+'.\n\n'+answers.map((a,i)=>(i+1)+'. '+a).join('\n\n');
}
byId('copy').addEventListener('click',async()=>{
 byId('manualCopy').hidden=true;const text=evidence();if(!text)return;
 try{if(!navigator.clipboard?.writeText)throw new Error('No disponible');await navigator.clipboard.writeText(text);byId('exportStatus').textContent='Respuestas copiadas. Pégalas en Classroom y añade tu captura.';}
 catch{byId('manualCopy').hidden=false;byId('exportText').value=text;byId('exportText').focus();byId('exportText').select();byId('exportStatus').textContent='No se pudo copiar automáticamente. Tienes el texto completo seleccionado debajo; también puedes descargarlo.';}
});
byId('download').addEventListener('click',()=>{
 const text=evidence();if(!text)return;const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='U01-Lab01-evidencia.txt';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);byId('exportStatus').textContent='Descarga solicitada. Adjunta el archivo y tu captura en Classroom.';
});
update();
