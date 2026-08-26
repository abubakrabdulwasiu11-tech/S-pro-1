const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".menu-overlay");
const closeBtn = document.querySelector(".close-menu");

menuToggle.addEventListener("click", () => {

    mobileMenu.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";

});

closeBtn.addEventListener("click", closeMenu);

overlay.addEventListener("click", closeMenu);

function closeMenu(){

    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";

}
// ======================================
// SKYE-VIEW COLLEGE WEBSITE
// Main JavaScript File
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================
      HERO SLIDER
    =====================================*/

    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    let currentSlide = 0;

    function showSlide(index) {
        if (!slides.length) return;

        slides.forEach(slide => {
            slide.classList.remove("active");
        });

        slides[index].classList.add("active");
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function previousSlide() {
        currentSlide =
            (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    if (nextBtn) nextBtn.addEventListener("click", nextSlide);

    if (prevBtn) prevBtn.addEventListener("click", previousSlide);

    if (slides.length > 0) {
        showSlide(currentSlide);
        setInterval(nextSlide, 5000);
    }

    /*=====================================
      MOBILE MENU
    =====================================*/

    const menu = document.querySelector(".mobile-menu");
    const overlay = document.querySelector(".menu-overlay");
    const openMenu = document.querySelector(".menu-toggle");
    const closeMenu = document.querySelector(".close-menu");

    function openSidebar() {

        if(menu) menu.classList.add("active");

        if(overlay) overlay.classList.add("active");

        document.body.style.overflow = "hidden";
    }

    function closeSidebar() {

        if(menu) menu.classList.remove("active");

        if(overlay) overlay.classList.remove("active");

        document.body.style.overflow = "";
    }

    if(openMenu){
        openMenu.addEventListener("click", openSidebar);
    }

    if(closeMenu){
        closeMenu.addEventListener("click", closeSidebar);
    }

    if(overlay){
        overlay.addEventListener("click", closeSidebar);
    }

    /*=====================================
      MOBILE DROPDOWNS
    =====================================*/

    const dropdownButtons =
        document.querySelectorAll(".dropdown-btn");

    dropdownButtons.forEach(button => {

        button.addEventListener("click", () => {

            const parent = button.parentElement;

            parent.classList.toggle("active");

        });

    });

    /*=====================================
      STICKY HEADER
    =====================================*/

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if(!header) return;

        if(window.scrollY > 80){

            header.classList.add("sticky");

        }else{

            header.classList.remove("sticky");

        }

    });

    /*=====================================
      SMOOTH SCROLL
    =====================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e){

            e.preventDefault();

            const target =
                document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    /*=====================================
      BACK TO TOP BUTTON
    =====================================*/

    const topButton =
        document.querySelector(".back-to-top");

    if(topButton){

        window.addEventListener("scroll", ()=>{

            if(window.scrollY > 500){

                topButton.classList.add("show");

            }else{

                topButton.classList.remove("show");

            }

        });

        topButton.addEventListener("click", ()=>{

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        });

    }

});
/* =====================================
   BACK TO TOP
===================================== */

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
/* =====================================
   GALLERY FILTER
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const filterButtons = document.querySelectorAll(".gallery-filter-btn");
    const galleryCards = document.querySelectorAll(".gallery-card");

    if (!filterButtons.length || !galleryCards.length) {
        return;
    }

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const filter = this.dataset.filter;

            /* Change active button */

            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            this.classList.add("active");


            /* Filter the pictures */

            galleryCards.forEach(function (card) {

                const shouldShow =
                    filter === "all" ||
                    card.classList.contains(filter);

                if (shouldShow) {

                    card.classList.remove("gallery-hidden");

                    /* Restart animation */
                    card.style.animation = "none";
                    card.offsetHeight;
                    card.style.animation = "";

                } else {

                    card.classList.add("gallery-hidden");

                }

            });

        });

    });

});
/* ========================================= SKYE-VIEW COLLEGE CONTACT FORM ========================================= */ const contactForm = document.getElementById("contactForm"); const formMessage = document.getElementById("formMessage"); if (contactForm) { contactForm.addEventListener("submit", function (e) { e.preventDefault(); const name = document.getElementById("name").value.trim(); const email = document.getElementById("email").value.trim(); const phone = document.getElementById("phone").value.trim(); const subject = document.getElementById("subject").value.trim(); const message = document.getElementById("message").value.trim(); if (!name || !email || !phone || !subject || !message) { formMessage.textContent = "Please fill in all the required fields."; return; } /* * This currently opens the user's email application. * You can later connect the form to a backend/email service. */ const schoolEmail = "skye-view2016@gmail.com"; const mailSubject = encodeURIComponent(subject); const mailBody = encodeURIComponent( `Name: ${name}\n` + `Email: ${email}\n` + `Phone: ${phone}\n\n` + `Message:\n${message}` ); window.location.href = `mailto:${schoolEmail}?subject=${mailSubject}&body=${mailBody}`; formMessage.textContent = "Opening your email application..."; }); }