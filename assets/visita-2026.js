/* IVAM video: load external media only after deliberate user interaction. */
(function(){
  "use strict";
  var videos=document.querySelectorAll("[data-ivam-video]");
  videos.forEach(function(holder){
    var id=holder.getAttribute("data-ivam-video")||"";
    if(!/^[A-Za-z0-9_-]{11}$/.test(id))return;
    var button=holder.querySelector("button");
    if(!button)return;
    button.addEventListener("click",function(){
      var iframe=document.createElement("iframe");
      iframe.src="https://www.youtube-nocookie.com/embed/"+encodeURIComponent(id)+"?rel=0";
      iframe.title=holder.getAttribute("data-video-title")||"Vídeo de la exposición, IVAM";
      iframe.width="960";iframe.height="540";
      iframe.loading="lazy";
      iframe.referrerPolicy="strict-origin-when-cross-origin";
      iframe.setAttribute("allow","accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share");
      iframe.allowFullscreen=true;
      iframe.setAttribute("frameborder","0");
      holder.replaceChildren(iframe);
    },{once:true});
  });
})();