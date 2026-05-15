const words = [
    "CS Student",
    "Aspiring ML Engineer",
    "Math Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.getElementById("typing-text");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingText.textContent =
            currentWord.substring(0, charIndex--);
    } else {
        typingText.textContent =
            currentWord.substring(0, charIndex++);
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length + 1) {
        speed = 1500;
        isDeleting = true;
    }

    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();