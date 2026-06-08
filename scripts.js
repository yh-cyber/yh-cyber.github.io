// Typewriter Effect
const words = [
    "CS Student at UofT St.George",
    "Aspiring ML Engineer",
    "Mathematics Enthusiast",
    "Coffee Addict"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.getElementById("typing-text");

function typeEffect() {
    if (!typingText) return;

    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex--);
    } else {
        typingText.textContent = currentWord.substring(0, charIndex++);
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length + 1) {
        speed = 1500;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

if (typingText) {
    typeEffect();
}


// Carousel Functionality
function setupCarousel(carouselId, nextId, prevId) {

    const carousel = document.getElementById(carouselId);
    const nextBtn = document.getElementById(nextId);
    const prevBtn = document.getElementById(prevId);

    if (!carousel || !nextBtn || !prevBtn) {
        return;
    }

    let scrollAmount = 0;

    nextBtn.addEventListener("click", () => {

        const maxScroll =
            carousel.scrollWidth -
            carousel.parentElement.clientWidth;

        scrollAmount += 150;

        if (scrollAmount > maxScroll) {
            scrollAmount = maxScroll;
        }

        carousel.style.transform =
            `translateX(-${scrollAmount}px)`;
    });

    prevBtn.addEventListener("click", () => {

        scrollAmount -= 150;

        if (scrollAmount < 0) {
            scrollAmount = 0;
        }

        carousel.style.transform =
            `translateX(-${scrollAmount}px)`;
    });
}

setupCarousel(
    "csprojectCarousel",
    "nextBtn1",
    "prevBtn1"
);

setupCarousel(
    "passionprojectCarousel",
    "nextBtn2",
    "prevBtn2"
);


// Essay Pages
const pages = document.querySelectorAll(".paper-page");
const nextPage = document.getElementById("nextPage");
const prevPage = document.getElementById("prevPage");
const pageIndicator = document.getElementById("pageIndicator");

if (pages.length > 0 && nextPage && prevPage && pageIndicator) {
    let currentPage = 0;

    function showPage(index) {
        pages.forEach(page => {
            page.classList.remove("active");
        });
        pages[index].classList.add("active");
        pageIndicator.textContent = `${index + 1} / ${pages.length}`;
    }

    nextPage.addEventListener("click", () => {
        if (currentPage < pages.length - 1) {
            currentPage++;
            showPage(currentPage);
        }
    });

    prevPage.addEventListener("click", () => {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    });

    showPage(0);
}