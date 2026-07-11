// Create falling cherry blossom petals
const petalsContainer = document.getElementById("petals");

for (let i = 0; i < 35; i++) {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.fontSize = (18 + Math.random() * 14) + "px";

    petal.style.animationDuration = (8 + Math.random() * 6) + "s";

    petal.style.animationDelay = Math.random() * 5 + "s";

    petalsContainer.appendChild(petal);
}

// Welcome -> Letter
const openBtn = document.getElementById("openBtn");

if (openBtn) {

    openBtn.addEventListener("click", () => {

        document.getElementById("welcome").classList.add("hidden");

        setTimeout(() => {

            document.getElementById("letter").classList.remove("hidden");

        }, 500);

    });

}
