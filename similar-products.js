let slideIndex = 0;

document.querySelector('.next').addEventListener('click', () => {
    moveSlide(1);
});

document.querySelector('.prev').addEventListener('click', () => {
    moveSlide(-1);
});

function moveSlide(direction) {
    const wrapper = document.querySelector('.similar-products');
    const totalSlides = document.querySelectorAll('.product-2').length;
    const visibleSlides = 3;

    slideIndex += direction;
    
    if (slideIndex < 0) {
        slideIndex = totalSlides - visibleSlides;
    } else if (slideIndex >= totalSlides - visibleSlides + 1) {
        slideIndex = 0;
    }

    const slideWidth = wrapper.querySelector('.product-2').clientWidth;
    wrapper.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}