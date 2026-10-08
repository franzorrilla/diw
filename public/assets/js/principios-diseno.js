'use strict';
const stepNames = ['Inicio','1. Tamaño','2. Contraste','3. Posición','4. Espacio','5. Competencia','Conclusión'];
const state = {current:0, unlocked:1, completed:new Set(), answered:{}};
const stepList = document.getElementById('stepList');
const questions = [...document.querySelectorAll('.question')];
function renderSteps(){
  stepList.innerHTML='';
  stepNames.forEach((name,i)=>{
    const btn=document.createElement('button');btn.type='button';btn.className='step-btn';
    if(i===state.current){btn.classList.add('active');btn.setAttribute('aria-current','step');}
    btn.disabled=i>state.unlocked;btn.textContent=name;
    btn.onclick=()=>goToStep(i);stepList.appendChild(btn);
  });
  document.getElementById('doneCount').textContent=state.completed.size;
  document.getElementById('points').textContent=Object.keys(state.answered).length;
}
function goToStep(n){
  if(!Number.isInteger(n)||n<0||n>state.unlocked||n>=stepNames.length)return;
  state.current=n;
  document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('active',Number(s.dataset.step)===n));
  if(n===6)state.completed.add(6);
  renderSteps();
  document.querySelector(`.screen[data-step="${n}"] h2`).focus();
}
questions.forEach((qBox,qIndex)=>{
  const options=[...qBox.querySelectorAll('.option')];
  const feedback=qBox.querySelector('.feedback');
  options.forEach((opt,idx)=>opt.addEventListener('click',()=>{
    if(Object.hasOwn(state.answered,qIndex))return;
    state.answered[qIndex]=idx;opt.classList.add('selected');
    options.forEach(o=>o.disabled=true);
    const result=document.createElement('span');result.className='result';
    if(qBox.dataset.kind==='observation'){
      result.textContent='Has observado: '+opt.textContent+'. Contrasta tu recorrido con el de tus compañeros.';
    }else{
      const correct=Number(qBox.dataset.correct);
      options[correct].classList.add('correct');
      result.textContent=idx===correct?'Sí: varias acciones compiten por ser la principal.':'Revisa la prioridad: varias acciones compiten. La explicación describe el problema, aunque tu primera impresión fuese distinta.';
    }
    feedback.prepend(result);feedback.classList.add('show');
    const step=Number(qBox.closest('.screen').dataset.step);
    state.completed.add(step);state.unlocked=Math.max(state.unlocked,step+1);
    document.getElementById('next'+step).disabled=false;renderSteps();
  }));
});
document.getElementById('restart').addEventListener('click',()=>{
  state.unlocked=1;state.completed.clear();state.answered={};
  questions.forEach((q,i)=>{
    q.querySelectorAll('.option').forEach(o=>{o.disabled=false;o.classList.remove('selected','correct');});
    const feedback=q.querySelector('.feedback');feedback.classList.remove('show');feedback.querySelector('.result')?.remove();
    document.getElementById('next'+(i+1)).disabled=true;
  });
  goToStep(0);
});
renderSteps();
