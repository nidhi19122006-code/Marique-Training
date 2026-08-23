const menuBtn = document.querySelector("#menuBtn");
const fixedMenu = document.querySelector(".fixed-menu");

menuBtn.addEventListener("click", () => {
    const isOpen = fixedMenu.style.top === "0px";
  fixedMenu.style.top = isOpen ? "-100%" : "0px";

});

const box = document.querySelector(".cursor-box")
const pointer = document.querySelector(".pointer")

document.querySelector(".hero").addEventListener("mousemove",(e)=>{
  box.style.left = e.clientX + "px"
  box.style.top = e.clientY + "px"
  box.style.transition = "linear 0.3s"
  box.style.visibility = "visible"
//   pointer.style.visibility = "hidden"
})

document.querySelector(".hero").addEventListener("mouseleave",(e)=>{
    pointer.style.visibility = "visible"

})

document.querySelector(".hero").addEventListener("mouseleave",(e)=>{
  box.style.visibility = "hidden"
  pointer.style.visibility = "visible"
  // pointer.style.left = e.clientX + "px"
  // pointer.style.top = e.clientY + "px"
})


window.addEventListener("mousemove",(e)=>{
  pointer.style.left = e.clientX + "px"
  pointer.style.top = e.clientY + "px"
  pointer.style.transition = "linear 0.1s"
  pointer.style.transform = "translate(-50%,-50%)"
})

document.querySelector(".videoshell").addEventListener("mousemove",(e)=>{
    pointer.style.visibility = "hidden"
})
document.querySelector(".videoshell").addEventListener("mouseleave",(e)=>{
    pointer.style.visibility = "visible"
})


// const rotation = [-7, 7, -9, 9];
// const triggers = document.querySelectorAll(".hover-trigger");

// triggers.forEach((trigger) => {
//     const cards = trigger.querySelectorAll(".stack-card");
//     trigger.addEventListener("mouseenter", () => {
//         cards.forEach((card, idx) => {
//             card.classList.add("show");
//             card.style.transform =`rotate(${rotation[idx]}deg)`;
//         });
//     });

//     trigger.addEventListener("mouseleave", () => {
//         cards.forEach((card) => {
//             card.classList.remove("show");
//             card.style.transform = "";
        
//         });
//     });
// });
const triggers = document.querySelectorAll(".hover-trigger");
triggers.forEach((trigger) => {
    const cards = trigger.querySelectorAll(".stack-card");
    let current = 0;
    let interval;
    function showNextImage() {
        cards.forEach((card) => {
            card.classList.remove("show");
        });
        cards[current].classList.add("show");
        current++;
        if (current >= cards.length) {
            current = 0;
        }
    }

    trigger.addEventListener("mouseenter", () => {
        current = 0;
        showNextImage();
        interval = setInterval(() => {
            showNextImage();
        }, 400);

    });

    trigger.addEventListener("mouseleave", () => {

        clearInterval(interval);

        cards.forEach((card) => {
            card.classList.remove("show");
        });

        current = 0;

    });

});

const playground = document.querySelector(".playground-word");
const portfolio = document.querySelector(".portfolio-cursor");

playground.addEventListener("mouseenter", () => {
    portfolio.style.opacity = "1";
});
playground.addEventListener("mousemove", (e) => {

    const rect = playground.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    portfolio.style.left = x + "px";
    portfolio.style.top = y + "px";

});

playground.addEventListener("mouseleave", () => {
    portfolio.style.opacity = "0";
});

// ==================== PROJECT INTERACTION ====================

// ==================== PROJECT HOVER ====================

const projects = document.querySelectorAll(".project-card");

projects.forEach((project) => {

    const video = project.querySelector("video");
    const button = project.querySelector(".project-button");

    project.addEventListener("mouseenter", () => {

        video.play();

        button.style.opacity = "1";

    });

    project.addEventListener("mousemove", (e) => {

        const rect = project.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        button.style.left = x + "px";
        button.style.top = y + "px";

    });

    project.addEventListener("mouseleave", () => {

        video.pause();
        video.currentTime = 0;

        button.style.opacity = "0";

    });

});


// let namma = document.querySelector("#namma");

// window.addEventListener("scroll", function () {

//     let scroll = window.scrollY;

//     let size = 300 + scroll * 0.15;

//     if (size > 500) {
//         size = 500;
//     }

//     namma.style.fontSize = size + "px";

// });