const words = [
    "CS Student at UofT St.George",
    "Aspiring ML Engineer",
    "Mathematics Enthusiast"
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


const carousel = document.getElementById("projectCarousel");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let scrollAmount = 0;

nextBtn.addEventListener("click", () => {

    scrollAmount += 150;

    carousel.style.transform = `translateX(-${scrollAmount}px)`;
});

prevBtn.addEventListener("click", () => {

    scrollAmount -= 150;

    if (scrollAmount < 0) {
        scrollAmount = 0;
    }

    carousel.style.transform = `translateX(-${scrollAmount}px)`;
});