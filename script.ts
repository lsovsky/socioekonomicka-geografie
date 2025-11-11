const button = document.getElementById("btn") as HTMLButtonElement;
const output = document.getElementById("output") as HTMLParagraphElement;

let clicks = 0;

button.addEventListener("click", () => {
    clicks++;
    output.textContent = `Ты нажал ${clicks} раз(а)!`;

    const randomColor = `hsl(${Math.random() * 360}, 80%, 80%)`;
    document.body.style.backgroundColor = randomColor;
});

