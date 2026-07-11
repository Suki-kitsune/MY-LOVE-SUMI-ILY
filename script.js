// --------------------
// Falling Cherry Blossoms
// --------------------

const petals = document.getElementById("petals");

for (let i = 0; i < 35; i++) {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.fontSize = (18 + Math.random() * 14) + "px";

    petal.style.animationDuration = (8 + Math.random() * 6) + "s";

    petal.style.animationDelay = Math.random() * 5 + "s";

    petals.appendChild(petal);

}

// --------------------
// Pages
// --------------------

const home = document.getElementById("home");
const letter = document.getElementById("letter");
const gallery = document.getElementById("gallery");
const ending = document.getElementById("ending");

function showPage(page){

    document.querySelectorAll(".page").forEach(p=>{
        p.classList.remove("active");
    });

    page.classList.add("active");

}

// --------------------
// Buttons
// --------------------

document.getElementById("openLetter").onclick = () => {

    showPage(letter);

}

document.getElementById("nextGallery").onclick = () => {

    showPage(gallery);

}

document.getElementById("nextEnding").onclick = () => {

    showPage(ending);

}
