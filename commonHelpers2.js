import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".feedback-form"),a="feedback-form-state";e.addEventListener("input",m),e.addEventListener("submit",o);const t=JSON.parse(localStorage.getItem(a))||{};e.email.value=t.email||"",e.message.value=t.message||"";function m(){(e.email.name==="email"||e.message.name==="message")&&localStorage.setItem(a,JSON.stringify({email:e.email.value.trim(),message:e.message.value.trim()}))}function o(s){s.preventDefault(),r()&&(console.log(l()),i())}function r(){return e.email.value.trim()!==""&&e.message.value.trim()!==""}function l(){return{email:e.email.value.trim(),message:e.message.value.trim()}}function i(){localStorage.removeItem("feedback-form-state"),e.reset()}});
//# sourceMappingURL=commonHelpers2.js.map
