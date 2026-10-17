/* Essay visual interactions, user-triggered only, no analytics or external libraries */
(function(){'use strict';
function all(s){return Array.prototype.slice.call(document.querySelectorAll(s))}
function initControls(selector,fn){
 var bs=all(selector);if(!bs.length)return;
 bs.forEach(function(b){b.addEventListener('click',function(){bs.forEach(function(q){q.setAttribute('aria-pressed',String(q===b))});fn(b.getAttribute('data-value'))})});
 var picked=bs.find(function(b){return b.getAttribute('aria-pressed')==='true'})||bs[0];fn(picked.getAttribute('data-value'));
}
function text(id,v){var x=document.getElementById(id);if(x)x.textContent=v}
function show(id,v){var x=document.getElementById(id);if(x)x.hidden=!v}
var notes={
 ruina:'La misma cianotipia, ahora junto a una arquitectura en ruinas: el montaje activa una lectura sobre duración, huella y conservación. No demuestra por sí mismo una genealogía histórica.',
 secuencia:'La misma cianotipia, ahora junto a un estudio del movimiento: la comparación se desplaza hacia el registro técnico, el tiempo y la serialización. Hay afinidad de procedimiento, no identidad de método.'
};
initControls('[data-montage-choice]',function(v){var second=document.getElementById('montage-pair');if(second)second.src=v==='ruina'?'https://images.metmuseum.org/CRDImages/dp/original/DP828232.jpg':'https://collectionapi.metmuseum.org/api/collection/v1/iiif/268638/631820/main-image';
 text('montage-pair-caption',v==='ruina'?'Piranesi · Villa de Mecenas · ca. 1764 · The Met / CC0':'Muybridge · Boys Playing Leap Frog · 1887 · The Met / CC0');
 text('stage-change',notes[v]);});
var erase=document.getElementById('erase-slider');if(erase){
 function updateErase(){var v=+erase.value;var a=document.getElementById('stroke-original'),b=document.getElementById('stroke-residue'),c=document.getElementById('stroke-second');
 if(a)a.style.opacity=String(Math.max(0.03,1-v/92));if(b)b.style.opacity=String(Math.min(.42,v/190));
 if(c)c.style.opacity=String(Math.max(0,(v-35)/65));text('erase-number',v+'%');
 text('stage-change',v<30?'El primer trazado todavía domina.':v<66?'La imagen pierde trazo, pero conserva una sombra de su recorrido.':'El nuevo gesto se suma al resto que el borrado no eliminó.');}
 erase.addEventListener('input',updateErase);updateErase();
}
initControls('[data-route-choice]',function(v){
 ['plano','gesto','memoria'].forEach(function(s){show('route-'+s,v===s)});
 var d={plano:'El plano conserva una trayectoria y presupone continuidad. La marcha concreta, sus pausas y vacilaciones no se pueden reconstruir solo con esta línea.',gesto:'La caligrafía no representa kilómetros: registra presión y ritmo imaginados. No reemplaza la experiencia ni es documentación topográfica.',memoria:'Lo recordado selecciona obstáculos, distracciones y encuentros. Es otra escritura del recorrido; no un testimonio de una caminata realmente realizada.'};
 text('stage-change',d[v]);
});
initControls('[data-plant-choice]',function(v){
 ['botanico','urbano','gestion'].forEach(function(s){show('plant-'+s,v===s)});
 var d={botanico:'Al mirar la planta como organismo aparecen estructura, hojas, variación y la necesidad de identificar correctamente la especie.',urbano:'Al acercar el plano, la grieta deja de ser fondo. El sustrato, el agua y el mantenimiento condicionan qué puede crecer.',gestion:'El criterio de limpieza cambia la pregunta: ¿qué vegetación se conserva, cuál se retira y quién decide? No toda retirada es arbitraria.'};
 text('stage-change',d[v]);
});
var condens=document.getElementById('condens-slider');if(condens){
 var droplets=document.getElementById('droplets');
 if(droplets){var ns='http://www.w3.org/2000/svg';for(var i=0;i<65;i++){var c=document.createElementNS(ns,'ellipse'),x=135+(i*67%320),y=50+((i*103)%255);c.setAttribute('cx',x);c.setAttribute('cy',y);c.setAttribute('rx',2+(i%4));c.setAttribute('ry',4+(i%7));c.setAttribute('fill','#dae3e4');c.setAttribute('opacity','.7');c.setAttribute('data-i',String(i));droplets.appendChild(c)}}
 function update(){var v=+condens.value;all('#droplets ellipse').forEach(function(el,i){el.style.opacity=i<v*.65?String(.4+(i%4)*.14):'0'});text('condens-percent',v+' / 100');text('stage-change','Densidad gráfica de gotas: '+v+' / 100. Es una visualización didáctica, no una simulación física ni una medición real de humedad. La estructura del cubo permanece.');}
 condens.addEventListener('input',update);update();
}
initControls('[data-joke-choice]',function(v){['complicidad','exposicion','silencio'].forEach(function(s){show('joke-'+s,v===s)});
 var d={complicidad:'Quienes participan pueden responder y detener el juego; la risa no basta para demostrarlo, pero aquí se representa una reciprocidad hipotética.',exposicion:'La atención se concentra en una sola figura, que no comparte el control del gesto. La audiencia puede reír mientras la persona expuesta desea terminar.',silencio:'Una negativa, un silencio o una retirada alteran las condiciones. Persistir a pesar de ello convierte el juego en una presión; la escena no permite diagnosticar intenciones.'};
 text('stage-change',d[v]);});
})();
