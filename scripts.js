// Typewriter Effect
const words = [
    "CS @ UofT",
    "Software Engineer",
    "Mathematics Lover",
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


// Image Zoom
document.querySelectorAll('.poster-image img').forEach(img => {
    img.addEventListener('click', () => {
        img.classList.toggle('zoomed');
    });
});



// History Cards Functionality

const experienceButtons =
    document.querySelectorAll(".experience-btn");

const experienceCards =
    document.querySelectorAll(".experience-card");


experienceButtons.forEach(button => {
    button.addEventListener("click", () => {

        // Remove active state from all buttons
        experienceButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Remove active state from all cards
        experienceCards.forEach(card => {
            card.classList.remove("active");
        });

        // Activate clicked button
        button.classList.add("active");

        // Find which experience should be shown
        const target = button.dataset.target;

        const selectedCard =
            document.getElementById(target);

        // Show selected experience
        selectedCard.classList.add("active");
    });

});