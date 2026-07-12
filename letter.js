// Next Button
const nextBtn = document.getElementById("nextBtn");

if(nextBtn){

    nextBtn.onclick = () => {

        document.body.style.transition = "0.8s";
        document.body.style.opacity = "0";

        setTimeout(() => {

            window.location.href = "gallery.html";

        },800);

    };

}


// Falling Petals

function createPetal(){

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left = Math.random()*100 + "vw";

    petal.style.fontSize = (18 + Math.random()*18) + "px";

    petal.style.animationDuration = (4 + Math.random()*5) + "s";

    document.querySelector(".petals").appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },9000);

}

setInterval(createPetal,350);
