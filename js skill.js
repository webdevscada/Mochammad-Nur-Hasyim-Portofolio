// ==========================================
// Progress Bar Animation
// ==========================================

const hardCards = document.querySelectorAll(".hard-card");

hardCards.forEach((card,index)=>{

setTimeout(()=>{

card.classList.add("show");

},index*120);

});

// ==========================================
// Soft Skill Animation
// ==========================================

const cards = document.querySelectorAll(".soft-card");

cards.forEach((card, index) => {

    setTimeout(() => {

        card.classList.add("show");

    }, index * 150);

});

// ==========================================
// Hover Effect (Optional)
// ==========================================

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = ".3s";

    });

});