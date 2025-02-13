const loveLetters = [
    "My dearest, under the moon’s embrace, I find solace in your presence...",
    "You are the darkness that soothes me, the shadow that completes my soul...",
    "Every whisper of the wind reminds me of the way your voice lingers in my mind..."
];

const poems = [
    "Roses are dead, violets are too, I long for eternity, just me and you.",
    "The night is dark, the candle burns, my love for you, forever yearns.",
    "Through shadows deep, my heart still calls, to you alone, my love enthralls."
];

function generateLoveLetter() {
    document.getElementById("loveLetter").innerText = loveLetters[Math.floor(Math.random() * loveLetters.length)];
}

function generatePoem() {
    document.getElementById("poem").innerText = poems[Math.floor(Math.random() * poems.length)];
}
