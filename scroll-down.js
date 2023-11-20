const scrollDiv = document.querySelector('.scroll');

function scrollByPixels(pixels) {
    scrollDiv.scrollTop += pixels;
}

setInterval(() => {
    const scrollAmount = 1;
    scrollByPixels(scrollAmount);
}, 135);

window.onload = () => {
    const initialScrollAmount = 0;
    scrollByPixels(initialScrollAmount);
};




const scrollWrapper = document.getElementById('scrollWrapper');
const images = document.querySelectorAll('.scroll-img');
let currentPosition = 0;

function moveImages() {
    currentPosition -= 1;
    scrollWrapper.style.transform = `translateX(${currentPosition}px)`;

    if (currentPosition <= -images[0].width) {
        currentPosition = 0;
    }

    requestAnimationFrame(moveImages);
}

moveImages();

const scrollWrapper1 = document.getElementById('scrollWrapper-1');
const images1 = document.querySelectorAll('.scroll-img-1');
let currentPosition1 = 0;

function moveImages1() {
    currentPosition1 -= 1;
    scrollWrapper1.style.transform = `translateX(${currentPosition1}px)`;

    if (currentPosition1 <= -images1[0].width) {
        currentPosition1 = 0;
    }

    requestAnimationFrame(moveImages1);
}

moveImages1();



