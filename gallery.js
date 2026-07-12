// Falling Petals

function createPetal(){

    const petal=document.createElement("div");

    petal.className="petal";

    petal.innerHTML="🌸";

    petal.style.left=Math.random()*100+"vw";

    petal.style.fontSize=(18+Math.random()*18)+"px";

    petal.style.animationDuration=(4+Math.random()*5)+"s";

    document.querySelector(".petals").appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },9000);

}

setInterval(createPetal,350);


// Photo Animation

const photos=document.querySelectorAll(".photo");

photos.forEach((photo,index)=>{

    setTimeout(()=>{

        photo.classList.add("show");

    },index*350);

});


// Next Button

const next=document.getElementById("nextBtn");

next.onclick=()=>{

    alert("Our final surprise page is coming next ❤️");

};
