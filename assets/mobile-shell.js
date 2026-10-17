/* Shared mobile editorial dock. No network calls or analytics. */
(function(){
  'use strict';
  if(!window.matchMedia || !document.body || !document.createElement) return;
  var mobile=window.matchMedia('(max-width: 850px)');
  var items=[
    ['Inicio','/'],['Obra','/obra.html'],['Mesa de trazo','/mesa-de-trazo.html'],['Investigaciones','/investigaciones.html'],
    ['Buscar','/buscar.html'],['Atlas','/atlas.html'],['Libro','/estetica-del-umbral.html'],
    ['Diccionario','/diccionario.html'],['Práctica','/practica.html'],
    ['Cuaderno','/notas.html'],['Imágenes','/imagenes.html'],['Mapa','/mapa.html'],
    ['Sobre / contacto','/sobre.html'],['Derechos / colofón','/colofon.html']
  ];
  var path=location.pathname.replace(/\/$/,'/')||'/';
  var esc=function(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});};
  /* A note is within Cuaderno, but the linked index is not the current page. */
  var active=function(h){
    if(path===h) return ' aria-current="page"';
    if(h==='/notas.html' && path.indexOf('/notas/')===0) return ' aria-current="location"';
    return '';
  };
  var a=function(title,url,icon){return '<a href="'+url+'"'+active(url)+'><span class="dock-icon" aria-hidden="true">'+icon+'</span>'+esc(title)+'</a>';};
  var dock=document.createElement('nav');
  dock.className='mobile-dock';dock.setAttribute('aria-label','Navegación móvil');
  dock.innerHTML=a('Inicio','/','⌂')+a('Obra','/obra.html','✳')+a('Cuaderno','/notas.html','≡')
    +'<details class="mobile-more"><summary><span class="dock-icon" aria-hidden="true">☷</span>Explorar</summary>'
    +'<div class="mobile-drawer"><div class="mobile-drawer-head">Diego Bravo — Todas las secciones</div>'
    +'<div class="mobile-drawer-links">'+items.map(function(x){return '<a href="'+x[1]+'"'+active(x[1])+'>'+esc(x[0])+' ↗</a>';}).join('')+'</div>'
    +'<div class="mobile-drawer-foot"><a href="/feed.xml">RSS del cuaderno ↗</a></div></div></details>';
  document.body.appendChild(dock);
  document.documentElement.classList.add('mobile-shell-enabled');
  var more=dock.querySelector('details');
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'&&more.open){more.open=false;more.querySelector('summary').focus();}
  });
  document.addEventListener('pointerdown',function(e){
    if(more.open&&!more.contains(e.target))more.open=false;
  });
  window.addEventListener('resize',function(){if(!mobile.matches&&more.open)more.open=false;});
})();