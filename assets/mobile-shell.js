/* Navegación móvil deliberadamente breve: cuatro puertas visibles. Sin seguimiento ni servicios externos. */
(function(){
  'use strict';
  if(!window.matchMedia||!document.body)return;
  var mq=window.matchMedia('(max-width: 850px)');
  var route=location.pathname||'/';
  var encode=function(v){return String(v).replace(/[&<>"']/g,function(ch){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch];});};
  function current(url){
    if(route===url)return ' aria-current="page"';
    if(url==='/notas.html'&&route.indexOf('/notas/')===0)return ' aria-current="location"';
    if(url==='/investigaciones.html'&&['/estetica-del-umbral.html','/atlas.html','/diccionario.html','/practica.html','/mapa.html','/constelaciones.html','/fisura-documento.html'].indexOf(route)!==-1)return ' aria-current="location"';
    if(url==='/obra.html'&&route==='/mesa-de-trazo.html')return ' aria-current="location"';
    return '';
  }
  function navlink(label,url,mark){return '<a href="'+url+'"'+current(url)+'><span class="dock-icon" aria-hidden="true">'+encode(mark)+'</span>'+encode(label)+'</a>';}
  var extras=[['Investigación','/investigaciones.html'],['Sobre / contacto','/sobre.html'],['Buscar','/buscar.html'],['Mesa de trazo','/mesa-de-trazo.html']];
  var dock=document.createElement('nav');dock.className='mobile-dock';dock.setAttribute('aria-label','Navegación móvil');
  dock.innerHTML=navlink('Inicio','/','⌂')+navlink('Obra','/obra.html','✳')+navlink('Cuaderno','/notas.html','≡')
    +'<details class="mobile-more"><summary><span class="dock-icon" aria-hidden="true">☷</span>Más</summary>'
    +'<div class="mobile-drawer"><div class="mobile-drawer-head">Otras formas de entrar</div>'
    +'<div class="mobile-drawer-links">'+extras.map(function(p){return '<a href="'+p[1]+'"'+current(p[1])+'>'+encode(p[0])+' ↗</a>';}).join('')+'</div>'
    +'<div class="mobile-drawer-foot">Libro, Atlas y Diccionario están dentro de Investigación.</div></div></details>';
  document.body.appendChild(dock);
  document.documentElement.classList.add('mobile-shell-enabled');
  var menu=dock.querySelector('details');
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&menu.open){menu.open=false;menu.querySelector('summary').focus();}});
  document.addEventListener('pointerdown',function(e){if(menu.open&&!menu.contains(e.target))menu.open=false;});
  window.addEventListener('resize',function(){if(!mq.matches)menu.open=false;});
})();