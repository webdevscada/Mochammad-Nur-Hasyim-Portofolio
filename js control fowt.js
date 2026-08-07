/*==================================================
        FLOATING OFFSHORE WIND TURBINE
                PORTFOLIO
==================================================*/


/*==================================================
                    LOADER
==================================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.classList.add("hide");

});


/*==================================================
                BACK TO TOP
==================================================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

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


/*==================================================
                ACTIVE MENU
==================================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*==================================================
                REVEAL ANIMATION
==================================================*/

const revealElements = document.querySelectorAll(

    ".card, .wave-card, .gallery-item"

);

revealElements.forEach(item => {

    item.classList.add("reveal");

});

function revealOnScroll() {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < trigger) {

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);


/*==================================================
                HERO PARALLAX
==================================================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    if (!hero) return;

    const offset = window.pageYOffset;

    hero.style.backgroundPositionY = `${offset * 0.35}px`;

});


/*==================================================
                HERO TAG HOVER
==================================================*/

const heroTags = document.querySelectorAll(".hero-tags span");

heroTags.forEach(tag => {

    tag.addEventListener("mouseenter", () => {

        tag.style.transform = "translateY(-5px)";

    });

    tag.addEventListener("mouseleave", () => {

        tag.style.transform = "";

    });

});


/*==================================================
                CARD HOVER EFFECT
==================================================*/

const cards = document.querySelectorAll(

    ".card, .tool-card, .wave-card"

);

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", x + "px");

        card.style.setProperty("--mouse-y", y + "px");

    });

});


/*==================================================
                IMAGE FADE
==================================================*/

const images = document.querySelectorAll("img");

images.forEach(img => {

    img.addEventListener("load", () => {

        img.classList.add("fade-in");

    });

});


/*==================================================
            WINDOW RESIZE FIX
==================================================*/

window.addEventListener("resize", () => {

    revealOnScroll();

});


/*==================================================
            INITIALIZATION
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    revealOnScroll();

});

/*==================================================
                GALLERY LIGHTBOX
==================================================*/

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightbox-image");

const lightboxTitle = document.getElementById("lightbox-title");

const closeLightbox = document.querySelector(".close-lightbox");

const prevButton = document.querySelector(".prev-btn");

const nextButton = document.querySelector(".next-btn");

let currentImage = 0;

function openLightbox(index){

    currentImage = index;

    lightboxImage.src = galleryImages[index].src;

    lightboxTitle.textContent = galleryImages[index].alt;

    lightbox.classList.add("show");

    document.body.style.overflow = "hidden";

}

function closeGallery(){

    lightbox.classList.remove("show");

    document.body.style.overflow = "";

}

function nextImage(){

    currentImage++;

    if(currentImage >= galleryImages.length){

        currentImage = 0;

    }

    openLightbox(currentImage);

}

function previousImage(){

    currentImage--;

    if(currentImage < 0){

        currentImage = galleryImages.length - 1;

    }

    openLightbox(currentImage);

}

galleryImages.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        openLightbox(index);

    });

});

closeLightbox.addEventListener("click",closeGallery);

nextButton.addEventListener("click",(e)=>{

    e.stopPropagation();

    nextImage();

});

prevButton.addEventListener("click",(e)=>{

    e.stopPropagation();

    previousImage();

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        closeGallery();

    }

});


/*==================================================
                KEYBOARD CONTROL
==================================================*/

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("show")) return;

    if(e.key==="Escape"){

        closeGallery();

    }

    if(e.key==="ArrowRight"){

        nextImage();

    }

    if(e.key==="ArrowLeft"){

        previousImage();

    }

});


/*==================================================
            SIMULATION IMAGE LIGHTBOX
==================================================*/

const simulationImages=document.querySelectorAll(".zoom-image");

simulationImages.forEach(img=>{

    img.addEventListener("click",()=>{

        lightboxImage.src=img.src;

        lightboxTitle.textContent=img.alt;

        lightbox.classList.add("show");

        document.body.style.overflow="hidden";

    });

});


/*==================================================
                RIPPLE EFFECT
==================================================*/

const buttons=document.querySelectorAll(

    ".menu a,.hero-tags span,#backToTop,.nav-btn"

);

buttons.forEach(button=>{

    button.addEventListener("click",function(e){

        const ripple=document.createElement("span");

        const rect=this.getBoundingClientRect();

        const size=Math.max(rect.width,rect.height);

        ripple.style.width=size+"px";

        ripple.style.height=size+"px";

        ripple.style.left=e.clientX-rect.left-size/2+"px";

        ripple.style.top=e.clientY-rect.top-size/2+"px";

        ripple.className="ripple";

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});


/*==================================================
                SCROLL PROGRESS
==================================================*/

const progressBar=document.createElement("div");

progressBar.id="progressBar";

document.body.appendChild(progressBar);

window.addEventListener("scroll",()=>{

    const scrollTop=document.documentElement.scrollTop;

    const height=

    document.documentElement.scrollHeight-

    document.documentElement.clientHeight;

    const progress=(scrollTop/height)*100;

    progressBar.style.width=progress+"%";

});


/*==================================================
                IMAGE HOVER
==================================================*/

galleryImages.forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.filter="brightness(1.08)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.filter="";

    });

});


/*==================================================
            SIMPLE CARD ANIMATION
==================================================*/

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},{

    threshold:0.15

});

document.querySelectorAll(

".card,.wave-card,.gallery-item"

).forEach(item=>{

    observer.observe(item);

});


/*==================================================
                CONSOLE MESSAGE
==================================================*/

console.log(

"%cFloating Offshore Wind Turbine Portfolio",

"color:#2f86ff;font-size:18px;font-weight:bold;"

);

console.log(

"Developed using HTML, CSS and JavaScript."

);

const videos=document.querySelectorAll(".video-item video");

videos.forEach(video=>{

    video.addEventListener("click",()=>{

        if(video.requestFullscreen){

            video.requestFullscreen();

        }

    });

});