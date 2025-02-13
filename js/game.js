document.addEventListener("DOMContentLoaded", function() {
    let score = 0;
    let timeLeft = 30;
    const gameArea = document.getElementById("gameArea");

    function spawnHeart() {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 90 + "%";
        heart.style.top = Math.random() * 90 + "%";
        gameArea.appendChild(heart);

        heart.addEventListener("click", () => {
            score++;
            document.getElementById("score").innerText = `Score: ${score}`;
            heart.remove();
        });

        setTimeout(() => heart.remove(), 2000);
    }

    function startGame() {
        score = 0;
        timeLeft = 30;
        document.getElementById("score").innerText = `Score: 0`;
        document.getElementById("timeLeft").innerText = `Time Left: 30s`;

        let gameInterval = setInterval(spawnHeart, 500);
        let timerInterval = setInterval(() => {
            timeLeft--;
            document.getElementById("timeLeft").innerText = `Time Left: ${timeLeft}s`;
            if (timeLeft === 0) {
                clearInterval(gameInterval);
                clearInterval(timerInterval);
                alert(`Game over! You collected ${score} hearts.`);
            }
        }, 1000);
    }

    document.getElementById("startGame").addEventListener("click", startGame);
});
