!function(){AOS.init(),(()=>{const e={openModalBtn:document.querySelector("[data-map-modal-open]"),closeModalBtn:document.querySelector("[data-map-modal-close]"),modal:document.querySelector("[data-map-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[data-franch-modal-open]"),closeModalBtn:document.querySelector("[data-franch-modal-close]"),modal:document.querySelector("[data-franch-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e=document.querySelector(".js-mobile-navigation"),o=document.querySelector(".js-open-mobile-navigation"),t=document.querySelector(".js-close-mobile-navigation"),d=()=>{const t="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!t),e.classList.toggle("is-open")};o.addEventListener("click",d),t.addEventListener("click",d),window.matchMedia("(min-width: 768px)").addEventListener("change",(t=>{t.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1))}))})(),$(document).ready((function(){$("a").on("click",(function(e){if(""!==this.hash){e.preventDefault();var o=this.hash;$("html, body").animate({scrollTop:$(o).offset().top},800,(function(){window.location.hash=o}))}}))}));const e={headerEl:document.querySelector(".header-js")};window.onscroll=function(){window.screen.width>=768?scrollY<=70?e.headerEl.classList.remove("header-bg"):e.headerEl.classList.add("header-bg"):scrollY<=120?e.headerEl.classList.remove("header-bg"):e.headerEl.classList.add("header-bg")},$(".one-time").slick({dots:!0,infinite:!0,arrows:!1,speed:300,slidesToShow:1,adaptiveHeight:!0}),$(".autoplay").slick({slidesToShow:1,autoplay:!0,autoplaySpeed:4e3}),(()=>{const e={closeModalBtn:document.querySelector("[hero-modal-close]"),modal:document.querySelector("[hero-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.closeModalBtn.addEventListener("click",o),document.addEventListener("click",(e=>{e.target.matches("[hero-modal-open]")&&o()}))})(),(()=>{const e={openModalBtn:document.querySelector("[about-modal-open]"),closeModalBtn:document.querySelector("[about-modal-close]"),modal:document.querySelector("[about-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),$(document).ready((function(){$(".multiple-items").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0,dotsClass:"slick-dots",swipe:!0,focusOnSelect:!0,mobileFirst:!0,speed:500})})),(()=>{const e={openModalBtn:document.querySelector("[products-modal-open]"),closeModalBtn:document.querySelector("[products-modal-close]"),modal:document.querySelector("[products-modal]")};function o(){e.modal.classList.toggle("products-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[products-modal-red-open]"),closeModalBtn:document.querySelector("[products-modal-red-close]"),modal:document.querySelector("[products-modal-red]")};function o(){e.modal.classList.toggle("products-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[products-modal-yel-open]"),closeModalBtn:document.querySelector("[products-modal-yel-close]"),modal:document.querySelector("[products-modal-yel]")};function o(){e.modal.classList.toggle("products-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})()}();
//# sourceMappingURL=index.f764a445.js.map
