
const recipes = {
  violet:['red','blue'],
  green:['blue','yellow'],
  orange:['yellow','red']
};
const colorNames={red:'ROJO',blue:'AZUL',yellow:'AMARILLO'};
const colorHex={red:'#e53935',blue:'#2f5bea',yellow:'#f2c400'};

let current=0;
let unlocked=0;
let errors=0;
let score=0;
let activeRecipe=null;
let level1State={violet:[],green:[],orange:[]};
let level2Done=0;
let finalDone=0;

const screens=[...document.querySelectorAll('.screen')];
const steps=[...document.querySelectorAll('.step')];
const nextBtn=document.getElementById('nextBtn');
const prevBtn=document.getElementById('prevBtn');
const scoreEl=document.getElementById('score');
const topQuestion=document.getElementById('topQuestion');
const footerHelp=document.getElementById('footerHelp');

const headings=[
  'Nivel 1 · Fabrica los secundarios',
  'Nivel 2 · Fabrica un terciario',
  'Nivel 3 · Encuentra el intruso',
  'Nivel 4 · Sin nombres'
];
const helps=[
  'Reconstruye primero los tres secundarios.',
  'Clasifica los tres resultados según los colores que se mezclan.',
  'Localiza la receta mal clasificada.',
  'Clasifica las mezclas sin ayuda de nombres.'
];

function updateHearts(){
  [1,2,3].forEach(i=>{
    document.getElementById('heart'+i).classList.toggle('lost',i<=errors);
  });
}
function loseError(hintEl,text){
  errors++;
  document.getElementById("errorCount").textContent="Errores: "+errors+(errors>=3?" · Sigue practicando con pistas.":"");
  updateHearts();
  if(hintEl){
    hintEl.textContent=text;
    hintEl.classList.add('show');
  }
}
function addScore(n=1){
  score+=n;
  scoreEl.textContent=score;
}
function go(n){
  if(n<0 || n>unlocked) return;
  current=n;
  screens.forEach((s,i)=>s.classList.toggle('active',i===current));
  steps.forEach((s,i)=>{
    s.classList.toggle('active',i===current);
    s.classList.toggle('locked',i>unlocked);s.disabled=i>unlocked;if(i===current)s.setAttribute('aria-current','step');else s.removeAttribute('aria-current');
  });
  prevBtn.disabled=current===0;
  nextBtn.disabled=current>=unlocked || current===3;
  topQuestion.textContent=headings[current];
  footerHelp.textContent=helps[current];
  const heading=screens[current].querySelector('h2');heading.tabIndex=-1;heading.focus({preventScroll:true});screens[current].scrollTop=0;
}
prevBtn.addEventListener('click',()=>go(current-1));
nextBtn.addEventListener('click',()=>go(current+1));
steps.forEach((s,i)=>s.addEventListener('click',()=>go(i)));

function unlock(n){
  unlocked=Math.max(unlocked,n);
  steps.forEach((s,i)=>{s.classList.toggle('locked',i>unlocked);s.disabled=i>unlocked});
  nextBtn.disabled=current>=unlocked || current===3;
}

/* LEVEL 1 */
document.querySelectorAll('.recipe').forEach(recipe=>{
  recipe.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();recipe.click()}});
  recipe.addEventListener('click',()=>{
    activeRecipe=recipe.dataset.recipe;
    document.querySelectorAll('.recipe').forEach(r=>r.setAttribute('aria-pressed',String(r===recipe)));
  });
});

function renderRecipe(name){
  const recipe=document.querySelector(`.recipe[data-recipe="${name}"]`);
  const slots=[...recipe.querySelectorAll('.slot')];
  const arr=level1State[name];
  slots.forEach((slot,i)=>{
    const c=arr[i];
    slot.textContent=c?colorNames[c]:'?';
    slot.style.background=c?colorHex[c]:'#f6f6f4';
    slot.style.color=(c==='yellow'||!c)?'#111':'#fff';
  });
}
document.querySelectorAll('.pick').forEach(btn=>{
  btn.addEventListener('click',()=>{
    if(!activeRecipe){
      const hint=document.getElementById('hint1');
      hint.textContent='Primero selecciona una receta: violeta, verde o naranja.';
      hint.classList.add('show');
      return;
    }
    let arr=level1State[activeRecipe];
    if(arr.length>=2) arr=[];
    arr.push(btn.dataset.color);
    level1State[activeRecipe]=arr;
    renderRecipe(activeRecipe);
  });
});
document.getElementById('resetLevel1').addEventListener('click',()=>{
  level1State={violet:[],green:[],orange:[]};
  Object.keys(level1State).forEach(renderRecipe);
  document.getElementById('hint1').classList.remove('show');
});

document.getElementById('checkLevel1').addEventListener('click',()=>{
  if(document.body.dataset.l1done==='1') return;
  const wrong=[];
  for(const [name,expected] of Object.entries(recipes)){
    const actual=level1State[name];
    if(actual.length!==2 || !expected.every(c=>actual.includes(c))) wrong.push(name);
  }
  const hint=document.getElementById('hint1');

  if(wrong.length===0){
    if(!document.body.dataset.l1done){
      addScore(3);
      document.body.dataset.l1done='1';
      document.querySelectorAll('.pick').forEach(b=>b.disabled=true);
      document.getElementById('resetLevel1').disabled=true;
      document.getElementById('checkLevel1').disabled=true;
    }
    hint.textContent='Nivel superado. Has reconstruido los tres secundarios a partir de dos primarios.';
    hint.classList.add('show');
    unlock(1);
    nextBtn.disabled=false;
  }else{
    const label=wrong[0]==='violet'?'violeta':wrong[0]==='green'?'verde':'naranja';
    loseError(hint,`Pista: revisa la receta de ${label}. Un secundario debe surgir de dos primarios distintos.`);
  }
});

/* LEVEL 2 */
document.querySelectorAll('.challenge-card').forEach(card=>{
  const buttons=[...card.querySelectorAll('.classbtn')];
  const hint=card.querySelector('.hint');
  buttons.forEach(b=>{
    b.addEventListener('click',()=>{
      if(card.dataset.done==='1') return;
      if(b.dataset.choice==='tertiary'){
        b.classList.add('correct');
        card.dataset.done='1';
        level2Done++;
        addScore(1);
        hint.textContent='Correcto: primario + secundario vecino en RYB = terciario.';
        hint.classList.add('show');
      }else{
        b.classList.add('wrong');
        loseError(hint,'Pista: uno de los dos colores de partida ya es secundario.');
      }
    });
  });
});
document.getElementById('checkLevel2').addEventListener('click',()=>{
  if(level2Done===3){
    unlock(2);
    go(2);
  }else{
    footerHelp.textContent='Aún te falta clasificar algún resultado.';
  }
});

/* LEVEL 3 */
document.querySelectorAll('.intruder').forEach(btn=>{
  btn.addEventListener('click',()=>{
    if(document.body.dataset.l3done==='1') return;
    const hint=document.getElementById('hint3');
    if(btn.dataset.intruder==='true'){
      btn.classList.add('correct');
      document.getElementById('intruderExplanation').classList.add('show');
      document.body.dataset.l3done='1';
      addScore(1);
      unlock(3);
      nextBtn.disabled=false;
    }else{
      btn.classList.add('wrong');
      loseError(hint,'Pista: las tres mezclas de dos primarios sí pertenecen al nivel secundario.');
    }
  });
});

/* LEVEL 4 */
document.querySelectorAll('.final-card').forEach(card=>{
  const expected=card.dataset.final;
  const buttons=[...card.querySelectorAll('.classbtn')];
  const result=card.querySelector('.result-badge');
  buttons.forEach(b=>{
    b.addEventListener('click',()=>{
      if(card.dataset.done==='1') return;
      if(b.dataset.answer===expected){
        b.classList.add('correct');
        result.textContent='Correcto.';
        result.className='result-badge show good';
        card.dataset.done='1';
        finalDone++;
        addScore(1);
        if(finalDone===2) finishGame();
      }else{
        b.classList.add('wrong');
        result.textContent=expected==='secondary'
          ? 'Pista: aquí se mezclan dos primarios.'
          : 'Pista: aquí interviene un primario y un secundario.';
        result.className='result-badge show bad';
        loseError(null,'');
      }
    });
  });
});

function finishGame(){
  const end=document.getElementById('endbox');
  const rankBadge=document.getElementById('rankBadge');
  const rankText=document.getElementById('rankText');
  let rank='Mezclador novato';
  if(errors===0) rank='Maestro cromático';
  else if(errors<=2) rank='Mezclador competente';

  rankBadge.textContent=rank;
  rankText.innerHTML=`Has completado los cuatro niveles con <strong>${score} aciertos</strong> y <strong>${errors} errores</strong>.<br><br>La idea clave: <strong>primario → secundario → terciario</strong> no es una lista para memorizar, sino una estructura de mezcla.`;
  end.style.display='block';
  document.getElementById('rankTitle').tabIndex=-1;document.getElementById('rankTitle').focus();
}

go(0);

function reportText(){return `U02 · LAB 01 · LA PALETA SE HA ROTO
Niveles completados: 4/4
Aciertos: ${score}/9
Errores: ${errors}
Resultado: ${document.getElementById('rankBadge').textContent}
Modelo trabajado: RYB. Dos primarios forman un secundario; un primario con un secundario vecino forma un terciario.`}
document.getElementById('copyReport').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(reportText());document.getElementById('exportStatus').textContent='Copiado. Puedes pegarlo en Classroom.'}catch{document.getElementById('exportStatus').textContent='No se pudo copiar. Descarga el archivo de texto.'}});
document.getElementById('downloadReport').addEventListener('click',()=>{const url=URL.createObjectURL(new Blob([reportText()],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='DIW-U02-Lab01-paleta.txt';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2000)});
