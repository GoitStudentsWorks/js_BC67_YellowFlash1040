import{c as g,s as u,g as h,a as k,i as f,d as v}from"./assets/footer-a13dfadb.js";import{a as w}from"./assets/vendor-bb737cb9.js";const i=document.getElementById("cart-items-list"),S=document.getElementById("delete-all-btn");let r=0;S.addEventListener("click",()=>{g(),u(),p(),d()});function d(){const o=document.getElementById("sum-span");o.innerText=`$${String(r)}`}async function p(){const o=h(),n=[];for(const l of o){const m=await k(l);n.push(m)}const s=document.getElementById("nothing-found-cart"),c=document.querySelector(".delete-all"),e=document.querySelector(".checkout-panel-container"),t=document.querySelector(".cart-sect");if(n.length===0){t.style.display="block",c.style.display="none",i.style.display="none",e.style.display="none",s.style.display="block";return}else t.style.display="flex",c.style.display="flex",i.style.display="block",e.style.display="block",s.style.display="none";$(n)}function $(o){const n=[];r=0;for(const e of o){r+=e.price;const t=document.createElement("li");t.className="cart-products-item";let l=`data-product-id="${e._id}"`;t.innerHTML=`
      <div class="cart-product-img-container">
        <img class="cart-product-img" src="${e.img}" alt="${e.name}" />
      </div>
      <div>
        <h3 class="product-title">${e.name}</h3>
        <ul class="product-properties-list">
          <li class="product-properties-item">
            Category:
            <span class="property-value">${e.category.replaceAll("_"," ")}</span>
          </li>
          <li class="product-properties-item">
            Size: <span class="property-value">${e.size}</span>
          </li>
        </ul>
      
        <span class="price">$${e.price}</span>
      </div>
      <button class="delete-from-cart-btn" ${l}>
        <svg class="delete-from-cart-svg">
          <use href="${f+"#icon-close"}"></use>
        </svg>
      </button>
    `,n.push(t)}r=r.toFixed(2),i.innerHTML="",i.append(...n);const s=document.querySelectorAll("button[data-product-id]");for(const e of s)e.addEventListener("click",c);function c(e){const l=e.currentTarget.getAttribute("data-product-id");v(l),u(),p(),d()}d()}u();p();const y="/js_BC67_YellowFlash1040/images/png/cherry-tomatos-phone.png",B="/js_BC67_YellowFlash1040/images/png/cherry-tomatos-phone@2x.png",I="Cherry tomatos",L=`${f}#icon-close`;function q(){return`
    <div class="checkout-modal-window">
        <picture>
            <source srcset="${y}, ${B} 2x">
  
            <img class="image" src="${y}" alt="${I}" width="145" height="140"/>
        </picture>

        <p class="title">Order success</p>
        <p class="message">Thank you for shopping at Food Boutique. Your order has been received and is now being freshly prepared just for you! Get ready to indulge in nourishing goodness, delivered right to your doorstep. We're thrilled to be part of your journey to better health and happiness.</p>

        <svg class="close-icon" width="22" height="22">
            <use href="${L}"></use>
        </svg>
    </div>
    `}const E=document.querySelector("form.checkout-form");E.addEventListener("submit",C);let a;async function C(o){o.preventDefault();const n=document.querySelector("input#email.mail-field"),s=h();if(g(),x(),await P(n.value,s)===201){const e=q(),t={onClose:F};a=basicLightbox.create(e,t);const l="disableBodyScroll";bodyScrollLock[l](document.body),a.show(),document.querySelector(".checkout-modal-window .close-icon").addEventListener("click",a.close),document.addEventListener("keydown",b)}else console.log("Something went wrong :(")}function x(){const o=document.getElementById("nothing-found-cart"),n=document.querySelector(".delete-all"),s=document.querySelector(".checkout-panel-container"),c=document.querySelector(".cart-sect"),e=document.getElementById("cart-items-list");c.style.display="block",n.style.display="none",e.style.display="none",s.style.display="none",o.style.display="block";const t=document.getElementById("cart-quantity-title");t.innerText="cart (0)";const l=document.getElementById("cart-quantity");l.innerText="cart (0)"}async function P(o,n){const s="https://food-boutique.b.goit.study/api/orders",c=n.map(t=>({productId:t,amount:1})),e={email:o,products:c};try{return(await w.post(s,e)).status}catch(t){return t.response.status}}function F(){const o="enableBodyScroll";bodyScrollLock[o](document.body)}function b(o){o.key==="Escape"&&(a.close(),document.removeEventListener("keydown",b))}
//# sourceMappingURL=commonHelpers.js.map
