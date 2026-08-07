/*==========================================
            LOADER
==========================================*/

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    setTimeout(()=>{

        loader.style.opacity="0";

        loader.style.pointerEvents="none";

        setTimeout(()=>{

            loader.remove();

        },600);

    },700);

});

/*==========================================
        REVEAL ANIMATION
==========================================*/

const reveals=document.querySelectorAll(

".hero,.card,.sidebar"

);

const observer=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.15

}

);

reveals.forEach(item=>{

observer.observe(item);

});

/*==========================================
        STAGGER EFFECT
==========================================*/

const cards=document.querySelectorAll(".card");

cards.forEach((card,index)=>{

card.style.transitionDelay=

(index*0.08)+"s";

});

/*==========================================
            HERO FADE
==========================================*/

window.addEventListener("load",()=>{

const hero=document.querySelector(".hero");

setTimeout(()=>{

hero.classList.add("active");

},300);

});

/*==========================================
            CARD TILT
==========================================*/

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=

((y/rect.height)-0.5)*-8;

const rotateY=

((x/rect.width)-0.5)*8;

card.style.transform=

`perspective(900px)

rotateX(${rotateX}deg)

rotateY(${rotateY}deg)

translateY(-6px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});

/*==========================================
        HERO PARALLAX
==========================================*/

const hero=document.querySelector(".hero");

hero.addEventListener(

"mousemove",

(e)=>{

const x=

(e.clientX/window.innerWidth)*20;

const y=

(e.clientY/window.innerHeight)*20;

hero.style.backgroundPosition=

`${50+x}% ${50+y}%`;

}

);

hero.addEventListener(

"mouseleave",

()=>{

hero.style.backgroundPosition=

"center";

}

);

/*==========================================
        SIDEBAR ACTIVE
==========================================*/

const menu=document.querySelectorAll(

"nav li"

);

menu.forEach(item=>{

item.addEventListener(

"mouseenter",

()=>{

item.style.transform="translateX(6px)";

});

item.addEventListener(

"mouseleave",

()=>{

item.style.transform="";

});

});

/*==========================================
        MOUSE GLOW
==========================================*/

const glow=document.createElement("div");

glow.className="mouse-glow";

document.body.appendChild(glow);

document.addEventListener(

"mousemove",

e=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

}

);

/*==========================================
        RIPPLE
==========================================*/

document.querySelectorAll(".card")

.forEach(card=>{

card.addEventListener(

"click",

function(e){

const ripple=

document.createElement("span");

const rect=

this.getBoundingClientRect();

const size=

Math.max(

rect.width,

rect.height

);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=

e.clientX-

rect.left-

size/2+"px";

ripple.style.top=

e.clientY-

rect.top-

size/2+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},700);

});

});