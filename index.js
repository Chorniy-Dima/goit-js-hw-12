import{a as m,S as p,i as n}from"./assets/vendor-BSTwZ_tR.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function f(i){return m.get("https://pixabay.com/api/",{params:{key:"36689321-8b59aad86c27c2e69221e9297",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(e=>e.data.hits).catch(e=>{throw console.log(e),e})}const d=document.querySelector(".gallery"),u=document.querySelector(".loader");let h=new p(".gallery-item a",{captions:!0,captionsData:"alt",captionDelay:250});function g(i){const e=i.map(s=>`<div class="gallery-item">
          <a class="gallery-link" href="${s.largeImageURL}">
            <img class="gallery-image" src="${s.webformatURL}" alt="${s.tags}" />
          </a>
          <div class="descr">
            <div class="descr-container">
              <h6 class="pic-title">Likes</h6>
              <p class="pic-txt">${s.likes}</p>
            </div>
            <div class="descr-container">
              <h6 class="pic-title">Views</h6>
              <p class="pic-txt">${s.views}</p>
            </div>
            <div class="descr-container">
              <h6 class="pic-title">Comments</h6>
              <p class="pic-txt">${s.comments}</p>
            </div>
            <div class="descr-container">
              <h6 class="pic-title">Downloads</h6>
              <p class="pic-txt">${s.downloads}</p>
            </div>
          </div>
        </div>`).join("");d.insertAdjacentHTML("afterbegin",e),h.refresh()}function y(){d.innerHTML=""}function v(){u.classList.remove("hidden")}function a(){u.classList.add("hidden")}const L=document.querySelector(".form"),l=document.querySelector(".form input");L.addEventListener("submit",i=>{if(i.preventDefault(),l.value.trim()===""){n.error({title:"",message:"The field cannot be empty",position:"topRight"});return}y(),v(),f(l.value).then(e=>{e.length===0?(a(),n.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})):(a(),g(e))}).catch(e=>{a(),console.log(e)})});
//# sourceMappingURL=index.js.map
