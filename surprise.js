// ===============================
// Typewriter Message
// ===============================

const message = `Before you leave...

I just want you to know something.

Meeting you was one of the best things that has ever happened to me.

Every conversation,
every smile,
every laugh,
every little moment...

has become one of my favorite memories.

Thank you for being exactly who you are.

I hope this tiny website made you smile,
even if only for a little while.

Now...
I have one final question for you... ❤️`;

const typewriter = document.getElementById("typewriter");

let index = 0;

function typeEffect() {
    if (index < message.length) {
        typewriter.textContent += message.charAt(index);
        index++;
        setTimeout(typeEffect, 40);
    }
}

window.addEventListener("load", () => {
    typeEffect();
    createSparkles();
});

// ===============================
// Floating Hearts Background
// ===============================

const heartsContainer = document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = Math.random() > 0.5 ? "❤" : "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (18 + Math.random() * 22) + "px";
    heart.style.animationDuration = (6 + Math.random() * 5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 11000);
}

setInterval(createHeart, 500);

// ===============================
// Sparkles
// ===============================

const sparkleContainer = document.querySelector(".sparkles");

function createSparkles() {

    for (let i = 0; i < 40; i++) {

        const spark = document.createElement("div");

        spark.className = "spark";

        spark.style.left = Math.random() * 100 + "vw";
        spark.style.top = Math.random() * 100 + "vh";

        spark.style.animationDelay = Math.random() * 2 + "s";

        sparkleContainer.appendChild(spark);
    }
}

// ===============================
// Final Reveal
// ===============================

const yesBtn = document.getElementById("yesBtn");
const loveBtn = document.getElementById("loveBtn");
const finalMessage = document.getElementById("finalMessage");

function burstHearts() {

    for (let i = 0; i < 80; i++) {

        setTimeout(() => {

            const heart = document.createElement("div");

            heart.className = "heart";

            heart.innerHTML = Math.random() > 0.5 ? "💖" : "❤";

            heart.style.left = Math.random() * 100 + "vw";
            heart.style.fontSize = (18 + Math.random() * 25) + "px";
            heart.style.animationDuration = (3 + Math.random() * 2) + "s";

            heartsContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 5000);

        }, i * 35);

    }
}

function revealEnding() {

    burstHearts();

    document.querySelector(".container").style.boxShadow =
        "0 0 80px rgba(255,80,150,.6)";

    finalMessage.classList.add("show");

    yesBtn.disabled = true;
    loveBtn.disabled = true;

    yesBtn.textContent = "Forever ❤️";
    loveBtn.textContent = "Always 💕";

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}

yesBtn.addEventListener("click", revealEnding);
loveBtn.addEventListener("click", revealEnding);

// ===============================
// Gentle Fade In
// ===============================

document.body.animate(
    [
        { opacity: 0 },
        { opacity: 1 }
    ],
    {
        duration: 1000,
        easing: "ease"
    }
);
