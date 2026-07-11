const body = document.body;

for (let i = 0; i < 40; i++) {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.fontSize = (18 + Math.random() * 18) + "px";

    petal.style.animationDuration = (8 + Math.random() * 6) + "s";

    petal.style.animationDelay = Math.random() * 5 + "s";

    body.appendChild(petal);

}

document.getElementById("openBtn").onclick = function () {

    alert("The love letter page is coming next ❤️");

};
