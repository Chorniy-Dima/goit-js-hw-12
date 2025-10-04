import{a as v,S as L,i as n}from"./assets/vendor-BSTwZ_tR.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();async function d(r,o){try{return(await v.get("https://pixabay.com/api/",{params:{key:"36689321-8b59aad86c27c2e69221e9297",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:15}})).data}catch(e){throw console.log(e),e}}const u=document.querySelector(".gallery"),h=document.querySelector(".loader"),p=document.querySelector(".load-btn");let b=new L(".gallery-item a",{captions:!0,captionsData:"alt",captionDelay:250});function m(r){const o=r.map(e=>`<div class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
          </a>
          <div class="descr">
            <div class="descr-container">
              <h6 class="pic-title">Likes</h6>
              <p class="pic-txt">${e.likes}</p>
            </div>
            <div class="descr-container">
              <h6 class="pic-title">Views</h6>
              <p class="pic-txt">${e.views}</p>
            </div>
            <div class="descr-container">
              <h6 class="pic-title">Comments</h6>
              <p class="pic-txt">${e.comments}</p>
            </div>
            <div class="descr-container">
              <h6 class="pic-title">Downloads</h6>
              <p class="pic-txt">${e.downloads}</p>
            </div>
          </div>
        </div>`).join("");u.insertAdjacentHTML("beforeEnd",o),b.refresh()}function w(){u.innerHTML=""}function f(){h.classList.remove("hidden")}function y(){h.classList.add("hidden")}function S(){p.classList.remove("hidden")}function g(){p.classList.add("hidden")}const q=document.querySelector(".form"),l=document.querySelector(".form input"),x=document.querySelector(".load-btn");let a=1;q.addEventListener("submit",async r=>{if(r.preventDefault(),a=1,l.value.trim()===""){n.error({title:"",message:"The field cannot be empty",position:"topRight"});return}w(),g(),f();try{const o=await d(l.value,a),e=o.hits;if(e.length===0)n.error({title:"",message:"Sorry, there are no images matching<br> your search query. Please try again!",position:"topRight"});else{m(e);let i=Math.ceil(o.totalHits/15);a<i?S():n.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),a+=1}}catch(o){console.log(o)}finally{y()}});x.addEventListener("click",async()=>{try{f();const r=await d(l.value,a),o=r.hits;m(o),y();let e=Math.ceil(r.totalHits/15);a===e&&(n.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),g());const i=document.querySelector(".gallery-item");if(i){const t=i.getBoundingClientRect();window.scrollBy({top:t.height*2,behavior:"smooth"})}a+=1}catch(r){console.log(r)}});
//# sourceMappingURL=index.js.map
