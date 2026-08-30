/* =========================================================
   OC4 SEMI-SUBMERSIBLE PORTFOLIO
   JAVASCRIPT
========================================================= */


/* =========================================================
   1. FILE SETTINGS
=========================================================

   CUKUP EDIT BAGIAN INI UNTUK MENGGANTI
   FOTO DAN VIDEO.

========================================================= */

const FILE_SETTINGS = {


    /* =====================================================
       PROFILE
    ====================================================== */

    profileImage:
        "background/foto diri.jpg",



    /* =====================================================
       HERO
    ====================================================== */

    heroImage:
        "platform/oc4.webp",



    /* =====================================================
       ACTIVITY
    ====================================================== */

    activityImage1:
        "platform/ppns 1.jpg",

    activityImage2:
        "platform/foto 2.jpg",



    /* =====================================================
       TOOLS
    ====================================================== */

    toolImage1:
        "platform/gerinda.avif",

    toolImage2:
        "platform/las.jpg",

    toolImage3:
        "platform/inventor.jpg",



    /* =====================================================
       GALLERY IMAGE
    ====================================================== */

    galleryImage1:
        "platform/foto 1.jpg",

    galleryImage3:
        "platform/foto 2.jpg",

    galleryImage4:
        "platform/foto 3.jpg",



    /* =====================================================
       GALLERY VIDEO
    ====================================================== */

    galleryVideo2:
        "platform/pengujian ppns.mp4",

    galleryVideo5:
        "platform/video 3.mp4"

};



/* =========================================================
   2. CHANGE IMAGE
========================================================= */

function changeImage(
    id,
    filePath
) {

    const image =
        document.getElementById(id);


    if (!image) {

        console.warn(
            "Element gambar tidak ditemukan:",
            id
        );

        return;
    }


    image.src =
        filePath;
}



/* =========================================================
   3. APPLY ALL IMAGES
========================================================= */

changeImage(
    "profileImage",
    FILE_SETTINGS.profileImage
);


changeImage(
    "heroImage",
    FILE_SETTINGS.heroImage
);


changeImage(
    "activityImage1",
    FILE_SETTINGS.activityImage1
);


changeImage(
    "activityImage2",
    FILE_SETTINGS.activityImage2
);


changeImage(
    "toolImage1",
    FILE_SETTINGS.toolImage1
);


changeImage(
    "toolImage2",
    FILE_SETTINGS.toolImage2
);


changeImage(
    "toolImage3",
    FILE_SETTINGS.toolImage3
);


changeImage(
    "galleryImage1",
    FILE_SETTINGS.galleryImage1
);


changeImage(
    "galleryImage3",
    FILE_SETTINGS.galleryImage3
);


changeImage(
    "galleryImage4",
    FILE_SETTINGS.galleryImage4
);



/* =========================================================
   4. CHANGE VIDEO
========================================================= */

function changeVideo(
    videoId,
    filePath
) {

    const video =
        document.getElementById(videoId);


    if (!video) {

        console.warn(
            "Element video tidak ditemukan:",
            videoId
        );

        return;
    }


    /*
       Hapus source lama
    */

    video.innerHTML = "";


    /*
       Buat source baru
    */

    const source =
        document.createElement("source");


    source.src =
        filePath;


    source.type =
        "video/mp4";


    video.appendChild(
        source
    );


    /*
       Video settings
    */

    video.autoplay =
        true;

    video.muted =
        true;

    video.loop =
        true;

    video.playsInline =
        true;

    video.preload =
        "auto";


    /*
       Reload
    */

    video.load();


    /*
       Jalankan video
    */

    const playPromise =
        video.play();


    if (playPromise !== undefined) {

        playPromise.catch(
            function(error) {

                console.warn(
                    "Autoplay video ditolak browser:",
                    error
                );

            }
        );

    }

}



/* =========================================================
   5. APPLY VIDEOS
========================================================= */

changeVideo(
    "galleryVideo2",
    FILE_SETTINGS.galleryVideo2
);


changeVideo(
    "galleryVideo5",
    FILE_SETTINGS.galleryVideo5
);



/* =========================================================
   6. AUTOPLAY SEMUA VIDEO
========================================================= */

function setupVideos() {

    const videos =
        document.querySelectorAll(
            "video"
        );


    videos.forEach(
        function(video) {


            video.muted =
                true;


            video.autoplay =
                true;


            video.loop =
                true;


            video.playsInline =
                true;


            const playPromise =
                video.play();


            if (
                playPromise !== undefined
            ) {

                playPromise.catch(
                    function() {

                        /*
                           Browser dapat menunda
                           autoplay.
                        */

                    }
                );

            }

        }
    );

}


setupVideos();



/* =========================================================
   7. GALLERY CAROUSEL
========================================================= */

const gallery =
    document.getElementById(
        "gallery"
    );


const previousButton =
    document.getElementById(
        "previousButton"
    );


const nextButton =
    document.getElementById(
        "nextButton"
    );



/* =========================================================
   GET SCROLL AMOUNT
========================================================= */

function getGalleryScrollAmount() {

    const item =
        gallery.querySelector(
            ".gallery-item"
        );


    if (!item) {

        return 0;

    }


    const itemWidth =
        item.getBoundingClientRect()
            .width;


    const galleryStyle =
        window.getComputedStyle(
            gallery
        );


    const gap =
        parseFloat(
            galleryStyle.gap
        ) || 18;


    return itemWidth + gap;

}



/* =========================================================
   NEXT BUTTON
========================================================= */

if (nextButton) {

    nextButton.addEventListener(
        "click",
        function() {


            gallery.scrollBy({

                left:
                    getGalleryScrollAmount(),

                behavior:
                    "smooth"

            });

        }
    );

}



/* =========================================================
   PREVIOUS BUTTON
========================================================= */

if (previousButton) {

    previousButton.addEventListener(
        "click",
        function() {


            gallery.scrollBy({

                left:
                    -getGalleryScrollAmount(),

                behavior:
                    "smooth"

            });

        }
    );

}



/* =========================================================
   8. MOBILE SIDEBAR
========================================================= */

const sidebar =
    document.getElementById(
        "sidebar"
    );


const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );


if (mobileMenu) {

    mobileMenu.addEventListener(
        "click",
        function() {


            sidebar.classList.toggle(
                "open"
            );

        }
    );

}



/* =========================================================
   CLOSE SIDEBAR WHEN NAVIGATION CLICKED
========================================================= */

const navigationLinks =
    document.querySelectorAll(
        ".nav-link"
    );


navigationLinks.forEach(
    function(link) {


        link.addEventListener(
            "click",
            function() {


                sidebar.classList.remove(
                    "open"
                );

            }
        );

    }
);



/* =========================================================
   9. ACTIVE NAVIGATION
========================================================= */

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


const sections =
    document.querySelectorAll(
        "main section[id]"
    );


function updateActiveNavigation() {

    let currentSection =
        "home";


    sections.forEach(
        function(section) {


            const sectionTop =
                section.offsetTop - 200;


            if (
                window.scrollY >=
                sectionTop
            ) {

                currentSection =
                    section.id;

            }

        }
    );


    navLinks.forEach(
        function(link) {


            link.classList.remove(
                "active"
            );


            const href =
                link.getAttribute(
                    "href"
                );


            if (
                href ===
                "#" + currentSection
            ) {

                link.classList.add(
                    "active"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


updateActiveNavigation();



/* =========================================================
   10. VIDEO KETIKA KEMBALI KE TAB
========================================================= */

document.addEventListener(
    "visibilitychange",
    function() {


        if (
            document.visibilityState ===
            "visible"
        ) {

            setupVideos();

        }

    }
);



/* =========================================================
   11. IMAGE ERROR HANDLER
========================================================= */

document.querySelectorAll(
    "img"
).forEach(
    function(image) {


        image.addEventListener(
            "error",
            function() {


                console.error(
                    "❌ GAMBAR TIDAK DITEMUKAN:",
                    image.src
                );

            }
        );


        image.addEventListener(
            "load",
            function() {


                console.log(
                    "✅ Gambar berhasil:",
                    image.src
                );

            }
        );

    }
);



/* =========================================================
   12. VIDEO ERROR HANDLER
========================================================= */

document.querySelectorAll(
    "video"
).forEach(
    function(video) {


        video.addEventListener(
            "error",
            function() {


                console.error(
                    "❌ VIDEO TIDAK DITEMUKAN:",
                    video.currentSrc
                );

            }
        );


        video.addEventListener(
            "loadeddata",
            function() {


                console.log(
                    "✅ Video berhasil:",
                    video.currentSrc
                );

            }
        );

    }
);