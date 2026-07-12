/* ==========================================
   Project Sumi V2
   script.js
   Part 1/4
========================================== */


// ==========================
// Mobile Menu
// ==========================

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {

    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("show");
    });


    document.querySelectorAll("#menu a").forEach(link => {

        link.addEventListener("click", () => {
            menu.classList.remove("show");
        });

    });

}


// ==========================
// Envelope Animation
// ==========================

const envelope = document.querySelector(".envelope");

if (envelope) {

    envelope.addEventListener("click", () => {

        envelope.classList.toggle("open");

    });

}


// ==========================
// Music Player
// ==========================

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let musicPlaying = false;


if (music && musicBtn) {

    musicBtn.addEventListener("click", () => {


        if (musicPlaying) {

            music.pause();

            musicBtn.innerHTML = "▶ Music";

            musicPlaying = false;


        } else {


            music.play()
            .then(() => {

                musicBtn.innerHTML = "⏸ Music";

                musicPlaying = true;

            })
            .catch(() => {

                alert("Tap again to play music ❤️");

            });


        }


    });


    music.addEventListener("pause", () => {

        musicPlaying = false;

        musicBtn.innerHTML = "▶ Music";

    });


    music.addEventListener("play", () => {

        musicPlaying = true;

        musicBtn.innerHTML = "⏸ Music";

    });

}


// ==========================
// Days Counter
// ==========================

const counter = document.getElementById("counter");


// CHANGE THIS DATE ❤️

const relationshipDate = new Date("2025-08-12");


function updateDays(){


    if (!counter) return;


    const today = new Date();


    const difference =
        today - relationshipDate;


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    counter.innerHTML =
        `❤️ ${days} days together ❤️`;


}


updateDays();

/* ==========================================
   Part 2/4
========================================== */


// ==========================
// Cherry Blossoms
// ==========================

const petalsContainer = document.getElementById("petals");


function createPetal(){


    if (!petalsContainer) return;


    const petal = document.createElement("div");


    petal.className = "petal";


    petal.style.left =
        Math.random() * 100 + "vw";


    petal.style.animationDuration =
        (5 + Math.random() * 6) + "s";


    petal.style.animationDelay =
        Math.random() * 2 + "s";


    petal.style.transform =
        `rotate(${Math.random()*360}deg)`;


    petalsContainer.appendChild(petal);



    setTimeout(() => {

        petal.remove();

    },12000);


}



setInterval(createPetal,400);



// ==========================
// Gallery Photo Viewer
// ==========================


const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewerImg");
const closeViewer = document.getElementById("closeViewer");



const galleryImages =
    document.querySelectorAll(".gallery img");



galleryImages.forEach(image => {


    image.addEventListener("click", () => {


        if (!viewer || !viewerImg) return;


        viewer.classList.add("show");


        viewerImg.src =
            image.src;


    });


});



if(closeViewer){

    closeViewer.addEventListener("click",()=>{

        viewer.classList.remove("show");

    });

}



if(viewer){

    viewer.addEventListener("click",(event)=>{


        if(event.target === viewer){

            viewer.classList.remove("show");

        }


    });

}



// Close viewer using keyboard

document.addEventListener("keydown",(event)=>{


    if(event.key === "Escape" && viewer){

        viewer.classList.remove("show");

    }


});



// ==========================
// Smooth Scroll
// ==========================


document.querySelectorAll("a[href^='#']")
.forEach(link => {


    link.addEventListener("click",(event)=>{


        const target =
            document.querySelector(
                link.getAttribute("href")
            );


        if(target){

            event.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });

        }


    });


});

/* ==========================================
   Part 3/4
========================================== */


// ==========================
// Love Popup Messages
// ==========================

const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");
const popupClose = document.getElementById("popupClose");


const messages = [

    "You are my favorite person ❤️",

    "Every day with you is special 🌸",

    "My little fox deserves all the happiness 🦊",

    "Thank you for being in my life ❤️",

    "You make normal days feel magical ✨",

    "I will always choose you 💕",

    "You are my safe place 🫶",

    "Forever sounds better with you ❤️"

];



function showLovePopup(customMessage){


    if(!popup || !popupText) return;


    popupText.innerHTML =
        customMessage ||
        messages[
            Math.floor(
                Math.random()*messages.length
            )
        ];


    popup.classList.add("show");


}



if(popupClose){

    popupClose.addEventListener("click",()=>{

        popup.classList.remove("show");

    });

}



// Show a random message sometimes

setTimeout(()=>{

    showLovePopup();

},5000);



setInterval(()=>{

    showLovePopup();

},60000);




// ==========================
// Heart Easter Egg
// ==========================


const heartEgg = document.getElementById("heartEgg");



function createHeart(){


    const heart =
        document.createElement("div");


    heart.className =
        "floating-heart";


    heart.innerHTML =
        "❤️";


    heart.style.left =
        Math.random()*100 + "vw";


    heart.style.bottom =
        "20px";


    heart.style.fontSize =
        (15 + Math.random()*25) + "px";


    document.body.appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },2500);


}



if(heartEgg){


    heartEgg.addEventListener("click",()=>{


        for(let i=0;i<20;i++){


            setTimeout(()=>{

                createHeart();

            },i*80);


        }


        showLovePopup(
            "You found my secret heart ❤️"
        );


    });


}



// ==========================
// Secret "SUMI" Keyboard Easter Egg
// ==========================


let secretCode = "";



document.addEventListener("keydown",(event)=>{


    secretCode +=
        event.key.toUpperCase();



    if(secretCode.length > 4){

        secretCode =
            secretCode.slice(-4);

    }



    if(secretCode === "SUMI"){



        for(let i=0;i<30;i++){


            setTimeout(()=>{

                createHeart();

            },i*60);


        }



        showLovePopup(
            "A secret message just for Sumi 🦊❤️"
        );


        secretCode = "";

    }


});

/* ==========================================
   Part 4/4
========================================== */


// ==========================
// Scroll Reveal Animation
// ==========================


const sections =
    document.querySelectorAll("section");


function revealSections(){


    sections.forEach(section=>{


        const position =
            section.getBoundingClientRect().top;


        const screen =
            window.innerHeight - 100;



        if(position < screen){

            section.style.opacity = "1";

            section.style.transform =
                "translateY(0)";

        }


    });


}



sections.forEach(section=>{


    section.style.opacity = "0";

    section.style.transform =
        "translateY(40px)";

    section.style.transition =
        "all .8s ease";


});



window.addEventListener(
    "scroll",
    revealSections
);


revealSections();




// ==========================
// Fox Surprise Easter Egg
// ==========================


let foxClicks = 0;


const title =
    document.querySelector("header h1");



if(title){


    title.addEventListener("click",()=>{


        foxClicks++;



        if(foxClicks >= 5){


            showLovePopup(
                "🦊 A little fox says: Sumi is loved forever ❤️"
            );



            for(let i=0;i<10;i++){


                setTimeout(()=>{

                    createHeart();

                },i*100);


            }



            foxClicks = 0;


        }


    });


}




// ==========================
// Better Mobile Handling
// ==========================


window.addEventListener("resize",()=>{


    if(window.innerWidth > 768 && menu){


        menu.classList.remove("show");


    }


});




// ==========================
// Prevent Image Context Menu
// ==========================


document.querySelectorAll(".gallery img")
.forEach(img=>{


    img.addEventListener(
        "contextmenu",
        event=>{
            event.preventDefault();
        }
    );


});




// ==========================
// Welcome Message
// ==========================


window.addEventListener("load",()=>{


    setTimeout(()=>{


        showLovePopup(
            "Welcome to our little world 🦊❤️"
        );


    },1500);


});



// ==========================
// Finished
// ==========================


console.log(
    "Project Sumi V2 loaded successfully ❤️🦊"
);
