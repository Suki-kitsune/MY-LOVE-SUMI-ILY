/* Project Sumi V2
   script.js
   Part 1
*/


// Menu

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");


menuBtn.onclick = () => {

    menu.classList.toggle("show");

};




// Envelope

const envelope = document.querySelector(".envelope");


envelope.onclick = () => {

    envelope.classList.toggle("open");

};




// Music

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");


let playing = false;


musicBtn.onclick = () => {


    if(playing){

        music.pause();

        musicBtn.innerHTML="🎵 Play Music";

        playing=false;


    }else{


        music.play();

        musicBtn.innerHTML="⏸ Pause Music";

        playing=true;


    }


};




// Days Counter

const counter =
document.getElementById("counter");


// Change this date

const startDate =
new Date("2025-08-12");



function updateCounter(){


const today=new Date();


const days=Math.floor(
(today-startDate)/
(1000*60*60*24)
);


counter.innerHTML =
`❤️ ${days} days together ❤️`;


}


updateCounter();




// Cherry Blossoms


const petals =
document.getElementById("petals");



function createPetal(){


const petal =
document.createElement("div");


petal.className="petal";


petal.style.left =
Math.random()*100+"vw";


petal.style.animationDuration =
(5+Math.random()*5)+"s";


petals.appendChild(petal);



setTimeout(()=>{

petal.remove();

},10000);


}



setInterval(createPetal,400);

/* Part 2 */


/* Gallery Viewer */

const viewer =
document.getElementById("viewer");

const viewerImg =
document.getElementById("viewerImg");

const closeViewer =
document.getElementById("closeViewer");



document.querySelectorAll(".gallery img")
.forEach(img=>{


img.onclick=()=>{


viewer.classList.add("show");

viewerImg.src =
img.src;


};


});



closeViewer.onclick=()=>{

viewer.classList.remove("show");

};



viewer.onclick=(e)=>{


if(e.target===viewer){

viewer.classList.remove("show");

}


};





/* Popup Messages */


const popup =
document.getElementById("popup");

const popupText =
document.getElementById("popupText");

const popupClose =
document.getElementById("popupClose");



const messages=[

"You're my favorite person ❤️",

"My little fox 🦊",

"Thank you for being in my life ❤️",

"You make my days better 🌸",

"Forever with you 💕",

"You are my happiness ❤️"

];



function showPopup(){


popupText.innerHTML =
messages[
Math.floor(Math.random()*messages.length)
];


popup.classList.add("show");


}



popupClose.onclick=()=>{

popup.classList.remove("show");

};






/* Heart Easter Egg */


const heart =
document.getElementById("heartEgg");



function createHeart(){


const h =
document.createElement("div");


h.className="floating-heart";


h.innerHTML="❤️";


h.style.left =
Math.random()*100+"vw";


document.body.appendChild(h);



setTimeout(()=>{

h.remove();

},2000);


}



heart.onclick=()=>{


for(let i=0;i<20;i++){


setTimeout(()=>{

createHeart();

},i*80);


}


showPopup();


};





/* Welcome message */


window.onload=()=>{


setTimeout(()=>{

showPopup();

},2000);


};



console.log(
"Project Sumi V2 loaded ❤️🦊"
);


