// =========================================
// CHERRY BLOSSOMS
// =========================================

const petals = document.getElementById("petals");

for(let i=0;i<35;i++){

    const petal=document.createElement("div");

    petal.className="petal";

    petal.innerHTML="🌸";

    petal.style.left=Math.random()*100+"vw";

    petal.style.fontSize=(18+Math.random()*14)+"px";

    petal.style.animationDuration=(8+Math.random()*6)+"s";

    petal.style.animationDelay=Math.random()*5+"s";

    petals.appendChild(petal);

}

// =========================================
// PAGES
// =========================================

const letter=document.getElementById("letter");
const gallery=document.getElementById("gallery");
const ending=document.getElementById("ending");

function showPage(page){

    document.querySelectorAll(".page").forEach(p=>{

        p.classList.remove("active");

    });

    page.classList.add("active");

}

// =========================================
// ENVELOPE
// =========================================

const envelope=document.getElementById("envelope");

envelope.addEventListener("click",()=>{

    envelope.classList.add("open");

    setTimeout(()=>{

        showPage(letter);

    },1300);

});

// =========================================
// BUTTONS
// =========================================

document.getElementById("nextGallery").onclick=()=>{

    showPage(gallery);

}

document.getElementById("nextEnding").onclick=()=>{

    showPage(ending);

}

// =========================================
// DAYS TOGETHER COUNTER
// =========================================

const startDate = new Date("2026-06-21");

const today = new Date();

const diff = today - startDate;

const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));

const counter = document.getElementById("daysTogether");

if(counter){

    let current = 0;

    const animation = setInterval(()=>{

        current++;

        counter.innerHTML = `🌸 ${current} Days Together 🌸`;

        if(current >= days){

            clearInterval(animation);

        }

    },40);

}

// =========================================
// HEART SECRET
// =========================================

const loveHeart = document.getElementById("loveHeart");
const secretPopup = document.getElementById("secretPopup");

let taps = 0;

if(loveHeart){

    loveHeart.addEventListener("click",()=>{

        taps++;

        loveHeart.animate(

            [

                {transform:"scale(1)"},

                {transform:"scale(1.5)"},

                {transform:"scale(1)"}

            ],

            {

                duration:250

            }

        );

        if(taps===5){

            taps=0;

            secretPopup.classList.add("show");

            setTimeout(()=>{

                secretPopup.classList.remove("show");

            },4000);

        }

    });

}
