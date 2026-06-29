
// ── SVG ICONS for services ──
const ICONS = {
  tooth:`<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C9 2 7 4.5 7 7c0 5 2.5 8 3 11.5.2.8.7 1.5 2 1.5s1.8-.7 2-1.5C14.5 15 17 12 17 7c0-2.5-2-5-5-5z"/></svg>`,
  implant:`<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="1.7" stroke-linecap="round"><line x1="12" y1="2" x2="12" y2="22"/><path d="M8 6h8M9 10h6M10 14h4"/></svg>`,
  sparkle:`<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="1.7" stroke-linecap="round"><path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"/></svg>`,
  braces:`<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="1.7" stroke-linecap="round"><path d="M6 4C4 4 3 5 3 7v3c0 1.5-1 2-1 2s1 .5 1 2v3c0 2 1 3 3 3"/><path d="M18 4c2 0 3 1 3 3v3c0 1.5 1 2 1 2s-1 .5-1 2v3c0 2-1 3-3 3"/></svg>`,
  scalpel:`<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="1.7" stroke-linecap="round"><path d="M20 5L9 16M6 19l-3-3 3-3 9-9 3 3z"/></svg>`,
  veneer:`<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="1.7" stroke-linecap="round"><rect x="3" y="8" width="18" height="12" rx="3"/><path d="M7 8V6a2 2 0 014 0v2M13 8V6a2 2 0 014 0v2"/></svg>`,
  child:`<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="7" r="4"/><path d="M6 21v-1a6 6 0 0112 0v1"/><path d="M9 14l1 3 2-2 2 2 1-3"/></svg>`,
  clean:`<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="1.7" stroke-linecap="round"><path d="M3 6l9-4 9 4v6c0 5-4 9-9 10C7 21 3 17 3 12V6z"/><path d="M9 12l2 2 4-4"/></svg>`,
  restore:`<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="1.7" stroke-linecap="round"><path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"/></svg>`,
  endo:`<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="1.7" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  crown:`<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M2 19l3-10 4 5 3-9 3 9 4-5 3 10H2z"/></svg>`,
  scan:`<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="1.7" stroke-linecap="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h1v1M14 18h1M18 14h1M21 21h-4v-4"/></svg>`,
};
 
const SVCS=[
  {ic:'tooth',n:'Терапия',d:'Лечение кариеса, пульпита и периодонтита',det:'Применяем материалы ведущих производителей. Лечим кариес любой сложности.',ind:'Кариес, сколы, изменение цвета.',eq:'Микроскоп Karl Zeiss, лампы VALO.',p:'от 12 000 ₸'},
  {ic:'implant',n:'Имплантация',d:'Восстановление утраченных зубов с гарантией на результат',det:'Импланты Nobel Biocare и Straumann с гарантией на весь срок жизни.',ind:'Отсутствие зубов.',eq:'3D-томограф, хирургический навигатор.',p:'от 180 000 ₸'},
  {ic:'sparkle',n:'Отбеливание',d:'Безопасное профессиональное отбеливание зубов',det:'Philips Zoom WhiteSpeed — результат за один визит, до 10 тонов.',ind:'Потемнение эмали.',eq:'Лампа Philips Zoom.',p:'от 60 000 ₸'},
  {ic:'braces',n:'Ортодонтия',d:'Исправление прикуса и выравнивание зубов',det:'Работаем с системами Damon и элайнерами Invisalign.',ind:'Кривые зубы, нарушение прикуса.',eq:'3D-сканер iTero.',p:'от 250 000 ₸'},
  {ic:'scalpel',n:'Хирургия',d:'Удаление зубов любой сложности',det:'Все виды удалений, включая ретинированные восьмёрки.',ind:'Разрушенные зубы.',eq:'Пьезотом, хирургический мотор.',p:'от 20 000 ₸'},
  {ic:'veneer',n:'Виниры',d:'Тонкие керамические накладки',det:'Emax и Ultra-thin меняют форму и цвет без значительного препарирования.',ind:'Дефекты формы и цвета.',eq:'Внутриротовой сканер.',p:'от 85 000 ₸'},
  {ic:'child',n:'Детская',d:'Лечение детей с 1 года без страха и боли',det:'Особый подход, игровая зона, закись азота при необходимости.',ind:'Молочные зубы, профилактика.',eq:'Детское кресло, лазер.',p:'от 8 000 ₸'},
  {ic:'clean',n:'Гигиена',d:'Профессиональная чистка AIR-FLOW и ультразвуком',det:'Удаляем камень, налёт и пигментацию. Результат — сразу.',ind:'Налёт, камень, кровоточивость.',eq:'Ультразвуковой скалер, AIR-FLOW.',p:'от 25 000 ₸'},
  {ic:'crown',n:'Протезирование',d:'Коронки, мосты и съёмные протезы',det:'Цельнокерамические и диоксид-циркониевые коронки. Гарантия 5 лет.',ind:'Разрушение зуба, отсутствие зубов.',eq:'CAD/CAM центр.',p:'от 55 000 ₸'},
  {ic:'endo',n:'Эндодонтия',d:'Лечение каналов под микроскопом',det:'Работаем под увеличением Karl Zeiss. Сохраняем зубы.',ind:'Пульпит, периодонтит.',eq:'Эндомотор, микроскоп.',p:'от 35 000 ₸'},
  {ic:'scan',n:'Диагностика',d:'3D КТ и цифровой снимок за 5 минут',det:'Полная диагностика: 3D-томография, витальные тесты, пародонтограмма.',ind:'Боль, плановый осмотр.',eq:'КТ Sirona Galileos 3D.',p:'от 10 000 ₸'},
  {ic:'restore',n:'Реставрация',d:'Эстетическое восстановление зубов',det:'Реставрируем сколы и трещины с художественной точностью.',ind:'Сколы, трещины.',eq:'Система VITA.',p:'от 18 000 ₸'},
];
 
const svcEl=document.getElementById('svcScroll');
SVCS.forEach(s=>{
  const c=document.createElement('div');
  c.className='svc-card';
  c.innerHTML=`
    <div class="svc-icon-wrap">${ICONS[s.ic]}</div>
    <div class="svc-name">${s.n}</div>
    <div class="svc-desc">${s.d}</div>
    <button class="svc-plus" onclick="toggleSvc(this,event)">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
    </button>
    <div class="svc-expand">
      <p>${s.det}</p>
      <p><b style="color:#1E293B">Показания:</b> ${s.ind}</p>
      <p><b style="color:#1E293B">Оборудование:</b> ${s.eq}</p>
      <div class="svc-price">${s.p}</div>
      <a href="https://wa.me/77001234567?text=%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20${encodeURIComponent(s.n)}" class="svc-book">Записаться</a>
    </div>`;
  svcEl.appendChild(c);
});
 
function toggleSvc(btn,e){
  e.stopPropagation();
  const exp=btn.nextElementSibling;
  const isOpen=btn.classList.contains('open');
  btn.classList.toggle('open',!isOpen);
  const svg=btn.querySelector('path');
  if(!isOpen){
    exp.style.display='block';
    exp.style.maxHeight='0';exp.style.overflow='hidden';
    exp.style.transition='max-height .35s ease';
    requestAnimationFrame(()=>{exp.style.maxHeight=exp.scrollHeight+'px'});
    setTimeout(()=>{exp.style.maxHeight='none'},400);
  } else {
    exp.style.maxHeight=exp.scrollHeight+'px';
    requestAnimationFrame(()=>{exp.style.maxHeight='0'});
    setTimeout(()=>{exp.style.display='none';exp.style.maxHeight='none'},360);
  }
}
 
function scrollSvc(dx){document.getElementById('svcScroll').scrollBy({left:dx,behavior:'smooth'})}
 
// ── DOCTORS ──
const DOCS=[
  {p:'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80&auto=format&fit=crop&crop=face',n:'Алия Сейткалиева',s:'Стоматолог-терапевт',e:'Опыт работы 12+ лет',bio:'Специалист по эстетической реставрации. Работает с материалами Ivoclar и 3M.'},
  {p:'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80&auto=format&fit=crop&crop=face',n:'Дмитрий Волков',s:'Имплантолог',e:'Опыт работы 15+ лет',bio:'Сертифицированный имплантолог Nobel Biocare. Более 2000 установленных имплантов.'},
  {p:'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80&auto=format&fit=crop&crop=face',n:'Зарина Байжанова',s:'Ортодонт',e:'Опыт работы 9+ лет',bio:'Специалист по системам Invisalign и Damon. Корректирует прикус любой сложности.'},
  {p:'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80&auto=format&fit=crop&crop=face',n:'Руслан Нурмагамбетов',s:'Ортопед',e:'Опыт работы 11+ лет',bio:'Протезирование на имплантах. Виниры E.max и коронки из диоксида циркония.'},
  {p:'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80&auto=format&fit=crop&crop=face',n:'Карина Ли',s:'Детский стоматолог',e:'Опыт работы 8+ лет',bio:'Лечит детей с 1 года без страха. Специалист по профилактике и раннему лечению.'},
  {p:'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80&auto=format&fit=crop&crop=face',n:'Артём Сидоров',s:'Эндодонтист',e:'Опыт работы 13+ лет',bio:'Лечение каналов под микроскопом Karl Zeiss. Сохраняет зубы любой сложности.'},
];
const docEl=document.getElementById('docScroll');
const dotsEl=document.getElementById('docDots');
DOCS.forEach((d,i)=>{
  const c=document.createElement('div');c.className='doc-card';
  c.innerHTML=`<img class="doc-photo" src="${d.p}" loading="lazy" alt="${d.n}"><div class="doc-info"><div class="doc-name">${d.n}</div><div class="doc-spec">${d.s}</div><div class="doc-exp">${d.e}</div><div class="doc-bio">${d.bio||''}</div><a href="https://wa.me/77001234567?text=%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BA%20${encodeURIComponent(d.n)}" class="doc-book">Записаться к врачу</a></div>`;
  docEl.appendChild(c);
  const dot=document.createElement('div');dot.className='dot'+(i===0?' active':'');
  dotsEl.appendChild(dot);
});
docEl.addEventListener('scroll',()=>{
  const idx=Math.round(docEl.scrollLeft/(docEl.scrollWidth/DOCS.length));
  document.querySelectorAll('#docDots .dot').forEach((d,i)=>d.classList.toggle('active',i===idx));
},{passive:true});
 
// ── MENU ──
function openMenu(){document.getElementById('mobileMenu').classList.add('open');document.body.style.overflow='hidden'}
function closeMenu(){document.getElementById('mobileMenu').classList.remove('open');document.body.style.overflow=''}
 
// ── RIPPLE ──
function doRipple(e){
  const btn=e.currentTarget;
  const w=document.createElement('span');w.className='rpl-w';
  const r=Math.max(btn.clientWidth,btn.clientHeight);
  const rect=btn.getBoundingClientRect();
  w.style.cssText=`width:${r}px;height:${r}px;left:${e.clientX-rect.left-r/2}px;top:${e.clientY-rect.top-r/2}px`;
  btn.appendChild(w);setTimeout(()=>w.remove(),600);
}
 
 
// ── FAQ ──
function toggleFaq(qEl){
  const item=qEl.parentElement;
  const ans=item.querySelector('.faq-a');
  const isOpen=item.classList.contains('open');
  // close all
  document.querySelectorAll('.faq-item.open').forEach(i=>{
    i.classList.remove('open');
    i.querySelector('.faq-a').style.maxHeight='0';
  });
  if(!isOpen){
    item.classList.add('open');
    ans.style.maxHeight=ans.scrollHeight+'px';
  }
}
 
// ── STATS COUNTER ──
function animateCount(el){
  const target=parseFloat(el.dataset.target);
  const suffix=el.dataset.suffix||'';
  const isFloat=target%1!==0;
  const dur=1600;
  const step=16;
  const steps=dur/step;
  let cur=0;
  const inc=target/steps;
  const t=setInterval(()=>{
    cur+=inc;
    if(cur>=target){cur=target;clearInterval(t)}
    el.textContent=(isFloat?cur.toFixed(1):Math.floor(cur))+suffix;
  },step);
}
const statsObs=new IntersectionObserver(es=>{
  es.forEach(e=>{
    if(e.isIntersecting){
      e.target.querySelectorAll('[data-target]').forEach(animateCount);
      statsObs.unobserve(e.target);
    }
  });
},{threshold:.3});
const statsBlock=document.querySelector('#stats');
if(statsBlock)statsObs.observe(statsBlock);
 
// ── FADE UP ──
const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');io.unobserve(e.target)}})},{threshold:.08});
document.querySelectorAll('.fu').forEach(el=>io.observe(el));