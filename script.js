function scrollleft() {
    const scroller = document.querySelector('.media-scroller');
    scroller.scrollBy({ left: -scroller.offsetWidth, behavior: 'smooth' });
}

function scrollRight() {
    const scroller = document.querySelector('.media-scroller');
    scroller.scrollBy({ left: scroller.offsetWidth, behavior: 'smooth' });
}