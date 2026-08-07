/*==================================================
                LOADER
==================================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.opacity = "0";

        setTimeout(()=>{

            loader.style.display="none";

        },500);

    }

});

/*==================================================
                REVEAL ANIMATION
==================================================*/

const revealElements = document.querySelectorAll(
    ".section,.info-card,.unit-card,.activity-card,.knowledge-card,.feature-card,.certificate-card,.gallery-item"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

revealElements.forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});

/*==================================================
                STAGGER CARD
==================================================*/

document.querySelectorAll(".icon-item").forEach((item,index)=>{

    item.style.animationDelay = `${index*0.08}s`;

});

document.querySelectorAll(".activity-item").forEach((item,index)=>{

    item.style.animationDelay = `${index*0.08}s`;

});

/*==================================================
                GALLERY BUTTON
==================================================*/

const track=document.querySelector(".gallery-track");

const prev=document.querySelector(".prev");

const next=document.querySelector(".next");

if(track && prev && next){

    next.addEventListener("click",()=>{

        track.scrollBy({

            left:340,

            behavior:"smooth"

        });

    });

    prev.addEventListener("click",()=>{

        track.scrollBy({

            left:-340,

            behavior:"smooth"

        });

    });

}

/*==================================================
                DRAG GALLERY
==================================================*/

if(track){

let isDown=false;

let startX;

let scrollLeft;

track.addEventListener("mousedown",(e)=>{

    isDown=true;

    startX=e.pageX-track.offsetLeft;

    scrollLeft=track.scrollLeft;

});

track.addEventListener("mouseleave",()=>{

    isDown=false;

});

track.addEventListener("mouseup",()=>{

    isDown=false;

});

track.addEventListener("mousemove",(e)=>{

    if(!isDown) return;

    e.preventDefault();

    const x=e.pageX-track.offsetLeft;

    const walk=(x-startX)*2;

    track.scrollLeft=scrollLeft-walk;

});

}

/*==================================================
                TOUCH
==================================================*/

if(track){

let touchStart=0;

let scrollStart=0;

track.addEventListener("touchstart",(e)=>{

touchStart=e.touches[0].pageX;

scrollStart=track.scrollLeft;

});

track.addEventListener("touchmove",(e)=>{

const move=e.touches[0].pageX;

track.scrollLeft=scrollStart-(move-touchStart);

});

}

/*==================================================
                ACTIVE MENU
==================================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(li=>{

li.classList.remove("active");

const a=li.querySelector("a");

if(a && a.getAttribute("href")==="#"+current){

li.classList.add("active");

}

});

});

/*==================================================
                BACK TO TOP
==================================================*/

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

/*==================================================
                HERO PARALLAX
==================================================*/

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

if(hero){

hero.style.transform=`translateY(${window.scrollY*0.08}px)`;

}

});