// Title scroll effect for all pages
const originalTitle = document.title;
const awayTitle = "👋 Come back to J-Med!";
let scrollInterval;
let scrollIndex = 0;

function startScrollingTitle(text) {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        document.title = text.slice(scrollIndex) + " " + text.slice(0, scrollIndex);
        scrollIndex = (scrollIndex + 1) % text.length;
    }, 100);
}

document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        startScrollingTitle(awayTitle);
    } else {
        clearInterval(scrollInterval);
        document.title = originalTitle;
        scrollIndex = 0;
    }
});

// Header shrink on scroll for all pages
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 40) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});