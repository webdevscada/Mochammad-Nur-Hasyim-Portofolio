/*==================================================
                    LOADER
==================================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.transition = "0.5s";

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },500);

    }

});


/*==================================================
                SCROLL REVEAL
==================================================*/

const revealItems = document.querySelectorAll(

    ".section-card, .training-card, .result-card, .gallery-item"

);

const revealObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},

{

    threshold:0.15

}

);

revealItems.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(40px)";

    item.style.transition=".8s";

    revealObserver.observe(item);

});


/*==================================================
                ACTIVE MENU
==================================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        const sectionHeight=section.offsetHeight;

        if(window.scrollY>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(li=>{

        li.classList.remove("active");

        const link=li.querySelector("a");

        if(link){

            const href=link.getAttribute("href");

            if(href==="#"+current){

                li.classList.add("active");

            }

        }

    });

});


/*==================================================
                SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(

            this.getAttribute("href")

        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*==================================================
                GALLERY LIGHTBOX
==================================================*/

const galleryImages=document.querySelectorAll(

    ".gallery-item img"

);

const lightbox=document.querySelector(".lightbox");

const lightboxImage=document.querySelector(

    ".lightbox-image"

);

const closeLightbox=document.querySelector(

    ".close-lightbox"

);

galleryImages.forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.classList.add("show");

        lightboxImage.src=img.src;

        document.body.style.overflow="hidden";

    });

});

if(closeLightbox){

    closeLightbox.onclick=()=>{

        lightbox.classList.remove("show");

        document.body.style.overflow="";

    };

}

if(lightbox){

    lightbox.addEventListener("click",(e)=>{

        if(e.target===lightbox){

            lightbox.classList.remove("show");

            document.body.style.overflow="";

        }

    });

}


/*==================================================
                ESC CLOSE
==================================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        if(lightbox){

            lightbox.classList.remove("show");

            document.body.style.overflow="";

        }

    }

});


/*==================================================
                BACK TO TOP
==================================================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.classList.add("show");

    }

    else{

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*==================================================
                HERO PARALLAX
==================================================*/

const hero=document.querySelector(".hero");

window.addEventListener("mousemove",(e)=>{

    if(!hero) return;

    const x=e.clientX/window.innerWidth;

    const y=e.clientY/window.innerHeight;

    hero.style.backgroundPosition=

    `${50+x*5}% ${50+y*5}%`;

});

window.addEventListener("mouseleave",()=>{

    if(hero){

        hero.style.backgroundPosition="center";

    }

});


/*==================================================
                CARD HOVER
==================================================*/

document.querySelectorAll(

    ".training-card, .result-card, .gallery-item"

).forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-8px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});


/*==================================================
                RIPPLE EFFECT
==================================================*/

document.querySelectorAll(

".training-card,.result-card,.gallery-item"

).forEach(card=>{

    card.addEventListener("click",function(e){

        const ripple=document.createElement("span");

        ripple.className="ripple";

        const rect=this.getBoundingClientRect();

        const size=Math.max(rect.width,rect.height);

        ripple.style.width=size+"px";

        ripple.style.height=size+"px";

        ripple.style.left=

        e.clientX-rect.left-size/2+"px";

        ripple.style.top=

        e.clientY-rect.top-size/2+"px";

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});


/*==================================================
            HERO IMAGE FLOAT
==================================================*/

const heroImage=document.querySelector(

    ".hero-right img"

);

if(heroImage){

    let direction=1;

    let offset=0;

    setInterval(()=>{

        offset+=direction*0.3;

        if(offset>8) direction=-1;

        if(offset<0) direction=1;

        heroImage.style.transform=

        `translateY(${offset}px)`;

    },30);

}


/*==================================================
            IMAGE FADE
==================================================*/

document.querySelectorAll("img").forEach(img=>{

    img.onload=()=>{

        img.style.opacity="1";

    };

});


/*==================================================
                CONSOLE
==================================================*/

console.log(

"%cTraining Portfolio Loaded",

"color:#2d7dff;font-size:18px;font-weight:bold;"

);

console.log(

"Developed using HTML, CSS & JavaScript."

);

const gallery=document.querySelector(".gallery-grid");

document.querySelector(".gallery-next").onclick=()=>{

    gallery.scrollBy({

        left:350,

        behavior:"smooth"

    });

};

document.querySelector(".gallery-prev").onclick=()=>{

    gallery.scrollBy({

        left:-350,

        behavior:"smooth"

    });

};