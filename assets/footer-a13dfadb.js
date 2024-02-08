import{a as c}from"./vendor-bb737cb9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();r()||u();function r(){return JSON.parse(localStorage.getItem("in-cart"))}function u(e=[]){localStorage.setItem("in-cart",JSON.stringify(e))}function k(e){const s=r();s.includes(e)||u([...s,e])}function P(){u([])}function q(e){const s=r();u(s.filter(n=>n!==e))}function E(){const e=document.getElementById("cart-quantity");e&&(e.innerText=`cart (${r().length})`);const s=document.getElementById("cart-quantity-title");s&&(s.innerText=`cart (${r().length})`)}c.defaults.baseURL="https://food-boutique.b.goit.study/api/";function M(e){return c.get("products",{params:e})}async function O(){return(await c.get("products/categories")).data}async function W(e){return(await c.get(`products/${e}`)).data}const p="/js_BC67_YellowFlash1040/images/svg/icons.svg",d="/js_BC67_YellowFlash1040/images/png/vegetables-basket-phone.png",h="/js_BC67_YellowFlash1040/images/png/vegetables-basket-phone@2x.png",b="/js_BC67_YellowFlash1040/images/png/vegetables-basket-tablet.png",y="/js_BC67_YellowFlash1040/images/png/vegetables-basket-tablet@2x.png",w="Vegetables-basket",v=`${p}#icon-close`;function _(){return`
    <div class="footer-modal-window">
        <p class="title">Thanks for subscribing for <span class="title-span">new</span> products</p>
        <p class="message">We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.</p>

        
        <picture>
            <source srcset="${d}, ${h} 2x">

            <source media="(min-width: 768px)" srcset="${b}, ${y} 2x">
  
            <img class="image" src="${d}" alt="${w}" width="335" height="144"/>
        </picture>

        <svg class="close-icon" width="22" height="22">
            <use href="${v}"></use>
        </svg>
    </div>
    `}const L=`${p}#icon-close`;function S(){return`
    <div class="footer-error-modal-window">
        <p class="title">This <span class="title-span">email address</span> has already been entered</p>
        <p class="message">You have already subscribed to our new products. Watch for offers at the mailing address.</p>

        <svg class="close-icon" width="22" height="22">
            <use href="${L}"></use>
        </svg>
    </div>
    `}const m=document.querySelector("form.subscribe-form");m.addEventListener("submit",x);let l;async function x(e){e.preventDefault();const n={email:document.querySelector("input.subscribe-form-email-field").value};m.reset();const i=await $(n);let t,o;i===201?(t=_(),o=".footer-modal-window .close-icon"):(t=S(),o=".footer-error-modal-window .close-icon");const a={onClose:C};l=basicLightbox.create(t,a);const g="disableBodyScroll";bodyScrollLock[g](document.body),l.show(),document.querySelector(o).addEventListener("click",l.close),document.addEventListener("keydown",f)}function C(){const e="enableBodyScroll";bodyScrollLock[e](document.body)}function f(e){e.key==="Escape"&&(l.close(),document.removeEventListener("keydown",f))}async function $(e){const s="https://food-boutique.b.goit.study/api/subscription";try{return(await c.post(s,e)).status}catch(n){return n.response.status}}export{W as a,O as b,P as c,q as d,k as e,M as f,r as g,p as i,E as s};
//# sourceMappingURL=footer-a13dfadb.js.map
