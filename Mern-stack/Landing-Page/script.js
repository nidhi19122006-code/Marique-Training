const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀";
    } else {
        themeBtn.textContent = "☾";
    }

});




const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("mobile-menu");

});




const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("mobile-menu");

    });

});




const typingText = document.querySelector(".typing");

let isTyping = true;

function aiTypingAnimation() {

    if (isTyping) {

        typingText.style.opacity = "1";

        setTimeout(() => {
            typingText.style.opacity = "0.3";
        }, 700);

        setTimeout(() => {
            typingText.style.opacity = "1";
        }, 1400);

    }

}

setInterval(aiTypingAnimation, 1800);




const revealElements = document.querySelectorAll(
    ".feature-card, .step, .tool-card, .review-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});



const ctaButtons = document.querySelectorAll(
    ".primary-btn, .nav-btn, .tool-btn"
);

ctaButtons.forEach(button => {

    button.addEventListener("click", () => {

        console.log("StudyAI button clicked!");

    });

});




const aiInput = document.querySelector(".ai-input");
const aiInputButton = document.querySelector(".ai-input button");

aiInputButton.addEventListener("click", () => {

    const originalText = aiInput.querySelector("span");

    originalText.textContent = "Thinking...";

    setTimeout(() => {

        originalText.textContent =
            "Ask StudyAI anything...";

    }, 1500);

});


const footerText = document.querySelector(".footer-bottom p");

const currentYear = new Date().getFullYear();

footerText.textContent =
    `© ${currentYear} StudyAI. Built with HTML, CSS & JavaScript.`;
