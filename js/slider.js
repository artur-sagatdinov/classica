const slider = document.querySelector(".slider");
const sliderLine = document.querySelector(".slider-line");
const nextButton = document.querySelector(".slider-next");
const prevButton = document.querySelector(".slider-prev");
const card = document.querySelectorAll(".card");

let currentPosition = 0;
let AdapSize = 3;

const numberOfCards = card.length;
function init() {
    const height = sliderLine.offsetHeight;
    slider.style.minHeight = height + "px";
    if (window.innerWidth <= 768) {
        AdapSize = 1;
    } else {
        AdapSize = 3;
    }

    if (currentPosition > numberOfCards - AdapSize) {
        currentPosition = numberOfCards - AdapSize;
        sliderLine.style.transform = `translateX(-${currentPosition * 400}px)`;
    }
}
init();
window.addEventListener("resize", init);

nextButton.addEventListener("click", () => {
    if (currentPosition < numberOfCards - AdapSize) {
        currentPosition++;
        sliderLine.style.transform = `translateX(-${currentPosition * 400}px)`;
    } else {
        currentPosition = 0;
        sliderLine.style.transform = `translateX(-${currentPosition * 400}px)`;
    }
});

prevButton.addEventListener("click", () => {
    if (currentPosition > 0) {
        currentPosition--;
        sliderLine.style.transform = `translateX(-${currentPosition * 400}px)`;
    } else {
        currentPosition = numberOfCards - AdapSize;
        sliderLine.style.transform = `translateX(-${currentPosition * 400}px)`;
    }
});
