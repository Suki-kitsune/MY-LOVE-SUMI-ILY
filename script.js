const body=document.body;

for(let i=0;i<35;i++){

let heart=document.createElement("div");

heart.innerHTML="♡";

heart.className="heart";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.animationDuration=(6+Math.random()*6)+"s";

heart.style.animationDelay=Math.random()*5+"s";

body.appendChild(heart);

}

document.getElementById("openBtn").onclick=function(){

alert("The love letter page is coming next ❤️");

};
