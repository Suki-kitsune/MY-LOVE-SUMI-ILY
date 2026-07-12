// =========================
// Floating Hearts
// =========================

const hearts = document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = Math.random() > 0.5 ? "❤️" : "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (16 + Math.random() * 16) + "px";
    heart.style.animationDuration = (5 + Math.random() * 4) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 450);

// =========================
// Lightbox
// =========================

const photos = document.querySelectorAll(".photo");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("close");

photos.forEach(photo => {

    photo.addEventListener("click", () => {

        lightbox.classList.add("show");
        lightboxImg.src = photo.src;

    });

});

closeBtn.addEventListener("click", () => {

    lightbox.classList.remove("show");

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.classList.remove("show");

    }

});

// =========================
// ESC Key Closes Lightbox
// =========================

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        lightbox.classList.remove("show");

    }

});

// =========================
// Continue Button
// =========================

document.getElementById("nextBtn").addEventListener("click", () => {

    document.body.style.transition = "0.8s";
    document.body.style.opacity = "0";

    setTimeout(() => {

        window.location.href = "surprise.html";

    }, 800);

});
