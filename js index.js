let translations = {};

// ==========================================
// LOAD TRANSLATION JSON
// ==========================================

async function loadTranslations() {

    try {

        const response = await fetch("json index.json");

        if (!response.ok) {
            throw new Error("Failed to load translation file");
        }

        translations = await response.json();

        console.log(translations);

        // Ambil bahasa yang sebelumnya dipilih
        const savedLanguage =
            localStorage.getItem("language") || "en";

        changeLanguage(savedLanguage);

    } catch (error) {

        console.error("Translation error:", error);

    }

}


// ==========================================
// CHANGE LANGUAGE
// ==========================================

function changeLanguage(language) {

    if (!translations[language]) {
        console.error("Language not found:", language);
        return;
    }

    // Cari semua elemen data-lang
    const elements =
        document.querySelectorAll("[data-lang]");

    elements.forEach(element => {

        const key = element.getAttribute("data-lang");

        if (translations[language][key]) {

            element.textContent =
                translations[language][key];

        }

    });


    // Simpan bahasa
    localStorage.setItem("language", language);


    // Ubah atribut bahasa HTML
    document.documentElement.lang = language;

}


// ==========================================
// RUN
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    loadTranslations
);

document.querySelectorAll(".language-selector button")
.forEach(button=>{

    button.onclick=()=>{

        changeLanguage(
            button.dataset.language
        );

    };

});