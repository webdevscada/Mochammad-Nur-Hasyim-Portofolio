/* ==========================================
            IMAGE SLIDESHOW
==========================================

const imageLists = {

    img1: [
        "project/offshore1.jpg",
        "project/offshore2.jpg",
        "project/offshore3.jpg"
    ],

    img2: [
        "project/solar1.jpg",
        "project/solar2.jpg",
        "project/solar3.jpg"
    ],

    img3: [
        "project/biogas1.jpg",
        "project/biogas2.jpg",
        "project/biogas3.jpg"
    ]

};

/* ==========================================
        START SLIDESHOW
==========================================

Object.keys(imageLists).forEach(id => {

    const img = document.getElementById(id);

    // jika id tidak ada maka dilewati
    if (!img) return;

    let index = 0;

    setInterval(() => {

        img.style.opacity = 0;

        setTimeout(() => {

            index++;

            if (index >= imageLists[id].length) {

                index = 0;

            }

            img.src = imageLists[id][index];

            img.style.opacity = 1;

        }, 300);

    }, 2500);

}); */

/* ==========================================
        REVEAL TITLE
========================================== */

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            revealObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(".reveal").forEach(item => {

    revealObserver.observe(item);

});

/* ==========================================
        CARD STAGGER ANIMATION
========================================== */

const cards = document.querySelectorAll(".reveal-card");

const cardObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            cards.forEach((card, index) => {

                setTimeout(() => {

                    card.classList.add("show");

                }, index * 220);

            });

            cardObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.15

});

const projectGrid = document.querySelector(".project-grid");

if (projectGrid) {

    cardObserver.observe(projectGrid);

}

/* ==========================================
        CARD HOVER EFFECT
========================================== */

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = ".35s";

    });

});

/* ==========================================
        SMOOTH PAGE LOADED
========================================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});