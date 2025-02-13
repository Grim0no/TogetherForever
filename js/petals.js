document.addEventListener("DOMContentLoaded", function () {
    function createPetal() {
        let petal = document.createElement("div");
        petal.classList.add("falling-petal");
        petal.style.left = Math.random() * 100 + "vw"; // Random horizontal position
        petal.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random fall speed
        document.body.appendChild(petal);

        // Remove petal after falling
        setTimeout(() => petal.remove(), 5000);
    }

    // Generate a petal every 500ms
    setInterval(createPetal, 500);
});
