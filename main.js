(()=>{"use strict";new class{constructor(t){if(!t)throw new Error("Элемент не существует");this.element=t,this.listenerofButton()}listenerofButton(){this.element.addEventListener("click",(t=>this.constructor.appearance(t)))}static appearance(t){if(t.target.classList.contains("submit")){const t=document.querySelector(".popovers");t.classList.toggle("active");const e=-(t.offsetTop+1.1*t.offsetHeight);t.style.top=`${e}px`}}}(document)})();