document.addEventListener("DOMContentLoaded", function() {
    const easyWords = ["love", "dark", "forever"];
    const mediumWords = ["passion", "obsession", "whisper"];
    const hardWords = ["eternity", "moonlight", "sacrifice"];

    function getRandomWord(level) {
        if (level === "easy") return easyWords[Math.floor(Math.random() * easyWords.length)];
        if (level === "medium") return mediumWords[Math.floor(Math.random() * mediumWords.length)];
        return hardWords[Math.floor(Math.random() * hardWords.length)];
    }

    function generateCrossword(level) {
        document.getElementById("word").innerText = getRandomWord(level);
        let timer = level === "easy" ? 60 : level === "medium" ? 45 : 30; 
        document.getElementById("timer").innerText = `Time left: ${timer} sec`;

        let interval = setInterval(() => {
            timer--;
            document.getElementById("timer").innerText = `Time left: ${timer} sec`;
            if (timer === 0) {
                clearInterval(interval);
                alert("Time's up! Try again.");
            }
        }, 1000);
    }

    document.getElementById("startEasy").addEventListener("click", () => generateCrossword("easy"));
    document.getElementById("startMedium").addEventListener("click", () => generateCrossword("medium"));
    document.getElementById("startHard").addEventListener("click", () => generateCrossword("hard"));
});
