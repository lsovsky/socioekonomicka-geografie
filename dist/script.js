"use strict";
const button = document.getElementById("btn");
const output = document.getElementById("output");
let clicks = 0;
button.addEventListener("click", () => {
    clicks++;
    output.textContent = `Ты нажал ${clicks} раз(а)!`;
    const randomColor = `hsl(${Math.random() * 360}, 80%, 80%)`;
    document.body.style.backgroundColor = randomColor;
});
