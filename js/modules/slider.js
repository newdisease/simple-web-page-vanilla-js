function getZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function slider({
    container,
    nextArrow,
    prevArrow,
    currentCounter,
    wrapper,
    field,
    slide
}) {
    const slides = document.querySelectorAll(slide),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        current = document.querySelector(currentCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width,
        slider = document.querySelector(container);

    let slideIndex = 1;
    let offset = 0;

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
        dots = [];

    indicators.classList.add('carousel-indicators');

    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    }`;

    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
        box-sizing: content-box;
        flex: 0 1 auto;
        width: 30px;
        height: 6px;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
        background-color: #fff;
        background-clip: padding-box;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        opacity: .5;
        transition: opacity .6s ease;
        }`;

        if (i == 0) {
            dot.style.opacity = 1;
        } else {
            dot.style.opacity = 0.5;
        }

        indicators.append(dot);
    }

    const dotsArray = document.querySelectorAll('.carousel-indicators > li');

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        dotsArray.forEach((item) => item.style.opacity = 0.5);

        slides[slideIndex - 1].style.display = 'block';
        dotsArray[slideIndex - 1].style.opacity = 1;
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', () => {
        plusSlides(-1);
        current.textContent = getZero(slideIndex)
    });

    next.addEventListener('click', () => {
        plusSlides(1);
        current.textContent = getZero(slideIndex)
    });

    dotsArray.forEach((item) => {
        item.addEventListener('click', () => {
            currentSlide(item.getAttribute('data-slide-to'));
            current.textContent = getZero(slideIndex)
        });
    });

    slides.forEach(slide => {
        slide.style.width = width;
    });

}

export default slider;
export {
    getZero
};