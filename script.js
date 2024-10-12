let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex + direction + items.length) % items.length;
    const offset = -currentIndex * 100; 
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}
