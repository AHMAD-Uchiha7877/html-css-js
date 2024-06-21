let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;

const showSlider = (type) => {
    // Disable button clicks to prevent rapid consecutive clicks
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    // Remove any existing 'next' or 'prev' class from the carousel
    carousel.classList.remove('next', 'prev');

    // Select all carousel items
    let items = document.querySelectorAll('.carousel .list .item');

    // If the type is 'next', move the first item to the end of the list and add 'next' class to carousel
    if (type === 'next') {
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    } else {
        // If the type is 'prev', move the last item to the beginning of the list and add 'prev' class to carousel
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }

    // Clear any existing timeout and set a new timeout to re-enable button clicks after 2 seconds
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(() => {
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000);
}

seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    }
});
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
}