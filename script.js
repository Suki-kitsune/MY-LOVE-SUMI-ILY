const music = document.getElementById("bgMusic");
music.volume = 0.35;

// --------------------
// Falling Cherry Blossoms
// --------------------

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

const envelope = document.getElementById("envelope");

if (envelope) {

    envelope.addEventListener("click", async () => {

        try {
            music.currentTime = 0;
            await music.play();
        } catch (err) {
            console.error("Music failed:", err);
        }

        envelope.classList.add("open");

        setTimeout(() => {
            showPage(letter);
        }, 1300);

    });

}

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
// HEART SECRET V2
// =========================================

const loveHeart = document.getElementById("loveHeart");
const secretPopup = document.getElementById("secretPopup");
const popupText = document.querySelector(".popupCard p");

let taps = 0;
let stage = 0;

const messages = [

`I'd choose you in every lifetime. ❤️`,

`You found it again... 🌸

I still love you just as much.`,

`😂 You're really trying to find every secret, aren't you?

Good... because I hid them just for you. ❤️`,

`Almost there...

One last secret remains. ✨`,

`🎉 Congratulations!

You found every hidden message.

No matter how many secrets this website has...

You'll always be my favorite one.

I love you.

— Tappu ❤️`

];

if(loveHeart){

    loveHeart.addEventListener("click",()=>{

        taps++;

        loveHeart.animate(

            [

                {transform:"scale(1)"},

                {transform:"scale(1.35)"},

                {transform:"scale(1)"}

            ],

            {

                duration:220

            }

        );

        if(taps===5){

            explodeHearts(loveHeart);

            taps=0;

            popupText.innerHTML = messages[Math.min(stage, messages.length-1)];

            secretPopup.classList.add("show");

            setTimeout(()=>{

                secretPopup.classList.remove("show");

            },4500);

            if(stage < messages.length-1){

                stage++;

            }

        }

    });

}


// =========================================
// HEART EXPLOSION
// =========================================

const heartLayer = document.getElementById("heartParticles");

function explodeHearts(element){

    const rect = element.getBoundingClientRect();

    const centerX = rect.left + rect.width/2;

    const centerY = rect.top + rect.height/2;

    for(let i=0;i<18;i++){

        const heart=document.createElement("div");

        heart.className="flyingHeart";

        heart.innerHTML="💖";

        heart.style.left=centerX+"px";

        heart.style.top=centerY+"px";

        heart.style.setProperty("--x",(Math.random()*240-120)+"px");

        heart.style.setProperty("--y",(Math.random()*-220)+"px");

        heartLayer.appendChild(heart);

        setTimeout(()=>heart.remove(),1300);

    }

}


// =========================================
// PHOTO VIEWER
// =========================================

const galleryImages = document.querySelectorAll(".gallery img");
const photoViewer = document.getElementById("photoViewer");
const viewerImage = document.getElementById("viewerImage");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        viewerImage.src = img.src;

        photoViewer.classList.add("show");

    });

});

photoViewer.addEventListener("click", () => {

    photoViewer.classList.remove("show");

});


// =========================================
// HAMBURGER MENU
// =========================================

const menuButton = document.getElementById("menuButton");
const menuPanel = document.getElementById("menuPanel");
const menuItems = document.querySelectorAll(".menuItem");


if(menuButton && menuPanel){

    menuButton.addEventListener("click",()=>{

        menuPanel.classList.toggle("show");

    });

}


// MENU PAGE SWITCHING

menuItems.forEach(item=>{

    item.addEventListener("click",()=>{

        const pageName = item.dataset.page;

        const targetPage = document.getElementById(pageName);

        if(targetPage){

            showPage(targetPage);

        }

        menuPanel.classList.remove("show");

    });

});

// =========================
// MUSIC BUTTON
// =========================

const musicToggle = document.getElementById("musicToggle");

musicToggle.addEventListener("click",()=>{

    if(music.paused){

        music.play();

        musicToggle.innerHTML="🎵";

    }else{

        music.pause();

        musicToggle.innerHTML="🔇";

    }

});
