// =========================================
// CHERRY BLOSSOMS
// =========================================

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

// =========================================
// PAGES
// =========================================

const home = document.getElementById("home");
const letter = document.getElementById("letter");
const gallery = document.getElementById("gallery");
const ending = document.getElementById("ending");

// =========================================
// PAGE TRANSITION
// =========================================

function showPage(nextPage){

    const currentPage = document.querySelector(".page.active");

    if(currentPage === nextPage) return;

    currentPage.style.opacity = "0";
    currentPage.style.transform = "translateY(25px)";

    setTimeout(()=>{

        currentPage.classList.remove("active");

        currentPage.style.opacity = "";
        currentPage.style.transform = "";

        nextPage.classList.add("active");

        nextPage.style.opacity = "0";
        nextPage.style.transform = "translateY(25px)";

        requestAnimationFrame(()=>{

            nextPage.style.transition = "all .55s ease";

            nextPage.style.opacity = "1";
            nextPage.style.transform = "translateY(0)";

        });

    },250);

}

// =========================================
// BUTTONS
// =========================================

document.getElementById("openLetter").addEventListener("click",()=>{

    showPage(letter);

});

document.getElementById("nextGallery").addEventListener("click",()=>{

    showPage(gallery);

});

document.getElementById("nextEnding").addEventListener("click",()=>{

    showPage(ending);

});

// =========================================
// BUTTON RIPPLE EFFECT
// =========================================

document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("click",()=>{

        button.animate(

            [

                {transform:"scale(1)"},

                {transform:"scale(.92)"},

                {transform:"scale(1.05)"},

                {transform:"scale(1)"}

            ],

            {

                duration:350

            }

        );

    });

});
