let current = 0;
const slides = document.getElementById('slides');
const total = slides.children.length;

function changeSlide(direction) {
    current = (current + direction + total) % total;
    slides.style.transform = 'translateX(-' + (current * 100) + '%)';
}