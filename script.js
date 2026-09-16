/* =================================
   BEEJONE AGRITECH
   WEBSITE JAVASCRIPT
================================= */


/* ================================
   HEADER SCROLL EFFECT
================================ */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* ================================
   MOBILE MENU
================================ */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});


/* Close menu after clicking a link */

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

    });

});


/* ================================
   PRODUCT WHATSAPP ENQUIRY
================================ */

document.querySelectorAll("[data-product]").forEach(link => {

    link.addEventListener("click", () => {

        const product = link.getAttribute("data-product");

        const message =
            "Hello Beejone Agritech, I would like to enquire about " +
            product + ".";

        const whatsappURL =
            "https://wa.me/919423460474?text=" +
            encodeURIComponent(message);

        window.open(whatsappURL, "_blank");

    });

});


/* ================================
   IMAGE GALLERY
================================ */

const galleryItems =
    document.querySelectorAll(".gallery-item");

galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        const image = item.querySelector("img");

        if (image) {

            const lightbox = document.createElement("div");

            lightbox.className = "image-lightbox";

            lightbox.innerHTML = `
                <div class="lightbox-close">×</div>
                <img src="${image.src}" alt="${image.alt}">
            `;

            document.body.appendChild(lightbox);

            setTimeout(() => {
                lightbox.classList.add("active");
            }, 10);


            /* Close when clicking background */

            lightbox.addEventListener("click", event => {

                if (
                    event.target === lightbox ||
                    event.target.classList.contains("lightbox-close")
                ) {

                    lightbox.classList.remove("active");

                    setTimeout(() => {
                        lightbox.remove();
                    }, 250);

                }

            });

        }

    });

});


/* ================================
   LIGHTBOX CSS
================================ */

const lightboxStyle = document.createElement("style");

lightboxStyle.innerHTML = `

.image-lightbox {

    position: fixed;

    inset: 0;

    background: rgba(0,0,0,0.92);

    z-index: 2000;

    display: flex;

    align-items: center;

    justify-content: center;

    padding: 30px;

    opacity: 0;

    transition: opacity 0.25s ease;

}

.image-lightbox.active {

    opacity: 1;

}

.image-lightbox img {

    max-width: 90vw;

    max-height: 85vh;

    width: auto;

    object-fit: contain;

    border-radius: 8px;

}

.lightbox-close {

    position: absolute;

    top: 20px;

    right: 30px;

    color: white;

    font-size: 40px;

    cursor: pointer;

    line-height: 1;

}

`;

document.head.appendChild(lightboxStyle);


/* ================================
   ESCAPE KEY FOR LIGHTBOX
================================ */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        const lightbox =
            document.querySelector(".image-lightbox");

        if (lightbox) {

            lightbox.classList.remove("active");

            setTimeout(() => {
                lightbox.remove();
            }, 250);

        }

    }

});


/* ================================
   CURRENT YEAR
================================ */

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}