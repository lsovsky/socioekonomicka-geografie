document.addEventListener("DOMContentLoaded", () => {

    // === 🔊 Zvuk kliknutí ===
    const clickSound = document.getElementById("click-sound");

    // звук при клике на обычные кнопки
    const buttons = document.querySelectorAll("button:not(.link-btn)");
    buttons.forEach((el) =>
        el.addEventListener("click", () => {
            if (!clickSound) return;
            clickSound.currentTime = 0;
            clickSound.play().catch(() => {});
        })
    );

    // звук при переходе по ссылке
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
        link.addEventListener("click", (event) => {
            if (!clickSound) return;

            event.preventDefault(); // блокируем мгновенный переход
            clickSound.currentTime = 0;
            clickSound.play().catch(() => {});

            // 🕒 добавляем ЗАДЕРЖКУ, чтобы звук успел проиграться
            setTimeout(() => {
                window.location.href = link.href;
            }, 300); // ← здесь регулируется длина (в мс)
        });
    });
});