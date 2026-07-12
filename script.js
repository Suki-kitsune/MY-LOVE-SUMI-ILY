const envelope = document.getElementById("envelope");

envelope.onclick = () => {

envelope.classList.add("open");

setTimeout(()=>{

document.body.style.transition="1s";

document.body.style.opacity="0";

setTimeout(()=>{

window.location.href="letter.html";

},1000);

},1400);

};


function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=4+Math.random()*5+"s";

petal.style.fontSize=18+Math.random()*18+"px";

document.querySelector(".petals").appendChild(petal);

setTimeout(()=>{

petal.remove();

},9000);

}

setInterval(createPetal,350);
