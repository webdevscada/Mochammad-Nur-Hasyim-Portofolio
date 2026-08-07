/*==================================================
                    LOADER
==================================================*/

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    if(loader){

        loader.style.transition=".5s";

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.style.display="none";

        },500);

    }

});


/*==================================================
                SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target=document.querySelector(

            this.getAttribute("href")

        );

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*==================================================
                ACTIVE MENU
==================================================*/

const sections=document.querySelectorAll("section");

const menuLinks=document.querySelectorAll("nav ul li");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-140;

        const height=section.offsetHeight;

        if(window.scrollY>=top){

            current=section.id;

        }

    });

    menuLinks.forEach(item=>{

        item.classList.remove("active");

        const link=item.querySelector("a");

        if(!link) return;

        if(link.getAttribute("href")==="#"+current){

            item.classList.add("active");

        }

    });

});


/*==================================================
                REVEAL EFFECT
==================================================*/

const revealItems=document.querySelectorAll(

".section-card,.division-card,.skill-card,.software-card,.gallery-item,.video-card"

);

const observer=new IntersectionObserver(

entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},

{

threshold:.15

}

);

revealItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition=".8s";

observer.observe(item);

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


/*==================================================
                HERO IMAGE FLOAT
==================================================*/

const heroImage=document.querySelector(".hero-right img");

if(heroImage){

let direction=1;

let offset=0;

setInterval(()=>{

offset+=direction*0.25;

if(offset>=10){

direction=-1;

}

if(offset<=0){

direction=1;

}

heroImage.style.transform=

`translateY(${offset}px)`;

},30);

}


/*==================================================
                GALLERY LIGHTBOX
==================================================*/

const gallery=document.querySelectorAll(

".gallery-item img"

);

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById(

"lightboxImg"

);

const close=document.getElementById(

"closeLightbox"

);

gallery.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.classList.add("show");

lightboxImg.src=img.src;

document.body.style.overflow="hidden";

});

});

if(close){

close.onclick=()=>{

lightbox.classList.remove("show");

document.body.style.overflow="";

};

}

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("show");

document.body.style.overflow="";

}

});


/*==================================================
                ESC CLOSE
==================================================*/

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

lightbox.classList.remove("show");

document.body.style.overflow="";

}

});


/*==================================================
                VIDEO AUTOPLAY
==================================================*/

const videos=document.querySelectorAll("video");

videos.forEach(video=>{

video.muted=true;

video.loop=true;

video.autoplay=true;

video.play().catch(()=>{});

});


/*==================================================
                BACK TO TOP
==================================================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>350){

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
                RIPPLE EFFECT
==================================================*/

document.querySelectorAll(

".division-card,.skill-card,.software-item,.gallery-item"

).forEach(card=>{

card.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=

e.clientX-rect.left-size/2+"px";

ripple.style.top=

e.clientY-rect.top-size/2+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


/*==================================================
            GALLERY AUTO SCROLL
==================================================*/

const galleryWrapper=document.querySelector(

".gallery-wrapper"

);

if(galleryWrapper){

let direction=1;

setInterval(()=>{

galleryWrapper.scrollLeft+=direction*1;

if(

galleryWrapper.scrollLeft+

galleryWrapper.clientWidth>=

galleryWrapper.scrollWidth-2

){

direction=-1;

}

if(galleryWrapper.scrollLeft<=0){

direction=1;

}

},25);

}


/*==================================================
            VIDEO AUTO SCROLL
==================================================*/

const videoWrapper=document.querySelector(

".video-wrapper"

);

if(videoWrapper){

let direction=1;

setInterval(()=>{

videoWrapper.scrollLeft+=direction*1;

if(

videoWrapper.scrollLeft+

videoWrapper.clientWidth>=

videoWrapper.scrollWidth-2

){

direction=-1;

}

if(videoWrapper.scrollLeft<=0){

direction=1;

}

},25);

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
            SCROLL PROGRESS BAR
==================================================*/

const progress=document.createElement("div");

progress.id="progressBar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=

document.documentElement.scrollHeight-

document.documentElement.clientHeight;

const current=

document.documentElement.scrollTop;

progress.style.width=

(current/total)*100+"%";

});


/*==================================================
                CONSOLE
==================================================*/

console.log(

"%cBiogas Portfolio Loaded",

"color:#97e63a;font-size:18px;font-weight:bold;"

);

console.log(

"Developed using HTML, CSS and JavaScript."

);