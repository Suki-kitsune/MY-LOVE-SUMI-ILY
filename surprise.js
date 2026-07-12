// =========================
// Typewriter
// =========================

const message = `Hi Sumi ❤️

If you've reached this page...

It means you've seen every little surprise I made for you.

I know this website isn't perfect...

But every line of code,
every animation,
and every tiny detail...

was made with you in my heart.

From your fox,
to my favorite fox... 🦊❤️

Thank you for existing.

`;

const typing = document.getElementById("typing");

let i = 0;

function typeWriter() {

    if (i < message.length) {

        typing.textContent += message.charAt(i);

        i++;

        setTimeout(typeWriter, 40);

    }

}

typeWriter();


// =========================
// Floating Hearts
// =========================

const hearts = document.querySelector(".hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = Math.random() > 0.5 ? "❤️" : "🩷";

    heart.style.left = Math.random()*100+"vw";

    heart.style.fontSize = (16+Math.random()*18)+"px";

    heart.style.animationDuration = (5+Math.random()*5)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,450);


// =========================
// Reveal Final Card
// =========================

const btn = document.getElementById("loveBtn");
const card = document.getElementById("finalCard");

btn.addEventListener("click",()=>{

    card.classList.add("show");

    btn.textContent="Forever ❤️";

    burst();

    window.scrollTo({

        top:document.body.scrollHeight,

        behavior:"smooth"

    });

});


// =========================
// Heart Burst
// =========================

function burst(){

    for(let i=0;i<60;i++){

        setTimeout(()=>{

            const heart=document.createElement("div");

            heart.className="heart";

            heart.innerHTML=Math.random()>0.5?"❤️":"🦊";

            heart.style.left=Math.random()*100+"vw";

            heart.style.fontSize=(20+Math.random()*25)+"px";

            heart.style.animationDuration=(3+Math.random()*2)+"s";

            hearts.appendChild(heart);

            setTimeout(()=>{

                heart.remove();

            },5000);

        },i*25);

    }

}
